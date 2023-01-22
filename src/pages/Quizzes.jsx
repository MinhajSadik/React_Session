import React, { useReducer } from "react";
import { getQuizzes } from "../api";
import Quiz from "../Components/Quiz/Quiz";
import { QUIZ_REQUEST } from "../types";

const initState = {
  quizzes: [],
};

function quizReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case QUIZ_REQUEST:
      return {
        ...state,
        quizzes: payload,
      };
    default:
      return state;
  }
}

export default function Quizzes() {
  const [quizzes, dispatch] = useReducer(quizReducer, initState);
  console.log(quizzes);

  React.useEffect(() => {
    getQuizzes().then((data) => {
      dispatch({
        type: QUIZ_REQUEST,
        payload: data.data,
      });
    });
  }, []);

  return (
    <>
      <div className="">
        <div className="justify-self-center">
          <h1 className="font-bold text-2xl text-center m-2">
            Prepare By Topics
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 mt-3 md:ml-3">
          {quizzes.quizzes.map((quiz) => (
            <Quiz key={quiz._id} quiz={quiz} />
          ))}
        </div>
      </div>
    </>
  );
}
