import Image from "next/image";
import logo from "/img/somente_logo_branca.svg";
import busca_frete from "/img/logo_lado.svg"
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/solid'
import { useEffect } from "react";
import { Carousel } from "../../components/carousel";
import { Describe } from "../../components/describe";
import { ButtonPerson } from "../../components/ButtonPerson";
import { useRouter } from 'next/router';
import Link from "next/link";
export default function Home() {
  const router = useRouter()

  useEffect(() => {
  }, [])

  return (
    <>
      <div >
        <div className="flex flex-col w-full pt-4 md:bg-hero-pattern bg-cover bg-hero-pattern-mobile sm:bg-auto md:bg-cover sm:bg-center bg-cover bg-no-repeat h-screen">
          {/* --- */}
          <nav className="flex justify-between items-center px-5">
            <div className="lg:w-42 w-12 my-2">
              <Image src={logo} alt="me" />
            </div>
            <ul className="flex font-light text-white text-base">
              <li className="mx-2">
                <a onClick={() => router.push('/register')} className="animate-bounce flex flex-col items-center cursor-pointer text-gray-700 w-full rounded-sm mb-2 text-semibold bg-yellow-300 lg:rounded-sm py-1 px-1 lg:py-3">Trabalhe conosco</a>
              </li>
              <li className="mx-2">
                <a href="#sobre">Sobre</a>
              </li>
            </ul>
          </nav>
          {/* --- */}
          <div className="text-center self-center rounded-full w-5/6 lg:w-4/6 bg-white py-5">
            <p className="text-xs md:text-lg lg:text-lg">Agora viva em Parnaíba! A partir de hoje, o busca frete está chegando.</p>
          </div>
          {/* <--> */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="lg:w-3/6 w-5/6">
              <Image src={busca_frete} alt="busca frete" />
            </div>
          </div>
        </div>

      </div>
      <Carousel />
      <Describe />
    </>
  );
}