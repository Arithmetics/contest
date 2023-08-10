import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AuthenticatedItem = User;

export type Bet = {
  __typename?: 'Bet';
  choice?: Maybe<Choice>;
  id: Scalars['ID']['output'];
  isSuper?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<User>;
};

export type BetCreateInput = {
  choice?: InputMaybe<ChoiceRelateToOneForCreateInput>;
  isSuper?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type BetManyRelationFilter = {
  every?: InputMaybe<BetWhereInput>;
  none?: InputMaybe<BetWhereInput>;
  some?: InputMaybe<BetWhereInput>;
};

export type BetOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  isSuper?: InputMaybe<OrderDirection>;
};

export type BetRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<BetWhereUniqueInput>>;
  create?: InputMaybe<Array<BetCreateInput>>;
};

export type BetRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<BetWhereUniqueInput>>;
  create?: InputMaybe<Array<BetCreateInput>>;
  disconnect?: InputMaybe<Array<BetWhereUniqueInput>>;
  set?: InputMaybe<Array<BetWhereUniqueInput>>;
};

export type BetUpdateArgs = {
  data: BetUpdateInput;
  where: BetWhereUniqueInput;
};

export type BetUpdateInput = {
  choice?: InputMaybe<ChoiceRelateToOneForUpdateInput>;
  isSuper?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type BetWhereInput = {
  AND?: InputMaybe<Array<BetWhereInput>>;
  NOT?: InputMaybe<Array<BetWhereInput>>;
  OR?: InputMaybe<Array<BetWhereInput>>;
  choice?: InputMaybe<ChoiceWhereInput>;
  id?: InputMaybe<IdFilter>;
  isSuper?: InputMaybe<BooleanFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type BetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilter>;
};

export type Chat = {
  __typename?: 'Chat';
  content?: Maybe<Scalars['String']['output']>;
  contest?: Maybe<Contest>;
  id: Scalars['ID']['output'];
  user?: Maybe<User>;
};

export type ChatCreateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  contest?: InputMaybe<ContestRelateToOneForCreateInput>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type ChatManyRelationFilter = {
  every?: InputMaybe<ChatWhereInput>;
  none?: InputMaybe<ChatWhereInput>;
  some?: InputMaybe<ChatWhereInput>;
};

export type ChatOrderByInput = {
  content?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type ChatRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ChatWhereUniqueInput>>;
  create?: InputMaybe<Array<ChatCreateInput>>;
};

export type ChatRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ChatWhereUniqueInput>>;
  create?: InputMaybe<Array<ChatCreateInput>>;
  disconnect?: InputMaybe<Array<ChatWhereUniqueInput>>;
  set?: InputMaybe<Array<ChatWhereUniqueInput>>;
};

export type ChatUpdateArgs = {
  data: ChatUpdateInput;
  where: ChatWhereUniqueInput;
};

export type ChatUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  contest?: InputMaybe<ContestRelateToOneForUpdateInput>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type ChatWhereInput = {
  AND?: InputMaybe<Array<ChatWhereInput>>;
  NOT?: InputMaybe<Array<ChatWhereInput>>;
  OR?: InputMaybe<Array<ChatWhereInput>>;
  content?: InputMaybe<StringFilter>;
  contest?: InputMaybe<ContestWhereInput>;
  id?: InputMaybe<IdFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type ChatWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Choice = {
  __typename?: 'Choice';
  bets?: Maybe<Array<Bet>>;
  betsCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<CloudImage>;
  isWin?: Maybe<Scalars['Boolean']['output']>;
  labelName?: Maybe<Scalars['String']['output']>;
  line?: Maybe<Line>;
  secondaryImage?: Maybe<CloudImage>;
  selection?: Maybe<ChoiceSelectionType>;
  status?: Maybe<ChoiceStatus>;
};


export type ChoiceBetsArgs = {
  cursor?: InputMaybe<BetWhereUniqueInput>;
  orderBy?: Array<BetOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BetWhereInput;
};


export type ChoiceBetsCountArgs = {
  where?: BetWhereInput;
};

export type ChoiceCreateInput = {
  bets?: InputMaybe<BetRelateToManyForCreateInput>;
  image?: InputMaybe<CloudImageRelateToOneForCreateInput>;
  isWin?: InputMaybe<Scalars['Boolean']['input']>;
  line?: InputMaybe<LineRelateToOneForCreateInput>;
  secondaryImage?: InputMaybe<CloudImageRelateToOneForCreateInput>;
  selection?: InputMaybe<ChoiceSelectionType>;
};

export type ChoiceManyRelationFilter = {
  every?: InputMaybe<ChoiceWhereInput>;
  none?: InputMaybe<ChoiceWhereInput>;
  some?: InputMaybe<ChoiceWhereInput>;
};

export type ChoiceOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  isWin?: InputMaybe<OrderDirection>;
  selection?: InputMaybe<OrderDirection>;
};

export type ChoiceRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ChoiceWhereUniqueInput>>;
  create?: InputMaybe<Array<ChoiceCreateInput>>;
};

export type ChoiceRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ChoiceWhereUniqueInput>>;
  create?: InputMaybe<Array<ChoiceCreateInput>>;
  disconnect?: InputMaybe<Array<ChoiceWhereUniqueInput>>;
  set?: InputMaybe<Array<ChoiceWhereUniqueInput>>;
};

export type ChoiceRelateToOneForCreateInput = {
  connect?: InputMaybe<ChoiceWhereUniqueInput>;
  create?: InputMaybe<ChoiceCreateInput>;
};

