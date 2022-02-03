import './style.css'
import { initPWA } from './pwa'

const app = document.querySelector<HTMLDivElement>('#app')!

// __DATE__ replaced dynamicaly
app.innerHTML = `
  <img src="/favicon.svg" alt="PWA Logo" width="60" height="60">
  <br>
  <div>Built at: __DATE__</div>
  <div
    class="pwa-toast"
    role="alert"
    aria-labelledby="toast-message"
  >
    <div class="message">
      <span id="toast-message"></span>
    </div>
    <button id="pwa-refresh">
      Reload
    </button>
    <button id="pwa-close">
      Close
    </button>
  </div>
`

initPWA(app)
