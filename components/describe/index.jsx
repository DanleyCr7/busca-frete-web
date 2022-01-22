import React from "react"
import Image from "next/dist/client/image"
import freight from '/img/freight.jpg'
import vans from '/img/vans.png'
import sale from '/img/sale.png'
import delivery from '/img/furgao.png'
import estrada from '/img/estrada.png'
import estrada2 from '/img/estrada2.png'
import appStore from '/img/app-store.svg'
import playStore from '/img/google-play.svg'
import femaleCustomer from '/img/female-customer.png'
import femaleCustomerRate from '/img/female-customer-rate-and-tip.png'

import { Devider } from "../devider"
import { PassoApasso } from "../passoApasso"
import { Reviews } from "../reviews"
import { Parceria } from "../torne-se"

export function Describe() {
    return (
        <div className="h-screen w-full bg-blue h-20 flex flex-col items-center py-10 mb-20">
            <div className="mt-12 "></div>
            <div className="mt-12 "></div>

            <h1 className="not-italic text-black-600 font-bold text-3xl">We've got your back</h1>
            <p className="italic text-gray-400 mt-2">We load, haul & deliver anything</p>
            <div className="w-32 bg-yellow-400 py-0.5 mt-3" style={{ height: 20 }} />
            <div className="flex justify-items-center mt-10">
                <div className="mx-10 justify-self-center">
                    <Image src={freight} className="rounded-lg" width="300" />
                </div>

                <div className="mx-10">
                    <h1 className="not-italic text-black-600 font-bold text-3xl">Two strong Luggers</h1>
                    <div className="w-96">
                        <p className="not-italic text-gray-400 mt-2">
                            Every Lugg comes with 2 strong professional luggers who are vetted for a 5-star experience.
                            They will do the impossible to load, haul and deliver your items safely.
                        </p>
                    </div>
                </div>
            </div>
            <Devider />
            <div className="mt-10 items-center flex flex-col">
                <Image src={vans} width="800" />
                <div className="mt-16 mb-20">
                    <h1 className="not-italic text-black-600 font-bold text-center text-3xl">A truck as big as you need</h1>
                    <p className="not-italic text-gray-400 mt-2">
                        Ranging from Pickup Trucks to Cargo Vans and Sprinter Vans.
                    </p>
                </div>
            </div>
            {/* divisao */}
            <Devider />
            <div>
                <h1 className="not-italic text-black-600 font-bold text-center text-3xl">
                    Save time & energy
                </h1>
                <div className="flex mt-20">
                    <div className="w-60 flex flex-col items-center mx-10">
                        <div className="w-40">
                            <Image src={delivery} />
                        </div>
                        <span className="text-lg not-italic text-black-600 font-bold text-center">30 minutes or 30 days</span>
                        <p className="text-center text-sm text-gray-400">Schedule your Lugg ahead of time up to 30 days in advance or
                            request on-demand and we’ll arrive in as little as 30 minutes.</p>
                    </div>
                    <div className="w-60 flex flex-col items-center mx-10">
                        <div className="w-40">
                            <Image src={delivery} />
                        </div>
                        <span className="text-lg not-italic text-black-600 font-bold text-center">30 minutes or 30 days</span>
                        <p className="text-center text-sm text-gray-400">Schedule your Lugg ahead of time up to 30 days in advance or
                            request on-demand and we’ll arrive in as little as 30 minutes.</p>
                    </div>
                    <div className="w-60 flex flex-col items-center mx-10">
                        <div className="w-40">
                            <Image src={delivery} />
                        </div>
                        <span className="text-lg not-italic text-black-600 font-bold text-center">30 minutes or 30 days</span>
                        <p className="text-center text-sm text-gray-400">Schedule your Lugg ahead of time up to 30 days in advance or
                            request on-demand and we’ll arrive in as little as 30 minutes.</p>
                    </div>
                </div>
            </div>
            {/* divisao */}
            <Devider />
            <div className="w-full flex flex-col items-center">
                <h1 className="text-black-600 font-bold text-3xl">A truck as big as you need</h1>
                <p className="italic text-gray-400 mt-2" >Ranging from Pickup Trucks to Cargo Vans and Sprinter Vans.</p>
                <div className="w-48 bg-yellow-300 mt-3  mb-10" style={{ paddingTop: 5 }} />

                <Image src={sale} className="rounded-lg" />
            </div>
            <div className="w-full flex flex-col items-center my-20">
                <div className="flex">
                    <div className="px-4 py-2 rounded-full bg-blue-800 mx-3"><span className="text-white font-sans">1</span></div>
                    <h1 className="text-black-600 font-bold text-3xl">
                        Request in the app</h1>
                </div>
                <div className="w-2/5 ">
                    <p className="italic text-gray-400 mt-2 text-center" >Set your pickup location and destination, choose the size of vehicle that is right for you, and when you would like us to arrive.</p>
                </div>
                <div className="flex justify-between mt-5">
                    <a className="w-32" href="">
                        <Image src={appStore} />
                    </a>
                    <a className="w-28 ml-2" href="">
                        <Image src={playStore} />
                    </a>
                </div>
                <div className="w-6/6 my-10">
                    <Image src={estrada} />
                </div>
                {/* Passo a passo 2 */}
                <div className="flex w-full items-center justify-center">
                    <div className="w-3/6 flex flex-col items-center">
                        <div className="flex">
                            <div className="px-4 py-2 rounded-full bg-blue-800 mx-3"><span className="text-white font-sans">2</span></div>
                            <h1 className="text-black-600 font-bold text-3xl">
                                Don't lift a finger</h1>
                        </div>
                        <div className="w-4/5 ">
                            <p className="italic text-gray-400 mt-2 text-center" >We'll take it from here. Two strong Luggers arrive to load your stuff and secure it safely. We'll see you at your destination!</p>
                        </div>
                    </div>
                    <div className="w-2/6">
                        <Image src={femaleCustomer} />
                    </div>

                </div>
                <div className="w-6/6 my-10">
                    <Image src={estrada2} />
                </div>
                {/* Passo a passo 3 */}
                <div className="flex w-full items-center justify-center">
                    <div className="w-2/6">
                        <Image src={femaleCustomerRate} />
                    </div>
                    <div className="w-3/6 flex flex-col items-center">
                        <div className="flex">
                            <div className="px-4 py-2 rounded-full bg-blue-800 mx-3"><span className="text-white font-sans">3</span></div>
                            <h1 className="text-black-600 font-bold text-3xl">
                                Rate and tip</h1>
                        </div>
                        <div className="w-4/5 ">
                            <p className="italic text-gray-400 mt-2 text-center" >We unload your items and place them right where you want them. Tell us about your experience and tip your Luggers for a job well done.</p>
                        </div>
                    </div>
                </div>
                <div className="my-8">
                    <Devider />
                </div>
                <Reviews />
                <Parceria />
            </div>
        </div>
    )
}