export type ChoiceRelateToOneForUpdateInput = {
  connect?: InputMaybe<ChoiceWhereUniqueInput>;
  create?: InputMaybe<ChoiceCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ChoiceSelectionType {
  Away = 'AWAY',
  Home = 'HOME',
  Over = 'OVER',
  Under = 'UNDER'
}

export type ChoiceSelectionTypeNullableFilter = {
  equals?: InputMaybe<ChoiceSelectionType>;
  in?: InputMaybe<Array<ChoiceSelectionType>>;
  not?: InputMaybe<ChoiceSelectionTypeNullableFilter>;
  notIn?: InputMaybe<Array<ChoiceSelectionType>>;
};

export enum ChoiceStatus {
  Losing = 'LOSING',
  Lost = 'LOST',
  NotStarted = 'NOT_STARTED',
  Winning = 'WINNING',
  Won = 'WON'
}

export type ChoiceUpdateArgs = {
  data: ChoiceUpdateInput;
  where: ChoiceWhereUniqueInput;
};

export type ChoiceUpdateInput = {
  bets?: InputMaybe<BetRelateToManyForUpdateInput>;
  image?: InputMaybe<CloudImageRelateToOneForUpdateInput>;
  isWin?: InputMaybe<Scalars['Boolean']['input']>;
  line?: InputMaybe<LineRelateToOneForUpdateInput>;
  secondaryImage?: InputMaybe<CloudImageRelateToOneForUpdateInput>;
  selection?: InputMaybe<ChoiceSelectionType>;
};

export type ChoiceWhereInput = {
  AND?: InputMaybe<Array<ChoiceWhereInput>>;
  NOT?: InputMaybe<Array<ChoiceWhereInput>>;
  OR?: InputMaybe<Array<ChoiceWhereInput>>;
  bets?: InputMaybe<BetManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<CloudImageWhereInput>;
  isWin?: InputMaybe<BooleanFilter>;
  line?: InputMaybe<LineWhereInput>;
  secondaryImage?: InputMaybe<CloudImageWhereInput>;
  selection?: InputMaybe<ChoiceSelectionTypeNullableFilter>;
};

export type ChoiceWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CloudImage = {
  __typename?: 'CloudImage';
  altText?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<CloudinaryImage_File>;
};

export type CloudImageCreateInput = {
  altText?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
};

export type CloudImageOrderByInput = {
  altText?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type CloudImageRelateToOneForCreateInput = {
  connect?: InputMaybe<CloudImageWhereUniqueInput>;
  create?: InputMaybe<CloudImageCreateInput>;
};

export type CloudImageRelateToOneForUpdateInput = {
  connect?: InputMaybe<CloudImageWhereUniqueInput>;
  create?: InputMaybe<CloudImageCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CloudImageUpdateArgs = {
  data: CloudImageUpdateInput;
  where: CloudImageWhereUniqueInput;
};

export type CloudImageUpdateInput = {
  altText?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
};

export type CloudImageWhereInput = {
  AND?: InputMaybe<Array<CloudImageWhereInput>>;
  NOT?: InputMaybe<Array<CloudImageWhereInput>>;
  OR?: InputMaybe<Array<CloudImageWhereInput>>;
  altText?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
};

export type CloudImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  angle?: InputMaybe<Scalars['String']['input']>;
  aspect_ratio?: InputMaybe<Scalars['String']['input']>;
  background?: InputMaybe<Scalars['String']['input']>;
  border?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  color_space?: InputMaybe<Scalars['String']['input']>;
  crop?: InputMaybe<Scalars['String']['input']>;
  default_image?: InputMaybe<Scalars['String']['input']>;
  delay?: InputMaybe<Scalars['String']['input']>;
  density?: InputMaybe<Scalars['String']['input']>;
  dpr?: InputMaybe<Scalars['String']['input']>;
  effect?: InputMaybe<Scalars['String']['input']>;
  fetch_format?: InputMaybe<Scalars['String']['input']>;
  flags?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  gravity?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  opacity?: InputMaybe<Scalars['String']['input']>;
  overlay?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.` */
  prettyName?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['String']['input']>;
  transformation?: InputMaybe<Scalars['String']['input']>;
  underlay?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['String']['input']>;
  x?: InputMaybe<Scalars['String']['input']>;
  y?: InputMaybe<Scalars['String']['input']>;
  zoom?: InputMaybe<Scalars['String']['input']>;
};

export type CloudinaryImage_File = {
  __typename?: 'CloudinaryImage_File';
  encoding?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  mimetype?: Maybe<Scalars['String']['output']>;
  originalFilename?: Maybe<Scalars['String']['output']>;
  publicUrl?: Maybe<Scalars['String']['output']>;
  publicUrlTransformed?: Maybe<Scalars['String']['output']>;
};


export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: InputMaybe<CloudinaryImageFormat>;
};

export type Contest = {
  __typename?: 'Contest';
  chats?: Maybe<Array<Chat>>;
  chatsCount?: Maybe<Scalars['Int']['output']>;
  contestType?: Maybe<ContestContestTypeType>;
  description?: Maybe<Scalars['String']['output']>;
  entryFee?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<CloudImage>;
  lines?: Maybe<Array<Line>>;
  linesCount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  registrations?: Maybe<Array<Registration>>;
  registrationsCount?: Maybe<Scalars['Int']['output']>;
  ruleSet?: Maybe<RuleSet>;
  status?: Maybe<ContestStatusType>;
  winner?: Maybe<User>;
};


export type ContestChatsArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  orderBy?: Array<ChatOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ChatWhereInput;
};


export type ContestChatsCountArgs = {
  where?: ChatWhereInput;
};


export type ContestLinesArgs = {
  cursor?: InputMaybe<LineWhereUniqueInput>;
  orderBy?: Array<LineOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: LineWhereInput;
};


export type ContestLinesCountArgs = {
  where?: LineWhereInput;
};


export type ContestRegistrationsArgs = {
  cursor?: InputMaybe<RegistrationWhereUniqueInput>;
  orderBy?: Array<RegistrationOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: RegistrationWhereInput;
};


export type ContestRegistrationsCountArgs = {
  where?: RegistrationWhereInput;
};

export enum ContestContestTypeType {
  NbaOverUnder = 'NBA_OVER_UNDER',
  NflAts = 'NFL_ATS',
  NflOverUnder = 'NFL_OVER_UNDER'
}

export type ContestContestTypeTypeNullableFilter = {
  equals?: InputMaybe<ContestContestTypeType>;
  in?: InputMaybe<Array<ContestContestTypeType>>;
  not?: InputMaybe<ContestContestTypeTypeNullableFilter>;
  notIn?: InputMaybe<Array<ContestContestTypeType>>;
};

export type ContestCreateInput = {
  chats?: InputMaybe<ChatRelateToManyForCreateInput>;
  contestType?: InputMaybe<ContestContestTypeType>;
  description?: InputMaybe<Scalars['String']['input']>;
  entryFee?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<CloudImageRelateToOneForCreateInput>;
  lines?: InputMaybe<LineRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  registrations?: InputMaybe<RegistrationRelateToManyForCreateInput>;
  ruleSet?: InputMaybe<RuleSetRelateToOneForCreateInput>;
  status?: InputMaybe<ContestStatusType>;
  winner?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type ContestOrderByInput = {
  contestType?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  entryFee?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
};

export type ContestRelateToOneForCreateInput = {
  connect?: InputMaybe<ContestWhereUniqueInput>;
  create?: InputMaybe<ContestCreateInput>;
};

export type ContestRelateToOneForUpdateInput = {
  connect?: InputMaybe<ContestWhereUniqueInput>;
  create?: InputMaybe<ContestCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ContestStatusType {
  Complete = 'COMPLETE',
  InProgress = 'IN_PROGRESS',
  Open = 'OPEN'
}

export type ContestStatusTypeNullableFilter = {
  equals?: InputMaybe<ContestStatusType>;
  in?: InputMaybe<Array<ContestStatusType>>;
  not?: InputMaybe<ContestStatusTypeNullableFilter>;
  notIn?: InputMaybe<Array<ContestStatusType>>;
};

export type ContestUpdateArgs = {
  data: ContestUpdateInput;
  where: ContestWhereUniqueInput;
};

export type ContestUpdateInput = {
  chats?: InputMaybe<ChatRelateToManyForUpdateInput>;
  contestType?: InputMaybe<ContestContestTypeType>;
  description?: InputMaybe<Scalars['String']['input']>;
  entryFee?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<CloudImageRelateToOneForUpdateInput>;
  lines?: InputMaybe<LineRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  registrations?: InputMaybe<RegistrationRelateToManyForUpdateInput>;
  ruleSet?: InputMaybe<RuleSetRelateToOneForUpdateInput>;
  status?: InputMaybe<ContestStatusType>;
  winner?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type ContestWhereInput = {
  AND?: InputMaybe<Array<ContestWhereInput>>;
  NOT?: InputMaybe<Array<ContestWhereInput>>;
  OR?: InputMaybe<Array<ContestWhereInput>>;
  chats?: InputMaybe<ChatManyRelationFilter>;
  contestType?: InputMaybe<ContestContestTypeTypeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  entryFee?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<CloudImageWhereInput>;
  lines?: InputMaybe<LineManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  registrations?: InputMaybe<RegistrationManyRelationFilter>;
  ruleSet?: InputMaybe<RuleSetWhereInput>;
  status?: InputMaybe<ContestStatusTypeNullableFilter>;
  winner?: InputMaybe<UserWhereInput>;
};

export type ContestWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type History = {
  __typename?: 'History';
  contestType?: Maybe<HistoryContestTypeType>;
  display?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  user?: Maybe<User>;
  year?: Maybe<Scalars['Int']['output']>;
};

export enum HistoryContestTypeType {
  NbaOverUnder = 'NBA_OVER_UNDER',
  NflAts = 'NFL_ATS',
  NflOverUnder = 'NFL_OVER_UNDER'
}

export type HistoryContestTypeTypeNullableFilter = {
  equals?: InputMaybe<HistoryContestTypeType>;
  in?: InputMaybe<Array<HistoryContestTypeType>>;
  not?: InputMaybe<HistoryContestTypeTypeNullableFilter>;
  notIn?: InputMaybe<Array<HistoryContestTypeType>>;
};

export type HistoryCreateInput = {
  contestType?: InputMaybe<HistoryContestTypeType>;
  display?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type HistoryManyRelationFilter = {
  every?: InputMaybe<HistoryWhereInput>;
  none?: InputMaybe<HistoryWhereInput>;
  some?: InputMaybe<HistoryWhereInput>;
};

export type HistoryOrderByInput = {
  contestType?: InputMaybe<OrderDirection>;
  display?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  year?: InputMaybe<OrderDirection>;
};

export type HistoryRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<HistoryWhereUniqueInput>>;
  create?: InputMaybe<Array<HistoryCreateInput>>;
};

export type HistoryRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<HistoryWhereUniqueInput>>;
  create?: InputMaybe<Array<HistoryCreateInput>>;
  disconnect?: InputMaybe<Array<HistoryWhereUniqueInput>>;
  set?: InputMaybe<Array<HistoryWhereUniqueInput>>;
};

export type HistoryUpdateArgs = {
  data: HistoryUpdateInput;
  where: HistoryWhereUniqueInput;
};

export type HistoryUpdateInput = {
  contestType?: InputMaybe<HistoryContestTypeType>;
  display?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type HistoryWhereInput = {
  AND?: InputMaybe<Array<HistoryWhereInput>>;
  NOT?: InputMaybe<Array<HistoryWhereInput>>;
  OR?: InputMaybe<Array<HistoryWhereInput>>;
  contestType?: InputMaybe<HistoryContestTypeTypeNullableFilter>;
  display?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  user?: InputMaybe<UserWhereInput>;
  year?: InputMaybe<IntFilter>;
};

export type HistoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldMeta?: Maybe<Scalars['JSON']['output']>;
  isFilterable: Scalars['Boolean']['output'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars['Boolean']['output'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String']['output'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String']['output'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int']['output'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean']['output'];
  hideDelete: Scalars['Boolean']['output'];
  initialColumns: Array<Scalars['String']['output']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean']['output'];
  isSingleton: Scalars['Boolean']['output'];
  itemQueryName: Scalars['String']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  labelField: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  pageSize: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  plural: Scalars['String']['output'];
  singular: Scalars['String']['output'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String']['output'];
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
  benchmark?: Maybe<Scalars['Float']['output']>;
  choices?: Maybe<Array<Choice>>;
  choicesCount?: Maybe<Scalars['Int']['output']>;
  closingTime?: Maybe<Scalars['DateTime']['output']>;
  contest?: Maybe<Contest>;
  id: Scalars['ID']['output'];
  image?: Maybe<CloudImage>;
  labelName?: Maybe<Scalars['String']['output']>;
  standings?: Maybe<Array<Standing>>;
  standingsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type LineChoicesArgs = {
  cursor?: InputMaybe<ChoiceWhereUniqueInput>;
  orderBy?: Array<ChoiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ChoiceWhereInput;
};


export type LineChoicesCountArgs = {
  where?: ChoiceWhereInput;
};


export type LineStandingsArgs = {
  cursor?: InputMaybe<StandingWhereUniqueInput>;
  orderBy?: Array<StandingOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: StandingWhereInput;
};


export type LineStandingsCountArgs = {
  where?: StandingWhereInput;
};

export type LineCreateInput = {
  benchmark?: InputMaybe<Scalars['Float']['input']>;
  choices?: InputMaybe<ChoiceRelateToManyForCreateInput>;
  closingTime?: InputMaybe<Scalars['DateTime']['input']>;
  contest?: InputMaybe<ContestRelateToOneForCreateInput>;
  image?: InputMaybe<CloudImageRelateToOneForCreateInput>;
  standings?: InputMaybe<StandingRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LineManyRelationFilter = {
  every?: InputMaybe<LineWhereInput>;
  none?: InputMaybe<LineWhereInput>;
  some?: InputMaybe<LineWhereInput>;
};

export type LineOrderByInput = {
  benchmark?: InputMaybe<OrderDirection>;
  closingTime?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
};

export type LineRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<LineWhereUniqueInput>>;
  create?: InputMaybe<Array<LineCreateInput>>;
};

export type LineRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<LineWhereUniqueInput>>;
  create?: InputMaybe<Array<LineCreateInput>>;
  disconnect?: InputMaybe<Array<LineWhereUniqueInput>>;
  set?: InputMaybe<Array<LineWhereUniqueInput>>;
};

export type LineRelateToOneForCreateInput = {
  connect?: InputMaybe<LineWhereUniqueInput>;
  create?: InputMaybe<LineCreateInput>;
};

export type LineRelateToOneForUpdateInput = {
  connect?: InputMaybe<LineWhereUniqueInput>;
  create?: InputMaybe<LineCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LineUpdateArgs = {
  data: LineUpdateInput;
  where: LineWhereUniqueInput;
};

export type LineUpdateInput = {
  benchmark?: InputMaybe<Scalars['Float']['input']>;
  choices?: InputMaybe<ChoiceRelateToManyForUpdateInput>;
  closingTime?: InputMaybe<Scalars['DateTime']['input']>;
  contest?: InputMaybe<ContestRelateToOneForUpdateInput>;
  image?: InputMaybe<CloudImageRelateToOneForUpdateInput>;
  standings?: InputMaybe<StandingRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LineWhereInput = {
  AND?: InputMaybe<Array<LineWhereInput>>;
  NOT?: InputMaybe<Array<LineWhereInput>>;
  OR?: InputMaybe<Array<LineWhereInput>>;
  benchmark?: InputMaybe<FloatFilter>;
  choices?: InputMaybe<ChoiceManyRelationFilter>;
  closingTime?: InputMaybe<DateTimeFilter>;
  contest?: InputMaybe<ContestWhereInput>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<CloudImageWhereInput>;
  standings?: InputMaybe<StandingManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type LineWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createBet?: Maybe<Bet>;
  createBets?: Maybe<Array<Maybe<Bet>>>;
  createChat?: Maybe<Chat>;
  createChats?: Maybe<Array<Maybe<Chat>>>;
  createChoice?: Maybe<Choice>;
  createChoices?: Maybe<Array<Maybe<Choice>>>;
  createCloudImage?: Maybe<CloudImage>;
  createCloudImages?: Maybe<Array<Maybe<CloudImage>>>;
  createContest?: Maybe<Contest>;
  createContests?: Maybe<Array<Maybe<Contest>>>;
  createHistories?: Maybe<Array<Maybe<History>>>;
  createHistory?: Maybe<History>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createLine?: Maybe<Line>;
  createLines?: Maybe<Array<Maybe<Line>>>;
  createRegistration?: Maybe<Registration>;
  createRegistrations?: Maybe<Array<Maybe<Registration>>>;
  createRuleSet?: Maybe<RuleSet>;
  createRuleSets?: Maybe<Array<Maybe<RuleSet>>>;
  createStanding?: Maybe<Standing>;
  createStandings?: Maybe<Array<Maybe<Standing>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteBet?: Maybe<Bet>;
  deleteBets?: Maybe<Array<Maybe<Bet>>>;
  deleteChat?: Maybe<Chat>;
  deleteChats?: Maybe<Array<Maybe<Chat>>>;
  deleteChoice?: Maybe<Choice>;
  deleteChoices?: Maybe<Array<Maybe<Choice>>>;
  deleteCloudImage?: Maybe<CloudImage>;
  deleteCloudImages?: Maybe<Array<Maybe<CloudImage>>>;
  deleteContest?: Maybe<Contest>;
  deleteContests?: Maybe<Array<Maybe<Contest>>>;
  deleteHistories?: Maybe<Array<Maybe<History>>>;
  deleteHistory?: Maybe<History>;
  deleteLine?: Maybe<Line>;
  deleteLines?: Maybe<Array<Maybe<Line>>>;
  deleteRegistration?: Maybe<Registration>;
  deleteRegistrations?: Maybe<Array<Maybe<Registration>>>;
  deleteRuleSet?: Maybe<RuleSet>;
  deleteRuleSets?: Maybe<Array<Maybe<RuleSet>>>;
  deleteStanding?: Maybe<Standing>;
  deleteStandings?: Maybe<Array<Maybe<Standing>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean']['output'];
  redeemUserPasswordResetToken?: Maybe<RedeemUserPasswordResetTokenResult>;
  sendUserPasswordResetLink: Scalars['Boolean']['output'];
  updateBet?: Maybe<Bet>;
  updateBets?: Maybe<Array<Maybe<Bet>>>;
  updateChat?: Maybe<Chat>;
  updateChats?: Maybe<Array<Maybe<Chat>>>;
  updateChoice?: Maybe<Choice>;
  updateChoices?: Maybe<Array<Maybe<Choice>>>;
  updateCloudImage?: Maybe<CloudImage>;
  updateCloudImages?: Maybe<Array<Maybe<CloudImage>>>;
  updateContest?: Maybe<Contest>;
  updateContests?: Maybe<Array<Maybe<Contest>>>;
  updateHistories?: Maybe<Array<Maybe<History>>>;
  updateHistory?: Maybe<History>;
  updateLine?: Maybe<Line>;
  updateLines?: Maybe<Array<Maybe<Line>>>;
  updateRegistration?: Maybe<Registration>;
  updateRegistrations?: Maybe<Array<Maybe<Registration>>>;
  updateRuleSet?: Maybe<RuleSet>;
  updateRuleSets?: Maybe<Array<Maybe<RuleSet>>>;
  updateStanding?: Maybe<Standing>;
  updateStandings?: Maybe<Array<Maybe<Standing>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateBetArgs = {
  data: BetCreateInput;
};


export type MutationCreateBetsArgs = {
  data: Array<BetCreateInput>;
};


export type MutationCreateChatArgs = {
  data: ChatCreateInput;
};


export type MutationCreateChatsArgs = {
  data: Array<ChatCreateInput>;
};


export type MutationCreateChoiceArgs = {
  data: ChoiceCreateInput;
};


export type MutationCreateChoicesArgs = {
  data: Array<ChoiceCreateInput>;
};


export type MutationCreateCloudImageArgs = {
  data: CloudImageCreateInput;
};


export type MutationCreateCloudImagesArgs = {
  data: Array<CloudImageCreateInput>;
};


export type MutationCreateContestArgs = {
  data: ContestCreateInput;
};


export type MutationCreateContestsArgs = {
  data: Array<ContestCreateInput>;
};


export type MutationCreateHistoriesArgs = {
  data: Array<HistoryCreateInput>;
};


export type MutationCreateHistoryArgs = {
  data: HistoryCreateInput;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateLineArgs = {
  data: LineCreateInput;
};


export type MutationCreateLinesArgs = {
  data: Array<LineCreateInput>;
};


export type MutationCreateRegistrationArgs = {
  data: RegistrationCreateInput;
};


export type MutationCreateRegistrationsArgs = {
  data: Array<RegistrationCreateInput>;
};


export type MutationCreateRuleSetArgs = {
  data: RuleSetCreateInput;
};


export type MutationCreateRuleSetsArgs = {
  data: Array<RuleSetCreateInput>;
};


export type MutationCreateStandingArgs = {
  data: StandingCreateInput;
};


export type MutationCreateStandingsArgs = {
  data: Array<StandingCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteBetArgs = {
  where: BetWhereUniqueInput;
};


export type MutationDeleteBetsArgs = {
  where: Array<BetWhereUniqueInput>;
};


export type MutationDeleteChatArgs = {
  where: ChatWhereUniqueInput;
};


export type MutationDeleteChatsArgs = {
  where: Array<ChatWhereUniqueInput>;
};


export type MutationDeleteChoiceArgs = {
  where: ChoiceWhereUniqueInput;
};


export type MutationDeleteChoicesArgs = {
  where: Array<ChoiceWhereUniqueInput>;
};


export type MutationDeleteCloudImageArgs = {
  where: CloudImageWhereUniqueInput;
};


export type MutationDeleteCloudImagesArgs = {
  where: Array<CloudImageWhereUniqueInput>;
};


export type MutationDeleteContestArgs = {
  where: ContestWhereUniqueInput;
};


export type MutationDeleteContestsArgs = {
  where: Array<ContestWhereUniqueInput>;
};


export type MutationDeleteHistoriesArgs = {
  where: Array<HistoryWhereUniqueInput>;
};


export type MutationDeleteHistoryArgs = {
  where: HistoryWhereUniqueInput;
};


export type MutationDeleteLineArgs = {
  where: LineWhereUniqueInput;
};


export type MutationDeleteLinesArgs = {
  where: Array<LineWhereUniqueInput>;
};


export type MutationDeleteRegistrationArgs = {
  where: RegistrationWhereUniqueInput;
};


export type MutationDeleteRegistrationsArgs = {
  where: Array<RegistrationWhereUniqueInput>;
};


export type MutationDeleteRuleSetArgs = {
  where: RuleSetWhereUniqueInput;
};


export type MutationDeleteRuleSetsArgs = {
  where: Array<RuleSetWhereUniqueInput>;
};


export type MutationDeleteStandingArgs = {
  where: StandingWhereUniqueInput;
};


export type MutationDeleteStandingsArgs = {
  where: Array<StandingWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationRedeemUserPasswordResetTokenArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationSendUserPasswordResetLinkArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateBetArgs = {
  data: BetUpdateInput;
  where: BetWhereUniqueInput;
};


export type MutationUpdateBetsArgs = {
  data: Array<BetUpdateArgs>;
};


export type MutationUpdateChatArgs = {
  data: ChatUpdateInput;
  where: ChatWhereUniqueInput;
};


export type MutationUpdateChatsArgs = {
  data: Array<ChatUpdateArgs>;
};


export type MutationUpdateChoiceArgs = {
  data: ChoiceUpdateInput;
  where: ChoiceWhereUniqueInput;
};


export type MutationUpdateChoicesArgs = {
  data: Array<ChoiceUpdateArgs>;
};


export type MutationUpdateCloudImageArgs = {
  data: CloudImageUpdateInput;
  where: CloudImageWhereUniqueInput;
};


export type MutationUpdateCloudImagesArgs = {
  data: Array<CloudImageUpdateArgs>;
};


export type MutationUpdateContestArgs = {
  data: ContestUpdateInput;
  where: ContestWhereUniqueInput;
};


export type MutationUpdateContestsArgs = {
  data: Array<ContestUpdateArgs>;
};


export type MutationUpdateHistoriesArgs = {
  data: Array<HistoryUpdateArgs>;
};


export type MutationUpdateHistoryArgs = {
  data: HistoryUpdateInput;
  where: HistoryWhereUniqueInput;
};


export type MutationUpdateLineArgs = {
  data: LineUpdateInput;
  where: LineWhereUniqueInput;
};


export type MutationUpdateLinesArgs = {
  data: Array<LineUpdateArgs>;
};


export type MutationUpdateRegistrationArgs = {
  data: RegistrationUpdateInput;
  where: RegistrationWhereUniqueInput;
};


export type MutationUpdateRegistrationsArgs = {
  data: Array<RegistrationUpdateArgs>;
};


export type MutationUpdateRuleSetArgs = {
  data: RuleSetUpdateInput;
  where: RuleSetWhereUniqueInput;
};


export type MutationUpdateRuleSetsArgs = {
  data: Array<RuleSetUpdateArgs>;
};


export type MutationUpdateStandingArgs = {
  data: StandingUpdateInput;
  where: StandingWhereUniqueInput;
};


export type MutationUpdateStandingsArgs = {
  data: Array<StandingUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordFilter = {
  isSet: Scalars['Boolean']['input'];
};

export enum PasswordResetRedemptionErrorCode {
  Failure = 'FAILURE',
  TokenExpired = 'TOKEN_EXPIRED',
  TokenRedeemed = 'TOKEN_REDEEMED'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean']['output'];
};

export type PointCounts = {
  __typename?: 'PointCounts';
  likely?: Maybe<Scalars['Int']['output']>;
  locked?: Maybe<Scalars['Int']['output']>;
  possible?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  bet?: Maybe<Bet>;
  bets?: Maybe<Array<Bet>>;
  betsCount?: Maybe<Scalars['Int']['output']>;
  chat?: Maybe<Chat>;
  chats?: Maybe<Array<Chat>>;
  chatsCount?: Maybe<Scalars['Int']['output']>;
  choice?: Maybe<Choice>;
  choices?: Maybe<Array<Choice>>;
  choicesCount?: Maybe<Scalars['Int']['output']>;
  cloudImage?: Maybe<CloudImage>;
  cloudImages?: Maybe<Array<CloudImage>>;
  cloudImagesCount?: Maybe<Scalars['Int']['output']>;
  contest?: Maybe<Contest>;
  contests?: Maybe<Array<Contest>>;
  contestsCount?: Maybe<Scalars['Int']['output']>;
  histories?: Maybe<Array<History>>;
  historiesCount?: Maybe<Scalars['Int']['output']>;
  history?: Maybe<History>;
  keystone: KeystoneMeta;
  line?: Maybe<Line>;
  lines?: Maybe<Array<Line>>;
  linesCount?: Maybe<Scalars['Int']['output']>;
  registration?: Maybe<Registration>;
  registrations?: Maybe<Array<Registration>>;
  registrationsCount?: Maybe<Scalars['Int']['output']>;
  ruleSet?: Maybe<RuleSet>;
  ruleSets?: Maybe<Array<RuleSet>>;
  ruleSetsCount?: Maybe<Scalars['Int']['output']>;
  standing?: Maybe<Standing>;
  standings?: Maybe<Array<Standing>>;
  standingsCount?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
  validateUserPasswordResetToken?: Maybe<ValidateUserPasswordResetTokenResult>;
};


export type QueryBetArgs = {
  where: BetWhereUniqueInput;
};


export type QueryBetsArgs = {
  cursor?: InputMaybe<BetWhereUniqueInput>;
  orderBy?: Array<BetOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BetWhereInput;
};


export type QueryBetsCountArgs = {
  where?: BetWhereInput;
};


export type QueryChatArgs = {
  where: ChatWhereUniqueInput;
};


export type QueryChatsArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  orderBy?: Array<ChatOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ChatWhereInput;
};


export type QueryChatsCountArgs = {
  where?: ChatWhereInput;
};


export type QueryChoiceArgs = {
  where: ChoiceWhereUniqueInput;
};


export type QueryChoicesArgs = {
  cursor?: InputMaybe<ChoiceWhereUniqueInput>;
  orderBy?: Array<ChoiceOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ChoiceWhereInput;
};


export type QueryChoicesCountArgs = {
  where?: ChoiceWhereInput;
};


export type QueryCloudImageArgs = {
  where: CloudImageWhereUniqueInput;
};


export type QueryCloudImagesArgs = {
  cursor?: InputMaybe<CloudImageWhereUniqueInput>;
  orderBy?: Array<CloudImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: CloudImageWhereInput;
};


export type QueryCloudImagesCountArgs = {
  where?: CloudImageWhereInput;
};


export type QueryContestArgs = {
  where: ContestWhereUniqueInput;
};


export type QueryContestsArgs = {
  cursor?: InputMaybe<ContestWhereUniqueInput>;
  orderBy?: Array<ContestOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ContestWhereInput;
};


export type QueryContestsCountArgs = {
  where?: ContestWhereInput;
};


export type QueryHistoriesArgs = {
  cursor?: InputMaybe<HistoryWhereUniqueInput>;
  orderBy?: Array<HistoryOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: HistoryWhereInput;
};


export type QueryHistoriesCountArgs = {
  where?: HistoryWhereInput;
};


export type QueryHistoryArgs = {
  where: HistoryWhereUniqueInput;
};


export type QueryLineArgs = {
  where: LineWhereUniqueInput;
};


export type QueryLinesArgs = {
  cursor?: InputMaybe<LineWhereUniqueInput>;
  orderBy?: Array<LineOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: LineWhereInput;
};


export type QueryLinesCountArgs = {
  where?: LineWhereInput;
};


export type QueryRegistrationArgs = {
  where: RegistrationWhereUniqueInput;
};


export type QueryRegistrationsArgs = {
  cursor?: InputMaybe<RegistrationWhereUniqueInput>;
  orderBy?: Array<RegistrationOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: RegistrationWhereInput;
};


export type QueryRegistrationsCountArgs = {
  where?: RegistrationWhereInput;
};


export type QueryRuleSetArgs = {
  where: RuleSetWhereUniqueInput;
};


export type QueryRuleSetsArgs = {
  cursor?: InputMaybe<RuleSetWhereUniqueInput>;
  orderBy?: Array<RuleSetOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: RuleSetWhereInput;
};


export type QueryRuleSetsCountArgs = {
  where?: RuleSetWhereInput;
};


export type QueryStandingArgs = {
  where: StandingWhereUniqueInput;
};


export type QueryStandingsArgs = {
  cursor?: InputMaybe<StandingWhereUniqueInput>;
  orderBy?: Array<StandingOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: StandingWhereInput;
};


export type QueryStandingsCountArgs = {
  where?: StandingWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};


export type QueryValidateUserPasswordResetTokenArgs = {
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RedeemUserPasswordResetTokenResult = {
  __typename?: 'RedeemUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String']['output'];
};

export type Registration = {
  __typename?: 'Registration';
  contest?: Maybe<Contest>;
  counts?: Maybe<PointCounts>;
  hasPaid?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  isPremium?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<User>;
};

export type RegistrationCreateInput = {
  contest?: InputMaybe<ContestRelateToOneForCreateInput>;
  hasPaid?: InputMaybe<Scalars['Boolean']['input']>;
  isPremium?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
};

export type RegistrationManyRelationFilter = {
  every?: InputMaybe<RegistrationWhereInput>;
  none?: InputMaybe<RegistrationWhereInput>;
  some?: InputMaybe<RegistrationWhereInput>;
};

export type RegistrationOrderByInput = {
  hasPaid?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isPremium?: InputMaybe<OrderDirection>;
};

export type RegistrationRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<RegistrationWhereUniqueInput>>;
  create?: InputMaybe<Array<RegistrationCreateInput>>;
};

export type RegistrationRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<RegistrationWhereUniqueInput>>;
  create?: InputMaybe<Array<RegistrationCreateInput>>;
  disconnect?: InputMaybe<Array<RegistrationWhereUniqueInput>>;
  set?: InputMaybe<Array<RegistrationWhereUniqueInput>>;
};

export type RegistrationUpdateArgs = {
  data: RegistrationUpdateInput;
  where: RegistrationWhereUniqueInput;
};

export type RegistrationUpdateInput = {
  contest?: InputMaybe<ContestRelateToOneForUpdateInput>;
  hasPaid?: InputMaybe<Scalars['Boolean']['input']>;
  isPremium?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
};

export type RegistrationWhereInput = {
  AND?: InputMaybe<Array<RegistrationWhereInput>>;
  NOT?: InputMaybe<Array<RegistrationWhereInput>>;
  OR?: InputMaybe<Array<RegistrationWhereInput>>;
  contest?: InputMaybe<ContestWhereInput>;
  hasPaid?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<IdFilter>;
  isPremium?: InputMaybe<BooleanFilter>;
  user?: InputMaybe<UserWhereInput>;
};

export type RegistrationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type RuleSet = {
  __typename?: 'RuleSet';
  contest?: Maybe<Contest>;
  id: Scalars['ID']['output'];
  maxBets?: Maybe<Scalars['Int']['output']>;
  maxSuperBets?: Maybe<Scalars['Int']['output']>;
  superBetPointCount?: Maybe<Scalars['Int']['output']>;
};

export type RuleSetCreateInput = {
  contest?: InputMaybe<ContestRelateToOneForCreateInput>;
  maxBets?: InputMaybe<Scalars['Int']['input']>;
  maxSuperBets?: InputMaybe<Scalars['Int']['input']>;
  superBetPointCount?: InputMaybe<Scalars['Int']['input']>;
};

export type RuleSetOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  maxBets?: InputMaybe<OrderDirection>;
  maxSuperBets?: InputMaybe<OrderDirection>;
  superBetPointCount?: InputMaybe<OrderDirection>;
};

export type RuleSetRelateToOneForCreateInput = {
  connect?: InputMaybe<RuleSetWhereUniqueInput>;
  create?: InputMaybe<RuleSetCreateInput>;
};

export type RuleSetRelateToOneForUpdateInput = {
  connect?: InputMaybe<RuleSetWhereUniqueInput>;
  create?: InputMaybe<RuleSetCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RuleSetUpdateArgs = {
  data: RuleSetUpdateInput;
  where: RuleSetWhereUniqueInput;
};

export type RuleSetUpdateInput = {
  contest?: InputMaybe<ContestRelateToOneForUpdateInput>;
  maxBets?: InputMaybe<Scalars['Int']['input']>;
  maxSuperBets?: InputMaybe<Scalars['Int']['input']>;
  superBetPointCount?: InputMaybe<Scalars['Int']['input']>;
};

export type RuleSetWhereInput = {
  AND?: InputMaybe<Array<RuleSetWhereInput>>;
  NOT?: InputMaybe<Array<RuleSetWhereInput>>;
  OR?: InputMaybe<Array<RuleSetWhereInput>>;
  contest?: InputMaybe<ContestWhereInput>;
  id?: InputMaybe<IdFilter>;
  maxBets?: InputMaybe<IntNullableFilter>;
  maxSuperBets?: InputMaybe<IntNullableFilter>;
  superBetPointCount?: InputMaybe<IntNullableFilter>;
};

export type RuleSetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Standing = {
  __typename?: 'Standing';
  gamesPlayed?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  line?: Maybe<Line>;
  totalGames?: Maybe<Scalars['Int']['output']>;
  wins?: Maybe<Scalars['Int']['output']>;
};

export type StandingCreateInput = {
  gamesPlayed?: InputMaybe<Scalars['Int']['input']>;
  line?: InputMaybe<LineRelateToOneForCreateInput>;
  totalGames?: InputMaybe<Scalars['Int']['input']>;
  wins?: InputMaybe<Scalars['Int']['input']>;
};

export type StandingManyRelationFilter = {
  every?: InputMaybe<StandingWhereInput>;
  none?: InputMaybe<StandingWhereInput>;
  some?: InputMaybe<StandingWhereInput>;
};

export type StandingOrderByInput = {
  gamesPlayed?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  totalGames?: InputMaybe<OrderDirection>;
  wins?: InputMaybe<OrderDirection>;
};

export type StandingRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<StandingWhereUniqueInput>>;
  create?: InputMaybe<Array<StandingCreateInput>>;
};

export type StandingRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<StandingWhereUniqueInput>>;
  create?: InputMaybe<Array<StandingCreateInput>>;
  disconnect?: InputMaybe<Array<StandingWhereUniqueInput>>;
  set?: InputMaybe<Array<StandingWhereUniqueInput>>;
};

export type StandingUpdateArgs = {
  data: StandingUpdateInput;
  where: StandingWhereUniqueInput;
};

export type StandingUpdateInput = {
  gamesPlayed?: InputMaybe<Scalars['Int']['input']>;
  line?: InputMaybe<LineRelateToOneForUpdateInput>;
  totalGames?: InputMaybe<Scalars['Int']['input']>;
  wins?: InputMaybe<Scalars['Int']['input']>;
};

export type StandingWhereInput = {
  AND?: InputMaybe<Array<StandingWhereInput>>;
  NOT?: InputMaybe<Array<StandingWhereInput>>;
  OR?: InputMaybe<Array<StandingWhereInput>>;
  gamesPlayed?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  line?: InputMaybe<LineWhereInput>;
  totalGames?: InputMaybe<IntFilter>;
  wins?: InputMaybe<IntFilter>;
};

export type StandingWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  avatarImage?: Maybe<CloudImage>;
  bets?: Maybe<Array<Bet>>;
  betsCount?: Maybe<Scalars['Int']['output']>;
  chats?: Maybe<Array<Chat>>;
  chatsCount?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  histories?: Maybe<Array<History>>;
  historiesCount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<PasswordState>;
  passwordResetIssuedAt?: Maybe<Scalars['DateTime']['output']>;
  passwordResetRedeemedAt?: Maybe<Scalars['DateTime']['output']>;
  passwordResetToken?: Maybe<PasswordState>;
  registrations?: Maybe<Array<Registration>>;
  registrationsCount?: Maybe<Scalars['Int']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};


export type UserBetsArgs = {
  cursor?: InputMaybe<BetWhereUniqueInput>;
  orderBy?: Array<BetOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: BetWhereInput;
};


export type UserBetsCountArgs = {
  where?: BetWhereInput;
};


export type UserChatsArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  orderBy?: Array<ChatOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ChatWhereInput;
};


export type UserChatsCountArgs = {
  where?: ChatWhereInput;
};


export type UserHistoriesArgs = {
  cursor?: InputMaybe<HistoryWhereUniqueInput>;
  orderBy?: Array<HistoryOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: HistoryWhereInput;
};


export type UserHistoriesCountArgs = {
  where?: HistoryWhereInput;
};


export type UserRegistrationsArgs = {
  cursor?: InputMaybe<RegistrationWhereUniqueInput>;
  orderBy?: Array<RegistrationOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: RegistrationWhereInput;
};


export type UserRegistrationsCountArgs = {
  where?: RegistrationWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String']['output'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type UserCreateInput = {
  avatarImage?: InputMaybe<CloudImageRelateToOneForCreateInput>;
  bets?: InputMaybe<BetRelateToManyForCreateInput>;
  chats?: InputMaybe<ChatRelateToManyForCreateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  histories?: InputMaybe<HistoryRelateToManyForCreateInput>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetToken?: InputMaybe<Scalars['String']['input']>;
  registrations?: InputMaybe<RegistrationRelateToManyForCreateInput>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type UserOrderByInput = {
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isAdmin?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  passwordResetIssuedAt?: InputMaybe<OrderDirection>;
  passwordResetRedeemedAt?: InputMaybe<OrderDirection>;
  userName?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  avatarImage?: InputMaybe<CloudImageRelateToOneForUpdateInput>;
  bets?: InputMaybe<BetRelateToManyForUpdateInput>;
  chats?: InputMaybe<ChatRelateToManyForUpdateInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  histories?: InputMaybe<HistoryRelateToManyForUpdateInput>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  passwordResetIssuedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetRedeemedAt?: InputMaybe<Scalars['DateTime']['input']>;
  passwordResetToken?: InputMaybe<Scalars['String']['input']>;
  registrations?: InputMaybe<RegistrationRelateToManyForUpdateInput>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  avatarImage?: InputMaybe<CloudImageWhereInput>;
  bets?: InputMaybe<BetManyRelationFilter>;
  chats?: InputMaybe<ChatManyRelationFilter>;
  email?: InputMaybe<StringFilter>;
  histories?: InputMaybe<HistoryManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  isAdmin?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<PasswordFilter>;
  passwordResetIssuedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetRedeemedAt?: InputMaybe<DateTimeNullableFilter>;
  passwordResetToken?: InputMaybe<PasswordFilter>;
  registrations?: InputMaybe<RegistrationManyRelationFilter>;
  userName?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type ValidateUserPasswordResetTokenResult = {
  __typename?: 'ValidateUserPasswordResetTokenResult';
  code: PasswordResetRedemptionErrorCode;
  message: Scalars['String']['output'];
};

export type CreateNbaContestMutationVariables = Exact<{
  contestName?: InputMaybe<Scalars['String']['input']>;
  overSelection: ChoiceCreateInput;
  underSelection: ChoiceCreateInput;
  closingTime?: InputMaybe<Scalars['DateTime']['input']>;
  atlantaHawksBenchmark?: InputMaybe<Scalars['Float']['input']>;
  bostonCelticsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  brooklynNetsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  charlotteHornetsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  chicagoBullsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  clevelandCavaliersBenchmark?: InputMaybe<Scalars['Float']['input']>;
  dallasMavericksBenchmark?: InputMaybe<Scalars['Float']['input']>;
  denverNuggetsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  detroitPistonsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  goldenStateWarriorsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  houstonRocketsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  indianaPacersBenchmark?: InputMaybe<Scalars['Float']['input']>;
  lAClippersBenchmark?: InputMaybe<Scalars['Float']['input']>;
  losAngelesLakersBenchmark?: InputMaybe<Scalars['Float']['input']>;
  memphisGrizzliesBenchmark?: InputMaybe<Scalars['Float']['input']>;
  miamiHeatBenchmark?: InputMaybe<Scalars['Float']['input']>;
  milwaukeeBucksBenchmark?: InputMaybe<Scalars['Float']['input']>;
  minnesotaTimberwolvesBenchmark?: InputMaybe<Scalars['Float']['input']>;
  newOrleansPelicansBenchmark?: InputMaybe<Scalars['Float']['input']>;
  newYorkKnicksBenchmark?: InputMaybe<Scalars['Float']['input']>;
  oklahomaCityThunderBenchmark?: InputMaybe<Scalars['Float']['input']>;
  orlandoMagicBenchmark?: InputMaybe<Scalars['Float']['input']>;
  philadelphia76ersBenchmark?: InputMaybe<Scalars['Float']['input']>;
  phoenixSunsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  portlandTrailBlazersBenchmark?: InputMaybe<Scalars['Float']['input']>;
  sacramentoKingsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  sanAntonioSpursBenchmark?: InputMaybe<Scalars['Float']['input']>;
  torontoRaptorsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  utahJazzBenchmark?: InputMaybe<Scalars['Float']['input']>;
  washingtonWizardsBenchmark?: InputMaybe<Scalars['Float']['input']>;
}>;


export type CreateNbaContestMutation = { __typename?: 'Mutation', createContest?: { __typename?: 'Contest', id: string } | null };

export type CreateNflContestMutationVariables = Exact<{
  contestName?: InputMaybe<Scalars['String']['input']>;
  overSelection: ChoiceCreateInput;
  underSelection: ChoiceCreateInput;
  closingTime?: InputMaybe<Scalars['DateTime']['input']>;
  arizonaCardinalsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  atlantaFalconsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  baltimoreRavensBenchmark?: InputMaybe<Scalars['Float']['input']>;
  buffaloBillsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  carolinaPanthersBenchmark?: InputMaybe<Scalars['Float']['input']>;
  chicagoBearsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  cincinnatiBengalsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  clevelandBrownsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  dallasCowboysBenchmark?: InputMaybe<Scalars['Float']['input']>;
  denverBroncosBenchmark?: InputMaybe<Scalars['Float']['input']>;
  detroitLionsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  greenBayPackersBenchmark?: InputMaybe<Scalars['Float']['input']>;
  houstonTexansBenchmark?: InputMaybe<Scalars['Float']['input']>;
  indianapolisColtsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  jacksonvilleJaguarsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  kansasCityChiefsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  lasVegasRaidersBenchmark?: InputMaybe<Scalars['Float']['input']>;
  losAngelesChargersBenchmark?: InputMaybe<Scalars['Float']['input']>;
  losAngelesRamsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  miamiDolphinsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  minnesotaVikingsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  newEnglandPatriotsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  newOrleansSaintsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  newYorkGiantsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  newYorkJetsBenchmark?: InputMaybe<Scalars['Float']['input']>;
  philadelphiaEaglesBenchmark?: InputMaybe<Scalars['Float']['input']>;
  pittsburghSteelersBenchmark?: InputMaybe<Scalars['Float']['input']>;
  sanFrancisco49ersBenchmark?: InputMaybe<Scalars['Float']['input']>;
  seattleSeahawksBenchmark?: InputMaybe<Scalars['Float']['input']>;
  tampaBayBuccaneersBenchmark?: InputMaybe<Scalars['Float']['input']>;
  tennesseeTitansBenchmark?: InputMaybe<Scalars['Float']['input']>;
  washingtonCommandersBenchmark?: InputMaybe<Scalars['Float']['input']>;
}>;


export type CreateNflContestMutation = { __typename?: 'Mutation', createContest?: { __typename?: 'Contest', id: string } | null };

export type CheckIfEmailAvailableQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type CheckIfEmailAvailableQuery = { __typename?: 'Query', usersCount?: number | null };

export type CheckIfUsernameAvailableQueryVariables = Exact<{
  userName: Scalars['String']['input'];
}>;


export type CheckIfUsernameAvailableQuery = { __typename?: 'Query', usersCount?: number | null };

export type RequestResetMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type RequestResetMutation = { __typename?: 'Mutation', sendUserPasswordResetLink: boolean };

export type ResetMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
}>;


export type ResetMutation = { __typename?: 'Mutation', redeemUserPasswordResetToken?: { __typename?: 'RedeemUserPasswordResetTokenResult', code: PasswordResetRedemptionErrorCode, message: string } | null };

export type SignInMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignInMutation = { __typename?: 'Mutation', authenticateUserWithPassword?: { __typename?: 'UserAuthenticationWithPasswordFailure', message: string } | { __typename?: 'UserAuthenticationWithPasswordSuccess', item: { __typename?: 'User', id: string, email?: string | null, name?: string | null, userName?: string | null } } | null };

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = { __typename?: 'Mutation', endSession: boolean };

export type SignUpMutationVariables = Exact<{
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  userName: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string, email?: string | null, name?: string | null, userName?: string | null } | null };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  userName: Scalars['String']['input'];
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string, email?: string | null, userName?: string | null, name?: string | null } | null };

export type UpdatePasswordMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  password: Scalars['String']['input'];
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string, email?: string | null, userName?: string | null, name?: string | null } | null };

export type UpdateUserAvatarMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  userName: Scalars['String']['input'];
  image?: InputMaybe<Scalars['Upload']['input']>;
}>;


export type UpdateUserAvatarMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string, email?: string | null, userName?: string | null, name?: string | null, avatarImage?: { __typename?: 'CloudImage', altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null } | null };

export type GetContestChatQueryVariables = Exact<{
  contestId: Scalars['ID']['input'];
}>;


export type GetContestChatQuery = { __typename?: 'Query', chats?: Array<{ __typename?: 'Chat', id: string, content?: string | null, user?: { __typename?: 'User', id: string, userName?: string | null, name?: string | null, avatarImage?: { __typename?: 'CloudImage', altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null } | null }> | null };

export type CreateChatMutationVariables = Exact<{
  content: Scalars['String']['input'];
  contestId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
}>;


export type CreateChatMutation = { __typename?: 'Mutation', createChat?: { __typename?: 'Chat', id: string, content?: string | null, contest?: { __typename?: 'Contest', id: string, name?: string | null } | null, user?: { __typename?: 'User', id: string, name?: string | null } | null } | null };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, email?: string | null, name?: string | null, userName?: string | null, isAdmin?: boolean | null, avatarImage?: { __typename?: 'CloudImage', id: string, altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null } | null };

export type AllContestsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllContestsQuery = { __typename?: 'Query', contests?: Array<{ __typename?: 'Contest', id: string, name?: string | null, description?: string | null, status?: ContestStatusType | null, entryFee?: number | null, contestType?: ContestContestTypeType | null, lines?: Array<{ __typename?: 'Line', id: string, choices?: Array<{ __typename?: 'Choice', id: string }> | null }> | null, registrations?: Array<{ __typename?: 'Registration', id: string, user?: { __typename?: 'User', id: string } | null }> | null, image?: { __typename?: 'CloudImage', altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null, winner?: { __typename?: 'User', id: string, userName?: string | null, avatarImage?: { __typename?: 'CloudImage', id: string, altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null } | null }> | null };

export type ContestByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ContestByIdQuery = { __typename?: 'Query', contest?: { __typename?: 'Contest', id: string, name?: string | null, description?: string | null, status?: ContestStatusType | null, entryFee?: number | null, contestType?: ContestContestTypeType | null, ruleSet?: { __typename?: 'RuleSet', maxBets?: number | null, maxSuperBets?: number | null, superBetPointCount?: number | null } | null, lines?: Array<{ __typename?: 'Line', id: string, benchmark?: number | null, closingTime?: any | null, title?: string | null, image?: { __typename?: 'CloudImage', id: string, altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null, choices?: Array<{ __typename?: 'Choice', id: string, selection?: ChoiceSelectionType | null, isWin?: boolean | null, image?: { __typename?: 'CloudImage', id: string, altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null, secondaryImage?: { __typename?: 'CloudImage', id: string, altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null }> | null }> | null, registrations?: Array<{ __typename?: 'Registration', id: string, hasPaid?: boolean | null, isPremium?: boolean | null, user?: { __typename?: 'User', id: string, email?: string | null, userName?: string | null, avatarImage?: { __typename?: 'CloudImage', id: string, altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null } | null }> | null, image?: { __typename?: 'CloudImage', id: string, altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null, winner?: { __typename?: 'User', id: string, userName?: string | null, avatarImage?: { __typename?: 'CloudImage', id: string, altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null } | null } | null };

export type ContestRegistrationMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
  contestId: Scalars['ID']['input'];
}>;


export type ContestRegistrationMutation = { __typename?: 'Mutation', createRegistration?: { __typename?: 'Registration', id: string, contest?: { __typename?: 'Contest', id: string } | null, user?: { __typename?: 'User', id: string } | null } | null };

export type DeleteContestRegistrationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteContestRegistrationMutation = { __typename?: 'Mutation', deleteRegistration?: { __typename?: 'Registration', id: string } | null };

export type MakeBetMutationVariables = Exact<{
  choiceId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
  isSuper: Scalars['Boolean']['input'];
}>;


export type MakeBetMutation = { __typename?: 'Mutation', createBet?: { __typename?: 'Bet', id: string, isSuper?: boolean | null, user?: { __typename?: 'User', id: string } | null, choice?: { __typename?: 'Choice', id: string } | null } | null };

export type DeleteBetMutationVariables = Exact<{
  betId: Scalars['ID']['input'];
}>;


export type DeleteBetMutation = { __typename?: 'Mutation', deleteBet?: { __typename?: 'Bet', id: string } | null };

export type TrackerStatusQueryVariables = Exact<{
  contestId: Scalars['ID']['input'];
}>;


export type TrackerStatusQuery = { __typename?: 'Query', lines?: Array<{ __typename?: 'Line', id: string, title?: string | null, benchmark?: number | null, image?: { __typename?: 'CloudImage', id: string, altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null, standings?: Array<{ __typename?: 'Standing', id: string, wins?: number | null, gamesPlayed?: number | null, totalGames?: number | null }> | null, choices?: Array<{ __typename?: 'Choice', id: string, selection?: ChoiceSelectionType | null, isWin?: boolean | null, image?: { __typename?: 'CloudImage', altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null }> | null }> | null };

export type AtsTrackerStatusQueryVariables = Exact<{
  contestId: Scalars['ID']['input'];
}>;


export type AtsTrackerStatusQuery = { __typename?: 'Query', lines?: Array<{ __typename?: 'Line', id: string, title?: string | null, benchmark?: number | null, closingTime?: any | null, image?: { __typename?: 'CloudImage', id: string, altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null, choices?: Array<{ __typename?: 'Choice', id: string, selection?: ChoiceSelectionType | null, isWin?: boolean | null, image?: { __typename?: 'CloudImage', altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null, secondaryImage?: { __typename?: 'CloudImage', altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null, bets?: Array<{ __typename?: 'Bet', id: string, isSuper?: boolean | null, user?: { __typename?: 'User', id: string, email?: string | null } | null }> | null }> | null }> | null };

export type LeaderboardQueryVariables = Exact<{
  contestId: Scalars['ID']['input'];
}>;


export type LeaderboardQuery = { __typename?: 'Query', registrations?: Array<{ __typename?: 'Registration', id: string, user?: { __typename?: 'User', id: string, userName?: string | null, avatarImage?: { __typename?: 'CloudImage', id: string, altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null } | null, counts?: { __typename?: 'PointCounts', locked?: number | null, likely?: number | null, possible?: number | null } | null }> | null };

export type ContestBetsQueryVariables = Exact<{
  contestId: Scalars['ID']['input'];
}>;


export type ContestBetsQuery = { __typename?: 'Query', bets?: Array<{ __typename?: 'Bet', id: string, isSuper?: boolean | null, choice?: { __typename?: 'Choice', id: string } | null, user?: { __typename?: 'User', id: string, userName?: string | null, avatarImage?: { __typename?: 'CloudImage', id: string, altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null } | null }> | null };

export type AtsLeaderboardQueryVariables = Exact<{
  contestId: Scalars['ID']['input'];
}>;


export type AtsLeaderboardQuery = { __typename?: 'Query', contest?: { __typename?: 'Contest', ruleSet?: { __typename?: 'RuleSet', id: string, superBetPointCount?: number | null, maxBets?: number | null, maxSuperBets?: number | null } | null, registrations?: Array<{ __typename?: 'Registration', id: string, isPremium?: boolean | null, user?: { __typename?: 'User', id: string, userName?: string | null, avatarImage?: { __typename?: 'CloudImage', id: string, altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null } | null }> | null, lines?: Array<{ __typename?: 'Line', id: string, title?: string | null, closingTime?: any | null, choices?: Array<{ __typename?: 'Choice', id: string, selection?: ChoiceSelectionType | null, isWin?: boolean | null, image?: { __typename?: 'CloudImage', altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null, secondaryImage?: { __typename?: 'CloudImage', altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null, bets?: Array<{ __typename?: 'Bet', id: string, isSuper?: boolean | null, user?: { __typename?: 'User', id: string } | null }> | null }> | null }> | null } | null };

export type HistoriesByTypeQueryVariables = Exact<{
  contestType: HistoryContestTypeType;
}>;


export type HistoriesByTypeQuery = { __typename?: 'Query', histories?: Array<{ __typename?: 'History', id: string, display?: string | null, year?: number | null, user?: { __typename?: 'User', id: string, userName?: string | null, avatarImage?: { __typename?: 'CloudImage', id: string, altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null } | null }> | null };

export type UserContestBetsQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
  contestId: Scalars['ID']['input'];
}>;


export type UserContestBetsQuery = { __typename?: 'Query', contest?: { __typename?: 'Contest', id: string, lines?: Array<{ __typename?: 'Line', id: string, benchmark?: number | null, closingTime?: any | null, title?: string | null, image?: { __typename?: 'CloudImage', id: string, altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null, choices?: Array<{ __typename?: 'Choice', id: string, selection?: ChoiceSelectionType | null, isWin?: boolean | null, status?: ChoiceStatus | null, bets?: Array<{ __typename?: 'Bet', id: string, isSuper?: boolean | null }> | null }> | null }> | null } | null };


export const CreateNbaContestDocument = gql`
    mutation CreateNbaContest($contestName: String, $overSelection: ChoiceCreateInput!, $underSelection: ChoiceCreateInput!, $closingTime: DateTime, $atlantaHawksBenchmark: Float, $bostonCelticsBenchmark: Float, $brooklynNetsBenchmark: Float, $charlotteHornetsBenchmark: Float, $chicagoBullsBenchmark: Float, $clevelandCavaliersBenchmark: Float, $dallasMavericksBenchmark: Float, $denverNuggetsBenchmark: Float, $detroitPistonsBenchmark: Float, $goldenStateWarriorsBenchmark: Float, $houstonRocketsBenchmark: Float, $indianaPacersBenchmark: Float, $lAClippersBenchmark: Float, $losAngelesLakersBenchmark: Float, $memphisGrizzliesBenchmark: Float, $miamiHeatBenchmark: Float, $milwaukeeBucksBenchmark: Float, $minnesotaTimberwolvesBenchmark: Float, $newOrleansPelicansBenchmark: Float, $newYorkKnicksBenchmark: Float, $oklahomaCityThunderBenchmark: Float, $orlandoMagicBenchmark: Float, $philadelphia76ersBenchmark: Float, $phoenixSunsBenchmark: Float, $portlandTrailBlazersBenchmark: Float, $sacramentoKingsBenchmark: Float, $sanAntonioSpursBenchmark: Float, $torontoRaptorsBenchmark: Float, $utahJazzBenchmark: Float, $washingtonWizardsBenchmark: Float) {
  createContest(
    data: {name: $contestName, description: "Pick over or under season win totals for NBA", status: OPEN, entryFee: 25, contestType: NBA_OVER_UNDER, ruleSet: {create: {maxBets: 10, maxSuperBets: 5, superBetPointCount: 2}}, lines: {create: [{title: "Atlanta Hawks", benchmark: $atlantaHawksBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl94tln643791650imcmdfk267i"}}}, {title: "Boston Celtics", benchmark: $bostonCelticsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl93pvrt13248480imc1pk7nvkd"}}}, {title: "Brooklyn Nets", benchmark: $brooklynNetsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl93px1783261880imcxrq7oh6v"}}}, {title: "Charlotte Hornets", benchmark: $charlotteHornetsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl93puudp3240950imc405ceklf"}}}, {title: "Chicago Bulls", benchmark: $chicagoBullsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl94to6nd3809910imck5mxxfsp"}}}, {title: "Cleveland Cavaliers", benchmark: $clevelandCavaliersBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl94tn9ju3801870imcdof9nvm3"}}}, {title: "Dallas Mavericks", benchmark: $dallasMavericksBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl94tkf3w3769030imcpl0wtgdz"}}}, {title: "Denver Nuggets", benchmark: $denverNuggetsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl94tjwm53763670imc9xbdby5h"}}}, {title: "Detroit Pistons", benchmark: $detroitPistonsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl93ptyxq3232910imcoyv0kdyp"}}}, {title: "Golden State Warriors", benchmark: $goldenStateWarriorsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl93pwshp3259200imcfkh7kz71"}}}, {title: "Houston Rockets", benchmark: $houstonRocketsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl93prni23215700imcuqz79t17"}}}, {title: "Indiana Pacers", benchmark: $indianaPacersBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl93pscxg3222190imco1gey96u"}}}, {title: "LA Clippers", benchmark: $lAClippersBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl93pwk0h3256520imcafo73r4k"}}}, {title: "Los Angeles Lakers", benchmark: $losAngelesLakersBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl94tl4ij3786540imcvwf12een"}}}, {title: "Memphis Grizzlies", benchmark: $memphisGrizzliesBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl94tk5pl3766350imcfl1nuq3z"}}}, {title: "Miami Heat", benchmark: $miamiHeatBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl94tksr23771710imc7uw9o7nj"}}}, {title: "Milwaukee Bucks", benchmark: $milwaukeeBucksBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl93pw1y43251160imc6rbkysij"}}}, {title: "Minnesota Timberwolves", benchmark: $minnesotaTimberwolvesBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl94tm82x3794330imc8hgttvpg"}}}, {title: "New Orleans Pelicans", benchmark: $newOrleansPelicansBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl94tnyfv3807230imcjao003ly"}}}, {title: "New York Knicks", benchmark: $newYorkKnicksBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl94tofsa3812590imc2d04yql7"}}}, {title: "Oklahoma City Thunder", benchmark: $oklahomaCityThunderBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl93pspm63224870imcejeut5ia"}}}, {title: "Orlando Magic", benchmark: $orlandoMagicBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl93psyw93227550imcmmdt7s9c"}}}, {title: "Philadelphia 76ers", benchmark: $philadelphia76ersBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl94tjhgy3715400imc5jig7w16"}}}, {title: "Phoenix Suns", benchmark: $phoenixSunsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl93pwbg33253840imc9hs2lwuq"}}}, {title: "Portland Trail Blazers", benchmark: $portlandTrailBlazersBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl93pv6o43243630imc9pcloz9u"}}}, {title: "Sacramento Kings", benchmark: $sacramentoKingsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl93pua0n3235590imcnt5au3kz"}}}, {title: "San Antonio Spurs", benchmark: $sanAntonioSpursBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl93ps3sz3219510imcr7sn4pd6"}}}, {title: "Toronto Raptors", benchmark: $torontoRaptorsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl94tnlpi3804550imcn9hqbfot"}}}, {title: "Utah Jazz", benchmark: $utahJazzBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl93ptl4o3230230imcic3598k2"}}}, {title: "Washington Wizards", benchmark: $washingtonWizardsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "cl93pulfn3238270imctt5o7rh1"}}}]}}
  ) {
    id
  }
}
    `;
export type CreateNbaContestMutationFn = Apollo.MutationFunction<CreateNbaContestMutation, CreateNbaContestMutationVariables>;

/**
 * __useCreateNbaContestMutation__
 *
 * To run a mutation, you first call `useCreateNbaContestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNbaContestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNbaContestMutation, { data, loading, error }] = useCreateNbaContestMutation({
 *   variables: {
 *      contestName: // value for 'contestName'
 *      overSelection: // value for 'overSelection'
 *      underSelection: // value for 'underSelection'
 *      closingTime: // value for 'closingTime'
 *      atlantaHawksBenchmark: // value for 'atlantaHawksBenchmark'
 *      bostonCelticsBenchmark: // value for 'bostonCelticsBenchmark'
 *      brooklynNetsBenchmark: // value for 'brooklynNetsBenchmark'
 *      charlotteHornetsBenchmark: // value for 'charlotteHornetsBenchmark'
 *      chicagoBullsBenchmark: // value for 'chicagoBullsBenchmark'
 *      clevelandCavaliersBenchmark: // value for 'clevelandCavaliersBenchmark'
 *      dallasMavericksBenchmark: // value for 'dallasMavericksBenchmark'
 *      denverNuggetsBenchmark: // value for 'denverNuggetsBenchmark'
 *      detroitPistonsBenchmark: // value for 'detroitPistonsBenchmark'
 *      goldenStateWarriorsBenchmark: // value for 'goldenStateWarriorsBenchmark'
 *      houstonRocketsBenchmark: // value for 'houstonRocketsBenchmark'
 *      indianaPacersBenchmark: // value for 'indianaPacersBenchmark'
 *      lAClippersBenchmark: // value for 'lAClippersBenchmark'
 *      losAngelesLakersBenchmark: // value for 'losAngelesLakersBenchmark'
 *      memphisGrizzliesBenchmark: // value for 'memphisGrizzliesBenchmark'
 *      miamiHeatBenchmark: // value for 'miamiHeatBenchmark'
 *      milwaukeeBucksBenchmark: // value for 'milwaukeeBucksBenchmark'
 *      minnesotaTimberwolvesBenchmark: // value for 'minnesotaTimberwolvesBenchmark'
 *      newOrleansPelicansBenchmark: // value for 'newOrleansPelicansBenchmark'
 *      newYorkKnicksBenchmark: // value for 'newYorkKnicksBenchmark'
 *      oklahomaCityThunderBenchmark: // value for 'oklahomaCityThunderBenchmark'
 *      orlandoMagicBenchmark: // value for 'orlandoMagicBenchmark'
 *      philadelphia76ersBenchmark: // value for 'philadelphia76ersBenchmark'
 *      phoenixSunsBenchmark: // value for 'phoenixSunsBenchmark'
 *      portlandTrailBlazersBenchmark: // value for 'portlandTrailBlazersBenchmark'
 *      sacramentoKingsBenchmark: // value for 'sacramentoKingsBenchmark'
 *      sanAntonioSpursBenchmark: // value for 'sanAntonioSpursBenchmark'
 *      torontoRaptorsBenchmark: // value for 'torontoRaptorsBenchmark'
 *      utahJazzBenchmark: // value for 'utahJazzBenchmark'
 *      washingtonWizardsBenchmark: // value for 'washingtonWizardsBenchmark'
 *   },
 * });
 */
