import React from "react";
import styled from "styled-components";

const selectedColor = "rgb(116, 92, 185)";
const unSelectedColor = "rgb(199, 189, 226)";
const defaultParentBGColor = "rgb(240, 242, 245)";

interface IStyled {
  selected: boolean | undefined;
  parentBackground?: string | undefined;
}

const Styled = styled.div<IStyled>`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 10px 0 0;
  color: white;
  font-size: 16px;
  font-weight: bold;

  :before {
    content: "";
    position: absolute;
    left: 0px;
    border-style: solid;
    border-width: 30px 0 30px 20px;
    border-color: transparent transparent transparent
      ${({ parentBackground }) => parentBackground || defaultParentBGColor};
    z-index: 0;
  }

  :after {
    content: "";
    position: absolute;
    right: -20px;
    border-style: solid;
    border-width: 30px 0px 30px 20px;
    border-color: transparent transparent transparent
      ${({ selected }) => (selected ? selectedColor : unSelectedColor)};
    z-index: 1;
  }

  :first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    &:before {
      border-color: transparent;
    }
  }

  :last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    &:after {
      border-color: transparent;
    }
  }

  :last-child {
    margin-right: 0;
  }

  background: ${({ selected }) => (selected ? selectedColor : unSelectedColor)};
`;

interface Props {
  title: string;
  selected?: boolean;
  parentBackground?: string | undefined;
}

const Step: React.FC<Props> = ({ title, selected, parentBackground }) => {
  return (
    <Styled parentBackground={parentBackground} selected={selected}>
      {title}
    </Styled>
  );
};

export default Step;
