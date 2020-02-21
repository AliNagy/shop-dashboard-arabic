<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-white text-brandtext">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="right = !right" />
        <q-toolbar-title>محل أو حاجة زي كده</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer content-class="bg-grey-1" v-model="right" bordered>
      <q-list>
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
  }
};
</script>

<style>
.text-brandtext {
  color: #333333;
}
</style>