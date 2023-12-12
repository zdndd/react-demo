import {
  memo,
  useState,
  useEffect,
  useReducer,
  useMemo,
  useCallback,
} from "react";

const Input = memo(function Input({ onChange }) {
  console.log("子组件渲染");
  return <input type="text" onChange={(e) => onChange(e.target.value)} />;
});

function App() {
  console.log("app开始");
  const changeHandler = useCallback((value) => console.log(value), []);
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Input onChange={changeHandler} />
      <button onClick={() => setCount(count + 1)}>count</button>
    </div>
  );
}

export default App;
