import React, {FC} from "react";
import styled from 'styled-components';
import {ReactComponent as Mark} from './mark.svg';

export type Props = {
  active: boolean,
  disabled?: boolean,
}

const Wrapper = styled.div`
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
  margin: 3px 0 0 3px;
  width: 6px;
  height: 8px
`;

const Checkbox: FC<Props> = (props: Props) => {
  const isActive = props.active;

  return (
    <Wrapper className={`checkbox ${isActive ? '_active' : '_inactive'}`}>
      <StyledMark/>
    </Wrapper>
  );
}

export default Checkbox;
