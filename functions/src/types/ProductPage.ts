import { readFile, readdir } from "fs-extra";

export class ProductPage {
  productIdsPAL: Array<string>;

  static fromData(productId: string, data: any): ProductPage | null {
    let foo = data.split(`window.__PRELOADED_STATE__ = `)[1].split(`window.env = `)[0];
    foo = foo.slice(0, foo.length - 14);
    foo = JSON.parse(foo);
    // Not all games have PAL games on their product page
    if (!foo.core2.channels[`PAL_${productId}`]) {
      console.log(`No PAL for ${[productId]}`);
      return null;
    }
    return new this(
      foo.core2.channels[`PAL_${productId}`].products.map(
        (x: { productId: string }) => x.productId,
      ),
    );
  }

  static async fromProductId(productId: string) {
    const data = await readFile(`./scripts/data/productPages/${productId}.html`, `utf8`);
    return this.fromData(productId, data);
  }

  static async all() {
    const files = await readdir(`./scripts/data/productPages`);
    const productIds = files.map((value) => value.replace(`.html`, ``));
    const pages: Record<string, ProductPage> = {};
    for (const productId of productIds) {
      const page = await this.fromProductId(productId);
      if (page) {
        pages[productId] = page;
      }
    }
    return pages;
  }

  constructor(productIdsPAL: Array<string>) {
    this.productIdsPAL = productIdsPAL;
  }
}
