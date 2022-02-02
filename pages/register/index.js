export default function Register() {
    return (
        <div style={{ height: '100vh' }} className="items-center flex flex-col bg-parceria-register w-full lg:pt-20">
            <div className="flex flex-col lg:flex-row w-5/6 lg:w-4/6 self-center lg:mt-20">
                <div className="4/6 my-10 lg:my-0">
                    <h1 className="text-3xl text-white font-bold">Earn money with your truck</h1>
                </div>
                <div className="lg:ml-10 mt:10 lg:mt-0 bg-white px-8 lg:w-4/6 pt-5 rounded-lg w-full">
                <form>
                    {/* <--> */}
                    <div className="w-full">
                        <label className="text-sm text-gray-500">Nome</label><br />
                        <input placeholder="Digite seu nome" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                    </div>
                        
                    {/* <--> */}
                    <div className="w-full">
                        <label className="text-sm text-gray-500">Mobile phone number</label><br />
                        <input placeholder="Enter mobile phone number" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                    </div>

                    {/* <--> */}
                    <div className="w-full">
                        <label className="text-sm text-gray-500">Mobile phone number</label><br />
                        <input placeholder="Enter mobile phone number" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                    </div>

                    {/* <--> */}
                    <div className="w-full">
                        <label className="text-sm text-gray-500">Mobile phone number</label><br />
                        <input placeholder="Enter mobile phone number" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                    </div>

                </form>
                </div>
            </div>
        </div>
    )
}