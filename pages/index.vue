<template>
  <div>
    <nuxt-link to="/hello"> To tung</nuxt-link>
    <p>Count: {{ count }}</p>
    <button @click="incrementCount">Increment</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MyComponent extends Vue {
  // Getters
  get count() {
    return this.$store.getters['myModule/getCount']
  }

  // Mutations
  incrementCount() {
    this.$store.commit('myModule/increment')
  }
}
</script>
