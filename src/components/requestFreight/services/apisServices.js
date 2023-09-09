import cep from "cep-promise";

export const searchCep = (cep_value) => {
    return cep(cep_value);
}