export function useCreateNbaContestMutation(baseOptions?: Apollo.MutationHookOptions<CreateNbaContestMutation, CreateNbaContestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNbaContestMutation, CreateNbaContestMutationVariables>(CreateNbaContestDocument, options);
      }
export type CreateNbaContestMutationHookResult = ReturnType<typeof useCreateNbaContestMutation>;
export type CreateNbaContestMutationResult = Apollo.MutationResult<CreateNbaContestMutation>;
export type CreateNbaContestMutationOptions = Apollo.BaseMutationOptions<CreateNbaContestMutation, CreateNbaContestMutationVariables>;
export const CreateNflContestDocument = gql`
    mutation CreateNFLContest($contestName: String, $overSelection: ChoiceCreateInput!, $underSelection: ChoiceCreateInput!, $closingTime: DateTime, $arizonaCardinalsBenchmark: Float, $atlantaFalconsBenchmark: Float, $baltimoreRavensBenchmark: Float, $buffaloBillsBenchmark: Float, $carolinaPanthersBenchmark: Float, $chicagoBearsBenchmark: Float, $cincinnatiBengalsBenchmark: Float, $clevelandBrownsBenchmark: Float, $dallasCowboysBenchmark: Float, $denverBroncosBenchmark: Float, $detroitLionsBenchmark: Float, $greenBayPackersBenchmark: Float, $houstonTexansBenchmark: Float, $indianapolisColtsBenchmark: Float, $jacksonvilleJaguarsBenchmark: Float, $kansasCityChiefsBenchmark: Float, $lasVegasRaidersBenchmark: Float, $losAngelesChargersBenchmark: Float, $losAngelesRamsBenchmark: Float, $miamiDolphinsBenchmark: Float, $minnesotaVikingsBenchmark: Float, $newEnglandPatriotsBenchmark: Float, $newOrleansSaintsBenchmark: Float, $newYorkGiantsBenchmark: Float, $newYorkJetsBenchmark: Float, $philadelphiaEaglesBenchmark: Float, $pittsburghSteelersBenchmark: Float, $sanFrancisco49ersBenchmark: Float, $seattleSeahawksBenchmark: Float, $tampaBayBuccaneersBenchmark: Float, $tennesseeTitansBenchmark: Float, $washingtonCommandersBenchmark: Float) {
  createContest(
    data: {name: $contestName, description: "Pick over or under season win totals for NFL", status: OPEN, entryFee: 25, contestType: NBA_OVER_UNDER, ruleSet: {create: {maxBets: 10, maxSuperBets: 5, superBetPointCount: 2}}, lines: {create: [{title: "Arizona Cardinals", benchmark: $arizonaCardinalsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4swnp2364813q16iiosh1c"}}}, {title: "Atlanta Falcons", benchmark: $atlantaFalconsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4zxc53588813q166z3wze4"}}}, {title: "Baltimore Ravens", benchmark: $baltimoreRavensBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4it4z1148113q1qgkqwis9"}}}, {title: "Buffalo Bills", benchmark: $buffaloBillsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4k4f21283013q1wozaksk6"}}}, {title: "Carolina Panthers", benchmark: $carolinaPanthersBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4v4uh2946013q1iqzttxty"}}}, {title: "Chicago Bears", benchmark: $chicagoBearsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4u41t2800013q13fp5q44t"}}}, {title: "Cincinnati Bengals", benchmark: $cincinnatiBengalsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4zlgq3541113q1hxeksh44"}}}, {title: "Cleveland Browns", benchmark: $clevelandBrownsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4resn2085913q14ug526na"}}}, {title: "Dallas Cowboys", benchmark: $dallasCowboysBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4se8o2317113q11clcqs3q"}}}, {title: "Denver Broncos", benchmark: $denverBroncosBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckrf3fgcq3773813q1jeydsg6i"}}}, {title: "Detroit Lions", benchmark: $detroitLionsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4w17m3004613q1gfq96g97"}}}, {title: "Green Bay Packers", benchmark: $greenBayPackersBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4gpn8888513q1y0fbipvz"}}}, {title: "Houston Texans", benchmark: $houstonTexansBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckrf3ejpu3726113q1e2hm3h6s"}}}, {title: "Indianapolis Colts", benchmark: $indianapolisColtsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4s2vu2269413q196vxhvoi"}}}, {title: "Jacksonville Jaguars", benchmark: $jacksonvilleJaguarsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckrf3hsgp4012313q1tuxh5jr2"}}}, {title: "Kansas City Chiefs", benchmark: $kansasCityChiefsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckrf3hff53964613q1jj5ifz8r"}}}, {title: "Las Vegas Raiders", benchmark: $lasVegasRaidersBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4yx9p3445713q152xtqngx"}}}, {title: "Los Angeles Chargers", benchmark: $losAngelesChargersBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4rrf12162613q1l67t9m11"}}}, {title: "Los Angeles Rams", benchmark: $losAngelesRamsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4hoa91013213q11tanue27"}}}, {title: "Miami Dolphins", benchmark: $miamiDolphinsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4tccg2704613q1gip4firz"}}}, {title: "Minnesota Vikings", benchmark: $minnesotaVikingsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4tmhp2752313q1x8xgc8xo"}}}, {title: "New England Patriots", benchmark: $newEnglandPatriotsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4qqaq2038213q1y07h02ct"}}}, {title: "New Orleans Saints", benchmark: $newOrleansSaintsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckrf3gmbe3869213q1urif9iu9"}}}, {title: "New York Giants", benchmark: $newYorkGiantsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4ujdk2848913q107eokhib"}}}, {title: "New York Jets", benchmark: $newYorkJetsBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckrf3h1zm3916913q1hntxo0s7"}}}, {title: "Philadelphia Eagles", benchmark: $philadelphiaEaglesBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4utls2898113q1nkf0xqw6"}}}, {title: "Pittsburgh Steelers", benchmark: $pittsburghSteelersBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckrf3gbg13821513q16vjxsmhf"}}}, {title: "San Francisco 49ers", benchmark: $sanFrancisco49ersBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4l4sh1368413q1n858od9s"}}}, {title: "Seattle Seahawks", benchmark: $seattleSeahawksBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4qd161990513q1h40fpel8"}}}, {title: "Tampa Bay Buccaneers", benchmark: $tampaBayBuccaneersBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4x9e93057713q1w1es8euj"}}}, {title: "Tennessee Titans", benchmark: $tennesseeTitansBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckre4zb933493413q18cdiu54w"}}}, {title: "Washington Commanders", benchmark: $washingtonCommandersBenchmark, closingTime: $closingTime, choices: {create: [$overSelection, $underSelection]}, image: {connect: {id: "ckrf3e6ji3678413q1u9ffp1ho"}}}]}}
  ) {
    id
  }
}
    `;
