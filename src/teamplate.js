import itemsTeamplate from '../teamplates/gallery-items.hbs'

import food from './menu.json'


const markup = itemsTeamplate(food)

// console.log(markup)

const foodMenu = document.querySelector('.js-menu')

foodMenu.insertAdjacentHTML('beforeend', markup)