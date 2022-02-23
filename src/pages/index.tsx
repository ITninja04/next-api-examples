import CardRow, { LoadingCardRow } from '@/components/CardRow';
import ErrorState from '@/components/ErrorState';
import { useGetPostsQuery, useGetUsersQuery } from '@/features/api';
import withTransition from '@/hooks/withTransition';
import Layout from 'components/Layout'

function Home() {
  const e = useGetUsersQuery();
  const { data, isLoading, isError } = useGetPostsQuery();

  return (
    <Layout pageTitle={"Home"}>
      <div className='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
        <div className='relative max-w-7xl mx-auto'>
          {isLoading && (
            <LoadingCardRow />
          )}
          {isError && (
            <ErrorState message={"Unable to load blog posts."} showRefreshButton={false} />
          )}
          {data && (
            <CardRow posts={data} />
          )}
        </div>
      </div>
    </Layout>
  )
}

export default withTransition(Home);
