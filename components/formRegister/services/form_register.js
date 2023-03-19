import { addDoc, collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from '../../../firebase';

export const verifyFieldsEmpety = async ( fields = [], target) => {
    var empty_field = false;
    await fields.map((item) => {
        if(!target[item].value){
            empty_field = true;
        };
    });
    return empty_field;
}

export const saveDriver = async (target) => {
    await addDoc(collection(db, 'motoristas'), {
        nome: target['nome']?.value,
        telefone: target['telefone']?.value,
        bairro: target['bairro']?.value,
        referencia: target['referencia']?.value,
        peso: target['peso']?.value == "sim" ? true : false,
        usa_carro: target['usa_carro']?.value == "sim" ? true : false,
        trabalha_finais_de_semana: target['trabalha_finais_de_semana']?.value == "sim" ? true : false,
        created: Timestamp.now()
    });
}

export const findNumberPhoneExisting = async (phone) => {
    var phoneExist = false;
    const drivers = await allDrivers();

    drivers.map(item => {
        if(phone == item?.telefone){
            phoneExist = true;
        }
    })

    return phoneExist;
}


export const allDrivers = () => getDocs(collection(db, "motoristas")).then((querySnapshot)=>{               
    const newData = querySnapshot.docs
        .map((doc) => ({...doc.data(), id:doc.id }));
    return newData;
})
