import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CollectionDie_Key {
  collectionId: UUIDString;
  dieTypeId: UUIDString;
  __typename?: 'CollectionDie_Key';
}

export interface Collection_Key {
  id: UUIDString;
  __typename?: 'Collection_Key';
}

export interface CreateCollectionData {
  collection_insert: Collection_Key;
}

export interface CreateCollectionVariables {
  name: string;
  description?: string | null;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  displayName: string;
  email?: string | null;
  photoUrl?: string | null;
}

export interface DieFace_Key {
  id: UUIDString;
  __typename?: 'DieFace_Key';
}

export interface DieType_Key {
  id: UUIDString;
  __typename?: 'DieType_Key';
}

export interface GetUserData {
  user?: {
    id: UUIDString;
    displayName: string;
    email?: string | null;
    photoUrl?: string | null;
    createdAt: TimestampString;
  } & User_Key;
}

export interface ListCollectionsData {
  collections: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & Collection_Key)[];
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface GetUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
  operationName: string;
}
export const getUserRef: GetUserRef;

export function getUser(): QueryPromise<GetUserData, undefined>;
export function getUser(dc: DataConnect): QueryPromise<GetUserData, undefined>;

interface CreateCollectionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCollectionVariables): MutationRef<CreateCollectionData, CreateCollectionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateCollectionVariables): MutationRef<CreateCollectionData, CreateCollectionVariables>;
  operationName: string;
}
export const createCollectionRef: CreateCollectionRef;

export function createCollection(vars: CreateCollectionVariables): MutationPromise<CreateCollectionData, CreateCollectionVariables>;
export function createCollection(dc: DataConnect, vars: CreateCollectionVariables): MutationPromise<CreateCollectionData, CreateCollectionVariables>;

interface ListCollectionsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListCollectionsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListCollectionsData, undefined>;
  operationName: string;
}
export const listCollectionsRef: ListCollectionsRef;

export function listCollections(): QueryPromise<ListCollectionsData, undefined>;
export function listCollections(dc: DataConnect): QueryPromise<ListCollectionsData, undefined>;

