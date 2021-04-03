type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly userName?: Scalars['String'] | null;
  readonly userName_not?: Scalars['String'] | null;
  readonly userName_contains?: Scalars['String'] | null;
  readonly userName_not_contains?: Scalars['String'] | null;
  readonly userName_starts_with?: Scalars['String'] | null;
  readonly userName_not_starts_with?: Scalars['String'] | null;
  readonly userName_ends_with?: Scalars['String'] | null;
  readonly userName_not_ends_with?: Scalars['String'] | null;
  readonly userName_i?: Scalars['String'] | null;
  readonly userName_not_i?: Scalars['String'] | null;
  readonly userName_contains_i?: Scalars['String'] | null;
  readonly userName_not_contains_i?: Scalars['String'] | null;
  readonly userName_starts_with_i?: Scalars['String'] | null;
  readonly userName_not_starts_with_i?: Scalars['String'] | null;
  readonly userName_ends_with_i?: Scalars['String'] | null;
  readonly userName_not_ends_with_i?: Scalars['String'] | null;
  readonly userName_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly userName_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'userName_ASC'
  | 'userName_DESC';

export type UserUpdateInput = {
  readonly email?: Scalars['String'] | null;
  readonly name?: Scalars['String'] | null;
  readonly userName?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly email?: Scalars['String'] | null;
  readonly name?: Scalars['String'] | null;
  readonly userName?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type ContestImageRelateToOneInput = {
  readonly create?: ContestImageCreateInput | null;
  readonly connect?: ContestImageWhereUniqueInput | null;
  readonly disconnect?: ContestImageWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ContestWhereInput = {
  readonly AND?: ReadonlyArray<ContestWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ContestWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status?: Scalars['String'] | null;
  readonly status_not?: Scalars['String'] | null;
  readonly status_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly entryFee?: Scalars['Int'] | null;
  readonly entryFee_not?: Scalars['Int'] | null;
  readonly entryFee_lt?: Scalars['Int'] | null;
  readonly entryFee_lte?: Scalars['Int'] | null;
  readonly entryFee_gt?: Scalars['Int'] | null;
  readonly entryFee_gte?: Scalars['Int'] | null;
  readonly entryFee_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly entryFee_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly image?: ContestImageWhereInput | null;
  readonly image_is_null?: Scalars['Boolean'] | null;
};

export type ContestWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortContestsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'status_ASC'
  | 'status_DESC'
  | 'entryFee_ASC'
  | 'entryFee_DESC'
  | 'image_ASC'
  | 'image_DESC';

export type ContestUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly status?: Scalars['String'] | null;
  readonly entryFee?: Scalars['Int'] | null;
  readonly image?: ContestImageRelateToOneInput | null;
};

export type ContestsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ContestUpdateInput | null;
};

export type ContestCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly status?: Scalars['String'] | null;
  readonly entryFee?: Scalars['Int'] | null;
  readonly image?: ContestImageRelateToOneInput | null;
};

export type ContestsCreateInput = {
  readonly data?: ContestCreateInput | null;
};

export type CloudinaryImageFormat = {
  readonly prettyName?: Scalars['String'] | null;
  readonly width?: Scalars['String'] | null;
  readonly height?: Scalars['String'] | null;
  readonly crop?: Scalars['String'] | null;
  readonly aspect_ratio?: Scalars['String'] | null;
  readonly gravity?: Scalars['String'] | null;
  readonly zoom?: Scalars['String'] | null;
  readonly x?: Scalars['String'] | null;
  readonly y?: Scalars['String'] | null;
  readonly format?: Scalars['String'] | null;
  readonly fetch_format?: Scalars['String'] | null;
  readonly quality?: Scalars['String'] | null;
  readonly radius?: Scalars['String'] | null;
  readonly angle?: Scalars['String'] | null;
  readonly effect?: Scalars['String'] | null;
  readonly opacity?: Scalars['String'] | null;
  readonly border?: Scalars['String'] | null;
  readonly background?: Scalars['String'] | null;
  readonly overlay?: Scalars['String'] | null;
  readonly underlay?: Scalars['String'] | null;
  readonly default_image?: Scalars['String'] | null;
  readonly delay?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly color_space?: Scalars['String'] | null;
  readonly dpr?: Scalars['String'] | null;
  readonly page?: Scalars['String'] | null;
  readonly density?: Scalars['String'] | null;
  readonly flags?: Scalars['String'] | null;
  readonly transformation?: Scalars['String'] | null;
};

