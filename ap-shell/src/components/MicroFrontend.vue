<template>
  <div style="height: 100%;">
    <div v-show="isLoading" class="loader" ref="module">
      <img src="https://cdn.determine.com/matrix/shared-assets@1.4.0/loader.svg" alt="loading..."/>
    </div>
    <div id="appHost"/>
  </div>
</template>

<script>

export default {
  data: () => ({isLoading: true}),
  watch: { '$route.name': 'init' },

  mounted() {
    this.init()
  },
  methods: {
    init() {
      const routeProps = this.$route.matched[0].props.default;
      this.createScriptFile(async () => {
        const Component = await this.loadComponent(routeProps.mfName, `./${routeProps.mfName}`);
        Component.default(this.$refs.module.nextSibling, routeProps.mfProps)
        this.isLoading = false
      })
    },
    async loadComponent(scope, module) {
      await __webpack_init_sharing__('default');
      const container = window[scope];
      await container.init(__webpack_share_scopes__.default);

      const factory = await window[scope].get(module);
      return factory();
    },
    createScriptFile(callBack) {
      const remoteEntryPath = `//${this.$route.matched[0].props.default.mfUrl}/remoteEntry.js`;
      let scriptFile = document.querySelector(`script[src='${remoteEntryPath}']`);
      if(!scriptFile){
        const element = document.createElement("script");
        element.src = remoteEntryPath;
        element.type = "text/javascript";
        element.async = true;
        document.head.appendChild(element);
        element.onload = callBack
      }else callBack()
    }
  }
}
</script>

<style lang="scss" scoped>
.loader {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  z-index: 99999;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 40%;
    max-width: 250px;
  }
}
</style>

