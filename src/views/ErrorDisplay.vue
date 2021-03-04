<template>
  <h4>Oops! There was an error:</h4>
  <p>{{ error }}</p>
</template>

<script>
export default {
  props: ['error']
}
</script>