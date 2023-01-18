import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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
  winner?: Maybe<User>;
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
  winner?: Maybe<UserRelateToOneForCreateInput>;
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
  winner?: Maybe<UserRelateToOneForUpdateInput>;
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
  winner?: Maybe<UserWhereInput>;
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
  labelName?: Maybe<Scalars['String']>;
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
  isPremium?: Maybe<Scalars['Boolean']>;
  contest?: Maybe<Contest>;
  user?: Maybe<User>;
  counts?: Maybe<PointCounts>;
};

export type RegistrationCreateInput = {
  hasPaid?: Maybe<Scalars['Boolean']>;
  isPremium?: Maybe<Scalars['Boolean']>;
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
  isPremium?: Maybe<OrderDirection>;
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
  isPremium?: Maybe<Scalars['Boolean']>;
  contest?: Maybe<ContestRelateToOneForUpdateInput>;
  user?: Maybe<UserRelateToOneForUpdateInput>;
};

export type RegistrationWhereInput = {
  AND?: Maybe<Array<RegistrationWhereInput>>;
  OR?: Maybe<Array<RegistrationWhereInput>>;
  NOT?: Maybe<Array<RegistrationWhereInput>>;
  id?: Maybe<IdFilter>;
  hasPaid?: Maybe<BooleanFilter>;
  isPremium?: Maybe<BooleanFilter>;
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

export type CheckIfEmailAvailableQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type CheckIfEmailAvailableQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'usersCount'>
);

export type CheckIfUsernameAvailableQueryVariables = Exact<{
  userName: Scalars['String'];
}>;


export type CheckIfUsernameAvailableQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'usersCount'>
);

export type RequestResetMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type RequestResetMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'sendUserPasswordResetLink'>
);

export type ResetMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
}>;


export type ResetMutation = (
  { __typename?: 'Mutation' }
  & { redeemUserPasswordResetToken?: Maybe<(
    { __typename?: 'RedeemUserPasswordResetTokenResult' }
    & Pick<RedeemUserPasswordResetTokenResult, 'code' | 'message'>
  )> }
);

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { authenticateUserWithPassword?: Maybe<(
    { __typename?: 'UserAuthenticationWithPasswordSuccess' }
    & { item: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'name' | 'userName'>
    ) }
  ) | (
    { __typename?: 'UserAuthenticationWithPasswordFailure' }
    & Pick<UserAuthenticationWithPasswordFailure, 'message'>
  )> }
);

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'endSession'>
);

export type SignUpMutationVariables = Exact<{
  email: Scalars['String'];
  name: Scalars['String'];
  userName: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { createUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'name' | 'userName'>
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID'];
  name: Scalars['String'];
  userName: Scalars['String'];
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'userName' | 'name'>
  )> }
);

export type UpdatePasswordMutationVariables = Exact<{
  id: Scalars['ID'];
  password: Scalars['String'];
}>;


export type UpdatePasswordMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'userName' | 'name'>
  )> }
);

export type UpdateUserAvatarMutationVariables = Exact<{
  id: Scalars['ID'];
  userName: Scalars['String'];
  image?: Maybe<Scalars['Upload']>;
}>;


export type UpdateUserAvatarMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'userName' | 'name'>
    & { avatarImage?: Maybe<(
      { __typename?: 'CloudImage' }
      & Pick<CloudImage, 'altText'>
      & { image?: Maybe<(
        { __typename?: 'CloudinaryImage_File' }
        & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
      )> }
    )> }
  )> }
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { authenticatedItem?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'name' | 'userName' | 'isAdmin'>
    & { avatarImage?: Maybe<(
      { __typename?: 'CloudImage' }
      & Pick<CloudImage, 'id' | 'altText'>
      & { image?: Maybe<(
        { __typename?: 'CloudinaryImage_File' }
        & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
      )> }
    )> }
  )> }
);

export type AllContestsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllContestsQuery = (
  { __typename?: 'Query' }
  & { contests?: Maybe<Array<(
    { __typename?: 'Contest' }
    & Pick<Contest, 'id' | 'name' | 'description' | 'status' | 'entryFee' | 'contestType'>
    & { lines?: Maybe<Array<(
      { __typename?: 'Line' }
      & Pick<Line, 'id'>
      & { choices?: Maybe<Array<(
        { __typename?: 'Choice' }
        & Pick<Choice, 'id'>
      )>> }
    )>>, registrations?: Maybe<Array<(
      { __typename?: 'Registration' }
      & Pick<Registration, 'id'>
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id'>
      )> }
    )>>, image?: Maybe<(
      { __typename?: 'CloudImage' }
      & Pick<CloudImage, 'altText'>
      & { image?: Maybe<(
        { __typename?: 'CloudinaryImage_File' }
        & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
      )> }
    )>, winner?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'userName'>
      & { avatarImage?: Maybe<(
        { __typename?: 'CloudImage' }
        & Pick<CloudImage, 'id' | 'altText'>
        & { image?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )> }
    )> }
  )>> }
);

