<template>
  <header>
    <div id="open"
         class="app-bg-card"
         @click="onOpenDrawer">
      <i class="fa fa-bars"></i>
    </div>
    <div :class="drawer.class" id="app-menu">
      <div class="app-nav-drawer-name branch-text">LaraMab</div>
      <div class="app-nav-drawer-list">
        <template v-for="(item, key) in items">
          <nuxt-link :to="item.route">
            <div :class="`app-nav-drawer-item ${$route.name === item.route.name ?'active': ''}`"
                 :key="key"
                 @click="onClickItem(item)">
              <span><i :class="item.icon"></i></span>
              <span>{{ item.label }}</span>
            </div>
          </nuxt-link>
        </template>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "LaramabDrawer",
    data() {
      return {
        drawer: {
          class: 'app-nav-drawer close'
        },
        items: [
          {label: 'Home', icon: 'fa fa-home', active: true, route: {name: 'index'}},
          {label: 'Videos', icon: 'fa fa-video-camera', active: false, route: {name: 'videos'}},
          {label: 'Blog', icon: 'fa fa-paper-plane', active: false, route: {name: 'blog'}},
          {label: 'News', icon: 'fa fa-newspaper-o', active: false, route: {name: 'news'}},
          {label: 'Tools', icon: 'fa fa-gavel', active: false, route: {name: 'tools'}},
        ]
      }
    },
    methods: {
      onOpenDrawer() {
        this.drawer.class = 'app-nav-drawer'
      },
      onClickItem(item) {
        this.items.forEach((item) => {
          if (item.active) {
            item.active = false
          }
        })
        item.active = true
        this.drawer.class = 'app-nav-drawer close'
      }
    }
  }
</script>

<style scoped>

</style>
