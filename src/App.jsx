import Control from './Components/Control';
import Counter from './Components/Counter';
import FormCopm from './Components/Form';
import List from './Components/List';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SET_COUNTER, SET_LIST } from './redux/actionTypes';

const lilstFromBackEnd = [
  { id: 1, label: 'Lear React' },
  { id: 2, label: 'Lear Redux' },
  { id: 3, label: 'Lear Node JS' },
  { id: 4, label: 'Lear Express' },
  { id: 5, label: 'Lear MongoDB' },
];
const dataFromBackend = 3000;

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //Fetch
    dispatch({ type: SET_COUNTER, payload: dataFromBackend });
    dispatch({ type: SET_LIST, payload: lilstFromBackEnd });
  }, []);
  return (
    <div>
      <List myData={4534534534534}/>
      <FormCopm />
      <Counter />
      <Control />
    </div>
  );
};

export default App;
