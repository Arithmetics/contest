export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthenticatedItem = User;

export type Bet = {
  __typename?: 'Bet';
  id: Scalars['ID'];
  user?: Maybe<User>;
  choice?: Maybe<Choice>;
  isSuper?: Maybe<Scalars['Boolean']>;
};

export type BetCreateInput = {
  user?: Maybe<UserRelateToOneForCreateInput>;
  choice?: Maybe<ChoiceRelateToOneForCreateInput>;
  isSuper?: Maybe<Scalars['Boolean']>;
};

export type BetManyRelationFilter = {
  every?: Maybe<BetWhereInput>;
  some?: Maybe<BetWhereInput>;
  none?: Maybe<BetWhereInput>;
};

export type BetOrderByInput = {
  id?: Maybe<OrderDirection>;
  isSuper?: Maybe<OrderDirection>;
};

export type BetRelateToManyForCreateInput = {
  create?: Maybe<Array<BetCreateInput>>;
  connect?: Maybe<Array<BetWhereUniqueInput>>;
};

export type BetRelateToManyForUpdateInput = {
  disconnect?: Maybe<Array<BetWhereUniqueInput>>;
  set?: Maybe<Array<BetWhereUniqueInput>>;
  create?: Maybe<Array<BetCreateInput>>;
  connect?: Maybe<Array<BetWhereUniqueInput>>;
};

export type BetUpdateArgs = {
  where: BetWhereUniqueInput;
  data: BetUpdateInput;
};

export type BetUpdateInput = {
  user?: Maybe<UserRelateToOneForUpdateInput>;
  choice?: Maybe<ChoiceRelateToOneForUpdateInput>;
  isSuper?: Maybe<Scalars['Boolean']>;
};

export type BetWhereInput = {
  AND?: Maybe<Array<BetWhereInput>>;
  OR?: Maybe<Array<BetWhereInput>>;
  NOT?: Maybe<Array<BetWhereInput>>;
  id?: Maybe<IdFilter>;
  user?: Maybe<UserWhereInput>;
  choice?: Maybe<ChoiceWhereInput>;
  isSuper?: Maybe<BooleanFilter>;
};

export type BetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BooleanFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<BooleanFilter>;
};

export type Choice = {
  __typename?: 'Choice';
  id: Scalars['ID'];
  selection?: Maybe<ChoiceSelectionType>;
  isWin?: Maybe<Scalars['Boolean']>;
  line?: Maybe<Line>;
  bets?: Maybe<Array<Bet>>;
  betsCount?: Maybe<Scalars['Int']>;
  image?: Maybe<CloudImage>;
  secondaryImage?: Maybe<CloudImage>;
  status?: Maybe<ChoiceStatus>;
  labelName?: Maybe<Scalars['String']>;
};


