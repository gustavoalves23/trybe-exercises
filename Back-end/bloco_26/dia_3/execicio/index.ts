import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import read from './Utils/Read';
import Product from './Interfaces/Product';
import validateProduct from './Middlewares/validateProduct';
import write from './Utils/Write';

const app = express();

app.use(bodyParser.json());

app.get('/', async (_req: Request, res:Response) => {
  const Products = await read();
  if (!Products) return res.status(404).send('NOT_FOUND');
  res.status(200).json(Products);
});

app.get('/byprice', async (req: Request, res: Response) => {
  const {min, max} = req.query;
  const Products: Product[] = await read();
  const filteredItens = Products.filter((product) => (product.preco >= Number(min)) && (product.preco <= Number(max)));
  res.status(200).json(filteredItens);
})

app.get('/validade', async (req: Request, res: Response) => {
  const Products: Product[] = await read();
  const filteredItens = Products.filter((product) => {
    const validate = new Date(product.validade);
    const now = new Date();
    return validate > now;
  });  
  res.status(200).json(filteredItens);
})

app.get('/:id', async (req: Request, res:Response) => {
  const {id} = req.params;
  const Products: Product[] = await read();
  if (!Products) return res.status(404).send('NOT_FOUND');
  const condition = (product:Product) => product.id === Number(id);
  if (Products.some(condition)) {
    const product = Products.find(condition);
    return res.status(200).json(product);
  }
  return res.status(404).send('NOT_FOUND');
});

app.post('/', validateProduct, async (req: Request, res: Response) => {
  const Products: Product[] = await read();
  const id = Products.length + 1;
  const newProduct = req.body;
  const newList = [...Products, {...newProduct, id: String(id)}];
  try {
    await write(newList);
    return res.status(200).json({...newProduct, id: String(id)});
  } catch {
    return res.status(500).send('INTERNAL_ERROR');
  }
});

app.put('/:id', validateProduct, async (req: Request, res: Response) => {
  const {id} = req.params;
  const Products: Product[] = await read();
  const condition = (product:Product) => product.id === Number(id);
  if (Products.some(condition)) {
    const product: any = Products.find(condition);
    const newList = Products.filter((product:Product) => product.id !== Number(id));
    await write([...newList, {...req.body, id,}]);
    return res.status(200).json({...product, id,});
  }
  return res.status(404).send('NOT_FOUND');
})

app.delete('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  const Products: Product[] = await read();
  const condition = (product:Product) => product.id === Number(id);
console.log(Products.some(condition));
  if (Products.some(condition)) {
    const product: any = Products.find(condition);
    console.log(product);
    const newList = Products.filter((product:Product) => product.id !== Number(id));
    await write(newList);
    return res.status(200).json({...product, id,});
  }
  return res.status(404).send('NOT_FOUND');
})



app.listen(3000, () => console.log('Ouvindo na porta 3000'));