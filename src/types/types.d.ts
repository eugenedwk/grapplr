import { type StaticImageData } from "next/image";

export type QuestionPostProps = {
  authorId: string;
  id: number;
  image: string;
  published: boolean;
  questionObj: string;
};
export type RawQuestionBlockProps = {
  questionObj: string;
};

export type QuestionBlockProps = {
  image: StaticImageData | undefined;
  questionCopy: string;
  answersArray: answerChoice[];
};

type answerChoice = {
  answerText: string;
  answerBoolean: boolean;
};
