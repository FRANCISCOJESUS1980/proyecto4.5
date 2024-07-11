document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed')

  const app = document.getElementById('app')
  console.log('app element:', app)

  const footerHTML = `
      <footer class="footer card ">
          <div class="footer-buttons button buttons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://twitter.com"  " target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com" " target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
    <div class="creador">
          <p>Creado por Francisco Jesús</p>
   </div>
      </footer>
  `

  app.insertAdjacentHTML('afterend', footerHTML)
  console.log('Footer added to app')

  const toggleThemeDiv = document.getElementById('toggleThemeDiv')
  const toggleIcon = document.getElementById('toggleIcon')
  const toggleText = document.getElementById('toggleText')

  const applyTheme = () => {
    if (document.body.classList.contains('dark')) {
      toggleIcon.src = './src/assets/icons.svg/soleado.png'
      toggleText.textContent = 'Light Mode'
    } else {
      toggleIcon.src = './src/assets/icons.svg/moon.svg'
      toggleText.textContent = 'Dark Mode'
    }
  }
})
