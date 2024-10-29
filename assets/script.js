fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
  .then( res => res.json())
  .then( res => {
    CARD(res)
    fun2(res)
  } )
  .catch (err => console.error((err)))
  
  let add = document.getElementById('root')
  let adds = document.getElementById('root3')

  function CARD(res){
   for (let index = 42; index < res.length; index++) {
    add.innerHTML +=`
    <div class="card p-4 border-0 m-4 col-lg-2 col-md-3 col-sm-4 col-6 shadow position-relative ">
    <img  style="width:90%" src=${res[index].simple_thumb} alt="${res.title}"/>
    <h3 class="m-2 fs-6" style="color : rgb(116, 100, 47)">${res[index].title}</h3>
    <p class="m-1 text-secondary">${res[index].author}</p>
    </div>`
   } 
  }

  function fun2(res) {
   for (let index = 14; index < 22; index++) {
    adds.innerHTML += `
      <div class="card m-4 col-lg-2 col-md-3 col-sm-4 col-6 p-4 border-0 shadow ">
      <img style="width:90%" src=${res[index].simple_thumb} alt="${res.title}"/>
      <h3 class="m-2 fs-6" style="color : rgb(116, 100, 47)">${res[index].title}</h3>
      <p class="m-1 text-secondary">${res[index].author}</p>
      </div>
      ` 
  }
}
fetch('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
  .then(res => res.json())
  .then(res => fun(res));

let add2 = document.getElementById('root2');

function fun(res) {
  add2.innerHTML += `
  <div class="cards d-flex row align-items-center justify-content-center">
    <div class="col-lg-4 col-md-12 col-sm-12">
       <div class="imges m-4 position-relative p-2 w-100 ">
        <img style="width: 60%" src="${res.cover}" alt="${res.title}"/>
       </div>
    </div>
     <div class=" col-lg-6 col-md-12 col-sm-12 w-50 " >
        <h2>${res.authors[0].name}</h2>
        <div class="line m-2"></div>
        <p>By Timbur Hood</p>
        <p class="mt-4 text-secondary">${res.fragment_data.title}</p>
        ${res.fragment_data.html}
        <a class="mt-5 text-decoration-none text-black">Shop It Now<i class="fas fa-arrow-right m-2" style="color: black"></i></a>
    </div>
  </div>
  ` 
}



