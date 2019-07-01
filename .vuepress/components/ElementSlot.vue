<template>
  <div class="element-wrap" v-html="elementCode"></div>
</template>

<script>
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/js/src";

export default {
  props: {
    elementCode: {
      type: String,
      required: true
    }
  }
};
</script>


<style scoped lang="scss">
.element-wrap {
  border: 5px solid #eee;
  padding: 20px;
  margin-bottom: 20px;
}
</style>