import { type QuestionBlockProps } from "../src/types/types";

export const testObj: QuestionBlockProps = {
  questionCopy: "What is the airspeed of an unladened swallow",
  answersArray: [
    { answerText: "a correct answer", answerBoolean: true },
    { answerText: "an inccorect answer", answerBoolean: false },
    { answerText: "an incorrect answer", answerBoolean: false },
    { answerText: "an incorrect answer", answerBoolean: false },
  ],
  image: undefined,
};
