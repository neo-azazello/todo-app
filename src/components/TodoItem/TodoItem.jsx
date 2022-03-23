import React, { useContext } from "react";
import { Col, Row, InputGroup } from "react-bootstrap";
import { TodoContext } from "../../context/TodoContext";
import { longDateFormat } from "../../services/date";

function TodoItem(item) {
  const { todo, due, complete, id, order, length } = item;
  const { markAsDone, getTodoId, deleteTodo, moveUp, moveDown } =
    useContext(TodoContext);

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
            onClick={markAsDone}
            onChange={(e) => {}}
          />
        </InputGroup>
      </Col>

      <Col lg={5} className="pl-0">
        <h3 className="edit-todo-input">{todo}</h3>
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
            <h5 className="m-0 p-0 px-2" onClick={() => getTodoId(id)}>
              <i
                className="fa fa-pencil text-info btn m-0 p-0"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Edit todo"
              ></i>
            </h5>
            <h5 className="m-0 p-0 px-2" onClick={() => deleteTodo(id)}>
              <i
                className="fa fa-trash-o text-danger btn m-0 p-0"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Delete todo"
              ></i>
            </h5>
            {order <= 0 ? (
              <h5 className="m-0 p-0 px-2">
                <i
                  className="fa fa-chevron-up text-primary btn disabled m-0 p-0"
                  title="Move up"
                ></i>
              </h5>
            ) : (
              <h5 className="m-0 p-0 px-2" onClick={() => moveUp(id)}>
                <i
                  className="fa fa-chevron-up text-primary btn m-0 p-0"
                  title="Move up"
                ></i>
              </h5>
            )}

            {order + 1 >= length ? (
              <h5 className="m-0 p-0 px-2">
                <i
                  className="fa fa-chevron-down disabled text-warning btn m-0 p-0"
                  title="Move down"
                ></i>
              </h5>
            ) : (
              <h5 className="m-0 p-0 px-2" onClick={(e) => moveDown(id)}>
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
