import React from "react";
import Style from "./PdfLink.style";

interface IProps {
  href?: string | undefined;
  title: string;
}

const LinkBox: React.FC<IProps> = (props) => {
  const { href, title } = props;
  return (
    <Style>
      <a href={href}>
        <span className="span">{title}</span>
      </a>
    </Style>
  );
};

export default LinkBox;
