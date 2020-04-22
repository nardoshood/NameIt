


const container=document.querySelector(".app");
const myApp=[
    {
        type: "colors",
        msg:"Pick the correct color",
        path:"images/color",
        structure:[
            {   question:"yellow", 
                options:["orange.jpg","yellow.jpg","red.jpg","blue.jpg"],key:1
            },
            {   question:"green", 
                options:["blue.jpg","black.jpg","purple.jpg","green.jpg"],key:3
            },
            {   question:"red", 
                options:["red.jpg","white.jpg","green.jpg","blue.jpg"],key:0
            },
            {   question:"blue", 
                options:["orange.jpg","brown.jpg","blue.jpg","red.jpg"],key:2
            },
            {   question:"white", 
                options:["white.jpg","purple.jpg","orange.jpg","yellow.jpg"],key:0
            },
            {   question:"Purple", 
            options:["blue.jpg","black.jpg","purple.jpg","green.jpg"],key:2
        },
        {   question:"orange", 
                options:["orange.jpg","brown.jpg","blue.jpg","red.jpg"],key:0
            },
            {   question:"black", 
            options:["orange.jpg","yellow.jpg","red.jpg","black.jpg"],key:3
        },
                
        ]
    },
    {
        type: "fruit",
        msg:"Pick the correct fruit",
        path:"images/fruits",
        structure:[
            {   question:"apple", 
                options:["apple.jpg","banana.jpg","guava.jpg","mango.jpg"],key:0
            },
            {   question:"banana", 
                options:["papaya.jpg","banana.jpg","kiwi.jpg","mango.jpg"],key:1
            },
            {   question:"mango", 
                options:["kiwi.jpg","banana.jpg","orange.jpg","mango.jpg"],key:3
            },
            {   question:"papaya", 
                options:["apple.jpg","papaya.jpg","guava.jpg","banana.jpg"],key:1
            },
            {   question:"orange", 
                options:["apple.jpg","banana.jpg","orange.jpg","mango.jpg"],key:2
            },
                
        ]
    },
    {
        type: "vegetable",
        msg:"Pick the correct Vegitable",
        path:"images/vegetables",
        structure:[
            {   question:"chilli", 
                options:["chilli.jpg","pumpkin.jpg","carrot.jpg","tomato.jpg"],key:0
            },
            {   question:"tomato", 
                options:["carrot.jpg","tomato.jpg","onion.jpg","brocolli.jpg"],key:1
            },
            {   question:"potato", 
                options:["cabbage.jpg","pumpkin.jpg","chilli.jpg","potato.jpg"],key:3
            },
            {   question:"carrot", 
                options:["tomato.jpg","cabbage.jpg","carrot.jpg","potato.jpg"],key:2
            },
            {   question:"cabbage", 
                options:["cabbage.jpg","carrot.jpg","pumpkin.jpg","brocolli.jpg"],key:0
            },
                
        ]
    },
    {
        type: "Wild animal",
        msg:"Pick the correct Wild Animal",
        path:"images/wild",
        structure:[
            {   question:"lion", 
                options:["zebra.jpg","lion.jpg","tiger.jpg","elephant.jpg"],key:1
            },
            {   question:"giraffe", 
                options:["fox.jpg","tiger.jpg","giraff.jpg","kangaro.jpg"],key:2
            },
            {   question:"tiger", 
                options:["zebra.jpg","elephant.jpg","lion.jpg","tiger.jpg"],key:3
            },
            {   question:"zebra", 
                options:["fox.jpg","zebra.jpg","giraff.jpg","tiger.jpg"],key:1
            },
            {   question:"elephant", 
                options:["lion.jpg","kangaro.jpg","elephant.jpg","zebra.jpg"],key:2
            },
            {   question:"fox", 
            options:["fox.jpg","tiger.jpg","giraff.jpg","kangaro.jpg"],key:0
             },
            {   question:"kangaroo", 
                options:["zebra.jpg","lion.jpg","kangaro.jpg","elephant.jpg"],key:2
            },
                
        ]
    },
    {
        type: "domestic animals",
        msg:"Pick the correct domestic animal",
        path:"images/animals",
        structure:[
            {   question:"cats", 
                options:["cats.jpg","horse.jpg","dog.jpg","sheep.jpg"],key:0
            },
            {   question:"sheep", 
                options:["dog.jpg","sheep.jpg","goat.jpg","horse.jpg"],key:1
            },
            {   question:"horse", 
                options:["cat.jpg","dog.jpg","goat.jpg","horse.jpg"],key:3
            },
            {   question:"dog", 
                options:["sheep.jpg","cat.jpg","dog.jpg","goat.jpg"],key:2
            },
            {   question:"goat", 
                options:["goat.jpg","cat.jpg","sheep.jpg","horse.jpg"],key:0
            },
               
        ]
    },
]

