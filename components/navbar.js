import Link from "next/link";
import Image from "next/image";


const GeneralNav = () => {
  return(
    <ul>
      <Link href='/'>
      <Image src='/favicon.ico' alt="logo"/>
      </Link>
    </ul>
  )
}