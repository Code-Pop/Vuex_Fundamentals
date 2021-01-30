import { createStore } from 'vuex'
import EventService from '@/services/EventService'

export default createStore({
  state: {
    user: 'Adam Jahr',
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENT(state, event) {
      state.event = event
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event)
          commit('SET_EVENT', event)
        })
        .catch(error => {
          throw error // ??
        })
    },
    fetchEvents({ commit }) {
      return EventService.getEvents()
        .then(response => {
          commit('SET_EVENTS', response.data)
        })
        .catch(error => {
          throw error // ??
        })
    },
    fetchEvent({ commit, getters }, id) {  
      var event = getters.getEventById(id)
      if (event) {
        commit('SET_EVENT', event)
        return event
      } else {
        return EventService.getEvent(id).then(response => {
          commit('SET_EVENT', response.data)
          return response.data
        })
      }
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  },
  modules: {}
})
