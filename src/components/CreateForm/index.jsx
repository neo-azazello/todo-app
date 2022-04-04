import React, { useContext } from "react";
import { todoContext } from "../../context/TodoContext";
import UpdateForm from "./UpdateForm";
import CreateForm from "./CreateForm";

function Forms() {
  const {
    state: { editedTodo },
  } = useContext(todoContext);
  return <>{editedTodo !== null ? <UpdateForm /> : <CreateForm />}</>;
}

export default Forms;
