const { createElement } = require("react");

const loadlessons=()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")  
    // promise of response
    .then(res=>res.json())
    .then((json)=>displayLesson(json.data))
};

const displayLesson =(lesson)=>{
    const levelContainer = document.getElementById('level-conatiner')
    levelContainer.innerHTML =" ";

    for(let lesson of lessons){
        const btndiv = document.createElement('div')
        btndiv.innerHTML =`
        
        
        `

    }

}