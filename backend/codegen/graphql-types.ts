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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthenticatedItem = User;

/** A keystone list */
export type Bet = {
  __typename?: 'Bet';
  id: Scalars['ID'];
  user?: Maybe<User>;
  choice?: Maybe<Choice>;
  isSuper?: Maybe<Scalars['Boolean']>;
};

export type BetCreateInput = {
  user?: Maybe<UserRelateToOneInput>;
  choice?: Maybe<ChoiceRelateToOneInput>;
  isSuper?: Maybe<Scalars['Boolean']>;
};

export type BetOrderByInput = {
  id?: Maybe<OrderDirection>;
  isSuper?: Maybe<OrderDirection>;
};

export type BetRelateToManyInput = {
  create?: Maybe<Array<Maybe<BetCreateInput>>>;
  connect?: Maybe<Array<Maybe<BetWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<BetWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type BetUpdateInput = {
  user?: Maybe<UserRelateToOneInput>;
  choice?: Maybe<ChoiceRelateToOneInput>;
  isSuper?: Maybe<Scalars['Boolean']>;
};

export type BetWhereInput = {
  AND?: Maybe<Array<BetWhereInput>>;
  OR?: Maybe<Array<BetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  user?: Maybe<UserWhereInput>;
  user_is_null?: Maybe<Scalars['Boolean']>;
  choice?: Maybe<ChoiceWhereInput>;
  choice_is_null?: Maybe<Scalars['Boolean']>;
  isSuper?: Maybe<Scalars['Boolean']>;
  isSuper_not?: Maybe<Scalars['Boolean']>;
};

export type BetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type BetsCreateInput = {
  data?: Maybe<BetCreateInput>;
};

export type BetsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<BetUpdateInput>;
};

/** A keystone list */
export type Choice = {
  __typename?: 'Choice';
  id: Scalars['ID'];
  selection?: Maybe<ChoiceSelectionType>;
  isWin?: Maybe<Scalars['Boolean']>;
  line?: Maybe<Line>;
  bets?: Maybe<Array<Bet>>;
  /** @deprecated This query will be removed in a future version. Please use betsCount instead. */
  _betsMeta?: Maybe<_QueryMeta>;
  betsCount?: Maybe<Scalars['Int']>;
  status?: Maybe<ChoiceStatus>;
  labelName?: Maybe<Scalars['String']>;
};


