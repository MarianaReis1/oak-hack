export interface QuizResponseType {
  starterQuiz: QuizItemType[];
  exitQuiz: QuizItemType[];
}

export interface QuizType {
  exitQuiz: QuizItemType[];
  starterQuiz: QuizItemType[];
}

export interface QuizItemType {
  question: string;
  questionType: string;
  questionImage?: QuestionImageType;
  answers: AnswerType[];
}

export interface QuestionImageType {
  alt: string;
  height: number;
  url: string;
  width: number;
}

export interface AnswerType {
  distractor?: boolean;
  type: string;
  content: string;
  matchOption?: {
    type: string;
    content: string;
  };
  correctChoice?: {
    type: string;
    content: string;
  };
}
