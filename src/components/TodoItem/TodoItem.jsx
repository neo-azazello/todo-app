import React from "react";
import { Col, InputGroup, Row } from "react-bootstrap";
import { longDateFormat } from "../../services/date";

function TodoItem({ todo, todoOperations, isFirstItem, isLastItem }) {
  const { todo: label, due, complete, id, order } = todo;

  const formatted = longDateFormat(due);

  return (
    <Row
      className={`align-items-center  ${complete ? "completed " : ""}`}
      draggable="true"
    >
      <Col lg={1}>
        <InputGroup className="d-flex align-items-center">
          <input
            type="checkbox"
            checked={complete}
            value={id}
            onChange={() => todoOperations.setTodoMarkStatus(todo)}
          />
        </InputGroup>
      </Col>

      <Col lg={5} className="pl-0">
        <h3 className="edit-todo-input" title={label}>
          {label}
        </h3>
      </Col>
      {due ? (
        <Col lg={3} className="m-1 p-0 px-3">
          <Row>
            <Col
              style={{ minWidth: "182px" }}
              className="col-auto d-flex align-items-center rounded bg-white border border-warning"
            >
              <i
                className="fa fa-hourglass-2 my-2 px-2 text-warning btn"
                title="Due on date"
              ></i>
              <h6 className="text my-2 pr-2">{formatted}</h6>
            </Col>
          </Row>
        </Col>
      ) : (
        <Col lg={3} className="m-1 p-0 px-3" />
      )}
      <Col lg={2} className="pl-0 pr-0">
        {complete ? (
          ""
        ) : (
          <div className="row d-flex align-items-center justify-content-end">
            <h5
              className="m-0 p-0 px-2"
              onClick={() => todoOperations.setEditedTodo(todo)}
            >
              <i
                className="fa fa-pencil text-info btn m-0 p-0"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Edit todo"
              ></i>
            </h5>
            <h5
              className="m-0 p-0 px-2"
              onClick={() => todoOperations.deleteTodo(id)}
            >
              <i
                className="fa fa-trash-o text-danger btn m-0 p-0"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Delete todo"
              ></i>
            </h5>
            {isFirstItem ? (
              <h5 className="m-0 p-0 px-2">
                <i
                  className="fa fa-chevron-up text-primary btn disabled m-0 p-0"
                  title="Move up"
                ></i>
              </h5>
            ) : (
              <h5
                className="m-0 p-0 px-2"
                onClick={() => todoOperations.move(order, order - 1)}
              >
                <i
                  className="fa fa-chevron-up text-primary btn m-0 p-0"
                  title="Move up"
                ></i>
              </h5>
            )}

            {isLastItem ? (
              <h5 className="m-0 p-0 px-2">
                <i
                  className="fa fa-chevron-down disabled text-warning btn m-0 p-0"
                  title="Move down"
                ></i>
              </h5>
            ) : (
              <h5
                className="m-0 p-0 px-2"
                onClick={(e) => todoOperations.move(order, order + 1)}
              >
                <i
                  className="fa fa-chevron-down text-warning btn m-0 p-0"
                  title="Move down"
                ></i>
              </h5>
            )}
          </div>
        )}
      </Col>
    </Row>
  );
}

export default TodoItem;
