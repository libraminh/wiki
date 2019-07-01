<template>
  <div :class="`source-code-wrap language-${codeType}`">
    <button
      data-toggle="tooltip"
      data-placement="top"
      title="Copied"
      type="button"
      class="btn btn-success btn-sm btn-copy"
      @click="doCopy"
    >Copy!</button>
    <prism :language="codeType">{{ content }}</prism>
  </div>
</template>

<script>
import Vue from "vue";
import "prismjs";
import Prism from "vue-prism-component";
import VueClipboard from "vue-clipboard2";
import jQuery from "jquery";

Vue.use(VueClipboard);

export default {
  components: {
    Prism
  },
  props: {
    codeType: {
      type: String
    },
    content: {
      type: String,
      required: true
    }
  },
  methods: {
    doCopy: function(e) {
      var currentButton = e.target;
      this.$copyText(this.content)
        .then(
          function(e) {
            jQuery(currentButton)
              .tooltip("enable")
              .tooltip("show");
          },
          function(e) {
            alert("Can not copy");
            console.log(e);
          }
        )
        .then(function() {
          jQuery(currentButton).tooltip("disable");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.source-code-wrap {
  position: relative;

  .btn-copy {
    position: absolute;
    top: 0;
    right: 50px;
    z-index: 10;

    &:focus {
      box-shadow: none;
    }
  }
}
</style>