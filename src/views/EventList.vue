<template>
  <h1 data-testid="event-list-title">Events for Good</h1>
  <div class="events">
    <router-link
      class="event-link"
      :to="{ name: 'EventDetails', params: { id: event.id } }"
      v-for="event in events"
      :key="event.id"
    >
      <EventCard :event="event" />
    </router-link>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
export default {
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('fetchEvents').catch(error => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error }
      })
    })
  },
  computed: {
    events() {
      return this.$store.state.events
    }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
