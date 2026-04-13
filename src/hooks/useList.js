import { useRef, useState, } from "react";
import { ENTER_KEY_CODE } from "../constants/KEY_MAP";

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
        inputRef, toggleCanAdd,
        changeInputSearch,
        changeInputValue,
        handleKeyUp,
        addItem
    }
}


export default useList;