export type CreateNflContestMutationFn = Apollo.MutationFunction<CreateNflContestMutation, CreateNflContestMutationVariables>;

/**
 * __useCreateNflContestMutation__
 *
 * To run a mutation, you first call `useCreateNflContestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNflContestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNflContestMutation, { data, loading, error }] = useCreateNflContestMutation({
 *   variables: {
 *      contestName: // value for 'contestName'
 *      overSelection: // value for 'overSelection'
 *      underSelection: // value for 'underSelection'
 *      closingTime: // value for 'closingTime'
 *      arizonaCardinalsBenchmark: // value for 'arizonaCardinalsBenchmark'
 *      atlantaFalconsBenchmark: // value for 'atlantaFalconsBenchmark'
 *      baltimoreRavensBenchmark: // value for 'baltimoreRavensBenchmark'
 *      buffaloBillsBenchmark: // value for 'buffaloBillsBenchmark'
 *      carolinaPanthersBenchmark: // value for 'carolinaPanthersBenchmark'
 *      chicagoBearsBenchmark: // value for 'chicagoBearsBenchmark'
 *      cincinnatiBengalsBenchmark: // value for 'cincinnatiBengalsBenchmark'
 *      clevelandBrownsBenchmark: // value for 'clevelandBrownsBenchmark'
 *      dallasCowboysBenchmark: // value for 'dallasCowboysBenchmark'
 *      denverBroncosBenchmark: // value for 'denverBroncosBenchmark'
 *      detroitLionsBenchmark: // value for 'detroitLionsBenchmark'
 *      greenBayPackersBenchmark: // value for 'greenBayPackersBenchmark'
 *      houstonTexansBenchmark: // value for 'houstonTexansBenchmark'
 *      indianapolisColtsBenchmark: // value for 'indianapolisColtsBenchmark'
 *      jacksonvilleJaguarsBenchmark: // value for 'jacksonvilleJaguarsBenchmark'
 *      kansasCityChiefsBenchmark: // value for 'kansasCityChiefsBenchmark'
 *      lasVegasRaidersBenchmark: // value for 'lasVegasRaidersBenchmark'
 *      losAngelesChargersBenchmark: // value for 'losAngelesChargersBenchmark'
 *      losAngelesRamsBenchmark: // value for 'losAngelesRamsBenchmark'
 *      miamiDolphinsBenchmark: // value for 'miamiDolphinsBenchmark'
 *      minnesotaVikingsBenchmark: // value for 'minnesotaVikingsBenchmark'
 *      newEnglandPatriotsBenchmark: // value for 'newEnglandPatriotsBenchmark'
 *      newOrleansSaintsBenchmark: // value for 'newOrleansSaintsBenchmark'
 *      newYorkGiantsBenchmark: // value for 'newYorkGiantsBenchmark'
 *      newYorkJetsBenchmark: // value for 'newYorkJetsBenchmark'
 *      philadelphiaEaglesBenchmark: // value for 'philadelphiaEaglesBenchmark'
 *      pittsburghSteelersBenchmark: // value for 'pittsburghSteelersBenchmark'
 *      sanFrancisco49ersBenchmark: // value for 'sanFrancisco49ersBenchmark'
 *      seattleSeahawksBenchmark: // value for 'seattleSeahawksBenchmark'
 *      tampaBayBuccaneersBenchmark: // value for 'tampaBayBuccaneersBenchmark'
 *      tennesseeTitansBenchmark: // value for 'tennesseeTitansBenchmark'
 *      washingtonCommandersBenchmark: // value for 'washingtonCommandersBenchmark'
 *   },
 * });
 */
