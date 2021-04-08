import { useSelector } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  return (
    <div className="main">
      <h3>Counter</h3>
      <h1>{counter}</h1>
    </div>
  );
};

export default Counter;
