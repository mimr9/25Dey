hljs.highlightAll();

let galilo = document.querySelectorAll('.menu-list li a');
for(let i = 0; i < galilo.length; i++) {
  galilo[i].addEventListener("click", function(){
    this.parentElement.querySelector('.nested').classList.toggle('mActive');
  });
}
