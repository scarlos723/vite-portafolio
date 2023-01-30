import React from 'react'
import { Container, ExpandSection, MiniCard } from './styles'

// Icons

import {
  ImHtmlFive2,
  ImCss3
} from 'react-icons/im'
import {
  IoLogoSass,
  IoLogoPython,
  IoLogoNodejs
} from 'react-icons/io'
import {
  SiJavascript,
  SiLaravel,
  SiBootstrap,
  SiDjango,
  SiPostgresql,
  SiSqlite,
  SiTailwindcss,
  SiNextdotjs,
  SiVite,
  SiSolidity
} from 'react-icons/si'
import {
  FaPhp,
  FaAws,
  FaDocker,
  FaGithub
} from 'react-icons/fa'
import {
  GrMysql, GrNode
  , GrCubes
  , GrNodes
} from 'react-icons/gr'
import {
  DiMaterializecss,
  DiReact
} from 'react-icons/di'
import {
  MdClose
} from 'react-icons/md'
const INFO_SKILLS = {
  frontend: {
    languages: [
      {
        icon: <ImHtmlFive2 />,
        name: 'HTML'
      },
      {
        icon: <SiJavascript />,
        name: 'JavaScript'
      },
      {
        icon: <ImCss3 />,
        name: 'CSS'
      },
      {
        icon: <IoLogoSass />,
        name: 'Sass'
      }
    ],
    frameworks: [
      {
        icon: <DiReact />,
        name: 'React'
      },
      {
        icon: <SiBootstrap />,
        name: 'Bootstrap'
      },
      {
        icon: <SiTailwindcss />,
        name: 'Tailwind'
      },
      {
        icon: <SiNextdotjs />,
        name: 'Next.js'
      },
      {
        icon: <SiVite />,
        name: 'Vite'
      },
      {
        icon: <DiMaterializecss />,
        name: 'Materialize'
      }
    ]
  },
  backend: {
    languages: [
      {
        icon: <IoLogoPython />,
        name: 'Python'
      },
      {
        icon: <SiJavascript />,
        name: 'JavaScript'
      },
      {
        icon: <FaPhp />,
        name: 'PHP'
      }
    ],
    frameworks: [
      {
        icon: <SiLaravel />,
        name: 'Laravel'
      },
      {
        icon: <SiDjango />,
        name: 'Django'
      },
      {
        icon: <IoLogoNodejs />,
        name: 'Express'
      }
    ],
    databases: [
      {
        icon: <GrMysql />,
        name: 'MySQL'
      },
      {
        icon: <SiPostgresql />,
        name: 'PostgreSQL'
      },
      {
        icon: <SiSqlite />,
        name: 'SQLite3'
      }
    ]
  },
  technologies: [
    {
      icon: <SiSolidity />,
      name: 'Solidity'
    },
    {
      icon: <FaAws />,
      name: 'Amazon Web Services'
    },
    {
      icon: <FaDocker />,
      name: 'Docker'
    },
    {
      icon: <FaGithub />,
      name: 'Github'
    },
    {
      icon: <GrNodes />,
      name: 'CI/CD With Docker, AWS and Github'
    }
  ]
}

export default function Skills () {
  const [selected, setSelected] = React.useState('backend')
  const [showExpand, setShowExpand] = React.useState(false)
  function handlerClickMiniCard (selection) {
    setShowExpand(true)
    setSelected(selection)
  }
  return (
    <Container>
      <MiniCard>
        <h2 onClick={() => setShowExpand(true)}>
          Habilidades
        </h2>
        <div className='grid'>
          <section className='front' onClick={() => handlerClickMiniCard('frontend')}>
            <DiReact />
            <h4> Frontend </h4>
          </section>

          <section className='back' onClick={() => handlerClickMiniCard('backend')}>
            <GrNode/>
            <h4>Backend</h4>
          </section>

          <section className='others' onClick={() => handlerClickMiniCard('others')}>
            <GrCubes />
            <h4>Technologies</h4>
          </section>
        </div>
      </MiniCard>
      <ExpandSection showExpand={showExpand}>
        <button className='close-btn' onClick={() => setShowExpand(false)} >
          <MdClose color='white'/>
        </button>
        <section className='tabs'>
          <h3 className={ selected === 'frontend' ? 'active' : null} onClick={() => setSelected('frontend')}>FrontEnd</h3>
          <h3 className={ selected === 'backend' ? 'active' : null} onClick={() => setSelected('backend')}>Backend</h3>
          <h3 className={ selected === 'others' ? 'active' : null} onClick={() => setSelected('others')}>Technologies</h3>
        </section>
        <section className='articles-container'>
          {
            selected === 'frontend' &&
            <article className='front'>
              <section>
                <h4>Languages</h4>
                <ul>
                  {
                    INFO_SKILLS.frontend.languages.map((language, index) => (
                      <li key={index}>
                        {language.icon}
                        <strong >
                          {language.name}
                        </strong>
                      </li>
                    ))
                  }
                </ul>
              </section>
              <section>
                <h4>Frameworks / Libraries</h4>
                <ul>
                  {
                    INFO_SKILLS.frontend.frameworks.map((framework, index) => (
                      <li key={index}>
                        {framework.icon}
                        <strong>
                          {framework.name}
                        </strong>
                      </li>
                    ))
                  }
                </ul>
              </section>
            </article>
          }
          {
            selected === 'backend' &&
            <article>
              <div>
                <section>
                  <h4>Languages</h4>
                  <ul>
                    {
                      INFO_SKILLS.backend.languages.map((language, index) => (
                        <li key={index}>
                          {language.icon}
                          <strong>{language.name}</strong>
                        </li>
                      ))
                    }
                    {/* <li>
                      <IoLogoPython />
                      <strong>Python</strong>

                    </li>
                    <li> <SiJavascript color='white' /> JavaScript </li>
                    <li> <FaPhp /> PHP </li> */}
                  </ul>
                </section>
                <section>
                  <h4>Frameworks</h4>
                  <ul>
                    {
                      INFO_SKILLS.backend.frameworks.map((framework, index) => (
                        <li key={index}>
                          {framework.icon}
                          <strong>{framework.name}</strong>
                        </li>
                      ))
                    }
                    {/* <li><SiLaravel /> Laravel</li>
                    <li><SiDjango /> Django</li>
                    <li><GrNode /> Express</li> */}
                  </ul>
                </section>
                <section>
                  <h4>Databases</h4>
                  <ul>
                    {
                      INFO_SKILLS.backend.databases.map((database, index) => (
                        <li key={index}>
                          {database.icon}
                          <strong>{database.name}</strong>
                        </li>
                      ))
                    }
                    {/* <li><GrMysql /> MySQL</li>
                    <li><SiPostgresql /> PostgreSQL</li>
                    <li><SiSqlite /> SQLite3</li> */}
                  </ul>
                </section>
              </div>
            </article>
          }
          {
            selected === 'others' &&
            <article>
              <div>
                <ul>
                  {INFO_SKILLS.technologies.map((tech, index) => (
                    <li key={index}>
                      {tech.icon}
                      <strong>{tech.name}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          }
        </section>

      </ExpandSection>
    </Container>
  )
}
