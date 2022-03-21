import { Container, Col, Row } from "react-bootstrap";
import "./App.css";
import Forms from "./components/CreateForm";
import Statistics from "./components/Statistics/Statistics";
// import TodoFilter from "./components/TodoFilter/TodoFilter";
import TodoList from "./components/TodoList/TodoList";
import TodoContextProvider from "./context/TodoContext";

function App() {
  return (
    <TodoContextProvider>
      <Container className="m-5 p-2 rounded mx-auto bg-light shadow">
        <Statistics />
        <Forms />
        <div className="p-2 mx-4 border-black-25 border-bottom"></div>
        {/* <TodoFilter /> */}
        <Row className="m-1 p-1">
          <Col lg={11} className="mx-auto">
            <TodoList />
          </Col>
        </Row>
      </Container>
    </TodoContextProvider>
  );
}

export default App;
