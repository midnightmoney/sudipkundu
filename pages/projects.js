import React from 'react';
import Head from 'next/head';
import { projectsDB } from '../data/projects.data';
import { Layout, ProjectCard } from '../components';

const projects = () => {
  return (
    <Layout>
      <Head>
        <title>Sudip Kundu | Projects</title>
      </Head>
      <h1 className='font-bold text-2xl text-cyan-600'>Projects</h1>
      <span>
        Over the past 6 months I have been learning web dev and applying my
        knowledge to build projects.
      </span>
      <div className='flex flex-col gap-4 my-4'>
        {projectsDB.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </Layout>
  );
};

export default projects;
