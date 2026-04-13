import { useRef, useState } from "react";
import Input from "./components/input";
import Button from "./components/button";

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
  const ENTER_KEY_CODE = 13;

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
        <div className="bg-slate-100 mb-4 flex p-4 justify-between">
          <Input
            value={inputVal}
            onChange={changeInputValue}
            onKeyUp={handleKeyUp}
            ref={inputRef}
          />
          <Button onClick={addItem} disabled={!inputVal}>
            Add
          </Button>
        </div>
      ) : null}
      <ul>
        {users
          .filter(({ name }) => name.includes(inputSearch))
          .map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
      </ul>
    </div>
  );
};

export default App;
