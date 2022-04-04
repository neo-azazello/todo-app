import React, { useContext, useState } from "react";
import {
  Col,
  Row,
  FormControl,
  InputGroup,
  Form,
  Button,
} from "react-bootstrap";
import { todoContext } from "../../context/TodoContext";
import { ACTIONS } from "../../reducer/actionTypes";

function UpdateForm() {
  const {
    state: { editedTodo },
    dispatch,
  } = useContext(todoContext);

  const [updatedTodo, setUpdatedTodo] = useState({
    todo: editedTodo?.todo,
    due: editedTodo?.due,
  });

  const handleChange = ({ target: { name, value } }) => {
    setUpdatedTodo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    dispatch({ type: ACTIONS.SELECT_EDITED_TODO, payload: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.UPDATE_SELECTED_TODO,
      payload: {
        ...editedTodo,
        ...updatedTodo,
      },
    });
  };

  return (
    <Row className="m-1 p-1">
      <Col lg="11" className="mx-auto">
        <Form onSubmit={handleSubmit}>
          <Row className="bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
            <Col>
              <InputGroup size="lg">
                <FormControl
                  value={updatedTodo.todo}
                  onChange={handleChange}
                  className="border-0 add-todo-input bg-transparent rounded"
                  name="todo"
                  required
                />
              </InputGroup>
            </Col>
            <Col className="col-auto m-0 px-2 d-flex align-items-center">
              <InputGroup size="lg">
                <FormControl
                  value={updatedTodo.due}
                  onChange={handleChange}
                  type="date"
                  title="Set a due date"
                  className="border-0 bg-transparent p-1"
                  name="due"
                />
              </InputGroup>
            </Col>
            <Col className="col-auto px-0 mx-0 mr-2">
              <Button type="submit" variant="danger">
                Update todo
              </Button>
              <Button
                type="button"
                variant="warning"
                className="ml-1"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default UpdateForm;