export type ContestByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ContestByIdQuery = (
  { __typename?: 'Query' }
  & { contest?: Maybe<(
    { __typename?: 'Contest' }
    & Pick<Contest, 'id' | 'name' | 'description' | 'status' | 'entryFee' | 'contestType'>
    & { ruleSet?: Maybe<(
      { __typename?: 'RuleSet' }
      & Pick<RuleSet, 'maxBets' | 'maxSuperBets' | 'superBetPointCount'>
    )>, lines?: Maybe<Array<(
      { __typename?: 'Line' }
      & Pick<Line, 'id' | 'benchmark' | 'closingTime' | 'title'>
      & { image?: Maybe<(
        { __typename?: 'CloudImage' }
        & Pick<CloudImage, 'id' | 'altText'>
        & { image?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )>, choices?: Maybe<Array<(
        { __typename?: 'Choice' }
        & Pick<Choice, 'id' | 'selection' | 'isWin'>
        & { image?: Maybe<(
          { __typename?: 'CloudImage' }
          & Pick<CloudImage, 'id' | 'altText'>
          & { image?: Maybe<(
            { __typename?: 'CloudinaryImage_File' }
            & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
          )> }
        )>, secondaryImage?: Maybe<(
          { __typename?: 'CloudImage' }
          & Pick<CloudImage, 'id' | 'altText'>
          & { image?: Maybe<(
            { __typename?: 'CloudinaryImage_File' }
            & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
          )> }
        )> }
      )>> }
    )>>, registrations?: Maybe<Array<(
      { __typename?: 'Registration' }
      & Pick<Registration, 'id' | 'hasPaid' | 'isPremium'>
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email' | 'userName'>
        & { avatarImage?: Maybe<(
          { __typename?: 'CloudImage' }
          & Pick<CloudImage, 'id' | 'altText'>
          & { image?: Maybe<(
            { __typename?: 'CloudinaryImage_File' }
            & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
          )> }
        )> }
      )> }
    )>>, image?: Maybe<(
      { __typename?: 'CloudImage' }
      & Pick<CloudImage, 'id' | 'altText'>
      & { image?: Maybe<(
        { __typename?: 'CloudinaryImage_File' }
        & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
      )> }
    )>, winner?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'userName'>
      & { avatarImage?: Maybe<(
        { __typename?: 'CloudImage' }
        & Pick<CloudImage, 'id' | 'altText'>
        & { image?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )> }
    )> }
  )> }
);

export type ContestRegistrationMutationVariables = Exact<{
  userId: Scalars['ID'];
  contestId: Scalars['ID'];
}>;


export type ContestRegistrationMutation = (
  { __typename?: 'Mutation' }
  & { createRegistration?: Maybe<(
    { __typename?: 'Registration' }
    & Pick<Registration, 'id'>
    & { contest?: Maybe<(
      { __typename?: 'Contest' }
      & Pick<Contest, 'id'>
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )> }
  )> }
);

export type DeleteContestRegistrationMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteContestRegistrationMutation = (
  { __typename?: 'Mutation' }
  & { deleteRegistration?: Maybe<(
    { __typename?: 'Registration' }
    & Pick<Registration, 'id'>
  )> }
);

export type MakeBetMutationVariables = Exact<{
  choiceId: Scalars['ID'];
  userId: Scalars['ID'];
  isSuper: Scalars['Boolean'];
}>;


export type MakeBetMutation = (
  { __typename?: 'Mutation' }
  & { createBet?: Maybe<(
    { __typename?: 'Bet' }
    & Pick<Bet, 'id' | 'isSuper'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )>, choice?: Maybe<(
      { __typename?: 'Choice' }
      & Pick<Choice, 'id'>
    )> }
  )> }
);

export type DeleteBetMutationVariables = Exact<{
  betId: Scalars['ID'];
}>;


export type DeleteBetMutation = (
  { __typename?: 'Mutation' }
  & { deleteBet?: Maybe<(
    { __typename?: 'Bet' }
    & Pick<Bet, 'id'>
  )> }
);

export type TrackerStatusQueryVariables = Exact<{
  contestId: Scalars['ID'];
}>;


export type TrackerStatusQuery = (
  { __typename?: 'Query' }
  & { lines?: Maybe<Array<(
    { __typename?: 'Line' }
    & Pick<Line, 'id' | 'title' | 'benchmark'>
    & { image?: Maybe<(
      { __typename?: 'CloudImage' }
      & Pick<CloudImage, 'id' | 'altText'>
      & { image?: Maybe<(
        { __typename?: 'CloudinaryImage_File' }
        & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
      )> }
    )>, standings?: Maybe<Array<(
      { __typename?: 'Standing' }
      & Pick<Standing, 'id' | 'wins' | 'gamesPlayed' | 'totalGames'>
    )>>, choices?: Maybe<Array<(
      { __typename?: 'Choice' }
      & Pick<Choice, 'id' | 'selection' | 'isWin'>
      & { image?: Maybe<(
        { __typename?: 'CloudImage' }
        & Pick<CloudImage, 'altText'>
        & { image?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )> }
    )>> }
  )>> }
);

export type AtsTrackerStatusQueryVariables = Exact<{
  contestId: Scalars['ID'];
}>;


export type AtsTrackerStatusQuery = (
  { __typename?: 'Query' }
  & { lines?: Maybe<Array<(
    { __typename?: 'Line' }
    & Pick<Line, 'id' | 'title' | 'benchmark' | 'closingTime'>
    & { image?: Maybe<(
      { __typename?: 'CloudImage' }
      & Pick<CloudImage, 'id' | 'altText'>
      & { image?: Maybe<(
        { __typename?: 'CloudinaryImage_File' }
        & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
      )> }
    )>, choices?: Maybe<Array<(
      { __typename?: 'Choice' }
      & Pick<Choice, 'id' | 'selection' | 'isWin'>
      & { image?: Maybe<(
        { __typename?: 'CloudImage' }
        & Pick<CloudImage, 'altText'>
        & { image?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )>, secondaryImage?: Maybe<(
        { __typename?: 'CloudImage' }
        & Pick<CloudImage, 'altText'>
        & { image?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )>, bets?: Maybe<Array<(
        { __typename?: 'Bet' }
        & Pick<Bet, 'id' | 'isSuper'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'email'>
        )> }
      )>> }
    )>> }
  )>> }
);

export type LeaderboardQueryVariables = Exact<{
  contestId: Scalars['ID'];
}>;


export type LeaderboardQuery = (
  { __typename?: 'Query' }
  & { registrations?: Maybe<Array<(
    { __typename?: 'Registration' }
    & Pick<Registration, 'id'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'userName'>
      & { avatarImage?: Maybe<(
        { __typename?: 'CloudImage' }
        & Pick<CloudImage, 'id' | 'altText'>
        & { image?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )> }
    )>, counts?: Maybe<(
      { __typename?: 'PointCounts' }
      & Pick<PointCounts, 'locked' | 'likely' | 'possible'>
    )> }
  )>> }
);

