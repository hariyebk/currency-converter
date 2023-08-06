import { useEffect, useState } from "react";
export default function App() {
  const [amount, setAmount] = useState(1);
  const [value, setValue] = useState("");
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("EUR");
  useEffect(() => {
    const controller = new AbortController();
    const getdata = async () => {
      try {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${currency1}&to=${currency2}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("failed to fetch data");
        const data = await res.json();
        setValue(data.rates[currency2]);
      } catch (err) {
        if (err.name !== "AbortError") console.error(err);
      }
    };

    if (currency1 === currency2) return setValue(amount);
    getdata();

    return () => {
      controller.abort();
    };
  }, [amount, currency1, currency2]);

  return (
    <div>
      <input
        type="Number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={currency1} onChange={(e) => setCurrency1(e.target.value)}>
        <option value="USD"> USD </option>
        <option value="EUR"> EUR </option>
        <option value="INR"> INR </option>
        <option value="CAD"> CAD </option>
      </select>
      <select value={currency2} onChange={(e) => setCurrency2(e.target.value)}>
        <option value="USD"> USD </option>
        <option value="EUR"> EUR </option>
        <option value="INR"> INR </option>
        <option value="CAD"> CAD </option>
      </select>
      {value ? <p> {value} </p> : null}
    </div>
  );
}
