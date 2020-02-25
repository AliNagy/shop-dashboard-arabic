<template>
  <q-page>
    <div class="row q-pa-md text-h4 text-primary">
      الصفحة الرئيسية
    </div>
    <div class="row">
      <notifications class="col-12 col-md-8 q-pa-sm" />
      <inventory class="col-12 col-md-4 q-pa-sm" />
    </div>
    <div class="row">
      <loans class="col-12 col-md-6 q-pa-sm" />
      <installments class="col-12 col-md-6 q-pa-sm" />
    </div>
  </q-page>
</template>

<script>
import installments from "components/dashboard/installments";
import loans from "components/dashboard/loans";
import notifications from "components/dashboard/notifications";
import inventory from "components/dashboard/inventory";

export default {
  name: "dashboard",
  components: {
    installments,
    loans,
    notifications,
    inventory
  }
};
</script>
