<template>
  <div>
    <q-card class="text-brandtext" flat bordered>
      <q-card-section>
        <q-item>
          <q-item-section avatar>
            <q-avatar icon="mdi-bank" size="48px" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-h5">أحدث المعاملات</q-item-label>
            <q-item-label class="text-subtitle1 text-weight-thin">أخر 5 مدفوعات</q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-list>
          <q-item></q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "transactions"
};
</script>

<style>
</style>