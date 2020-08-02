export interface ItemData {
  ActiveFlag: string;
  ChildItemId: number;
  DeviceName: string;
  IconId: number;
  ItemDescription: {
    Description: string;
    Menuitems: Array<{ Description: string; Value: string }>;
    SecondaryDescription: string;
  };
  ItemId: number;
  ItemTier: number;
  Price: number;
  RestrictedRoles: string;
  RootItemId: number;
  ShortDesc: string;
  Type: string;
  itemIcon_URL: string;
  ret_msg: null;
  StartingItem: boolean;
}
