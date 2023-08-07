const questions=[
{
  question:"Which is the largest animal in the world",
  answers:[
    {
        option: "Shark" , correct: false
    },
    {
        option: "Blue Whale" , correct: true
    },
    {
        option: "Elephant" , correct: false,
    },
    {
        option: "Giraffe" , correct: false,
    }
]
},

{
    question:"Which is the smallest contient in the world",
    answers:[
      {
          option: "Asia" , correct: false
      },
      {
          option: "Australia" , correct: true
      },
      {
          option: "Arctic" , correct: false,
      },
      {
          option: "Affrica" , correct: false,
      }
  ]
},
{
    question:"Which is the largest desert in the world",
    answers:[
      {
          option: "Kalahari" , correct: false
      },
      {
          option: "Gobi" , correct: false
      },
      {
          option: "Sahara" , correct: false,
      },
      {
          option: "Antarctica" , correct: true,
      }
  ]
},
{
    question:"Which is the smallest country in the world",
    answers:[
      {
          option: "Vatican City" , correct: true
      },
      {
          option: "Nepal" , correct: false
      },
      {
          option: "Bhutan" , correct: false,
      },
      {
          option: "Pakistan" , correct: false,
      }
  ]
}
];

const question=document.querySelector(".MCQS-Heading");
const answerButton=document.querySelector(".answerbtn");
const NextBtn=document.querySelector(".next");

let currentQueryIndex=0;
let score=0;


function startQuiz()
{
    
    NextBtn.innerHTML="Next";
    showQuestion();
}

function showQuestion()
{
   
  resetState();
  let currentQuestion=questions[currentQueryIndex];
  let QuestionNo=currentQueryIndex+1;
  question.innerHTML=QuestionNo+"."+currentQuestion.question;
  currentQuestion.answers.forEach(answer => {
  
    const button=document.createElement("button");
    button.innerHTML=answer.option;
    button.classList.add("btn");
    answerButton.appendChild(button);    
    if(answer.correct)
    {
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectAnswer); 
    

});
}
function resetState()
{
    NextBtn.style.display="none";
     
    while(answerButton.firstChild)
    {
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(event)
{
  const selectedButton=event.target;
  let isCorrect;
  if(selectedButton.dataset.correct==="true")
  {
   selectedButton.classList.add("correct")
   score++;
  
}
  else
  {
   selectedButton.classList.add("incorrect");
  }
  const arrayOfButons =Array.from(answerButton.children);

  arrayOfButons.forEach(btn=>
    {
        if(btn.dataset.correct=="true")
        {
            btn.classList.add("correct");
        }
        btn.disabled=true;
        NextBtn.style.display="block";
        
    }
    );

}

  function handleNextButton()
  {
    currentQueryIndex++;
    if(currentQueryIndex < questions.length)
    {
         startQuiz();
    }
    else
    {
        showScore();
    }
  }
  function showScore()
  {
    resetState();
    question.innerHTML=`You Scored ${score} out of ${questions.length} !`;
    NextBtn.innerHTML="Try Again";
    NextBtn.style.display="block";
  }

  NextBtn.addEventListener("click",()=>
  {
   
    if(currentQueryIndex < questions.length)
    {
       handleNextButton();
    }
    else
    {
      currentQueryIndex=0;
      score=0;
      startQuiz();
    }


  });

startQuiz();
