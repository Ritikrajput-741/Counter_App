import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../store/slice/counterSlice.js";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  console.log(count);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "48px", color: "#333", margin: 0 }}>{count}</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => dispatch(increment())}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          +
        </button>
        {
          <button
            disabled={count === 0}
            onClick={() => dispatch(decrement())}
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              cursor: "pointer",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            -
          </button>
        }
        <button
          onClick={() => dispatch(reset())}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            cursor: "pointer",
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
