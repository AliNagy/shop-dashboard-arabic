<template>
    <div>
        <q-card class="row q-my-md">
            <q-card-section class="col-md col-12">
                <q-input dense standout="bg-primary text-white" debounce="300" v-model="filter" placeholder="بحث">
                    <template v-slot:append>
                        <q-icon name="mdi-magnify"/>
                    </template>
                </q-input> 
            </q-card-section>
            <q-card-section class="col-md col-12">
                <q-input dense autogrow readonly standout="bg-primary text-white" debounce="300" placeholder="التاريخ" :value="getDateFilterDisplay">
                    <template v-slot:append>
                        <q-icon name="mdi-calendar">
                        </q-icon>
                    </template>
                </q-input>
                <q-btn class="q-mt-sm" color="primary" flat label="تحديد من">
                    <q-popup-proxy ref="dateFromFilter" transition-show="scale" transition-hide="scale">
                        <q-date :options="getFromDateOptions" :value="getFromDate" @input = "handleFromDate" today-btn first-day-of-week="7" subtitle="من"/>
                    </q-popup-proxy>
                </q-btn>  
                <q-btn class="q-mt-sm" color="primary" flat label="تحديد الى">
                    <q-popup-proxy ref="dateToFilter" transition-show="scale" transition-hide="scale">
                        <q-date :options="getToDateOptions" :value="getToDate" @input = "handleToDate" today-btn first-day-of-week="7" subtitle="الى"/>
                    </q-popup-proxy>
                </q-btn>  
            </q-card-section>
        </q-card>
        <q-table :filter="filter" separator="horizontal" flat bordered :columns="columns" :data="getReceipts">
        </q-table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "receiptsTable",
    methods: {
        handleFromDate: function(value){
            this.$store.commit('receipts/setFromDate', value)
        },
        handleToDate: function(value){
            this.$store.commit('receipts/setToDate', value)
        },
        getToDateOptions: function(date){
            return date <= this.getTodayFormatted() && date >= this.getFromDate
        },
        getFromDateOptions: function(date){
            return date <= this.getToDate
        },
        getTodayFormatted: function(){
            let today = new Date()
            return `${today.getFullYear()}/${this.addPrecedingZero(today.getMonth()+1)}/${this.addPrecedingZero(today.getDate())}`
        },
        addPrecedingZero: function(value){
            return value < 10 ? `0${value}` : value
        }
    },
    data: function(){
        return({
            filter: ""
        })
    },
    computed: {
        ...mapGetters({
            getReceipts: 'receipts/getReceipts',
            getDateFilterDisplay: 'receipts/getDateFilterDisplay',
            getFromDate: 'receipts/getFromDate',
            getToDate: 'receipts/getToDate'
        }),
        columns: function(){
            return this.$store.state.receipts.columns
        }
    }
}
</script>