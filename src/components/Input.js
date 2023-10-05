function Input(props, references) {
  const { type, placeholder, value, className, onChange, inputRef } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      ref={inputRef}
      onChange={onChange}
      className={className}
    />
  );
}

export default Input;
