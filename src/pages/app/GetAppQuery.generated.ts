import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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
  DateTime: any;
};

export type AppCategoryNode = {
  __typename?: 'AppCategoryNode';
  id: Scalars['ID'];
  name: Scalars['String'];
  appsList: Array<AppsNode>;
};

export type AppsNode = {
  __typename?: 'AppsNode';
  id: Scalars['ID'];
  created: Scalars['DateTime'];
  title: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  languageCount?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  award?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['Int']>;
  age?: Maybe<Scalars['Int']>;
  category: AppCategoryNode;
  developer?: Maybe<Scalars['String']>;
  chart?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  compatibility?: Maybe<Scalars['String']>;
  appImages: Array<ImagesNode>;
};


export type ImagesNode = {
  __typename?: 'ImagesNode';
  id: Scalars['ID'];
  mainImage: Scalars['String'];
  isAvatar: Scalars['Boolean'];
  app: AppsNode;
  url?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addApp?: Maybe<AppsNode>;
  removeApp?: Maybe<Scalars['Boolean']>;
};


export type MutationAddAppArgs = {
  title: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  award?: Maybe<Scalars['String']>;
  place?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['String']>;
  category: Scalars['String'];
};


export type MutationRemoveAppArgs = {
  appId?: Maybe<Scalars['ID']>;
};

export type PostImageNode = {
  __typename?: 'PostImageNode';
  id: Scalars['ID'];
  image: Scalars['String'];
  isAvatar: Scalars['Boolean'];
  post: PostNode;
};

export type PostNode = {
  __typename?: 'PostNode';
  id: Scalars['ID'];
  created: Scalars['DateTime'];
  title: Scalars['String'];
  miniTitle?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  postImages: Array<PostImageNode>;
};

export type Query = {
  __typename?: 'Query';
  appsList?: Maybe<Array<Maybe<AppsNode>>>;
  appCategories?: Maybe<Array<Maybe<AppCategoryNode>>>;
  appImages?: Maybe<Array<Maybe<ImagesNode>>>;
  app?: Maybe<AppsNode>;
  post?: Maybe<PostNode>;
  postList?: Maybe<Array<Maybe<PostNode>>>;
};


export type QueryAppsListArgs = {
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};


export type QueryAppArgs = {
  appId?: Maybe<Scalars['ID']>;
};


export type QueryPostArgs = {
  postId?: Maybe<Scalars['ID']>;
};

export type GetAppQueryQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type GetAppQueryQuery = (
  { __typename?: 'Query' }
  & { app?: Types.Maybe<(
    { __typename?: 'AppsNode' }
    & Pick<Types.AppsNode, 'id' | 'created' | 'title' | 'language' | 'languageCount' | 'description' | 'size' | 'award' | 'place' | 'age' | 'developer' | 'chart' | 'version' | 'compatibility'>
    & { category: (
      { __typename?: 'AppCategoryNode' }
      & Pick<Types.AppCategoryNode, 'id' | 'name'>
    ), appImages: Array<(
      { __typename?: 'ImagesNode' }
      & Pick<Types.ImagesNode, 'url'>
    )> }
  )> }
);


export const GetAppQueryDocument = gql`
    query GetAppQuery($id: ID!) {
  app(appId: $id) {
    id
    created
    title
    language
    languageCount
    description
    size
    award
    place
    age
    category {
      id
      name
    }
    developer
    chart
    version
    compatibility
    appImages {
      url
    }
  }
}
    `;

/**
 * __useGetAppQueryQuery__
 *
 * To run a query within a React component, call `useGetAppQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAppQueryQuery(baseOptions: Apollo.QueryHookOptions<GetAppQueryQuery, GetAppQueryQueryVariables>) {
        return Apollo.useQuery<GetAppQueryQuery, GetAppQueryQueryVariables>(GetAppQueryDocument, baseOptions);
      }
export function useGetAppQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAppQueryQuery, GetAppQueryQueryVariables>) {
          return Apollo.useLazyQuery<GetAppQueryQuery, GetAppQueryQueryVariables>(GetAppQueryDocument, baseOptions);
        }
export type GetAppQueryQueryHookResult = ReturnType<typeof useGetAppQueryQuery>;
export type GetAppQueryLazyQueryHookResult = ReturnType<typeof useGetAppQueryLazyQuery>;
export type GetAppQueryQueryResult = Apollo.QueryResult<GetAppQueryQuery, GetAppQueryQueryVariables>;