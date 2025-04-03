import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [percent, setPercent] = useState(0);
  const [myPercent, setMyPercent] = useState(0);

  function valInput(val) {
    setBill(Number(val));
  }

  function valPercent(val) {
    setPercent(parseFloat(val));
  }
  function valMyPercent(val) {
    setMyPercent(parseFloat(val));
  }

  const results = Math.round(bill * (1 + percent + myPercent));
  function reset() {
    setBill("");
    setPercent(0);
    setMyPercent(0);
  }
  return (
    <div className="container">
      <Result
        valueBil={bill}
        calInput={valInput}
        myVal={myPercent}
        calMyPercent={valMyPercent}
        percentVal={percent}
        calPercent={valPercent}
        toggleReset={reset}
      >
        <span className="main-text">{`You pay $${results} ($${bill} + ${(
          percent + myPercent
        ).toFixed(2)})`}</span>{" "}
        <br />
        <button onClick={reset}>reset</button>
      </Result>
    </div>
  );
}

function Result({
  valueBil,
  calInput,
  calPercent,
  percentVal,
  myVal,
  calMyPercent,
  children,
}) {
  return (
    <div className="calculator">
      <h4
        style={{ display: "flex", justifyContent: "center", fontSize: "large" }}
      >
        Calculate Cashier
      </h4>{" "}
      <br />
      <BillInput valueBil={valueBil} calInput={calInput} />
      <FriendsRatings
        percentVal={percentVal}
        text="How did Your friend like the service?"
        calPercent={calPercent}
      />
      <MyRatings
        myVal={myVal}
        text="how did you like the service?"
        calMyPercent={calMyPercent}
      />
      {children}
    </div>
  );
}

function BillInput({ valueBil, calInput }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        value={valueBil > 0 ? valueBil : ""}
        onChange={(e) => calInput(e.target.value)}
        placeholder="Bill"
      />
    </div>
  );
}

function MyRatings({ myVal, text, calMyPercent }) {
  return (
    <div>
      <span>{text}</span>
      <select value={myVal} onChange={(e) => calMyPercent(e.target.value)}>
        <option value={0}>Dissatisfied</option>
        <option value={0.05}>it was okay (5%)</option>
        <option value={0.1}>it was good (10%)</option>
        <option value={0.2}>Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}
function FriendsRatings({ calPercent, text, percentVal }) {
  return (
    <div>
      <span>{text}</span>
      <select value={percentVal} onChange={(e) => calPercent(e.target.value)}>
        <option value={0}>Dissatisfied</option>
        <option value={0.05}>it was okay (5%)</option>
        <option value={0.1}>it was good (10%)</option>
        <option value={0.2}>Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}
