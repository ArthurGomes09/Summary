const notes =[
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg"
  }
]
const conteudo = document.getElementsByClassName("notes")
function displayContentInfo(infoCont){
  let displayContent = infoCont.map(function(info){
    return `<article class="notes">

    <section class="re">
      <div class="generic">
      <span>
      <img src="${info.icon}" alt=""> ${info.category}</span>
    </div>
    ${info.score} / 100
  </section> `
  })
  displayContent = displayContent.join("")
  notes.innerHTML = displayContent
}