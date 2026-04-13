import { useRef, useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import { ENTER_KEY_CODE } from "./constants/KEY_MAP";
import AddItem from "./components/AddItem";
import List from "./components/List";

//********************* sample data *********************
const DATA = [
  { id: 1, name: "j" },
  { id: 2, name: "m" },
  { id: 3, name: "jm" },
];

const App = () => {
  const [users, setUsers] = useState(DATA);
  const [inputVal, setInputVal] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [canAdd, setCanAdd] = useState(false);
  const inputRef = useRef(null);

  const addItem = () => {
    setUsers([...users, { id: users.length + 1, name: inputVal }]);
    setInputVal("");
    inputRef.current.focus();
  };

  const changeInputValue = (value) => setInputVal(value);
  const changeInputSearch = (value) => setInputSearch(value);

  const handleKeyUp = (e) => {
    if (e.keyCode === ENTER_KEY_CODE) addItem();
  };

  return (
    <div className=" p-4 rounded-lg mt-10 ml-10 shadow-lg">
      <div>
        <Input
          value={inputSearch}
          onChange={changeInputSearch}
          placeholder="type to searching..."
        />
        <Button onClick={() => setCanAdd(!canAdd)}>+Add Item</Button>
      </div>
      {canAdd ? (
        <AddItem
          inputVal={inputVal}
          changeInputValue={changeInputValue}
          handleKeyUp={handleKeyUp}
          inputRef={inputRef}
          addItem={addItem}
        />
      ) : null}
      <ul>
        <List data={users} inputSearch={inputSearch} />
      </ul>
    </div>
  );
};

export default App;
