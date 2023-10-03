function Input(props) {
  const { type, placeholder, value, className, onChange } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
}

export default Input;
