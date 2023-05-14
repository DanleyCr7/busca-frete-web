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
import luggersWithFurniture from "/img/luggers-with-furniture.png";
import luggersLoadingVan from "/img/luggers-loading-van.png";

import moveis from "/img/moveis.png";
import movingGeneric from "/img/moving-generic.png";
import { Devider } from '../../components/devider';
import { FormRequestFreight } from '../../components/requestFreight';

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
        '1',
    ];

    return (
        <>
            <Head>
                <title>Busca frete</title>
                <link rel="icon" href="/favicon.ico" />
                {/* <script
                    src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBjuqBcsXPhQEui5qk-5VQzIkNWj8P0wsI&callback=initMap&libraries=&v=weekly`}
                    async
                ></script> */}
            </Head>
            <div className='w-full'>
                {/* <div className="lg:invisible lg:h-2">
                    <MenuHamburguer />
                </div> */}
                {/* <div className='justify-self-center flex flex-col items-center lg:mt-5 invisible lg:visible'>
                    <div className='flex justify-center mb-2'>
                        {drawer.map((item, index) => {
                            let buyNow = 'font-semibold border-solid border-2 border-indigo-900 rounded text-xl p-3 text-indigo-900';
                            let drawerList = 'text-xl text-indigo-900';
                            return (
                                <div className='lg:m-2 cursor-pointer' key={index}>
                                    <span className={index == 5 ? buyNow : drawerList}>{item}</span>
                                </div>
                            );
                        })}

                    </div>
                    <Divider className='w-3/6 mt-' />
                </div> */}

                <div id='initiative' className="items-center flex flex-col lg:pt-5">
                    <div className="text-center mb-4">
                        <h2 className="font-bold text-3xl text-gray-700">Solicite seu frete</h2>
                        <span className="text-gray-400 text-lg">Conte-nos um pouco sobre sua mudança e ajudaremos você a um de nossos parceiros.</span>
                    </div>
                    <div className='flex lg:flex-row lg:flex-row flex-col justify-center'>
                        {/* quadrados */}
                        <div className='lg:w-2/6 w-full'>
                            <Image src={luggersLoadingVan} alt="me" />
                        </div>
                        <div className='lg:w-2/6 w-full'>
                            <FormRequestFreight/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mt-8 mb-4 text-indigo-700'>
                        <span className='font-semibold'>Saiba mais sobre como funciona</span>
                        <ChevronDownIcon className="h-7 w-7 self-center" />
                    </div>
                </div>
            </div>
            <div className='lg:flex lg:justify-center lg:flex-row flex flex-col sm:items-center'>
                <div className='lg:w-2/6 lg:w-4/4 px-4 lg:mr-8'>
                    <div>
                        <h2 className="font-bold text-3xl text-gray-700 mb-3 lg:text-left text-center">Motores e um caminhão</h2>
                        <span className="text-gray-400 text-lg mt-5 lg:text-left text-center">Não levante um dedo. Economize tempo enquanto nossos fortes buscadores fazem o trabalho para você.</span>
                    </div>
                    <div className='mt-5'>
                        <a href='#initiative' className="flex flex-col items-center cursor-pointer text-gray-600 w-full lg:w-1/6 rounded-sm mb-2 text-semibold bg-yellow-300 lg:rounded-sm py-2 lg:py-3">
                            Iniciar
                        </a>
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
                        <h2 className="font-bold text-3xl text-gray-900 mb-3 lg:text-left text-center">Na sua agenda</h2>
                        <p className="text-gray-400 text-lg mt-5 lg:text-left text-center">Diga-nos quando chegar, desde 1 hora até 30 dias de antecedência.</p>
                    </div>
                    {/* <p className="text-gray-400 text-sm font-semibold mt-5 mb-4">Veja como nos comparamos com outras opções:</p>
                    <div className='flex'>
                        <Button style={{ backgroundColor: '#fff', color: 'rgb(40, 48, 96, 1)', border: '1px solid rgb(40, 48, 96, 1)', }}>A sofa</Button>
                        <Button style={{ backgroundColor: 'rgb(40, 48, 96, 1)', color: '#fff' }}>Leving room</Button>
                        <Button style={{ backgroundColor: 'rgb(40, 48, 96, 1)', color: '#fff' }}>1 Br.apt</Button>
                    </div>
                    <div className='mt-5'>
                        <ButtonPerson onChange={() => { }} btn={true} text="Iniciar" />
                    </div> */}
                </div>
                <div className='lg:w-2/6 w-4/4 px-4 mt-10 lg:mt-0'>
                    <Image src={luggersWithFurniture} alt="me" />
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <Devider />
            </div>
            <div className='lg:flex lg:justify-center items-center lg:flex-row flex flex-col'>
                <div className='lg:w-2/6 w-4/4 px-4 mt-10 lg:mt-0'>
                    <Image src={moveis} alt="me" />
                </div>
                <div className='lg:w-2/6 mt-5 lg:mt-0 w-4/4 px-4 mr-8'>
                    <div>
                        <h2 className="font-bold text-3xl text-gray-900 mb-3 lg:text-right text-center">Suas coisas em boas mãos</h2>
                        <p className="text-gray-400 text-right text-lg mt-5">Todas as suas coisas são 100% cobertas desde o momento da coleta até a entrega.</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <Devider />
            </div>
            <div className='flex flex-col items-center'>
                <p className="text-blue-400 text-right text-sm mt-5">Economize tempo e suas costas</p>
                <h2 className="font-bold text-3xl text-gray-900 mb-3 text-right">Agende sua mudança hoje</h2>
                <a href='#initiative' className="flex flex-col items-center cursor-pointer text-gray-600 w-full lg:w-1/6 w-3/6 rounded-sm mb-2 text-semibold bg-yellow-300 lg:rounded-sm py-2 lg:py-3">
                    Iniciar estimativa
                </a>
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
                <h2 className="font-bold lg:text-5xl text-2xl text-gray-900 text-right">Milhares de clientes satisfeitos</h2>
                <p className="text-gray-400 text-right lg:text-lg text-sm mt-2">Descubra por que milhares de pessoas adoram nosso serviço.</p>
            </div>
            <div className='grid lg:grid-cols-5 grid-cols-1 gap-6 px-8 mb-24'>                
                {avaliacoes.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col px-4 py-3 bg-gray-100 rounded-lg'>
                            <div className='lg:w-46'>
                                <p>“Lugg is such a fast, easy, and convenient service! I've used them twice now and both moves have been amazing. I highly recommend this service to anyone who has no other way to transport big items! ”</p>
                            </div>
                            <div className="flex mt-3">
                                <StarIcon className="h-5 w-5 text-yellow-500 self-center" />
                                <StarIcon className="h-5 w-5 text-yellow-500 self-center" />
                                <StarIcon className="h-5 w-5 text-yellow-500 self-center" />
                                <StarIcon className="h-5 w-5 text-yellow-500 self-center" />
                                <StarIcon className="h-5 w-5 text-yellow-500 self-center" />
                            </div>
                            <p className="text-gray-900 text-center font-semibold text-2xl">Cliente</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}