import React, { useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getQuizById } from "../../api";
import classes from "../../styles/QuizDetails.module.css";
import { QUIZ_REQUEST_BY_ID } from "../../types";

const initState = {
  quiz: {},
};
function quizReducer(state = initState, action) {
  switch (action.type) {
    case QUIZ_REQUEST_BY_ID:
      return {
        ...state,
        quiz: action.payload,
      };
  }
}
export default function QuizDetails() {
  const [singleQuiz, dispatch] = useReducer(quizReducer, initState);
  const { quiz } = singleQuiz;
  const duration_type = quiz.duration === "question_based";
  const answer_type = quiz.answerType === "question_based";
  const { id } = useParams();
  const navigate = useNavigate();

  const startQuiz = () => {
    if (quiz.questions.length) {
      navigate("/play/quiz");
      localStorage.setItem("quiz", JSON.stringify({ ...quiz }));
    }
  };

  React.useEffect(() => {
    getQuizById(id).then((data) => {
      dispatch({
        type: QUIZ_REQUEST_BY_ID,
        payload: data.data,
      });
    });
  }, []);

  return (
    <>
      <div className=" min-h-full grid place-items-center font-mono bg-white">
        <div className="flex justify-center my-5">
          {/* {admin && <AddQuestion quizId={quiz._id} />}{" "} */}
        </div>
        <div className="rounded-md bg-gray-800 shadow-lg my-3">
          <div className="md:flex px-4 leading-none max-w-4xl">
            <div className="flex-none ">
              <img
                src={quiz?.image?.url}
                alt={quiz.name}
                className="h-72 w-56 rounded-md transform -translate-y-4 border-4 border-gray-300 shadow-lg"
              />
            </div>

            <div className="flex-col text-gray-300">
              <p className="pt-4 text-2xl font-bold px-4">{quiz.name}</p>
              <hr className={classes.hr_text} data-content="" />
              <div className="text-md flex justify-between px-4 my-2">
                <span className="font-bold">{quiz.description}</span>
                <span className="font-bold border px-2 py-2">
                  ${quiz.price}
                </span>
              </div>
              <p className="hidden md:block px-4 my-4 text-sm text-left">
                {quiz.name} has{" "}
                {quiz?.questions?.length ? quiz?.questions?.length : "no"}{" "}
                questions, This quiz will demonstrate your answer{" "}
                {answer_type ? "Before the Next" : "After Submit"} and the time
                will be {duration_type ? "2 MIN" : "4OMIN"}. Please be careful{" "}
                {answer_type
                  ? "you will get 2 MIN for each question, once if you miss the time then automatically it will show your answer and missed answer will not count for your result."
                  : "you will get 40 MIN for whole questions, and if you miss the time after 40 MIN automatically it will show your result and your missed answer will not count for your result."}
              </p>

              <p className="flex text-md px-4 my-3">
                Rating: {answer_type ? "9.0" : "4.5"}
                <span className="font-bold px-2">|</span>
                Mood: Dark
              </p>

              <div className="text-xs md:flex px-4">
                <span
                  type="button"
                  className="border uppercase border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-white hover:text-black focus:outline-none focus:shadow-outline"
                >
                  {quiz?.questions?.length} Questions
                </span>
                <span
                  type="button"
                  className="border uppercase border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-white hover:text-black focus:outline-none focus:shadow-outline"
                >
                  {quiz.answerType}
                </span>

                <span
                  type="button"
                  className="border uppercase border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-white hover:text-black focus:outline-none focus:shadow-outline"
                >
                  {quiz.duration}
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="button"
                onClick={startQuiz}
                className="bg-black text-white w-auto rounded-md px-2 py-2 my-3"
              >
                start
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