/** A keystone list */
export type ChoiceBetsArgs = {
  where?: BetWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBetsBy>>;
  orderBy?: Array<BetOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


/** A keystone list */
export type Choice_BetsMetaArgs = {
  where?: BetWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBetsBy>>;
  orderBy?: Array<BetOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


/** A keystone list */
export type ChoiceBetsCountArgs = {
  where?: BetWhereInput;
};

export type ChoiceCreateInput = {
  selection?: Maybe<ChoiceSelectionType>;
  isWin?: Maybe<Scalars['Boolean']>;
  line?: Maybe<LineRelateToOneInput>;
  bets?: Maybe<BetRelateToManyInput>;
};

export type ChoiceOrderByInput = {
  id?: Maybe<OrderDirection>;
  selection?: Maybe<OrderDirection>;
  isWin?: Maybe<OrderDirection>;
};

export type ChoiceRelateToManyInput = {
  create?: Maybe<Array<Maybe<ChoiceCreateInput>>>;
  connect?: Maybe<Array<Maybe<ChoiceWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<ChoiceWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type ChoiceRelateToOneInput = {
  create?: Maybe<ChoiceCreateInput>;
  connect?: Maybe<ChoiceWhereUniqueInput>;
  disconnect?: Maybe<ChoiceWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export enum ChoiceSelectionType {
  Over = 'OVER',
  Under = 'UNDER',
  Away = 'AWAY',
  Home = 'HOME'
}

export enum ChoiceStatus {
  NotStarted = 'NOT_STARTED',
  Winning = 'WINNING',
  Losing = 'LOSING',
  Won = 'WON',
  Lost = 'LOST'
}

export type ChoiceUpdateInput = {
  selection?: Maybe<ChoiceSelectionType>;
  isWin?: Maybe<Scalars['Boolean']>;
  line?: Maybe<LineRelateToOneInput>;
  bets?: Maybe<BetRelateToManyInput>;
};

export type ChoiceWhereInput = {
  AND?: Maybe<Array<ChoiceWhereInput>>;
  OR?: Maybe<Array<ChoiceWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  selection?: Maybe<ChoiceSelectionType>;
  selection_not?: Maybe<ChoiceSelectionType>;
  selection_in?: Maybe<Array<Maybe<ChoiceSelectionType>>>;
  selection_not_in?: Maybe<Array<Maybe<ChoiceSelectionType>>>;
  isWin?: Maybe<Scalars['Boolean']>;
  isWin_not?: Maybe<Scalars['Boolean']>;
  line?: Maybe<LineWhereInput>;
  line_is_null?: Maybe<Scalars['Boolean']>;
  /** condition must be true for all nodes */
  bets_every?: Maybe<BetWhereInput>;
  /** condition must be true for at least 1 node */
  bets_some?: Maybe<BetWhereInput>;
  /** condition must be false for all nodes */
  bets_none?: Maybe<BetWhereInput>;
};

export type ChoiceWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ChoicesCreateInput = {
  data?: Maybe<ChoiceCreateInput>;
};

export type ChoicesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ChoiceUpdateInput>;
};

/** A keystone list */
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

export type CloudImageRelateToOneInput = {
  create?: Maybe<CloudImageCreateInput>;
  connect?: Maybe<CloudImageWhereUniqueInput>;
  disconnect?: Maybe<CloudImageWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type CloudImageUpdateInput = {
  image?: Maybe<Scalars['Upload']>;
  altText?: Maybe<Scalars['String']>;
};

export type CloudImageWhereInput = {
  AND?: Maybe<Array<CloudImageWhereInput>>;
  OR?: Maybe<Array<CloudImageWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  image?: Maybe<Scalars['String']>;
  image_not?: Maybe<Scalars['String']>;
  image_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  image_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  altText?: Maybe<Scalars['String']>;
  altText_not?: Maybe<Scalars['String']>;
  altText_contains?: Maybe<Scalars['String']>;
  altText_not_contains?: Maybe<Scalars['String']>;
  altText_starts_with?: Maybe<Scalars['String']>;
  altText_not_starts_with?: Maybe<Scalars['String']>;
  altText_ends_with?: Maybe<Scalars['String']>;
  altText_not_ends_with?: Maybe<Scalars['String']>;
  altText_i?: Maybe<Scalars['String']>;
  altText_not_i?: Maybe<Scalars['String']>;
  altText_contains_i?: Maybe<Scalars['String']>;
  altText_not_contains_i?: Maybe<Scalars['String']>;
  altText_starts_with_i?: Maybe<Scalars['String']>;
  altText_not_starts_with_i?: Maybe<Scalars['String']>;
  altText_ends_with_i?: Maybe<Scalars['String']>;
  altText_not_ends_with_i?: Maybe<Scalars['String']>;
  altText_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  altText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CloudImageWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type CloudImagesCreateInput = {
  data?: Maybe<CloudImageCreateInput>;
};

export type CloudImagesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<CloudImageUpdateInput>;
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

/** A keystone list */
export type Contest = {
  __typename?: 'Contest';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<ContestStatusType>;
  entryFee?: Maybe<Scalars['Int']>;
  image?: Maybe<CloudImage>;
  lines?: Maybe<Array<Line>>;
  /** @deprecated This query will be removed in a future version. Please use linesCount instead. */
  _linesMeta?: Maybe<_QueryMeta>;
  linesCount?: Maybe<Scalars['Int']>;
  registrations?: Maybe<Array<Registration>>;
  /** @deprecated This query will be removed in a future version. Please use registrationsCount instead. */
  _registrationsMeta?: Maybe<_QueryMeta>;
  registrationsCount?: Maybe<Scalars['Int']>;
  ruleSet?: Maybe<RuleSet>;
};


/** A keystone list */
export type ContestLinesArgs = {
  where?: LineWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortLinesBy>>;
  orderBy?: Array<LineOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


/** A keystone list */
export type Contest_LinesMetaArgs = {
  where?: LineWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortLinesBy>>;
  orderBy?: Array<LineOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


/** A keystone list */
export type ContestLinesCountArgs = {
  where?: LineWhereInput;
};


/** A keystone list */
export type ContestRegistrationsArgs = {
  where?: RegistrationWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortRegistrationsBy>>;
  orderBy?: Array<RegistrationOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


/** A keystone list */
export type Contest_RegistrationsMetaArgs = {
  where?: RegistrationWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortRegistrationsBy>>;
  orderBy?: Array<RegistrationOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


/** A keystone list */
export type ContestRegistrationsCountArgs = {
  where?: RegistrationWhereInput;
};

export type ContestCreateInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<ContestStatusType>;
  entryFee?: Maybe<Scalars['Int']>;
  image?: Maybe<CloudImageRelateToOneInput>;
  lines?: Maybe<LineRelateToManyInput>;
  registrations?: Maybe<RegistrationRelateToManyInput>;
  ruleSet?: Maybe<RuleSetRelateToOneInput>;
};

export type ContestOrderByInput = {
  id?: Maybe<OrderDirection>;
  name?: Maybe<OrderDirection>;
  description?: Maybe<OrderDirection>;
  status?: Maybe<OrderDirection>;
  entryFee?: Maybe<OrderDirection>;
};

export type ContestRelateToOneInput = {
  create?: Maybe<ContestCreateInput>;
  connect?: Maybe<ContestWhereUniqueInput>;
  disconnect?: Maybe<ContestWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export enum ContestStatusType {
  Open = 'OPEN',
  InProgress = 'IN_PROGRESS',
  Complete = 'COMPLETE'
}

export type ContestUpdateInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<ContestStatusType>;
  entryFee?: Maybe<Scalars['Int']>;
  image?: Maybe<CloudImageRelateToOneInput>;
  lines?: Maybe<LineRelateToManyInput>;
  registrations?: Maybe<RegistrationRelateToManyInput>;
  ruleSet?: Maybe<RuleSetRelateToOneInput>;
};

export type ContestWhereInput = {
  AND?: Maybe<Array<ContestWhereInput>>;
  OR?: Maybe<Array<ContestWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_i?: Maybe<Scalars['String']>;
  description_not_i?: Maybe<Scalars['String']>;
  description_contains_i?: Maybe<Scalars['String']>;
  description_not_contains_i?: Maybe<Scalars['String']>;
  description_starts_with_i?: Maybe<Scalars['String']>;
  description_not_starts_with_i?: Maybe<Scalars['String']>;
  description_ends_with_i?: Maybe<Scalars['String']>;
  description_not_ends_with_i?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<ContestStatusType>;
  status_not?: Maybe<ContestStatusType>;
  status_in?: Maybe<Array<Maybe<ContestStatusType>>>;
  status_not_in?: Maybe<Array<Maybe<ContestStatusType>>>;
  entryFee?: Maybe<Scalars['Int']>;
  entryFee_not?: Maybe<Scalars['Int']>;
  entryFee_lt?: Maybe<Scalars['Int']>;
  entryFee_lte?: Maybe<Scalars['Int']>;
  entryFee_gt?: Maybe<Scalars['Int']>;
  entryFee_gte?: Maybe<Scalars['Int']>;
  entryFee_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  entryFee_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  image?: Maybe<CloudImageWhereInput>;
  image_is_null?: Maybe<Scalars['Boolean']>;
  /** condition must be true for all nodes */
  lines_every?: Maybe<LineWhereInput>;
  /** condition must be true for at least 1 node */
  lines_some?: Maybe<LineWhereInput>;
  /** condition must be false for all nodes */
  lines_none?: Maybe<LineWhereInput>;
  /** condition must be true for all nodes */
  registrations_every?: Maybe<RegistrationWhereInput>;
  /** condition must be true for at least 1 node */
  registrations_some?: Maybe<RegistrationWhereInput>;
  /** condition must be false for all nodes */
  registrations_none?: Maybe<RegistrationWhereInput>;
  ruleSet?: Maybe<RuleSetWhereInput>;
  ruleSet_is_null?: Maybe<Scalars['Boolean']>;
};

export type ContestWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type ContestsCreateInput = {
  data?: Maybe<ContestCreateInput>;
};

export type ContestsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ContestUpdateInput>;
};

export type CreateInitialUserInput = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
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
  fieldMeta?: Maybe<Scalars['JSON']>;
  viewsIndex: Scalars['Int'];
  customViewsIndex?: Maybe<Scalars['Int']>;
  createView: KeystoneAdminUiFieldMetaCreateView;
  listView: KeystoneAdminUiFieldMetaListView;
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: Scalars['ID'];
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
  fieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
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

/** A keystone list */
export type Line = {
  __typename?: 'Line';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  closingTime?: Maybe<Scalars['String']>;
  benchmark?: Maybe<Scalars['Float']>;
  image?: Maybe<CloudImage>;
  contest?: Maybe<Contest>;
  choices?: Maybe<Array<Choice>>;
  /** @deprecated This query will be removed in a future version. Please use choicesCount instead. */
  _choicesMeta?: Maybe<_QueryMeta>;
  choicesCount?: Maybe<Scalars['Int']>;
  standings?: Maybe<Array<Standing>>;
  /** @deprecated This query will be removed in a future version. Please use standingsCount instead. */
  _standingsMeta?: Maybe<_QueryMeta>;
  standingsCount?: Maybe<Scalars['Int']>;
};


/** A keystone list */
export type LineChoicesArgs = {
  where?: ChoiceWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortChoicesBy>>;
  orderBy?: Array<ChoiceOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


/** A keystone list */
export type Line_ChoicesMetaArgs = {
  where?: ChoiceWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortChoicesBy>>;
  orderBy?: Array<ChoiceOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


/** A keystone list */
export type LineChoicesCountArgs = {
  where?: ChoiceWhereInput;
};


/** A keystone list */
export type LineStandingsArgs = {
  where?: StandingWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortStandingsBy>>;
  orderBy?: Array<StandingOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


/** A keystone list */
export type Line_StandingsMetaArgs = {
  where?: StandingWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortStandingsBy>>;
  orderBy?: Array<StandingOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


/** A keystone list */
export type LineStandingsCountArgs = {
  where?: StandingWhereInput;
};

export type LineCreateInput = {
  title?: Maybe<Scalars['String']>;
  closingTime?: Maybe<Scalars['String']>;
  benchmark?: Maybe<Scalars['Float']>;
  image?: Maybe<CloudImageRelateToOneInput>;
  contest?: Maybe<ContestRelateToOneInput>;
  choices?: Maybe<ChoiceRelateToManyInput>;
  standings?: Maybe<StandingRelateToManyInput>;
};

export type LineOrderByInput = {
  id?: Maybe<OrderDirection>;
  title?: Maybe<OrderDirection>;
  closingTime?: Maybe<OrderDirection>;
  benchmark?: Maybe<OrderDirection>;
};

export type LineRelateToManyInput = {
  create?: Maybe<Array<Maybe<LineCreateInput>>>;
  connect?: Maybe<Array<Maybe<LineWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<LineWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type LineRelateToOneInput = {
  create?: Maybe<LineCreateInput>;
  connect?: Maybe<LineWhereUniqueInput>;
  disconnect?: Maybe<LineWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type LineUpdateInput = {
  title?: Maybe<Scalars['String']>;
  closingTime?: Maybe<Scalars['String']>;
  benchmark?: Maybe<Scalars['Float']>;
  image?: Maybe<CloudImageRelateToOneInput>;
  contest?: Maybe<ContestRelateToOneInput>;
  choices?: Maybe<ChoiceRelateToManyInput>;
  standings?: Maybe<StandingRelateToManyInput>;
};

export type LineWhereInput = {
  AND?: Maybe<Array<LineWhereInput>>;
  OR?: Maybe<Array<LineWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_i?: Maybe<Scalars['String']>;
  title_not_i?: Maybe<Scalars['String']>;
  title_contains_i?: Maybe<Scalars['String']>;
  title_not_contains_i?: Maybe<Scalars['String']>;
  title_starts_with_i?: Maybe<Scalars['String']>;
  title_not_starts_with_i?: Maybe<Scalars['String']>;
  title_ends_with_i?: Maybe<Scalars['String']>;
  title_not_ends_with_i?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  closingTime?: Maybe<Scalars['String']>;
  closingTime_not?: Maybe<Scalars['String']>;
  closingTime_lt?: Maybe<Scalars['String']>;
  closingTime_lte?: Maybe<Scalars['String']>;
  closingTime_gt?: Maybe<Scalars['String']>;
  closingTime_gte?: Maybe<Scalars['String']>;
  closingTime_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  closingTime_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  benchmark?: Maybe<Scalars['Float']>;
  benchmark_not?: Maybe<Scalars['Float']>;
  benchmark_lt?: Maybe<Scalars['Float']>;
  benchmark_lte?: Maybe<Scalars['Float']>;
  benchmark_gt?: Maybe<Scalars['Float']>;
  benchmark_gte?: Maybe<Scalars['Float']>;
  benchmark_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  benchmark_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  image?: Maybe<CloudImageWhereInput>;
  image_is_null?: Maybe<Scalars['Boolean']>;
  contest?: Maybe<ContestWhereInput>;
  contest_is_null?: Maybe<Scalars['Boolean']>;
  /** condition must be true for all nodes */
  choices_every?: Maybe<ChoiceWhereInput>;
  /** condition must be true for at least 1 node */
  choices_some?: Maybe<ChoiceWhereInput>;
  /** condition must be false for all nodes */
  choices_none?: Maybe<ChoiceWhereInput>;
  /** condition must be true for all nodes */
  standings_every?: Maybe<StandingWhereInput>;
  /** condition must be true for at least 1 node */
  standings_some?: Maybe<StandingWhereInput>;
  /** condition must be false for all nodes */
  standings_none?: Maybe<StandingWhereInput>;
};

export type LineWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type LinesCreateInput = {
  data?: Maybe<LineCreateInput>;
};

export type LinesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<LineUpdateInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a single Bet item. */
  createBet?: Maybe<Bet>;
  /** Create multiple Bet items. */
  createBets?: Maybe<Array<Maybe<Bet>>>;
  /** Update a single Bet item by ID. */
  updateBet?: Maybe<Bet>;
  /** Update multiple Bet items by ID. */
  updateBets?: Maybe<Array<Maybe<Bet>>>;
  /** Delete a single Bet item by ID. */
  deleteBet?: Maybe<Bet>;
  /** Delete multiple Bet items by ID. */
  deleteBets?: Maybe<Array<Maybe<Bet>>>;
  /** Create a single Choice item. */
  createChoice?: Maybe<Choice>;
  /** Create multiple Choice items. */
  createChoices?: Maybe<Array<Maybe<Choice>>>;
  /** Update a single Choice item by ID. */
  updateChoice?: Maybe<Choice>;
  /** Update multiple Choice items by ID. */
  updateChoices?: Maybe<Array<Maybe<Choice>>>;
  /** Delete a single Choice item by ID. */
  deleteChoice?: Maybe<Choice>;
  /** Delete multiple Choice items by ID. */
  deleteChoices?: Maybe<Array<Maybe<Choice>>>;
  /** Create a single CloudImage item. */
  createCloudImage?: Maybe<CloudImage>;
  /** Create multiple CloudImage items. */
  createCloudImages?: Maybe<Array<Maybe<CloudImage>>>;
  /** Update a single CloudImage item by ID. */
  updateCloudImage?: Maybe<CloudImage>;
  /** Update multiple CloudImage items by ID. */
  updateCloudImages?: Maybe<Array<Maybe<CloudImage>>>;
  /** Delete a single CloudImage item by ID. */
  deleteCloudImage?: Maybe<CloudImage>;
  /** Delete multiple CloudImage items by ID. */
  deleteCloudImages?: Maybe<Array<Maybe<CloudImage>>>;
  /** Create a single Contest item. */
  createContest?: Maybe<Contest>;
  /** Create multiple Contest items. */
  createContests?: Maybe<Array<Maybe<Contest>>>;
  /** Update a single Contest item by ID. */
  updateContest?: Maybe<Contest>;
  /** Update multiple Contest items by ID. */
  updateContests?: Maybe<Array<Maybe<Contest>>>;
  /** Delete a single Contest item by ID. */
  deleteContest?: Maybe<Contest>;
  /** Delete multiple Contest items by ID. */
  deleteContests?: Maybe<Array<Maybe<Contest>>>;
  /** Create a single Line item. */
  createLine?: Maybe<Line>;
  /** Create multiple Line items. */
  createLines?: Maybe<Array<Maybe<Line>>>;
  /** Update a single Line item by ID. */
  updateLine?: Maybe<Line>;
  /** Update multiple Line items by ID. */
  updateLines?: Maybe<Array<Maybe<Line>>>;
  /** Delete a single Line item by ID. */
  deleteLine?: Maybe<Line>;
  /** Delete multiple Line items by ID. */
  deleteLines?: Maybe<Array<Maybe<Line>>>;
  /** Create a single Registration item. */
  createRegistration?: Maybe<Registration>;
  /** Create multiple Registration items. */
  createRegistrations?: Maybe<Array<Maybe<Registration>>>;
  /** Update a single Registration item by ID. */
  updateRegistration?: Maybe<Registration>;
  /** Update multiple Registration items by ID. */
  updateRegistrations?: Maybe<Array<Maybe<Registration>>>;
  /** Delete a single Registration item by ID. */
  deleteRegistration?: Maybe<Registration>;
  /** Delete multiple Registration items by ID. */
  deleteRegistrations?: Maybe<Array<Maybe<Registration>>>;
  /** Create a single RuleSet item. */
  createRuleSet?: Maybe<RuleSet>;
  /** Create multiple RuleSet items. */
  createRuleSets?: Maybe<Array<Maybe<RuleSet>>>;
  /** Update a single RuleSet item by ID. */
  updateRuleSet?: Maybe<RuleSet>;
  /** Update multiple RuleSet items by ID. */
  updateRuleSets?: Maybe<Array<Maybe<RuleSet>>>;
  /** Delete a single RuleSet item by ID. */
  deleteRuleSet?: Maybe<RuleSet>;
  /** Delete multiple RuleSet items by ID. */
  deleteRuleSets?: Maybe<Array<Maybe<RuleSet>>>;
  /** Create a single Standing item. */
  createStanding?: Maybe<Standing>;
  /** Create multiple Standing items. */
  createStandings?: Maybe<Array<Maybe<Standing>>>;
  /** Update a single Standing item by ID. */
  updateStanding?: Maybe<Standing>;
  /** Update multiple Standing items by ID. */
  updateStandings?: Maybe<Array<Maybe<Standing>>>;
  /** Delete a single Standing item by ID. */
  deleteStanding?: Maybe<Standing>;
  /** Delete multiple Standing items by ID. */
  deleteStandings?: Maybe<Array<Maybe<Standing>>>;
  /** Create a single User item. */
  createUser?: Maybe<User>;
  /** Create multiple User items. */
  createUsers?: Maybe<Array<Maybe<User>>>;
  /** Update a single User item by ID. */
  updateUser?: Maybe<User>;
  /** Update multiple User items by ID. */
  updateUsers?: Maybe<Array<Maybe<User>>>;
  /** Delete a single User item by ID. */
  deleteUser?: Maybe<User>;
  /** Delete multiple User items by ID. */
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  sendUserPasswordResetLink?: Maybe<SendUserPasswordResetLinkResult>;
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  endSession: Scalars['Boolean'];
};


export type MutationCreateBetArgs = {
  data?: Maybe<BetCreateInput>;
};


export type MutationCreateBetsArgs = {
  data?: Maybe<Array<Maybe<BetsCreateInput>>>;
};


export type MutationUpdateBetArgs = {
  id: Scalars['ID'];
  data?: Maybe<BetUpdateInput>;
};


export type MutationUpdateBetsArgs = {
  data?: Maybe<Array<Maybe<BetsUpdateInput>>>;
};


export type MutationDeleteBetArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBetsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateChoiceArgs = {
  data?: Maybe<ChoiceCreateInput>;
};


export type MutationCreateChoicesArgs = {
  data?: Maybe<Array<Maybe<ChoicesCreateInput>>>;
};


export type MutationUpdateChoiceArgs = {
  id: Scalars['ID'];
  data?: Maybe<ChoiceUpdateInput>;
};


export type MutationUpdateChoicesArgs = {
  data?: Maybe<Array<Maybe<ChoicesUpdateInput>>>;
};


export type MutationDeleteChoiceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteChoicesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateCloudImageArgs = {
  data?: Maybe<CloudImageCreateInput>;
};


export type MutationCreateCloudImagesArgs = {
  data?: Maybe<Array<Maybe<CloudImagesCreateInput>>>;
};


export type MutationUpdateCloudImageArgs = {
  id: Scalars['ID'];
  data?: Maybe<CloudImageUpdateInput>;
};


export type MutationUpdateCloudImagesArgs = {
  data?: Maybe<Array<Maybe<CloudImagesUpdateInput>>>;
};


export type MutationDeleteCloudImageArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCloudImagesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateContestArgs = {
  data?: Maybe<ContestCreateInput>;
};


export type MutationCreateContestsArgs = {
  data?: Maybe<Array<Maybe<ContestsCreateInput>>>;
};


export type MutationUpdateContestArgs = {
  id: Scalars['ID'];
  data?: Maybe<ContestUpdateInput>;
};


export type MutationUpdateContestsArgs = {
  data?: Maybe<Array<Maybe<ContestsUpdateInput>>>;
};


export type MutationDeleteContestArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteContestsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateLineArgs = {
  data?: Maybe<LineCreateInput>;
};


export type MutationCreateLinesArgs = {
  data?: Maybe<Array<Maybe<LinesCreateInput>>>;
};


export type MutationUpdateLineArgs = {
  id: Scalars['ID'];
  data?: Maybe<LineUpdateInput>;
};


export type MutationUpdateLinesArgs = {
  data?: Maybe<Array<Maybe<LinesUpdateInput>>>;
};


export type MutationDeleteLineArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLinesArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateRegistrationArgs = {
  data?: Maybe<RegistrationCreateInput>;
};


export type MutationCreateRegistrationsArgs = {
  data?: Maybe<Array<Maybe<RegistrationsCreateInput>>>;
};


export type MutationUpdateRegistrationArgs = {
  id: Scalars['ID'];
  data?: Maybe<RegistrationUpdateInput>;
};


export type MutationUpdateRegistrationsArgs = {
  data?: Maybe<Array<Maybe<RegistrationsUpdateInput>>>;
};


export type MutationDeleteRegistrationArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRegistrationsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateRuleSetArgs = {
  data?: Maybe<RuleSetCreateInput>;
};


export type MutationCreateRuleSetsArgs = {
  data?: Maybe<Array<Maybe<RuleSetsCreateInput>>>;
};


export type MutationUpdateRuleSetArgs = {
  id: Scalars['ID'];
  data?: Maybe<RuleSetUpdateInput>;
};


export type MutationUpdateRuleSetsArgs = {
  data?: Maybe<Array<Maybe<RuleSetsUpdateInput>>>;
};


export type MutationDeleteRuleSetArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRuleSetsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateStandingArgs = {
  data?: Maybe<StandingCreateInput>;
};


export type MutationCreateStandingsArgs = {
  data?: Maybe<Array<Maybe<StandingsCreateInput>>>;
};


export type MutationUpdateStandingArgs = {
  id: Scalars['ID'];
  data?: Maybe<StandingUpdateInput>;
};


export type MutationUpdateStandingsArgs = {
  data?: Maybe<Array<Maybe<StandingsUpdateInput>>>;
};


export type MutationDeleteStandingArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStandingsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateUserArgs = {
  data?: Maybe<UserCreateInput>;
};


export type MutationCreateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersCreateInput>>>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};


export type MutationUpdateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersUpdateInput>>>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
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

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum PasswordAuthErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  SecretNotSet = 'SECRET_NOT_SET',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  SecretMismatch = 'SECRET_MISMATCH'
}

export enum PasswordResetRedemptionErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  TokenNotSet = 'TOKEN_NOT_SET',
  TokenMismatch = 'TOKEN_MISMATCH',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenRedeemed = 'TOKEN_REDEEMED'
}

export enum PasswordResetRequestErrorCode {
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES'
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
  /** Search for all Bet items which match the where clause. */
  allBets?: Maybe<Array<Bet>>;
  /** Search for the Bet item with the matching ID. */
  Bet?: Maybe<Bet>;
  /**
   * Perform a meta-query on all Bet items which match the where clause.
   * @deprecated This query will be removed in a future version. Please use betsCount instead.
   */
  _allBetsMeta?: Maybe<_QueryMeta>;
  betsCount?: Maybe<Scalars['Int']>;
  /** Search for all Choice items which match the where clause. */
  allChoices?: Maybe<Array<Choice>>;
  /** Search for the Choice item with the matching ID. */
  Choice?: Maybe<Choice>;
  /**
   * Perform a meta-query on all Choice items which match the where clause.
   * @deprecated This query will be removed in a future version. Please use choicesCount instead.
   */
  _allChoicesMeta?: Maybe<_QueryMeta>;
  choicesCount?: Maybe<Scalars['Int']>;
  /** Search for all CloudImage items which match the where clause. */
  allCloudImages?: Maybe<Array<CloudImage>>;
  /** Search for the CloudImage item with the matching ID. */
  CloudImage?: Maybe<CloudImage>;
  /**
   * Perform a meta-query on all CloudImage items which match the where clause.
   * @deprecated This query will be removed in a future version. Please use cloudImagesCount instead.
   */
  _allCloudImagesMeta?: Maybe<_QueryMeta>;
  cloudImagesCount?: Maybe<Scalars['Int']>;
  /** Search for all Contest items which match the where clause. */
  allContests?: Maybe<Array<Contest>>;
  /** Search for the Contest item with the matching ID. */
  Contest?: Maybe<Contest>;
  /**
   * Perform a meta-query on all Contest items which match the where clause.
   * @deprecated This query will be removed in a future version. Please use contestsCount instead.
   */
  _allContestsMeta?: Maybe<_QueryMeta>;
  contestsCount?: Maybe<Scalars['Int']>;
  /** Search for all Line items which match the where clause. */
  allLines?: Maybe<Array<Line>>;
  /** Search for the Line item with the matching ID. */
  Line?: Maybe<Line>;
  /**
   * Perform a meta-query on all Line items which match the where clause.
   * @deprecated This query will be removed in a future version. Please use linesCount instead.
   */
  _allLinesMeta?: Maybe<_QueryMeta>;
  linesCount?: Maybe<Scalars['Int']>;
  /** Search for all Registration items which match the where clause. */
  allRegistrations?: Maybe<Array<Registration>>;
  /** Search for the Registration item with the matching ID. */
  Registration?: Maybe<Registration>;
  /**
   * Perform a meta-query on all Registration items which match the where clause.
   * @deprecated This query will be removed in a future version. Please use registrationsCount instead.
   */
  _allRegistrationsMeta?: Maybe<_QueryMeta>;
  registrationsCount?: Maybe<Scalars['Int']>;
  /** Search for all RuleSet items which match the where clause. */
  allRuleSets?: Maybe<Array<RuleSet>>;
  /** Search for the RuleSet item with the matching ID. */
  RuleSet?: Maybe<RuleSet>;
  /**
   * Perform a meta-query on all RuleSet items which match the where clause.
   * @deprecated This query will be removed in a future version. Please use ruleSetsCount instead.
   */
  _allRuleSetsMeta?: Maybe<_QueryMeta>;
  ruleSetsCount?: Maybe<Scalars['Int']>;
  /** Search for all Standing items which match the where clause. */
  allStandings?: Maybe<Array<Standing>>;
  /** Search for the Standing item with the matching ID. */
  Standing?: Maybe<Standing>;
  /**
   * Perform a meta-query on all Standing items which match the where clause.
   * @deprecated This query will be removed in a future version. Please use standingsCount instead.
   */
  _allStandingsMeta?: Maybe<_QueryMeta>;
  standingsCount?: Maybe<Scalars['Int']>;
  /** Search for all User items which match the where clause. */
  allUsers?: Maybe<Array<User>>;
  /** Search for the User item with the matching ID. */
  User?: Maybe<User>;
  /**
   * Perform a meta-query on all User items which match the where clause.
   * @deprecated This query will be removed in a future version. Please use usersCount instead.
   */
  _allUsersMeta?: Maybe<_QueryMeta>;
  usersCount?: Maybe<Scalars['Int']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
  keystone: KeystoneMeta;
};


export type QueryAllBetsArgs = {
  where?: BetWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBetsBy>>;
  orderBy?: Array<BetOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryBetArgs = {
  where: BetWhereUniqueInput;
};


export type Query_AllBetsMetaArgs = {
  where?: BetWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBetsBy>>;
  orderBy?: Array<BetOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryBetsCountArgs = {
  where?: BetWhereInput;
};


export type QueryAllChoicesArgs = {
  where?: ChoiceWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortChoicesBy>>;
  orderBy?: Array<ChoiceOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryChoiceArgs = {
  where: ChoiceWhereUniqueInput;
};


export type Query_AllChoicesMetaArgs = {
  where?: ChoiceWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortChoicesBy>>;
  orderBy?: Array<ChoiceOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryChoicesCountArgs = {
  where?: ChoiceWhereInput;
};


export type QueryAllCloudImagesArgs = {
  where?: CloudImageWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortCloudImagesBy>>;
  orderBy?: Array<CloudImageOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryCloudImageArgs = {
  where: CloudImageWhereUniqueInput;
};


export type Query_AllCloudImagesMetaArgs = {
  where?: CloudImageWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortCloudImagesBy>>;
  orderBy?: Array<CloudImageOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryCloudImagesCountArgs = {
  where?: CloudImageWhereInput;
};


export type QueryAllContestsArgs = {
  where?: ContestWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortContestsBy>>;
  orderBy?: Array<ContestOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryContestArgs = {
  where: ContestWhereUniqueInput;
};


export type Query_AllContestsMetaArgs = {
  where?: ContestWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortContestsBy>>;
  orderBy?: Array<ContestOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryContestsCountArgs = {
  where?: ContestWhereInput;
};


export type QueryAllLinesArgs = {
  where?: LineWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortLinesBy>>;
  orderBy?: Array<LineOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryLineArgs = {
  where: LineWhereUniqueInput;
};


export type Query_AllLinesMetaArgs = {
  where?: LineWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortLinesBy>>;
  orderBy?: Array<LineOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryLinesCountArgs = {
  where?: LineWhereInput;
};


export type QueryAllRegistrationsArgs = {
  where?: RegistrationWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortRegistrationsBy>>;
  orderBy?: Array<RegistrationOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryRegistrationArgs = {
  where: RegistrationWhereUniqueInput;
};


export type Query_AllRegistrationsMetaArgs = {
  where?: RegistrationWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortRegistrationsBy>>;
  orderBy?: Array<RegistrationOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryRegistrationsCountArgs = {
  where?: RegistrationWhereInput;
};


export type QueryAllRuleSetsArgs = {
  where?: RuleSetWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortRuleSetsBy>>;
  orderBy?: Array<RuleSetOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryRuleSetArgs = {
  where: RuleSetWhereUniqueInput;
};


export type Query_AllRuleSetsMetaArgs = {
  where?: RuleSetWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortRuleSetsBy>>;
  orderBy?: Array<RuleSetOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryRuleSetsCountArgs = {
  where?: RuleSetWhereInput;
};


export type QueryAllStandingsArgs = {
  where?: StandingWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortStandingsBy>>;
  orderBy?: Array<StandingOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryStandingArgs = {
  where: StandingWhereUniqueInput;
};


export type Query_AllStandingsMetaArgs = {
  where?: StandingWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortStandingsBy>>;
  orderBy?: Array<StandingOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryStandingsCountArgs = {
  where?: StandingWhereInput;
};


export type QueryAllUsersArgs = {
  where?: UserWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Array<UserOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type Query_AllUsersMetaArgs = {
  where?: UserWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Array<UserOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};


export type QueryValidateUserPasswordResetTokenArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};

export type RedeemUserPasswordResetTokenResult = {
  __typename?: 'RedeemUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

/** A keystone list */
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
  contest?: Maybe<ContestRelateToOneInput>;
  user?: Maybe<UserRelateToOneInput>;
};

export type RegistrationOrderByInput = {
  id?: Maybe<OrderDirection>;
  hasPaid?: Maybe<OrderDirection>;
};

export type RegistrationRelateToManyInput = {
  create?: Maybe<Array<Maybe<RegistrationCreateInput>>>;
  connect?: Maybe<Array<Maybe<RegistrationWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<RegistrationWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type RegistrationUpdateInput = {
  hasPaid?: Maybe<Scalars['Boolean']>;
  contest?: Maybe<ContestRelateToOneInput>;
  user?: Maybe<UserRelateToOneInput>;
};

export type RegistrationWhereInput = {
  AND?: Maybe<Array<RegistrationWhereInput>>;
  OR?: Maybe<Array<RegistrationWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  hasPaid?: Maybe<Scalars['Boolean']>;
  hasPaid_not?: Maybe<Scalars['Boolean']>;
  contest?: Maybe<ContestWhereInput>;
  contest_is_null?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserWhereInput>;
  user_is_null?: Maybe<Scalars['Boolean']>;
};

export type RegistrationWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type RegistrationsCreateInput = {
  data?: Maybe<RegistrationCreateInput>;
};

export type RegistrationsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<RegistrationUpdateInput>;
};

/** A keystone list */
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
  contest?: Maybe<ContestRelateToOneInput>;
};

export type RuleSetOrderByInput = {
  id?: Maybe<OrderDirection>;
  maxBets?: Maybe<OrderDirection>;
  maxSuperBets?: Maybe<OrderDirection>;
  superBetPointCount?: Maybe<OrderDirection>;
};

export type RuleSetRelateToOneInput = {
  create?: Maybe<RuleSetCreateInput>;
  connect?: Maybe<RuleSetWhereUniqueInput>;
  disconnect?: Maybe<RuleSetWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type RuleSetUpdateInput = {
  maxBets?: Maybe<Scalars['Int']>;
  maxSuperBets?: Maybe<Scalars['Int']>;
  superBetPointCount?: Maybe<Scalars['Int']>;
  contest?: Maybe<ContestRelateToOneInput>;
};

export type RuleSetWhereInput = {
  AND?: Maybe<Array<RuleSetWhereInput>>;
  OR?: Maybe<Array<RuleSetWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  maxBets?: Maybe<Scalars['Int']>;
  maxBets_not?: Maybe<Scalars['Int']>;
  maxBets_lt?: Maybe<Scalars['Int']>;
  maxBets_lte?: Maybe<Scalars['Int']>;
  maxBets_gt?: Maybe<Scalars['Int']>;
  maxBets_gte?: Maybe<Scalars['Int']>;
  maxBets_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  maxBets_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  maxSuperBets?: Maybe<Scalars['Int']>;
  maxSuperBets_not?: Maybe<Scalars['Int']>;
  maxSuperBets_lt?: Maybe<Scalars['Int']>;
  maxSuperBets_lte?: Maybe<Scalars['Int']>;
  maxSuperBets_gt?: Maybe<Scalars['Int']>;
  maxSuperBets_gte?: Maybe<Scalars['Int']>;
  maxSuperBets_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  maxSuperBets_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  superBetPointCount?: Maybe<Scalars['Int']>;
  superBetPointCount_not?: Maybe<Scalars['Int']>;
  superBetPointCount_lt?: Maybe<Scalars['Int']>;
  superBetPointCount_lte?: Maybe<Scalars['Int']>;
  superBetPointCount_gt?: Maybe<Scalars['Int']>;
  superBetPointCount_gte?: Maybe<Scalars['Int']>;
  superBetPointCount_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  superBetPointCount_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  contest?: Maybe<ContestWhereInput>;
  contest_is_null?: Maybe<Scalars['Boolean']>;
};

export type RuleSetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type RuleSetsCreateInput = {
  data?: Maybe<RuleSetCreateInput>;
};

export type RuleSetsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<RuleSetUpdateInput>;
};

export type SendUserPasswordResetLinkResult = {
  __typename?: 'SendUserPasswordResetLinkResult';
  code: PasswordResetRequestErrorCode;
  message: Scalars['String'];
};

export enum SortBetsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsSuperAsc = 'isSuper_ASC',
  IsSuperDesc = 'isSuper_DESC'
}

export enum SortChoicesBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SelectionAsc = 'selection_ASC',
  SelectionDesc = 'selection_DESC',
  IsWinAsc = 'isWin_ASC',
  IsWinDesc = 'isWin_DESC'
}

export enum SortCloudImagesBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC'
}

export enum SortContestsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  EntryFeeAsc = 'entryFee_ASC',
  EntryFeeDesc = 'entryFee_DESC'
}

export enum SortLinesBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  ClosingTimeAsc = 'closingTime_ASC',
  ClosingTimeDesc = 'closingTime_DESC',
  BenchmarkAsc = 'benchmark_ASC',
  BenchmarkDesc = 'benchmark_DESC'
}

export enum SortRegistrationsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  HasPaidAsc = 'hasPaid_ASC',
  HasPaidDesc = 'hasPaid_DESC'
}

export enum SortRuleSetsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MaxBetsAsc = 'maxBets_ASC',
  MaxBetsDesc = 'maxBets_DESC',
  MaxSuperBetsAsc = 'maxSuperBets_ASC',
  MaxSuperBetsDesc = 'maxSuperBets_DESC',
  SuperBetPointCountAsc = 'superBetPointCount_ASC',
  SuperBetPointCountDesc = 'superBetPointCount_DESC'
}

export enum SortStandingsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  GamesPlayedAsc = 'gamesPlayed_ASC',
  GamesPlayedDesc = 'gamesPlayed_DESC',
  WinsAsc = 'wins_ASC',
  WinsDesc = 'wins_DESC',
  TotalGamesAsc = 'totalGames_ASC',
  TotalGamesDesc = 'totalGames_DESC'
}

export enum SortUsersBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UserNameAsc = 'userName_ASC',
  UserNameDesc = 'userName_DESC',
  IsAdminAsc = 'isAdmin_ASC',
  IsAdminDesc = 'isAdmin_DESC',
  PasswordResetIssuedAtAsc = 'passwordResetIssuedAt_ASC',
  PasswordResetIssuedAtDesc = 'passwordResetIssuedAt_DESC',
  PasswordResetRedeemedAtAsc = 'passwordResetRedeemedAt_ASC',
  PasswordResetRedeemedAtDesc = 'passwordResetRedeemedAt_DESC'
}

/** A keystone list */
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
  line?: Maybe<LineRelateToOneInput>;
};

export type StandingOrderByInput = {
  id?: Maybe<OrderDirection>;
  gamesPlayed?: Maybe<OrderDirection>;
  wins?: Maybe<OrderDirection>;
  totalGames?: Maybe<OrderDirection>;
};

export type StandingRelateToManyInput = {
  create?: Maybe<Array<Maybe<StandingCreateInput>>>;
  connect?: Maybe<Array<Maybe<StandingWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<StandingWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type StandingUpdateInput = {
  gamesPlayed?: Maybe<Scalars['Int']>;
  wins?: Maybe<Scalars['Int']>;
  totalGames?: Maybe<Scalars['Int']>;
  line?: Maybe<LineRelateToOneInput>;
};

export type StandingWhereInput = {
  AND?: Maybe<Array<StandingWhereInput>>;
  OR?: Maybe<Array<StandingWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  gamesPlayed?: Maybe<Scalars['Int']>;
  gamesPlayed_not?: Maybe<Scalars['Int']>;
  gamesPlayed_lt?: Maybe<Scalars['Int']>;
  gamesPlayed_lte?: Maybe<Scalars['Int']>;
  gamesPlayed_gt?: Maybe<Scalars['Int']>;
  gamesPlayed_gte?: Maybe<Scalars['Int']>;
  gamesPlayed_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  gamesPlayed_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  wins?: Maybe<Scalars['Int']>;
  wins_not?: Maybe<Scalars['Int']>;
  wins_lt?: Maybe<Scalars['Int']>;
  wins_lte?: Maybe<Scalars['Int']>;
  wins_gt?: Maybe<Scalars['Int']>;
  wins_gte?: Maybe<Scalars['Int']>;
  wins_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  wins_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  totalGames?: Maybe<Scalars['Int']>;
  totalGames_not?: Maybe<Scalars['Int']>;
  totalGames_lt?: Maybe<Scalars['Int']>;
  totalGames_lte?: Maybe<Scalars['Int']>;
  totalGames_gt?: Maybe<Scalars['Int']>;
  totalGames_gte?: Maybe<Scalars['Int']>;
  totalGames_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  totalGames_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  line?: Maybe<LineWhereInput>;
  line_is_null?: Maybe<Scalars['Boolean']>;
};

export type StandingWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type StandingsCreateInput = {
  data?: Maybe<StandingCreateInput>;
};

export type StandingsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<StandingUpdateInput>;
};


/** A keystone list */
export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordState>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  bets?: Maybe<Array<Bet>>;
  /** @deprecated This query will be removed in a future version. Please use betsCount instead. */
  _betsMeta?: Maybe<_QueryMeta>;
  betsCount?: Maybe<Scalars['Int']>;
  avatarImage?: Maybe<CloudImage>;
  registrations?: Maybe<Array<Registration>>;
  /** @deprecated This query will be removed in a future version. Please use registrationsCount instead. */
  _registrationsMeta?: Maybe<_QueryMeta>;
  registrationsCount?: Maybe<Scalars['Int']>;
  passwordResetToken?: Maybe<PasswordState>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
};


/** A keystone list */
export type UserBetsArgs = {
  where?: BetWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBetsBy>>;
  orderBy?: Array<BetOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


/** A keystone list */
export type User_BetsMetaArgs = {
  where?: BetWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBetsBy>>;
  orderBy?: Array<BetOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


/** A keystone list */
export type UserBetsCountArgs = {
  where?: BetWhereInput;
};


/** A keystone list */
export type UserRegistrationsArgs = {
  where?: RegistrationWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortRegistrationsBy>>;
  orderBy?: Array<RegistrationOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


/** A keystone list */
export type User_RegistrationsMetaArgs = {
  where?: RegistrationWhereInput;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortRegistrationsBy>>;
  orderBy?: Array<RegistrationOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


/** A keystone list */
export type UserRegistrationsCountArgs = {
  where?: RegistrationWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  code: PasswordAuthErrorCode;
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
  bets?: Maybe<BetRelateToManyInput>;
  avatarImage?: Maybe<CloudImageRelateToOneInput>;
  registrations?: Maybe<RegistrationRelateToManyInput>;
  passwordResetToken?: Maybe<Scalars['String']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
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

export type UserRelateToOneInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<UserWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type UserUpdateInput = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  bets?: Maybe<BetRelateToManyInput>;
  avatarImage?: Maybe<CloudImageRelateToOneInput>;
  registrations?: Maybe<RegistrationRelateToManyInput>;
  passwordResetToken?: Maybe<Scalars['String']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_i?: Maybe<Scalars['String']>;
  email_not_i?: Maybe<Scalars['String']>;
  email_contains_i?: Maybe<Scalars['String']>;
  email_not_contains_i?: Maybe<Scalars['String']>;
  email_starts_with_i?: Maybe<Scalars['String']>;
  email_not_starts_with_i?: Maybe<Scalars['String']>;
  email_ends_with_i?: Maybe<Scalars['String']>;
  email_not_ends_with_i?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  userName?: Maybe<Scalars['String']>;
  userName_not?: Maybe<Scalars['String']>;
  userName_contains?: Maybe<Scalars['String']>;
  userName_not_contains?: Maybe<Scalars['String']>;
  userName_starts_with?: Maybe<Scalars['String']>;
  userName_not_starts_with?: Maybe<Scalars['String']>;
  userName_ends_with?: Maybe<Scalars['String']>;
  userName_not_ends_with?: Maybe<Scalars['String']>;
  userName_i?: Maybe<Scalars['String']>;
  userName_not_i?: Maybe<Scalars['String']>;
  userName_contains_i?: Maybe<Scalars['String']>;
  userName_not_contains_i?: Maybe<Scalars['String']>;
  userName_starts_with_i?: Maybe<Scalars['String']>;
  userName_not_starts_with_i?: Maybe<Scalars['String']>;
  userName_ends_with_i?: Maybe<Scalars['String']>;
  userName_not_ends_with_i?: Maybe<Scalars['String']>;
  userName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  userName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isAdmin_not?: Maybe<Scalars['Boolean']>;
  /** condition must be true for all nodes */
  bets_every?: Maybe<BetWhereInput>;
  /** condition must be true for at least 1 node */
  bets_some?: Maybe<BetWhereInput>;
  /** condition must be false for all nodes */
  bets_none?: Maybe<BetWhereInput>;
  avatarImage?: Maybe<CloudImageWhereInput>;
  avatarImage_is_null?: Maybe<Scalars['Boolean']>;
  /** condition must be true for all nodes */
  registrations_every?: Maybe<RegistrationWhereInput>;
  /** condition must be true for at least 1 node */
  registrations_some?: Maybe<RegistrationWhereInput>;
  /** condition must be false for all nodes */
  registrations_none?: Maybe<RegistrationWhereInput>;
  passwordResetToken_is_set?: Maybe<Scalars['Boolean']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_not?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_lt?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_lte?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_gt?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_gte?: Maybe<Scalars['String']>;
  passwordResetIssuedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  passwordResetIssuedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_not?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_lt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_lte?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_gt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_gte?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  passwordResetRedeemedAt_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
};

export type UsersCreateInput = {
  data?: Maybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};

export type ValidateUserPasswordResetTokenResult = {
  __typename?: 'ValidateUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String'];
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count?: Maybe<Scalars['Int']>;
};
