import { HiOutlineAcademicCap } from "react-icons/hi";
import { RiPresentationLine } from "react-icons/ri";
import { AcademyCard } from "./AcademyCard";
import { CourseCard } from "./CourseCard";
import { academicFormations, complementaryCourses } from "./educationData";
import styles from "./styles.module.css";

const Education = () => {
  return (
    <section className="py-20">
      <div className="container">
        {/* Section Title */}
        <h2 className="text-center mb-16 text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Formación Académica
        </h2>

        <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-start max-w-7xl mx-auto">
          {/* Academic Education Section */}
          <div>
            <section className="group relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-black/95 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-gray-600/40 hover:border-blue-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

              {/* Section Header */}
              <div className="relative z-10 flex gap-4 items-center mb-8">
                <div className="p-3 bg-blue-500/20 rounded-2xl group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110">
                  <HiOutlineAcademicCap className="text-blue-400" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Educación Formal
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">Grados académicos y títulos universitarios</p>
                </div>
              </div>

              {/* Timeline */}
              <div className={`${styles.timeline} relative z-10`}>
                {academicFormations.map((formation, index) => (
                  <AcademyCard
                    key={index}
                    name={formation.institution}
                    degree={formation.degree}
                    location={formation.location}
                    period={formation.period}
                    status={formation.status}
                    description={formation.description}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Complementary Courses Section */}
          <div>
            <section className="group relative overflow-hidden bg-gradient-to-br from-purple-900/90 to-black/95 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-gray-600/40 hover:border-purple-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

              {/* Section Header */}
              <div className="relative z-10 flex items-center gap-4 mb-8">
                <div className="p-3 bg-purple-500/20 rounded-2xl group-hover:bg-purple-500/30 transition-all duration-300 group-hover:scale-110">
                  <RiPresentationLine className="text-purple-400" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Cursos y Certificaciones
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">Formación complementaria especializada</p>
                </div>
              </div>

              {/* Courses Grid */}
              <div className="relative z-10 space-y-4">
                {complementaryCourses.map((course, index) => (
                  <CourseCard
                    key={index}
                    institution={course.institution}
                    title={course.title}
                    url={course.url}
                    category={course.category}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
