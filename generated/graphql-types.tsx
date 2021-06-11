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
  AND?: Maybe<Array<Maybe<BetWhereInput>>>;
  OR?: Maybe<Array<Maybe<BetWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  user?: Maybe<UserWhereInput>;
  user_is_null?: Maybe<Scalars['Boolean']>;
  choice?: Maybe<ChoiceWhereInput>;
  choice_is_null?: Maybe<Scalars['Boolean']>;
};

export type BetWhereUniqueInput = {
  id: Scalars['ID'];
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
  bets: Array<Bet>;
  _betsMeta?: Maybe<_QueryMeta>;
  labelName?: Maybe<Scalars['String']>;
};


/** A keystone list */
export type ChoiceBetsArgs = {
  where?: Maybe<BetWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBetsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/** A keystone list */
export type Choice_BetsMetaArgs = {
  where?: Maybe<BetWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBetsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type ChoiceCreateInput = {
  selection?: Maybe<ChoiceSelectionType>;
  isWin?: Maybe<Scalars['Boolean']>;
  line?: Maybe<LineRelateToOneInput>;
  bets?: Maybe<BetRelateToManyInput>;
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
  AND?: Maybe<Array<Maybe<ChoiceWhereInput>>>;
  OR?: Maybe<Array<Maybe<ChoiceWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  id: Scalars['ID'];
};

export type ChoicesCreateInput = {
  data?: Maybe<ChoiceCreateInput>;
};

export type ChoicesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ChoiceUpdateInput>;
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
  path?: Maybe<Scalars['String']>;
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
  status?: Maybe<Scalars['String']>;
  entryFee?: Maybe<Scalars['Int']>;
  image?: Maybe<ContestImage>;
  lines: Array<Line>;
  _linesMeta?: Maybe<_QueryMeta>;
};


/** A keystone list */
export type ContestLinesArgs = {
  where?: Maybe<LineWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortLinesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/** A keystone list */
export type Contest_LinesMetaArgs = {
  where?: Maybe<LineWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortLinesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type ContestCreateInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  entryFee?: Maybe<Scalars['Int']>;
  image?: Maybe<ContestImageRelateToOneInput>;
  lines?: Maybe<LineRelateToManyInput>;
};

/** A keystone list */
export type ContestImage = {
  __typename?: 'ContestImage';
  id: Scalars['ID'];
  image?: Maybe<CloudinaryImage_File>;
  altText?: Maybe<Scalars['String']>;
  contest?: Maybe<Contest>;
};

export type ContestImageCreateInput = {
  image?: Maybe<Scalars['Upload']>;
  altText?: Maybe<Scalars['String']>;
  contest?: Maybe<ContestRelateToOneInput>;
};

export type ContestImageRelateToOneInput = {
  create?: Maybe<ContestImageCreateInput>;
  connect?: Maybe<ContestImageWhereUniqueInput>;
  disconnect?: Maybe<ContestImageWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type ContestImageUpdateInput = {
  image?: Maybe<Scalars['Upload']>;
  altText?: Maybe<Scalars['String']>;
  contest?: Maybe<ContestRelateToOneInput>;
};

export type ContestImageWhereInput = {
  AND?: Maybe<Array<Maybe<ContestImageWhereInput>>>;
  OR?: Maybe<Array<Maybe<ContestImageWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  contest?: Maybe<ContestWhereInput>;
  contest_is_null?: Maybe<Scalars['Boolean']>;
};

export type ContestImageWhereUniqueInput = {
  id: Scalars['ID'];
};

export type ContestImagesCreateInput = {
  data?: Maybe<ContestImageCreateInput>;
};

export type ContestImagesUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ContestImageUpdateInput>;
};

export type ContestRelateToOneInput = {
  create?: Maybe<ContestCreateInput>;
  connect?: Maybe<ContestWhereUniqueInput>;
  disconnect?: Maybe<ContestWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type ContestUpdateInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  entryFee?: Maybe<Scalars['Int']>;
  image?: Maybe<ContestImageRelateToOneInput>;
  lines?: Maybe<LineRelateToManyInput>;
};

export type ContestWhereInput = {
  AND?: Maybe<Array<Maybe<ContestWhereInput>>>;
  OR?: Maybe<Array<Maybe<ContestWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  status?: Maybe<Scalars['String']>;
  status_not?: Maybe<Scalars['String']>;
  status_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  entryFee?: Maybe<Scalars['Int']>;
  entryFee_not?: Maybe<Scalars['Int']>;
  entryFee_lt?: Maybe<Scalars['Int']>;
  entryFee_lte?: Maybe<Scalars['Int']>;
  entryFee_gt?: Maybe<Scalars['Int']>;
  entryFee_gte?: Maybe<Scalars['Int']>;
  entryFee_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  entryFee_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  image?: Maybe<ContestImageWhereInput>;
  image_is_null?: Maybe<Scalars['Boolean']>;
  /** condition must be true for all nodes */
  lines_every?: Maybe<LineWhereInput>;
  /** condition must be true for at least 1 node */
  lines_some?: Maybe<LineWhereInput>;
  /** condition must be false for all nodes */
  lines_none?: Maybe<LineWhereInput>;
};

export type ContestWhereUniqueInput = {
  id: Scalars['ID'];
};

export type ContestsCreateInput = {
  data?: Maybe<ContestCreateInput>;
};

export type ContestsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ContestUpdateInput>;
};

export type CreateInitialUserInput = {
  name?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
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
  contest?: Maybe<Contest>;
  choices: Array<Choice>;
  _choicesMeta?: Maybe<_QueryMeta>;
};


/** A keystone list */
export type LineChoicesArgs = {
  where?: Maybe<ChoiceWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortChoicesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/** A keystone list */
export type Line_ChoicesMetaArgs = {
  where?: Maybe<ChoiceWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortChoicesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type LineCreateInput = {
  title?: Maybe<Scalars['String']>;
  closingTime?: Maybe<Scalars['String']>;
  benchmark?: Maybe<Scalars['Float']>;
  contest?: Maybe<ContestRelateToOneInput>;
  choices?: Maybe<ChoiceRelateToManyInput>;
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
  contest?: Maybe<ContestRelateToOneInput>;
  choices?: Maybe<ChoiceRelateToManyInput>;
};

export type LineWhereInput = {
  AND?: Maybe<Array<Maybe<LineWhereInput>>>;
  OR?: Maybe<Array<Maybe<LineWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  contest?: Maybe<ContestWhereInput>;
  contest_is_null?: Maybe<Scalars['Boolean']>;
  /** condition must be true for all nodes */
  choices_every?: Maybe<ChoiceWhereInput>;
  /** condition must be true for at least 1 node */
  choices_some?: Maybe<ChoiceWhereInput>;
  /** condition must be false for all nodes */
  choices_none?: Maybe<ChoiceWhereInput>;
};

export type LineWhereUniqueInput = {
  id: Scalars['ID'];
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
  /** Create a single ContestImage item. */
  createContestImage?: Maybe<ContestImage>;
  /** Create multiple ContestImage items. */
  createContestImages?: Maybe<Array<Maybe<ContestImage>>>;
  /** Update a single ContestImage item by ID. */
  updateContestImage?: Maybe<ContestImage>;
  /** Update multiple ContestImage items by ID. */
  updateContestImages?: Maybe<Array<Maybe<ContestImage>>>;
  /** Delete a single ContestImage item by ID. */
  deleteContestImage?: Maybe<ContestImage>;
  /** Delete multiple ContestImage items by ID. */
  deleteContestImages?: Maybe<Array<Maybe<ContestImage>>>;
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


export type MutationCreateContestImageArgs = {
  data?: Maybe<ContestImageCreateInput>;
};


export type MutationCreateContestImagesArgs = {
  data?: Maybe<Array<Maybe<ContestImagesCreateInput>>>;
};


export type MutationUpdateContestImageArgs = {
  id: Scalars['ID'];
  data?: Maybe<ContestImageUpdateInput>;
};


export type MutationUpdateContestImagesArgs = {
  data?: Maybe<Array<Maybe<ContestImagesUpdateInput>>>;
};


export type MutationDeleteContestImageArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteContestImagesArgs = {
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

export type Query = {
  __typename?: 'Query';
  /** Search for all Bet items which match the where clause. */
  allBets?: Maybe<Array<Maybe<Bet>>>;
  /** Search for the Bet item with the matching ID. */
  Bet?: Maybe<Bet>;
  /** Perform a meta-query on all Bet items which match the where clause. */
  _allBetsMeta?: Maybe<_QueryMeta>;
  /** Search for all Choice items which match the where clause. */
  allChoices?: Maybe<Array<Maybe<Choice>>>;
  /** Search for the Choice item with the matching ID. */
  Choice?: Maybe<Choice>;
  /** Perform a meta-query on all Choice items which match the where clause. */
  _allChoicesMeta?: Maybe<_QueryMeta>;
  /** Search for all Contest items which match the where clause. */
  allContests?: Maybe<Array<Maybe<Contest>>>;
  /** Search for the Contest item with the matching ID. */
  Contest?: Maybe<Contest>;
  /** Perform a meta-query on all Contest items which match the where clause. */
  _allContestsMeta?: Maybe<_QueryMeta>;
  /** Search for all ContestImage items which match the where clause. */
  allContestImages?: Maybe<Array<Maybe<ContestImage>>>;
  /** Search for the ContestImage item with the matching ID. */
  ContestImage?: Maybe<ContestImage>;
  /** Perform a meta-query on all ContestImage items which match the where clause. */
  _allContestImagesMeta?: Maybe<_QueryMeta>;
  /** Search for all Line items which match the where clause. */
  allLines?: Maybe<Array<Maybe<Line>>>;
  /** Search for the Line item with the matching ID. */
  Line?: Maybe<Line>;
  /** Perform a meta-query on all Line items which match the where clause. */
  _allLinesMeta?: Maybe<_QueryMeta>;
  /** Search for all User items which match the where clause. */
  allUsers?: Maybe<Array<Maybe<User>>>;
  /** Search for the User item with the matching ID. */
  User?: Maybe<User>;
  /** Perform a meta-query on all User items which match the where clause. */
  _allUsersMeta?: Maybe<_QueryMeta>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
  keystone: KeystoneMeta;
};


export type QueryAllBetsArgs = {
  where?: Maybe<BetWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBetsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBetArgs = {
  where: BetWhereUniqueInput;
};


export type Query_AllBetsMetaArgs = {
  where?: Maybe<BetWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBetsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllChoicesArgs = {
  where?: Maybe<ChoiceWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortChoicesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryChoiceArgs = {
  where: ChoiceWhereUniqueInput;
};


export type Query_AllChoicesMetaArgs = {
  where?: Maybe<ChoiceWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortChoicesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllContestsArgs = {
  where?: Maybe<ContestWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortContestsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryContestArgs = {
  where: ContestWhereUniqueInput;
};


export type Query_AllContestsMetaArgs = {
  where?: Maybe<ContestWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortContestsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllContestImagesArgs = {
  where?: Maybe<ContestImageWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortContestImagesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryContestImageArgs = {
  where: ContestImageWhereUniqueInput;
};


export type Query_AllContestImagesMetaArgs = {
  where?: Maybe<ContestImageWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortContestImagesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllLinesArgs = {
  where?: Maybe<LineWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortLinesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryLineArgs = {
  where: LineWhereUniqueInput;
};


export type Query_AllLinesMetaArgs = {
  where?: Maybe<LineWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortLinesBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryAllUsersArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type Query_AllUsersMetaArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
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

export type SendUserPasswordResetLinkResult = {
  __typename?: 'SendUserPasswordResetLinkResult';
  code: PasswordResetRequestErrorCode;
  message: Scalars['String'];
};

export enum SortBetsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC',
  ChoiceAsc = 'choice_ASC',
  ChoiceDesc = 'choice_DESC'
}

export enum SortChoicesBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SelectionAsc = 'selection_ASC',
  SelectionDesc = 'selection_DESC',
  IsWinAsc = 'isWin_ASC',
  IsWinDesc = 'isWin_DESC',
  LineAsc = 'line_ASC',
  LineDesc = 'line_DESC',
  BetsAsc = 'bets_ASC',
  BetsDesc = 'bets_DESC'
}

export enum SortContestImagesBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  ContestAsc = 'contest_ASC',
  ContestDesc = 'contest_DESC'
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
  EntryFeeDesc = 'entryFee_DESC',
  ImageAsc = 'image_ASC',
  ImageDesc = 'image_DESC',
  LinesAsc = 'lines_ASC',
  LinesDesc = 'lines_DESC'
}

export enum SortLinesBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  ClosingTimeAsc = 'closingTime_ASC',
  ClosingTimeDesc = 'closingTime_DESC',
  BenchmarkAsc = 'benchmark_ASC',
  BenchmarkDesc = 'benchmark_DESC',
  ContestAsc = 'contest_ASC',
  ContestDesc = 'contest_DESC',
  ChoicesAsc = 'choices_ASC',
  ChoicesDesc = 'choices_DESC'
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
  BetsAsc = 'bets_ASC',
  BetsDesc = 'bets_DESC',
  PasswordResetIssuedAtAsc = 'passwordResetIssuedAt_ASC',
  PasswordResetIssuedAtDesc = 'passwordResetIssuedAt_DESC',
  PasswordResetRedeemedAtAsc = 'passwordResetRedeemedAt_ASC',
  PasswordResetRedeemedAtDesc = 'passwordResetRedeemedAt_DESC'
}


/** A keystone list */
export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  bets: Array<Bet>;
  _betsMeta?: Maybe<_QueryMeta>;
  passwordResetToken_is_set?: Maybe<Scalars['Boolean']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
};


/** A keystone list */
export type UserBetsArgs = {
  where?: Maybe<BetWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBetsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


/** A keystone list */
export type User_BetsMetaArgs = {
  where?: Maybe<BetWhereInput>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Array<SortBetsBy>>;
  orderBy?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
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
  passwordResetToken?: Maybe<Scalars['String']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
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
  passwordResetToken?: Maybe<Scalars['String']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  id: Scalars['ID'];
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

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { authenticatedItem?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'name' | 'userName'>
  )> }
);

export type All_Contests_QueryVariables = Exact<{ [key: string]: never; }>;


export type All_Contests_Query = (
  { __typename?: 'Query' }
  & { allContests?: Maybe<Array<Maybe<(
    { __typename?: 'Contest' }
    & Pick<Contest, 'id' | 'name' | 'description' | 'status'>
    & { image?: Maybe<(
      { __typename?: 'ContestImage' }
      & Pick<ContestImage, 'id'>
      & { image?: Maybe<(
        { __typename?: 'CloudinaryImage_File' }
        & Pick<CloudinaryImage_File, 'publicUrlTransformed'>
      )> }
    )> }
  )>>> }
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
export const CurrentUserDocument = gql`
    query CurrentUser {
  authenticatedItem {
    ... on User {
      id
      email
      name
      userName
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
export const All_Contests_QueryDocument = gql`
    query ALL_CONTESTS_QUERY {
  allContests {
    id
    name
    description
    status
    image {
      id
      image {
        publicUrlTransformed
      }
    }
  }
}
    `;

/**
 * __useAll_Contests_QueryQuery__
 *
 * To run a query within a React component, call `useAll_Contests_QueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAll_Contests_QueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAll_Contests_QueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useAll_Contests_QueryQuery(baseOptions?: Apollo.QueryHookOptions<All_Contests_Query, All_Contests_QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<All_Contests_Query, All_Contests_QueryVariables>(All_Contests_QueryDocument, options);
      }
export function useAll_Contests_QueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<All_Contests_Query, All_Contests_QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<All_Contests_Query, All_Contests_QueryVariables>(All_Contests_QueryDocument, options);
        }
export type All_Contests_QueryQueryHookResult = ReturnType<typeof useAll_Contests_QueryQuery>;
export type All_Contests_QueryLazyQueryHookResult = ReturnType<typeof useAll_Contests_QueryLazyQuery>;
export type All_Contests_QueryQueryResult = Apollo.QueryResult<All_Contests_Query, All_Contests_QueryVariables>;