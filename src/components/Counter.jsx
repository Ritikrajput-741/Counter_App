import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../store/slice/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #0f172a, #1e3a8a, #6d28d9, #0f172a)",
      backgroundSize: "400% 400%",
      animation: "gradient 10s ease infinite",
      fontFamily: "'Poppins', sans-serif",
    },

    card: {
      width: "380px",
      padding: "40px",
      borderRadius: "24px",
      backdropFilter: "blur(15px)",
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.2)",
      boxShadow: "0 15px 40px rgba(0,0,0,.4)",
      textAlign: "center",
    },

    title: {
      color: "#fff",
      fontSize: "32px",
      marginBottom: "25px",
      fontWeight: "bold",
    },

    counter: {
      color: "#22d3ee",
      fontSize: "80px",
      fontWeight: "bold",
      textShadow: "0 0 20px #22d3ee",
      marginBottom: "35px",
    },

    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      flexWrap: "wrap",
    },

    increment: {
      background: "#22c55e",
      color: "#fff",
      border: "none",
      padding: "14px 24px",
      borderRadius: "12px",
      cursor: "pointer",
      fontSize: "20px",
      fontWeight: "bold",
      transition: "0.3s",
      boxShadow: "0 5px 15px rgba(34,197,94,.4)",
    },

    decrement: {
      background: "#ef4444",
      color: "#fff",
      border: "none",
      padding: "14px 24px",
      borderRadius: "12px",
      cursor: "pointer",
      fontSize: "20px",
      fontWeight: "bold",
      transition: "0.3s",
      boxShadow: "0 5px 15px rgba(239,68,68,.4)",
    },

    reset: {
      background: "#3b82f6",
      color: "#fff",
      border: "none",
      padding: "14px 24px",
      borderRadius: "12px",
      cursor: "pointer",
      fontSize: "18px",
      fontWeight: "bold",
      transition: "0.3s",
      boxShadow: "0 5px 15px rgba(59,130,246,.4)",
    },
  };

  return (
    <>
      <style>
        {`
          @keyframes gradient{
            0%{background-position:0% 50%;}
            50%{background-position:100% 50%;}
            100%{background-position:0% 50%;}
          }

          button:hover{
            transform:translateY(-5px) scale(1.05);
          }

          button:active{
            transform:scale(.95);
          }

          button:disabled{
            opacity:.35;
            cursor:not-allowed;
            transform:none;
          }
        `}
      </style>

      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Redux Counter</h1>

          <div style={styles.counter}>{count}</div>

          <div style={styles.buttonContainer}>
            <button
              style={styles.increment}
              onClick={() => dispatch(increment())}
            >
              +
            </button>

            <button
              style={styles.decrement}
              disabled={count === 0}
              onClick={() => dispatch(decrement())}
            >
              −
            </button>

            <button style={styles.reset} onClick={() => dispatch(reset())}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
