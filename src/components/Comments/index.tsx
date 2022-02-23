import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay, useDisclosure
} from '@chakra-ui/react';
import { faker } from "@faker-js/faker";
import * as _ from 'lodash';
import React from "react";
import { Comment } from "@/TYPES/comment"
import ErrorBoundary from '@/components/ErrorBoundary';
import { useGetPostCommentsQuery } from '@/features/api';

export interface CommentsProps {
  postId: number;
}


const Comments:React.FC<CommentsProps> = ({postId}) => {
  const {data, isLoading, isError} = useGetPostCommentsQuery(postId);
  return (
    <>
      {isLoading && (
        <>
          <h1>Loading Comments...</h1>
        </>
      )}
      {data && data.length > 0 && data.map((comment, index) => (
        <ErrorBoundary key={`commentId${index}`}>
          <CommentBlock commentDetails={comment} leftAligned={index % 2 === 0} />
        </ErrorBoundary>
      ))}
    </>
  )
}



export default Comments

type CommentBlockProps = {
  commentDetails: Comment;
  leftAligned: boolean;
}

type CommentAdditions = Comment & {
  userImage: string;
  cacheBuster: number;
  usersTitle: string;
  usersCompany: string;
}

function CommentBlock({commentDetails, leftAligned}: CommentBlockProps) {

  const [userDetails, setUserDetails] = React.useState<CommentAdditions | undefined>(undefined);

  React.useEffect(() => {
    try {
      /**
       * Ensures consistency when returning to this page...basically don't tip our hand at using faker behind the scenes.
       */
      faker.seed(`${commentDetails.id}_${commentDetails.postId}`);
      /**
       * This is here to grab a random profile picture for the user since one does not return from the API
       */
      setUserDetails(state => {
        return {
          ...state,
          ...commentDetails,
          cacheBuster: faker.datatype.number({min: 0, max: 1337}),
          userImage: faker.image.avatar(),
          usersTitle: faker.name.jobTitle(),
          usersCompany: faker.company.companyName(),
        }
      });
      console.log()
    } catch (err) {
      console.error('Error fetching user details...');
      console.error(err);
    }
  }, [commentDetails]);

  const commentBodyBlock = React.useMemo(() => {
    if(!userDetails) return (
      <></>
    )
    return (
      <div className="relative lg:ml-10">
        <svg
          className="absolute top-0 left-0 -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 144 144"
          aria-hidden="true"
        >
          <path
            strokeWidth={2}
            d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
          />
        </svg>
        <blockquote className="relative">
          <div className="text-2xl leading-9 font-medium text-gray-900">
            <p>
              {userDetails.body}
            </p>
          </div>
          <footer className="mt-8">
            <div className="flex">
              <div className="shrink-0 lg:hidden">
                <img
                  className="h-12 w-12 rounded-full"
                  src={`${userDetails.userImage}?cacheBuster=${userDetails.cacheBuster}`}
                  alt=""
                />
              </div>
              <div className="ml-4 lg:ml-0">
                <div className="text-base font-medium text-gray-900">
                  {userDetails?.name ?? "NAME BROKE"}
                </div>
                <div className="text-base font-medium text-indigo-600">
                  {`${userDetails.usersCompany} - ${userDetails.usersTitle}`}
                </div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    )
  }, [userDetails]);

  const profileBlock = React.useMemo(() => {
    return (
      <div className="hidden lg:block lg:shrink-0">
        {userDetails && (
          <img
            className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
            src={`${userDetails.userImage}?cacheBuster=${userDetails.cacheBuster}`}
            alt=""
          />
        )}
      </div>
    )
  }, [userDetails])
  return (
    <>
      {userDetails && (
        <section className="bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
            <svg
              className="absolute top-full left-0 translate-x-80 -translate-y-24 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={784} height={404} fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)" />
            </svg>

            <svg
              className="hidden lg:block absolute right-full top-1/2 translate-x-1/2 -translate-y-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="56409614-3d62-4985-9a10-7ca758a8f4f0"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={784} fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />
            </svg>

            <div className="relative lg:flex lg:items-center">
              {leftAligned && (
                <>
                  {commentBodyBlock}
                </>
              )}
              {profileBlock}
              {!leftAligned && (
                <>
                  {commentBodyBlock}
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
