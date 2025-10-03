// =======================
// Load all lessons
// =======================
const loadlesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(json => displaylesson(json.data))
}

// =======================
// Load words by level
// =======================
const loadlevelword = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            removeactive();
            const clickBtn = document.getElementById(`lesson-btn-${id}`);
            clickBtn.classList.add('active');
            displaylevelword(data.data);
        })
}

// =======================
// Remove active button
// =======================
const removeactive = () => {
    const lessonbutton = document.querySelectorAll('.lesson-btn');
    lessonbutton.forEach(btn => btn.classList.remove('active')); // ✅ Correct usage
}

// =======================
// Load word details
// =======================
const loadworddetail = async (id) => {
    const url = `https://openapi.programming-hero.com/api/word/${id}`; // ✅ Removed extra spaces
    const res = await fetch(url);
    const details = await res.json();
    worddetais(details.data);
}

// =======================
// Show word details
// =======================
const worddetais = (word) => {
    const detaisbox = document.getElementById('details-container');
    detaisbox.innerHTML = `
      <div>
        <h2 class="text-2xl font-bold">${word.word} 
          (<i class="fa-solid fa-microphone"></i> : ${word.pronunciation})
        </h2>
      </div>
      <div>
        <h2 class="font-bold">Meaning</h2>
        <p class="font-bangla">${word.meaning}</p>
      </div>
      <div>
        <h2 class="font-bold">Example</h2>
        <p>${word.sentence}</p>
      </div>
      <div>
        <h2 class="font-bold">Synonyms</h2>
        ${word.synonyms && word.synonyms.length > 0
            ? word.synonyms.map(s => `<span class="btn">${s}</span>`).join(" ")
            : "<p>No synonyms found</p>"
        }
      </div>
    `;
}

// =======================
// Display words in a lesson
// =======================
const displaylevelword = (words) => {
    const wordDisplaycontainer = document.getElementById('word-container');
    wordDisplaycontainer.innerHTML = "";

    if (words.length === 0) {
        wordDisplaycontainer.innerHTML = `
        <div class="text-center space-y-3 col-span-full">
          <img class="mx-auto" src="assets/alert-error.png" alt="">
          <p class="text-[14px] font-normal font-bangla text-gray-400">
            এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
          </p>
          <h2 class="font-bangla text-[35px] font-medium text-center">
            নেক্সট Lesson এ যান
          </h2>
        </div>
        `;
        return;
    }

    words.forEach(word => {
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
          <h2 class="font-bold text-2xl">${word.word ? word.word : "শব্দ পাওয়া যায় নি"}</h2>
          <p class="font-semibold">Meaning / Pronunciation</p>
          <div class="font-bangla font-medium text-2xl">
            "${word.meaning ? word.meaning : "শব্দ পাওয়া যায় নি"} / 
             ${word.pronunciation ? word.pronunciation : "শব্দ পাওয়া যায় নি"}"
          </div>

          <div class="flex justify-between items-center">
            <button onclick="loadworddetail(${word.id})"  
              class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80] lesson-btn">
              <i class="fa-solid fa-circle-info"></i>
            </button>
            <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]">
              <i class="fa-solid fa-volume-high"></i>
            </button>
          </div>
        </div>
        `;
        wordDisplaycontainer.append(card);
    })
}

// =======================
// Display lessons button list
// =======================
const displaylesson = (lessons) => {
    const displayshow = document.getElementById('level-container');
    displayshow.innerHTML = "";
    for (let lesson of lessons) {
        const btndiv = document.createElement('div');
        btndiv.innerHTML = `
          <button id="lesson-btn-${lesson.level_no}" 
                  onclick="loadlevelword(${lesson.level_no})"  
                  class="btn btn-outline btn-primary lesson-btn">
            <i class="fa-solid fa-book-open"></i> Lesson-${lesson.level_no}
          </button>
        `;
        displayshow.append(btndiv);
    }
}

// =======================
// First load lessons
// =======================
loadlesson();
