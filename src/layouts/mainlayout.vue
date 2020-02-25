<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-white text-brandtext">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="right = !right" />
        <q-toolbar-title>المخزان والمبيعات</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer content-class="bg-grey-1" v-model="right" bordered>
      <q-list>
        <div v-for="(link, index) in navigationMenu" :key="index" >
          <q-item exact :clickable="Boolean(link.link)" v-ripple :to="link.link" >
            <q-item-section avatar>
              <q-avatar :icon="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>
                {{ link.title }}
              </q-item-label>
              <q-item-label v-if="link.subtitle" caption>
                {{ link.subtitle }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item inset-level="0.3" dense v-if="link.children" v-for="(child, index) in link.children" :key="index" clickable v-ripple :to="child.link">
            <q-item-section avatar>
              <q-avatar icon="mdi-subdirectory-arrow-left"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                {{ child.title }}
              </q-item-label>
              <q-item-label caption>
                {{ child.subitle }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view class="bg-grey-2" />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      right: false
    };
  },
  computed: {
    navigationMenu: function(){
      console.log(this.$store.state.navigationMenu)
      return this.$store.state.global.navigationMenu
    }
  }
};
</script>

<style>
.text-brandtext {
  color: #333333;
}
</style>