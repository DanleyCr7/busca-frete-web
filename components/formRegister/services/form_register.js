import { addDoc, collection, getDocs, Timestamp } from "firebase/firestore";
import { db, auth } from '../../../firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth'

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

export const resgisterUser = (email, password = 'busca@frete') => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
        console.log(res.user)
    })
    .catch(err => console.log(err.message));
}

export const checkEmailIsValid = ( email ) => {

    // don't remember from where i copied this code, but this works.
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( re.test(email) ) {
        return false;
    }
    else {
        return true;
    }

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
