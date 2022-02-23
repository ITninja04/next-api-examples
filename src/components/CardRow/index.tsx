import React from "react";
import BlogCard, { BlogCardProps, LoadingBlogCard } from 'components/BlogCard';

export interface CardRowProps {
  posts: BlogCardProps[];
}


const CardRow:React.FC<CardRowProps> = ({posts}) => {
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {posts && posts.map((post, index) => (
        <BlogCard key={`post_${index}`} {...post} />
      ))}
    </div>
  )
}

export const LoadingCardRow: React.FC = () => {
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {(
        Array.from(Array(12).keys()).map((index) => (
          <LoadingBlogCard key={`loader_${index}`} />
        ))
      )}
    </div>
  )
}

export default CardRow
