<script setup>

export  default
{

  props:{
  },
  data(){
    return{

    }
  }
}
</script>
<template>
  <div>
    <el-drawer
      title="我嵌套了表格!"
      :visible.sync="table"
      direction="rtl"
      size="50%">
      <div>i am a component</div>
    </el-drawer>
  </div>
</template>

<style scoped lang="scss">

</style>
