import { createContext, useContext, useState } from "react";


const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)





const AppContext = ({children}) => {
    const [idNumber, setIdNumber] = useState('');
    const [idVerified, setidVerified] = useState(false);
    const [hospitalSelected, setHospitalSelected] = useState(false);




    return <GlobalContext.Provider value={{idNumber,setIdNumber,idVerified,setidVerified,
        setHospitalSelected,hospitalSelected,
    }} >
        {children}
    </GlobalContext.Provider>
};

export default AppContext;