import { useEffect, useState } from "react";
import NavBar from "./App Bar/AppBar";
import { fetchApi } from "./Services/Services";
import { apiResult } from "./TypeDefining/Types";
import { makingCategoryArray } from "./Services/Services";
import { categoryList } from "./TypeDefining/Types";
import categoryProvider from "./contextAPi/context.category";
import CategoryPage from "./categoryPage/categoryPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const MainComponent = () => {
  let difficulty: string[] = ["hard", "medium", "easy"];
  let showList: categoryList = ["1"];
  let mainList = useState<categoryList>([]);
  let hardResult: apiResult;
  let mediumResult: apiResult;
  let easyResult: apiResult;
  console.log(mainList);
  useEffect(() => {
    const handleAllData = async () => {
      hardResult = await fetchApi("50", difficulty[0]);
      if (difficulty[0] === "hard") {
        showList = makingCategoryArray(hardResult);
        mainList[1](() => showList);
      }
      mediumResult = await fetchApi("50", difficulty[1]);
      easyResult = await fetchApi("50", difficulty[2]);
    };
    handleAllData();
  }, []);

  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <categoryProvider.Provider value={mainList[0]}>
                <CategoryPage />
              </categoryProvider.Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainComponent;
