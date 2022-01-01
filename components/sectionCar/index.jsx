import React from "react"
import Image from "next/dist/client/image"
import sectionCar from '/img/sectionCar.jpg'
import delivery from '/img/furgao.png'
import { ArrowRightIcon } from '@heroicons/react/solid';
import { Colors } from "../../config/color";

export function SectionCar() {
    return (
        <div className=" flex flex-col items-center justify-center mt-12">
            <div className="mt-12 "></div>
            <div className="mt-12 "></div>

            <div className="w-60">
                <Image src={sectionCar} className="rounded-lg" />
            </div>

            <div className="justify-center items-center mt-5">
                <h1 className="text-black-600 font-bold text-3xl">A truck as big as you need</h1>
            </div>

            <div>
                <p className="not-italic text-gray-400 mt-2" >Ranging from Pickup Trucks to Cargo Vans and Sprinter Vans.</p>
            </div>
            
            <div className="mt-12 "></div>
            <div className="mt-12 "></div>
            <div className="mt-12 "></div>
            <div className="mt-12 "></div>
            <div className="justify-center items-center mt-5">
                <h1 className="text-black-600 font-bold text-3xl">Save time & energy</h1>
            </div>

            <div className="flex flex-row px-10 justify-center items-center mt-20">
                <div className="flex flex-col justify-center bg-white cursor-pointer w-1/5 mx-5 py-10 relative rounded p-8  ">
                    <div className="w-3/5 h-2/5 absolute -top-20 inset-x-10">
                        <Image src={delivery} />
                    </div>
                    <h1 className="font-normal text-2xl text-center">30 minutes or 30 days</h1>
                    <p className="font-light text-gray-400 text-center">Schedule your Lugg ahead of time up to 30 days in advance or request on-demand and we’ll arrive in as little as 30 minutes.</p>
                
                </div>

                <div className="flex flex-col justify-center bg-white cursor-pointer w-1/5 mx-5 py-10 relative rounded p-8  ">
                    <div className="w-3/5 h-2/5 absolute -top-20 inset-x-10">
                        <Image src={delivery} />
                    </div>
                    <h1 className="font-normal text-2xl text-center">30 minutes or 30 days</h1>
                    <p className="font-light text-gray-400 text-center">Schedule your Lugg ahead of time up to 30 days in advance or request on-demand and we’ll arrive in as little as 30 minutes.</p>
                    
                </div>

                <div className="flex flex-col justify-center bg-white cursor-pointer w-1/5 mx-5 py-10 relative rounded p-8  ">
                    <div className="w-3/5 h-2/5 absolute -top-20 inset-x-10">
                        <Image src={delivery} />
                    </div>
                    <h1 className="font-normal text-2xl text-center">30 minutes or 30 days</h1>
                    <p className="font-light text-gray-400 text-center">Schedule your Lugg ahead of time up to 30 days in advance or request on-demand and we’ll arrive in as little as 30 minutes.</p>
                   
                </div>
            </div>
        </div>
    )
}