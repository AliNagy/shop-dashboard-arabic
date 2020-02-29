<template>
  <q-page>
    <div class="row q-pa-md text-h4 text-primary">الأقساط</div>
    <installmentsTable class="q-pa-sm" />
  </q-page>
</template>

<script>
import installmentsTable from 'components/installments/installmentsTable'

export default {
  name: "installments",
  components: { installmentsTable }
};
</script>
