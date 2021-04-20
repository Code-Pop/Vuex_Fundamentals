<template>
  <h1>Events for {{ user }}</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

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
    ...mapState(['events', 'user'])
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
