const Counter = ({ counter, setCounter }) => {
  return (
    <>
      <div className="full-counter">
        <div className="counter">
          {counter > 0 ? (
            <button
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              -
            </button>
          ) : (
            <button className="hidden">-</button>
          )}

          <p>{counter}</p>
          {counter < 10 ? (
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              +
            </button>
          ) : (
            <button className="hidden">+</button>
          )}
        </div>
        <div className="reset-button">
          <button
            onClick={() => {
              setCounter(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
