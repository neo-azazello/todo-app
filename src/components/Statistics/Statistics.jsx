import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { todoContext } from "../../context/TodoContext";

function Statistics() {
  const {
    state: { todos },
  } = useContext(todoContext);

  console.log(todos);

  const completedTodo = todos?.filter((item) => item.complete === true);
  const dueTodos = todos?.filter((item) => new Date(item.due) < new Date());

  return (
    <Row className="m-1 p-4">
      <Col>
        <h2 className="text-primary text-center">My ToDo Statistics</h2>
        <p className="text-center">
          Completed:{" "}
          <span data-testid="completed-count">{completedTodo?.length}</span> |
          Due: <span data-testid="due-todo">{dueTodos?.length}</span>
        </p>
      </Col>
    </Row>
  );
}

export default Statistics;
