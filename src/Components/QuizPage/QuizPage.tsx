import { apiResult } from "../TypeDefining/Types";
import { useContext } from "react";
import QuizListProvider from "../contextAPi/Quiz.page.Context";
import { useParams } from "react-router";
const QuizPage = ()=>{
    let {id} = useParams();
    let QuizList: apiResult[] = useContext(QuizListProvider);
    console.log("quiz oage",QuizList);
    return <div>hello world</div>
}

export default QuizPage;