export function useCreateNflContestMutation(baseOptions?: Apollo.MutationHookOptions<CreateNflContestMutation, CreateNflContestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNflContestMutation, CreateNflContestMutationVariables>(CreateNflContestDocument, options);
      }
export type CreateNflContestMutationHookResult = ReturnType<typeof useCreateNflContestMutation>;
export type CreateNflContestMutationResult = Apollo.MutationResult<CreateNflContestMutation>;
export type CreateNflContestMutationOptions = Apollo.BaseMutationOptions<CreateNflContestMutation, CreateNflContestMutationVariables>;
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
export const GetContestChatDocument = gql`
    query GetContestChat($contestId: ID!) {
  chats(where: {contest: {id: {equals: $contestId}}}) {
    id
    content
    user {
      id
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
}
    `;

/**
 * __useGetContestChatQuery__
 *
 * To run a query within a React component, call `useGetContestChatQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContestChatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContestChatQuery({
 *   variables: {
 *      contestId: // value for 'contestId'
 *   },
 * });
 */
export function useGetContestChatQuery(baseOptions: Apollo.QueryHookOptions<GetContestChatQuery, GetContestChatQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContestChatQuery, GetContestChatQueryVariables>(GetContestChatDocument, options);
      }
export function useGetContestChatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContestChatQuery, GetContestChatQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContestChatQuery, GetContestChatQueryVariables>(GetContestChatDocument, options);
        }
