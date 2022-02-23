import { faker }  from "@faker-js/faker";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from 'next/router';
import React from "react";
import { Post } from '../../types';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { GetFakeUser } from '@/utils/index';

export type BlogCardProps = Post & {
  photo?: string;
  cardCreatedDate?: string;
  cardTimeToReadMin?: string;
};

const BlogCard:React.FC<BlogCardProps> = (blogPost) => {
  const [blogContent, setBlogContent] = React.useState<BlogCardProps | undefined>();
  const {users, hasUsers} = useTypedSelector(e => e.users);



  React.useEffect(() => {
    try {
      faker.seed(`blog_card_${blogPost?.id}`);

      const fakerCacheBuster = faker.datatype.number({min: 1337, max: Number.MAX_VALUE});
      const postDate = faker.date.recent(5);

      const fakeData = {
        photo: `${faker.image.business(undefined, undefined, true)}?cacheBuster=${fakerCacheBuster}`,
        cardCreatedDate: dayjs(faker.date.recent(5)).format('MM/DD/YYYY'),
        cardTimeToReadMin: `${faker.datatype.number({min: 4, max: 86})}`,
      }

      let user = users.find(u => u.id === blogPost.userId);
      if(!user) {
        GetFakeUser(`blogPost_${blogPost.id}`).then((user) =>
        {
          setBlogContent(content => {
            return {
              ...blogPost,
              ...content,
              ...fakeData,
              usersName: user?.username ?? "",
              profileImage: user?.profilePicture ?? "",
            }
          })
        })
      } else {
        setBlogContent(content => {
          return {
            ...blogPost,
            ...content,
            ...fakeData,
            usersName: user?.username ?? "",
            profileImage: user?.profilePicture ?? "",
          }
        })
      }
    }catch (_err) {
      //just tossing it aside...in prod would capture and action it.
    }


  }, [blogPost, users, ])



  if(!blogContent) return <LoadingBlogCard />
  return (
    <div className="flex flex-col rounded-2xl shadow overflow-hidden">
      <div className="shrink-0">
        <img className="h-48 w-full object-cover" src={blogContent.photo} alt="" />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <Link href={`/blog/category/${faker.word.noun()}`}>
              <a className="hover:underline">
                Blog Post
              </a>
            </Link>
          </p>
          <Link href={`/blog/post/${blogContent.id}`}>
            <a href={`/blog/post/${blogContent.id}`} className="block mt-2">
              <p className="sm:text-sm md:text-md lg:text-xl font-semibold text-gray-900">
                {blogContent.title ?? "..."}
              </p>
              <p className="mt-3 text-base text-gray-500 line-clamp-4">
                {blogContent.body ?? "..."}
              </p>
            </a>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <div className="shrink-0">
            <Link href={`/blog/author/${blogContent.userId}`}>
              <a>
                <span className="sr-only">{blogContent.usersName ?? ""}</span>
                <img className="h-10 w-10 rounded-full" src={blogContent.profileImage} alt="" />
              </a>
            </Link>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <Link href={`/blog/author/${blogContent.userId}`}>
                <a href={`/blog/author/${blogContent.userId}`} className="hover:underline">
                  {blogContent.usersName ?? ""}
                </a>
              </Link>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <span>{blogContent.cardCreatedDate ?? dayjs(new Date()).format('MM/DD/YYYY')}</span>
              <span aria-hidden="true">· </span>
              <span>About {blogContent.cardTimeToReadMin} min. read </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard


export function LoadingBlogCard() {
  return (
    <div className="flex flex-col rounded-2xl shadow overflow-hidden animate-pulse">
      <div className="space-x-4 bg-slate-700 h-48 w-full object-cover grid grid-cols-1 grid-rows-1">
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="grid grid-cols-12 gap-4">
            <div className="h-2 bg-slate-700 rounded col-span-2 mb-2"></div>
            <div className="h-2 bg-slate-700 rounded col-span-2 mb-2"></div>
          </div>
          <div className="grid  grid-cols-12 gap-4">
            <div className="h-3 bg-slate-700 rounded col-span-8 mb-3"></div>
          </div>
          <div className="grid  grid-cols-12 gap-4">
            <div className="h-2 bg-slate-700 rounded col-span-10"></div>
            <div className="h-2 bg-slate-700 rounded col-span-12"></div>
            <div className="h-2 bg-slate-700 rounded col-span-11"></div>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <div className="shrink-0">
              <div className="h-10 w-10 rounded-full bg-slate-700"></div>
          </div>
          <div className="ml-3 w-1/2">
            <div className="text-sm font-medium text-gray-900">
              <div className="grid  grid-cols-8 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-4 mb-2"></div>
                <div className="h-2 bg-slate-700 rounded col-span-3"></div>
              </div>
              <div className="grid  grid-cols-8 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


