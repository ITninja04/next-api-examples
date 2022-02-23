import { Spinner } from '@chakra-ui/react';
import { parseInt } from 'lodash';
import { NextPage } from 'next'
import { useRouter } from 'next/router';
import React from 'react';
import BlogPost from '@/components/BlogPost';
import ErrorBoundary from '@/components/ErrorBoundary';
import ErrorState from '@/components/ErrorState';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import withTransition from '@/hooks/withTransition';
import Layout from 'components/Layout'


interface BlogPageProps {
  postId?: string;
}
const BlogPage:  NextPage<BlogPageProps> = (params) => {
  const {query} = useRouter();
  const [postId, setPostId] = React.useState<number | undefined>();
  const [postError, setPostError] = React.useState<{isError: boolean, errorMsg: string} | undefined>();

  React.useEffect(() => {
    if(query && query['postId']) {
      try {
        const __postId = Array.isArray(query['postId']) ? query['postId'][0] : query['postId'];
        const _postId = parseInt(__postId);
        setPostId(_postId);
        setPostError(undefined);
      }catch (err: any) {
        setPostId(undefined);
        setPostError({isError: true, errorMsg: err?.message});
      }
    }

  }, [query])

  const {pageTitle} = useTypedSelector(s => s.app);

  return (
    <Layout pageTitle={pageTitle ?? "Loading..."}>
      <div className='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
        <div className='relative max-w-7xl mx-auto'>
          <ErrorBoundary>
            {postId && (
              <BlogPost postId={postId} />
            )}
            {postError && (
              <ErrorState message={"Post not found"} showRefreshButton={false} />
            )}
            {!postId && !postError && (
              <Spinner />
            )}
          </ErrorBoundary>
        </div>
      </div>
    </Layout>
  )
}


export default withTransition(BlogPage);
