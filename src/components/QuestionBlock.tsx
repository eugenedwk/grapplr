import AnswerBlock from "./AnswerBlock";
import QuestionCopy from "./QuestionCopy";
import ImageBlock from "./ImageBlock";
import type { QuestionBlockProps, RawQuestionBlockProps } from "../types/types";
import { testObj } from "../../prisma/sampleQuestion";

import { prisma } from "../server/db";

export const QuestionBlock = ({ questionObj }: RawQuestionBlockProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  // console.log(questionObj);
  // console.log(testObj);
  // console.log();
  // const stringifyTestQuestion = JSON.stringify(testObj);
  // const parsedTestQuestion = JSON.parse(stringifyTestQuestion);
  // console.log(typeof questionObj);
  // const parsedQuestion: QuestionBlockProps = JSON.parse(questionObj);
  // console.log(typeof parsedQuestion);
  return (
    <div className="max-v-full w-4/4 max-w-full bg-white p-2">
      <div className="max-w-full">
        {testObj.image ? (
          <ImageBlock
            src={testObj.image}
            alt={"getRekt"}
            width={5000}
            height={5000}
          />
        ) : null}
      </div>
      <QuestionCopy questionCopy={testObj.questionCopy} />
      {testObj.answersArray.map((item, index) => (
        <AnswerBlock
          key={index}
          answerCopy={item.answerText}
          correctAnswer={item.answerBoolean}
        />
      ))}
    </div>
  );
};
