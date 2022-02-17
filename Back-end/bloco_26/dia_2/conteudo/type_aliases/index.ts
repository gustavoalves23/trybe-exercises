type bird = {
  wings:number;
  beaks: 1;
  biped: true;
}

type sum = (x:number, y:number) => number;

type Address = {
  publicPlace: string;
  number: number;
  district: string;
  city: string;
  state: string;
}

//Type Unions

type physical_states = 'líquido' | 'sólido' | 'gasoso';

type cpf = number | string;

type os = 'mac os' | 'windows' | 'linux';

type vogals = 'a' | 'e' | 'i' | 'o' | 'u';
