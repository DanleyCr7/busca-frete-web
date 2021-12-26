import React from "react"
import Image from "next/dist/client/image"
import freight from '/img/freight.jpg'
import vans from '/img/vans.png'
export function Describe() {
    return (
        <div className="w-full bg-blue h-20 flex flex-col items-center py-10 mb-20">
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
            <div className="w-3/6 bg-gray-200 mt-20 mb-20 h-px">
                `
            </div>
            <div className="mt-10 items-center flex flex-col">
                <Image src={vans} width="800" />
                <div className="mt-16 mb-20">
                    <h1 className="not-italic text-black-600 font-bold text-center text-3xl">A truck as big as you need</h1>
                    <p className="not-italic text-gray-400 mt-2">
                        Ranging from Pickup Trucks to Cargo Vans and Sprinter Vans.
                    </p>
                </div>
            </div>
            <div className="w-3/6 bg-gray-200 mt-20 mb-20 h-px">
                `
            </div>
            <div>
                <h1 className="not-italic text-black-600 font-bold text-center text-3xl">
                    Save time & energy
                </h1>
                <div className="flex mt-20">
                    <div className="w-60 flex flex-col items-center mx-10">
                        <span className="text-lg not-italic text-black-600 font-bold text-center">30 minutes or 30 days</span>
                        <p className="text-center text-sm text-gray-400">Schedule your Lugg ahead of time up to 30 days in advance or
                            request on-demand and we’ll arrive in as little as 30 minutes.</p>
                    </div>
                    <div className="w-60 flex flex-col items-center mx-10">
                        <span className="text-lg not-italic text-black-600 font-bold text-center">30 minutes or 30 days</span>
                        <p className="text-center text-sm text-gray-400">Schedule your Lugg ahead of time up to 30 days in advance or
                            request on-demand and we’ll arrive in as little as 30 minutes.</p>
                    </div>
                    <div className="w-60 flex flex-col items-center mx-10">
                        <span className="text-lg not-italic text-black-600 font-bold text-center">30 minutes or 30 days</span>
                        <p className="text-center text-sm text-gray-400">Schedule your Lugg ahead of time up to 30 days in advance or
                            request on-demand and we’ll arrive in as little as 30 minutes.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}