import "./App.css";
import Navbar from "./component/Navbar";
import Middle from "./pages/Middle";
import Section from "./pages/Section";
import data from "./data/faqdata.json";
import { useEffect, useState } from "react";

function App() {
  const [storedData, setStoredData] = useState(data.faqs);
  const [inpuvalue, setinpuvalue] = useState()
  const [questionType, setQuestionType] = useState();

  
    const filterAndSearchData = (inpuvalue,questionType) => {
    let filteredData;
    console.log("filterAndSearchData",inpuvalue,questionType)
    if(questionType){
       filteredData = data?.faqs?.filter(item => item.type === questionType);
    }
 
    if(inpuvalue){
      filteredData = filteredData?.filter(item =>
        item.question.toLowerCase().includes(inpuvalue)
      );
    }
    if(questionType && inpuvalue){
      filteredData = data?.faqs?.filter(item => item.type === questionType);
      filteredData = filteredData.filter(item =>
        item.question.toLowerCase().includes(inpuvalue)
      );
    }
   
    console.log(filteredData);
    setStoredData(filteredData);
  };

  useEffect(() => {
    sessionStorage.setItem("questionType" ,"general");
    const Type=sessionStorage.getItem("questionType")
    setQuestionType(Type);
  }, []);
  

  return (
    <>
      <main>
        
        <nav>
          <Navbar />
        </nav>

        <section>
          <Section setQuestionType={setQuestionType} filterAndSearchData={filterAndSearchData} setinpuvalue={setinpuvalue} inpuvalue={inpuvalue} questionType={questionType}/>
        </section>

        <section className="section-Middle">
          <Middle setinpuvalue={setinpuvalue} storedData={storedData} filterAndSearchData={filterAndSearchData} setQuestionType={setQuestionType} questionType={questionType}/>
        </section>

      </main>
    </>
  );
}

export default App;
