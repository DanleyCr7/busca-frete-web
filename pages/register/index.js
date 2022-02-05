import { ButtonPerson } from "../../components/ButtonPerson";
import { RadioPerson } from "../../components/radio";
import sale_icon from "/img/sale-icon.png"
import vans from "/img/vans.png"
import money from "/img/money.png"
import Image from "next/image";
import { Divider } from "@mui/material";

export default function Register() {
    return (
        <div className="items-center flex flex-col bg-parceria-register bg-no-repeat bg-black w-full lg:pt-20">
            <div className="flex flex-col lg:flex-row w-5/6 lg:w-5/6 self-center lg:mt-20">
                <div className="lg:w-3/6  my-10 lg:my-0">
                    <h1 className="text-3xl text-white font-bold">Earn money with your truck</h1>
                    <h1 className="text-2xl text-gray-300 font-normal">
                        Be active, meet new people & make up to $2.5k/week!
                    </h1>
                    <div className="w-3/5 my-10">
                        <Image className="mt-8" src={vans} alt="busca frete" />
                    </div>
                    <h1 className="text-3xl text-white font-bold">Don't own a truck?</h1>
                    <h1 className="text-lg text-gray-300 font-normal">
                        Don't worry you can still apply as a helper!
                        Owning a vehicle is not a requirement to becoming
                        a Lugger. Just select "No" for the question "Do you
                        own a truck and want to use it with Lugg?".
                    </h1>
                    <div className="flex mt-5">
                        {/* ---- */}
                        <div className="flex flex-col  items-center">
                            <div className="w-24">
                                <Image className="mt-8" src={sale_icon} alt="busca frete" />
                            </div>
                            <h1 className="text-white font-bold text-xl">Store Purchases</h1>
                        </div>
                        {/* ---- */}
                        <div className="flex flex-col ml-2 items-center">
                            <div className="w-24">
                                <Image className="mt-8" src={sale_icon} alt="busca frete" />
                            </div>
                            <h1 className="text-white font-bold text-xl">Store Purchases</h1>
                        </div>
                    </div>
                    <div className="flex">
                         {/* ---- */}
                        <div className="flex flex-col ml-2 items-center">
                            <div className="w-24">
                                <Image className="mt-8" src={sale_icon} alt="busca frete" />
                            </div>
                            <h1 className="text-white font-bold text-xl">Store Purchases</h1>
                        </div>
                        {/* ---- */}
                        <div className="flex flex-col ml-2 items-center">
                            <div className="w-24">
                                <Image className="mt-8" src={sale_icon} alt="busca frete" />
                            </div>
                            <h1 className="text-white font-bold text-xl">Store Purchases</h1>
                        </div>
                        {/* ---- */}
                    </div>
                    <div className="my-10 py-10">
                        <Divider style={{backgroundColor : '#fff'}}/>
                    </div>

                    <h1 className="text-3xl text-white font-bold">Become a Lugger</h1>
                    <div className="flex my-10">
                        <div className="w-40 mr-4">
                            <Image className="mt-8" src={money} alt="busca frete" />

                        </div>
                        <div>
                            <h1 className="text-lg text-white font-bold">Get big tips</h1>
                            <div className="w-5/6 text-justify"> 
                                <p className="text-normal text-gray-400">
                                    Our drivers and helpers make more money in
                                    tips than any other on-demand service.
                                    You keep 100% of the tips you make.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex my-10">
                        <div className="w-40 mr-4">
                            <Image className="mt-8" src={money} alt="busca frete" />

                        </div>
                        <div>
                            <h1 className="text-lg text-white font-bold">Work When You Want</h1>
                            <div className="w-5/6 text-justify"> 
                                <p className="text-normal text-gray-400">
                                    Work on the weekends or every day of
                                    the week. Set your own schedule and
                                    work when you want.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex my-10">
                        <div className="w-40 mr-4">
                            <Image className="mt-8" src={money} alt="busca frete" />

                        </div>
                        <div>
                            <h1 className="text-lg text-white font-bold">Make People Happy</h1>
                            <div className="w-5/6 text-justify"> 
                                <p className="text-normal text-gray-400">
                                    As a Lugger your job is to take the stress
                                    out of moving and delivery. You'll make
                                    people happy and they'll love you for it.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="lg:ml-10 mt:10 mb-10 lg:mt-0 bg-white px-8 lg:w-3/6 pt-5 rounded-lg w-full">
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
            </div>
        </div>
    )
}