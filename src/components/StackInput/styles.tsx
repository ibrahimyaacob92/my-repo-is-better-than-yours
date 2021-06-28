import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  row-gap: 5px;

  div {
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 12px;
  }

  input {
    background-color: transparent;
    border: none;
    font-size: 20px;
    padding: 5px 0;

    ::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }
  input:focus {
    outline: none;
  }
`;