export type GetContestChatQueryHookResult = ReturnType<typeof useGetContestChatQuery>;
export type GetContestChatLazyQueryHookResult = ReturnType<typeof useGetContestChatLazyQuery>;
export type GetContestChatQueryResult = Apollo.QueryResult<GetContestChatQuery, GetContestChatQueryVariables>;
export const CreateChatDocument = gql`
    mutation CreateChat($content: String!, $contestId: ID!, $userId: ID!) {
  createChat(
    data: {content: $content, user: {connect: {id: $userId}}, contest: {connect: {id: $contestId}}}
  ) {
    id
    content
    contest {
      id
      name
    }
    user {
      id
      name
    }
  }
}
    `;
export type CreateChatMutationFn = Apollo.MutationFunction<CreateChatMutation, CreateChatMutationVariables>;

/**
 * __useCreateChatMutation__
 *
 * To run a mutation, you first call `useCreateChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChatMutation, { data, loading, error }] = useCreateChatMutation({
 *   variables: {
 *      content: // value for 'content'
 *      contestId: // value for 'contestId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreateChatMutation(baseOptions?: Apollo.MutationHookOptions<CreateChatMutation, CreateChatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChatMutation, CreateChatMutationVariables>(CreateChatDocument, options);
      }
export type CreateChatMutationHookResult = ReturnType<typeof useCreateChatMutation>;
export type CreateChatMutationResult = Apollo.MutationResult<CreateChatMutation>;
export type CreateChatMutationOptions = Apollo.BaseMutationOptions<CreateChatMutation, CreateChatMutationVariables>;
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
  contests(orderBy: {name: desc}) {
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
    lines(orderBy: [{closingTime: asc}, {benchmark: desc}]) {
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
    lines(orderBy: {closingTime: asc}) {
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
        status
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