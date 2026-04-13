import Input from "./components/Input";
import Button from "./components/Button";
import AddItem from "./components/AddItem";
import List from "./components/List";
import useList from "./hooks/useList";
const App = () => {
  const {
    data,
    inputVal,
    inputSearch,
    canAdd,
    inputRef,
    toggleCanAdd,
    changeInputSearch,
    changeInputValue,
    handleKeyUp,
    addItem,
  } = useList();

  return (
    <div className=" p-4 rounded-lg mt-10 ml-10 shadow-lg">
      <div>
        <Input
          value={inputSearch}
          onChange={changeInputSearch}
          placeholder="type to searching..."
        />
        <Button onClick={() => toggleCanAdd()}>+Add Item</Button>
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
        {console.log("data: ", data)}
        <List data={data} inputSearch={inputSearch} />
      </ul>
    </div>
  );
};

export default App;
