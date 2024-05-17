import { list } from './listExperience'
import './styles.css'
import { motion } from 'framer-motion'
const Experience = () => {
  return (
    <section className='container relative z-10 containe min-h-[100dvh]'>
      <div>
        <motion.h1
          className='text-white text-center mb-20'
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Experiencia
        </motion.h1>
      </div>
      <div className='experience-card '>
        <div className='grid lg:grid-cols-9 gap-4 p-2 lg:p-10 lg:gap-10'>
          {list.map((item, index) => (
            <motion.article
              initial={{ opacity: 0, y: 100, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 1 }}
              key={index}
              className={`text-balance box-content bg-gray-100 bg-opacity-10 rounded-xl p-10 lg:w-full ${item.className}`}
            >
              <div className='grid lg:flex items-center gap-4'>
                <h4 className='text-left uppercase text-4xl'>{item.company}</h4>
                <div className='text-left leading-none'>
                  <h5>{item.position}</h5>
                  <small>{item.date}</small>
                </div>
              </div>
              <ul className='list-disc mt-10'>
                {item.responsabilities.map((responsability, index) => (
                  <li
                    className='text-left'
                    key={index}
                  >
                    <p>{responsability}</p>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
