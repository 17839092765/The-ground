<!--
 * @Author: your name
 * @Date: 2021-06-03 11:04:43
 * @LastEditTime: 2021-06-03 13:26:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \the_ground\src\components\header\index.vue
-->
<template>
  <div class="footer">
    <div class="links">
      <div class="case" v-for="(item, index) in LinkMenus" :key="index">
        <router-link :to="item.path" tag="li">{{ item.name }}</router-link>
        <div
          v-if="item.children && $route.path.indexOf(item.path) !== -1"
          class="children"
        >
          <div
            v-for="(mon, index) in item.children"
            :key="index"
            class="childrenLinks"
          >
            <router-link :to="mon.path" tag="li">{{ mon.name }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LinkMenus from "../../util/linkmenus";
export default {
  data() {
    return {
      LinkMenus,
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    console.log(this.$route.path);
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 100px;
  background: rgba(0, 0, 0, 0.26);
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  color: #fff;
  .links {
    width: 60%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    position: relative;
    /* background: rgb(52, 200, 181); */

    .case {
      width: 15%;
      height: 30%;
      text-align: center;
      line-height: 30px;
      /* background: rgba(110, 140, 179, 0.466); */
      position: relative;
      bottom: 20%;
      cursor: pointer;
      .children {
        position: absolute;
        top: -45px;
        left: -100%;
        height: 50px;
        width: 500px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .childrenLinks {
          width: 15%;
          /* height: 50%; */
          background: rgba(70, 180, 134, 0.534);
        }
      }
      .router-link-active {
        color: #fee36d;
        font-weight: 700;
        /* background: #000; */
        /* height: 60px; */
        /* background: url("../../assets/img/public/menu_choosed.png") no-repeat
        center/cover; */
        background-size: 100% 100%;
        /* //   font-size: 22px; */
      }
    }
  }
}
</style>
