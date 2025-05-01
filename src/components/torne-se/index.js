import { ArrowRightIcon } from "@heroicons/react/solid";
import { Colors } from "../../../config/color";
import { useRouter } from 'next/router';

export function Parceria() {
    const router = useRouter()

    return (
        <div  id="trabalhe-conosco" className="w-5/6 flex justify-between bg-parceria rounded-lg mb-10 px-10" style={{backgroundColor: Colors.colorPatern}}>
            <div className="py-8">
                <h1 className="text-xl lg:text-3xl text-white">Trabalhe conosco</h1>
                <p className="text-sm lg:text-lg font-medium text-gray-200 mt-2">Quer aumentar suas entregas e sua renda? Torne-se nosso parceiro! Baixe o app, cadastre-se e comece a ganhar agora mesmo.</p>
                <a href="https://play.google.com/store/apps/details?id=com.frete.busca" className="flex cursor-pointer w-40 lg:w-60 py-2 pl-2 mt-4 rounded-md items-center border-2">
                    <p className="text-white text-xs lg:text-lg font-semibold mr-2">Torne-se um parceiro</p>
                    <ArrowRightIcon width={18} height={18} color="#fff"/>
                </a>
            </div>
        </div>
    )
}