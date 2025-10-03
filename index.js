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

    if(words.length===0){
        wordDisplaycontainer.innerHTML=`<div class=" text-center space-y-3 col-span-full">
         <img class="mx-auto" src="assets/alert-error.png" alt="">
       <p class="tet-[14px] font-normal font-bangla text-gray-400"> এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
       <h2 class="font-bangla text-[35px] font-medium text-center ">নেক্সট Lesson এ যান</h2>
      </div>
        
        
        `
    }

     words.forEach(word=>{
        console.log(word)

        const card = document.createElement('div');
        card.innerHTML=`
        <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
        <h2 class="font-bold text-2xl">${word.word}</h2>
        <p class="font-semibold">Meaning /Pronounciation</p>
        <div class="font-bangla font-medium text-2xl">"${word.meaning} / ${word.pronunciation}"</div>

        <div class="flex justify-between items-center">
          <button class="btn bg-[#1A91FF10] hover:bg-[##1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
           <button class="btn bg-[#1A91FF10]hover:bg-[##1A91FF80] "><i class="fa-solid fa-volume-high"></i></i></button>

        </div>
        
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