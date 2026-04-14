const Input = ({ value, onChange, onKeyUp, placeholder, ref }) => (
  <div>
    <input
      className="border rounded p-2 mr-2"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyUp={onKeyUp}
      ref={ref}
    />
  </div>
);

export default Input;
