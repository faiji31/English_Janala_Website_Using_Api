

const loadlessons=()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")  
    // promise of response
    .then(res=>res.json())
    .then((json)=>displayLesson(json.data))

};

const displayLesson =(lessons)=>{
    const levelContainer = document.getElementById('level-container')
    levelContainer.innerHTML ="";

    for(let lesson of lessons){
        const btndiv = document.createElement('div')
        btndiv.innerHTML =`
        
<button  class="btn btn-outline btn-primary "><i class="fa-solid fa-book-open"></i> lesson - ${lesson.level_no} </button>


        
        `;
        levelContainer.append(btndiv);

    }

};
loadlessons();