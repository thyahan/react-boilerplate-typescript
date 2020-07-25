import React from "react";
import styled from "styled-components";

const selectedColor = "rgb(116, 92, 185)";
const unSelectedColor = "rgb(199, 189, 226)";
const rootBackgroundColor = "rgb(240, 242, 245)";

const Styled = styled.div<{ selected: boolean | undefined }>`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  :first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    &:after {
      content: "";
      position: absolute;
      right: 0px;
      border-top: 30px solid ${rootBackgroundColor};
      border-bottom: 30px solid ${rootBackgroundColor};
      border-left: 10px solid ${(props) => (props.selected ? selectedColor : unSelectedColor)};
    }
  }

  :last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    &:before {
      content: "";
      position: absolute;
      left: 0px;
      border-top: 30px solid transparent;
      border-bottom: 30px solid transparent;
      border-left: 10px solid ${rootBackgroundColor};
    }
  }

  :not(:first-child):not(:last-child) {
    &:before {
      content: "";
      position: absolute;
      left: 0px;
      border-top: 30px solid transparent;
      border-bottom: 30px solid transparent;
      border-left: 10px solid ${rootBackgroundColor};
    }

    &:after {
      content: "";
      position: absolute;
      right: 0px;
      border-top: 30px solid ${rootBackgroundColor};
      border-bottom: 30px solid ${rootBackgroundColor};
      border-left: 10px solid ${(props) => (props.selected ? selectedColor : unSelectedColor)};
    }
  }

  background: ${(props) => (props.selected ? selectedColor : unSelectedColor)};
`;

interface Props {
  title: string;
  selected?: boolean;
}

const Step: React.FC<Props> = ({ title, selected }) => {
  return <Styled selected={selected}>{title}</Styled>;
};

export default Step;
