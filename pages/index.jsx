import Head from "next/head";
import Image from "next/image";
import logo from "/img/logo.png";
import busca_frete from "/img/busca_frete.png"
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/solid'
import { useEffect } from "react";
import { Carousel } from "../components/carousel";
import { Describe } from "../components/describe";
import { ButtonPerson } from "../components/ButtonPerson";
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()

  useEffect(() => {
  }, [])
  
  return (
    <>
      <Head>
        <title>Busca frete</title>
        <link rel="icon" href="/favicon.ico" />
        <script
            src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBjuqBcsXPhQEui5qk-5VQzIkNWj8P0wsI&callback=initMap&libraries=&v=weekly`}
            async
          ></script>
      </Head>
      <div >
        <div className="flex flex-col w-full bg-hero-pattern bg-cover bg-no-repeat h-screen">
          {/* --- */}
          <nav className="flex justify-between items-center px-5">
            <Image src={logo} alt="me" width="64" height="64" />
            <ul className="flex font-light text-white text-base">
              <li className="mx-2">
                <button>Serviços</button>
              </li>
              <li className="mx-2">
                <button>Sobre</button>
              </li>
              <li className="mx-2">
                <button>Contato</button>
              </li>
            </ul>
          </nav>
          {/* --- */}
          <div className="text-center self-center rounded-full w-5/6 lg:w-4/6 bg-white py-5">
            <p className="text-xs md:text-lg lg:text-lg">Agora viva em Parnaíba! A partir de hoje, o busca frete está chegando.</p>
          </div>
          {/* <--> */}
          <div className="w-4/6 lg:w-full text-white self-center text-center">
            <Image className="mt-8" src={busca_frete} alt="busca frete" />
            <h1 className="text-2xl lg:text-4xl font-light">Com o apertar de um botão</h1>
          </div>
          {/* <--> */}
          <div className="flex-col lg:flex rounded-lg mt-8 self-center justify-center rounded-md lg:w-4/6 w-4/5 bg-white">
            <form className="flex-col flex lg:flex-row text-gray-400 pt-3 lg:justify-between lg:items-center w-full px-5 items-start" action="">
              {/* <--> */}
              <div className="flex text-md lg:text-lg items-center">
                <ArrowDownIcon className="h-4 w-4 lg:w-5 lg:h-5 text-blue-500 mr-2" />
                <div className="mt-2">
                  <label>Endereço de retirada</label><br />
                  <input placeholder="Seu endereço" className="font-semibold placeholder-opacity-50 placeholder-blue-400 block w-full rounded-md pr-3 focus:outline-none" /><br />
                </div>
              </div>

              {/* <--> */}
              <div className="flex text-md lg:text-lg items-center">
                <ArrowUpIcon className="h-4 w-4 lg:w-5 lg:h-5 text-blue-500 mr-2" />
                <div className="mt-2">
                  <label>Destino</label><br />
                  <input placeholder="Destino" className="font-semibold placeholder-opacity-50 placeholder-blue-400 block w-full rounded-md pr-3 focus:outline-none" /><br />
                </div>
              </div>

              {/* <--> */}
              <ButtonPerson onChange={() => router.push('/estimativa')} btn={true} text="Estimativa" />
            </form>
          </div>
        </div>

      </div>
      <Carousel />
      <Describe />
    </>
  );
}
