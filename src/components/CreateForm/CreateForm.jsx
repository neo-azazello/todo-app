import React, { useContext } from "react";
import {
  Col,
  Row,
  FormControl,
  InputGroup,
  Form,
  Button,
} from "react-bootstrap";
import { TodoContext } from "../../context/TodoContext";

function CreateForm() {
  const { addNewTodo } = useContext(TodoContext);

  return (
    <Row className="m-1 p-1">
      <Col lg="11" className="mx-auto">
        <Form onSubmit={addNewTodo}>
          <Row className="bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
            <Col>
              <InputGroup size="lg">
                <FormControl
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
