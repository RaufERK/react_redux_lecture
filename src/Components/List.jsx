import { useSelector, useDispatch } from 'react-redux';
import { Button, Table, Form } from 'react-bootstrap';
import { useState } from 'react';
import { DELETE, EDIT } from '../redux/actionTypes';

const List = () => {
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch({ type: DELETE, payload: id });
  };

  const [active, setActive] = useState(null);
  const [editLabel, setEditLabel] = useState();

  const setActiveHandler = (id, label) => {
    setActive(id);
    setEditLabel(label);
  };

  const editHandler = () => {
    dispatch({ type: EDIT, payload: { id: active, label: editLabel } });
    setActive(null);
  };

  return (
    <div className="main">
      <h3>List</h3>
      <Table size="sm" striped>
        {list.map(({ id, label }) => (
          <tr key={id}>
            <td>
              {active === id ? (
                <Form.Control
                  type="text"
                  onChange={({ target }) => setEditLabel(target.value)}
                  value={editLabel}
                />
              ) : (
                label
              )}
            </td>
            <td>
              {active === id ? (
                <Button onClick={() => editHandler(id)} variant="secondary">
                  SET
                </Button>
              ) : (
                <Button
                  onClick={() => setActiveHandler(id, label)}
                  variant="secondary"
                >
                  EDIT
                </Button>
              )}
            </td>
            <td>
              <Button onClick={() => deleteHandler(id)} variant="danger">
                DELETE
              </Button>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default List;
