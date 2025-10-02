const loadlesson=()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res=>res.json())
    .then(json=>displaylesson(json.data))
}
const loadlevelword=(id)=>{
    // console.log(id);
    const url =`https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then((data)=> displaylevelword(data.data))

   

};

const displaylevelword =(words)=>{
    const wordDisplaycontainer = document.getElementById('word-container')
    wordDisplaycontainer.innerHTML="";

     words.forEach(word=>{
        console.log(word)

        const card = document.createElement('div');
        card.innerHTML=`
        <p>cart</p>
        
        `;
        wordDisplaycontainer.append(card);

    })

}

displaylesson=(lessons)=>{
    const displayshow = document.getElementById('level-container')
    displayshow.innerHTML="";
    for(let lesson of lessons){
        const btndiv = document.createElement('div')
        btndiv.innerHTML=`
        
        <button onclick="loadlevelword(${lesson.level_no})"  class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lesson-${lesson.level_no}</button>

        
        
        
        
        `;
        displayshow.append(btndiv);
    }
}
loadlesson();