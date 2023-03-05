import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Button from '@mui/material/Button';

import { Store, LocalActivity, MoveToInbox } from '@mui/icons-material';
import { ChevronDownIcon, StarIcon } from '@heroicons/react/solid'
import { Divider } from '@mui/material';

import { MenuHamburguer } from '../../components/menuHamburguer';
import { ButtonPerson } from "../../components/ButtonPerson";
import MyMap from '../../components/map';

// imagens
import collaborathorTruk from "/img/collaborathorTruk.png";
import moveis from "/img/moveis.png";
import movingGeneric from "/img/moving-generic.png";
import { Devider } from '../../components/devider';

const hasWindow = typeof window !== 'undefined';

export default function Estimative() {
    const width = hasWindow ? window.innerWidth : null;
    const icons = [
        {
            name: 'Store Delivery',
            icon: <Store />
        },
        {
            name: 'Store Delivery',
            icon: <LocalActivity />
        },
        {
            name: 'Store Delivery',
            icon: <MoveToInbox />
        },
        {
            name: 'Store Delivery',
            icon: <Store />
        },
        {
            name: 'Store Delivery',
            icon: <Store />
        },
        {
            name: 'Store Delivery',
            icon: <Store />
        },
        {
            name: 'Store Delivery',
            icon: <Store />
        },
    ];

    const drawer = [
        'Shop',
        'Service',
        'Cities',
        'Partner',
        'Get an estimative',
        'Book now',
    ];

    const avaliacoes = [
        '1',
        '1',
        '1',
        '1',
        '1',
        '1',
        '1',
        '1',
        '1',
        '1',
    ];

    return (
        <>
            <Head>
                <title>Busca frete</title>
                <link rel="icon" href="/favicon.ico" />
                <script
                    src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBjuqBcsXPhQEui5qk-5VQzIkNWj8P0wsI&callback=initMap&libraries=&v=weekly`}
                    async
                ></script>
            </Head>
            <div className='w-full'>
                <div className="lg:invisible lg:h-2">
                    <MenuHamburguer />
                </div>
                <div className='justify-self-center flex flex-col items-center lg:mt-5 invisible lg:visible'>
                    <div className='flex justify-center'>
                        {drawer.map((item, index) => {
                            let buyNow = 'font-semibold border-solid border-2 border-indigo-900 rounded text-xl p-3 text-indigo-900';
                            let drawerList = 'font-semibold text-xl text-indigo-900';
                            return (
                                <div className='lg:m-2 cursor-pointer' key={index}>
                                    <span className={index == 5 ? buyNow : drawerList}>{item}</span>
                                </div>
                            );
                        })}

                    </div>
                    <Divider className='w-3/6 mt-5' />
                </div>

                <div className="items-center flex flex-col w-full lg:pt-5">
                    <div className="text-center mb-4">
                        <h2 className="font-bold text-3xl text-gray-700">Get an estimate</h2>
                        <span className="text-gray-400 text-lg">Tell us a bit about your move and we’ll help you calculate the cost.</span>
                    </div>
                    <div className='flex lg:flex-row md:flex-row flex-col'>
                        {/* quadrados */}
                        <div className='grid grid-cols-3'>
                            {icons.map((item, index) => {
                                let col3 = 'bg-gray-100 m-1 flex flex-col items-center py-6 px-8';
                                let colFull = 'col-span-3 m-1 bg-gray-100 flex flex-col items-center py-6 px-8';
                                return (
                                    <button key={index} className={index == 6 ? colFull : col3}>
                                        <React.Fragment>
                                            {item.icon}
                                        </React.Fragment>
                                        <span className='lg:text-md text-sm font-semibold'>{item.name}</span>
                                    </button>
                                )
                            })}
                        </div>
                        {/* mapa */}
                        {/* <div className='p-1 lg:pl-0 pl-6 justify-self-center'>
                            <MyMap />
                        </div> */}
                    </div>
                    <div className='flex flex-col items-center mt-8 mb-4 text-indigo-700'>
                        <span className='font-semibold'>Learn more about how it works</span>
                        <ChevronDownIcon className="h-7 w-7 self-center" />
                    </div>
                </div>
            </div>
            <div className='lg:flex lg:justify-center lg:flex-row flex flex-col sm:items-center'>
                <div className='lg:w-2/6 w-4/4 px-4 mr-8'>
                    <div>
                        <h2 className="font-bold text-3xl text-gray-700 mb-3">Movers and a truck</h2>
                        <span className="text-gray-400 text-lg mt-5">Don’t lift a finger. Save time & save your back while our strong vetted luggers get the job done for you.</span>
                    </div>
                    <div className='mt-5'>
                        <ButtonPerson onChange={() => { }} btn={true} text="Iniciar" />
                    </div>
                </div>
                <div className='lg:w-2/6 w-4/4 px-4 mt-10 lg:mt-0'>
                    <Image src={collaborathorTruk} alt="me" />
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <Devider />
            </div>
            <div className='lg:flex lg:justify-center lg:flex-row flex flex-col'>
                <div className='lg:w-2/6 mt-5 lg:mt-0 w-4/4 px-4'>
                    <div>
                        <h2 className="font-bold text-3xl text-gray-900 mb-3">On your schedule</h2>
                        <p className="text-gray-400 text-lg mt-5">Tell us when to arrive, from within 1 hour up to 30 days in advance.</p>
                    </div>
                    <p className="text-gray-400 text-sm font-semibold mt-5 mb-4">See how we stack up against other options:</p>
                    <div className='flex'>
                        <Button style={{ backgroundColor: '#fff', color: 'rgb(40, 48, 96, 1)', border: '1px solid rgb(40, 48, 96, 1)', }}>A sofa</Button>
                        <Button style={{ backgroundColor: 'rgb(40, 48, 96, 1)', color: '#fff' }}>Leving room</Button>
                        <Button style={{ backgroundColor: 'rgb(40, 48, 96, 1)', color: '#fff' }}>1 Br.apt</Button>
                    </div>
                    <div className='mt-5'>
                        <ButtonPerson onChange={() => { }} btn={true} text="Iniciar" />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-10">
                    <div className='grid grid-rows-5 rounded-[15px] text-center grid-flow-col gap-5 px-2 bg-gray-100'>
                        <div className='font-semibold pt-5'>
                            Renting a truck
                        </div>
                        <div>
                            Truck included
                        </div>
                        <div>
                            -
                        </div>
                        <div>
                            4 hours
                        </div>
                        <div className='font-bold'>
                            $70
                        </div>
                    </div>
                    <div className='grid grid-rows-5 rounded-[15px] text-center grid-flow-col gap-5 px-2 bg-white-100'>
                        <div className='font-semibold pt-5'>
                            Renting a truck
                        </div>
                        <div>
                            Truck included
                        </div>
                        <div>
                            2 movers
                        </div>
                        <div>
                            2 hours
                        </div>
                        <div className='font-bold'>
                            $200
                        </div>
                    </div>
                    <div className='grid grid-rows-5 rounded-[15px] text-center grid-flow-col gap-5 px-2 text-white bg-indigo-900'>
                        <div className='font-semibold pt-5'>
                            Renting a truck
                        </div>
                        <div>
                            Truck included
                        </div>
                        <div>
                            2 movers
                        </div>
                        <div>
                            1 hours
                        </div>
                        <div className='font-bold'>
                            $70
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <Devider />
            </div>
            <div className='lg:flex lg:justify-center lg:flex-row flex flex-col'>
                <div className='lg:w-2/6 w-4/4 px-4 mt-10 lg:mt-0'>
                    <Image src={moveis} alt="me" />
                </div>
                <div className='lg:w-2/6 mt-5 lg:mt-0 w-4/4 px-4 mr-8'>
                    <div>
                        <h2 className="font-bold text-3xl text-gray-900 mb-3 text-right">Your stuff in good hands</h2>
                        <p className="text-gray-400 text-right text-lg mt-5">All your stuff is 100% covered from the moment we pick it up until it's delivered.</p>
                    </div>
                    <div className='mt-5 flex justify-end'>
                        <ButtonPerson onChange={() => { }} btn={true} text="Iniciar" />
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <Devider />
            </div>
            <div className='flex flex-col items-center'>
                <p className="text-blue-400 text-right text-sm mt-5">Save time & your back</p>
                <h2 className="font-bold text-3xl text-gray-900 mb-3 text-right">Schedule your move today</h2>
                <ButtonPerson onChange={() => { }} btn={true} text="Iniciar estimativa" />
                <div className='lg:w-4/6 w-4/4 px-4 mt-10 lg:mt-0'>
                    <Image src={movingGeneric} alt="me" />
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <Devider />
            </div>
            <div className='flex flex-col items-center mt-5 mb-5'>
                <div className="flex">
                    <StarIcon className="h-12 w-12 text-yellow-500 self-center" />
                    <StarIcon className="h-12 w-12 text-yellow-500 self-center" />
                    <StarIcon className="h-12 w-12 text-yellow-500 self-center" />
                    <StarIcon className="h-12 w-12 text-yellow-500 self-center" />
                    <StarIcon className="h-12 w-12 text-yellow-500 self-center" />
                </div>
                <h2 className="font-bold text-5xl text-gray-900 text-right">Thousands of happy customers</h2>
                <p className="text-gray-400 text-right text-lg">Find out why thousands of people love our service.</p>
            </div>
            <div className='grid grid-rows-2 grid-flow-col gap-6 px-8 mb-24'>                {avaliacoes.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col px-4 py-3 bg-gray-100 rounded-lg'>
                            <div className='w-44'>
                                <p>“Lugg is such a fast, easy, and convenient service! I've used them twice now and both moves have been amazing. I highly recommend this service to anyone who has no other way to transport big items! ”</p>
                            </div>
                            <div className="flex mt-3">
                                <StarIcon className="h-5 w-5 text-yellow-500 self-center" />
                                <StarIcon className="h-5 w-5 text-yellow-500 self-center" />
                                <StarIcon className="h-5 w-5 text-yellow-500 self-center" />
                                <StarIcon className="h-5 w-5 text-yellow-500 self-center" />
                                <StarIcon className="h-5 w-5 text-yellow-500 self-center" />
                            </div>
                            <p className="text-gray-900 text-center font-semibold text-2xl">Luiz</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}