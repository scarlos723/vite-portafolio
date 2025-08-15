import { list } from "./listExperience";
import "./styles.css";
export const Experience = () => {
  return (
    <div className="relative max-w-screen overflow-hidden pb-2 bg-black/5 backdrop-blur-xl ">
      <div>
        <section className="container relative z-10 containe min-h-[100vh] pb-10">
          <h2 className="mt-20 text-3xl lg:text-5xl text-center font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-20">
            Experiencia
          </h2>

          <div className="experience-card bg-black bg-opacity-70 hover:bg-opacity-100">
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4 p-2 lg:p-10 lg:gap-6 auto-rows-auto">
              {list.map((item, index) => (
                <div key={index} className={`${item.className} h-fit`}>
                  <article
                    className={
                      "group relative overflow-hidden text-balance border border-gray-600 border-opacity-40 bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-md rounded-2xl p-6 lg:p-8 h-full hover:border-blue-400/60 transition-all duration-500 hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-500/20 hover:from-gray-800/90 hover:to-gray-900/90"
                    }
                  >
                    {/* Efecto de brillo en hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                    <div className="relative z-10 grid lg:flex items-start lg:items-center gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <h4 className="text-left uppercase text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-400 transition-all duration-300">
                          {item.company}
                        </h4>
                      </div>
                      <div className="text-left leading-tight flex-grow">
                        <h5 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                          {item.position}
                        </h5>
                        <small className="text-blue-400 font-medium text-sm group-hover:text-blue-300 transition-colors duration-300">
                          {item.date}
                        </small>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <ul className="space-y-3">
                        {item.responsabilities.map((responsability, index) => (
                          <li
                            className="flex items-start gap-3 text-left group/item"
                            key={index}
                          >
                            <span className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 group-hover/item:scale-125 transition-transform duration-200"></span>
                            <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                              {responsability}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
