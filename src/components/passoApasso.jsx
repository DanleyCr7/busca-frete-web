import Image from "next/dist/client/image"

export function PassoApasso({ image }) {
    return (
        <div className="flex w-full items-center justify-center">
            <div className="w-3/6 flex flex-col items-center">
                <div className="flex">
                    <div className="px-4 py-2 rounded-full bg-blue-800 mx-3"><span className="text-white font-sans">2</span></div>
                    <h1 className="text-black-600 font-bold text-3xl">
                    Não levante um dedo</h1>
                </div>
                <div className="w-4/5 ">
                    <p className="italic text-gray-400 mt-2 text-center" >Nós vamos levá-lo a partir daqui. Dois fortes freteiros chegam para carregar suas coisas e prendê-las com segurança. Nos vemos no seu destino!</p>
                </div>
            </div>
            <div className="w-2/6">
                <Image src={image} />
            </div>

        </div>
    )
}