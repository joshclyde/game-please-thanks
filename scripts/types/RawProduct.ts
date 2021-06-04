// Used https://jvilk.com/MakeTypes/ to autogenerate interfaces for RawProduct.

export interface RawProduct {
  LastModifiedDate: string;
  LocalizedProperties?: Array<LocalizedPropertiesEntity> | null;
  MarketProperties?: Array<MarketPropertiesEntity> | null;
  ProductASchema: string;
  ProductBSchema: string;
  ProductId: string;
  Properties: Properties;
  AlternateIds?: Array<AlternateIdsEntity> | null;
  DomainDataVersion?: null;
  IngestionSource: string;
  IsMicrosoftProduct: boolean;
  PreferredSkuId: string;
  ProductType: string;
  ValidationData: ValidationData;
  MerchandizingTags?: Array<null> | null;
  PartD: string;
  SandboxId: string;
  ProductFamily: string;
  SchemaVersion: string;
  IsSandboxedProduct: boolean;
  ProductKind: string;
  ProductPolicies: PropertiesOrProductPolicies;
  DisplaySkuAvailabilities?: Array<DisplaySkuAvailabilitiesEntity> | null;
}
interface LocalizedPropertiesEntity {
  DeveloperName: string;
  PublisherName: string;
  PublisherWebsiteUri: string;
  SupportUri: string;
  EligibilityProperties: EligibilityProperties;
  Franchises?: Array<null> | null;
  Images?: Array<ImagesEntity> | null;
  Videos?: Array<VideosEntity> | null;
  ProductDescription: string;
  ProductTitle: string;
  ShortTitle: string;
  SortTitle: string;
  FriendlyTitle?: null;
  ShortDescription: string;
  SearchTitles?: Array<SearchTitlesEntity> | null;
  VoiceTitle: string;
  RenderGroupDetails?: null;
  ProductDisplayRanks?: Array<null> | null;
  InteractiveModelConfig?: null;
  Interactive3DEnabled: boolean;
  Language: string;
  Markets?: Array<string> | null;
}
interface EligibilityProperties {
  Remediations?: Array<RemediationsEntity> | null;
  Affirmations?: Array<null> | null;
}
interface RemediationsEntity {
  RemediationId: string;
  Description: string;
}
interface ImagesEntity {
  FileId: string;
  EISListingIdentifier?: null;
  BackgroundColor: string;
  Caption: string;
  FileSizeInBytes: number;
  ForegroundColor: string;
  Height: number;
  ImagePositionInfo: string;
  ImagePurpose: string;
  UnscaledImageSHA256Hash: string;
  Uri: string;
  Width: number;
}
interface VideosEntity {
  Uri: string;
  VideoPurpose: string;
  Height: number;
  Width: number;
  AudioEncoding: string;
  VideoEncoding: string;
  VideoPositionInfo: string;
  Caption: string;
  FileSizeInBytes: number;
  PreviewImage: PreviewImage;
  SortOrder: number;
}
interface PreviewImage {
  FileId: string;
  EISListingIdentifier?: null;
  BackgroundColor?: null;
  Caption: string;
  FileSizeInBytes: number;
  ForegroundColor?: null;
  Height: number;
  ImagePositionInfo?: null;
  ImagePurpose: string;
  UnscaledImageSHA256Hash: string;
  Uri: string;
  Width: number;
}
interface SearchTitlesEntity {
  SearchTitleString: string;
  SearchTitleType: string;
}
interface MarketPropertiesEntity {
  OriginalReleaseDate: string;
  MinimumUserAge: number;
  ContentRatings?: Array<ContentRatingsEntity> | null;
  RelatedProducts?: Array<null> | null;
  UsageData?: Array<UsageDataEntity> | null;
  BundleConfig?: null;
  Markets?: Array<string> | null;
}
interface ContentRatingsEntity {
  RatingSystem: string;
  RatingId: string;
  RatingDescriptors?: Array<string | null> | null;
  RatingDisclaimers?: Array<null> | null;
  InteractiveElements?: Array<string | null> | null;
}
interface UsageDataEntity {
  AggregateTimeSpan: string;
  AverageRating: number;
  PlayCount: number;
  RatingCount: number;
  RentalCount: string;
  TrialCount: string;
  PurchaseCount: string;
}
interface Properties {
  Attributes?: Array<AttributesEntity> | null;
  CanInstallToSDCard: boolean;
  Category: string;
  Categories?: Array<string> | null;
  Subcategory?: null;
  IsAccessible: boolean;
  IsDemo: boolean;
  IsLineOfBusinessApp: boolean;
  IsPublishedToLegacyWindowsPhoneStore: boolean;
  IsPublishedToLegacyWindowsStore: boolean;
  PackageFamilyName: string;
  PackageIdentityName: string;
  PublisherCertificateName: string;
  PublisherId: string;
  SkuDisplayGroups?: Array<SkuDisplayGroupsEntity> | null;
  XboxLiveTier: string;
  XboxXPA?: null;
  XboxCrossGenSetId?: null;
  XboxConsoleGenOptimized?: Array<string> | null;
  XboxConsoleGenCompatible?: Array<string> | null;
  XboxLiveGoldRequired: boolean;
  ExtendedMetadata?: null;
  OwnershipType?: null;
  PdpBackgroundColor: string;
  HasAddOns: boolean;
  RevisionId: string;
}
interface AttributesEntity {
  Name: string;
  Minimum?: null;
  Maximum?: null;
  ApplicablePlatforms?: Array<string> | null;
  Group?: null;
}
interface SkuDisplayGroupsEntity {
  Id: string;
  Treatment: string;
}
interface AlternateIdsEntity {
  IdType: string;
  Value: string;
}
interface ValidationData {
  PassedValidation: boolean;
  RevisionId: string;
  ValidationResultUri: string;
}
interface PropertiesOrProductPolicies {}
interface DisplaySkuAvailabilitiesEntity {
  Sku: Sku;
  Availabilities?: Array<AvailabilitiesEntity> | null;
}
interface Sku {
  LastModifiedDate: string;
  LocalizedProperties?: Array<LocalizedPropertiesEntity1> | null;
  MarketProperties?: Array<MarketPropertiesEntity1> | null;
  ProductId: string;
  Properties: Properties1;
  SkuASchema: string;
  SkuBSchema: string;
  SkuId: string;
  SkuType: string;
  RecurrencePolicy?: null;
  SubscriptionPolicyId?: null;
}
interface LocalizedPropertiesEntity1 {
  Contributors?: Array<null> | null;
  Features?: Array<string> | null;
  MinimumNotes: string;
  RecommendedNotes: string;
  ReleaseNotes: string;
  DisplayPlatformProperties?: null;
  SkuDescription: string;
  SkuTitle: string;
  SkuButtonTitle: string;
  DeliveryDateOverlay?: null;
  SkuDisplayRank?: Array<null> | null;
  TextResources?: null;
  Images?: Array<null> | null;
  LegalText: LegalText;
  Language: string;
  Markets?: Array<string> | null;
}
interface LegalText {
  AdditionalLicenseTerms: string;
  Copyright: string;
  CopyrightUri: string;
  PrivacyPolicy: string;
  PrivacyPolicyUri: string;
  Tou: string;
  TouUri: string;
}
interface MarketPropertiesEntity1 {
  FirstAvailableDate: string;
  SupportedLanguages?: Array<string> | null;
  PackageIds?: null;
  PIFilter?: null;
  Markets?: Array<string> | null;
}
interface Properties1 {
  EarlyAdopterEnrollmentUrl?: null;
  FulfillmentData: FulfillmentData;
  FulfillmentType: string;
  FulfillmentPluginId?: null;
  HasThirdPartyIAPs: boolean;
  LastUpdateDate: string;
  HardwareProperties: HardwareProperties;
  HardwareRequirements?: Array<null> | null;
  HardwareWarningList?: Array<null> | null;
  InstallationTerms: string;
  Packages?: Array<PackagesEntity> | null;
  VersionString: string;
  SkuDisplayGroupIds?: Array<string> | null;
  XboxXPA: boolean;
  BundledSkus?: Array<null> | null;
  IsRepurchasable: boolean;
  SkuDisplayRank: number;
  DisplayPhysicalStoreInventory?: null;
  VisibleToB2BServiceIds?: Array<null> | null;
  AdditionalIdentifiers?: Array<null> | null;
  IsTrial: boolean;
  IsPreOrder: boolean;
  IsBundle: boolean;
}
interface FulfillmentData {
  ProductId: string;
  WuBundleId: string;
  WuCategoryId: string;
  PackageFamilyName: string;
  SkuId: string;
  Content?: null;
  PackageFeatures?: null;
}
interface HardwareProperties {
  MinimumHardware?: Array<null> | null;
  RecommendedHardware?: Array<null> | null;
  MinimumProcessor: string;
  RecommendedProcessor: string;
  MinimumGraphics: string;
  RecommendedGraphics: string;
}
interface PackagesEntity {
  Applications?: Array<null> | null;
  Architectures?: Array<string> | null;
  Capabilities?: Array<null> | null;
  DeviceCapabilities?: Array<null> | null;
  ExperienceIds?: Array<null> | null;
  FrameworkDependencies?: Array<null> | null;
  HardwareDependencies?: Array<null> | null;
  HardwareRequirements?: Array<null> | null;
  Hash: string;
  HashAlgorithm: string;
  IsStreamingApp: boolean;
  Languages?: Array<null> | null;
  MaxDownloadSizeInBytes: number;
  MaxInstallSizeInBytes: number;
  PackageFormat: string;
  PackageFamilyName?: null;
  MainPackageFamilyNameForDlc?: null;
  PackageFullName: string;
  PackageId: string;
  ContentId: string;
  KeyId: string;
  PackageRank: number;
  PackageUri: string;
  PlatformDependencies?: Array<PlatformDependenciesEntity> | null;
  PlatformDependencyXmlBlob: string;
  ResourceId: string;
  Version: string;
  PackageDownloadUris?: Array<PackageDownloadUrisEntity> | null;
  DriverDependencies?: Array<null> | null;
  FulfillmentData: FulfillmentData;
}
interface PlatformDependenciesEntity {
  MaxTested: number;
  MinVersion: number;
  PlatformName: string;
}
interface PackageDownloadUrisEntity {
  Rank: number;
  Uri: string;
}
interface AvailabilitiesEntity {
  Actions?: Array<string> | null;
  AvailabilityASchema: string;
  AvailabilityBSchema: string;
  AvailabilityId: string;
  Conditions: Conditions;
  LastModifiedDate: string;
  Markets?: Array<string> | null;
  OrderManagementData: OrderManagementData;
  Properties: Properties2;
  SkuId: string;
  DisplayRank: number;
  AlternateIds?: Array<AlternateIdsEntity1 | null> | null;
  RemediationRequired: boolean;
  LicensingData?: LicensingData | null;
}
interface Conditions {
  ClientConditions: ClientConditions;
  EndDate: string;
  ResourceSetIds?: Array<string> | null;
  StartDate: string;
}
interface ClientConditions {
  AllowedPlatforms?: Array<AllowedPlatformsEntity> | null;
}
interface AllowedPlatformsEntity {
  MaxVersion: number;
  MinVersion: number;
  PlatformName: string;
}
interface OrderManagementData {
  GrantedEntitlementKeys?: Array<null> | null;
  PIFilter?: PIFilter | null;
  Price: Price;
  OrderManagementPolicyIdOverride?: string | null;
  GeofencingPolicyId?: string | null;
}
interface PIFilter {
  ExclusionProperties?: Array<null> | null;
  InclusionProperties?: Array<null> | null;
}
interface Price {
  CurrencyCode: string;
  IsPIRequired: boolean;
  ListPrice: number;
  MSRP: number;
  TaxType: string;
  WholesaleCurrencyCode: string;
  WholesalePrice?: number | null;
}
interface Properties2 {
  OriginalReleaseDate?: string | null;
}
interface AlternateIdsEntity1 {
  IdType: string;
  Value: string;
}
interface LicensingData {
  SatisfyingEntitlementKeys?: Array<SatisfyingEntitlementKeysEntity> | null;
}
interface SatisfyingEntitlementKeysEntity {
  EntitlementKeys?: Array<string> | null;
  LicensingKeyIds?: Array<string> | null;
  PreOrderReleaseDate?: string | null;
}
