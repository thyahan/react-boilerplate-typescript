import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  position: relative;
  display: flex;
`;

interface Props {
  current: number | undefined;
  children: any
}

const Steps: React.FC<Props> = (props) => {
  const { children, current } = props;

  const withProps = (child: any, index: number) => {
    return React.cloneElement(child, { selected: index === current });
  };

  const childrenWithProps = React.Children.map(children, withProps);

  return <Styled>{childrenWithProps}</Styled>;
};

export default React.memo(Steps);
