import React from 'react'
import { Box, Card, Container, Title, Ul, Grid } from './styles'

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
      <Title>
        Habilidades
      </Title>
      <Grid>

        <Card>
          <h3>FrontEnd</h3>
          <Box>
            <section>
              <h5>Languages</h5>
              <Ul>
                <li> <ImHtmlFive2 color='white' /> HTML </li>
                <li> <SiJavascript color='white' />JavaScript </li>
                <li> <ImCss3 color='white' />CSS </li>
                <li> <IoLogoSass color='white' /> Sass</li>
              </Ul>
            </section>
            <section>
              <h5>Frameworks <br /> / <br /> Libraries</h5>

              <Ul>
                <li> <DiReact color='white' />React</li>
                <li> <SiNextdotjs color='white' />Next</li>
                <li> <SiVite color='white' />Vite</li>
                <li><SiLaravel color='white' />Laravel</li>
                <li><DiMaterializecss color='white' />Materialize</li>
                <li><SiBootstrap color='white' />Bootstrap</li>
                <li><SiTailwindcss color='white' />Tailwind</li>

              </Ul>
            </section>

          </Box>
        </Card>
        <Card>
          <h3>Backend</h3>

          <Box>
            <section>
              <h5>Languages</h5>
              <Ul>
                <li><IoLogoPython /> Python </li>
                <li> <SiJavascript color='white' />JavaScript </li>
                <li> <FaPhp /> PHP </li>
              </Ul>
            </section>

            <section>
              <h5>Frameworks</h5>
              <Ul>
                <li><SiLaravel />Laravel</li>
                <li><SiDjango />Django</li>
                <li><GrNode />Express</li>
              </Ul>
            </section>

            <section>
              <h5>Databases</h5>
              <Ul>
                <li><GrMysql />MySQL</li>
                <li><SiPostgresql />PostgreSQL</li>
                <li><SiSqlite />SQLite3</li>
              </Ul>
            </section>
          </Box>
        </Card>
        <Card>
          <h3>Web 3.0</h3>

          <Box>
            <section>
              <h5>Languages</h5>
              <Ul>
                <li><SiSolidity /> Solidity </li>
              </Ul>
            </section>

            <section>
              <h5>Libraries</h5>
              <Ul>
                <li><IoLogoNodejs />Truffle</li>

              </Ul>
            </section>

          </Box>
        </Card>
      </Grid>
    </Container>
  )
}
