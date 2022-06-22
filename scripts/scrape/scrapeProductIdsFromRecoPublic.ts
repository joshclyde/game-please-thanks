import axios from "axios";

import { RecoPublicResponse } from "../types";
import { addToMegaList } from "../utils/database";

// Max of 200 at a time
const makeUrl = (category: string, skipItems: number) =>
  `https://reco-public.rec.mp.microsoft.com/channels/Reco/V8.0/Lists/Computed/${category}?Market=us&Language=en&ItemTypes=Game&deviceFamily=Windows.Xbox&count=2000&skipitems=${skipItems}`;

const NUMBER_OF_GAMES_PER_REQUEST = 200;
const scrapeRecoPublicData = async (
  category: string,
  skipItems = 0,
): Promise<Array<string>> => {
  const response = await axios.get<RecoPublicResponse>(makeUrl(category, skipItems));
  let productIds = response.data.Items.map((item) => item.Id);
  if (skipItems + NUMBER_OF_GAMES_PER_REQUEST < response.data.PagingInfo.TotalItems) {
    const moreProductIds = await scrapeRecoPublicData(
      category,
      skipItems + NUMBER_OF_GAMES_PER_REQUEST,
    );
    productIds = [...productIds, ...moreProductIds];
  }
  return productIds;
};

export const scrapeProductIdsFromRecoPublic = async () => {
  const productIds = [
    ...(await scrapeRecoPublicData(`TopPaid`)),
    ...(await scrapeRecoPublicData(`TopFree`)),
    ...(await scrapeRecoPublicData(`New`)),
    ...(await scrapeRecoPublicData(`BestRated`)),
    ...(await scrapeRecoPublicData(`ComingSoon`)),
    ...(await scrapeRecoPublicData(`Deal`)),
    ...(await scrapeRecoPublicData(`MostPlayed`)),
  ];
  await addToMegaList(productIds);
};
