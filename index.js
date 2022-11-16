
const btnTop = document.querySelector('#backToTop')

// quando rolar a página 100px do topo para baixo, o botão aparece

window.onscroll = function () {
  scrollFunction()
}
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btnTop.style.display = 'block'
  } else {
    btnTop.style.display = 'none'
  }
}

// quando clicar no botão, a pagina voltará para o inicio

btnTop.addEventListener('click', function () {
  window.scrollTo(0, 0)
})