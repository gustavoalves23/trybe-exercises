const func = (par1, par2, par3) => {
    return new Promise((resolve, reject) => {
        if ([par1, par2, par3].some((par) => typeof(par) !== "number" )) {
            reject("Informe apenas números")
        } else {
            const calc = (par1 + par2) * par3;
            if (calc < 50) {
                reject("Valor muito baixo")
            } else {
                resolve(calc)
            }
        }
    })
}

func(Math.floor(Math.random() * 100 + 1),
 Math.floor(Math.random() * 100 + 1),
 Math.floor(Math.random() * 100 + 1))
 .then(value => console.log(value))
 .catch((e) => console.log(e))

 const runFunc = async () => {
    try {
        const result = await func(Math.floor(Math.random() * 100 + 1),
        Math.floor(Math.random() * 100 + 1),
        Math.floor(Math.random() * 100 + 1))
   
        console.log(result);
    } catch(e) {
        console.log(e.message);
    }
 }