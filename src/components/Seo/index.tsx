import { Helmet } from 'react-helmet'
//import { useLocation } from 'react-router-dom'
import defaultImage from '../../assets/images/bcat-logo.png'

interface SeoProps {
  title?: string
  description?: string
  keywords?: string[]
  imageUrl?: string
}

interface Seo {
  title: string
  description: string
  titleTemplate: string
  image: string
  url: string
}

export default function Seo({
  title = 'Carlos Sánchez',
  description = 'Desarrollador Full Stack especializado en React, TypeScript y tecnologías cloud. Experiencia en arquitecturas escalables y DevOps.',
  imageUrl,
  keywords
}: SeoProps) {
  //const { pathname } = useLocation()
  const url = 'https://vite-portafolio-ten.vercel.app'

  const seo: Seo = {
    title,
    description,
    titleTemplate: '%s | Carlos Sanchez',
    image: imageUrl || defaultImage,
    // url: `${url}${pathname}`
    url: `${url}`
  }
  const defaultKeywords = [
    'SRE',
    'Developer',
    'Desarrollador tiempo completo',
    'DevOps',
    'Backend',
    'Desarrollo Web',
    'Web Developer',
    'Frontend',
    'Desarrollador',
    'React',
    'Desarrollador con experiencia',
    'AWS',
    'Terraform'
  ]
  return (
    <Helmet
      title={seo.title}
      titleTemplate={seo.titleTemplate}
    >
      <meta
        name='description'
        content={seo.description}
      />
      {/* <meta name='image' content={seo.image} /> */}
      <link
        rel='canonical'
        href={url}
      />
      <meta
        name='keywords'
        content={keywords ? keywords.join(', ') : defaultKeywords.join(', ')}
      />
      <OpenGraph seo={seo}></OpenGraph>
      <TwitterCard
        seo={seo}
        tagUser='@723Cartman'
      ></TwitterCard>
      <LinkedIn />
    </Helmet>
  )
}

const OpenGraph = (props: { seo: Seo; appFbId?: string }) => {
  const { seo, appFbId } = props
  return (
    <>
      <meta
        property='og:title'
        content={seo.title}
      />
      <meta
        property='og:description'
        content={seo.description}
      />
      <meta
        property='og:site_name'
        content='Carlos Sanchez'
      />
      <meta
        property='og:locale'
        content='es_ES'
      />
      <meta
        property='og:url'
        content={seo.url}
      />
      <meta
        property='og:image'
        content={seo.image}
      />
      <meta
        property='og:type'
        content='website'
      />
      {appFbId && (
        <meta
          property='fb:app_id'
          content={appFbId}
        />
      )}
    </>
  )
}

const TwitterCard = (props: { seo: Seo; tagUser: string }) => {
  const { seo, tagUser } = props
  return (
    <>
      <meta
        name='twitter:title'
        content={seo.title}
      />
      <meta
        name='twitter:description'
        content={seo.description}
      />
      <meta
        name='twitter:site'
        content={tagUser}
      />
      <meta
        name='twitter:creator'
        content={tagUser}
      />
      <meta
        name='twitter:image'
        content={seo.image}
      />
      <meta
        property='twitter:url'
        content={seo.url}
      />
      <meta
        name='twitter:card'
        content='summary_large_image'
      />
    </>
  )
}

const LinkedIn = () => {
  return (
    <>
      {/* LinkedIn específico - evita duplicar meta tags de OpenGraph */}
      <meta
        property='article:author'
        content='https://www.linkedin.com/in/carlos-sanchez-69b277196/'
      />
      <meta
        name='author'
        content='Carlos Sanchez'
      />
    </>
  )
}
