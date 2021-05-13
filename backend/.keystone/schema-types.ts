type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type UserRelateToOneInput = {
  readonly create?: UserCreateInput | null;
  readonly connect?: UserWhereUniqueInput | null;
  readonly disconnect?: UserWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ChoiceRelateToOneInput = {
  readonly create?: ChoiceCreateInput | null;
  readonly connect?: ChoiceWhereUniqueInput | null;
  readonly disconnect?: ChoiceWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type BetWhereInput = {
  readonly AND?: ReadonlyArray<BetWhereInput | null> | null;
  readonly OR?: ReadonlyArray<BetWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly title?: Scalars['String'] | null;
  readonly title_not?: Scalars['String'] | null;
  readonly title_contains?: Scalars['String'] | null;
  readonly title_not_contains?: Scalars['String'] | null;
  readonly title_starts_with?: Scalars['String'] | null;
  readonly title_not_starts_with?: Scalars['String'] | null;
  readonly title_ends_with?: Scalars['String'] | null;
  readonly title_not_ends_with?: Scalars['String'] | null;
  readonly title_i?: Scalars['String'] | null;
  readonly title_not_i?: Scalars['String'] | null;
  readonly title_contains_i?: Scalars['String'] | null;
  readonly title_not_contains_i?: Scalars['String'] | null;
  readonly title_starts_with_i?: Scalars['String'] | null;
  readonly title_not_starts_with_i?: Scalars['String'] | null;
  readonly title_ends_with_i?: Scalars['String'] | null;
  readonly title_not_ends_with_i?: Scalars['String'] | null;
  readonly title_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly title_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly user?: UserWhereInput | null;
  readonly user_is_null?: Scalars['Boolean'] | null;
  readonly choice?: ChoiceWhereInput | null;
  readonly choice_is_null?: Scalars['Boolean'] | null;
};

export type BetWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortBetsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'user_ASC'
  | 'user_DESC'
  | 'choice_ASC'
  | 'choice_DESC';

export type BetUpdateInput = {
  readonly title?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
  readonly choice?: ChoiceRelateToOneInput | null;
};

export type BetsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: BetUpdateInput | null;
};

export type BetCreateInput = {
  readonly title?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
  readonly choice?: ChoiceRelateToOneInput | null;
};

export type BetsCreateInput = {
  readonly data?: BetCreateInput | null;
};

export type ChoiceSelectionType = 'OVER' | 'UNDER' | 'AWAY' | 'HOME';

export type LineRelateToOneInput = {
  readonly create?: LineCreateInput | null;
  readonly connect?: LineWhereUniqueInput | null;
  readonly disconnect?: LineWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type BetRelateToManyInput = {
  readonly create?: ReadonlyArray<BetCreateInput | null> | null;
  readonly connect?: ReadonlyArray<BetWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<BetWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ChoiceWhereInput = {
  readonly AND?: ReadonlyArray<ChoiceWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ChoiceWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly selection?: ChoiceSelectionType | null;
  readonly selection_not?: ChoiceSelectionType | null;
  readonly selection_in?: ReadonlyArray<ChoiceSelectionType | null> | null;
  readonly selection_not_in?: ReadonlyArray<ChoiceSelectionType | null> | null;
  readonly isWin?: Scalars['Boolean'] | null;
  readonly isWin_not?: Scalars['Boolean'] | null;
  readonly line?: LineWhereInput | null;
  readonly line_is_null?: Scalars['Boolean'] | null;
  readonly bets_every?: BetWhereInput | null;
  readonly bets_some?: BetWhereInput | null;
  readonly bets_none?: BetWhereInput | null;
};

export type ChoiceWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortChoicesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'selection_ASC'
  | 'selection_DESC'
  | 'isWin_ASC'
  | 'isWin_DESC'
  | 'line_ASC'
  | 'line_DESC'
  | 'bets_ASC'
  | 'bets_DESC';

export type ChoiceUpdateInput = {
  readonly selection?: ChoiceSelectionType | null;
  readonly isWin?: Scalars['Boolean'] | null;
  readonly line?: LineRelateToOneInput | null;
  readonly bets?: BetRelateToManyInput | null;
};

export type ChoicesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ChoiceUpdateInput | null;
};

export type ChoiceCreateInput = {
  readonly selection?: ChoiceSelectionType | null;
  readonly isWin?: Scalars['Boolean'] | null;
  readonly line?: LineRelateToOneInput | null;
  readonly bets?: BetRelateToManyInput | null;
};

export type ChoicesCreateInput = {
  readonly data?: ChoiceCreateInput | null;
};

export type ContestImageRelateToOneInput = {
  readonly create?: ContestImageCreateInput | null;
  readonly connect?: ContestImageWhereUniqueInput | null;
  readonly disconnect?: ContestImageWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type LineRelateToManyInput = {
  readonly create?: ReadonlyArray<LineCreateInput | null> | null;
  readonly connect?: ReadonlyArray<LineWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<LineWhereUniqueInput | null> | null;
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
  readonly lines_every?: LineWhereInput | null;
  readonly lines_some?: LineWhereInput | null;
  readonly lines_none?: LineWhereInput | null;
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
  | 'image_DESC'
  | 'lines_ASC'
  | 'lines_DESC';

export type ContestUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly status?: Scalars['String'] | null;
  readonly entryFee?: Scalars['Int'] | null;
  readonly image?: ContestImageRelateToOneInput | null;
  readonly lines?: LineRelateToManyInput | null;
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
  readonly lines?: LineRelateToManyInput | null;
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

export type ChoiceRelateToManyInput = {
  readonly create?: ReadonlyArray<ChoiceCreateInput | null> | null;
  readonly connect?: ReadonlyArray<ChoiceWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<ChoiceWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type LineWhereInput = {
  readonly AND?: ReadonlyArray<LineWhereInput | null> | null;
  readonly OR?: ReadonlyArray<LineWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_lt?: Scalars['ID'] | null;
  readonly id_lte?: Scalars['ID'] | null;
  readonly id_gt?: Scalars['ID'] | null;
  readonly id_gte?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly title?: Scalars['String'] | null;
  readonly title_not?: Scalars['String'] | null;
  readonly title_contains?: Scalars['String'] | null;
  readonly title_not_contains?: Scalars['String'] | null;
  readonly title_starts_with?: Scalars['String'] | null;
  readonly title_not_starts_with?: Scalars['String'] | null;
  readonly title_ends_with?: Scalars['String'] | null;
  readonly title_not_ends_with?: Scalars['String'] | null;
  readonly title_i?: Scalars['String'] | null;
  readonly title_not_i?: Scalars['String'] | null;
  readonly title_contains_i?: Scalars['String'] | null;
  readonly title_not_contains_i?: Scalars['String'] | null;
  readonly title_starts_with_i?: Scalars['String'] | null;
  readonly title_not_starts_with_i?: Scalars['String'] | null;
  readonly title_ends_with_i?: Scalars['String'] | null;
  readonly title_not_ends_with_i?: Scalars['String'] | null;
  readonly title_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly title_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly closingTime?: Scalars['String'] | null;
  readonly closingTime_not?: Scalars['String'] | null;
  readonly closingTime_lt?: Scalars['String'] | null;
  readonly closingTime_lte?: Scalars['String'] | null;
  readonly closingTime_gt?: Scalars['String'] | null;
  readonly closingTime_gte?: Scalars['String'] | null;
  readonly closingTime_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly closingTime_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly benchmark?: Scalars['Float'] | null;
  readonly benchmark_not?: Scalars['Float'] | null;
  readonly benchmark_lt?: Scalars['Float'] | null;
  readonly benchmark_lte?: Scalars['Float'] | null;
  readonly benchmark_gt?: Scalars['Float'] | null;
  readonly benchmark_gte?: Scalars['Float'] | null;
  readonly benchmark_in?: ReadonlyArray<Scalars['Float'] | null> | null;
  readonly benchmark_not_in?: ReadonlyArray<Scalars['Float'] | null> | null;
  readonly contest?: ContestWhereInput | null;
  readonly contest_is_null?: Scalars['Boolean'] | null;
  readonly choices_every?: ChoiceWhereInput | null;
  readonly choices_some?: ChoiceWhereInput | null;
  readonly choices_none?: ChoiceWhereInput | null;
};

export type LineWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortLinesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'closingTime_ASC'
  | 'closingTime_DESC'
  | 'benchmark_ASC'
  | 'benchmark_DESC'
  | 'contest_ASC'
  | 'contest_DESC'
  | 'choices_ASC'
  | 'choices_DESC';

export type LineUpdateInput = {
  readonly title?: Scalars['String'] | null;
  readonly closingTime?: Scalars['String'] | null;
  readonly benchmark?: Scalars['Float'] | null;
  readonly contest?: ContestRelateToOneInput | null;
  readonly choices?: ChoiceRelateToManyInput | null;
};

export type LinesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: LineUpdateInput | null;
};

export type LineCreateInput = {
  readonly title?: Scalars['String'] | null;
  readonly closingTime?: Scalars['String'] | null;
  readonly benchmark?: Scalars['Float'] | null;
  readonly contest?: ContestRelateToOneInput | null;
  readonly choices?: ChoiceRelateToManyInput | null;
};

export type LinesCreateInput = {
  readonly data?: LineCreateInput | null;
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
  readonly isAdmin?: Scalars['Boolean'] | null;
  readonly isAdmin_not?: Scalars['Boolean'] | null;
  readonly bets_every?: BetWhereInput | null;
  readonly bets_some?: BetWhereInput | null;
  readonly bets_none?: BetWhereInput | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
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
  | 'userName_DESC'
  | 'isAdmin_ASC'
  | 'isAdmin_DESC'
  | 'bets_ASC'
  | 'bets_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC';

export type UserUpdateInput = {
  readonly email?: Scalars['String'] | null;
  readonly name?: Scalars['String'] | null;
  readonly userName?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly isAdmin?: Scalars['Boolean'] | null;
  readonly bets?: BetRelateToManyInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
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
  readonly isAdmin?: Scalars['Boolean'] | null;
  readonly bets?: BetRelateToManyInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
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

export type PasswordResetRequestErrorCode =
  | 'IDENTITY_NOT_FOUND'
  | 'MULTIPLE_IDENTITY_MATCHES';

export type PasswordResetRedemptionErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'TOKEN_NOT_SET'
  | 'TOKEN_MISMATCH'
  | 'TOKEN_EXPIRED'
  | 'TOKEN_REDEEMED';

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type BetListTypeInfo = {
  key: 'Bet';
  fields: 'id' | 'title' | 'user' | 'choice';
  backing: {
    readonly id: string;
    readonly title?: string | null;
    readonly user?: string | null;
    readonly choice?: string | null;
  };
  inputs: {
    where: BetWhereInput;
    create: BetCreateInput;
    update: BetUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: BetWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortBetsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type BetListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    BetListTypeInfo,
    BetListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  BetListTypeInfo,
  BetListTypeInfo['fields']
>;

export type ChoiceListTypeInfo = {
  key: 'Choice';
  fields: 'id' | 'selection' | 'isWin' | 'line' | 'bets';
  backing: {
    readonly id: string;
    readonly selection?: string | null;
    readonly isWin?: boolean | null;
    readonly line?: string | null;
    readonly bets?: string | null;
  };
  inputs: {
    where: ChoiceWhereInput;
    create: ChoiceCreateInput;
    update: ChoiceUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ChoiceWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortChoicesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ChoiceListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ChoiceListTypeInfo,
    ChoiceListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ChoiceListTypeInfo,
  ChoiceListTypeInfo['fields']
>;

export type ContestListTypeInfo = {
  key: 'Contest';
  fields:
    | 'id'
    | 'name'
    | 'description'
    | 'status'
    | 'entryFee'
    | 'image'
    | 'lines';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly description?: string | null;
    readonly status?: string | null;
    readonly entryFee?: number | null;
    readonly image?: string | null;
    readonly lines?: string | null;
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

export type LineListTypeInfo = {
  key: 'Line';
  fields: 'id' | 'title' | 'closingTime' | 'benchmark' | 'contest' | 'choices';
  backing: {
    readonly id: string;
    readonly title?: string | null;
    readonly closingTime?: Date | null;
    readonly benchmark?: number | null;
    readonly contest?: string | null;
    readonly choices?: string | null;
  };
  inputs: {
    where: LineWhereInput;
    create: LineCreateInput;
    update: LineUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: LineWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortLinesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type LineListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    LineListTypeInfo,
    LineListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  LineListTypeInfo,
  LineListTypeInfo['fields']
>;

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'email'
    | 'name'
    | 'userName'
    | 'password'
    | 'isAdmin'
    | 'bets'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt';
  backing: {
    readonly id: string;
    readonly email?: string | null;
    readonly name?: string | null;
    readonly userName?: string | null;
    readonly password?: string | null;
    readonly isAdmin?: boolean | null;
    readonly bets?: string | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
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

export type KeystoneListsTypeInfo = {
  readonly Bet: BetListTypeInfo;
  readonly Choice: ChoiceListTypeInfo;
  readonly Contest: ContestListTypeInfo;
  readonly ContestImage: ContestImageListTypeInfo;
  readonly Line: LineListTypeInfo;
  readonly User: UserListTypeInfo;
};