export type ChoiceBetsArgs = {
  where?: BetWhereInput;
  orderBy?: Array<BetOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type ChoiceBetsCountArgs = {
  where?: BetWhereInput;
};

export type ChoiceCreateInput = {
  selection?: Maybe<ChoiceSelectionType>;
  isWin?: Maybe<Scalars['Boolean']>;
  line?: Maybe<LineRelateToOneForCreateInput>;
  bets?: Maybe<BetRelateToManyForCreateInput>;
  image?: Maybe<CloudImageRelateToOneForCreateInput>;
  secondaryImage?: Maybe<CloudImageRelateToOneForCreateInput>;
};

export type ChoiceManyRelationFilter = {
  every?: Maybe<ChoiceWhereInput>;
  some?: Maybe<ChoiceWhereInput>;
  none?: Maybe<ChoiceWhereInput>;
};

export type ChoiceOrderByInput = {
  id?: Maybe<OrderDirection>;
  selection?: Maybe<OrderDirection>;
  isWin?: Maybe<OrderDirection>;
};

export type ChoiceRelateToManyForCreateInput = {
  create?: Maybe<Array<ChoiceCreateInput>>;
  connect?: Maybe<Array<ChoiceWhereUniqueInput>>;
};

export type ChoiceRelateToManyForUpdateInput = {
  disconnect?: Maybe<Array<ChoiceWhereUniqueInput>>;
  set?: Maybe<Array<ChoiceWhereUniqueInput>>;
  create?: Maybe<Array<ChoiceCreateInput>>;
  connect?: Maybe<Array<ChoiceWhereUniqueInput>>;
};

export type ChoiceRelateToOneForCreateInput = {
  create?: Maybe<ChoiceCreateInput>;
  connect?: Maybe<ChoiceWhereUniqueInput>;
};

export type ChoiceRelateToOneForUpdateInput = {
  create?: Maybe<ChoiceCreateInput>;
  connect?: Maybe<ChoiceWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export enum ChoiceSelectionType {
  Over = 'OVER',
  Under = 'UNDER',
  Away = 'AWAY',
  Home = 'HOME'
}

export type ChoiceSelectionTypeNullableFilter = {
  equals?: Maybe<ChoiceSelectionType>;
  in?: Maybe<Array<ChoiceSelectionType>>;
  notIn?: Maybe<Array<ChoiceSelectionType>>;
  not?: Maybe<ChoiceSelectionTypeNullableFilter>;
};

export enum ChoiceStatus {
  NotStarted = 'NOT_STARTED',
  Winning = 'WINNING',
  Losing = 'LOSING',
  Won = 'WON',
  Lost = 'LOST'
}

export type ChoiceUpdateArgs = {
  where: ChoiceWhereUniqueInput;
  data: ChoiceUpdateInput;
};

export type ChoiceUpdateInput = {
  selection?: Maybe<ChoiceSelectionType>;
  isWin?: Maybe<Scalars['Boolean']>;
  line?: Maybe<LineRelateToOneForUpdateInput>;
  bets?: Maybe<BetRelateToManyForUpdateInput>;
  image?: Maybe<CloudImageRelateToOneForUpdateInput>;
  secondaryImage?: Maybe<CloudImageRelateToOneForUpdateInput>;
};

export type ChoiceWhereInput = {
  AND?: Maybe<Array<ChoiceWhereInput>>;
  OR?: Maybe<Array<ChoiceWhereInput>>;
  NOT?: Maybe<Array<ChoiceWhereInput>>;
  id?: Maybe<IdFilter>;
  selection?: Maybe<ChoiceSelectionTypeNullableFilter>;
  isWin?: Maybe<BooleanFilter>;
  line?: Maybe<LineWhereInput>;
  bets?: Maybe<BetManyRelationFilter>;
  image?: Maybe<CloudImageWhereInput>;
  secondaryImage?: Maybe<CloudImageWhereInput>;
};

export type ChoiceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type CloudImage = {
  __typename?: 'CloudImage';
  id: Scalars['ID'];
  image?: Maybe<CloudinaryImage_File>;
  altText?: Maybe<Scalars['String']>;
};

export type CloudImageCreateInput = {
  image?: Maybe<Scalars['Upload']>;
  altText?: Maybe<Scalars['String']>;
};

export type CloudImageOrderByInput = {
  id?: Maybe<OrderDirection>;
  altText?: Maybe<OrderDirection>;
};

export type CloudImageRelateToOneForCreateInput = {
  create?: Maybe<CloudImageCreateInput>;
  connect?: Maybe<CloudImageWhereUniqueInput>;
};

export type CloudImageRelateToOneForUpdateInput = {
  create?: Maybe<CloudImageCreateInput>;
  connect?: Maybe<CloudImageWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type CloudImageUpdateArgs = {
  where: CloudImageWhereUniqueInput;
  data: CloudImageUpdateInput;
};

export type CloudImageUpdateInput = {
  image?: Maybe<Scalars['Upload']>;
  altText?: Maybe<Scalars['String']>;
};

export type CloudImageWhereInput = {
  AND?: Maybe<Array<CloudImageWhereInput>>;
  OR?: Maybe<Array<CloudImageWhereInput>>;
  NOT?: Maybe<Array<CloudImageWhereInput>>;
  id?: Maybe<IdFilter>;
  altText?: Maybe<StringFilter>;
};

export type CloudImageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  /** Rewrites the filename to be this pretty string. Do not include `/` or `.` */
  prettyName?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  crop?: Maybe<Scalars['String']>;
  aspect_ratio?: Maybe<Scalars['String']>;
  gravity?: Maybe<Scalars['String']>;
  zoom?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['String']>;
  y?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  fetch_format?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['String']>;
  radius?: Maybe<Scalars['String']>;
  angle?: Maybe<Scalars['String']>;
  effect?: Maybe<Scalars['String']>;
  opacity?: Maybe<Scalars['String']>;
  border?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  overlay?: Maybe<Scalars['String']>;
  underlay?: Maybe<Scalars['String']>;
  default_image?: Maybe<Scalars['String']>;
  delay?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  color_space?: Maybe<Scalars['String']>;
  dpr?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['String']>;
  density?: Maybe<Scalars['String']>;
  flags?: Maybe<Scalars['String']>;
  transformation?: Maybe<Scalars['String']>;
};

export type CloudinaryImage_File = {
  __typename?: 'CloudinaryImage_File';
  id?: Maybe<Scalars['ID']>;
  filename?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  mimetype?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
  publicUrl?: Maybe<Scalars['String']>;
  publicUrlTransformed?: Maybe<Scalars['String']>;
};


export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: Maybe<CloudinaryImageFormat>;
};

export type Contest = {
  __typename?: 'Contest';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<ContestStatusType>;
  entryFee?: Maybe<Scalars['Int']>;
  contestType?: Maybe<ContestContestTypeType>;
  image?: Maybe<CloudImage>;
  lines?: Maybe<Array<Line>>;
  linesCount?: Maybe<Scalars['Int']>;
  registrations?: Maybe<Array<Registration>>;
  registrationsCount?: Maybe<Scalars['Int']>;
  ruleSet?: Maybe<RuleSet>;
};


export type ContestLinesArgs = {
  where?: LineWhereInput;
  orderBy?: Array<LineOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type ContestLinesCountArgs = {
  where?: LineWhereInput;
};


export type ContestRegistrationsArgs = {
  where?: RegistrationWhereInput;
  orderBy?: Array<RegistrationOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type ContestRegistrationsCountArgs = {
  where?: RegistrationWhereInput;
};

export enum ContestContestTypeType {
  NbaOverUnder = 'NBA_OVER_UNDER',
  NflOverUnder = 'NFL_OVER_UNDER',
  NflAts = 'NFL_ATS'
}

export type ContestContestTypeTypeNullableFilter = {
  equals?: Maybe<ContestContestTypeType>;
  in?: Maybe<Array<ContestContestTypeType>>;
  notIn?: Maybe<Array<ContestContestTypeType>>;
  not?: Maybe<ContestContestTypeTypeNullableFilter>;
};

export type ContestCreateInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<ContestStatusType>;
  entryFee?: Maybe<Scalars['Int']>;
  contestType?: Maybe<ContestContestTypeType>;
  image?: Maybe<CloudImageRelateToOneForCreateInput>;
  lines?: Maybe<LineRelateToManyForCreateInput>;
  registrations?: Maybe<RegistrationRelateToManyForCreateInput>;
  ruleSet?: Maybe<RuleSetRelateToOneForCreateInput>;
};

export type ContestOrderByInput = {
  id?: Maybe<OrderDirection>;
  name?: Maybe<OrderDirection>;
  description?: Maybe<OrderDirection>;
  status?: Maybe<OrderDirection>;
  entryFee?: Maybe<OrderDirection>;
  contestType?: Maybe<OrderDirection>;
};

export type ContestRelateToOneForCreateInput = {
  create?: Maybe<ContestCreateInput>;
  connect?: Maybe<ContestWhereUniqueInput>;
};

export type ContestRelateToOneForUpdateInput = {
  create?: Maybe<ContestCreateInput>;
  connect?: Maybe<ContestWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export enum ContestStatusType {
  Open = 'OPEN',
  InProgress = 'IN_PROGRESS',
  Complete = 'COMPLETE'
}

export type ContestStatusTypeNullableFilter = {
  equals?: Maybe<ContestStatusType>;
  in?: Maybe<Array<ContestStatusType>>;
  notIn?: Maybe<Array<ContestStatusType>>;
  not?: Maybe<ContestStatusTypeNullableFilter>;
};

export type ContestUpdateArgs = {
  where: ContestWhereUniqueInput;
  data: ContestUpdateInput;
};

export type ContestUpdateInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<ContestStatusType>;
  entryFee?: Maybe<Scalars['Int']>;
  contestType?: Maybe<ContestContestTypeType>;
  image?: Maybe<CloudImageRelateToOneForUpdateInput>;
  lines?: Maybe<LineRelateToManyForUpdateInput>;
  registrations?: Maybe<RegistrationRelateToManyForUpdateInput>;
  ruleSet?: Maybe<RuleSetRelateToOneForUpdateInput>;
};

export type ContestWhereInput = {
  AND?: Maybe<Array<ContestWhereInput>>;
  OR?: Maybe<Array<ContestWhereInput>>;
  NOT?: Maybe<Array<ContestWhereInput>>;
  id?: Maybe<IdFilter>;
  name?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  status?: Maybe<ContestStatusTypeNullableFilter>;
  entryFee?: Maybe<IntNullableFilter>;
  contestType?: Maybe<ContestContestTypeTypeNullableFilter>;
  image?: Maybe<CloudImageWhereInput>;
  lines?: Maybe<LineManyRelationFilter>;
  registrations?: Maybe<RegistrationManyRelationFilter>;
  ruleSet?: Maybe<RuleSetWhereInput>;
};

export type ContestWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type CreateInitialUserInput = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<DateTimeFilter>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<DateTimeNullableFilter>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<FloatFilter>;
};

export type History = {
  __typename?: 'History';
  id: Scalars['ID'];
  display?: Maybe<Scalars['String']>;
  contestType?: Maybe<HistoryContestTypeType>;
  year?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
};

export enum HistoryContestTypeType {
  NbaOverUnder = 'NBA_OVER_UNDER',
  NflOverUnder = 'NFL_OVER_UNDER',
  NflAts = 'NFL_ATS'
}

export type HistoryContestTypeTypeNullableFilter = {
  equals?: Maybe<HistoryContestTypeType>;
  in?: Maybe<Array<HistoryContestTypeType>>;
  notIn?: Maybe<Array<HistoryContestTypeType>>;
  not?: Maybe<HistoryContestTypeTypeNullableFilter>;
};

export type HistoryCreateInput = {
  display?: Maybe<Scalars['String']>;
  contestType?: Maybe<HistoryContestTypeType>;
  year?: Maybe<Scalars['Int']>;
  user?: Maybe<UserRelateToOneForCreateInput>;
};

export type HistoryManyRelationFilter = {
  every?: Maybe<HistoryWhereInput>;
  some?: Maybe<HistoryWhereInput>;
  none?: Maybe<HistoryWhereInput>;
};

export type HistoryOrderByInput = {
  id?: Maybe<OrderDirection>;
  display?: Maybe<OrderDirection>;
  contestType?: Maybe<OrderDirection>;
  year?: Maybe<OrderDirection>;
};

export type HistoryRelateToManyForCreateInput = {
  create?: Maybe<Array<HistoryCreateInput>>;
  connect?: Maybe<Array<HistoryWhereUniqueInput>>;
};

export type HistoryRelateToManyForUpdateInput = {
  disconnect?: Maybe<Array<HistoryWhereUniqueInput>>;
  set?: Maybe<Array<HistoryWhereUniqueInput>>;
  create?: Maybe<Array<HistoryCreateInput>>;
  connect?: Maybe<Array<HistoryWhereUniqueInput>>;
};

export type HistoryUpdateArgs = {
  where: HistoryWhereUniqueInput;
  data: HistoryUpdateInput;
};

export type HistoryUpdateInput = {
  display?: Maybe<Scalars['String']>;
  contestType?: Maybe<HistoryContestTypeType>;
  year?: Maybe<Scalars['Int']>;
  user?: Maybe<UserRelateToOneForUpdateInput>;
};

export type HistoryWhereInput = {
  AND?: Maybe<Array<HistoryWhereInput>>;
  OR?: Maybe<Array<HistoryWhereInput>>;
  NOT?: Maybe<Array<HistoryWhereInput>>;
  id?: Maybe<IdFilter>;
  display?: Maybe<StringFilter>;
  contestType?: Maybe<HistoryContestTypeTypeNullableFilter>;
  year?: Maybe<IntFilter>;
  user?: Maybe<UserWhereInput>;
};

export type HistoryWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type IdFilter = {
  equals?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  notIn?: Maybe<Array<Scalars['ID']>>;
  lt?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  not?: Maybe<IdFilter>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<IntFilter>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<IntNullableFilter>;
};


export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSignout: Scalars['Boolean'];
  enableSessionItem: Scalars['Boolean'];
  lists: Array<KeystoneAdminUiListMeta>;
  list?: Maybe<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  path: Scalars['String'];
  label: Scalars['String'];
  isOrderable: Scalars['Boolean'];
  isFilterable: Scalars['Boolean'];
  fieldMeta?: Maybe<Scalars['JSON']>;
  viewsIndex: Scalars['Int'];
  customViewsIndex?: Maybe<Scalars['Int']>;
  createView: KeystoneAdminUiFieldMetaCreateView;
  listView: KeystoneAdminUiFieldMetaListView;
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  search?: Maybe<QueryMode>;
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Read = 'read',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Read = 'read',
  Hidden = 'hidden'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  key: Scalars['String'];
  itemQueryName: Scalars['String'];
  listQueryName: Scalars['String'];
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  path: Scalars['String'];
  label: Scalars['String'];
  singular: Scalars['String'];
  plural: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  initialColumns: Array<Scalars['String']>;
  pageSize: Scalars['Int'];
  labelField: Scalars['String'];
  fields: Array<KeystoneAdminUiFieldMeta>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  field: Scalars['String'];
  direction: KeystoneAdminUiSortDirection;
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Line = {
  __typename?: 'Line';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  closingTime?: Maybe<Scalars['DateTime']>;
  benchmark?: Maybe<Scalars['Float']>;
  image?: Maybe<CloudImage>;
  contest?: Maybe<Contest>;
  choices?: Maybe<Array<Choice>>;
  choicesCount?: Maybe<Scalars['Int']>;
  standings?: Maybe<Array<Standing>>;
  standingsCount?: Maybe<Scalars['Int']>;
};


export type LineChoicesArgs = {
  where?: ChoiceWhereInput;
  orderBy?: Array<ChoiceOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type LineChoicesCountArgs = {
  where?: ChoiceWhereInput;
};


export type LineStandingsArgs = {
  where?: StandingWhereInput;
  orderBy?: Array<StandingOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type LineStandingsCountArgs = {
  where?: StandingWhereInput;
};

export type LineCreateInput = {
  title?: Maybe<Scalars['String']>;
  closingTime?: Maybe<Scalars['DateTime']>;
  benchmark?: Maybe<Scalars['Float']>;
  image?: Maybe<CloudImageRelateToOneForCreateInput>;
  contest?: Maybe<ContestRelateToOneForCreateInput>;
  choices?: Maybe<ChoiceRelateToManyForCreateInput>;
  standings?: Maybe<StandingRelateToManyForCreateInput>;
};

export type LineManyRelationFilter = {
  every?: Maybe<LineWhereInput>;
  some?: Maybe<LineWhereInput>;
  none?: Maybe<LineWhereInput>;
};

export type LineOrderByInput = {
  id?: Maybe<OrderDirection>;
  title?: Maybe<OrderDirection>;
  closingTime?: Maybe<OrderDirection>;
  benchmark?: Maybe<OrderDirection>;
};

export type LineRelateToManyForCreateInput = {
  create?: Maybe<Array<LineCreateInput>>;
  connect?: Maybe<Array<LineWhereUniqueInput>>;
};

export type LineRelateToManyForUpdateInput = {
  disconnect?: Maybe<Array<LineWhereUniqueInput>>;
  set?: Maybe<Array<LineWhereUniqueInput>>;
  create?: Maybe<Array<LineCreateInput>>;
  connect?: Maybe<Array<LineWhereUniqueInput>>;
};

export type LineRelateToOneForCreateInput = {
  create?: Maybe<LineCreateInput>;
  connect?: Maybe<LineWhereUniqueInput>;
};

export type LineRelateToOneForUpdateInput = {
  create?: Maybe<LineCreateInput>;
  connect?: Maybe<LineWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type LineUpdateArgs = {
  where: LineWhereUniqueInput;
  data: LineUpdateInput;
};

export type LineUpdateInput = {
  title?: Maybe<Scalars['String']>;
  closingTime?: Maybe<Scalars['DateTime']>;
  benchmark?: Maybe<Scalars['Float']>;
  image?: Maybe<CloudImageRelateToOneForUpdateInput>;
  contest?: Maybe<ContestRelateToOneForUpdateInput>;
  choices?: Maybe<ChoiceRelateToManyForUpdateInput>;
  standings?: Maybe<StandingRelateToManyForUpdateInput>;
};

export type LineWhereInput = {
  AND?: Maybe<Array<LineWhereInput>>;
  OR?: Maybe<Array<LineWhereInput>>;
  NOT?: Maybe<Array<LineWhereInput>>;
  id?: Maybe<IdFilter>;
  title?: Maybe<StringFilter>;
  closingTime?: Maybe<DateTimeFilter>;
  benchmark?: Maybe<FloatFilter>;
  image?: Maybe<CloudImageWhereInput>;
  contest?: Maybe<ContestWhereInput>;
  choices?: Maybe<ChoiceManyRelationFilter>;
  standings?: Maybe<StandingManyRelationFilter>;
};

export type LineWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBet?: Maybe<Bet>;
  createBets?: Maybe<Array<Maybe<Bet>>>;
  updateBet?: Maybe<Bet>;
  updateBets?: Maybe<Array<Maybe<Bet>>>;
  deleteBet?: Maybe<Bet>;
  deleteBets?: Maybe<Array<Maybe<Bet>>>;
  createChoice?: Maybe<Choice>;
  createChoices?: Maybe<Array<Maybe<Choice>>>;
  updateChoice?: Maybe<Choice>;
  updateChoices?: Maybe<Array<Maybe<Choice>>>;
  deleteChoice?: Maybe<Choice>;
  deleteChoices?: Maybe<Array<Maybe<Choice>>>;
  createCloudImage?: Maybe<CloudImage>;
  createCloudImages?: Maybe<Array<Maybe<CloudImage>>>;
  updateCloudImage?: Maybe<CloudImage>;
  updateCloudImages?: Maybe<Array<Maybe<CloudImage>>>;
  deleteCloudImage?: Maybe<CloudImage>;
  deleteCloudImages?: Maybe<Array<Maybe<CloudImage>>>;
  createContest?: Maybe<Contest>;
  createContests?: Maybe<Array<Maybe<Contest>>>;
  updateContest?: Maybe<Contest>;
  updateContests?: Maybe<Array<Maybe<Contest>>>;
  deleteContest?: Maybe<Contest>;
  deleteContests?: Maybe<Array<Maybe<Contest>>>;
  createHistory?: Maybe<History>;
  createHistories?: Maybe<Array<Maybe<History>>>;
  updateHistory?: Maybe<History>;
  updateHistories?: Maybe<Array<Maybe<History>>>;
  deleteHistory?: Maybe<History>;
  deleteHistories?: Maybe<Array<Maybe<History>>>;
  createLine?: Maybe<Line>;
  createLines?: Maybe<Array<Maybe<Line>>>;
  updateLine?: Maybe<Line>;
  updateLines?: Maybe<Array<Maybe<Line>>>;
  deleteLine?: Maybe<Line>;
  deleteLines?: Maybe<Array<Maybe<Line>>>;
  createRegistration?: Maybe<Registration>;
  createRegistrations?: Maybe<Array<Maybe<Registration>>>;
  updateRegistration?: Maybe<Registration>;
  updateRegistrations?: Maybe<Array<Maybe<Registration>>>;
  deleteRegistration?: Maybe<Registration>;
  deleteRegistrations?: Maybe<Array<Maybe<Registration>>>;
  createRuleSet?: Maybe<RuleSet>;
  createRuleSets?: Maybe<Array<Maybe<RuleSet>>>;
  updateRuleSet?: Maybe<RuleSet>;
  updateRuleSets?: Maybe<Array<Maybe<RuleSet>>>;
  deleteRuleSet?: Maybe<RuleSet>;
  deleteRuleSets?: Maybe<Array<Maybe<RuleSet>>>;
  createStanding?: Maybe<Standing>;
  createStandings?: Maybe<Array<Maybe<Standing>>>;
  updateStanding?: Maybe<Standing>;
  updateStandings?: Maybe<Array<Maybe<Standing>>>;
  deleteStanding?: Maybe<Standing>;
  deleteStandings?: Maybe<Array<Maybe<Standing>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean'];
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  sendUserPasswordResetLink: Scalars['Boolean'];
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
};


export type MutationCreateBetArgs = {
  data: BetCreateInput;
};


export type MutationCreateBetsArgs = {
  data: Array<BetCreateInput>;
};


export type MutationUpdateBetArgs = {
  where: BetWhereUniqueInput;
  data: BetUpdateInput;
};


export type MutationUpdateBetsArgs = {
  data: Array<BetUpdateArgs>;
};


export type MutationDeleteBetArgs = {
  where: BetWhereUniqueInput;
};


export type MutationDeleteBetsArgs = {
  where: Array<BetWhereUniqueInput>;
};


export type MutationCreateChoiceArgs = {
  data: ChoiceCreateInput;
};


export type MutationCreateChoicesArgs = {
  data: Array<ChoiceCreateInput>;
};


export type MutationUpdateChoiceArgs = {
  where: ChoiceWhereUniqueInput;
  data: ChoiceUpdateInput;
};


export type MutationUpdateChoicesArgs = {
  data: Array<ChoiceUpdateArgs>;
};


export type MutationDeleteChoiceArgs = {
  where: ChoiceWhereUniqueInput;
};


export type MutationDeleteChoicesArgs = {
  where: Array<ChoiceWhereUniqueInput>;
};


export type MutationCreateCloudImageArgs = {
  data: CloudImageCreateInput;
};


export type MutationCreateCloudImagesArgs = {
  data: Array<CloudImageCreateInput>;
};


export type MutationUpdateCloudImageArgs = {
  where: CloudImageWhereUniqueInput;
  data: CloudImageUpdateInput;
};


export type MutationUpdateCloudImagesArgs = {
  data: Array<CloudImageUpdateArgs>;
};


export type MutationDeleteCloudImageArgs = {
  where: CloudImageWhereUniqueInput;
};


export type MutationDeleteCloudImagesArgs = {
  where: Array<CloudImageWhereUniqueInput>;
};


export type MutationCreateContestArgs = {
  data: ContestCreateInput;
};


export type MutationCreateContestsArgs = {
  data: Array<ContestCreateInput>;
};


export type MutationUpdateContestArgs = {
  where: ContestWhereUniqueInput;
  data: ContestUpdateInput;
};


export type MutationUpdateContestsArgs = {
  data: Array<ContestUpdateArgs>;
};


export type MutationDeleteContestArgs = {
  where: ContestWhereUniqueInput;
};


export type MutationDeleteContestsArgs = {
  where: Array<ContestWhereUniqueInput>;
};


export type MutationCreateHistoryArgs = {
  data: HistoryCreateInput;
};


export type MutationCreateHistoriesArgs = {
  data: Array<HistoryCreateInput>;
};


export type MutationUpdateHistoryArgs = {
  where: HistoryWhereUniqueInput;
  data: HistoryUpdateInput;
};


export type MutationUpdateHistoriesArgs = {
  data: Array<HistoryUpdateArgs>;
};


export type MutationDeleteHistoryArgs = {
  where: HistoryWhereUniqueInput;
};


export type MutationDeleteHistoriesArgs = {
  where: Array<HistoryWhereUniqueInput>;
};


export type MutationCreateLineArgs = {
  data: LineCreateInput;
};


export type MutationCreateLinesArgs = {
  data: Array<LineCreateInput>;
};


export type MutationUpdateLineArgs = {
  where: LineWhereUniqueInput;
  data: LineUpdateInput;
};


export type MutationUpdateLinesArgs = {
  data: Array<LineUpdateArgs>;
};


export type MutationDeleteLineArgs = {
  where: LineWhereUniqueInput;
};


export type MutationDeleteLinesArgs = {
  where: Array<LineWhereUniqueInput>;
};


export type MutationCreateRegistrationArgs = {
  data: RegistrationCreateInput;
};


export type MutationCreateRegistrationsArgs = {
  data: Array<RegistrationCreateInput>;
};


export type MutationUpdateRegistrationArgs = {
  where: RegistrationWhereUniqueInput;
  data: RegistrationUpdateInput;
};


export type MutationUpdateRegistrationsArgs = {
  data: Array<RegistrationUpdateArgs>;
};


export type MutationDeleteRegistrationArgs = {
  where: RegistrationWhereUniqueInput;
};


export type MutationDeleteRegistrationsArgs = {
  where: Array<RegistrationWhereUniqueInput>;
};


export type MutationCreateRuleSetArgs = {
  data: RuleSetCreateInput;
};


export type MutationCreateRuleSetsArgs = {
  data: Array<RuleSetCreateInput>;
};


export type MutationUpdateRuleSetArgs = {
  where: RuleSetWhereUniqueInput;
  data: RuleSetUpdateInput;
};


export type MutationUpdateRuleSetsArgs = {
  data: Array<RuleSetUpdateArgs>;
};


export type MutationDeleteRuleSetArgs = {
  where: RuleSetWhereUniqueInput;
};


export type MutationDeleteRuleSetsArgs = {
  where: Array<RuleSetWhereUniqueInput>;
};


export type MutationCreateStandingArgs = {
  data: StandingCreateInput;
};


export type MutationCreateStandingsArgs = {
  data: Array<StandingCreateInput>;
};


export type MutationUpdateStandingArgs = {
  where: StandingWhereUniqueInput;
  data: StandingUpdateInput;
};


export type MutationUpdateStandingsArgs = {
  data: Array<StandingUpdateArgs>;
};


export type MutationDeleteStandingArgs = {
  where: StandingWhereUniqueInput;
};


export type MutationDeleteStandingsArgs = {
  where: Array<StandingWhereUniqueInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationUpdateUserArgs = {
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationSendUserPasswordResetLinkArgs = {
  email: Scalars['String'];
};


export type MutationRedeemUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
  password: Scalars['String'];
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordFilter = {
  isSet: Scalars['Boolean'];
};

export enum PasswordResetRedemptionErrorCode {
  Failure = 'FAILURE',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenRedeemed = 'TOKEN_REDEEMED'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type PointCounts = {
  __typename?: 'PointCounts';
  locked?: Maybe<Scalars['Int']>;
  likely?: Maybe<Scalars['Int']>;
  possible?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  bets?: Maybe<Array<Bet>>;
  bet?: Maybe<Bet>;
  betsCount?: Maybe<Scalars['Int']>;
  choices?: Maybe<Array<Choice>>;
  choice?: Maybe<Choice>;
  choicesCount?: Maybe<Scalars['Int']>;
  cloudImages?: Maybe<Array<CloudImage>>;
  cloudImage?: Maybe<CloudImage>;
  cloudImagesCount?: Maybe<Scalars['Int']>;
  contests?: Maybe<Array<Contest>>;
  contest?: Maybe<Contest>;
  contestsCount?: Maybe<Scalars['Int']>;
  histories?: Maybe<Array<History>>;
  history?: Maybe<History>;
  historiesCount?: Maybe<Scalars['Int']>;
  lines?: Maybe<Array<Line>>;
  line?: Maybe<Line>;
  linesCount?: Maybe<Scalars['Int']>;
  registrations?: Maybe<Array<Registration>>;
  registration?: Maybe<Registration>;
  registrationsCount?: Maybe<Scalars['Int']>;
  ruleSets?: Maybe<Array<RuleSet>>;
  ruleSet?: Maybe<RuleSet>;
  ruleSetsCount?: Maybe<Scalars['Int']>;
  standings?: Maybe<Array<Standing>>;
  standing?: Maybe<Standing>;
  standingsCount?: Maybe<Scalars['Int']>;
  users?: Maybe<Array<User>>;
  user?: Maybe<User>;
  usersCount?: Maybe<Scalars['Int']>;
  keystone: KeystoneMeta;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
};


export type QueryBetsArgs = {
  where?: BetWhereInput;
  orderBy?: Array<BetOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryBetArgs = {
  where: BetWhereUniqueInput;
};


export type QueryBetsCountArgs = {
  where?: BetWhereInput;
};


export type QueryChoicesArgs = {
  where?: ChoiceWhereInput;
  orderBy?: Array<ChoiceOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryChoiceArgs = {
  where: ChoiceWhereUniqueInput;
};


export type QueryChoicesCountArgs = {
  where?: ChoiceWhereInput;
};


export type QueryCloudImagesArgs = {
  where?: CloudImageWhereInput;
  orderBy?: Array<CloudImageOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryCloudImageArgs = {
  where: CloudImageWhereUniqueInput;
};


export type QueryCloudImagesCountArgs = {
  where?: CloudImageWhereInput;
};


export type QueryContestsArgs = {
  where?: ContestWhereInput;
  orderBy?: Array<ContestOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryContestArgs = {
  where: ContestWhereUniqueInput;
};


export type QueryContestsCountArgs = {
  where?: ContestWhereInput;
};


export type QueryHistoriesArgs = {
  where?: HistoryWhereInput;
  orderBy?: Array<HistoryOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryHistoryArgs = {
  where: HistoryWhereUniqueInput;
};


export type QueryHistoriesCountArgs = {
  where?: HistoryWhereInput;
};


export type QueryLinesArgs = {
  where?: LineWhereInput;
  orderBy?: Array<LineOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryLineArgs = {
  where: LineWhereUniqueInput;
};


export type QueryLinesCountArgs = {
  where?: LineWhereInput;
};


export type QueryRegistrationsArgs = {
  where?: RegistrationWhereInput;
  orderBy?: Array<RegistrationOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryRegistrationArgs = {
  where: RegistrationWhereUniqueInput;
};


export type QueryRegistrationsCountArgs = {
  where?: RegistrationWhereInput;
};


export type QueryRuleSetsArgs = {
  where?: RuleSetWhereInput;
  orderBy?: Array<RuleSetOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryRuleSetArgs = {
  where: RuleSetWhereUniqueInput;
};


export type QueryRuleSetsCountArgs = {
  where?: RuleSetWhereInput;
};


export type QueryStandingsArgs = {
  where?: StandingWhereInput;
  orderBy?: Array<StandingOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryStandingArgs = {
  where: StandingWhereUniqueInput;
};


export type QueryStandingsCountArgs = {
  where?: StandingWhereInput;
};


export type QueryUsersArgs = {
  where?: UserWhereInput;
  orderBy?: Array<UserOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};


export type QueryValidateUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RedeemUserPasswordResetTokenResult = {
  __typename?: 'RedeemUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

export type Registration = {
  __typename?: 'Registration';
  id: Scalars['ID'];
  hasPaid?: Maybe<Scalars['Boolean']>;
  contest?: Maybe<Contest>;
  user?: Maybe<User>;
  counts?: Maybe<PointCounts>;
};

export type RegistrationCreateInput = {
  hasPaid?: Maybe<Scalars['Boolean']>;
  contest?: Maybe<ContestRelateToOneForCreateInput>;
  user?: Maybe<UserRelateToOneForCreateInput>;
};

export type RegistrationManyRelationFilter = {
  every?: Maybe<RegistrationWhereInput>;
  some?: Maybe<RegistrationWhereInput>;
  none?: Maybe<RegistrationWhereInput>;
};

export type RegistrationOrderByInput = {
  id?: Maybe<OrderDirection>;
  hasPaid?: Maybe<OrderDirection>;
};

export type RegistrationRelateToManyForCreateInput = {
  create?: Maybe<Array<RegistrationCreateInput>>;
  connect?: Maybe<Array<RegistrationWhereUniqueInput>>;
};

export type RegistrationRelateToManyForUpdateInput = {
  disconnect?: Maybe<Array<RegistrationWhereUniqueInput>>;
  set?: Maybe<Array<RegistrationWhereUniqueInput>>;
  create?: Maybe<Array<RegistrationCreateInput>>;
  connect?: Maybe<Array<RegistrationWhereUniqueInput>>;
};

export type RegistrationUpdateArgs = {
  where: RegistrationWhereUniqueInput;
  data: RegistrationUpdateInput;
};

export type RegistrationUpdateInput = {
  hasPaid?: Maybe<Scalars['Boolean']>;
  contest?: Maybe<ContestRelateToOneForUpdateInput>;
  user?: Maybe<UserRelateToOneForUpdateInput>;
};

export type RegistrationWhereInput = {
  AND?: Maybe<Array<RegistrationWhereInput>>;
  OR?: Maybe<Array<RegistrationWhereInput>>;
  NOT?: Maybe<Array<RegistrationWhereInput>>;
  id?: Maybe<IdFilter>;
  hasPaid?: Maybe<BooleanFilter>;
  contest?: Maybe<ContestWhereInput>;
  user?: Maybe<UserWhereInput>;
};

export type RegistrationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type RuleSet = {
  __typename?: 'RuleSet';
  id: Scalars['ID'];
  maxBets?: Maybe<Scalars['Int']>;
  maxSuperBets?: Maybe<Scalars['Int']>;
  superBetPointCount?: Maybe<Scalars['Int']>;
  contest?: Maybe<Contest>;
};

export type RuleSetCreateInput = {
  maxBets?: Maybe<Scalars['Int']>;
  maxSuperBets?: Maybe<Scalars['Int']>;
  superBetPointCount?: Maybe<Scalars['Int']>;
  contest?: Maybe<ContestRelateToOneForCreateInput>;
};

export type RuleSetOrderByInput = {
  id?: Maybe<OrderDirection>;
  maxBets?: Maybe<OrderDirection>;
  maxSuperBets?: Maybe<OrderDirection>;
  superBetPointCount?: Maybe<OrderDirection>;
};

export type RuleSetRelateToOneForCreateInput = {
  create?: Maybe<RuleSetCreateInput>;
  connect?: Maybe<RuleSetWhereUniqueInput>;
};

export type RuleSetRelateToOneForUpdateInput = {
  create?: Maybe<RuleSetCreateInput>;
  connect?: Maybe<RuleSetWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type RuleSetUpdateArgs = {
  where: RuleSetWhereUniqueInput;
  data: RuleSetUpdateInput;
};

export type RuleSetUpdateInput = {
  maxBets?: Maybe<Scalars['Int']>;
  maxSuperBets?: Maybe<Scalars['Int']>;
  superBetPointCount?: Maybe<Scalars['Int']>;
  contest?: Maybe<ContestRelateToOneForUpdateInput>;
};

export type RuleSetWhereInput = {
  AND?: Maybe<Array<RuleSetWhereInput>>;
  OR?: Maybe<Array<RuleSetWhereInput>>;
  NOT?: Maybe<Array<RuleSetWhereInput>>;
  id?: Maybe<IdFilter>;
  maxBets?: Maybe<IntNullableFilter>;
  maxSuperBets?: Maybe<IntNullableFilter>;
  superBetPointCount?: Maybe<IntNullableFilter>;
  contest?: Maybe<ContestWhereInput>;
};

export type RuleSetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Standing = {
  __typename?: 'Standing';
  id: Scalars['ID'];
  gamesPlayed?: Maybe<Scalars['Int']>;
  wins?: Maybe<Scalars['Int']>;
  totalGames?: Maybe<Scalars['Int']>;
  line?: Maybe<Line>;
};

export type StandingCreateInput = {
  gamesPlayed?: Maybe<Scalars['Int']>;
  wins?: Maybe<Scalars['Int']>;
  totalGames?: Maybe<Scalars['Int']>;
  line?: Maybe<LineRelateToOneForCreateInput>;
};

export type StandingManyRelationFilter = {
  every?: Maybe<StandingWhereInput>;
  some?: Maybe<StandingWhereInput>;
  none?: Maybe<StandingWhereInput>;
};

export type StandingOrderByInput = {
  id?: Maybe<OrderDirection>;
  gamesPlayed?: Maybe<OrderDirection>;
  wins?: Maybe<OrderDirection>;
  totalGames?: Maybe<OrderDirection>;
};

export type StandingRelateToManyForCreateInput = {
  create?: Maybe<Array<StandingCreateInput>>;
  connect?: Maybe<Array<StandingWhereUniqueInput>>;
};

export type StandingRelateToManyForUpdateInput = {
  disconnect?: Maybe<Array<StandingWhereUniqueInput>>;
  set?: Maybe<Array<StandingWhereUniqueInput>>;
  create?: Maybe<Array<StandingCreateInput>>;
  connect?: Maybe<Array<StandingWhereUniqueInput>>;
};

export type StandingUpdateArgs = {
  where: StandingWhereUniqueInput;
  data: StandingUpdateInput;
};

export type StandingUpdateInput = {
  gamesPlayed?: Maybe<Scalars['Int']>;
  wins?: Maybe<Scalars['Int']>;
  totalGames?: Maybe<Scalars['Int']>;
  line?: Maybe<LineRelateToOneForUpdateInput>;
};

export type StandingWhereInput = {
  AND?: Maybe<Array<StandingWhereInput>>;
  OR?: Maybe<Array<StandingWhereInput>>;
  NOT?: Maybe<Array<StandingWhereInput>>;
  id?: Maybe<IdFilter>;
  gamesPlayed?: Maybe<IntFilter>;
  wins?: Maybe<IntFilter>;
  totalGames?: Maybe<IntFilter>;
  line?: Maybe<LineWhereInput>;
};

export type StandingWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};


export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordState>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  bets?: Maybe<Array<Bet>>;
  betsCount?: Maybe<Scalars['Int']>;
  avatarImage?: Maybe<CloudImage>;
  registrations?: Maybe<Array<Registration>>;
  registrationsCount?: Maybe<Scalars['Int']>;
  histories?: Maybe<Array<History>>;
  historiesCount?: Maybe<Scalars['Int']>;
  passwordResetToken?: Maybe<PasswordState>;
  passwordResetIssuedAt?: Maybe<Scalars['DateTime']>;
  passwordResetRedeemedAt?: Maybe<Scalars['DateTime']>;
};


export type UserBetsArgs = {
  where?: BetWhereInput;
  orderBy?: Array<BetOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type UserBetsCountArgs = {
  where?: BetWhereInput;
};


export type UserRegistrationsArgs = {
  where?: RegistrationWhereInput;
  orderBy?: Array<RegistrationOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type UserRegistrationsCountArgs = {
  where?: RegistrationWhereInput;
};


export type UserHistoriesArgs = {
  where?: HistoryWhereInput;
  orderBy?: Array<HistoryOrderByInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type UserHistoriesCountArgs = {
  where?: HistoryWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordSuccess | UserAuthenticationWithPasswordFailure;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  sessionToken: Scalars['String'];
  item: User;
};

export type UserCreateInput = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  bets?: Maybe<BetRelateToManyForCreateInput>;
  avatarImage?: Maybe<CloudImageRelateToOneForCreateInput>;
  registrations?: Maybe<RegistrationRelateToManyForCreateInput>;
  histories?: Maybe<HistoryRelateToManyForCreateInput>;
  passwordResetToken?: Maybe<Scalars['String']>;
  passwordResetIssuedAt?: Maybe<Scalars['DateTime']>;
  passwordResetRedeemedAt?: Maybe<Scalars['DateTime']>;
};

export type UserOrderByInput = {
  id?: Maybe<OrderDirection>;
  email?: Maybe<OrderDirection>;
  name?: Maybe<OrderDirection>;
  userName?: Maybe<OrderDirection>;
  isAdmin?: Maybe<OrderDirection>;
  passwordResetIssuedAt?: Maybe<OrderDirection>;
  passwordResetRedeemedAt?: Maybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserRelateToOneForUpdateInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type UserUpdateArgs = {
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
};

export type UserUpdateInput = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  bets?: Maybe<BetRelateToManyForUpdateInput>;
  avatarImage?: Maybe<CloudImageRelateToOneForUpdateInput>;
  registrations?: Maybe<RegistrationRelateToManyForUpdateInput>;
  histories?: Maybe<HistoryRelateToManyForUpdateInput>;
  passwordResetToken?: Maybe<Scalars['String']>;
  passwordResetIssuedAt?: Maybe<Scalars['DateTime']>;
  passwordResetRedeemedAt?: Maybe<Scalars['DateTime']>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<IdFilter>;
  email?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  userName?: Maybe<StringFilter>;
  password?: Maybe<PasswordFilter>;
  isAdmin?: Maybe<BooleanFilter>;
  bets?: Maybe<BetManyRelationFilter>;
  avatarImage?: Maybe<CloudImageWhereInput>;
  registrations?: Maybe<RegistrationManyRelationFilter>;
  histories?: Maybe<HistoryManyRelationFilter>;
  passwordResetToken?: Maybe<PasswordFilter>;
  passwordResetIssuedAt?: Maybe<DateTimeNullableFilter>;
  passwordResetRedeemedAt?: Maybe<DateTimeNullableFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
};

export type ValidateUserPasswordResetTokenResult = {
  __typename?: 'ValidateUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};