export type ContestBetsQueryVariables = Exact<{
  contestId: Scalars['ID'];
}>;


export type ContestBetsQuery = (
  { __typename?: 'Query' }
  & { bets?: Maybe<Array<(
    { __typename?: 'Bet' }
    & Pick<Bet, 'id' | 'isSuper'>
    & { choice?: Maybe<(
      { __typename?: 'Choice' }
      & Pick<Choice, 'id'>
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'userName'>
      & { avatarImage?: Maybe<(
        { __typename?: 'CloudImage' }
        & Pick<CloudImage, 'id' | 'altText'>
        & { image?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )> }
    )> }
  )>> }
);

export type AtsLeaderboardQueryVariables = Exact<{
  contestId: Scalars['ID'];
}>;


export type AtsLeaderboardQuery = (
  { __typename?: 'Query' }
  & { contest?: Maybe<(
    { __typename?: 'Contest' }
    & { ruleSet?: Maybe<(
      { __typename?: 'RuleSet' }
      & Pick<RuleSet, 'id' | 'superBetPointCount' | 'maxBets' | 'maxSuperBets'>
    )>, registrations?: Maybe<Array<(
      { __typename?: 'Registration' }
      & Pick<Registration, 'id' | 'isPremium'>
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'userName'>
        & { avatarImage?: Maybe<(
          { __typename?: 'CloudImage' }
          & Pick<CloudImage, 'id' | 'altText'>
          & { image?: Maybe<(
            { __typename?: 'CloudinaryImage_File' }
            & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
          )> }
        )> }
      )> }
    )>>, lines?: Maybe<Array<(
      { __typename?: 'Line' }
      & Pick<Line, 'id' | 'title' | 'closingTime'>
      & { choices?: Maybe<Array<(
        { __typename?: 'Choice' }
        & Pick<Choice, 'id' | 'selection' | 'isWin'>
        & { image?: Maybe<(
          { __typename?: 'CloudImage' }
          & Pick<CloudImage, 'altText'>
          & { image?: Maybe<(
            { __typename?: 'CloudinaryImage_File' }
            & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
          )> }
        )>, secondaryImage?: Maybe<(
          { __typename?: 'CloudImage' }
          & Pick<CloudImage, 'altText'>
          & { image?: Maybe<(
            { __typename?: 'CloudinaryImage_File' }
            & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
          )> }
        )>, bets?: Maybe<Array<(
          { __typename?: 'Bet' }
          & Pick<Bet, 'id' | 'isSuper'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id'>
          )> }
        )>> }
      )>> }
    )>> }
  )> }
);

export type HistoriesByTypeQueryVariables = Exact<{
  contestType: HistoryContestTypeType;
}>;


export type HistoriesByTypeQuery = (
  { __typename?: 'Query' }
  & { histories?: Maybe<Array<(
    { __typename?: 'History' }
    & Pick<History, 'id' | 'display' | 'year'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'userName'>
      & { avatarImage?: Maybe<(
        { __typename?: 'CloudImage' }
        & Pick<CloudImage, 'id' | 'altText'>
        & { image?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )> }
    )> }
  )>> }
);

export type UserContestBetsQueryVariables = Exact<{
  userId: Scalars['ID'];
  contestId: Scalars['ID'];
}>;


export type UserContestBetsQuery = (
  { __typename?: 'Query' }
  & { contest?: Maybe<(
    { __typename?: 'Contest' }
    & Pick<Contest, 'id'>
    & { lines?: Maybe<Array<(
      { __typename?: 'Line' }
      & Pick<Line, 'id' | 'benchmark' | 'closingTime' | 'title'>
      & { image?: Maybe<(
        { __typename?: 'CloudImage' }
        & Pick<CloudImage, 'id' | 'altText'>
        & { image?: Maybe<(
          { __typename?: 'CloudinaryImage_File' }
          & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
        )> }
      )>, choices?: Maybe<Array<(
        { __typename?: 'Choice' }
        & Pick<Choice, 'id' | 'selection' | 'isWin'>
        & { bets?: Maybe<Array<(
          { __typename?: 'Bet' }
          & Pick<Bet, 'id' | 'isSuper'>
        )>> }
      )>> }
    )>> }
  )> }
);


