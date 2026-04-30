import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef } from "react";
import { meData } from "../data/me";

/* ──────────────────────────── Data ──────────────────────────── */

interface EducationItem {
  type: "academia" | "complementario";
  title: string;
  institution: string;
  description?: string;
  dates: string;
  link_cert?: string;
}

/* ──────────────────────────── Main section ──────────────────── */

export const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${meData.education.length * 70}vh` }}
    >
      <section className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* ── Title ── */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-10 px-8 lg:px-20 bg-linear-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent"
        >
          Educación
        </motion.h2>

        {/* ── Card stack area ── */}
        <div className="relative w-85 md:w-100 h-105">
          {meData.education.map((edu, i) => (
            <EducationCard
              key={edu.title}
              education={edu}
              index={i}
              total={meData.education.length}
              progress={smoothProgress}
            />
          ))}
        </div>

        {/* ── Scroll progress bar ── */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-linear-to-r from-cyan-400 to-violet-500 origin-left"
            style={{ scaleX: smoothProgress }}
          />
        </div>
      </section>
    </div>
  );
};

/* ──────────────────────────── Card ──────────────────────────── */

interface CardProps {
  education: EducationItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const EducationCard = ({ education, index, total, progress }: CardProps) => {
  const step = 1 / total;
  const start = index * step;
  const end = start + step;

  /*
   * Card starts on the right (x: 600) → flies to center (x: 0).
   * Once arrived it STAYS at center (0) for the rest of the scroll.
   */
  const x = useTransform(progress, [start, end], [600, 0], { clamp: true });

  /* Opacity: invisible → fully visible, stays visible once placed */
  const opacity = useTransform(progress, [start, start + step * 0.4], [0, 1], {
    clamp: true,
  });

  const antiOpacity = useTransform(progress, [start, end], [1, 0], {
    clamp: true,
  });

  /* Slight rotation while in flight, settles to 0 */
  const rotate = useTransform(progress, [start, end], [8, 0], { clamp: true });

  /* Scale: a bit smaller in the deck, full size when placed */
  const scale = useTransform(progress, [start, end], [0.92, 1], {
    clamp: true,
  });

  /* Spring smoothed values */
  const springX = useSpring(x, { stiffness: 100, damping: 22 });
  const springRotate = useSpring(rotate, { stiffness: 100, damping: 22 });
  const springScale = useSpring(scale, { stiffness: 120, damping: 24 });

  const isAcademy = education.type === "academia";
  const accentFrom = isAcademy ? "from-cyan-400" : "from-violet-400";
  const accentTo = isAcademy ? "to-blue-500" : "to-fuchsia-500";

  return (
    <>
      <motion.article
        style={{
          opacity,
          x: springX,
          rotate: springRotate,
          scale: springScale,
          zIndex: total,
        }}
        className={`absolute inset-0 mx-auto max-w-2xl cursor-default`}
      >
        <div className="relative h-full rounded-2xl p-px backdrop-blur-lg bg-linear-to-b from-slate-600/60 to-slate-800/20 group shadow-md shadow-blue-200/30">
          {/* ── Glow line top ── */}
          <div
            className={`absolute -top-px left-1/2 -translate-x-1/2 w-2/3 h-0.5 rounded-full bg-linear-to-r ${accentFrom} ${accentTo} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
          />

          <div className="relative h-full rounded-2xl bg-black/70 backdrop-blur-2xl p-6 flex flex-col overflow-hidden">
            {/* ── Subtle grid pattern overlay ── */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            {/* ── Hover glow ── */}
            <div className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl bg-linear-to-br from-cyan-500/10 via-transparent to-violet-500/10" />

            {/* ── Badge ── */}
            <span
              className={`relative z-10 self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wide mb-4 border ${
                isAcademy
                  ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/25"
                  : "bg-violet-500/10 text-violet-400 border-violet-500/25"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isAcademy ? "bg-cyan-400" : "bg-violet-400"
                } animate-pulse`}
              />
              {isAcademy ? "ACADEMIA" : "COMPLEMENTARIO"}
            </span>

            {/* ── Title ── */}
            <h3 className="relative z-10 text-base md:text-lg font-bold text-white leading-snug mb-2">
              {education.title}
            </h3>

            {/* ── Institution ── */}
            <p className="relative z-10 text-sm text-slate-400 mb-1">
              {education.institution}
            </p>

            {/* ── Date chip ── */}
            <span className="relative z-10 inline-block self-start font-mono text-xs text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-md mb-3">
              {education.dates}
            </span>

            {/* ── Description ── */}
            {education.description && (
              <p className="relative z-10 text-sm text-slate-300/80 leading-relaxed mt-auto line-clamp-4">
                {education.description}
              </p>
            )}

            {/* ── Certificate link ── */}
            {education.link_cert && (
              <a
                href={education.link_cert}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative z-10 inline-flex items-center gap-1 mt-4 text-sm font-medium bg-linear-to-r ${accentFrom} ${accentTo} bg-clip-text text-transparent hover:brightness-125 transition-all group/link`}
              >
                Ver certificado
                <svg
                  className="w-3.5 h-3.5 text-cyan-400 group-hover/link:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            )}

            {/* ── Bottom accent ── */}
            <div
              className={`absolute bottom-0 left-6 right-6 h-px bg-linear-to-r from-transparent ${
                isAcademy ? "via-cyan-500/30" : "via-violet-500/30"
              } to-transparent`}
            />
          </div>
        </div>
      </motion.article>
      <motion.article
        style={{
          zIndex: total - index,
          opacity: antiOpacity,
          x: springX,
          rotate: springRotate,
          scale: springScale,
        }}
        className={`absolute inset-0 mx-auto max-w-2xl cursor-default`}
      >
        <div className="relative h-full rounded-2xl p-px backdrop-blur-lg bg-linear-to-b from-slate-600 to-slate-800 group shadow-md shadow-blue-200/30">
          {/* ── Glow line top ── */}
          <div
            className={`absolute -top-px left-1/2 -translate-x-1/2 w-2/3 h-0.5 rounded-full bg-linear-to-r ${accentFrom} ${accentTo} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
          />

          <div className="relative h-full rounded-2xl bg-black/70 backdrop-blur-2xl p-6 flex flex-col overflow-hidden">
            {/* ── Subtle grid pattern overlay ── */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            {/* ── Hover glow ── */}
            <div className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl bg-linear-to-br from-cyan-500/10 via-transparent to-violet-500/10" />

            {/* ── Badge ── */}
            <span
              className={`relative z-10 self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wide mb-4 border ${
                isAcademy
                  ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/25"
                  : "bg-violet-500/10 text-violet-400 border-violet-500/25"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isAcademy ? "bg-cyan-400" : "bg-violet-400"
                } animate-pulse`}
              />
              {isAcademy ? "ACADEMIA" : "COMPLEMENTARIO"}
            </span>

            {/* ── Title ── */}
            <h3 className="relative z-10 text-base md:text-lg font-bold text-white leading-snug mb-2">
              {education.title}
            </h3>

            {/* ── Institution ── */}
            <p className="relative z-10 text-sm text-slate-400 mb-1">
              {education.institution}
            </p>

            {/* ── Date chip ── */}
            <span className="relative z-10 inline-block self-start font-mono text-xs text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-1 rounded-md mb-3">
              {education.dates}
            </span>

            {/* ── Description ── */}
            {education.description && (
              <p className="relative z-10 text-sm text-slate-300/80 leading-relaxed mt-auto line-clamp-4">
                {education.description}
              </p>
            )}

            {/* ── Certificate link ── */}
            {education.link_cert && (
              <a
                href={education.link_cert}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative z-10 inline-flex items-center gap-1 mt-4 text-sm font-medium bg-linear-to-r ${accentFrom} ${accentTo} bg-clip-text text-transparent hover:brightness-125 transition-all group/link`}
              >
                Ver certificado
                <svg
                  className="w-3.5 h-3.5 text-cyan-400 group-hover/link:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            )}

            {/* ── Bottom accent ── */}
            <div
              className={`absolute bottom-0 left-6 right-6 h-px bg-linear-to-r from-transparent ${
                isAcademy ? "via-cyan-500/30" : "via-violet-500/30"
              } to-transparent`}
            />
          </div>
        </div>
      </motion.article>
    </>
  );
};
