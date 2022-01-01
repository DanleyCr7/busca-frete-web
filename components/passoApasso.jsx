import Image from "next/dist/client/image"

export function PassoApasso({ image }) {
    return (
        <div className="flex w-full items-center justify-center">
            <div className="w-3/6 flex flex-col items-center">
                <div className="flex">
                    <div className="px-4 py-2 rounded-full bg-blue-800 mx-3"><span className="text-white font-sans">2</span></div>
                    <h1 className="text-black-600 font-bold text-3xl">
                        Don't lift a finger</h1>
                </div>
                <div className="w-4/5 ">
                    <p className="italic text-gray-400 mt-2 text-center" >We'll take it from here. Two strong Luggers arrive to load your stuff and secure it safely. We'll see you at your destination!</p>
                </div>
            </div>
            <div className="w-2/6">
                <Image src={image} />
            </div>

        </div>
    )
}