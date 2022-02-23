import { useGetFakeUsersQuery } from '@/features/mockUsers';
import withTransition from '@/hooks/withTransition';
import ErrorState from 'components/ErrorState';
import Layout from 'components/Layout'

function AboutUs() {
  const {data, isError, isLoading, isFetching} = useGetFakeUsersQuery();
  return (
    <Layout pageTitle='About Us'>
      <div className='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
        <div className='relative max-w-7xl mx-auto'>
        <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our leadership</h2>
            <p className="text-xl text-gray-500">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse. Vivamus fringilla.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul role="list" className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
              {(isLoading || isFetching) && (
                Array.from(Array(6).keys()).map((index) => (
                  <LoaderOverlay key={`loader_${index}`} />
                ))
              )}
              { isError && <ErrorState showRefreshButton={true} message={'An error occurred while attempting ot load the About Us Page. Please try again.'} /> }
              {data?.results && data.results.map((person, indx) => (
                <li key={`about_us${indx}`}>
                  <div className="flex items-center space-x-4 lg:space-x-6">
                    <img className="w-16 h-16 rounded-full lg:w-20 lg:h-20" src={person.picture.large} alt={`${person.name.first} ${person.name.last}`} />
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3>{`${person.name.first} ${person.name.last}`}</h3>
                      <p className="text-indigo-600">
                        <a href={`mailto:${person.email}`}>{person.email}</a>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </Layout>
  )
}

export default withTransition(AboutUs);

function LoaderOverlay() {
  return (
    <li>
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-700 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
