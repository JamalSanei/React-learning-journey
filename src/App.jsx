import { useRef, useState } from "react";

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

  const changeInputValue = ({ target }) => setInputVal(target.value);

  const handleKeyUp = (e) => {
    if (e.keyCode === ENTER_KEY_CODE) addItem();
  };

  return (
    <div className=" p-4 rounded-lg mt-10 ml-10 shadow-lg">
      <div>
        <input
          className="border rounded p-2 mr-2"
          type="text"
          placeholder="type to searching..."
          value={inputSearch}
          onChange={({ target }) => setInputSearch(target.value)}
        />
        <button
          className="
          bg-slate-500 rounded border p-2
          border-blue-500  text-white"
          onClick={() => setCanAdd(!canAdd)}
        >
          +Add Item
        </button>
      </div>
      {canAdd ? (
        <div className="bg-slate-100 mb-4 flex p-4 justify-between">
          <input
            type="text"
            value={inputVal}
            onChange={changeInputValue}
            onKeyUp={handleKeyUp}
            ref={inputRef}
            className="border rounded mr-2 px-2"
          />
          <button
            className="bg-white p-2 rounded cursor-pointer hover:bg-slate-200"
            onClick={addItem}
            disabled={!inputVal}
          >
            Add
          </button>
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
