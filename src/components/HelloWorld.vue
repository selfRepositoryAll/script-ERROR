<template>
  <div class="hello">
    <h1 class="msg">{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li v-for="item in ary">
      <child :name.sync="item.name" ></child>
      </li>
    </ul>
    <button @click="handle">button</button>
  </div>
</template>

<script>
import { log } from "../assets/utils";
import minx from "../assets/minx";

import child from "./child";

export default {
  // 公用的部门通过这种方式
  mixins: [minx],
  components: {
    child
  },
  name: "HelloWorld",
  data() {
    return {
      ary: [
        { name: "a", key: 1 },
        { name: "b", key: 2 },
        { name: "c", key: 3 }
      ],
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    handle() {
      this.ary[0].name = "dddd";
      this.msg = "dom 更新了吗";
      console.log(document.getElementsByClassName("msg")[0].innerHTML);
      this.$nextTick(() => {
        //
        console.log(document.getElementsByClassName("msg")[0].innerHTML);
      });
    }
  },
  created() {
    log();
    this.hello();
    setInterval(() => {
      // console.log(dd);
      // var error = new Error('222')
      // console.log(error);
    }, 1000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
