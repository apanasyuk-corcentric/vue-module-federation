<template>
  <div>
    <div>
      <h1>App shell header</h1>
    </div>
    <div v-if="isLoading">Loading...</div>
    <div v-show="!isLoading" ref="module"/>
  </div>
</template>

<script>

export default {
  data: () => ({isLoading: true}),

  mounted() {
    const routeProps = this.$route.matched[0].props.default;
    this.createScriptFile(async () => {
      const Component = await this.loadComponent(routeProps.mfName, `./${routeProps.mfName}`);
      Component.default(this.$refs.module, routeProps.mfProps)
      this.isLoading = false
    })
  },
  methods: {
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

<style>
</style>
