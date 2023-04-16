import { ButtonPerson } from "../ButtonPerson";
import { RadioPerson } from "../radio";
import {useContext} from 'react'
import SuccessContext from "../../context/successContext";
import { verifyFieldsEmpety, saveDriver, findNumberPhoneExisting, resgisterUser, checkEmailIsValid }  from './services/form_register'
import { IMaskInput } from "react-imask";

export function FormRegister() {
    const successContext = useContext(SuccessContext);
    const mask = [{ mask: '(00) 0000-0000' }, { mask: '(00) 00000-0000' }];

    const fields =  [
       'nome',
       'telefone',
       'bairro',
       'referencia',
       'peso',
       'usa_carro',
       'trabalha_finais_de_semana',
    ];

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await saveDriver(e.target);
            successContext.openDialog();
        } catch (err) {
            successContext.openDialog(false, err);
        }
    }
    
    return (
        <div className="lg:ml-10 lg:absolute pb-1 lg:-right-8 lg:top-0 mt-10 mb-10 lg:mt-0 bg-white px-8 lg:w-3/6 pt-5 rounded-lg w-full">
                    <form onSubmit={handleSubmit}>
                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-md text-gray-500">Nome</label><br />
                            <input name="nome" placeholder="Digite seu nome" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                        </div>
                        
                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-md text-gray-500">Email</label><br />
                            <input name="email" placeholder="Digite seu email" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                        </div>
                        
                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-md text-gray-500">Celular (zap)</label><br />
                            <IMaskInput mask={mask} name="telefone" placeholder="Telefone" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                        </div>

                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-md text-gray-500">Onde você está localizado?</label><br />
                            <input name="bairro" placeholder="Bairro" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                        </div>
                            
                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-md text-gray-500">Referência?</label><br />
                            <input name="referencia" placeholder="Referência" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                        </div>
                            
                        {/* <--> */}
                        {/* <div className="w-full">
                            <label className="text-md text-gray-500">Seu telefone de trabalho?</label><br />
                            <input name="telefone_trabalho" placeholder="Seu telefone" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                        </div> */}
                            
                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-md text-gray-500">Você pode levantar até 50kg?</label><br />
                            <RadioPerson name="peso"/>
                        </div>
                            
                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-md text-gray-500">Você possui um carro e quer usá-lo?</label><br />
                            <RadioPerson name="usa_carro"/>
                        </div>
                            
                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-md text-gray-500">Você pode trabalhar nos finais de semana?</label><br />
                            <RadioPerson name="trabalha_finais_de_semana"/>
                        </div>
                        <div className="my-5">
                            <ButtonPerson type="submit" text="Enviar"/>                            
                        </div>
                    </form>
                </div>
    )
}
