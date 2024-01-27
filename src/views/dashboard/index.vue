<template>
  <div class="dashboard-container">
    <div class="dashboard-text">id: {{ userInfo.id }}</div>
    <div class="dashboard-text">name: {{ userInfo.name }}</div>
    <div class="dashboard-text">phone: {{ userInfo.phone }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
