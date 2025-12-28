import { Helmet } from "react-helmet";
//import { useLocation } from 'react-router-dom'
import defaultImage from "../../assets/images/bcat-logo.png";

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string[];
  imageUrl?: string;
}

interface Seo {
  title: string;
  description: string;
  titleTemplate: string;
  image: string;
  url: string;
}

export default function Seo({
  title = "Carlos Sánchez - DevOps Engineer & Full Stack Developer",
  description = "Ingeniero DevOps/SRE y Full Stack Developer especializado en AWS, Terraform, Docker y React. +4 años implementando arquitecturas cloud-native escalables, pipelines CI/CD automatizados y soluciones de infraestructura como código (IaC).",
  imageUrl,
  keywords,
}: SeoProps) {
  //const { pathname } = useLocation()
  const url = "https://vite-portafolio-ten.vercel.app";

  const seo: Seo = {
    title,
    description,
    titleTemplate: "%s | Carlos Sánchez - DevOps & Full Stack",
    image: imageUrl || defaultImage,
    // url: `${url}${pathname}`
    url: `${url}`,
  };
  const defaultKeywords = [
    "Carlos Sánchez",
    "DevOps Engineer",
    "SRE",
    "Full Stack Developer",
    "AWS Cloud Architect",
    "Terraform",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "GitHub Actions",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Microservicios",
    "Cloud Native",
    "Arquitectura Cloud",
    "Infraestructura como Código",
    "IaC",
    "Security Hub",
    "IAM",
    "ECS",
    "Web3",
    "Blockchain",
    "Ingeniero Electrónica",
    "Máster Ingeniería Software",
  ];

  // Schema.org JSON-LD para SEO estructurado
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Carlos Sánchez",
    jobTitle: "DevOps Engineer & Full Stack Developer",
    url: url,
    sameAs: [
      "https://github.com/scarlos723",
      "https://www.linkedin.com/in/carlos-sanchez-69b277196/",
      "https://twitter.com/723Cartman",
    ],
    knowsAbout: [
      "DevOps",
      "AWS",
      "Terraform",
      "Docker",
      "CI/CD",
      "React",
      "TypeScript",
      "Cloud Architecture",
      "Microservices",
    ],
    alumniOf: [
      {
        "@type": "Organization",
        name: "Universidad del Cauca",
      },
      {
        "@type": "Organization",
        name: "Universidad Internacional de la Rioja",
      },
    ],
    description: description,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Carlos Sánchez - Portafolio",
    url: url,
    description: description,
    author: {
      "@type": "Person",
      name: "Carlos Sánchez",
    },
    inLanguage: "es-ES",
  };

  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
      <html lang="es" />
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.url} />
      <meta
        name="keywords"
        content={keywords ? keywords.join(", ") : defaultKeywords.join(", ")}
      />

      {/* Datos estructurados Schema.org */}
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {/* Metadatos adicionales */}
      <meta name="author" content="Carlos Sánchez" />
      <meta name="language" content="Spanish" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <OpenGraph seo={seo}></OpenGraph>
      <TwitterCard seo={seo} tagUser="@723Cartman"></TwitterCard>
      <LinkedIn />
    </Helmet>
  );
}

const OpenGraph = (props: { seo: Seo; appFbId?: string }) => {
  const { seo, appFbId } = props;
  return (
    <>
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta
        property="og:site_name"
        content="Carlos Sánchez - DevOps & Full Stack Developer"
      />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:secure_url" content={seo.image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Carlos Sánchez - DevOps Engineer & Full Stack Developer"
      />
      <meta property="og:type" content="website" />
      {appFbId && <meta property="fb:app_id" content={appFbId} />}
    </>
  );
};

const TwitterCard = (props: { seo: Seo; tagUser: string }) => {
  const { seo, tagUser } = props;
  return (
    <>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={tagUser} />
      <meta name="twitter:creator" content={tagUser} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta
        name="twitter:image:alt"
        content="Carlos Sánchez - DevOps Engineer & Full Stack Developer"
      />
      <meta property="twitter:url" content={seo.url} />
    </>
  );
};

const LinkedIn = () => {
  return (
    <>
      {/* LinkedIn específico - evita duplicar meta tags de OpenGraph */}
      <meta
        property="article:author"
        content="https://www.linkedin.com/in/carlos-sanchez-69b277196/"
      />
      á
      <meta name="author" content="Carlos Sanchez" />
    </>
  );
};
