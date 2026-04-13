import Input from "../components/Input";
import Button from "../components/Button";

const AddItem = ({
  inputVal,
  changeInputValue,
  handleKeyUp,
  inputRef,
  addItem,
}) => (
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
);

export default AddItem;
