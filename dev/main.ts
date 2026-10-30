import './theme.css'
import './stubs/haCard'
import './stubs/haIcon'

import '../src/main' // registers your cards exactly like Home Assistant would load them
import { createApp } from 'vue'
import Harness from './Harness.vue'

createApp(Harness).mount('#app')
