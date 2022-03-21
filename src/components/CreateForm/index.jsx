import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import UpdateForm from "./UpdateForm";
import CreateForm from "./CreateForm";

function Forms() {
  const [editable, setEditable] = useState(false);

  const { todoId, close } = useContext(TodoContext);

  useEffect(() => {
    setEditable(true);
  }, [todoId]);

  useEffect(() => {
    setEditable(false);
  }, [close]);

  return <>{editable ? <UpdateForm /> : <CreateForm />}</>;
}

export default Forms;
