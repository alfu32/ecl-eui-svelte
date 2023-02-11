
import App from './App.svelte'


export const ace = window["ace"]
const app = new App({
  target: document.getElementById('app')
})

export default app
