<template>
  <div>
    <q-card flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar icon="mdi-dolly" size="64px" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h5">البضائع</q-item-label>
          <q-item-label class="text-subtitle1 text-weight-thin">التي أوشك نفاذها</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-card-actions class="q-my-lg" v-if="!inventory.length" vertical align="center" >
        <div>لا توجد حاليا أية بضائع قاربت النفاذ.</div>
        <q-btn flat label="أنقر هنا لرؤية جميع البضائع." color="primary"/>
      </q-card-actions>
      <q-list v-else class="q-pa-xs text-primary text-center" >
        <q-item dense>
          <q-item-section>
            <q-item-label header>
              المنتج
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label header>
              المورد
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-ripple dense clickable v-for="(item, index) in inventory" :key="index">
          <q-item-section>
            <q-item-label class="text-subtitle1">
              {{ item.name}}
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1">
              {{ item.supplier }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-card-actions v-if="inventory.length">
        <q-btn flat color="primary" icon-right="mdi-chevron-double-left" label="المزيد"/>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "loans",
  computed: {
    inventory: function(){
      return this.$store.state.alerts.inventoryAlert;
    }
  }
}
</script>

<style>
</style>