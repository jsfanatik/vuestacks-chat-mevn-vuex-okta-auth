<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h1>Log back in to Chat</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
  }
}
</script>

<style>
  .welcome {
    max-width: 400px;
    margin-top: 100px;
  }
  .welcome h2 {
    font-size: 3em;
  }
  .welcome button {
    margin: 30px;
  }
</style>
