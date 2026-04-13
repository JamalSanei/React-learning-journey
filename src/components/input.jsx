const Input = ({ value, onChange, onKeyUp, placeholder, inputRef }) => (
  <div>
    <input
      className="border rounded p-2 mr-2"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyUp={onKeyUp}
      ref={inputRef}
    />
  </div>
);

export default Input;
