const ErrorExample = () => {
  let count = 0;

  const handleClick = () => {
    count += 1;
    console.log(count);
  }
  return (
    <div>
      {/* <h1>useState error example</h1>; */}
      <h2>{count}</h2>
      <button type="button" onClick={handleClick} className="btn" > increase </button>
    </div>
  );
};

export default ErrorExample;
