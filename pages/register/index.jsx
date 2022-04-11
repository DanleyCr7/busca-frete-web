import sale_icon from "/img/sale-icon.png"
import vans from "/img/vans.png"
import money from "/img/money.png"
import Image from "next/image";
import { Divider } from "@mui/material";
import { useRef } from "react";
import { FormRegister } from "../../components/formRegister";
import { constants } from "../../plugins/constants";

export default function Register() {
    const ref = useRef();
    return (
        <div className="items-center flex flex-col bg-parceria-register bg-no-repeat bg-black w-full lg:pt-20">
            <div className="flex flex-col relative lg:flex-row w-full lg:w-5/6 px-4 self-center lg:mt-20">
                <div className="lg:w-3/6 my-10 lg:mt-0 lg:mb-8">
                    <h1 className="text-3xl text-white font-bold">Ganhe dinheiro com seu caminhão</h1>
                    <h1 className="text-2xl text-gray-300 font-normal">
                        Seja ativo, conheça novas pessoas e ganhe até $ 2,5k/semana!
                    </h1>
                    <div className="w-3/5 my-10">
                        <Image className="mt-8" src={vans} alt="busca frete" />
                    </div>
                    <h1 className="text-3xl text-white font-bold">Não possui um caminhão?</h1>
                    <h1 className="text-lg text-gray-300 font-normal">
                        Não se preocupe, você ainda pode se inscrever como ajudante!
                        Possuir um veículo não é um requisito para se tornar
                        um Lugeiro. Basta selecionar "Não" para a pergunta "Você
                        possui um caminhão e quer usá-lo com Lugg?".
                    </h1>
                    <FormRegister />

                    <div className="my-10 py-10">
                        <Divider style={{backgroundColor : '#fff'}}/>
                    </div>

                    <h1 className="text-3xl text-white text-center font-bold">Bem vindo ao BUSCA FRETE</h1>
                    <div className="flex my-10">
                        <div className="w-40 mr-4">
                            <Image className="mt-8" src={money} alt="busca frete" />
                        </div>
                        <div>
                            <h1 className="text-lg text-white font-bold">Trabalhe quando quiser</h1>
                            <div className="w-5/6 text-justify"> 
                                <p className="text-normal text-gray-400">
                                    Trabalhar nos finais de semana ou todos os dias de
                                    a semana. Defina seu próprio horário e
                                    trabalhar quando quiser.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="flex my-10">
                        <div className="w-40 mr-4">
                            <Image className="mt-8" src={money} alt="busca frete" />
                        </div>
                        <div>
                            <h1 className="text-lg text-white font-bold">Faça as pessoas felizes</h1>
                            <div className="w-5/6 text-justify"> 
                                <p className="text-normal text-gray-400">
                                    Como um Lugger seu trabalho é tirar o estresse
                                    fora de movimento e entrega. Você vai fazer
                                    pessoas felizes e eles vão te amar por isso.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="my-10 ">
                        <Divider style={{backgroundColor : '#fff'}}/>
                    </div>
                    <h1 className="text-3xl text-white text-center font-bold">O que você estará movendo</h1>
                    {/*  */}
                    <div className="flex mt-5 w-full justify-center">
                        {/* ---- */}
                        <div className="flex flex-col mx-10 items-center">
                            <div className="w-24">
                                <Image className="mt-8" src={sale_icon} alt="busca frete" />
                            </div>
                            <h1 className="text-white font-semibold text-xl">Compras na loja</h1>
                        </div>
                        {/* ---- */}
                        <div className="flex flex-col items-center">
                            <div className="w-24">
                                <Image className="mt-8" src={sale_icon} alt="busca frete" />
                            </div>
                            <h1 className="text-white font-semibold text-xl">Compras na loja</h1>
                        </div>
                    </div>
                    <div className="flex mt-5 w-full justify-center mb-10">
                         {/* ---- */}
                        <div className="flex flex-col mx-10 items-center">
                            <div className="w-24">
                                <Image className="mt-8" src={sale_icon} alt="busca frete" />
                            </div>
                            <h1 className="text-white font-semibold text-xl">Compras na loja</h1>
                        </div>
                        {/* ---- */}
                        <div className="flex flex-col  items-center">
                            <div className="w-24">
                                <Image className="mt-8" src={sale_icon} alt="busca frete" />
                            </div>
                            <h1 className="text-white font-semibold text-xl">Compras na loja</h1>
                        </div>
                        {/* ---- */}
                    </div>
                <div className="mb-5">
                    <h1 className="text-3xl text-white text-center font-bold">Quem se qualifica</h1>
                </div>
                    {
                        constants.quem_se_qualifica.map((item, index)=>{
                            return(
                            <div className="flex mt-5">
                                <div className="px-4 py-2 w-10 h-10 rounded-full bg-blue-500 mx-3">
                                    <span className="text-white font-sans">{index + 1}</span>
                                </div>
                                <div className="ml-2">
                                    <h1 className="text-white font-semibold text-2xl lg:text-2xl">{item.title}</h1>
                                    <p className="text-gray-400 mt-2 text-sm lg:text-base text-left" >{item.subtitle}</p>
                                </div>
                            </div>
                            );                        
                        })
                    }
                    <div className="my-10 ">
                        <Divider style={{backgroundColor : '#fff'}}/>
                    </div>
                    <div className="mb-5">
                        <h1 className="text-3xl text-white text-center font-bold">Tem perguntas?</h1>
                    </div>
                    {
                        constants.have_questions.map((item, index)=>{
                            return(
                                <div className="ml-2">
                                    <h1 className="text-white font-semibold text-2xl lg:text-2xl">{item.title}</h1>
                                    <p className="text-gray-400 mt-2 text-sm lg:text-base text-left" >{item.subtitle}</p>
                                </div>
                            );                        
                        })
                    }
                </div>
            </div>
        </div>
    )
}