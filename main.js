import './main.scss'
import './src/assets/componentes/cabecera/header'
import { createHeader } from './src/assets/componentes/cabecera/header'
import './src/assets/componentes/grueso/columnaizquierda.js'
import './src/assets/componentes/grueso/columnaderecha.js'

createHeader()
import {
  profileSection,
  experienceSection,
  hobbiesSection
} from './src/assets/componentes/grueso/columnaizquierda.js'
import { skillsSection } from './src/assets/componentes/grueso/columnaderecha.js'
import { projectSection } from './src/assets/componentes/grueso/seccionproyectos.js'
document.addEventListener('DOMContentLoaded', function () {
  const mainContent = document.getElementById('app')

  const content = `
    <div class="grid-container">
      <div class="grid-item grid-item--left">
        ${profileSection()}
        ${experienceSection()}
        ${hobbiesSection()}
      </div>
      <div class="grid-item grid-item--right">
        ${skillsSection()}
        ${projectSection()}
        
      </div>
    </div>
  `

  mainContent.innerHTML = content
})

const toggleTheme = document.getElementById('toggle-theme')
const toggleIcon = document.getElementById('toggle-icon')
const toggleText = document.getElementById('toggle-text')

const toggleColors = document.getElementById('toggle-colors')
const rootStyles = document.documentElement.style
/*
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  if (toggleIcon.src.includes('moon.svg')) {
    toggleIcon.src = './src/assets/icons.svg/soleado.png'
    toggleText.textContent = 'Light Mode'
  } else {
    toggleIcon.src = './src/assets/icons.svg/moon.svg'
    toggleText.textContent = 'Dark Mode'
  }
})
*/
toggleColors.addEventListener('click', (e) => {
  rootStyles.setProperty('--primary-color', e.target.dataset.color)
})
