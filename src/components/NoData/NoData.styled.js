import styled from "styled-components";

export const NoDataWrapper = styled.div`
  border-radius: 4px;
`;

export const NoDataContent = styled.div`
  padding: 48px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NoDataIcon = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  border-radius: 200px;
  justify-content: center;
  background-color: #f7fafc;
  box-shadow: 0px 2px 1px #e1e3ec;
`;

export const NoDataImage = styled.img`
  width: 170px;
`;

export const NoDataMessage = styled.div`
  color: #38a169;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 0.85rem;
`;

export const NoDataHelper = styled.div`
  color: #a2a5b9;
  font-size: 0.875rem;
`;
