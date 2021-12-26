import React from "react"
import Image from "next/dist/client/image"
import freight from '/img/freight.jpg'
import {SectionCar} from '../sectionCar'
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

            <SectionCar />
        </div>
    )
}