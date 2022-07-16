import React, {FC} from "react";
import styled from 'styled-components';
import Checkbox from '../checkbox';

export type Props = {
  active: boolean;
  onClick: () => void;
  title: string;
  description?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledMark = styled(Checkbox)`
  flex-shrink: 0;
`;

const StyledInfo = styled.div`
  padding-top: 1px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const StyledTitle = styled.em`
  text-decoration: none;
  font-style: normal;
  font-weight: 700;
  color: rgba(31, 32, 65, 0.5);
  font-size: 14px;
  line-height: 18px;
`;

const StyledDescription = styled.em`
  margin-top: 5px;
  text-decoration: none;
  font-style: normal;
  color: rgba(31, 32, 65, 0.5);
  font-size: 14px;
  line-height: 18px;
`;

const CheckboxRich: FC<Props> = (props: Props) => {
  const onClick = () => {
    props.onClick();
  }

  return (
    <Wrapper>
      <StyledMark active={props.active} onClick={onClick} />
      <StyledInfo>
        <StyledTitle onClick={onClick}>
          {props.title}
        </StyledTitle>
        <StyledDescription>
          {props.description}
        </StyledDescription>
      </StyledInfo>
    </Wrapper>
  );
}

export default CheckboxRich;
