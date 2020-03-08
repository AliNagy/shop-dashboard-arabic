<template>
  <q-page>
    <div class="row q-pa-md text-h4 text-primary">استعلامات</div>
    <q-card flat bordered class="q-mx-md">
      <q-tabs narrow-indicator v-model="tab" align="left" indicator-color="primary" class="text-grey-8" active-color="primary">
        <q-tab name="installments">
          <q-item>
            <q-item-section>
              <q-item-label class="text-subtitle1">مراجعة الأقساط</q-item-label>
              <q-item-label class="text-caption">مستحقة الدفع</q-item-label>
            </q-item-section>
          </q-item>
        </q-tab>
        <q-tab name="inventory">
          <q-item>
            <q-item-section>
              <q-item-label class="text-subtitle1">الأصناف</q-item-label>
              <q-item-label class="text-caption">التي قل عددها عن 5</q-item-label>
            </q-item-section>
          </q-item>
        </q-tab>
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="installments">
          <installmentsDueTable/>
        </q-tab-panel>
        <q-tab-panel name="inventory">
          <inventoryDueTable/>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
import installmentsDueTable from 'components/informatics/installmentsDueTable'
import inventoryDueTable from 'components/informatics/inventoryDueTable'

export default {
  name: "informatics",
  data: function(){
    return({
      tab: "installments"
    })
  },
  components: {
    installmentsDueTable,
    inventoryDueTable
  }
};
</script>
