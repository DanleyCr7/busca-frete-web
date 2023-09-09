import { Dispatch, SetStateAction, createContext } from 'react';

type MessageContextType = {
    message: String;
    setMessage: Dispatch<SetStateAction<String>>
}

const MessageContext = createContext({} as MessageContextType);

export default MessageContext;