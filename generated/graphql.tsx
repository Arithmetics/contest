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

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.`  */
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

/**  A keystone list  */
export type Contest = {
  __typename?: 'Contest';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  entryFee?: Maybe<Scalars['Int']>;
  image?: Maybe<ContestImage>;
};

export type ContestCreateInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  entryFee?: Maybe<Scalars['Int']>;
  image?: Maybe<ContestImageRelateToOneInput>;
};

/**  A keystone list  */
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

export type Mutation = {
  __typename?: 'Mutation';
  /**  Create a single User item.  */
  createUser?: Maybe<User>;
  /**  Create multiple User items.  */
  createUsers?: Maybe<Array<Maybe<User>>>;
  /**  Update a single User item by ID.  */
  updateUser?: Maybe<User>;
  /**  Update multiple User items by ID.  */
  updateUsers?: Maybe<Array<Maybe<User>>>;
  /**  Delete a single User item by ID.  */
  deleteUser?: Maybe<User>;
  /**  Delete multiple User items by ID.  */
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  /**  Create a single Contest item.  */
  createContest?: Maybe<Contest>;
  /**  Create multiple Contest items.  */
  createContests?: Maybe<Array<Maybe<Contest>>>;
  /**  Update a single Contest item by ID.  */
  updateContest?: Maybe<Contest>;
  /**  Update multiple Contest items by ID.  */
  updateContests?: Maybe<Array<Maybe<Contest>>>;
  /**  Delete a single Contest item by ID.  */
  deleteContest?: Maybe<Contest>;
  /**  Delete multiple Contest items by ID.  */
  deleteContests?: Maybe<Array<Maybe<Contest>>>;
  /**  Create a single ContestImage item.  */
  createContestImage?: Maybe<ContestImage>;
  /**  Create multiple ContestImage items.  */
  createContestImages?: Maybe<Array<Maybe<ContestImage>>>;
  /**  Update a single ContestImage item by ID.  */
  updateContestImage?: Maybe<ContestImage>;
  /**  Update multiple ContestImage items by ID.  */
  updateContestImages?: Maybe<Array<Maybe<ContestImage>>>;
  /**  Delete a single ContestImage item by ID.  */
  deleteContestImage?: Maybe<ContestImage>;
  /**  Delete multiple ContestImage items by ID.  */
  deleteContestImages?: Maybe<Array<Maybe<ContestImage>>>;
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  sendUserPasswordResetLink?: Maybe<SendUserPasswordResetLinkResult>;
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  endSession: Scalars['Boolean'];
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
  /**  Search for all User items which match the where clause.  */
  allUsers?: Maybe<Array<Maybe<User>>>;
  /**  Search for the User item with the matching ID.  */
  User?: Maybe<User>;
  /**  Perform a meta-query on all User items which match the where clause.  */
  _allUsersMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the User list.  */
  _UsersMeta?: Maybe<_ListMeta>;
  /**  Search for all Contest items which match the where clause.  */
  allContests?: Maybe<Array<Maybe<Contest>>>;
  /**  Search for the Contest item with the matching ID.  */
  Contest?: Maybe<Contest>;
  /**  Perform a meta-query on all Contest items which match the where clause.  */
  _allContestsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the Contest list.  */
  _ContestsMeta?: Maybe<_ListMeta>;
  /**  Search for all ContestImage items which match the where clause.  */
  allContestImages?: Maybe<Array<Maybe<ContestImage>>>;
  /**  Search for the ContestImage item with the matching ID.  */
  ContestImage?: Maybe<ContestImage>;
  /**  Perform a meta-query on all ContestImage items which match the where clause.  */
  _allContestImagesMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the ContestImage list.  */
  _ContestImagesMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for all lists.  */
  _ksListsMeta?: Maybe<Array<Maybe<_ListMeta>>>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
  keystone: KeystoneMeta;
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


export type Query_KsListsMetaArgs = {
  where?: Maybe<_KsListsMetaInput>;
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
  ImageDesc = 'image_DESC'
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
  PasswordResetIssuedAtAsc = 'passwordResetIssuedAt_ASC',
  PasswordResetIssuedAtDesc = 'passwordResetIssuedAt_DESC',
  PasswordResetRedeemedAtAsc = 'passwordResetRedeemedAt_ASC',
  PasswordResetRedeemedAtDesc = 'passwordResetRedeemedAt_DESC'
}


/**  A keystone list  */
export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  passwordResetToken_is_set?: Maybe<Scalars['Boolean']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
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
  passwordResetToken?: Maybe<Scalars['String']>;
  passwordResetIssuedAt?: Maybe<Scalars['String']>;
  passwordResetRedeemedAt?: Maybe<Scalars['String']>;
};

export type UserUpdateInput = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
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

export type _ListAccess = {
  __typename?: '_ListAccess';
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'create' operations.
   * NOTE: 'create' can only return a Boolean.
   * It is not possible to specify a declarative Where clause for this
   * operation
   */
  create?: Maybe<Scalars['Boolean']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'read' operations.
   */
  read?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'update' operations.
   */
  update?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'delete' operations.
   */
  delete?: Maybe<Scalars['JSON']>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'auth' operations.
   */
  auth?: Maybe<Scalars['JSON']>;
};

export type _ListInputTypes = {
  __typename?: '_ListInputTypes';
  /** Input type for matching multiple items */
  whereInput?: Maybe<Scalars['String']>;
  /** Input type for matching a unique item */
  whereUniqueInput?: Maybe<Scalars['String']>;
  /** Create mutation input type name */
  createInput?: Maybe<Scalars['String']>;
  /** Create many mutation input type name */
  createManyInput?: Maybe<Scalars['String']>;
  /** Update mutation name input */
  updateInput?: Maybe<Scalars['String']>;
  /** Update many mutation name input */
  updateManyInput?: Maybe<Scalars['String']>;
};

export type _ListMeta = {
  __typename?: '_ListMeta';
  /** The Keystone list key */
  key?: Maybe<Scalars['String']>;
  /**
   * The Keystone List name
   * @deprecated Use `key` instead
   */
  name?: Maybe<Scalars['String']>;
  /** The list's user-facing description */
  description?: Maybe<Scalars['String']>;
  /** The list's display name in the Admin UI */
  label?: Maybe<Scalars['String']>;
  /** The list's singular display name */
  singular?: Maybe<Scalars['String']>;
  /** The list's plural display name */
  plural?: Maybe<Scalars['String']>;
  /** The list's data path */
  path?: Maybe<Scalars['String']>;
  /** Access control configuration for the currently authenticated request */
  access?: Maybe<_ListAccess>;
  /** Information on the generated GraphQL schema */
  schema?: Maybe<_ListSchema>;
};

export type _ListMutations = {
  __typename?: '_ListMutations';
  /** Create mutation name */
  create?: Maybe<Scalars['String']>;
  /** Create many mutation name */
  createMany?: Maybe<Scalars['String']>;
  /** Update mutation name */
  update?: Maybe<Scalars['String']>;
  /** Update many mutation name */
  updateMany?: Maybe<Scalars['String']>;
  /** Delete mutation name */
  delete?: Maybe<Scalars['String']>;
  /** Delete many mutation name */
  deleteMany?: Maybe<Scalars['String']>;
};

export type _ListQueries = {
  __typename?: '_ListQueries';
  /** Single-item query name */
  item?: Maybe<Scalars['String']>;
  /** All-items query name */
  list?: Maybe<Scalars['String']>;
  /** List metadata query name */
  meta?: Maybe<Scalars['String']>;
};

export type _ListSchema = {
  __typename?: '_ListSchema';
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>;
  /**
   * Top level GraphQL query names which either return this type, or
   * provide aggregate information about this type
   */
  queries?: Maybe<_ListQueries>;
  /** Top-level GraphQL mutation names */
  mutations?: Maybe<_ListMutations>;
  /** Top-level GraphQL input types */
  inputTypes?: Maybe<_ListInputTypes>;
  /** Information about fields defined on this list */
  fields?: Maybe<Array<Maybe<_ListSchemaFields>>>;
  /**
   * Information about fields on other types which return this type, or
   * provide aggregate information about this type
   */
  relatedFields?: Maybe<Array<Maybe<_ListSchemaRelatedFields>>>;
};


export type _ListSchemaFieldsArgs = {
  where?: Maybe<_ListSchemaFieldsInput>;
};

export type _ListSchemaFields = {
  __typename?: '_ListSchemaFields';
  /** The path of the field in its list */
  path?: Maybe<Scalars['String']>;
  /**
   * The name of the field in its list
   * @deprecated Use `path` instead
   */
  name?: Maybe<Scalars['String']>;
  /** The field type (ie, Checkbox, Text, etc) */
  type?: Maybe<Scalars['String']>;
};

export type _ListSchemaFieldsInput = {
  type?: Maybe<Scalars['String']>;
};

export type _ListSchemaRelatedFields = {
  __typename?: '_ListSchemaRelatedFields';
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars['String']>;
  /** A list of GraphQL field names */
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count?: Maybe<Scalars['Int']>;
};

export type _KsListsMetaInput = {
  key?: Maybe<Scalars['String']>;
  /** Whether this is an auxiliary helper list */
  auxiliary?: Maybe<Scalars['Boolean']>;
};

export type Check_If_Email_Available_QueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type Check_If_Email_Available_Query = (
  { __typename?: 'Query' }
  & { _allUsersMeta?: Maybe<(
    { __typename?: '_QueryMeta' }
    & Pick<_QueryMeta, 'count'>
  )> }
);

export type Check_If_Username_Available_QueryVariables = Exact<{
  userName: Scalars['String'];
}>;


export type Check_If_Username_Available_Query = (
  { __typename?: 'Query' }
  & { _allUsersMeta?: Maybe<(
    { __typename?: '_QueryMeta' }
    & Pick<_QueryMeta, 'count'>
  )> }
);

export type Request_Reset_MutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type Request_Reset_Mutation = (
  { __typename?: 'Mutation' }
  & { sendUserPasswordResetLink?: Maybe<(
    { __typename?: 'SendUserPasswordResetLinkResult' }
    & Pick<SendUserPasswordResetLinkResult, 'code' | 'message'>
  )> }
);

export type Reset_MutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
}>;


export type Reset_Mutation = (
  { __typename?: 'Mutation' }
  & { redeemUserPasswordResetToken?: Maybe<(
    { __typename?: 'RedeemUserPasswordResetTokenResult' }
    & Pick<RedeemUserPasswordResetTokenResult, 'code' | 'message'>
  )> }
);

export type Signin_MutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type Signin_Mutation = (
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

export type Signout_MutationVariables = Exact<{ [key: string]: never; }>;


export type Signout_Mutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'endSession'>
);

export type Signup_MutationVariables = Exact<{
  email: Scalars['String'];
  name: Scalars['String'];
  userName: Scalars['String'];
  password: Scalars['String'];
}>;


export type Signup_Mutation = (
  { __typename?: 'Mutation' }
  & { createUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'name' | 'userName'>
  )> }
);

export type Current_User_QueryVariables = Exact<{ [key: string]: never; }>;


export type Current_User_Query = (
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


export const Check_If_Email_Available_QueryDocument = gql`
    query CHECK_IF_EMAIL_AVAILABLE_QUERY($email: String!) {
  _allUsersMeta(where: {email: $email}) {
    count
  }
}
    `;

/**
 * __useCheck_If_Email_Available_QueryQuery__
 *
 * To run a query within a React component, call `useCheck_If_Email_Available_QueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheck_If_Email_Available_QueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheck_If_Email_Available_QueryQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCheck_If_Email_Available_QueryQuery(baseOptions: Apollo.QueryHookOptions<Check_If_Email_Available_Query, Check_If_Email_Available_QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Check_If_Email_Available_Query, Check_If_Email_Available_QueryVariables>(Check_If_Email_Available_QueryDocument, options);
      }
