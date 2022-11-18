const container: HTMLElement | any = document.getElementById('app');
const pokemons: number = 100;

interface Ipokemon {
  id: number;
  name: string;
  image: string;
  type: string;
}

const fetchData = (): void => {
  for (let i = 1; i <= pokemons; i++) {
    getPokemon(i);
  }
};

const getPokemon = async (id: number): Promise<void> => {
  const data: Response = await fetch(``);
};
