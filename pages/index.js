/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Layout } from "../components/PageLayout";
import { skillsDB } from "../data/skills.data";

export default function Home() {
  return (
    <Layout>
      <div className="relative w-60 h-60 mx-auto rounded-full overflow-hidden">
        <Image
          src="/sudipkundu.jpg"
          alt="Sudip Kundu"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="text-4xl font-medium flex flex-wrap justify-center gap-4 my-4">
        <span className="text-slate-500"> Hi! I'm </span>
        <span className="text-slate-900"> Sudip Kundu</span>
        <span className="text-cyan-600"> A Web Developer </span>
      </div>
      <article className="text-lg font-sans md:px-12 sm:px-8 px-2 text-center my-2">
        I graduated in 2021 with a bachelor's in Civil Engineering from Manipal
        Institute of Technology. After that, I was working as a Programmer
        Analyst and also exploring different tech domains, I wanted to make a
        portfolio website of my own back in December 2021 and that's when I
        happen to fumble upon web development, Since then I really liked it, and
        after giving a month into web dev, I finally decided to pursue it
        full-time, I also got myself enrolled in a web dev bootcamp called
        neogCamp, since then I've been learning and building projects.
      </article>
      <h2 className="font-medium text-3xl text-center mt-10">My Skills</h2>
      <div className="flex flex-wrap gap-8 justify-center items-center my-6">
        {skillsDB.map((skill, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="relative w-12 h-12">
              <Image
                src={`/skills/${skill}.svg`}
                alt={skill}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-sm">{skill}</h3>
          </div>
        ))}
      </div>
    </Layout>
  );
}
