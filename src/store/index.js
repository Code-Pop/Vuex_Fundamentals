import { createStore } from 'vuex'
import user from './modules/user.js'
import event from './modules/event.js'

export default createStore({
  modules: { user, event }
})