export function useCheck_If_Email_Available_QueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Check_If_Email_Available_Query, Check_If_Email_Available_QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Check_If_Email_Available_Query, Check_If_Email_Available_QueryVariables>(Check_If_Email_Available_QueryDocument, options);
        }
export type Check_If_Email_Available_QueryQueryHookResult = ReturnType<typeof useCheck_If_Email_Available_QueryQuery>;
export type Check_If_Email_Available_QueryLazyQueryHookResult = ReturnType<typeof useCheck_If_Email_Available_QueryLazyQuery>;
export type Check_If_Email_Available_QueryQueryResult = Apollo.QueryResult<Check_If_Email_Available_Query, Check_If_Email_Available_QueryVariables>;
export const Check_If_Username_Available_QueryDocument = gql`
    query CHECK_IF_USERNAME_AVAILABLE_QUERY($userName: String!) {
  _allUsersMeta(where: {userName: $userName}) {
    count
  }
}
    `;

/**
 * __useCheck_If_Username_Available_QueryQuery__
 *
 * To run a query within a React component, call `useCheck_If_Username_Available_QueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheck_If_Username_Available_QueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheck_If_Username_Available_QueryQuery({
 *   variables: {
 *      userName: // value for 'userName'
 *   },
 * });
 */
export function useCheck_If_Username_Available_QueryQuery(baseOptions: Apollo.QueryHookOptions<Check_If_Username_Available_Query, Check_If_Username_Available_QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Check_If_Username_Available_Query, Check_If_Username_Available_QueryVariables>(Check_If_Username_Available_QueryDocument, options);
      }
