import './app.css'
import App from './App.svelte'

let el = document.getElementById('app')
if (!el) {
    throw Error("Please define an element with id 'app' in your index.html file")
}

const app = new App({
    target: el,
})

export default app
