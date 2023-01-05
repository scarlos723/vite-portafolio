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
  FaPhp
} from 'react-icons/fa'
import {
  GrMysql, GrNode
} from 'react-icons/gr'
import { DiMaterializecss, DiReact } from 'react-icons/di'

export default function Skills () {
  return (
    <Container>
      <MiniCard>
        <h2>
          Habilidades
        </h2>
        <div>
          <DiReact color='#04061F' />
        </div>
      </MiniCard>

      <ExpandSection>

        <article>
          <h3>FrontEnd</h3>
          <div>
            <section>
              <h4>Languages</h4>
              <ul>
                <li> <ImHtmlFive2 color='white' /> HTML </li>
                <li> <SiJavascript color='white' />JavaScript </li>
                <li> <ImCss3 color='white' />CSS </li>
                <li> <IoLogoSass color='white' /> Sass</li>
              </ul>
            </section>
            <section>
              <hh4>Frameworks <br /> / <br /> Libraries</hh4>

              <ul>
                <li> <DiReact color='white' />React</li>
                <li> <SiNextdotjs color='white' />Next</li>
                <li> <SiVite color='white' />Vite</li>
                <li><SiLaravel color='white' />Laravel</li>
                <li><DiMaterializecss color='white' />Materialize</li>
                <li><SiBootstrap color='white' />Bootstrap</li>
                <li><SiTailwindcss color='white' />Tailwind</li>

              </ul>
            </section>

          </div>
        </article>
        <article>
          <h3>Backend</h3>

          <div>
            <section>
              <h5>Languages</h5>
              <ul>
                <li><IoLogoPython /> Python </li>
                <li> <SiJavascript color='white' />JavaScript </li>
                <li> <FaPhp /> PHP </li>
              </ul>
            </section>

            <section>
              <h5>Frameworks</h5>
              <ul>
                <li><SiLaravel />Laravel</li>
                <li><SiDjango />Django</li>
                <li><GrNode />Express</li>
              </ul>
            </section>

            <section>
              <h5>Databases</h5>
              <ul>
                <li><GrMysql />MySQL</li>
                <li><SiPostgresql />PostgreSQL</li>
                <li><SiSqlite />SQLite3</li>
              </ul>
            </section>
          </div>
        </article>
        <article>
          <h3>Web 3.0</h3>

          <div>
            <section>
              <h5>Languages</h5>
              <ul>
                <li><SiSolidity /> Solidity </li>
              </ul>
            </section>

            <section>
              <h5>Libraries</h5>
              <ul>
                <li><IoLogoNodejs />Truffle</li>

              </ul>
            </section>

          </div>
        </article>
      </ExpandSection>
    </Container>
  )
}
