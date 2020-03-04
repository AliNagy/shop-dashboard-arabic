<template>
  <div>
    <q-card flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar icon="mdi-truck" size="64px" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h5">ديون الموردين</q-item-label>
          <q-item-label class="text-subtitle1 text-weight-thin">التي قرب موعد سدادها</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-card-actions class="q-my-lg" v-if="!suppliers.length" vertical align="center" >
        <div>لا توجد حاليا أية ديون مستحقة.</div>
        <q-btn to="/suppliers" flat label="أنقر هنا لرؤية جميع الديون." color="primary"/>
      </q-card-actions>
      <q-list v-else class="q-pa-xs text-primary text-center" >
        <q-item dense>
          <q-item-section>
            <q-item-label header>
              المورد
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label header>
              المبلغ
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label lines="1" header>
              تاريخ السداد
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-ripple dense clickable v-for="(supplier, index) in suppliers" :key="index">
          <q-item-section>
            <q-item-label class="text-subtitle1">
              {{ supplier.supplier}}
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1">
              {{ supplier.amount }} جنية
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1">
              {{ supplier.payment_date }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-card-actions v-if="suppliers.length">
        <q-btn flat color="primary" icon-right="mdi-chevron-double-left" label="المزيد"/>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "loans",
  computed: {
    suppliers: function(){
      return this.$store.state.alerts.upcomingSupplierPayments;
    }
  }
}
</script>

<style>
</style>