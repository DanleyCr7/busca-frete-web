import { ArrowRightIcon } from "@heroicons/react/solid";
import { Colors } from "../../config/color";
import Image from "next/dist/client/image";


import imag from '/img/parceria.jpg';

export function Parceria() {
    return (
        <div className="w-5/6 flex justify-between bg-parceria rounded-lg mb-10 px-10" style={{backgroundColor: Colors.colorPatern}}>
            <div className="py-8">
                <h1 className="text-3xl text-white">Torne-se um parceiro</h1>
                <p className="text-lg font-medium text-gray-200 mt-2">Seja ativo, conheça pessoas e ganhe dinheiro.</p>
                <a href="#" className="flex w-60 py-2 pl-2 mt-4 rounded-md items-center border-2">
                    <p className="text-white text-lg font-semibold mr-2">Torne-se um parceiro</p>
                    <ArrowRightIcon width={18} height={18} color="#fff"/>
                </a>
            </div>
        </div>
    )
}