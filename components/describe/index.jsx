import React from "react"
import Image from "next/dist/client/image"
import freight from '/img/freight.jpg'
import vans from '/img/vans.png'
import sale from '/img/sale.png'
import delivery from '/img/furgao.png'
import estrada from '/img/estrada.png'
import estradaReta from '/img/estrada-reta.png'
import estradaReta2 from '/img/estrada-reta2.png'
import estrada2 from '/img/estrada2.png'
import appStore from '/img/app-store.svg'
import playStore from '/img/google-play.svg'
import femaleCustomer from '/img/female-customer.png'
import femaleCustomerRate from '/img/female-customer-rate-and-tip.png'

import { Devider } from "../devider"
// import { PassoApasso } from "../passoApasso"
import { Reviews } from "../reviews"
import { Parceria } from "../torne-se"
import { Footer } from "../footer"

export function Describe() {
    return (
        <div className="h-screen w-full bg-blue h-20 flex flex-col items-center py-10 mb-20">
            <h1 className="not-italic text-black-600 font-bold text-3xl">Nós carregamos por você.</h1>
            <p className="italic text-gray-400 mt-2">
                Carregamos, transportamos e entregamos qualquer coisa
            </p>
            <div className="w-32 bg-yellow-400 py-0.5 mt-3" style={{ height: 20 }} />
            <div className="flex flex-col lg:flex-row justify-items-center mt-10">
                <div className="mx-10 text-center lg:justify-self-center">
                    <Image src={freight} className="rounded-lg" width="300" />
                </div>

                <div className="lg:mx-10 text-center lg:text-left">
                    <h1 className="not-italic text-black-600 font-bold text-3xl">Dois profissionais fortes</h1>
                    <div className="w-96">
                        <p className="not-italic text-gray-400 mt-2">
                            Cada frete vem com 2 profissionais fortes que são avaliados para uma experiência de 5 estrelas. Eles farão o impossível 
                            para carregar, transportar e entregar seus itens com segurança.
                        </p>
                    </div>
                </div>
            </div>
            <Devider />
            <div className="mt-10 items-center flex flex-col">
                <div className="w-4/5 lg:w-5/6">
                    <Image src={vans} />
                </div>
                <div className="mt-16 mb-20 ">
                    <h1 className="not-italic text-black-600 font-bold text-center text-2xl lg:text-3xl">Um caminhão do tamanho que você precisa</h1>
                    <p className="not-italic text-center text-sm lg:text-lg text-gray-400 mt-2">
                        Variando de picapes a vans de carga e vans Sprinter.
                    </p>
                </div>
            </div>
            {/* divisao */}
            <Devider />
            <div>
                <h1 className="not-italic text-black-600 font-bold text-center text-3xl">
                    Economize tempo e energia
                </h1>
                <div className="flex flex-col lg:flex-row mt-20">
                    <div className="w-50 lg:w-64 flex flex-col items-center mx-10">
                        <div className="w-24 mt-5 lg:mt-0 lg:w-35">
                            <Image src={delivery} />
                        </div>
                        <span className="text-lg not-italic text-black-600 font-bold text-center">30 minutos ou 30 dias</span>
                        <p className="text-center text-sm text-gray-400">Agende seu frete com antecedência de até 30 dias ou solicite sob demanda e chegaremos em menos de 30 minutos.</p>
                    </div>
                    <div className="w-50 lg:w-64 flex flex-col items-center mx-10">
                        <div className="w-24 mt-5 lg:mt-0 lg:w-35">
                            <Image src={delivery} />
                        </div>
                        <span className="text-lg not-italic text-black-600 font-bold text-center">Não levante um dedo</span>
                        <p className="text-center text-sm text-gray-400">Nossos colaboradores cuidaram de toda a mundança pra você.</p>
                    </div>
                    {/* <div className="w-50 lg:w-60 flex flex-col items-center mx-10">
                        <div className="w-24 mt-5 lg:mt-0 lg:w-35">
                            <Image src={delivery} />
                        </div>
                        <span className="text-lg not-italic text-black-600 font-bold text-center">Uma comunidade focada na qualidade</span>
                        <p className="text-center text-sm text-gray-400">Agende seu frete com antecedência de até 30 dias ou solicite sob demanda e chegaremos em menos de 30 minutos.</p>
                    </div> */}
                </div>
            </div>
            {/* divisao */}
            <Devider />
            <div className="w-full flex flex-col w-5/6 text-center items-center lg:text-left">
                <h1 className="text-black-600 font-bold text-3xl">Um caminhão do tamanho que você precisa</h1>
                <p className="italic text-gray-400 mt-2" >Variando de picapes a vans de carga e vans Sprinter.</p>
                <div className="w-48 bg-yellow-300 mt-3  mb-10" style={{ paddingTop: 5 }} />
                <div className="w-4/5 lg:4/5 text-center">
                    <Image src={sale} className="rounded-lg" />
                </div>
            </div>
            <div className="w-full flex flex-col items-center my-20">
                <div className="flex flex-col items-center lg:flex-row">
                    <div className="px-4 py-2 w-10 rounded-full bg-blue-800 mx-3"><span className="text-white font-sans">1</span></div>
                    <h1 className="text-black-600 font-bold text-2xl lg:text-3xl">
                        Solicite no aplicativo</h1>
                </div>
                <div className="w-2/5 ">
                    <p className="italic text-gray-400 mt-2 text-sm lg:text-lg text-center" >
                        Defina seu local de coleta e destino, escolha o tamanho do veículo certo para você e 
                        quando você gostaria que chegássemos.
                    </p>
                </div>
                <div className="flex justify-between mt-5">
                    {/* <a className="w-32" href="">
                        <Image src={appStore} />
                    </a> */}
                    <a className="w-28 ml-2" href="">
                        <Image src={playStore} />
                    </a>
                </div>
                <div className="hidden lg:inline w-6/6 my-10">
                    <Image src={estrada} />
                </div>
                <div className="lg:hidden inline my-10 lg:my-0">
                    <Image src={estradaReta} />
                </div>
                {/* Passo a passo 2 */}
                <div className="flex flex-col-reverse lg:flex-row w-full items-center justify-center">
                    <div className="w-3/6 flex flex-col items-center">
                        <div className="flex flex-col lg:flex-row">
                            <div className="px-4 py-2 w-10 self-center mb-5 lg:mb-0 rounded-full bg-blue-800 mx-3"><span className="text-white font-sans">2</span></div>
                            <h1 className="text-black-600 font-bold text-2xl lg:text-3xl">
                            Não levante um dedo</h1>
                        </div>
                        <div className="w-4/5 ">
                            <p className="italic text-gray-400 mt-2 text-center" >
                                Nós vamos levá-lo daqui. Dois Fretista fortes chegam para carregar suas coisas e protegê-las com segurança.
                                Nos vemos no seu destino!
                            </p>
                        </div>
                    </div>
                    <div className="w-5/6 lg:w-2/6">
                        <Image src={femaleCustomer} />
                    </div>

                </div>
                <div className="hidden lg:inline w-6/6 my-10">
                    <Image src={estrada2} />
                </div>
                <div className="lg:hidden inline my-10 lg:my-0">
                    <Image src={estradaReta2} />
                </div>
                {/* Passo a passo 3 */}
                <div className="flex flex-col lg:flex-row w-full items-center justify-center">
                    <div className="w-5/6 lg:w-2/6 mb-5">
                        <Image src={femaleCustomerRate} />
                    </div>
                    <div className="w-3/6 flex flex-col items-center">
                        <div className="flex flex-col lg:flex-row">
                            <div className="px-4 w-10 self-center py-2 rounded-full bg-blue-800 mx-3"><span className="text-white font-sans">3</span></div>
                            <h1 className="text-black-600 font-bold text-2xl lg:text-3xl">
                            Taxa e dica</h1>
                        </div>
                        <div className="w-5/6 lg:w-4/5">
                            <p className="italic text-gray-400 mt-2 text-center" >
                                Nós descarregamos seus itens e os colocamos exatamente onde você deseja.
                                Conte-nos sobre sua experiência e dê uma gorjeta aos seus Fretista para
                                um trabalho bem feito.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="my-4 w-full items-center justify-center">
                </div>
                <div className="w-5/6 bg-gray-200 lg:mt-20 mb-20 h-px" style={{ paddingTop: 0.08 }}>
                </div>
                {/* <Reviews /> */}
                <Parceria />
                <Footer />
            </div>
        </div>
    )
}