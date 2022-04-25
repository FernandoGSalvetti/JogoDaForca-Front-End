import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    th {
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;
      &:first-child {
        color: var(--text-title);
      }
      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
export const Button = styled.button`
  background: var(--green);
  border: 0 solid;
  padding: 1rem;
  color: white;
  border-radius: 0.25rem;
  transition: 0.5s filter;
  & + button {
    margin-left: 1rem;
  }
  &.btn-excluir {
    background: var(--red);
  }
  :hover{
      filter: brightness(0.9);
  }
`;
export const Header = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
`