export function useCheck_If_Username_Available_QueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Check_If_Username_Available_Query, Check_If_Username_Available_QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Check_If_Username_Available_Query, Check_If_Username_Available_QueryVariables>(Check_If_Username_Available_QueryDocument, options);
        }
export type Check_If_Username_Available_QueryQueryHookResult = ReturnType<typeof useCheck_If_Username_Available_QueryQuery>;
export type Check_If_Username_Available_QueryLazyQueryHookResult = ReturnType<typeof useCheck_If_Username_Available_QueryLazyQuery>;
export type Check_If_Username_Available_QueryQueryResult = Apollo.QueryResult<Check_If_Username_Available_Query, Check_If_Username_Available_QueryVariables>;
export const Request_Reset_MutationDocument = gql`
    mutation REQUEST_RESET_MUTATION($email: String!) {
  sendUserPasswordResetLink(email: $email) {
    code
    message
  }
}
    `;
export type Request_Reset_MutationMutationFn = Apollo.MutationFunction<Request_Reset_Mutation, Request_Reset_MutationVariables>;

/**
 * __useRequest_Reset_MutationMutation__
 *
 * To run a mutation, you first call `useRequest_Reset_MutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequest_Reset_MutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestResetMutationMutation, { data, loading, error }] = useRequest_Reset_MutationMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequest_Reset_MutationMutation(baseOptions?: Apollo.MutationHookOptions<Request_Reset_Mutation, Request_Reset_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Request_Reset_Mutation, Request_Reset_MutationVariables>(Request_Reset_MutationDocument, options);
      }
export type Request_Reset_MutationMutationHookResult = ReturnType<typeof useRequest_Reset_MutationMutation>;
export type Request_Reset_MutationMutationResult = Apollo.MutationResult<Request_Reset_Mutation>;
export type Request_Reset_MutationMutationOptions = Apollo.BaseMutationOptions<Request_Reset_Mutation, Request_Reset_MutationVariables>;
export const Reset_MutationDocument = gql`
    mutation RESET_MUTATION($email: String!, $password: String!, $token: String!) {
  redeemUserPasswordResetToken(email: $email, token: $token, password: $password) {
    code
    message
  }
}
    `;
export type Reset_MutationMutationFn = Apollo.MutationFunction<Reset_Mutation, Reset_MutationVariables>;

/**
 * __useReset_MutationMutation__
 *
 * To run a mutation, you first call `useReset_MutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReset_MutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetMutationMutation, { data, loading, error }] = useReset_MutationMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useReset_MutationMutation(baseOptions?: Apollo.MutationHookOptions<Reset_Mutation, Reset_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Reset_Mutation, Reset_MutationVariables>(Reset_MutationDocument, options);
      }
export type Reset_MutationMutationHookResult = ReturnType<typeof useReset_MutationMutation>;
export type Reset_MutationMutationResult = Apollo.MutationResult<Reset_Mutation>;
export type Reset_MutationMutationOptions = Apollo.BaseMutationOptions<Reset_Mutation, Reset_MutationVariables>;
export const Signin_MutationDocument = gql`
    mutation SIGNIN_MUTATION($email: String!, $password: String!) {
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
export type Signin_MutationMutationFn = Apollo.MutationFunction<Signin_Mutation, Signin_MutationVariables>;

/**
 * __useSignin_MutationMutation__
 *
 * To run a mutation, you first call `useSignin_MutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignin_MutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signinMutationMutation, { data, loading, error }] = useSignin_MutationMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignin_MutationMutation(baseOptions?: Apollo.MutationHookOptions<Signin_Mutation, Signin_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Signin_Mutation, Signin_MutationVariables>(Signin_MutationDocument, options);
      }
export type Signin_MutationMutationHookResult = ReturnType<typeof useSignin_MutationMutation>;
export type Signin_MutationMutationResult = Apollo.MutationResult<Signin_Mutation>;
export type Signin_MutationMutationOptions = Apollo.BaseMutationOptions<Signin_Mutation, Signin_MutationVariables>;
export const Signout_MutationDocument = gql`
    mutation SIGNOUT_MUTATION {
  endSession
}
    `;
export type Signout_MutationMutationFn = Apollo.MutationFunction<Signout_Mutation, Signout_MutationVariables>;

/**
 * __useSignout_MutationMutation__
 *
 * To run a mutation, you first call `useSignout_MutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignout_MutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signoutMutationMutation, { data, loading, error }] = useSignout_MutationMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignout_MutationMutation(baseOptions?: Apollo.MutationHookOptions<Signout_Mutation, Signout_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Signout_Mutation, Signout_MutationVariables>(Signout_MutationDocument, options);
      }
export type Signout_MutationMutationHookResult = ReturnType<typeof useSignout_MutationMutation>;
export type Signout_MutationMutationResult = Apollo.MutationResult<Signout_Mutation>;
export type Signout_MutationMutationOptions = Apollo.BaseMutationOptions<Signout_Mutation, Signout_MutationVariables>;
export const Signup_MutationDocument = gql`
    mutation SIGNUP_MUTATION($email: String!, $name: String!, $userName: String!, $password: String!) {
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
export type Signup_MutationMutationFn = Apollo.MutationFunction<Signup_Mutation, Signup_MutationVariables>;

/**
 * __useSignup_MutationMutation__
 *
 * To run a mutation, you first call `useSignup_MutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignup_MutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutationMutation, { data, loading, error }] = useSignup_MutationMutation({
 *   variables: {
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      userName: // value for 'userName'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignup_MutationMutation(baseOptions?: Apollo.MutationHookOptions<Signup_Mutation, Signup_MutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Signup_Mutation, Signup_MutationVariables>(Signup_MutationDocument, options);
      }
export type Signup_MutationMutationHookResult = ReturnType<typeof useSignup_MutationMutation>;
export type Signup_MutationMutationResult = Apollo.MutationResult<Signup_Mutation>;
export type Signup_MutationMutationOptions = Apollo.BaseMutationOptions<Signup_Mutation, Signup_MutationVariables>;
export const Current_User_QueryDocument = gql`
    query CURRENT_USER_QUERY {
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
 * __useCurrent_User_QueryQuery__
 *
 * To run a query within a React component, call `useCurrent_User_QueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrent_User_QueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrent_User_QueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrent_User_QueryQuery(baseOptions?: Apollo.QueryHookOptions<Current_User_Query, Current_User_QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Current_User_Query, Current_User_QueryVariables>(Current_User_QueryDocument, options);
      }
export function useCurrent_User_QueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Current_User_Query, Current_User_QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Current_User_Query, Current_User_QueryVariables>(Current_User_QueryDocument, options);
        }
export type Current_User_QueryQueryHookResult = ReturnType<typeof useCurrent_User_QueryQuery>;
export type Current_User_QueryLazyQueryHookResult = ReturnType<typeof useCurrent_User_QueryLazyQuery>;
export type Current_User_QueryQueryResult = Apollo.QueryResult<Current_User_Query, Current_User_QueryVariables>;
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