<template>
  <div>
    <q-card flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar icon="mdi-account-cash" size="64px" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h5">الأقساط المستحقة</q-item-label>
          <q-item-label class="text-subtitle1 text-weight-thin">التي قرب موعد استلامها</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-card-actions class="q-my-lg" v-if="!clients.length" vertical align="center" >
        <div>لا توجد حاليا أية أقساط مستحقة.</div>
        <q-btn flat label="أنقر هنا لرؤية جميع الأقساط." color="primary"/>
      </q-card-actions>
      <q-list v-else class="q-pa-xs text-primary text-center" >
        <q-item dense>
          <q-item-section>
            <q-item-label header>
              العميل
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label header>
              المبلغ
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label lines="1" header>
              تاريخ الاستلام
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-ripple dense clickable v-for="(client, index) in clients" :key="index">
          <q-item-section>
            <q-item-label class="text-subtitle1">
              {{ client.client}}
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1">
              {{ client.amount }} جنية
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1">
              {{ client.payment_date }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-card-actions v-if="clients.length">
        <q-btn flat color="primary" icon-right="mdi-chevron-double-left" label="المزيد"/>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "installments",
  computed: {
    clients: function(){
      return this.$store.state.alerts.upcomingInstallments;
    }
  }
}
</script>

<style>
</style>