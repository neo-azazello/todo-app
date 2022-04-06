import React from "react";
import todoicon from "../../assets/no-todo.png";

import {
  NoDataContent,
  NoDataWrapper,
  NoDataIcon,
  NoDataMessage,
  NoDataHelper,
  NoDataImage,
} from "./NoData.styled";

function NoData() {
  return (
    <NoDataWrapper>
      <NoDataContent>
        <NoDataIcon>
          <NoDataImage src={todoicon} alt="" />
        </NoDataIcon>
        <NoDataMessage>No ToDo added yet.</NoDataMessage>
        <NoDataHelper>
          In order to add todo enter value above and press Enter.
        </NoDataHelper>
      </NoDataContent>
    </NoDataWrapper>
  );
}

export default NoData;
