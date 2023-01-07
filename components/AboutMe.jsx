/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

export const AboutMe = () => {
  return (
    <>
      <div className='relative w-60 h-60 mx-auto rounded-full overflow-hidden'>
        <Image
          src='/sudipkundu.jpg'
          alt='Sudip Kundu'
          fill
          style={{
            objectFit: 'contain',
          }}
          priority
        />
      </div>
      <div className='text-4xl font-medium flex flex-wrap justify-center gap-4 my-4'>
        <span className='text-slate-500'>Hi! I'm</span>
        <span className='text-slate-900'>Sudip Kundu</span>
        <span className='text-cyan-600'>A Web Developer</span>
      </div>
      <article className='text-lg font-sans md:px-28 sm:px-8 px-2 text-center my-2'>
        I'm a UI Engineer at Flipkart on the Partner network team. Currently, we
        are revamping the pages & adding new product features. I like to explore
        new technologies & build projects on them. In my free time, I'm learning
        data structures & algorithms and reading about core CS fundamentals.
      </article>
    </>
  );
};
