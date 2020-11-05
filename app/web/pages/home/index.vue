<template>
  <app>
    <div>{{ message }}</div>
  </app>
</template>

<script>
export default {
  components: {
    App: () => import('components/App.vue')
  }
}
</script>
