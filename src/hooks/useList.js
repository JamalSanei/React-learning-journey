import { useRef, useState, } from "react";
import { ENTER_KEY_CODE } from "../constants/KEY_MAP";
import axios from "axios";


//====== test fetch data
const getData = async () => {
    const data = await axios.get('https://swapi.info/api/')

    // const jsonData = await data.json()
    console.log('data fetch result: ', data.data)
}

getData()
//=====================

const useList = () => {
    const [data, setData] = useState([]);
    const [inputVal, setInputVal] = useState("");
    const [inputSearch, setInputSearch] = useState("");
    const [canAdd, setCanAdd] = useState(false);
    const inputRef = useRef(null);

    const addItem = () => {
        setData([...data, { id: data.length + 1, name: inputVal }]);
        setInputVal("");
        inputRef.current.focus();
    };

    const changeInputValue = (value) => setInputVal(value);
    const changeInputSearch = (value) => setInputSearch(value);

    const handleKeyUp = (e) => {
        if (e.keyCode === ENTER_KEY_CODE) addItem();
    };

    const toggleCanAdd = () => setCanAdd(!canAdd);


    return {
        data,
        inputVal,
        inputSearch,
        canAdd,
        toggleCanAdd,
        changeInputSearch,
        changeInputValue,
        handleKeyUp,
        addItem,
        inputRef
    }
}


export default useList;
