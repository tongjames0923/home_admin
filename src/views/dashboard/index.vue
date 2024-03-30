<template>
  <div class="dashboard-container">
    <div class="dashboard-text">id: {{ userInfo.id }}</div>
    <div class="dashboard-text">name: {{ userInfo.name }}</div>
    <div class="dashboard-text">phone: {{ userInfo.phone }}</div>
    <el-button @click="select_home">选择家庭</el-button>
    <home-selective-view ref="home_selector"></home-selective-view>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import HomeSelectiveView from "@/components/HomeSelectiveView.vue";

export default {
  name: 'Dashboard',
  components: {HomeSelectiveView},
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    select_home()
    {
      this.$refs.home_selector.show();
    }
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