export const CheckIfEmailAvailableDocument = gql`
    query CheckIfEmailAvailable($email: String!) {
  usersCount(where: {email: {equals: $email}})
}
    `;

/**
 * __useCheckIfEmailAvailableQuery__
 *
 * To run a query within a React component, call `useCheckIfEmailAvailableQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckIfEmailAvailableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckIfEmailAvailableQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCheckIfEmailAvailableQuery(baseOptions: Apollo.QueryHookOptions<CheckIfEmailAvailableQuery, CheckIfEmailAvailableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckIfEmailAvailableQuery, CheckIfEmailAvailableQueryVariables>(CheckIfEmailAvailableDocument, options);
      }
export function useCheckIfEmailAvailableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckIfEmailAvailableQuery, CheckIfEmailAvailableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckIfEmailAvailableQuery, CheckIfEmailAvailableQueryVariables>(CheckIfEmailAvailableDocument, options);
        }
export type CheckIfEmailAvailableQueryHookResult = ReturnType<typeof useCheckIfEmailAvailableQuery>;
export type CheckIfEmailAvailableLazyQueryHookResult = ReturnType<typeof useCheckIfEmailAvailableLazyQuery>;
export type CheckIfEmailAvailableQueryResult = Apollo.QueryResult<CheckIfEmailAvailableQuery, CheckIfEmailAvailableQueryVariables>;
export const CheckIfUsernameAvailableDocument = gql`
    query CheckIfUsernameAvailable($userName: String!) {
  usersCount(where: {userName: {equals: $userName}})
}
    `;

/**
 * __useCheckIfUsernameAvailableQuery__
 *
 * To run a query within a React component, call `useCheckIfUsernameAvailableQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckIfUsernameAvailableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckIfUsernameAvailableQuery({
 *   variables: {
 *      userName: // value for 'userName'
 *   },
 * });
 */
export function useCheckIfUsernameAvailableQuery(baseOptions: Apollo.QueryHookOptions<CheckIfUsernameAvailableQuery, CheckIfUsernameAvailableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckIfUsernameAvailableQuery, CheckIfUsernameAvailableQueryVariables>(CheckIfUsernameAvailableDocument, options);
      }
export function useCheckIfUsernameAvailableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckIfUsernameAvailableQuery, CheckIfUsernameAvailableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckIfUsernameAvailableQuery, CheckIfUsernameAvailableQueryVariables>(CheckIfUsernameAvailableDocument, options);
        }
export type CheckIfUsernameAvailableQueryHookResult = ReturnType<typeof useCheckIfUsernameAvailableQuery>;
export type CheckIfUsernameAvailableLazyQueryHookResult = ReturnType<typeof useCheckIfUsernameAvailableLazyQuery>;
export type CheckIfUsernameAvailableQueryResult = Apollo.QueryResult<CheckIfUsernameAvailableQuery, CheckIfUsernameAvailableQueryVariables>;
export const RequestResetDocument = gql`
    mutation RequestReset($email: String!) {
  sendUserPasswordResetLink(email: $email)
}
    `;
export type RequestResetMutationFn = Apollo.MutationFunction<RequestResetMutation, RequestResetMutationVariables>;

