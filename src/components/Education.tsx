import { Title } from './Common/Title';
import data from '@/data';
import Image from 'next/image';
import React from 'react';
export const Education = () => {
  return (
    <div
      className="flex flex-col items-center justify-center max-w-7xl w-full mx-auto p-5 md:p-0"
      id="education"
    >
      <Title num={4} title="Education" />

      <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start">
        <div className="flex flex-col">
          <p className="mt-10 text-3xl text-textDark  z-10">
            National University of Singapore <br />
            Bachelor of Computer Science
          </p>
          <p className="mt-10 text-xl text-textDark md:w-1/2 z-10">
            <br /> 04/2012-04/2016 <br /> My major skill is computer science and
            have received Bachelor of computer science
          </p>
        </div>
        <Image
          alt={data.name}
          className="object-contain relative mx-auto mt-20 border-2 rounded-full md:mt-0 md:ml-20 w-80 h-80 border-neon"
          height={300}
          src={data.universityImage}
          width={300}
        />
      </div>
    </div>
  );
};
