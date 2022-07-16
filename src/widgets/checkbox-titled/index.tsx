import React, {FC} from "react";
import styled from 'styled-components';
import Checkbox from '../checkbox';

export type Props = {
  active: boolean;
  onClick: () => void;
  title: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledMark = styled(Checkbox)`
  flex-shrink: 0;
`;

const StyledTitle = styled.em`
  margin-top: 1px;
  margin-left: 10px;
  text-decoration: none;
  font-style: normal;
  color: rgba(31, 32, 65, 0.5);
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
`;

const CheckboxTitled: FC<Props> = (props: Props) => {
  const onClick = () => {
    props.onClick();
  }

  return (
    <Wrapper>
      <StyledMark active={props.active} onClick={onClick} />
      <StyledTitle onClick={onClick}>
        {props.title}
      </StyledTitle>
    </Wrapper>
  );
}

export default CheckboxTitled;
