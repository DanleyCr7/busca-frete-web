import { Store, LocalActivity, MoveToInbox } from '@mui/icons-material';
import MyMap from '../../components/map';
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Divider } from '@mui/material';
import React from 'react';
import { MenuHamburguer } from '../../components/menuHamburguer';
const hasWindow = typeof window !== 'undefined';

export default function Estimative() {
    const width = hasWindow ? window.innerWidth : null;
    const icons = [
        {
           name: 'Store Delivery',
           icon: <Store/>
        },
        {
            name: 'Store Delivery',
            icon: <LocalActivity/>
        },
        {
            name: 'Store Delivery',
            icon: <MoveToInbox/>
        },
        {
            name: 'Store Delivery',
            icon: <Store/>
        },
        {
            name: 'Store Delivery',
            icon: <Store/>
        },
        {
            name: 'Store Delivery',
            icon: <Store/>
        },
        {
            name: 'Store Delivery',
            icon: <Store/>
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

    return (
        <div className='w-full'>
        <div className="lg:invisible lg:h-2">
            <MenuHamburguer />
        </div>
        <div className='justify-self-center flex flex-col items-center lg:mt-5 invisible lg:visible'>
            <div className='flex justify-center'>
                {drawer.map((item, index)=>{
                    let buyNow = 'font-semibold border-solid border-2 border-indigo-900 rounded text-xl p-3 text-indigo-900';
                    let drawerList = 'font-semibold text-xl text-indigo-900';
                    return(
                        <div className='lg:m-2 cursor-pointer'>
                            <span className={index == 5 ? buyNow : drawerList }>{item}</span>
                        </div>
                    );
                })}
               
            </div>
            <Divider className='w-3/6 mt-5'/>
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
                        let col3 = 'bg-gray-100 m-1 flex flex-col items-center py-6 px-3';
                        let colFull = 'col-span-3 m-1 bg-gray-100 flex flex-col items-center py-6 px-3';
                        return(
                            <button className={index == 6 ? colFull: col3}>   
                                <React.Fragment>
                                    {item.icon}
                                </React.Fragment>
                                <span className='lg:text-md text-sm font-semibold'>{item.name}</span>
                            </button>
                        )
                    })}
                </div>
                {/* mapa */}
                <div className='p-1'>
                    <MyMap/>
                </div>
            </div>
            <div className='flex flex-col items-center mt-8 mb-4 text-indigo-700'>
                <span className='font-semibold'>Learn more about how it works</span>
                <ChevronDownIcon className="h-7 w-7 self-center" />
            </div>
        </div>
        </div>
    )
}