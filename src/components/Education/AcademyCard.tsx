import { HiCheckCircle, HiClock } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import styles from "./styles.module.css";

interface Props {
  name: string;
  location: string;
  degree: string;
  period: string;
  status: "completed" | "in-progress";
  description?: string;
}

export const AcademyCard = (props: Props) => {
  const isCompleted = props.status === "completed";

  return (
    <article className={`${styles.timelineItem}`}>
      {/* Timeline Dot */}
      <div
        className={`${styles.timelineDot} ${
          isCompleted ? styles.dotCompleted : styles.dotInProgress
        }`}
      >
        {isCompleted ? (
          <HiCheckCircle
            className="absolute inset-0 m-auto text-white"
            size={16}
          />
        ) : (
          <HiClock className="absolute inset-0 m-auto text-white" size={16} />
        )}
      </div>

      {/* Card Content */}
      <div
        className={`${styles.academyCard} relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-700/50 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10`}
      >
        {/* Status Badge */}
        <div className="flex items-center justify-between mb-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              isCompleted
                ? "bg-green-500/20 text-green-300 border border-green-400/30"
                : "bg-amber-500/20 text-amber-300 border border-amber-400/30"
            }`}
          >
            {isCompleted ? "✓ Completado" : "⏳ En curso"}
          </span>
          <span className="text-sm text-gray-400 font-medium">
            {props.period}
          </span>
        </div>

        {/* Institution */}
        <h4 className="text-xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {props.name}
        </h4>

        {/* Degree */}
        <p className="text-gray-300 text-base font-medium mb-3 leading-relaxed">
          {props.degree}
        </p>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-400 mb-3">
          <MdLocationOn className="text-blue-400" size={18} />
          <span className="text-sm">{props.location}</span>
        </div>

        {/* Description */}
        {props.description && (
          <p className="text-gray-400 text-sm leading-relaxed mt-3 pt-3 border-t border-gray-700/50">
            {props.description}
          </p>
        )}
      </div>
    </article>
  );
};
