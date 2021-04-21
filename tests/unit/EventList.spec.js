import EventList from '@/views/EventList'
import { mount } from '@vue/test-utils'
import store from '@/store'
import router from '@/router'

describe('EventList', () => {
  it('should render the events', () => {
    const wrapper = mount(EventList, {
      global: {
        plugins: [store, router]
      }
    })
    expect(wrapper.exists()).toBeTruthy()
  })
})