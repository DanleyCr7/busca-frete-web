import { StarIcon, LinkIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import { Colors } from '../../../config/color'
import { Section } from '../sectionsServices';

export function Carousel() {
    const [carrosel, setCarrosel] = useState([
        {
            nome: 'Anonimo',
            url: ''
        },
        {
            nome: 'Anonimo 2',
            url: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2021/11/legiao_mL7ZfJHyCVDR.jpg.jpeg'
        }
    ]);
    const buttonCarosel = "rounded-full cursor-pointer mx-1 w-3 h-3 bg-yellow-400 hover:bg-blue-800";
    const buttonCaroselSelect = "rounded-full cursor-pointer mx-1 w-3 h-3 bg-yellow-200 hover:bg-blue-800"
    const [avaliation, setAvaliation] = useState(carrosel[0])
    const [count, setCount] = useState(0);
    // useEffect(() => {
    //     setTimeout(() => {
    //         if (count >= 2) {
    //             setCount(0);
    //         }
    //         setAvaliation(carrosel[count]);
    //         setCount(count + 1);

    //     }, 3000)
    // })

    return (

        <div className="carousel relative w-full flex flex-col py-10 items-center justify-center" style={{ backgroundColor: Colors.colorPatern }} >
            {/* <div className="flex">
                <div className="relative mr-3 mb-5">
                    <img className="rounded-full h-16 w-16" src={avaliation?.url} alt="" />
                    <div className="flex inset-x-8 top-10 rounded-full z-2 absolute items-center justify-center w-8 h-8 bg-indigo-600">
                        <LinkIcon className="h-5 w-5 text-white self-center" />
                    </div>
                </div>
                <div>
                    <span className="font-sans font-semibold text-white">{avaliation?.nome}</span>
                    <div className="flex">
                        <StarIcon className="h-5 w-5 text-yellow-400 self-center" />
                        <StarIcon className="h-5 w-5 text-yellow-400 self-center" />
                        <StarIcon className="h-5 w-5 text-yellow-400 self-center" />
                        <StarIcon className="h-5 w-5 text-yellow-400 self-center" />
                    </div>
                </div>
            </div>
            <div className="w-4/5 lg:w-2/6 text-center">
                <p className="text-white text-sm lg:text-lg">
                    "Comprei uma cômoda muito grande e pesada e estava preocupada em como levá-la para casa. Busca frete realmente salvou meu dia! Brett e Tamas foram super prestativos e fáceis de se comunicar. Definitivamente uma experiência cinco estrelas!"
                </p>
            </div>
            <div className="flex mt-4">
                {carrosel.map((item, index) => {
                    return (
                        <a key={index} onClick={() => setAvaliation(item)} className={item == avaliation ? buttonCarosel : buttonCaroselSelect} />
                    )
                })}
            </div> */}
            <Section />
        </div>
    )
}