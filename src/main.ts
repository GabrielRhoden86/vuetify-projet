/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'

// @ts-ignore: no type declarations available for 'vuetify/styles'
import 'vuetify/styles'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
