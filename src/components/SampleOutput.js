function SampleOutput(props) {
  const displayOutput = () => {
    const items = props.items;
    return (
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="App">
      <h1>Simple Output</h1>

      <div>{displayOutput()}</div>
    </div>
  );
}

export default SampleOutput;
