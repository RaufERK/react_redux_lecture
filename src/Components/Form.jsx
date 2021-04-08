import { Form, Button } from 'react-bootstrap';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_ITEM } from '../redux/actionTypes';

const FormCopm = () => {
  const formValue = useRef();
  const dispatch = useDispatch();

  const addItem = () => {
    const payload = formValue.current.value;
    dispatch({ type: ADD_ITEM, payload });
    formValue.current.value = '';
  };

  return (
    <div className="main">
      <h3>Form</h3>
      <Form.Control ref={formValue} type="text" />
      <Button className="mt-3" onClick={addItem}>
        ADD
      </Button>
    </div>
  );
};

export default FormCopm;
