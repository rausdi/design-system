import styled from "styled-components";
import { ContentOnChangeFuncType } from "../../Table";
import { useState } from "react";

export interface NoteProps {
  defaultText: string;
  onChange: ContentOnChangeFuncType;
}

const NoteStyled = styled.div`
  display: flex;
  flex: 1 0 100%;
  align-items: center;
  height: 100%;
  white-space: nowrap;
`;

const Input = styled.input`
  padding: 5px 10px;
  border: 1px solid ${(props) => props.theme.colors.gray_1};
  border-radius: 3px;
`;

const Note: React.FC<NoteProps> = (props: NoteProps) => {
  const { defaultText } = props;
  const [text, setText] = useState(defaultText);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setText(value);
    const { onChange } = props;
    if (onChange) {
      onChange(value);
    }
  }

  return (
    <NoteStyled>
      <Input value={text} onChange={onChange} />
    </NoteStyled>
  );
};

export default Note;
