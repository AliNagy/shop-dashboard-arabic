<template>
    <div>
        <q-table :filter="filter" separator="horizontal" flat bordered :columns="columns" :data="getReceipts">
            <template v-slot:top-left>
                <q-input standout="bg-primary text-white" dense debounce="300" v-model="filter" placeholder="Search">
                    <template v-slot:append>
                        <q-icon name="mdi-magnify"/>
                    </template>
                </q-input>
            </template>
        </q-table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "receiptsTable",
    data: function(){
        return({
            filter: ""
        })
    },
    computed: {
        ...mapGetters({
            getReceipts: 'receipts/getReceipts'
        }),
        columns: function(){
            return this.$store.state.receipts.columns
        }
    }
}
</script>