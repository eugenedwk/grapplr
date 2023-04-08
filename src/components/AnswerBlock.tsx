import { useState, type ReactElement } from "react";

type AnswerBlockProps = {
  answerCopy: string;
  correctAnswer: boolean;
};

const AnswerBlock = (answerBlockProps: AnswerBlockProps): ReactElement => {
  const [selected, setSelected] = useState(false);
  const props = answerBlockProps;
  return (
    <div
      onClick={() => {
        setSelected(true);
      }}
      className={`width-100 ${
        selected && props.correctAnswer ? "bg-green-400" : "bg-white"
      } ${
        selected && !props.correctAnswer ? "bg-red-400" : "bg-white"
      } m-2 border border-solid border-blue-600 p-4 hover:bg-purple-200 active:bg-purple-400`}
    >
      {props.answerCopy}
    </div>
  );
};

export default AnswerBlock;
