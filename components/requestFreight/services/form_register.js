import { Timestamp } from "firebase/firestore";
import api from '../../../config/axios';

export const verifyFieldsEmpety = async ( fields = [], target) => {
    var empty_field = false;
    await fields.map((item) => {
        if(!target[item].value){
            empty_field = true;
        };
    });
    return empty_field;
}

export const saveClient = async (target) => {

    try {
        var form = {
            name: target['nome']?.value,
            phone: target['telefone']?.value,
            neighborhood: target['bairro']?.value,
            reference: target['referencia']?.value,
            weight: target['peso']?.value == "sim" ? true : false,
            use_car: target['usa_carro']?.value == "sim" ? true : false,
            work_weekends: target['trabalha_finais_de_semana']?.value == "sim" ? 1 : 0,
        };
    
        return api.post('drivers', 
            form
        );
    } catch (error) {
        return error;
    }
    
}


