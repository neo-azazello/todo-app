import React, { useContext, useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { todoContext } from "../../context/TodoContext";
import { ACTIONS } from "../../reducer/actionTypes";

function CreateForm() {
  const {
    dispatch,
    state: { lastTodoItemOrder },
  } = useContext(todoContext);

  const [todo, setTodo] = useState({
    todo: "",
    due: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setTodo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_NEW_TODO,
      payload: {
        ...todo,
        id: Date.now(),
        complete: false,
        order: lastTodoItemOrder + 1,
      },
    });
    setTodo({
      todo: "",
      due: "",
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
                  value={todo.todo}
                  onChange={handleChange}
                  placeholder="Add new todo ... "
                  aria-label="Todo"
                  className="border-0 add-todo-input bg-transparent rounded"
                  name="todo"
                  required
                />
              </InputGroup>
            </Col>
            <Col className="col-auto m-0 px-2 d-flex align-items-center">
              <InputGroup size="lg">
                <FormControl
                  value={todo.due}
                  onChange={handleChange}
                  type="date"
                  title="Set a due date"
                  className="border-0 bg-transparent p-1"
                  name="due"
                />
              </InputGroup>
            </Col>
            <Col className="col-auto px-0 mx-0 mr-2">
              <Button type="submit" variant="primary">
                Add todo
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default CreateForm;
