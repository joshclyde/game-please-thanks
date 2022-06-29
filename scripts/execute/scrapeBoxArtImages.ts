import { read } from "jimp";

import { MicrosoftProduct } from "../types";
import { getGames, getMicrosoftProducts } from "../utils/database";
import { execConcurrentPromises } from "../utils/execConcurrentPromises";
import { getImageUrl } from "../utils/product";

const downloadMicrosoftImage = async (product: MicrosoftProduct) => {
  const id = product.ProductId;
  const imageUrl = getImageUrl(product, `BoxArt`);
  if (imageUrl && imageUrl.length > 12) {
    try {
      const image = await read(imageUrl);
      image.write(`./scripts/data/productBoxArtImage/${id}.jpeg`);
      console.log(`SUCCESS ${id}`);
    } catch (error) {
      console.log(`Failed ${id}\nUrl: ${imageUrl}`);
    }
  } else {
    console.log(`Bad ${id}\nUrl: ${imageUrl}`);
  }
};

const execute = async () => {
  const gameIds = Object.keys(await getGames());
  const products = await getMicrosoftProducts(gameIds);

  const promises: Array<() => Promise<void>> = [];
  Object.values(products).forEach((product) => {
    const imageUrl = getImageUrl(product, `BoxArt`);
    if (!imageUrl) {
      console.log(`None for ${product.ProductId}`);
    } else {
      promises.push(() => downloadMicrosoftImage(product));
    }
  });

  execConcurrentPromises(promises, 10);
};

execute();
