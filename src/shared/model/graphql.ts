/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type BrandEntity = {
  __typename?: 'BrandEntity';
  brand: Scalars['String']['output'];
  lamodaId: Array<Scalars['String']['output']>;
  meetMarketId: Array<Scalars['String']['output']>;
  rendezVousId: Array<Scalars['String']['output']>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  category: Scalars['String']['output'];
  lacosteId: Array<Scalars['String']['output']>;
  lamodaId: Array<Scalars['String']['output']>;
  meetMarketId: Array<Scalars['String']['output']>;
  rendezVousId: Array<Scalars['String']['output']>;
  section: Scalars['String']['output'];
  sex: Scalars['String']['output'];
  subCategory: Scalars['String']['output'];
};

export type CreateProductInput = {
  brand: Scalars['String']['input'];
  category: Scalars['String']['input'];
  color: Scalars['String']['input'];
  gallery?: InputMaybe<Array<Scalars['String']['input']>>;
  gender: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  rating: Scalars['Float']['input'];
  salePrice: Scalars['Float']['input'];
  sizeSystem: Scalars['String']['input'];
  sizes?: InputMaybe<Array<Scalars['String']['input']>>;
  store: Scalars['String']['input'];
  telegramUsersView?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type CreateTelegramUserInput = {
  chatId: Scalars['Float']['input'];
  settingBrands?: Array<Scalars['String']['input']>;
  settingCategory?: Array<Scalars['String']['input']>;
  settingInterval?: Scalars['Float']['input'];
  settingSex?: Array<Scalars['String']['input']>;
  userId: Scalars['Float']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: ProductEntity;
  createTelegramUser: TelegramUserEntity;
  removeOldProducts: Scalars['DateTime']['output'];
  removeProduct: Scalars['Float']['output'];
  removeTelegramUser: Scalars['Float']['output'];
  updateProduct: ProductEntity;
  updateTelegramUser: TelegramUserEntity;
};


export type MutationCreateProductArgs = {
  createProduct: CreateProductInput;
};


export type MutationCreateTelegramUserArgs = {
  createTelegramUser: CreateTelegramUserInput;
};


export type MutationRemoveOldProductsArgs = {
  store: Scalars['String']['input'];
  updatedAt: Scalars['DateTime']['input'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['Float']['input'];
};


export type MutationRemoveTelegramUserArgs = {
  userId: Scalars['Float']['input'];
};


export type MutationUpdateProductArgs = {
  updateProduct: UpdateProductInput;
};


export type MutationUpdateTelegramUserArgs = {
  updateTelegramUser: UpdateTelegramUserInput;
};

export type ProductEntity = {
  __typename?: 'ProductEntity';
  brand: Scalars['String']['output'];
  category: Scalars['String']['output'];
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  gallery: Array<Scalars['String']['output']>;
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['Float']['output'];
  rating: Scalars['Float']['output'];
  salePrice: Scalars['Float']['output'];
  sizeSystem: Scalars['String']['output'];
  sizes: Array<Scalars['String']['output']>;
  store: Scalars['String']['output'];
  telegramUsersView: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllBrands: Array<BrandEntity>;
  getAllCategory: Array<CategoryEntity>;
  getAllProducts: Array<ProductEntity>;
  getAllTelegramUsers: Array<TelegramUserEntity>;
  getFollowingProduct?: Maybe<ProductEntity>;
  getMailingProduct?: Maybe<ProductEntity>;
  getOneProduct: ProductEntity;
  getOneTelegramUser: TelegramUserEntity;
  getProducts: Array<ProductEntity>;
};


export type QueryGetFollowingProductArgs = {
  userId: Scalars['Float']['input'];
};


export type QueryGetMailingProductArgs = {
  userId: Scalars['Float']['input'];
};


export type QueryGetOneProductArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetOneTelegramUserArgs = {
  userId: Scalars['Float']['input'];
};


export type QueryGetProductsArgs = {
  page: Scalars['Float']['input'];
};

export type TelegramUserEntity = {
  __typename?: 'TelegramUserEntity';
  chatId: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  lastPostAt: Scalars['DateTime']['output'];
  settingBrands: Array<Scalars['String']['output']>;
  settingCategory: Array<Scalars['String']['output']>;
  settingInterval: Scalars['Float']['output'];
  settingSex: Array<Scalars['String']['output']>;
  userId: Scalars['Float']['output'];
};

export type UpdateProductInput = {
  brand?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<Array<Scalars['String']['input']>>;
  gender?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  salePrice?: InputMaybe<Scalars['Float']['input']>;
  sizeSystem?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<Array<Scalars['String']['input']>>;
  store?: InputMaybe<Scalars['String']['input']>;
  telegramUsersView?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTelegramUserInput = {
  chatId?: InputMaybe<Scalars['Float']['input']>;
  lastPostAt?: InputMaybe<Scalars['DateTime']['input']>;
  settingBrands?: InputMaybe<Array<Scalars['String']['input']>>;
  settingCategory?: InputMaybe<Array<Scalars['String']['input']>>;
  settingInterval?: InputMaybe<Scalars['Float']['input']>;
  settingSex?: InputMaybe<Array<Scalars['String']['input']>>;
  userId: Scalars['Float']['input'];
};
