import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 280px;
  width: 100%;
  margin: 10px auto;
`;

export const ActivatorButton = styled.button`
  align-items: center;
  background-color: inherit;
  background: #fff;
  border: 1px solid transparent;
  box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.06);
  border-radius: 5px;
  color: inherit;
  display: flex;
  color: #777;
  font-size: inherit;
  max-width: 280px;
  width: 100%;
  padding: 1em;

  span.fa {
    position: absolute;
    right: 1em;
    font-size: 20px;
  }
`;

export const DropdownList = styled.ul<{ active: boolean }>`
  background-color: #ececec;
  border: 1px solid transparent;
  box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.06);
  border-radius: 5px;
  color: black;
  display: ${(props) => (props.active ? "block" : "none")};
  margin: 8px 0 0;
  max-width: 280px;
  width: 100%;
  padding: 0;
  position: absolute;
  li {
    list-style: none;
    margin: 0;
    a,
    a:link {
      text-decoration: none;
      color: #6E2B96;
      display: block;
      padding: 0.5em 1em;
      line-height: 28px;
      text-align: left;
      font-size: 16px;

      &:hover {
        background-color: #6E2B96;
        color: #ffffff !important;
      }
    }
  }
`;
