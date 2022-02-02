import { StarIcon, LinkIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import { Colors } from '../../config/color'
import { Section } from '../sectionsServices';

export function Carousel() {
    const [carrosel, setCarrosel] = useState([
        {
            nome: 'Anonimo',
            url: 'data:image/jpeg;base64,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'
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
            <div className="flex">
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
                    "I bought a very large and heavy dresser and was worried about how to get it home.
                    Lugg really saved my day! Brett and Tamas were super helpful and easy to communicate
                    with. Definitely a five star experience!"
                </p>
            </div>
            <div className="flex mt-4">
                {carrosel.map((item, index) => {
                    return (
                        <a onClick={() => setAvaliation(item)} className={item == avaliation ? buttonCarosel : buttonCaroselSelect} />
                    )
                })}
            </div>
            <Section />
        </div>
    )
}