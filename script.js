
const questions = [{
    'que':'which is a markup language?',
    'a': 'HTML',
    'b' : 'css' ,
    'c' :  'php',
    'd' :  'javascript',
    'correct' : 'a'
    
  },
  
      { 'que' : 'what year was javascript launched?',
       'a'    : "1928",
       'b'    :  "1995",
       'c'    :  "1994",
       'd'    :   "none of the above",
       'correct' : 'b',
                      
      },
      {
        "que":"Which type of JavaScript language is",

        "a"  : "Object-Oriented",
        "b" : "Object-Based",
        "c" :"Assembly-language",
        "d": "High-level",
        "correct" : "b"
      }          
            
  ];
  
   // loadQuestion();
  let index = 0;
  let total = questions.length;
  let right = 0; 
  let wrong = 0; 
  const quesboxs = document.getElementById("quesbox")
  const optionInput = document.querySelectorAll('.options');
  const loadQuestion = () => {
    if(index === total){
      return endQuiz()
    }
    reset();
    const data = questions[index]
    quesboxs.innerText = `${index + 1}) ${data.que}`;
     optionInput[0].nextElementSibling.innerText = data.a;
     optionInput[1].nextElementSibling.innerText = data.b;
     // optionInput[2].nextElementSibling.innerText = data.c;
     // optionInput[3].nextElementSibling.innerText = data.d;
  }
  
  document.querySelector("#submit").addEventListener('click',
  function() {
     const data = questions[index];
     const ans = getAnswer()
    if(ans === data.correct){
        right++;
  }  else {
      wrong++;
  }
  index++;
   loadQuestion() 
  }
  )
  const getAnswer = () => {
    let answer;
     optionInput.forEach(
       (input) => {
         if(input.checked ){
           answer = input.value;
         }
       }
    )  
    return answer;
  }
    const  reset = () =>{
     optionInput.forEach(
        (input) => {
         input.checked = false
        }
      )
    }
   const endQuiz = () =>  {
    document.getElementById("box").innerHTML = `
          <div  style="text-align:center">
              <h3 class="w-100"> Hii, you've scored ${right} / ${total} </h3>
          </div>
      `
  }
  // inital call 
   loadQuestion(index);