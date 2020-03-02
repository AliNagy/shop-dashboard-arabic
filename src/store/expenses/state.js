export default function () {
  return {
    fromDate: "",
    toDate: "",
    expenses: [
      {
        amount: 150,
        name: 'Ali',
        details: 'مواصلات',
        date: '2020/02/02'
      }
    ],
    columns: [
      {
        name: 'amount',
        label: 'المبلغ المالي (جنية)',
        field: 'amount',
        sortable: true,
        required: true,
        headerClasses: "bg-primary text-white",
        classes: "text-grey-10 bg-grey-3",
        align: "center"
      },
      {
        name: 'name',
        label: 'اسم الشخص',
        field: 'name',
        sortable: true,
        headerClasses: "bg-primary text-white",
        classes: "text-grey-9",
        align: "center"
      },
      {
        name: 'details',
        label: 'التفاصيل',
        field: 'details',
        sortable: true,
        headerClasses: "bg-primary text-white",
        classes: "text-grey-9",
        align: "center"
      },
      {
        name: 'date',
        label: 'التاريخ',
        field: 'date',
        sortable: true,
        headerClasses: "bg-primary text-white",
        classes: "text-grey-9",
        align: "center"
      },
    ]
  }
}
