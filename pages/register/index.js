import sale_icon from "/img/sale-icon.png"
import vans from "/img/vans.png"
import money from "/img/money.png"
import Image from "next/image";
import { Divider } from "@mui/material";
import { useRef } from "react";
import { FormRegister } from "../../components/formRegister";

export default function Register() {
    const ref = useRef();
    return (
        <div className="items-center flex flex-col bg-parceria-register bg-no-repeat bg-black w-full lg:pt-20">
            <div className="flex flex-col relative lg:flex-row w-full lg:w-5/6 px-4 self-center lg:mt-20">
                <div className="lg:w-3/6 my-10 lg:my-0">
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
                    <FormRegister />

                    <div className="my-10 py-10">
                        <Divider style={{backgroundColor : '#fff'}}/>
                    </div>

                    <h1 className="text-3xl text-white font-bold">Become a Lugger</h1>
                    {/*  */}
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
                    {/*  */}
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
                    {/*  */}
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
                     <div className="my-10 ">
                        <Divider style={{backgroundColor : '#fff'}}/>
                    </div>
                    {/*  */}
                    <div className="flex mt-5 w-full justify-center">
                        {/* ---- */}
                        <div className="flex flex-col mx-10 items-center">
                            <div className="w-24">
                                <Image className="mt-8" src={sale_icon} alt="busca frete" />
                            </div>
                            <h1 className="text-white font-bold text-xl">Store Purchases</h1>
                        </div>
                        {/* ---- */}
                        <div className="flex flex-col items-center">
                            <div className="w-24">
                                <Image className="mt-8" src={sale_icon} alt="busca frete" />
                            </div>
                            <h1 className="text-white font-bold text-xl">Store Purchases</h1>
                        </div>
                    </div>
                    <div className="flex mt-5 w-full justify-center mb-10">
                         {/* ---- */}
                        <div className="flex flex-col mx-10 items-center">
                            <div className="w-24">
                                <Image className="mt-8" src={sale_icon} alt="busca frete" />
                            </div>
                            <h1 className="text-white font-bold text-xl">Store Purchases</h1>
                        </div>
                        {/* ---- */}
                        <div className="flex flex-col  items-center">
                            <div className="w-24">
                                <Image className="mt-8" src={sale_icon} alt="busca frete" />
                            </div>
                            <h1 className="text-white font-bold text-xl">Store Purchases</h1>
                        </div>
                        {/* ---- */}
                    </div>
                </div>
            </div>
        </div>
    )
}