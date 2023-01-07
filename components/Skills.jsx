import Image from 'next/image';
import { skillsDB } from '../data/skills.data';

const Skill = ({ skill }) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='relative w-12 h-12'>
        <Image src={`/skills/${skill}.svg`} alt={skill} fill />
      </div>
      <h3 className='text-sm'>{skill}</h3>
    </div>
  );
};

export const Skills = () => {
  return (
    <>
      <h2 className='font-medium text-3xl text-center mt-10'>My Skills</h2>
      <div className='flex flex-wrap gap-8 justify-center items-center my-6 max-w-lg mx-auto'>
        {skillsDB.map((skill, i) => (
          <Skill key={i} skill={skill} />
        ))}
      </div>
    </>
  );
};
