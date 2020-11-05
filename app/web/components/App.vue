<template>
  <html lang="en" v-if="isNode">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SSR</title>
    </head>
    <body>
      <div id="app"><slot></slot></div>
    </body>
  </html>

  <div id="app" v-else><slot></slot></div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isNode() {
      return EASY_ENV_IS_NODE
    }
  }
}
</script>
