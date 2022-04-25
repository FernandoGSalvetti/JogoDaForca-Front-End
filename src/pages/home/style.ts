import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  button {
    background-color: var(--green-dark);
    border: 0;
    padding: 0 2rem;
    height: 4rem;
    width: 15rem;
    margin-top: -2rem;
    color: #fff;
    transition: filter 0.5s;
    &:hover{
        filter: brightness(0.9);
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

