import { Spinner } from '@chakra-ui/react';
import { faker } from '@faker-js/faker';
import React from 'react';
import {Post as post} from "@/TYPES/post";
import CommentModal from '@/components/CommentModal';
import Comments from '@/components/Comments';
import ErrorBoundary from '@/components/ErrorBoundary';
import SkeletonGenerator from '@/components/SkeletonGenerator';
import { useGetPostQuery } from '@/features/api';
import { setPageTitle } from '@/features/app';
import { useAppDispatch } from '@/hooks/useAppDispatch';

export interface PostProps {
  postId: number;
}

function PostHeader() {
  return (
    <ErrorBoundary>
      <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full'>
        <div className='relative h-full text-lg max-w-prose mx-auto' aria-hidden='true'>
          <svg
            className='absolute top-12 left-full translate-x-32'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
          >
            <defs>
              <pattern
                id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect x={0} y={0} width={4} height={4} className='text-gray-200' fill='currentColor' />
              </pattern>
            </defs>
            <rect width={404} height={384} fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)' />
          </svg>
          <svg
            className='absolute top-1/2 right-full -translate-y-1/2 -translate-x-32'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
          >
            <defs>
              <pattern
                id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect x={0} y={0} width={4} height={4} className='text-gray-200' fill='currentColor' />
              </pattern>
            </defs>
            <rect width={404} height={384} fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)' />
          </svg>
          <svg
            className='absolute bottom-12 left-full translate-x-32'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
          >
            <defs>
              <pattern
                id='d3eb07ae-5182-43e6-857d-35c643af9034'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect x={0} y={0} width={4} height={4} className='text-gray-200' fill='currentColor' />
              </pattern>
            </defs>
            <rect width={404} height={384} fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)' />
          </svg>
        </div>
      </div>
    </ErrorBoundary>
  );
}

function CommentsBlock({postId}: {postId: number}) {
  return (
    <ErrorBoundary>

      <h1>
        <span className='block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase'>
          What do you think?
        </span>
        <span className='mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          Leave us a Comment
        </span>
      </h1>

      <CommentModal  postId={postId}  />

      <Comments postId={postId} />
    </ErrorBoundary>
  )
}

function LoremIpsum({data, isLoading}: {data: post | undefined, isLoading: boolean}) {
  return (
    <div className='mt-6 prose prose-indigo text-gray-500 mx-auto'>
      <p>
        {faker.lorem.paragraph(faker.datatype.number({ min: 4, max: 10 }))}
      </p>
      <ul role='list'>
        {data && !isLoading && (
          <>
            <li>{faker.lorem.lines(1)}</li>
            <li>{faker.lorem.lines(1)}</li>
            <li>{faker.lorem.lines(1)}</li>
            <li>{faker.lorem.lines(1)}</li>
          </>
        )}
        {isLoading && (
          <>
            <li><SkeletonGenerator maxLines={1} minLines={1} /></li>
            <li><SkeletonGenerator maxLines={1} minLines={1} /></li>
            <li><SkeletonGenerator maxLines={1} minLines={1} /></li>
            <li><SkeletonGenerator maxLines={1} minLines={1} /></li>

          </>
        )}
      </ul>
      <p>
        {data && !isLoading && (
          <>
            {faker.lorem.paragraph(faker.datatype.number({ min: 4, max: 10 }))}
          </>
        )}
        {isLoading && (
          <>
            <SkeletonGenerator maxLines={10} minLines={4} />
          </>
        )}

      </p>
      <h2>From beginner to expert in 30 days</h2>
      <p>
        {data && !isLoading && (
          <>
            {faker.lorem.paragraph(faker.datatype.number({ min: 4, max: 10 }))}
          </>
        )}
        {isLoading && (
          <>
            <SkeletonGenerator maxLines={10} minLines={4} />
          </>
        )}

      </p>
      <blockquote>
        <p>
          {data && !isLoading && (
            <>
              {faker.lorem.paragraph(faker.datatype.number({ min: 1, max: 5 }))}
            </>
          )}
          {isLoading && (
            <>
              <SkeletonGenerator maxLines={5} minLines={1} />
            </>
          )}

        </p>
      </blockquote>
      <p>
        {data && !isLoading && (
          <>
            {faker.lorem.paragraph(faker.datatype.number({ min: 1, max: 5 }))}
          </>
        )}
        {isLoading && (
          <>
            <SkeletonGenerator maxLines={5} minLines={1} />
          </>
        )}

      </p>
      <figure>
        <img
          className='w-full rounded-lg'
          src={data?.profileImage ?? faker.image.abstract()}
          alt=''
          width={1310}
          height={873}
        />
        <figcaption>
          {faker.lorem.sentence(faker.datatype.number({ min: 8, max: 20 }))}
        </figcaption>

      </figure>
      <h2>Everything you need to get up and running</h2>
      <p>
        {data && !isLoading && (
          <>
            {faker.lorem.paragraph(faker.datatype.number({ min: 1, max: 5 }))}
          </>
        )}
        {isLoading && (
          <>
            <SkeletonGenerator maxLines={5} minLines={1} />
          </>
        )}

      </p>
      <p>
        {data && !isLoading && (
          <>
            {faker.lorem.paragraph(faker.datatype.number({ min: 1, max: 5 }))}
          </>
        )}
        {isLoading && (
          <>
            <SkeletonGenerator maxLines={5} minLines={1} />
          </>
        )}

      </p>
    </div>
  )
}


function PostBody({data}: {data: post | undefined, isLoading: boolean}) {
  if(!data) {
    return (
      <>
        <Spinner />
      </>
    )
  }else {
    return (
      <ErrorBoundary>
        <h1>
        <span className='block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase'>
           Introducing
         </span>
          <span className='mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            {data.title}
          </span>
        </h1>
        <p className='mt-8 text-xl text-gray-500 leading-8 bg-amber-200'>
          {data.body}
        </p>
        <code className="text-sm font-mono text-gray-600">
          <span className="text-md font-mono text-red-600">**</span>This is the body from API request.
        </code>
      </ErrorBoundary>
    )
  }
}

const Post: React.FC<PostProps> = ({ postId }) => {
  const dispatch = useAppDispatch();
  const { isLoading, error, data } = useGetPostQuery(postId);

  React.useEffect(() => {
    if (data && typeof data.title !== 'undefined') {
      const title: string = data.title;
      dispatch(setPageTitle(title));
    }
  }, [data, dispatch]);


  return (
    <div className='relative py-16 bg-white overflow-hidden'>
      <PostHeader />
      <div className='relative px-4 sm:px-6 lg:px-8'>
        <div className='text-lg max-w-prose mx-auto'>
          <PostBody data={data} isLoading={isLoading} />
        </div>
        <LoremIpsum data={data} isLoading={isLoading} />
      </div>
      <CommentsBlock postId={postId} />
    </div>
  );
};

export default Post;

