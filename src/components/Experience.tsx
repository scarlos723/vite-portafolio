import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useMemo, useRef } from "react";
import { experienceData } from "../data/experience";

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // Cambiado para mejor control
  });

  // Suavizar el progreso global una sola vez
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Altura dinámica basada en cantidad de experiencias
  const sectionHeight = useMemo(() => `${experienceData.length * 100}vh`, []);

  return (
    <div
      ref={containerRef}
      className="relative pt-20"
      style={{ height: sectionHeight }}
    >
      {/* Indicador de progreso */}
      {/* <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-cyan-400 origin-left z-50"
        style={{ scaleX: smoothProgress }}
      /> */}

      <section className="sticky top-12 h-screen flex flex-col items-center  overflow-hidden perspective-1200">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-amber-200 to-blue-400 bg-clip-text text-transparent"
        >
          Experiencia
        </motion.h2>
        {experienceData.map((exp, i) => (
          <BackgroundTitle
            key={i}
            title={exp.title}
            index={i}
            total={experienceData.length}
            progress={smoothProgress}
          />
        ))}

        {/* Contenedor 3D - ¡CLAVE para el efecto! */}
        <div
          className="relative w-full max-w-3xl px-4"
          style={{
            perspective: "1200px",
            transformStyle: "preserve-3d",
          }}
        >
          {experienceData.map((exp, index) => (
            <ExperienceCard
              key={exp.title}
              experience={exp}
              index={index}
              total={experienceData.length}
              progress={smoothProgress}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

interface Experience {
  title: string;
  company: string;
  description: string;
  dates: string;
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  total: number;
  progress: ReturnType<typeof useSpring>;
}

const ExperienceCard = ({
  experience,
  index,
  total,
  progress,
}: ExperienceCardProps) => {
  const { title, company, description, dates } = experience;

  // Calcular rangos dinámicamente
  const step = 1 / total;
  const start = index * step;
  const center = start + step / 2;
  const end = (index + 1) * step;

  // Rotación 3D: entra desde 90deg, centro en 0deg, sale a -90deg
  const rotateX = useTransform(
    progress,
    [
      start - step * 0.2,
      start + step * 0.3,
      center,
      end - step * 0.3,
      end + step * 0.2,
    ],
    [90, 45, 0, -45, -90],
  );

  // Opacidad con overlap suave
  const opacity = useTransform(
    progress,
    [
      start - step * 0.1,
      start + step * 0.2,
      end - step * 0.2,
      end + step * 0.1,
    ],
    [0, 1, 1, 0],
  );

  // Escala para efecto de profundidad
  const scale = useTransform(progress, [start, center, end], [0.85, 1, 0.85]);

  // Z-index dinámico - la activa siempre arriba
  const zIndex = useTransform(
    progress,
    [start, center, end],
    [index, index + 100, index],
  );

  // Aplicar spring solo a transformaciones
  const springRotateX = useSpring(rotateX, { stiffness: 80, damping: 20 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 25 });

  return (
    <>
      <motion.article
        style={{
          rotateX: springRotateX,
          opacity,
          scale: springScale,

          transformOrigin: "center center  ", // Punto de rotación atrás
        }}
        className="absolute inset-x-0 top-0 lg:top-20 mx-auto max-w-2xl cursor-default"
      >
        <div className="relative bg-gradient-to-b  from-black/70 to-slate-800/90 border border-slate-600/50 rounded-3xl p-8 shadow-2xl overflow-hidden group hover:border-cyan-400/50 transition-colors duration-300">
          {/* Efecto de reflejo */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>

          {/* Sombra 3D dinámica */}
          <motion.div
            className="absolute -inset-2 bg-black/40 rounded-3xl -z-10 blur-xl"
            style={{
              rotateX: springRotateX,
              opacity: useTransform(opacity, [0, 1], [0, 0.5]),
            }}
          />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {title}
                </h3>
                <p className="text-cyan-400 font-medium text-lg">{company}</p>
              </div>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-slate-700/50 text-slate-300 text-sm font-mono mt-2 md:mt-0 border border-slate-600">
                {dates}
              </span>
            </div>

            <p className="text-slate-300 text-base leading-relaxed">
              <code>{description}</code>
            </p>

            {/* Indicador de progreso de tarjeta */}
            <div className="mt-6 h-1 bg-slate-700/50 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-400 to-cyan-400"
                style={{
                  scaleX: useTransform(progress, [start, center], [0, 1]),
                  transformOrigin: "left",
                }}
              />
            </div>
          </div>
        </div>
      </motion.article>
    </>
  );
};

const BackgroundTitle = (props: {
  title: string;
  progress: ReturnType<typeof useSpring>;
  index: number;
  total: number;
}) => {
  const { progress, index, title, total } = props;
  const step = 1 / total;
  const start = index * step;
  const center = start + step / 2;
  const end = (index + 1) * step;
  // Escala para efecto de profundidad
  // const scale = useTransform(progress, [start, center, end], [0.85, 1, 0.85]);

  // const rotateX = useTransform(
  //   progress,
  //   [
  //     start - step * 0.2,
  //     start + step * 0.3,
  //     center,
  //     end - step * 0.3,
  //     end + step * 0.2,
  //   ],
  //   [90, 45, 0, -45, -90],
  // );

  return (
    <motion.h2
      style={{
        opacity: useTransform(progress, [start, center, end], [0, 1, 0]),
      }}
      className="uppercase absolute z-0 top-50 lg:top-70 text-center text-white text-4xl lg:text-8xl font-extrabold"
    >
      {title}
    </motion.h2>
  );
};
