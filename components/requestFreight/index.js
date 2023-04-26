import { ButtonPerson } from "../ButtonPerson";
import { RadioPerson } from "../radio";
import {useContext, useState} from 'react'
import SuccessContext from "../../context/successContext";
import { verifyFieldsEmpety, saveClient, checkEmailIsValid }  from './services/form_register'
import { IMaskInput } from "react-imask";
import { Chip, IconButton } from "@mui/material";
import { AddCircle, Search } from "@mui/icons-material";
import ViaCep from 'react-via-cep';
export function FormRequestFreight() {
    const successContext = useContext(SuccessContext);
    const [itens, setItens] = useState([]);
    const [item, setItem] = useState('');
    const [isCepSearch, setIsCepSearch] = useState(true);
    
    const [next, setNext] = useState(0);
    const [client, setClient] = useState({
        cep: null,
        address: null,
        number_home: null,
        neighborhood: null,
    });
    const [freight, setFreight] = useState({
        client_id : null,
        neighborhood_initial : null,
        neighborhood_finaly : null,
    });
    const mask_cpf = [{ mask: '000.000.000-00' }];
    const mask_phone = [{ mask: '(00) 0000-0000' }, { mask: '(00) 00000-0000' }];

    const fields =  [
       'nome',
       'telefone',
       'cpf',
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
            console.log(err);
            // successContext.openDialog(false, err);
        }
    }

    const addItem = () => {
        let itens_push = [...itens];
        itens_push.push(item);

        setItens(itens_push);
        setItem('');
    }

    const removeItem = (index) => {
        var itens_push = [...itens];
        
        if (index !== -1) {
            itens_push.splice(index, 1);
            setItens(itens_push);
        }
    }
    
    return (
        <div className="lg:top-0 mt-10 mb-10 lg:mt-0 bg-white px-8 pt-5 rounded-lg">
            <form onSubmit={handleSubmit}>
                {next == 0 ? (
                     <div>
                     {/* <--> */}
                     <div className="w-full">
                         <label className="text-md text-gray-500">Pra qual bairro voce deseja fazer o frete?</label><br />
                         <input
                         name="neighborhood_finaly" 
                         value={freight.neighborhood_finaly}
                         onChange={(e) => setFreight(prevState => ({
                            ...prevState,
                            neighborhood_finaly: e.target?.value ?? ''
                        }))} 
                         placeholder="Bairro destino" 
                         className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
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
                         <ButtonPerson onChange={() => setNext(1)} text="Próximo"/>                            
                     </div>
                 </div>
                ) :  next == 1 ?
                (
                    <div>
                     {/* <--> */}
                     <ViaCep cep={client.cep} lazy>
                        {({ data, loading, error, fetch }) => {
                            if (loading) {
                                return <p>loading...</p>
                            }
                            if (error) {
                                console.log(error);
                            }
                            if (data) {
                                console.log(data);
                                setClient(prevState => ({
                                    ...prevState,
                                    neighborhood: data.bairro,
                                    address: data.logradouro,
                                }))
                                setIsCepSearch(false);
                            }
                            return (
                                <div className="w-full flex">
                                    <div  className="w-5/6">
                                        <label className="text-md text-gray-500">CEP</label><br />
                                        <input
                                        name="cep" 
                                        value={client.cep}
                                        onChange={(e) => setClient(prevState => ({
                                            ...prevState,
                                            cep: e.target?.value ?? ''
                                        }))} 
                                        placeholder="ex: 64205460" 
                                        className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                                    </div>
                                    
                                    <div className="w-1/6 pt-4">
                                        <IconButton onClick={() => fetch()} aria-label="add">
                                            <Search />
                                        </IconButton>
                                    </div>
                                </div>
                            )
                        }}
                    </ViaCep>
                     {/* <--> */}
                     <div className="w-full w-full bg-green">
                        <label className="text-md text-gray-500">Bairro</label><br />
                        <input 
                            disabled={isCepSearch}
                            name="neighborhood" 
                            value={client.neighborhood}
                            onChange={(e) => setClient(prevState => ({
                                ...prevState,
                                neighborhood: e.target?.value ?? ''
                            }))} 
                            placeholder="Bairro" className="font-normal border-b-[1px] w-full placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" />
                     </div>
                     <br />
                     {/* <--> */}
                     <div className="w-full w-full bg-green">
                        <label className="text-md text-gray-500">Logradouro</label><br />
                        <input 
                            disabled={isCepSearch}
                            name="address"
                            value={client.address}
                            onChange={(e) => setClient(prevState => ({
                                ...prevState,
                                address: e.target?.value ?? ''
                            }))}
                            placeholder="Logradouro" className="font-normal border-b-[1px] w-full placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" />
                     </div>
                     <br />
                     {/* <--> */}
                     <div className="w-full w-full bg-green">
                        <label className="text-md text-gray-500">Numero</label><br />
                        <input 
                            disabled={isCepSearch}
                            name="number_home" 
                            value={client.number_home}
                            onChange={(e) => setClient(prevState => ({
                                ...prevState,
                                number_home: e.target?.value ?? ''
                            }))}
                            placeholder="Numero da casa" className="font-normal border-b-[1px] w-full placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" />
                     </div>
                     <div className="my-5">
                        <ButtonPerson onChange={() => setNext(0)} text="Anterior"/>                            
                    </div>
                         
                     <div className="my-5">
                         <ButtonPerson onChange={() => setNext(2)} text="Próximo"/>                            
                     </div>
                 </div>
                ):
                (
                    <div>
                        <div className="w-full">
                            <label className="text-md text-gray-500">Nome</label><br />
                            <input name="nome" placeholder="Digite seu nome" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                        </div>
            
                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-md text-gray-500">CPF</label><br />
                            <IMaskInput mask={mask_cpf} name="cpf" placeholder="CPF" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                        </div>
                        
                        {/* <--> */}
                        <div className="w-full">
                            <label className="text-md text-gray-500">Celular (zap)</label><br />
                            <IMaskInput mask={mask_phone} name="telefone" placeholder="Telefone" className="font-normal border-b-[1px] w-full mt-2 placeholder-opacity-50 placeholder-gray-400 block w-full rounded-sm pr-3 focus:outline-none" /><br />
                        </div>
                        <div className="my-5">
                            <ButtonPerson onChange={() => setNext(1)} text="Anterior"/>                            
                        </div>
                        <div className="my-5">
                            <ButtonPerson type="submit" text="Solicitar"/>                            
                        </div>
                    </div>
                ) }
            </form>
        </div>
    )

    // function FormRegister() {
    //     return (
            
    //     )
    // }
    
    // function FormRequest(){
    //     return(
           
    //     )
    // }
}

