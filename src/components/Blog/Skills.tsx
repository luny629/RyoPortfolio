import Image from 'next/image';
import React from 'react';
import { SkillCardComponent } from '../mini-components/SkillCard.component';
import htmlImage from '../../../public/skills/html.png';
import cssImage from '../../../public/skills/css.png';
import jsImage from '../../../public/skills/javascript.png';
import reactImage from '../../../public/skills/react.png';
import tailwindImage from '../../../public/skills/tailwind.png';
import githubImage from '../../../public/skills/github.png';
import nextjsIcon from '../../../public/skills/nextjs-logo.png';
import laravelLogo from '../../../public/skills/laravel-logo.png';
import SolidityLogo from '../../../public/skills/solidity.png';
import RustLogo from '../../../public/skills/rust.png';
import PythonLogo from '../../../public/skills/python.png';
import CLogo from '../../../public/skills/C.png';
import NodeLogo from '../../../public/skills/nodejs.png';
import TypeLogo from '../../../public/skills/typescript.png';
import AngularLogo from '../../../public/skills/angular.png';
import SASSLogo from '../../../public/skills/SASS.png';
import DSLogo from '../../../public/skills/DS.png';

const Skills = () => {
  const skillsets = [
    {
      imageSrc: htmlImage,
      title: 'HTML',
    },
    {
      imageSrc: cssImage,
      title: 'CSS',
    },
    {
      imageSrc: jsImage,
      title: 'JavaScript',
    },
    {
      imageSrc: reactImage,
      title: 'React',
    },
    {
      imageSrc: nextjsIcon,
      title: 'NextJS',
    },
    {
      imageSrc: SolidityLogo,
      title: 'Solidity',
    },
    {
      imageSrc: laravelLogo,
      title: 'Laravel',
    },
    {
      imageSrc: githubImage,
      title: 'GitHub',
    },
    {
      imageSrc: RustLogo,
      title: 'Rust',
    },
    {
      imageSrc: PythonLogo,
      title: 'Python',
    },
    {
      imageSrc: CLogo,
      title: 'C++',
    },
    {
      imageSrc: NodeLogo,
      title: 'Node.JS',
    },
    {
      imageSrc: TypeLogo,
      title: 'Typescript',
    },
    {
      imageSrc: AngularLogo,
      title: 'Angular',
    },
    {
      imageSrc: SASSLogo,
      title: 'SASS',
    },
    {
      imageSrc: DSLogo,
      title: 'Data Structures',
    },
  ];

  return (
    <div id="skills" className="w-full p-2 ">
      {/* main container */}
      <div className="max-w-[1240px] mx-auto  justify-center h-full">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* the card container */}
          {skillsets.map((skill, index) => (
            <SkillCardComponent
              key={index}
              imageAlt={skill.title}
              imageSrc={skill.imageSrc}
              title={skill.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
