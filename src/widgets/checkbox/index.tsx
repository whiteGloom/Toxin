import React, {FC} from "react";
import styled from 'styled-components';
import {ReactComponent as Mark} from './mark.svg';

export type Props = {
  active: boolean;
  onClick: () => void;
  className?: string;
}

const Wrapper = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid;
  box-sizing: border-box;
  
  &._inactive {
    border-color: rgba(31, 32, 65, 0.25);
  }
  
  &._active {
    border-color: #BC9CFF;
  }
`;

const StyledMark = styled(Mark)`
  display: block;
  margin: 4px 0 0 4px;
  width: 10px;
  height: 10px;
`;

const Checkbox: FC<Props> = (props: Props) => {
  const isActive = props.active;

  const onClick = () => {
    props.onClick();
  };

  return (
    <Wrapper
      onClick={onClick}
      className={`checkbox ${isActive ? '_active' : '_inactive'} ${props.className}`}>
      {isActive && <StyledMark/>}
    </Wrapper>
  );
}

export default Checkbox;