const select=document.createElement("select");
    select.setAttribute("onchange","load(this)")
for(let j=0;j<myApp.length;j++){
    const option=document.createElement("option");
    option.value=j;
    option.innerHTML=myApp[j].type;
    select.appendChild(option);

}
document.querySelector(".quiz-box").appendChild(select);
class App{
     constructor(myApp,container){
         this.app=myApp;
         this.container=container;
         this.index=0;
         this.score=0;
         this.quizSize=this.app.structure.length;
         this.optionSize=this.app.structure[0].options.length;
         this.msgEle=this.container.querySelector(".msg");
         this.quizEle=this.container.querySelector(".quiz");
         this.optionEle=this.container.querySelector(".option-box")
         this.questionNumber=this.container.querySelector(".question-number");
         this.scoreEle=this.container.querySelector(".score-board");
         this.setQuestion(); 
        this.setOptions();
        this.scoreBoard();
        }
     setQuestion(){
        this.msgEle.innerHTML=this.app.msg;
        this.quizEle.innerHTML=this.app.structure[this.index].question;
        this.questionNumber.innerHTML=(this.index+1)+"/"+ this.quizSize;
     }
     setOptions(){
         this.optionEle.innerHTML="";
        for(let i=0;i<this.optionSize;i++){
         const button=document.createElement("button");
             button.type="button";
             button.id=i;
         const img=document.createElement ("img");
              img.src=this.app.path+"/"+this.app.structure[this.index].options[i];
               button.appendChild(img);
             this.optionEle.appendChild(button)
     }
     this.optionClick();
    }
scoreBoard(){
  this.scoreEle.innerHTML= this.score;
}
optionClick(){
const that=this;
const options= this.optionEle.children;
 for(let i=0; i<options.length;i++){
     options[i].addEventListener("click",function(){
         const span=document.createElement("span");
        if(this.id==that.app.structure[that.index].key){
       span.innerHTML="correct";
       this.classList.add("correct");
       that.score++;
       that.scoreBoard();
                }
        else{
            span.innerHTML="wrong";

       this.classList.add("wrong");
        }
        this.appendChild(span);
        for(let j=0;j<that.optionEle.children.length; j++){
          if(this.id==that.optionEle.children[j].id){

         
             }
         else{
             that.optionEle.children[j].classList.add("hide");
         }

     }
     that.index++;
     if(this.index<this.quizesize-1){
       that.quizeover();
     }
     setTimeout(function(){
         that.index++;
         that.setQuestion()
         that.setOptions()
     },2000)
     })
        
     
 }
}
quizeover(){
    this.mshEle.innerHTML="";
    this.quizEle.innerHTML="";
        const h1=document.crearElement("h1")
    if(this.score>this.quizSize/2){
        h1.innerHTML="Quiz over <br> Good"
    }
    else{
        h1.innerHTML="Quiz over <br> Peactice more"
    }
    this.optionEle.innerHTML=h1;
}
 }
 const app1=new App(myApp[0],container )

function load(ele){
   
    const app1=new App(myApp[ele.value],container)
}