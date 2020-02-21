<template>
  <q-page>
    <div class="row">
      <transactions class="col-12 col-md-6 q-pa-md" />
      <loans class="col-12 col-md-6 q-pa-md" />
    </div>
  </q-page>
</template>

<script>
import transactions from "components/dashboard/transactions";
import loans from "components/dashboard/loans";

export default {
  name: "dashboard",
  components: {
    transactions,
    loans
  }
};
</script>