/**
 * __useRequestResetMutation__
 *
 * To run a mutation, you first call `useRequestResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestResetMutation, { data, loading, error }] = useRequestResetMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestResetMutation(baseOptions?: Apollo.MutationHookOptions<RequestResetMutation, RequestResetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestResetMutation, RequestResetMutationVariables>(RequestResetDocument, options);
      }
export type RequestResetMutationHookResult = ReturnType<typeof useRequestResetMutation>;
export type RequestResetMutationResult = Apollo.MutationResult<RequestResetMutation>;
export type RequestResetMutationOptions = Apollo.BaseMutationOptions<RequestResetMutation, RequestResetMutationVariables>;
export const ResetDocument = gql`
    mutation Reset($email: String!, $password: String!, $token: String!) {
  redeemUserPasswordResetToken(email: $email, token: $token, password: $password) {
    code
    message
  }
}
    `;
export type ResetMutationFn = Apollo.MutationFunction<ResetMutation, ResetMutationVariables>;

/**
 * __useResetMutation__
 *
 * To run a mutation, you first call `useResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetMutation, { data, loading, error }] = useResetMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useResetMutation(baseOptions?: Apollo.MutationHookOptions<ResetMutation, ResetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetMutation, ResetMutationVariables>(ResetDocument, options);
      }
export type ResetMutationHookResult = ReturnType<typeof useResetMutation>;
export type ResetMutationResult = Apollo.MutationResult<ResetMutation>;
export type ResetMutationOptions = Apollo.BaseMutationOptions<ResetMutation, ResetMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($email: String!, $password: String!) {
  authenticateUserWithPassword(email: $email, password: $password) {
    ... on UserAuthenticationWithPasswordSuccess {
      item {
        id
        email
        name
        userName
      }
    }
    ... on UserAuthenticationWithPasswordFailure {
      message
    }
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignOutDocument = gql`
    mutation SignOut {
  endSession
}
    `;
export type SignOutMutationFn = Apollo.MutationFunction<SignOutMutation, SignOutMutationVariables>;

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOutMutation(baseOptions?: Apollo.MutationHookOptions<SignOutMutation, SignOutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(SignOutDocument, options);
      }
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<SignOutMutation, SignOutMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($email: String!, $name: String!, $userName: String!, $password: String!) {
  createUser(
    data: {email: $email, password: $password, name: $name, userName: $userName}
  ) {
    id
    email
    name
    userName
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      userName: // value for 'userName'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: ID!, $name: String!, $userName: String!) {
  updateUser(where: {id: $id}, data: {name: $name, userName: $userName}) {
    id
    email
    userName
    name
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      userName: // value for 'userName'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdatePasswordDocument = gql`
    mutation UpdatePassword($id: ID!, $password: String!) {
  updateUser(where: {id: $id}, data: {password: $password}) {
    id
    email
    userName
    name
  }
}
    `;
export type UpdatePasswordMutationFn = Apollo.MutationFunction<UpdatePasswordMutation, UpdatePasswordMutationVariables>;

/**
 * __useUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordMutation, { data, loading, error }] = useUpdatePasswordMutation({
 *   variables: {
 *      id: // value for 'id'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useUpdatePasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>(UpdatePasswordDocument, options);
      }
export type UpdatePasswordMutationHookResult = ReturnType<typeof useUpdatePasswordMutation>;
export type UpdatePasswordMutationResult = Apollo.MutationResult<UpdatePasswordMutation>;
export type UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const UpdateUserAvatarDocument = gql`
    mutation UpdateUserAvatar($id: ID!, $userName: String!, $image: Upload) {
  updateUser(
    where: {id: $id}
    data: {avatarImage: {create: {image: $image, altText: $userName}}}
  ) {
    id
    email
    userName
    name
    avatarImage {
      image {
        publicUrlTransformed
      }
      altText
    }
  }
}
    `;
export type UpdateUserAvatarMutationFn = Apollo.MutationFunction<UpdateUserAvatarMutation, UpdateUserAvatarMutationVariables>;

/**
 * __useUpdateUserAvatarMutation__
 *
 * To run a mutation, you first call `useUpdateUserAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserAvatarMutation, { data, loading, error }] = useUpdateUserAvatarMutation({
 *   variables: {
 *      id: // value for 'id'
 *      userName: // value for 'userName'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useUpdateUserAvatarMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserAvatarMutation, UpdateUserAvatarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserAvatarMutation, UpdateUserAvatarMutationVariables>(UpdateUserAvatarDocument, options);
      }
export type UpdateUserAvatarMutationHookResult = ReturnType<typeof useUpdateUserAvatarMutation>;
export type UpdateUserAvatarMutationResult = Apollo.MutationResult<UpdateUserAvatarMutation>;
export type UpdateUserAvatarMutationOptions = Apollo.BaseMutationOptions<UpdateUserAvatarMutation, UpdateUserAvatarMutationVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  authenticatedItem {
    ... on User {
      id
      email
      name
      userName
      isAdmin
      avatarImage {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const AllContestsDocument = gql`
    query AllContests {
  contests {
    id
    name
    description
    status
    entryFee
    contestType
    lines {
      id
      choices {
        id
      }
    }
    registrations {
      id
      user {
        id
      }
    }
    image {
      image {
        publicUrlTransformed
      }
      altText
    }
    winner {
      id
      userName
      avatarImage {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
}
    `;

/**
 * __useAllContestsQuery__
 *
 * To run a query within a React component, call `useAllContestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllContestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllContestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllContestsQuery(baseOptions?: Apollo.QueryHookOptions<AllContestsQuery, AllContestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllContestsQuery, AllContestsQueryVariables>(AllContestsDocument, options);
      }
export function useAllContestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllContestsQuery, AllContestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllContestsQuery, AllContestsQueryVariables>(AllContestsDocument, options);
        }
export type AllContestsQueryHookResult = ReturnType<typeof useAllContestsQuery>;
export type AllContestsLazyQueryHookResult = ReturnType<typeof useAllContestsLazyQuery>;
export type AllContestsQueryResult = Apollo.QueryResult<AllContestsQuery, AllContestsQueryVariables>;
export const ContestByIdDocument = gql`
    query ContestById($id: ID!) {
  contest(where: {id: $id}) {
    id
    name
    description
    status
    entryFee
    contestType
    ruleSet {
      maxBets
      maxSuperBets
      superBetPointCount
    }
    lines(orderBy: {closingTime: asc}) {
      id
      benchmark
      closingTime
      title
      image {
        id
        image {
          publicUrlTransformed
        }
        altText
      }
      choices {
        id
        selection
        isWin
        image {
          id
          image {
            publicUrlTransformed
          }
          altText
        }
        secondaryImage {
          id
          image {
            publicUrlTransformed
          }
          altText
        }
      }
    }
    registrations {
      id
      hasPaid
      isPremium
      user {
        id
        email
        userName
        avatarImage {
          id
          altText
          image {
            publicUrlTransformed
          }
        }
      }
    }
    image {
      id
      image {
        publicUrlTransformed
      }
      altText
    }
    winner {
      id
      userName
      avatarImage {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
}
    `;

/**
 * __useContestByIdQuery__
 *
 * To run a query within a React component, call `useContestByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useContestByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContestByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useContestByIdQuery(baseOptions: Apollo.QueryHookOptions<ContestByIdQuery, ContestByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContestByIdQuery, ContestByIdQueryVariables>(ContestByIdDocument, options);
      }
export function useContestByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContestByIdQuery, ContestByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContestByIdQuery, ContestByIdQueryVariables>(ContestByIdDocument, options);
        }
export type ContestByIdQueryHookResult = ReturnType<typeof useContestByIdQuery>;
export type ContestByIdLazyQueryHookResult = ReturnType<typeof useContestByIdLazyQuery>;
export type ContestByIdQueryResult = Apollo.QueryResult<ContestByIdQuery, ContestByIdQueryVariables>;
export const ContestRegistrationDocument = gql`
    mutation ContestRegistration($userId: ID!, $contestId: ID!) {
  createRegistration(
    data: {user: {connect: {id: $userId}}, contest: {connect: {id: $contestId}}, hasPaid: false}
  ) {
    id
    contest {
      id
    }
    user {
      id
    }
  }
}
    `;
export type ContestRegistrationMutationFn = Apollo.MutationFunction<ContestRegistrationMutation, ContestRegistrationMutationVariables>;

/**
 * __useContestRegistrationMutation__
 *
 * To run a mutation, you first call `useContestRegistrationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContestRegistrationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contestRegistrationMutation, { data, loading, error }] = useContestRegistrationMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      contestId: // value for 'contestId'
 *   },
 * });
 */
