import { mount } from '@vue/test-utils'
import EventCard from '@/components/EventCard'

describe('EventCard', () => {
  it(`renders the event's data successfully`, () => {
    mount(EventCard)
  })
})
