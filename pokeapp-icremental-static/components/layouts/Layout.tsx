import Head from "next/head"
import { FC, ReactNode } from "react"
import { Navbar } from "../ui";

type Props = {
  children: ReactNode;
  title?: string;
}

const origin = (typeof window === 'undefined' ? '' : window.location)

export const Layout: FC<Props> = ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{title || 'Pokemon APP'}</title>
        <meta name="author" content="Ronald Gomez" />
        <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex `} />

        {/* Configuracion para compartir enlace en redes sociales */}
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '0px 20px',
      }}>
        {children}
      </main>

    </>

  )
}