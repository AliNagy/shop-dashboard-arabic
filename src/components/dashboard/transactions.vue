<template>
  <div>
    <q-card class="text-brandtext" flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar icon="mdi-bank-transfer" size="72px" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h5">أحدث المعاملات</q-item-label>
          <q-item-label class="text-subtitle1 text-weight-thin">أحدث 5 معاملات نقدية</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator />
      <q-list class="q-pa-xs">
        <q-item clickable v-for="(state, index) in transactions" :key="index">
          <q-item-section top thumbnail>
            <q-avatar
              icon="mdi-checkbox-blank-circle"
              :text-color="state.income?'positive':'negative'"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label :class="getAmountClass(state.income)">{{ state.amount }} جنية</q-item-label>
            <q-item-label class="text-subtitle1">{{ state.details }}</q-item-label>
            <q-item-label caption>{{ state.date }}, {{ state.time }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-card-actions align="center">
        <q-btn flat color="primary" label="المزيد من المعاملات" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "transactions",
  computed: {
    transactions: {
      get() {
        return this.$store.state.alerts.latestTransactions;
      }
    }
  },
  methods: {
    getAmountClass: function(transactionIncome) {
      let _class = ["text-h6"];
      _class.push(transactionIncome ? "text-positive" : "text-negative");
      _class = _class.join(" ");
      return _class;
    }
  }
};
</script>

<style>
</style>