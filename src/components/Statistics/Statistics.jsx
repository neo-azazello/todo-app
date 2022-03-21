import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { TodoContext } from "../../context/TodoContext";

function Statistics() {
  const { todos } = useContext(TodoContext);

  const completedTodo = todos?.filter((item) => item.complete === true);
  const dueTodos = todos?.filter((item) => new Date(item.due) < new Date());

  return (
    <Row className="m-1 p-4">
      <Col>
        <h2 className="text-primary text-center">My ToDo Statistics</h2>
        <p className="text-center">
          Completed: {completedTodo?.length} | Due: {dueTodos?.length}
        </p>
      </Col>
    </Row>
  );
}

export default Statistics;
