import { createContext } from "react";

const defaultValues = {
    locale: 'en',
    setLocale: () => {}
}

export default createContext(defaultValues);