import styled from "styled-components";

interface StyledButtonProps {
  bg?: string;
  color?: string;
  colorBorder?: string;
  HoverColorBorder?: string;
}

export const ButtonStandard = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  max-width: 100%;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 5px;
  color: var(${(props) => props.color || "--Grey-0"});
  border: 2px solid var(${(props) => props.colorBorder || "--Grey-0"});
  background-color: var(${(props) => props.bg || "--WhiteFixed"});
  padding: 12px 28px 12px 28px;
  cursor: pointer;
  transition: 0.8s;
  &:hover{
    border: 2px solid var(${(props) => props.HoverColorBorder || "--Grey-0"});
  }
`;
