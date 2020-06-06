export interface SmiteState {
  items: Array<{
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
    StartingItem: boolean;
    Type: string;
    itemIcon_URL: string;
    ret_msg: string;
  }>;
  gods: any;
}

// export interface FlashcardStartQuizAction {
//   type: string;
//   setId: string;
// }

// export interface Actions {
//   type: string;
//   width?: number;
//   height?: number;
// }
