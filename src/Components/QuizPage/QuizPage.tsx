import { apiResult } from "../TypeDefining/Types";
import { useContext } from "react";
import QuizListProvider from "../contextAPi/Quiz.page.Context";
import { useParams } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import "./quizpage.css";

const QuizPage = () => {
  let { id } = useParams();
  let QuizList: apiResult[] = useContext(QuizListProvider);
  interface IFormInput {
    [key: string]: any;
  }
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmitt: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    
  };
  console.log(id);

  function randomArrayShuffle(array: string[]) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  let no: number = 0;
  console.log("quiz oage", QuizList);
  return (
    <div className="quizpage-main-container">
      <h3 className="heading1">{id} Quiz</h3>
      <form onSubmit={handleSubmit(onSubmitt)}>
        <div className="form-group">
          {QuizList.map((ele) => {
            return ele.map((elee ,indd) => {
              if (elee.category === id) {
                let shuf: string[] = randomArrayShuffle([
                  ...elee.incorrect_answers,
                  elee.correct_answer,
                ]);

                return (
                  <div className="form-group" key={indd}>
                    <label
                      className="form-check-label"
                      htmlFor={`question${(no += 1)}`}
                      style={{ fontSize: "20px" }}
                    >
                      {no}: {elee.question}
                    </label>
                    {shuf.map((ele, ind) => {
                      return (
                        <div className="form-check" key={ind}>
                          <input
                            className="form-check-input"
                            type="radio"
                            id={ele}
                            value={ele}
                            {...register(elee.question)}
                          />
                          <label className="form-check-label" htmlFor={ele}>
                            {ele}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                );
              }
            });
          })}
        </div>
        <button className="btn btn-primary" type="submit">
          Submit Quiz
        </button>
      </form>
    </div>
  );
};

export default QuizPage;
