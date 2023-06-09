import question from './question';
import{useState} from "react";
import './App.css';
import React from 'react';

function App() {
  const [questionIndex,setQuestionIndex]=useState(0);
  const [score,setscore]=useState(0);
  const [results,setresults]=useState(false);
  const present_question =question[questionIndex];
  const get_Choice=(i)=>{
    if(present_question.answer===i){
      setscore(score+1);
      
    }
    const next_question =questionIndex+1;
    if(next_question<question.length){
      setQuestionIndex(questionIndex+1);
    }
    else{
      setresults(true);
    }
    
  };
  return (
  <div className="quiz_box">
    {results?(<h3>Your score :{score}/{questionIndex+1}</h3>):(<div className="quiz_question">
    {present_question.question}
  
      <div className="quix_box_options">
       
      </div>
       <ul className="quiz_ul">
          {present_question.option.map((option,i)=>{return <li className="quiz_li" onClick={()=> get_Choice(i)}> {option}</li>})}
          
        </ul>
    </div>)
}
    
</div>

  );
}

export default App;
