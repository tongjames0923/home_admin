<script setup>
import {listMyHomes, setHome} from "@/api/home";

export default {

  props: {},
  data() {
    return {
      isShow: false,
      homeList: [],
      selected: undefined,
      title:"家庭选择"
    }
  },
  methods: {
    show() {
      listMyHomes().then(res => {
        this.homeList = []
        for (let i = 0; i < res.length; i++) {
          if (res[i].selected) {
            this.selected = res[i]
            this.title="家庭选择:"+this.selected.homeName
          }
          this.homeList.push(res[i])
        }
        console.log(this.homeList)
        this.$forceUpdate()
        this.isShow = true
      })
    },
    submitHome() {
      setHome(this.selected.id).then(() => {
        this.isShow = false
        this.$notify({
            title: '成功',
            message: '设置家庭组[' + this.selected.homeName + "]成功",
            type: 'success'
          }
        );
      });
    }
  }
}

</script>
<template>
  <div class="home-selection">
    <el-drawer
      :title=title
      :visible.sync="isShow"
      direction="ttb"
      size="50%"
    >
      <el-select v-model="selected" placeholder="请选择" class="home-select">
        <el-option
          v-for="item in homeList"
          :key="item.id"
          :label="item.homeName"
          :value="item"
        >
          <div class="option-item">
            <span>{{ item.homeName }}</span>
            <span class="member-type">
              <el-tag v-if="item.parentFlag===1" type="info">家长</el-tag>
              <el-tag v-else type="success">成员</el-tag>
            </span>
          </div>
        </el-option>
      </el-select>
      <el-button round @click="submitHome">确认操作的家庭组</el-button>
    </el-drawer>
  </div>
</template>

<style scoped lang="scss">
.home-selection {
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-select {
  width: 100%;
}

.option-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.member-type {
  margin-left: 10px;
}
</style>
