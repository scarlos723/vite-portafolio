import { motion } from "motion/react";

import { meData } from "../data/me";
import { ParallaxText } from "./ParallaxText";

export const Skills = () => {
  const BASE_VELOCITY = 2;
  return (
    <motion.section
      className="relative h-dvh grid content-center overflow-hidden"
      initial={{ y: -200 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute top-20 xl:mt-40 pointer-events-none">
        <ParallaxText baseVelocity={BASE_VELOCITY}>
          {meData.skills.tecnologies.slice(0, 3).map((tech) => (
            <div className="inline-flex items-center">
              <tech.icon color={tech.color} /> &nbsp; {tech.name} &nbsp;
            </div>
          ))}
        </ParallaxText>
        <ParallaxText baseVelocity={-BASE_VELOCITY}>
          {meData.skills.tecnologies.slice(3, 6).map((tech) => (
            <div className="inline-flex items-center">
              <tech.icon color={tech.color} /> &nbsp; {tech.name} &nbsp;
            </div>
          ))}
        </ParallaxText>
        <ParallaxText baseVelocity={BASE_VELOCITY}>
          {meData.skills.tecnologies.slice(6, 9).map((tech) => (
            <div className="inline-flex items-center">
              <tech.icon color={tech.color} /> &nbsp; {tech.name} &nbsp;
            </div>
          ))}
        </ParallaxText>
        <ParallaxText baseVelocity={-BASE_VELOCITY}>
          {meData.skills.tecnologies.slice(9, 12).map((tech) => (
            <div className="inline-flex items-center">
              <tech.icon color={tech.color} /> &nbsp; {tech.name} &nbsp;
            </div>
          ))}
        </ParallaxText>
        <ParallaxText baseVelocity={BASE_VELOCITY}>
          {meData.skills.tecnologies.slice(12, 15).map((tech) => (
            <div className="inline-flex items-center">
              <tech.icon color={tech.color} /> &nbsp; {tech.name} &nbsp;
            </div>
          ))}
        </ParallaxText>
        <ParallaxText baseVelocity={-BASE_VELOCITY}>
          {meData.skills.tecnologies.slice(15, 18).map((tech) => (
            <div className="inline-flex items-center">
              <tech.icon color={tech.color} /> &nbsp; {tech.name} &nbsp;
            </div>
          ))}
        </ParallaxText>
        <ParallaxText baseVelocity={BASE_VELOCITY}>
          {meData.skills.tecnologies.slice(18, 21).map((tech) => (
            <div className="inline-flex items-center">
              <tech.icon color={tech.color} /> &nbsp; {tech.name} &nbsp;
            </div>
          ))}
        </ParallaxText>
        <ParallaxText baseVelocity={-BASE_VELOCITY}>
          {meData.skills.tecnologies.slice(21, 24).map((tech) => (
            <div className="inline-flex items-center">
              <tech.icon color={tech.color} /> &nbsp; {tech.name} &nbsp;
            </div>
          ))}
        </ParallaxText>
      </div>
      <div className="container">
        <article className="mx-auto  lg:w-150 xl:w-200 p-10 rounded-2xl shadow-xl shadow-blue-200/50  backdrop-blur-md bg-linear-to-r from-slate-900/50 to-slate-800/50 border border-slate-400/50 ">
          <h2 className="text-4xl xl:text-8xl font-bold mb-8">Skills</h2>
          <div className="grid gap-2 text-sm md:text-lg xl:text-xl">
            <code className="mb-6">{meData.skills.description.intro}</code>
            <code className="mb-6">{meData.skills.description.enjoy}</code>
            <code>{meData.skills.description.personal}</code>
          </div>
        </article>
      </div>
    </motion.section>
  );
};
