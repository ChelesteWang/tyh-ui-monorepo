import { createApp } from 'vue'
import App from './App.vue'
import tyhUi2 from '@tyh-ui-monorepo/tyh-ui2'
import '@tyh-ui-monorepo/tyh-ui2/style/index.css'

console.log(tyhUi2)
// import 'tyh-ui2/style/index.css'

// const tyhUi2 = require('@tyh-ui-monorepo/tyh-ui2')

createApp(App)
  .use(tyhUi2)
  .mount('#app')
