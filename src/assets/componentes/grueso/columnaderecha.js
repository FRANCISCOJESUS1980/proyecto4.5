/*export function skillsSection() {
  return `
    <article class="card">
      <h2 class="card__title">FRONT END</h2>
      <small>Horas de Estudio</small>
      <div class="skills">
        ${skill('HTML', '90')}
        ${skill('CSS', '90')}
        ${skill('JAVASCRIPT', '60')}
        ${skill('PHP', '10')}
        ${skill('REACT', '10')}
      </div>
    </article>
  `
}
function skill(name, percentage) {
  return `
    <div class="skill">
      <span class="skill__name">${name}</span>
      <div class="skill__bar">
        <div class="skill__level" style="width: ${percentage}%;"></div>
      </div>
    </div>
  `
}*/

export function skillsSection() {
  /* const container = document.getElementById('app')
  document.addEventListener

  container.innerHTML = `*/
  return `
    <article class="card">
      <h2 class="card__title">FRONT END</h2>
      <small>Horas de Estudio</small>
      <div class="skills">
      <div class="skills__header">
        <span class="skills__start-level">0</span>
        <span class="skills__start-level">500</span>
      </div>
      </div>
      <div class="skills">
        <div class="skills__item">
          <p class="skills__tech">HTML</p>
          <div class="skills__bar skills__bar--90"></div>
        </div>
        <div class="skills__item">
          <p class="skills__tech">CSS</p>
          <div class="skills__bar skills__bar--90"></div>
        </div>
        <div class="skills__item">
          <p class="skills__tech">JAVASCRIPT</p>
          <div class="skills__bar skills__bar--60"></div>
        </div>
        <div class="skills__item">
          <p class="skills__tech">PHP</p>
          <div class="skills__bar skills__bar--10"></div>
        </div>
        <div class="skills__item">
          <p class="skills__tech">REACT</p>
          <div class="skills__bar skills__bar--10"></div>
        </div>
      </div>
    </article>
    <article class="card">
      <h2 class="card__title">DESIGN</h2>
      <small>Horas de Estudio</small>
      <div class="skills">
      <div class="skills__header">
        <span class="skills__start-level">0</span>
        <span class="skills__start-level">500</span>
      </div>
      </div>
      <div class="skills">
        <div class="skills__item">
          <p class="skills__tech">Photshop</p>
          <div class="skills__bar skills__bar--20"></div>
        </div>
        <div class="skills__item">
          <p class="skills__tech">Ilustrador</p>
          <div class="skills__bar skills__bar--70"></div>
        </div>
        <div class="skills__item">
          <p class="skills__tech">Figma</p>
          <div class="skills__bar skills__bar--50"></div>
        </div>
     </article>
    <article class="card">
      <h2 class="card__title">MULTIMEDIA</h2>
      <small>Horas de Estudio</small>
      <div class="skills">
      <div class="skills__header">
        <span class="skills__start-level">0</span>
        <span class="skills__start-level">500</span>
      </div>
      </div>
      <div class="skills">
        <div class="skills__item">
          <p class="skills__tech">After Effects</p>
          <div class="skills__bar skills__bar--70"></div>
        </div>
        <div class="skills__item">
          <p class="skills__tech">Premiere</p>
          <div class="skills__bar skills__bar--60"></div>
        </div>
    </article>`
}
skillsSection()
