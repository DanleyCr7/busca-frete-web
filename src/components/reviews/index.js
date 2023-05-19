import { LinkIcon, StarIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Colors } from "../../config/color";

export function Reviews() {
    const [hover, setHover] = useState(false);

    function toggleHoverOut(){
        setHover(false)
    }
    
    function toggleHoverLeave() {
        setHover(true)
    }

    return (
        <div className="carousel relative w-full flex flex-col lg:py-10 items-center justify-center">
            <div className="flex justify-center">
                <div className="relative mr-3 mb-5">
                    <img className="rounded-full h-16 w-16 object-cover" src="https://img.freepik.com/fotos-gratis/retrato-de-positivo-confiante-homem-negocios_1262-17122.jpg?w=740&t=st=1677721423~exp=1677722023~hmac=f02b0535d873fc39fb0d29458c2afc03662fc0355722101598845cf1957db4fb" alt="" />
                    <div className="flex inset-x-8 top-10 rounded-full z-2 absolute items-center justify-center w-8 h-8 bg-indigo-600">
                        <LinkIcon className="h-5 w-5 text-white self-center" />
                    </div>
                </div>
                <div>
                    <span className="text-lg lg:text-xl font-sans font-bold text-black">Carlos Sousa</span>
                    <div className="flex">
                        <StarIcon className="h-5 w-5 self-center" color={Colors.colorStarReview}/>
                        <StarIcon className="h-5 w-5 self-center" color={Colors.colorStarReview} />
                        <StarIcon className="h-5 w-5 self-center" color={Colors.colorStarReview} />
                        <StarIcon className="h-5 w-5 self-center" color={Colors.colorStarReview} />
                    </div>
                </div>
            </div>
            <div className="w-5/6 lg:w-3/6 text-center">
                <p className="text-gray-400">
                    "O serviço do Busca Frete foi excelente, superou as minhas expectativas. Foram cuidadosos e eficientes com meus pertences. Recomendo!!!"
                </p>
            </div>
            {/* <a onMouseOut={toggleHoverOut} onMouseMove={toggleHoverLeave} className="flex lg:w-2/5 w-4/5 mb-8 lg:mb-0 items-center justify-center mt-8" href="#">
                <p className="lg:text-lg text-sm font-semibold mr-2" style={{ color: hover ? "#8e6ff7" : "#7e33ff"}}> Leia mais comentários de clientes</p>
                <ArrowRightIcon className="h-4 w-4 lg:h-5 lg:w-5 self-center" style={{ color: hover ? "#8e6ff7" : "#7e33ff"  }}/>
            </a> */}
        </div>
    )
}