export function useContestRegistrationMutation(baseOptions?: Apollo.MutationHookOptions<ContestRegistrationMutation, ContestRegistrationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ContestRegistrationMutation, ContestRegistrationMutationVariables>(ContestRegistrationDocument, options);
      }
export type ContestRegistrationMutationHookResult = ReturnType<typeof useContestRegistrationMutation>;
export type ContestRegistrationMutationResult = Apollo.MutationResult<ContestRegistrationMutation>;
export type ContestRegistrationMutationOptions = Apollo.BaseMutationOptions<ContestRegistrationMutation, ContestRegistrationMutationVariables>;
export const DeleteContestRegistrationDocument = gql`
    mutation DeleteContestRegistration($id: ID!) {
  deleteRegistration(where: {id: $id}) {
    id
  }
}
    `;
export type DeleteContestRegistrationMutationFn = Apollo.MutationFunction<DeleteContestRegistrationMutation, DeleteContestRegistrationMutationVariables>;

/**
 * __useDeleteContestRegistrationMutation__
 *
 * To run a mutation, you first call `useDeleteContestRegistrationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteContestRegistrationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteContestRegistrationMutation, { data, loading, error }] = useDeleteContestRegistrationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteContestRegistrationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteContestRegistrationMutation, DeleteContestRegistrationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteContestRegistrationMutation, DeleteContestRegistrationMutationVariables>(DeleteContestRegistrationDocument, options);
      }
export type DeleteContestRegistrationMutationHookResult = ReturnType<typeof useDeleteContestRegistrationMutation>;
export type DeleteContestRegistrationMutationResult = Apollo.MutationResult<DeleteContestRegistrationMutation>;
export type DeleteContestRegistrationMutationOptions = Apollo.BaseMutationOptions<DeleteContestRegistrationMutation, DeleteContestRegistrationMutationVariables>;
export const MakeBetDocument = gql`
    mutation MakeBet($choiceId: ID!, $userId: ID!, $isSuper: Boolean!) {
  createBet(
    data: {user: {connect: {id: $userId}}, choice: {connect: {id: $choiceId}}, isSuper: $isSuper}
  ) {
    id
    isSuper
    user {
      id
    }
    choice {
      id
    }
  }
}
    `;
export type MakeBetMutationFn = Apollo.MutationFunction<MakeBetMutation, MakeBetMutationVariables>;

/**
 * __useMakeBetMutation__
 *
 * To run a mutation, you first call `useMakeBetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMakeBetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [makeBetMutation, { data, loading, error }] = useMakeBetMutation({
 *   variables: {
 *      choiceId: // value for 'choiceId'
 *      userId: // value for 'userId'
 *      isSuper: // value for 'isSuper'
 *   },
 * });
 */
export function useMakeBetMutation(baseOptions?: Apollo.MutationHookOptions<MakeBetMutation, MakeBetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MakeBetMutation, MakeBetMutationVariables>(MakeBetDocument, options);
      }
export type MakeBetMutationHookResult = ReturnType<typeof useMakeBetMutation>;
export type MakeBetMutationResult = Apollo.MutationResult<MakeBetMutation>;
export type MakeBetMutationOptions = Apollo.BaseMutationOptions<MakeBetMutation, MakeBetMutationVariables>;
export const DeleteBetDocument = gql`
    mutation DeleteBet($betId: ID!) {
  deleteBet(where: {id: $betId}) {
    id
  }
}
    `;
export type DeleteBetMutationFn = Apollo.MutationFunction<DeleteBetMutation, DeleteBetMutationVariables>;

/**
 * __useDeleteBetMutation__
 *
 * To run a mutation, you first call `useDeleteBetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBetMutation, { data, loading, error }] = useDeleteBetMutation({
 *   variables: {
 *      betId: // value for 'betId'
 *   },
 * });
 */
export function useDeleteBetMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBetMutation, DeleteBetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBetMutation, DeleteBetMutationVariables>(DeleteBetDocument, options);
      }
