<template>
  <iframe
      id="viewer"
      title="PDF Viever"
      width="70%"
      height="100%"
      src="web/web/index.html"
      align="left"
      frameborder="0"
      style="margin-top: 8px; margin-left: 8px">
  </iframe>
</template>

<script>
export default {
  name: 'HelloWorld',
  // methods: {
  //   msg(target, name, data) {
  //     let object = {
  //       target: target,
  //       event: name,
  //       data: data
  //     }
  //     window.top.postMessage(object, "*");
  //   },
  //   scrollToElement() {
  //     let name = document.getElementById("scroll_input").value
  //     if (name) {
  //       this.msg("VIEWER", "scrollToElement", name);
  //     }
  //   },
  //   reverseCurrentPage() {
  //     this.msg("VIEWER", "reverseCurrentPage", {});
  //   },
  //   highlight() {
  //     let data = document.getElementById("json").value;
  //     data = JSON.parse(data)
  //     this.msg("VIEWER", "highlightTokens", data);
  //   }
  // },
  methods: {
    msg(target, name, data) {
      let object = {
        target: target,
        event: name,
        data: data
      }
      window.top.postMessage(object, "*");
    },
  },
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
    let viewerFrame = document.getElementById("viewer");
    const self = this
    window.onmessage = function(e) {
      const object = e.data;
      const event = object.event;
      const data = object.data
      viewerFrame.contentWindow.postMessage(object);
      if (event === "selectedTokens") {
        console.log('selectedTokens', data.text)
        self.msg("VIEWER", "highlightTokens", data.tokens);
      } else if (event === "displayTokens") {
        console.log('displayTokens', data.text)
      }
    };
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