export type ContestRelateToOneInput = {
  readonly create?: ContestCreateInput | null;
  readonly connect?: ContestWhereUniqueInput | null;
  readonly disconnect?: ContestWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ContestImageWhereInput = {
  readonly AND?: ReadonlyArray<ContestImageWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ContestImageWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText?: Scalars['String'] | null;
  readonly altText_not?: Scalars['String'] | null;
  readonly altText_contains?: Scalars['String'] | null;
  readonly altText_not_contains?: Scalars['String'] | null;
  readonly altText_starts_with?: Scalars['String'] | null;
  readonly altText_not_starts_with?: Scalars['String'] | null;
  readonly altText_ends_with?: Scalars['String'] | null;
  readonly altText_not_ends_with?: Scalars['String'] | null;
  readonly altText_i?: Scalars['String'] | null;
  readonly altText_not_i?: Scalars['String'] | null;
  readonly altText_contains_i?: Scalars['String'] | null;
  readonly altText_not_contains_i?: Scalars['String'] | null;
  readonly altText_starts_with_i?: Scalars['String'] | null;
  readonly altText_not_starts_with_i?: Scalars['String'] | null;
  readonly altText_ends_with_i?: Scalars['String'] | null;
  readonly altText_not_ends_with_i?: Scalars['String'] | null;
  readonly altText_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly contest?: ContestWhereInput | null;
  readonly contest_is_null?: Scalars['Boolean'] | null;
};

export type ContestImageWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortContestImagesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'altText_ASC'
  | 'altText_DESC'
  | 'contest_ASC'
  | 'contest_DESC';

export type ContestImageUpdateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly contest?: ContestRelateToOneInput | null;
};

export type ContestImagesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ContestImageUpdateInput | null;
};

export type ContestImageCreateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly contest?: ContestRelateToOneInput | null;
};

export type ContestImagesCreateInput = {
  readonly data?: ContestImageCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly userName?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields: 'id' | 'email' | 'name' | 'userName' | 'password';
  backing: {
    readonly id: string;
    readonly email?: string | null;
    readonly name?: string | null;
    readonly userName?: string | null;
    readonly password?: string | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type ContestListTypeInfo = {
  key: 'Contest';
  fields: 'id' | 'name' | 'description' | 'status' | 'entryFee' | 'image';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly description?: string | null;
    readonly status?: string | null;
    readonly entryFee?: number | null;
    readonly image?: string | null;
  };
  inputs: {
    where: ContestWhereInput;
    create: ContestCreateInput;
    update: ContestUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ContestWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortContestsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ContestListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ContestListTypeInfo,
    ContestListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ContestListTypeInfo,
  ContestListTypeInfo['fields']
>;

export type ContestImageListTypeInfo = {
  key: 'ContestImage';
  fields: 'id' | 'image' | 'altText' | 'contest';
  backing: {
    readonly id: string;
    readonly image?: any;
    readonly altText?: string | null;
    readonly contest?: string | null;
  };
  inputs: {
    where: ContestImageWhereInput;
    create: ContestImageCreateInput;
    update: ContestImageUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ContestImageWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortContestImagesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ContestImageListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ContestImageListTypeInfo,
    ContestImageListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ContestImageListTypeInfo,
  ContestImageListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly Contest: ContestListTypeInfo;
  readonly ContestImage: ContestImageListTypeInfo;
};
