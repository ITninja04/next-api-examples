import { NextPage } from 'next'
import React from 'react';
import AuthorBio from '@/components/AuthorBio';
import ErrorState from '@/components/ErrorState';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import withTransition from '@/hooks/withTransition';
import Layout from 'components/Layout'


interface BlogAuthorPageProps {
  authorId?: string;
}
const BlogAuthorPage:  NextPage<BlogAuthorPageProps> = (params) => {
  console.log(`Blog Page Params: ${JSON.stringify(params)}`);

  const {pageTitle} = useTypedSelector(s => s.app);
  if(!params.authorId || !parseInt(params.authorId)) {
    return (
      <>
        <ErrorState message={"Post not found"} showRefreshButton={false} />
      </>
    )
  }
  return (
    <Layout pageTitle={pageTitle ?? "Loading..."}>
      <div className='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
        <div className='relative max-w-7xl mx-auto'>
          <AuthorBio authorId={params?.authorId ? parseInt(params.authorId) : 1} />
        </div>
      </div>
    </Layout>
  )
}

export default withTransition(BlogAuthorPage);
