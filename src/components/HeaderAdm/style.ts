import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 0.5rem;
  background-color: var(--green);
  color: #ffff;
  display: flex;
  align-items: center;
  div {
    margin-left: 1rem;
    a {
      color: #ffff;
      text-decoration: none;
      :hover {
        text-decoration: underline;
        color: var(--green-dark);
      }
      & + a {
        margin-left: 1rem;
      }
    }
  }
`;
