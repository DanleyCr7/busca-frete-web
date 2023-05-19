import { Dispatch, SetStateAction, createContext } from 'react';

type SnackContextType = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>
}

const SnackContext = createContext({} as SnackContextType);

export default SnackContext;