export type DeleteBetMutationHookResult = ReturnType<typeof useDeleteBetMutation>;
export type DeleteBetMutationResult = Apollo.MutationResult<DeleteBetMutation>;
export type DeleteBetMutationOptions = Apollo.BaseMutationOptions<DeleteBetMutation, DeleteBetMutationVariables>;
export const TrackerStatusDocument = gql`
    query TrackerStatus($contestId: ID!) {
  lines(where: {contest: {id: {equals: $contestId}}}) {
    id
    title
    benchmark
    image {
      id
      altText
      image {
        publicUrlTransformed
      }
    }
    standings(orderBy: {gamesPlayed: asc}) {
      id
      wins
      gamesPlayed
      totalGames
    }
    choices {
      id
      selection
      isWin
      image {
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
}
    `;

/**
 * __useTrackerStatusQuery__
 *
 * To run a query within a React component, call `useTrackerStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackerStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackerStatusQuery({
 *   variables: {
 *      contestId: // value for 'contestId'
 *   },
 * });
 */
export function useTrackerStatusQuery(baseOptions: Apollo.QueryHookOptions<TrackerStatusQuery, TrackerStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrackerStatusQuery, TrackerStatusQueryVariables>(TrackerStatusDocument, options);
      }
export function useTrackerStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrackerStatusQuery, TrackerStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrackerStatusQuery, TrackerStatusQueryVariables>(TrackerStatusDocument, options);
        }
export type TrackerStatusQueryHookResult = ReturnType<typeof useTrackerStatusQuery>;
export type TrackerStatusLazyQueryHookResult = ReturnType<typeof useTrackerStatusLazyQuery>;
export type TrackerStatusQueryResult = Apollo.QueryResult<TrackerStatusQuery, TrackerStatusQueryVariables>;
export const AtsTrackerStatusDocument = gql`
    query ATSTrackerStatus($contestId: ID!) {
  lines(where: {contest: {id: {equals: $contestId}}}) {
    id
    title
    benchmark
    closingTime
    image {
      id
      altText
      image {
        publicUrlTransformed
      }
    }
    choices {
      id
      selection
      isWin
      image {
        image {
          publicUrlTransformed
        }
        altText
      }
      secondaryImage {
        image {
          publicUrlTransformed
        }
        altText
      }
      bets {
        id
        isSuper
        user {
          id
          email
        }
      }
    }
  }
}
    `;

/**
 * __useAtsTrackerStatusQuery__
 *
 * To run a query within a React component, call `useAtsTrackerStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useAtsTrackerStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAtsTrackerStatusQuery({
 *   variables: {
 *      contestId: // value for 'contestId'
 *   },
 * });
 */
export function useAtsTrackerStatusQuery(baseOptions: Apollo.QueryHookOptions<AtsTrackerStatusQuery, AtsTrackerStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AtsTrackerStatusQuery, AtsTrackerStatusQueryVariables>(AtsTrackerStatusDocument, options);
      }
export function useAtsTrackerStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AtsTrackerStatusQuery, AtsTrackerStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AtsTrackerStatusQuery, AtsTrackerStatusQueryVariables>(AtsTrackerStatusDocument, options);
        }
export type AtsTrackerStatusQueryHookResult = ReturnType<typeof useAtsTrackerStatusQuery>;
export type AtsTrackerStatusLazyQueryHookResult = ReturnType<typeof useAtsTrackerStatusLazyQuery>;
export type AtsTrackerStatusQueryResult = Apollo.QueryResult<AtsTrackerStatusQuery, AtsTrackerStatusQueryVariables>;
export const LeaderboardDocument = gql`
    query Leaderboard($contestId: ID!) {
  registrations(where: {contest: {id: {equals: $contestId}}}) {
    id
    user {
      id
      userName
      avatarImage {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
    }
    counts {
      locked
      likely
      possible
    }
  }
}
    `;

/**
 * __useLeaderboardQuery__
 *
 * To run a query within a React component, call `useLeaderboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useLeaderboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLeaderboardQuery({
 *   variables: {
 *      contestId: // value for 'contestId'
 *   },
 * });
 */
export function useLeaderboardQuery(baseOptions: Apollo.QueryHookOptions<LeaderboardQuery, LeaderboardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LeaderboardQuery, LeaderboardQueryVariables>(LeaderboardDocument, options);
      }
export function useLeaderboardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LeaderboardQuery, LeaderboardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LeaderboardQuery, LeaderboardQueryVariables>(LeaderboardDocument, options);
        }
export type LeaderboardQueryHookResult = ReturnType<typeof useLeaderboardQuery>;
export type LeaderboardLazyQueryHookResult = ReturnType<typeof useLeaderboardLazyQuery>;
export type LeaderboardQueryResult = Apollo.QueryResult<LeaderboardQuery, LeaderboardQueryVariables>;
export const ContestBetsDocument = gql`
    query ContestBets($contestId: ID!) {
  bets(where: {choice: {line: {contest: {id: {equals: $contestId}}}}}) {
    id
    isSuper
    choice {
      id
    }
    user {
      id
      userName
      avatarImage {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
}
    `;

/**
 * __useContestBetsQuery__
 *
 * To run a query within a React component, call `useContestBetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContestBetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContestBetsQuery({
 *   variables: {
 *      contestId: // value for 'contestId'
 *   },
 * });
 */
export function useContestBetsQuery(baseOptions: Apollo.QueryHookOptions<ContestBetsQuery, ContestBetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ContestBetsQuery, ContestBetsQueryVariables>(ContestBetsDocument, options);
      }
