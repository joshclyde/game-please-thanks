import { getProduct } from "../utils/database";

const execute = async () => {
  const product = await getProduct(`C125W9BG2K0V`);
  console.log(JSON.stringify(product));
};

execute();
