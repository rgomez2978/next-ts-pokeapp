import Image from "next/image";
import NextLink from "next/link"
import { Link, Spacer, Text, useTheme } from "@nextui-org/react"


export const Navbar = () => {

  const { theme } = useTheme();

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '5px 20px',
      marginBottom: '40px',
      backgroundColor: theme?.colors.gray900.value,
    }}>

      <NextLink href='/' passHref>
        <Link>
          <Image
            src="/img/logo.png"
            alt="Icono de la app"
            width={180}
            height={80}
          />
        </Link>
      </NextLink>

      {/* <Text color="white" h2>P</Text>
          <Text color="white" h3>okemon</Text> */}

      <Spacer css={{ flex: 1 }} />
      <NextLink href='/favorites' passHref>
        <Link>
          {/* <Text color="white">Favoritos</Text> */}
          <Image
            src="/img/pokeball.svg"
            alt="Icono de la app"
            width={140}
            height={60}
          />
        </Link>
      </NextLink>

    </div>
  )
}