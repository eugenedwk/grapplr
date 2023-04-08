type QuestionCopyProps = {
  questionCopy: string;
};
const QuestionCopy = (questionCopyProps: QuestionCopyProps) => {
  const props = questionCopyProps;
  return <div className="p-4">{props.questionCopy}</div>;
};

export default QuestionCopy;
