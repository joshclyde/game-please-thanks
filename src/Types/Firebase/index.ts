export interface UserProfileFriendEntity {
  isFriend: boolean;
}

export type UserProfileFriends = Record<string, UserProfileFriendEntity>;

export interface UserProfileGameEntity {
  isOwned: boolean;
}

export type UserProfileGames = Record<string, UserProfileGameEntity>;

export type UserProfileName = string;

export type UserProfileHasGamePass = boolean;

export interface UserProfile {
  name: UserProfileName;
  hasGamePass: UserProfileHasGamePass;
  games: UserProfileGames;
  friends: UserProfileFriends;
}

export interface Game {
  id: string;
  // <-> MicrosoftProduct.LocalizedProperties[0].ShortTitle
  name: string;
  /* <-> MicrosoftProduct.Properties.Attributes.find((attr) => attr.Name === 'XblOnlineCoop' || 'XblOnlineMultiPlayer').Minimum > 2
  or 1 (a lot of games say the minimum players are 2, but I feel like it should just be 1 cuz you can still do 1 player) */
  minPlayers: number;
  // <-> MicrosoftProduct.Properties.Attributes.find((attr) => attr.Name === 'XblOnlineCoop' || 'XblOnlineMultiPlayer').Maximum
  maxPlayers: number;
  externalUrl: string;
  images: {
    // <-> MicrosoftProduct.LocalizedProperties[0].Images.find(ImagePurpose === 'TitledHeroArt')
    TitledWide: {
      url: string;
    };
    // <-> MicrosoftProduct.LocalizedProperties[0].Images.find(ImagePurpose === 'Poster')
    TitledLong: {
      url: string;
    };
    // <-> MicrosoftProduct.LocalizedProperties[0].Images.find(ImagePurpose === 'SuperHeroArt')
    UntitledWide: {
      url: string;
    };
    // <-> MicrosoftProduct.LocalizedProperties[0].Images.find(ImagePurpose === 'FeaturePromotionalSquareArt')
    UntitledSquare: {
      url: string;
    };
    // <-> MicrosoftProduct.LocalizedProperties[0].Images.find(ImagePurpose === 'BoxArt')
    TitledSquare: {
      url: string;
    };
  };
  // <-> MicrosoftProduct.DisplaySkuAvailabilities[0].Availabilities[0].OrderManagementData.Price.MSRP
  price: number;
  // <-> not on MicrosoftProduct
  isOnGamePass: boolean;
}
