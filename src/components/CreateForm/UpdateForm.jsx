import React, { useContext, useEffect, useRef } from "react";
import {
  Col,
  Row,
  FormControl,
  InputGroup,
  Form,
  Button,
} from "react-bootstrap";
import { TodoContext } from "../../context/TodoContext";

function UpdateForm() {
  const { updateTodo, cancelOperation, todoId, todos } =
    useContext(TodoContext);

  const oneTodo = todos.filter((item) => item.id === todoId);
  const [item] = oneTodo;

  const todoInputRef = useRef();
  const dueInputRef = useRef();

  useEffect(() => {
    todoInputRef.current.value = item.todo;
    dueInputRef.current.value = item.due;
  }, [item]);

  return (
    <Row className="m-1 p-1">
      <Col lg="11" className="mx-auto">
        <Form onSubmit={updateTodo}>
          <Row className="bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
            <Col>
              <InputGroup size="lg">
                <FormControl
                  className="border-0 add-todo-input bg-transparent rounded"
                  name="todo"
                  required
                  ref={todoInputRef}
                />
              </InputGroup>
            </Col>
            <Col className="col-auto m-0 px-2 d-flex align-items-center">
              <InputGroup size="lg">
                <FormControl
                  type="date"
                  title="Set a due date"
                  className="border-0 bg-transparent p-1"
                  name="due"
                  ref={dueInputRef}
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
                onClick={() => cancelOperation()}
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
