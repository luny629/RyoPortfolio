import { Title } from '../Common/Title';
import { Post } from './Post';
import { PostType } from '@/types/PostType';
import { FC } from 'react';
import Skills from './Skills';

interface IBlogProps {
  Posts: [PostType];
}

export const Blog: FC<IBlogProps> = ({ Posts }) => {
  return (
    <div
      className="flex flex-col items-center justify-center md:justify-start md:items-start max-w-7xl w-full mx-auto p-5 md:p-0"
      id="blog"
    >
      <Title num={3} title="Skills" />

      <div className="flex flex-wrap justify-between mt-10">
        {/* {Posts.slice(0, 3).map(post => {
          // @ts-ignore
          return <Post key={post.data.post.id} post={post.data?.post} />;
        })} */}
        <Skills />
      </div>
    </div>
  );
};
