import { useState } from "react";

const DATA = [
  { id: 1, name: "j" },
  { id: 2, name: "m" },
  { id: 3, name: "jm" },
];

const App = () => {
  const [users, setUsers] = useState(DATA);
  const [inputVal, setInputVal] = useState("");
  const ENTER_KEY_CODE = 13;

  const addItem = () => {
    setUsers([...users, { id: users.length + 1, name: inputVal }]);
    setInputVal("");
  };

  const changeInputValue = ({ target }) => setInputVal(target.value);

  const handleKeyUp = (e) => {
    if (e.keyCode === ENTER_KEY_CODE) addItem();
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputVal}
          onChange={changeInputValue}
          onKeyUp={handleKeyUp}
        />
        <button onClick={addItem} disabled={!inputVal}>
          Add
        </button>
      </div>
      <ul>
        {users.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
