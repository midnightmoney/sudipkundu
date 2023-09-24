import Image from 'next/image';
import { PrimaryButton, SecondaryButton } from './index';

export const ProjectCard = ({ project }) => {
  const { id, name, description, tech, features, github, live, previewImage } = project;
  return (
    <div className='flex flex-col border pt-3 px-5 rounded-xl'>
      <div className='relative w-full h-48 350px:h-64 550px:h-80 666px:h-96 mx-auto overflow-hidden'>
        <Image
          src={previewImage}
          alt={name}
          fill
          style={{
            objectFit: 'contain',
          }}
          priority={id < 3 ? true : false}
        />
      </div>
      <h2 className='text-cyan-600 font-bold text-xl 500px:text-lg'>{name}</h2>
      <h3 className='text-sm mb-2'>
        {tech.map((item, i) => (
          <span key={i} className={item.isNew ? 'font-semibold' : ''}>
            {item.name}
            {i === tech.length - 1 ? '.' : ', '}
          </span>
        ))}
      </h3>
      <article>
        {description}. <br />
        <span className='font-semibold'>Features</span> : {features}.
      </article>
      <span className='flex flex-row gap-4 m-auto my-1.5'>
        <a href={github} target='_blank' rel='noopener noreferrer'>
          <SecondaryButton label='View Source' />
        </a>
        <a href={live} target='_blank' rel='noopener noreferrer'>
          <PrimaryButton label='Live Project' />
        </a>
      </span>
    </div>
  );
};
