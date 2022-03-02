export interface RecoPublicResponse {
  Id: string;
  Name: string;
  Version: string;
  ContinuationToken: string;
  Items: Array<ItemsEntity>;
  Title: string;
  LongTitle: string;
  PagingInfo: {
    TotalItems: number;
  };
  Status: string;
}

interface ItemsEntity {
  Id: string;
  ItemType: string;
  PredictedScore: number;
  TrackingId: string;
}
