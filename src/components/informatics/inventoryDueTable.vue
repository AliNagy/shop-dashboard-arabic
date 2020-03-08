<template>
    <div>
        <q-card flat bordered class="row q-mb-md">
            <q-card-section class="col-md col-12">
                <q-input dense standout="bg-primary text-white" debounce="300" v-model="filter" placeholder="بحث">
                    <template v-slot:append>
                        <q-icon name="mdi-magnify"/>
                    </template>
                </q-input> 
            </q-card-section>
        </q-card>
        <q-table :filter="filter" separator="horizontal" flat bordered :columns="columns" :data="getInventory">
            <template v-slot:top="props">
                <q-btn flat round dense :icon="props.inFullscreen?'mdi-fullscreen-exit':'mdi-fullscreen'" @click="props.toggleFullscreen"/>
            </template>
            <template v-slot:no-data>
                <div class="full-width row flex-center text-grey-9 text-h6 q-py-xl">
                    لا توجد أيه أصناف قل عددها عن 5.
                </div>
            </template>
        </q-table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "inventoryTable",
    data: function(){
        return({
            filter: ""
        })
    },
    computed: {
        columns: function(){
            return this.$store.state.informatics.inventory.columns
        },
        getInventory: function(){
            return this.$store.state.informatics.inventory.data
        }
    }
}
</script>