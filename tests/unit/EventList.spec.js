import EventList from '@/views/EventList'
import { mount } from '@vue/test-utils'
import store from '@/store'
import router from '@/router'

function mountEventList(config = {}) {
  config.mountOptions = config.mountOptions || {}
  config.plugins = config.plugins || {}
  return mount(EventList, {
    global: {
      plugins: [store, router]
    },
    ...config.mountOptions
  })
}

describe('EventList', () => {
  it('should render the events', () => {
    const wrapper = mountEventList()
    expect(wrapper.exists()).toBeTruthy()
  })

  describe('page title', () => {
    it('is rendered with the correct text', () => {
      const wrapper = mountEventList()
      const title = wrapper.find('[data-testid=event-list-title]')
      expect(title.exists()).toBeTruthy()
      expect(title.text()).toContain('Events for Good')
    })
  })
  
  xdescribe('events', () => {
    it('are rendered in list', () => {
      const wrapper = mountEventList()
      const events = wrapper.findAll('[data-testid=event]')
      expect(events).toHaveLength(3)
    })
  })
})