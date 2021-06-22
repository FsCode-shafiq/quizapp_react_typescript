import { useContext } from "react";
import categoryProvider from "../contextAPi/context.category";
import './categoryPage.css';
const CategoryPage = () => {
  let QuizList: string[] = useContext(categoryProvider);
  return <div className='category-main-container'>{
      QuizList.map((ele:string , ind:number)=>{
          return<li key={ind}>{ele}</li>
      })
}</div>;
};

export default CategoryPage;
