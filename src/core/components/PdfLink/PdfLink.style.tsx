import styled from "styled-components";
import iconPdf from "../../../content/assets/icons/pdf.svg";
import iconPdfHover from "../../../content/assets/icons/pdf-hover.svg";

export default styled.div`
  height: 70px;
  font-size: 16px;
  font-weight: 200;
  line-height: 1.4;
  padding: 0 7px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  a {
    span {
      text-align: justify;
      display: "inline";
      :before {
        content: "";
        display: inline-block;
        position: relative;
        top: 20px;
        width: 30px;
        height: 40px;
        margin-right: 7px;
        background-image: url(${iconPdf});
        background-repeat: no-repeat;
      }
    }
  }

  &:hover {
    background: #7a58bf;
    color: white;
    padding-left: 20px;
    a {
      span {
        color: white;
        text-align: justify;
        :before {
          background-image: url(${iconPdfHover});
        }
      }
    }
  }
`;
