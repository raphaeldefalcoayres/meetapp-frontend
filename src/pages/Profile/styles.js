import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  max-width: 370px;
  margin: 30px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 5px 0 15px;
    }

    button {
      background: #f94d6a;
      border: 0;
      border-radius: 4px;
      height: 44px;
      color: #fff;
      font-weight: bold;
      margin: 5px 0 0;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, "#F94D6A")};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }

  > button {
    width: 100%;
    background: #f64c75;
    border: 0;
    border-radius: 4px;
    height: 44px;
    color: #fff;
    font-weight: bold;
    margin: 10px 0 0;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, "#f64c75")};
    }
  }
`;
