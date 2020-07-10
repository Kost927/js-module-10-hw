import './styles.css';
import template from './teamplate'
import {Theme} from './theme'

const switchTheme = document.querySelector(".js-switch-input")

const bodyClass = document.querySelector('body')


  function stopSwitch () {
    const savedTheme = localStorage.getItem("theme")
if (savedTheme === Theme.DARK) {
    bodyClass.classList.add(savedTheme);
    switchTheme.checked = true;
}
  }
  stopSwitch ()


switchTheme.addEventListener("change", toggleSwith)

function toggleSwith (e) {
if (e.target.checked === false) {
    bodyClass.classList.remove(Theme.DARK)
    bodyClass.classList.add(Theme.LIGHT)
    localStorage.setItem('theme', Theme.LIGHT)
} else {
    bodyClass.classList.remove(Theme.LIGHT)
    bodyClass.classList.add(Theme.DARK)
    localStorage.setItem('theme', Theme.DARK)
}

}







  