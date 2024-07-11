export function createHeader() {
  const header = document.createElement('header')
  header.className = 'header'

  const switchesDiv = document.createElement('div')
  switchesDiv.className = 'switches'

  const toggleThemeDiv = document.createElement('div')
  toggleThemeDiv.id = 'toggle-theme'
  toggleThemeDiv.className = 'toggle-theme'

  const toggleIcon = document.createElement('img')
  toggleIcon.id = 'toggle-icon'
  toggleIcon.src = ' /public/assets1/icons.svg/moon.svg'
  toggleIcon.alt = 'icon theme'
  toggleIcon.className = 'toggle-theme__icon'

  const toggleText = document.createElement('p')
  toggleText.id = 'toggle-text'
  toggleText.className = 'toggle-theme__text'
  toggleText.textContent = 'Dark Mode'

  toggleThemeDiv.appendChild(toggleIcon)
  toggleThemeDiv.appendChild(toggleText)

  switchesDiv.appendChild(toggleThemeDiv)

  const colorsDiv = document.createElement('div')
  colorsDiv.id = 'toggle-colors'
  colorsDiv.className = 'colors'

  const colors = [
    { color: 'hsl(214, 84%, 56%)', className: 'colors__item--blue' },
    { color: 'hsl(150, 84%, 56%)', className: 'colors__item--green' },
    { color: 'hsl(276, 84%, 56%)', className: 'colors__item--purple' },
    { color: 'hsl(46, 84%, 56%)', className: 'colors__item--orange' }
  ]

  colors.forEach(({ color, className }) => {
    const colorItem = document.createElement('div')
    colorItem.dataset.color = color
    colorItem.className = `colors__item ${className}`
    colorsDiv.appendChild(colorItem)
  })

  header.appendChild(switchesDiv)
  header.appendChild(colorsDiv)

  document.body.insertBefore(header, app)
  toggleThemeDiv.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    if (toggleIcon.src.includes('moon.svg')) {
      toggleIcon.src = '/public/assets1/icons.svg/soleado.png'
      toggleText.textContent = 'Light Mode'
    } else {
      toggleIcon.src = '/public/assets1/icons.svg/moon.svg'
      toggleText.textContent = 'Dark Mode'
    }
  })
}