export function useContestBetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ContestBetsQuery, ContestBetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ContestBetsQuery, ContestBetsQueryVariables>(ContestBetsDocument, options);
        }
export type ContestBetsQueryHookResult = ReturnType<typeof useContestBetsQuery>;
export type ContestBetsLazyQueryHookResult = ReturnType<typeof useContestBetsLazyQuery>;
export type ContestBetsQueryResult = Apollo.QueryResult<ContestBetsQuery, ContestBetsQueryVariables>;
export const AtsLeaderboardQueryDocument = gql`
    query ATSLeaderboardQuery($contestId: ID!) {
  contest(where: {id: $contestId}) {
    ruleSet {
      id
      superBetPointCount
      maxBets
      maxSuperBets
    }
    registrations {
      id
      isPremium
      user {
        id
        userName
        avatarImage {
          id
          altText
          image {
            publicUrlTransformed
          }
        }
      }
    }
    lines {
      id
      title
      closingTime
      choices {
        id
        selection
        isWin
        image {
          image {
            publicUrlTransformed
          }
          altText
        }
        secondaryImage {
          image {
            publicUrlTransformed
          }
          altText
        }
        bets {
          id
          isSuper
          user {
            id
          }
        }
      }
    }
  }
}
    `;

/**
 * __useAtsLeaderboardQuery__
 *
 * To run a query within a React component, call `useAtsLeaderboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useAtsLeaderboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAtsLeaderboardQuery({
 *   variables: {
 *      contestId: // value for 'contestId'
 *   },
 * });
 */
export function useAtsLeaderboardQuery(baseOptions: Apollo.QueryHookOptions<AtsLeaderboardQuery, AtsLeaderboardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AtsLeaderboardQuery, AtsLeaderboardQueryVariables>(AtsLeaderboardQueryDocument, options);
      }
export function useAtsLeaderboardQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AtsLeaderboardQuery, AtsLeaderboardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AtsLeaderboardQuery, AtsLeaderboardQueryVariables>(AtsLeaderboardQueryDocument, options);
        }
export type AtsLeaderboardQueryHookResult = ReturnType<typeof useAtsLeaderboardQuery>;
export type AtsLeaderboardQueryLazyQueryHookResult = ReturnType<typeof useAtsLeaderboardQueryLazyQuery>;
export type AtsLeaderboardQueryQueryResult = Apollo.QueryResult<AtsLeaderboardQuery, AtsLeaderboardQueryVariables>;
export const HistoriesByTypeQueryDocument = gql`
    query HistoriesByTypeQuery($contestType: HistoryContestTypeType!) {
  histories(where: {contestType: {equals: $contestType}}, orderBy: [{year: asc}]) {
    id
    display
    year
    user {
      id
      userName
      avatarImage {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
}
    `;

/**
 * __useHistoriesByTypeQuery__
 *
 * To run a query within a React component, call `useHistoriesByTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useHistoriesByTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHistoriesByTypeQuery({
 *   variables: {
 *      contestType: // value for 'contestType'
 *   },
 * });
 */
export function useHistoriesByTypeQuery(baseOptions: Apollo.QueryHookOptions<HistoriesByTypeQuery, HistoriesByTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HistoriesByTypeQuery, HistoriesByTypeQueryVariables>(HistoriesByTypeQueryDocument, options);
      }
export function useHistoriesByTypeQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HistoriesByTypeQuery, HistoriesByTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HistoriesByTypeQuery, HistoriesByTypeQueryVariables>(HistoriesByTypeQueryDocument, options);
        }
export type HistoriesByTypeQueryHookResult = ReturnType<typeof useHistoriesByTypeQuery>;
export type HistoriesByTypeQueryLazyQueryHookResult = ReturnType<typeof useHistoriesByTypeQueryLazyQuery>;
export type HistoriesByTypeQueryQueryResult = Apollo.QueryResult<HistoriesByTypeQuery, HistoriesByTypeQueryVariables>;
export const UserContestBetsQueryDocument = gql`
    query UserContestBetsQuery($userId: ID!, $contestId: ID!) {
  contest(where: {id: $contestId}) {
    id
    lines {
      id
      benchmark
      closingTime
      title
      image {
        id
        image {
          publicUrlTransformed
        }
        altText
      }
      choices {
        id
        selection
        isWin
        bets(where: {user: {id: {equals: $userId}}}) {
          id
          isSuper
        }
      }
    }
  }
}
    `;

/**
 * __useUserContestBetsQuery__
 *
 * To run a query within a React component, call `useUserContestBetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserContestBetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserContestBetsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      contestId: // value for 'contestId'
 *   },
 * });
 */
export function useUserContestBetsQuery(baseOptions: Apollo.QueryHookOptions<UserContestBetsQuery, UserContestBetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserContestBetsQuery, UserContestBetsQueryVariables>(UserContestBetsQueryDocument, options);
      }
export function useUserContestBetsQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserContestBetsQuery, UserContestBetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserContestBetsQuery, UserContestBetsQueryVariables>(UserContestBetsQueryDocument, options);
        }
export type UserContestBetsQueryHookResult = ReturnType<typeof useUserContestBetsQuery>;
export type UserContestBetsQueryLazyQueryHookResult = ReturnType<typeof useUserContestBetsQueryLazyQuery>;
export type UserContestBetsQueryQueryResult = Apollo.QueryResult<UserContestBetsQuery, UserContestBetsQueryVariables>;