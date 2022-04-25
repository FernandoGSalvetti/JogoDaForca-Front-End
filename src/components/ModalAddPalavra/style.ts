import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    height: 2rem;
    padding: 0.25rem;
    width: 100%;
    border-radius: 0.25rem 1px solid;
  }
  button {
    background: var(--green);
    color: #ffff;
    height: 3rem;
    padding: 0 1rem;
    margin-top: 1rem;
    border-radius: 0.25rem;
    border-color: transparent;
    transition: 0.25s;
    :hover {
        filter: brightness(0.9);
    }
  }
`;
