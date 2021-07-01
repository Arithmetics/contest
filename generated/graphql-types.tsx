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
};

export type BetCreateInput = {
  user?: Maybe<UserRelateToOneInput>;
  choice?: Maybe<ChoiceRelateToOneInput>;
};

export type BetOrderByInput = {
  id?: Maybe<OrderDirection>;
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

export type SendUserPasswordResetLinkResult = {
  __typename?: 'SendUserPasswordResetLinkResult';
  code: PasswordResetRequestErrorCode;
  message: Scalars['String'];
};

export enum SortBetsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
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

export type CheckIfEmailAvailableQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type CheckIfEmailAvailableQuery = (
  { __typename?: 'Query' }
  & { _allUsersMeta?: Maybe<(
    { __typename?: '_QueryMeta' }
    & Pick<_QueryMeta, 'count'>
  )> }
);

export type CheckIfUsernameAvailableQueryVariables = Exact<{
  userName: Scalars['String'];
}>;


export type CheckIfUsernameAvailableQuery = (
  { __typename?: 'Query' }
  & { _allUsersMeta?: Maybe<(
    { __typename?: '_QueryMeta' }
    & Pick<_QueryMeta, 'count'>
  )> }
);

export type RequestResetMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type RequestResetMutation = (
  { __typename?: 'Mutation' }
  & { sendUserPasswordResetLink?: Maybe<(
    { __typename?: 'SendUserPasswordResetLinkResult' }
    & Pick<SendUserPasswordResetLinkResult, 'code' | 'message'>
  )> }
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
  & { authenticateUserWithPassword: (
    { __typename?: 'UserAuthenticationWithPasswordSuccess' }
    & { item: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'name' | 'userName'>
    ) }
  ) | (
    { __typename?: 'UserAuthenticationWithPasswordFailure' }
    & Pick<UserAuthenticationWithPasswordFailure, 'code' | 'message'>
  ) }
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
    & Pick<User, 'id' | 'email' | 'name' | 'userName'>
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

export type AllContestsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllContestsQuery = (
  { __typename?: 'Query' }
  & { allContests?: Maybe<Array<(
    { __typename?: 'Contest' }
    & Pick<Contest, 'id' | 'name' | 'description' | 'status' | 'entryFee'>
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
    )> }
  )>> }
);

export type ContestByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ContestByIdQuery = (
  { __typename?: 'Query' }
  & { Contest?: Maybe<(
    { __typename?: 'Contest' }
    & Pick<Contest, 'id' | 'name' | 'description' | 'status' | 'entryFee'>
    & { lines?: Maybe<Array<(
      { __typename?: 'Line' }
      & Pick<Line, 'id' | 'benchmark' | 'closingTime' | 'title'>
      & { choices?: Maybe<Array<(
        { __typename?: 'Choice' }
        & Pick<Choice, 'id' | 'selection' | 'isWin'>
        & { bets?: Maybe<Array<(
          { __typename?: 'Bet' }
          & Pick<Bet, 'id'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'id'>
          )> }
        )>> }
      )>> }
    )>>, registrations?: Maybe<Array<(
      { __typename?: 'Registration' }
      & Pick<Registration, 'id'>
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'userName'>
        & { avatarImage?: Maybe<(
          { __typename?: 'CloudImage' }
          & Pick<CloudImage, 'altText'>
          & { image?: Maybe<(
            { __typename?: 'CloudinaryImage_File' }
            & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
          )> }
        )> }
      )> }
    )>>, image?: Maybe<(
      { __typename?: 'CloudImage' }
      & Pick<CloudImage, 'altText'>
      & { image?: Maybe<(
        { __typename?: 'CloudinaryImage_File' }
        & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
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
}>;


export type MakeBetMutation = (
  { __typename?: 'Mutation' }
  & { createBet?: Maybe<(
    { __typename?: 'Bet' }
    & Pick<Bet, 'id'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )>, choice?: Maybe<(
      { __typename?: 'Choice' }
      & Pick<Choice, 'id'>
      & { bets?: Maybe<Array<(
        { __typename?: 'Bet' }
        & Pick<Bet, 'id'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id'>
        )> }
      )>>, line?: Maybe<(
        { __typename?: 'Line' }
        & Pick<Line, 'id'>
      )> }
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
    & { choice?: Maybe<(
      { __typename?: 'Choice' }
      & Pick<Choice, 'id'>
      & { bets?: Maybe<Array<(
        { __typename?: 'Bet' }
        & Pick<Bet, 'id'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id'>
        )> }
      )>> }
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )> }
  )> }
);

export type TrackerStatusQueryVariables = Exact<{
  contestId: Scalars['ID'];
}>;


export type TrackerStatusQuery = (
  { __typename?: 'Query' }
  & { allLines?: Maybe<Array<(
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
    )>> }
  )>> }
);


export const CheckIfEmailAvailableDocument = gql`
    query CheckIfEmailAvailable($email: String!) {
  _allUsersMeta(where: {email: $email}) {
    count
  }
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
  _allUsersMeta(where: {userName: $userName}) {
    count
  }
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
  sendUserPasswordResetLink(email: $email) {
    code
    message
  }
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
      code
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
  updateUser(id: $id, data: {name: $name, userName: $userName}) {
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
  updateUser(id: $id, data: {password: $password}) {
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
    id: $id
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
      avatarImage {
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
  allContests {
    id
    name
    description
    status
    entryFee
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
  Contest(where: {id: $id}) {
    id
    name
    description
    status
    entryFee
    lines {
      id
      benchmark
      closingTime
      title
      choices {
        id
        selection
        isWin
        bets {
          id
          user {
            id
          }
        }
      }
    }
    registrations {
      id
      user {
        id
        userName
        avatarImage {
          altText
          image {
            publicUrlTransformed
          }
        }
      }
    }
    image {
      image {
        publicUrlTransformed
      }
      altText
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
    data: {user: {connect: {id: $userId}}, contest: {connect: {id: $contestId}}}
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
  deleteRegistration(id: $id) {
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
    mutation MakeBet($choiceId: ID!, $userId: ID!) {
  createBet(
    data: {user: {connect: {id: $userId}}, choice: {connect: {id: $choiceId}}}
  ) {
    id
    user {
      id
    }
    choice {
      id
      bets {
        id
        user {
          id
        }
      }
      line {
        id
      }
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
  deleteBet(id: $betId) {
    id
    choice {
      id
      bets {
        id
        user {
          id
        }
      }
    }
    user {
      id
    }
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
  allLines(where: {contest: {id: $contestId}}) {
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