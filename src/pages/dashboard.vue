<template>
  <q-page>
    <div class="row">
      <loans class="col-12 col-md-6 q-pa-sm" />
      <installments class="col-12 col-md-6 q-pa-sm" />
    </div>
  </q-page>
</template>

<script>
import installments from "components/dashboard/installments";
import loans from "components/dashboard/loans";

export default {
  name: "dashboard",
  components: {
    installments,
    loans
  }
};
</script>
