import Image from 'next/image';
import { PrimaryButton } from './index';

export const BlogCard = ({ blog }) => {
  const { blogID, name, date, readTime, teaser, live, previewImage } = blog;
  return (
    <div className='flex flex-col border pt-3 px-5 rounded-xl'>
      <div className='relative w-full h-48 350px:h-64 550px:h-80 666px:h-80 mx-auto overflow-hidden 550px:mb-2'>
        <Image
          src={previewImage}
          alt={name}
          fill
          style={{
            objectFit: 'contain',
          }}
          priority={blogID < 3 ? true : false}
        />
      </div>
      <h2 className='text-cyan-600 font-bold text-xl 500px:text-lg'>{name}</h2>
      <span className='text-sm mb-2'>
        {date} - {readTime}
      </span>
      <article>{teaser}..</article>
      <span className='flex flex-row gap-4 m-auto my-1.5'>
        <a href={live} target='_blank' rel='noopener noreferrer'>
          <PrimaryButton label='Read More...' />
        </a>
      </span>
    </div>
  );
};
