import { useDispatch } from 'react-redux';
import { INC, DEC } from '../redux/actionTypes';
import { Button } from 'react-bootstrap';

const Control = () => {
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: INC });

  const decrement = () => dispatch({ type: DEC });

  return (
    <div className="main">
      <h3>control</h3>
      <Button onClick={increment} variant="success">
        INCEMENT
      </Button>
      <Button onClick={decrement} variant="danger">
        DECREMENT
      </Button>
    </div>
  );
};

export default Control;
