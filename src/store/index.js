import { createStore as vuexCreateStore } from 'vuex'
import EventService from '@/services/EventService'

const storeConfiguration = {
  state: {
    user: 'Adam Jahr',
    events: [],
    event: null,
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENT(state, event) {
      state.event = event
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event)
          commit('SET_EVENT', event)
        })
        .catch((error) => {
          throw error
        })
    },
    fetchEvents({ commit }) {
      return EventService.getEvents()
        .then((response) => {
          commit('SET_EVENTS', response.data)
        })
        .catch((error) => {
          throw error
        })
    },
    fetchEvent({ commit, getters }, id) {
      const event = getters.getEventById(id)
      if (event) {
        commit('SET_EVENT', event)
      } else {
        return EventService.getEvent(id)
          .then((response) => {
            commit('SET_EVENT', response.data)
          })
          .catch((error) => {
            throw error
          })
      }
    },
  },
  getters: {
    getEventById: (state) => (id) => {
      return state.events.find((event) => event.id === id)
    },
  },
  modules: {},
}

const defaultOverrides = {
  state: () => {
    return {}
  },
}

function makeState(initialState, overrideState) {
  return {
    ...(typeof initialState === 'function' ? initialState() : initialState),
    ...overrideState(),
  }
}

export function createStore(storeOverrides = defaultOverrides) {
  return vuexCreateStore({
    ...storeConfiguration,
    ...storeOverrides,
    ...{
      state: makeState(storeConfiguration.state, storeOverrides.state),
    },
  })
}

export default createStore()
