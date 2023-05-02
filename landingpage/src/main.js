import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faAddressCard, faPlay, faKeyboard, faComment} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faPython} from '@fortawesome/free-brands-svg-icons'

let icons = [faUserSecret, faLinkedin, faGithub, faPython, faPython, faAddressCard, faPlay, faKeyboard,
             faComment, ]

icons.forEach((icon) => {library.add(icon)})


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
