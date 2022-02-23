import {faker} from "@faker-js/faker";
import { CameraIcon } from '@heroicons/react/solid';
import dayjs from 'dayjs';
import Link from "next/link";
import React from "react";
import { useGetPostsQuery } from '@/features/api';


export interface AuthorBioProps {
  authorId: number;
}

const AuthorBio:React.FC<AuthorBioProps> = ({authorId}) => {
  const { data, isLoading, isError } = useGetPostsQuery()
  faker.seed(authorId);
  const firstName = faker.name.firstName('female');
  const lastName = faker.name.lastName();
  const companyName = faker.company.companyName();
  const userDetails = {
    firstName,
    lastName,
    companyName,
    slogan: faker.company.bs(),
    email: faker.internet.email(firstName, lastName),
    profileImage: faker.image.unsplash.people(1184, 1376, 'female ceo')
  }

  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute inset-y-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Case Study</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet {userDetails.firstName}
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src={`${userDetails.profileImage}?cacheBuster=${faker.datatype.number()}`}
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-2">Photograph by {`${faker.name.findName()}`}</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                {faker.lorem.paragraph(faker.datatype.number({min: 1, max: 4}))}
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                {faker.lorem.paragraph(faker.datatype.number({min: 1, max: 4}))}
              </p>
              <p>
                {faker.lorem.paragraph(faker.datatype.number({min: 1, max: 4}))}
              </p>
              <p>
                {faker.lorem.paragraph(faker.datatype.number({min: 1, max: 4}))}
              </p>
              <ul role="list">
                <li>{faker.lorem.lines(1)}</li>
                <li>{faker.lorem.lines(1)}</li>
                <li>{faker.lorem.lines(1)}</li>
                <li>{faker.lorem.lines(1)}</li>
              </ul>
              <p>
                {faker.lorem.paragraph(faker.datatype.number({min: 1, max: 4}))}
              </p>
              <h3>How we helped</h3>
              <p>
                {faker.lorem.paragraph(faker.datatype.number({min: 1, max: 4}))}
              </p>
              <p>
                {faker.lorem.paragraph(faker.datatype.number({min: 1, max: 4}))}
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div className={"mt-12"}>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Musings</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Other articles by {userDetails.firstName}
            </h3>
          </div>
        </div>
        <div className="mt-4 lg:grid lg:grid-cols-1 lg-gap-8">
          <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {data && data.slice(0,6).map((post, index) => (
              <li key={post.id} className="relative">
                <Link href={`/blog/post/${post.id}`}>
                  <a href={`/blog/post/${post.id}`}>
                    <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                      <img src={faker.image.business()} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                    <span className="sr-only">
                      Read
                    </span>
                    </div>
                    <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{post.title}</p>
                    <p className="block text-sm font-medium text-gray-500 pointer-events-none">{dayjs(faker.date.recent(30)).format('MM/DD/YYYY')}</p>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AuthorBio
