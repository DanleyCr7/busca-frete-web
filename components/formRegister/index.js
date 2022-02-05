import { ButtonPerson } from "../ButtonPerson";
import { RadioPerson } from "../radio";

export function FormRegister() {
    return (
        <div className="lg:ml-10 lg:absolute pb-1 lg:-right-8 lg:top-0 mt-10 mb-10 lg:mt-0 bg-white px-8 lg:w-3/6 pt-5 rounded-lg w-full">
                    <form>
                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-sm text-gray-500">Nome</label><br />
                            <input placeholder="Digite seu nome" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                        </div>
                            
                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-sm text-gray-500">Telefone</label><br />
                            <input placeholder="Enter mobile phone number" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                        </div>

                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-sm text-gray-500">Email</label><br />
                            <input placeholder="Enter mobile phone number" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                        </div>

                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-sm text-gray-500">Onde você está localizado?</label><br />
                            <input placeholder="Enter mobile phone number" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                        </div>
                            
                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-sm text-gray-500">Referência?</label><br />
                            <input placeholder="Enter mobile phone number" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                        </div>
                            
                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-sm text-gray-500">Seu telefone de trabalho?</label><br />
                            <input placeholder="Enter mobile phone number" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                        </div>
                            
                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-sm text-gray-500">Você pode levantar até 50kg?</label><br />
                            <RadioPerson/>
                        </div>
                            
                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-sm text-gray-500">Você possui um carro e quer usá-lo?</label><br />
                            <RadioPerson/>
                        </div>
                            
                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-sm text-gray-500">Você pode trabalhar nos finais de semana?</label><br />
                            <RadioPerson/>
                        </div>
                        <div className="my-5">
                            <ButtonPerson text="Enviar"/>                            
                        </div>
                    </form>
                </div>
    )
}