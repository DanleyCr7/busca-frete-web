import Head from "next/head";
import Image from "next/image";
import logo from "/img/logo.png";
import busca_frete from "/img/busca_frete.png"
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
  }, [])
  return (
    <>
      <Head>
        <title>Busca frete</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col bg-hero-pattern bg-cover bg-no-repeat h-screen">
        {/* --- */}
        <nav className="flex justify-between items-center px-5">
          <Image src={logo} alt="me" width="64" height="64" />
          <ul className="flex font-light text-white text-base">
            <li className="mx-2">
              <button>Serviços</button>
            </li>
            <li className="mx-2">
              <button>Teste</button>
            </li>
            <li className="mx-2">
              <button>teste</button>
            </li>
          </ul>
        </nav>
        {/* --- */}
        <div className="text-center self-center rounded-full w-4/6 bg-white py-5">
          <span >Now live in New York City! Starting today, Luggers are hitting the pavement - <a href="">learn more.</a></span>
        </div>
        <div className="w-full mt-8 pt-8 text-white text-center">
          <Image className="mt-8" src={busca_frete} alt="busca frete" />
          <h1 className="text-4xl font-light">with the push of a button</h1>
        </div>
         <div className="flex rounded-lg mt-8 self-center justify-center rounded-md w-4/6 bg-white py-3">
          <form className="flex text-gray-400 justify-between w-full px-5 items-start" action="">
            <div className="flex flex-col items-start">
            <label>Pickup address</label><br/>
            <input className="outline-none" /><br />
            </div>
            <div className="flex flex-col items-start mx-2">
            <label>Destination</label><br/>
            <input className="outline-none"/>
            </div>
            <button className="text-gray-600 bg-yellow-300 rounded-lg px-3 h-5/6">Get estimative</button>
          </form>
        </div>
      </div>
    </>
  );
}
