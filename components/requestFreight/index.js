import { ButtonPerson } from "../ButtonPerson";
import { RadioPerson } from "../radio";
import {useContext, useState} from 'react'
import SuccessContext from "../../context/successContext";
import { verifyFieldsEmpety, saveClient, checkEmailIsValid }  from './services/form_register'
import { IMaskInput } from "react-imask";
import { Chip, IconButton } from "@mui/material";
import { AddCircle } from "@mui/icons-material";

export function FormRequestFreight() {
    const successContext = useContext(SuccessContext);
    const [itens, setItens] = useState([]);
    const [item, setItem] = useState('');
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
            var empty_field = await verifyFieldsEmpety(fields, e.target);

            if(empty_field){
                successContext.openDialog(false, "Preencha todos os campos");
                return;
            }
            
            await saveClient(e.target);
            
            successContext.openDialog();
        } catch (err) {
            successContext.openDialog(false, err);
        }
    }


    const addItem = () => {
        let itens_push = itens;
        itens_push.push(item);

        setItens(itens_push);
        setItem('');
    }

    const removeItem = (index) => {
        let itens_push = itens;
        itens_push.splice(index, 1);
        // console.log(itens_push);
        // setItens(itens_push);
        setItens([]);
        setItens(itens_push);
        // setItem('');
    }


    
    return (
        <div className="lg:top-0 mt-10 mb-10 lg:mt-0 bg-white px-8 pt-5 rounded-lg">
                    <form onSubmit={handleSubmit}>
                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-md text-gray-500">Nome</label><br />
                            <input name="nome" placeholder="Digite seu nome" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                        </div>
                        
                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-md text-gray-500">Celular (zap)</label><br />
                            <IMaskInput mask={mask} name="telefone" placeholder="Telefone" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                        </div>

                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-md text-gray-500">Bairro de onde voce esta</label><br />
                            <input name="bairro" placeholder="Bairro" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                        </div>
                            
                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-md text-gray-500">Bairro pra onde voce quer ir?</label><br />
                            <input name="referencia" placeholder="Referência" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                        </div>
                            
                        {/* <--> */}
                        <div className="w-full flex w-full bg-green">
                            <div  className="w-5/6">
                                <label className="text-md text-gray-500">Item</label><br />
                                <input name="items" value={item} onChange={(e) => setItem(e.target.value)} placeholder="Adicione 1 item por vez" className="font-normal border-b-[1px] w-full placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" />
                                <span className="text-md text-gray-500 text-sm font-light">Exemplo: Geladeira</span><br />
                            </div>
                            {/*  */}
                            <div className="w-1/6 pt-4">
                                <IconButton onClick={() => addItem()} aria-label="add">
                                    <AddCircle />
                                </IconButton>
                            </div>
                        </div>
                        <div className='grid grid-cols-3'>
                            {itens.map((item, index) => {
                                return(
                                    <Chip key={index} label={item}  className='ml-1' variant="outlined" onDelete={() => removeItem(index)} />
                                )
                            })}
                        </div>
                            
                        <div className="my-5">
                            <ButtonPerson type="submit" text="Solicitar"/>                            
                        </div>
                    </form>
                </div>
    )
}
