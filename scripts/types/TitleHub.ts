export interface TitleHub {
  IsSpaRenderable: boolean;
  GameItems?: Array<GameItemsEntity> | null;
  ModuleTitle: ModuleTitle;
  EmptyContentMessage: string;
  CompareFriendsLink: CompareFriendsLink;
  AchievementProfileFilter: AchievementProfileFilter;
  EnableLazyLoad: boolean;
  WebApiUrl: string;
  ConfigModel: ConfigModel;
  RequiredComponents?: Array<number> | null;
  View: string;
  CssStatics?: Array<string> | null;
  JavaScriptStatics?: Array<string> | null;
  PreloadJavaScriptUrls?: Array<null> | null;
  PreloadCssUrls?: Array<null> | null;
  IsModuleCacheable: boolean;
  IsCritical: boolean;
  LazyLoadImages: boolean;
  MappingFailed: boolean;
  HasDefaultFocus: boolean;
  CacheDurationInSeconds: number;
  ErrorMode: number;
  CriticalErrorHandler: number;
  IsModuleExpandable: boolean;
  IsModuleExpanded: boolean;
  UseContainerDataGrid: boolean;
}
export interface GameItemsEntity {
  CurrentAchievements: number;
  CurrentGamerscore: number;
  ProgressPercentage: number;
  AchievementIconLabel: string;
  TotalAchievements: string;
  TotalGamerscore: number;
  GameScoreIconLabel: string;
  DisplayName: string;
  Url: string;
  DisplayImage: DisplayImage;
  Telemetry: Telemetry;
  Description: string;
  Devices?: Array<string> | null;
  MetaTags?: Array<null> | null;
  PageKeywords?: Array<null> | null;
  IsPrimaryOnCurrentPage: boolean;
  UseH1TagInTitle: boolean;
  IsSpaRenderable: boolean;
  RequiredComponents?: Array<null> | null;
  View: string;
  CssStatic: string;
  CssStatics?: Array<null> | null;
  JavaScriptStatics?: Array<null> | null;
  PreloadJavaScriptUrls?: Array<null> | null;
  PreloadCssUrls?: Array<null> | null;
  IsModuleCacheable: boolean;
  IsCritical: boolean;
  LazyLoadImages: boolean;
  MappingFailed: boolean;
  HasDefaultFocus: boolean;
  CacheDurationInSeconds: number;
  ErrorMode: number;
  CriticalErrorHandler: number;
  IsModuleExpandable: boolean;
  IsModuleExpanded: boolean;
  UseContainerDataGrid: boolean;
}
export interface DisplayImage {
  Title: string;
  AltText: string;
  ImageTagData?: Array<ImageTagDataEntity> | null;
  Href: string;
  LazyLoad: boolean;
  ImageResizeSettings?: Array<ImageResizeSettingsEntity> | null;
}
export interface ImageTagDataEntity {
  Attributes: Attributes;
  TagName: string;
}
export interface Attributes {
  class: string;
  alt: string;
  title: string;
  src: string;
  "data-src": string;
}
export interface ImageResizeSettingsEntity {
  ImageResizeMode: number;
  ImageResizeModeOptions: number;
  Size: string;
  ViewPort: number;
  ImageQuality: number;
}
export interface Telemetry {
  IntentType: IntentType;
  Source: number;
  NavName: string;
  BehaviorType: number;
  TelemetryTags: TelemetryTags;
}
export interface IntentType {
  Value: string;
}
export interface TelemetryTags {
  titleName: string;
  titleType: string;
}
export interface ModuleTitle {
  View: string;
}
export interface CompareFriendsLink {
  ActionLinks?: Array<ActionLinksEntity> | null;
  Orientation: number;
  DropDownClassName: string;
  CollectionLayout: number;
  MetaTags?: Array<null> | null;
  PageKeywords?: Array<null> | null;
  IsPrimaryOnCurrentPage: boolean;
  UseH1TagInTitle: boolean;
  IsSpaRenderable: boolean;
  RequiredComponents?: Array<null> | null;
  View: string;
  CssStatics?: Array<string> | null;
  JavaScriptStatics?: Array<string> | null;
  PreloadJavaScriptUrls?: Array<null> | null;
  PreloadCssUrls?: Array<null> | null;
  IsModuleCacheable: boolean;
  IsCritical: boolean;
  LazyLoadImages: boolean;
  MappingFailed: boolean;
  HasDefaultFocus: boolean;
  CacheDurationInSeconds: number;
  ErrorMode: number;
  CriticalErrorHandler: number;
  IsModuleExpandable: boolean;
  IsModuleExpanded: boolean;
  UseContainerDataGrid: boolean;
}
export interface ActionLinksEntity {
  DisplayText: string;
  AltText: string;
  Href: string;
  ActionLinkStyle: number;
  ActionLinkTriggerType: number;
  Glyph: string;
  Disabled: boolean;
  Telemetry: Telemetry1;
  Orientation: number;
  DataProperties: DataProperties;
  OpenNewWindow: boolean;
  ActionLinkClassName: string;
  RemoveActionTriggerClassName: boolean;
  Title: string;
  MetaTags?: Array<null> | null;
  PageKeywords?: Array<null> | null;
  IsPrimaryOnCurrentPage: boolean;
  UseH1TagInTitle: boolean;
  IsSpaRenderable: boolean;
  RequiredComponents?: Array<null> | null;
  View: string;
  CssStatics?: Array<string> | null;
  JavaScriptStatics?: Array<null> | null;
  PreloadJavaScriptUrls?: Array<null> | null;
  PreloadCssUrls?: Array<null> | null;
  IsModuleCacheable: boolean;
  IsCritical: boolean;
  LazyLoadImages: boolean;
  MappingFailed: boolean;
  HasDefaultFocus: boolean;
  CacheDurationInSeconds: number;
  Id: string;
  ErrorMode: number;
  CriticalErrorHandler: number;
  IsModuleExpandable: boolean;
  IsModuleExpanded: boolean;
  UseContainerDataGrid: boolean;
}
export interface Telemetry1 {
  EntityId: string;
  IntentType: IntentType;
  Source: number;
  NavName: string;
  BehaviorType: number;
  TelemetryTags: TelemetryTags1;
}
export interface TelemetryTags1 {}
export interface DataProperties {
  api: string;
  config: string;
}
export interface AchievementProfileFilter {
  DropDownId: string;
  DropDownLabel: string;
  DropDownFilters?: Array<DropDownFiltersEntityOrSelectedFilterType> | null;
  SelectedFilterType: DropDownFiltersEntityOrSelectedFilterType;
  View: string;
  ActionMode: number;
  Telemetry: Telemetry2;
}
export interface DropDownFiltersEntityOrSelectedFilterType {
  ItemDisplayName: string;
  ItemValue: string;
  Telemetry: Telemetry3;
}
export interface Telemetry3 {
  EntityId: string;
  IntentType: IntentType;
  Source: number;
  NavName: string;
  BehaviorType: number;
}
export interface Telemetry2 {
  IntentType: IntentType;
  Source: number;
  BehaviorType: number;
}
export interface ConfigModel {
  AccountFeedSource: number;
  IsAcheivementComparable: boolean;
  HideHeading: boolean;
  EnableCompareFriends: boolean;
  ShowGameFilter: boolean;
  MaxItemsToRetrieve: number;
  EnableTileMode: boolean;
}
