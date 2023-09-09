import { Dispatch, SetStateAction, createContext } from 'react';

type SuccessContextType = {
    success: boolean;
    openDialog: Dispatch<SetStateAction<boolean>>
}

const SuccessContext = createContext({} as SuccessContextType);

export default SuccessContext;