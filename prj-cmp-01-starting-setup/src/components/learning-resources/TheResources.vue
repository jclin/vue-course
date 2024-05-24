<template>
  <base-card>
    <base-button
      @click="setSelectecTab('stored-resources')"
      :mode="storedResourcesButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectecTab('add-resource')"
      :mode="addResourceButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource,
  },

  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org',
        },
      ],
    };
  },

  provide() {
    return {
      resources: this.storedResources,
      addResource: this.storeResource,
      deleteResource: this.removeResource,
    };
  },

  computed: {
    storedResourcesButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },

    addResourceButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },

  methods: {
    setSelectecTab(tab) {
      this.selectedTab = tab;
    },

    storeResource(resource) {
      this.storedResources.unshift({
        id: new Date().toISOString(),
        title: resource.title,
        description: resource.description,
        link: resource.link,
      });

      this.selectedTab = 'stored-resources';
    },

    removeResource(id) {
      // Gotcha: Vue stores a reference for the provide-inject pattern,
      // so making a new instance of this array breaks reactivity.
      const index = this.storedResources.findIndex((res) => res.id === id);
      this.storedResources.splice(index, 1);
    },
  },
};
</script>
