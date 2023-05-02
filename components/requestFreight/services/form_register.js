import { Timestamp } from "firebase/firestore";
import api from '../../../config/axios';
import { formatNumber } from "../../../config/helper";

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
            cpf: formatNumber(e.target['cpf']?.value ?? ''),
        };
    
        return api.post('clients', 
            form
        );
    } catch (error) {
        return error;
    }
    
}


