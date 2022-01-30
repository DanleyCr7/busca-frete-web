import React from "react";
import { ArrowRightIcon } from '@heroicons/react/solid';
import { Colors } from "../../config/color";
import delivery from '/img/fast-delivery.png'
import Image from 'next/image'

export function Section() {
    return (
        <div className="flex w-full px-10 justify-center lg:flex-row flex-col mt-10">
            <div className="bg-white cursor-pointer mt-10 lg:mt-10 w-5/6 lg:w-1/5 mx-5 py-10 relative rounded p-8 flex flex-col">
                <div className="w-2/5 h-1/5 lg:w-3/5 lg:h-2/5 absolute -top-14 inset-x-20 lg:-top-20 lg:inset-x-10">
                    <Image src={delivery} />
                </div>
                <h1 className="font-normal text-2xl">Store delivery</h1>
                <p className="font-light text-gray-400">Delivered in as little as 30 minutes.</p>
                <ArrowRightIcon className="h-5 w-5 flex text-blue-500 mr-2 self-center mt-5" color={Colors.colorPatern} />
            </div>
            <div className="bg-white cursor-pointer mt-10 lg:mt-10 w-5/6 lg:w-1/5 relative mx-5 py-10 rounded p-8 flex flex-col">
                <div className="w-2/5 h-1/5 lg:w-3/5 lg:h-2/5 absolute -top-14 inset-x-20 lg:-top-20 lg:inset-x-10">
                    <Image src={delivery} />
                </div>
                <h1 className="font-normal text-2xl">Store delivery</h1>
                <p className="font-light text-gray-400">Delivered in as little as 30 minutes.</p>
                <ArrowRightIcon className="h-5 w-5 flex text-blue-500 mr-2 self-center mt-5" color={Colors.colorPatern} />
            </div>
            <div className="bg-white cursor-pointer mt-10 lg:mt-10 w-5/6 lg:w-1/5 relative mx-5 py-10 rounded p-8 flex flex-col">
                <div className="w-2/5 h-1/5 lg:w-3/5 lg:h-2/5 absolute -top-14 inset-x-20 lg:-top-20 lg:inset-x-10">
                    <Image src={delivery} />
                </div>
                <h1 className="font-normal text-2xl">Store delivery</h1>
                <p className="font-light text-gray-400">Delivered in as little as 30 minutes.</p>
                <ArrowRightIcon className="h-5 w-5 flex text-blue-500 mr-2 self-center mt-5" color={Colors.colorPatern} />
            </div>
        </div>
    )
}   