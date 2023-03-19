import { Timestamp } from "firebase/firestore";

export const verifyFieldsEmpety = async ( fields = [], target) => {
    var empty_field = false;
    await fields.map((item) => {
        if(!target[item].value){
            empty_field = true;
        };
    });
    return empty_field;
}

export const saveMotorist = async (target) => {
    await addDoc(collection(db, 'motoristas'), {
        nome: target['nome'].value,
        telefone: target['telefone'].value,
        bairro: target['bairro'].value,
        referencia: target['referencia'].value,
        telefone_trabalho: target['telefone_trabalho'].value,
        peso: target['peso'].value == "sim" ? true : false,
        usa_carro: target['usa_carro'].value == "sim" ? true : false,
        trabalha_finais_de_semana: target['trabalha_finais_de_semana'].value == "sim" ? true : false,
        created: Timestamp.now()
    });
}
