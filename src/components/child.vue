<template>
  <div>{{name}}</div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  created() {}
};
</script>

