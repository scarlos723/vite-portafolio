import { OneTime } from '../Animations/OneTime'
import { list } from './listExperience'
import './styles.css'
import circlesImg from '../../assets/images/circles.webp'
const Experience = () => {
  return (
    <div className='relative'>
      <div
        className='w-full h-[100vh] my-20 absolute top-0 left-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed'
        style={{
          backgroundImage: `url(${circlesImg})`,
          filter: 'blur(10px)',
          backgroundSize: '120%'
        }}
      ></div>
      <div className='bg-black bg-opacity-60 backdrop-blur-2xl'>
        <section className='container relative z-10 containe min-h-[100vh]'>
          <div>
            <OneTime
              className='text-white text-center mb-20'
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <h1>Experiencia</h1>
            </OneTime>
          </div>
          <div className='experience-card bg-black bg-opacity-70 hover:bg-opacity-100'>
            <div className='grid lg:grid-cols-9 gap-4 p-2 lg:p-10 lg:gap-10'>
              {list.map((item, index) => (
                <OneTime
                  initial={{ opacity: 0, y: 100, x: index % 2 === 0 ? 100 : -100 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: 0.2 * index, duration: 1 }}
                  className={item.className}
                >
                  <article
                    className={
                      'text-balance box-content border border-gray-50 border-opacity-20 bg-opacity-10 rounded-xl p-10 lg:w-full '
                    }
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
                  </article>
                </OneTime>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Experience
