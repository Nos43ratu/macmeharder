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

export type AppAvatarNode = {
  __typename?: 'AppAvatarNode';
  id: Scalars['ID'];
  image: Scalars['String'];
  app: AppsNode;
  url?: Maybe<Scalars['String']>;
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
  downloadUrl?: Maybe<Scalars['String']>;
  appImages: Array<ImagesNode>;
  appAvatar: Array<AppAvatarNode>;
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
  url?: Maybe<Scalars['String']>;
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
  appAvatar?: Maybe<AppAvatarNode>;
  post?: Maybe<PostNode>;
  postList?: Maybe<Array<Maybe<PostNode>>>;
};


export type QueryAppsListArgs = {
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['Int']>;
};


export type QueryAppCategoriesArgs = {
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};


export type QueryAppImagesArgs = {
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};


export type QueryAppArgs = {
  appId?: Maybe<Scalars['ID']>;
};


export type QueryAppAvatarArgs = {
  appAvatarId?: Maybe<Scalars['ID']>;
};


export type QueryPostArgs = {
  postId?: Maybe<Scalars['ID']>;
};


export type QueryPostListArgs = {
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['Int']>;
};

export type GetAppsListQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['Int']>;
}>;


export type GetAppsListQuery = (
  { __typename?: 'Query' }
  & { appsList?: Maybe<Array<Maybe<(
    { __typename?: 'AppsNode' }
    & Pick<AppsNode, 'id' | 'title' | 'description'>
    & { appAvatar: Array<(
      { __typename?: 'AppAvatarNode' }
      & Pick<AppAvatarNode, 'url'>
    )>, category: (
      { __typename?: 'AppCategoryNode' }
      & Pick<AppCategoryNode, 'id' | 'name'>
    ), appImages: Array<(
      { __typename?: 'ImagesNode' }
      & Pick<ImagesNode, 'url'>
    )> }
  )>>> }
);

export type GetPostListQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  category: Scalars['Int'];
}>;


export type GetPostListQuery = (
  { __typename?: 'Query' }
  & { postList?: Maybe<Array<Maybe<(
    { __typename?: 'PostNode' }
    & Pick<PostNode, 'id' | 'title' | 'miniTitle' | 'body'>
    & { postImages: Array<(
      { __typename?: 'PostImageNode' }
      & Pick<PostImageNode, 'url'>
    )> }
  )>>> }
);

export type GetPostQueryVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
}>;


export type GetPostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'PostNode' }
    & Pick<PostNode, 'id' | 'created' | 'title' | 'miniTitle' | 'body'>
    & { postImages: Array<(
      { __typename?: 'PostImageNode' }
      & Pick<PostImageNode, 'url'>
    )> }
  )> }
);

export type GetAppQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetAppQueryQuery = (
  { __typename?: 'Query' }
  & { app?: Maybe<(
    { __typename?: 'AppsNode' }
    & Pick<AppsNode, 'id' | 'created' | 'title' | 'language' | 'languageCount' | 'description' | 'size' | 'award' | 'place' | 'age' | 'developer' | 'chart' | 'version' | 'compatibility'>
    & { category: (
      { __typename?: 'AppCategoryNode' }
      & Pick<AppCategoryNode, 'id' | 'name'>
    ), appAvatar: Array<(
      { __typename?: 'AppAvatarNode' }
      & Pick<AppAvatarNode, 'url'>
    )>, appImages: Array<(
      { __typename?: 'ImagesNode' }
      & Pick<ImagesNode, 'url'>
    )> }
  )> }
);


export const GetAppsListDocument = gql`
    query GetAppsList($page: Int, $count: Int, $category: Int) {
  appsList(page: $page, count: $count, category: $category) {
    id
    title
    appAvatar {
      url
    }
    description
    category {
      id
      name
    }
    appImages {
      url
    }
  }
}
    `;

/**
 * __useGetAppsListQuery__
 *
 * To run a query within a React component, call `useGetAppsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppsListQuery({
 *   variables: {
 *      page: // value for 'page'
 *      count: // value for 'count'
 *      category: // value for 'category'
 *   },
 * });
 */
export function useGetAppsListQuery(baseOptions?: Apollo.QueryHookOptions<GetAppsListQuery, GetAppsListQueryVariables>) {
        return Apollo.useQuery<GetAppsListQuery, GetAppsListQueryVariables>(GetAppsListDocument, baseOptions);
      }
export function useGetAppsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAppsListQuery, GetAppsListQueryVariables>) {
          return Apollo.useLazyQuery<GetAppsListQuery, GetAppsListQueryVariables>(GetAppsListDocument, baseOptions);
        }
export type GetAppsListQueryHookResult = ReturnType<typeof useGetAppsListQuery>;
export type GetAppsListLazyQueryHookResult = ReturnType<typeof useGetAppsListLazyQuery>;
export type GetAppsListQueryResult = Apollo.QueryResult<GetAppsListQuery, GetAppsListQueryVariables>;
export const GetPostListDocument = gql`
    query GetPostList($page: Int, $count: Int, $category: Int!) {
  postList(page: $page, count: $count, category: $category) {
    id
    title
    miniTitle
    body
    postImages {
      url
    }
  }
}
    `;

/**
 * __useGetPostListQuery__
 *
 * To run a query within a React component, call `useGetPostListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostListQuery({
 *   variables: {
 *      page: // value for 'page'
 *      count: // value for 'count'
 *      category: // value for 'category'
 *   },
 * });
 */
export function useGetPostListQuery(baseOptions: Apollo.QueryHookOptions<GetPostListQuery, GetPostListQueryVariables>) {
        return Apollo.useQuery<GetPostListQuery, GetPostListQueryVariables>(GetPostListDocument, baseOptions);
      }
export function useGetPostListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostListQuery, GetPostListQueryVariables>) {
          return Apollo.useLazyQuery<GetPostListQuery, GetPostListQueryVariables>(GetPostListDocument, baseOptions);
        }
export type GetPostListQueryHookResult = ReturnType<typeof useGetPostListQuery>;
export type GetPostListLazyQueryHookResult = ReturnType<typeof useGetPostListLazyQuery>;
export type GetPostListQueryResult = Apollo.QueryResult<GetPostListQuery, GetPostListQueryVariables>;
export const GetPostDocument = gql`
    query GetPost($id: ID) {
  post(postId: $id) {
    id
    created
    title
    miniTitle
    body
    postImages {
      url
    }
  }
}
    `;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions?: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, baseOptions);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, baseOptions);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
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
    appAvatar {
      url
    }
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