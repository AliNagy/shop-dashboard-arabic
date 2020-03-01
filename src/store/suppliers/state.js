export default function () {
  return {
    suppliers: [
    ],
    columns: [
      {
        name: 'name',
        label: 'اسم المورد',
        field: 'name',
        sortable: true,
        required: true,
        headerClasses: "bg-primary text-white",
        classes: "text-grey-9",
        align: "center"
      },
      {
        name: 'address',
        label: 'عنوان المورد',
        field: 'address',
        sortable: true,
        headerClasses: "bg-primary text-white",
        classes: "text-grey-9",
        align: "center"
      },
      {
        name: 'phone',
        label: 'رقم التليفون',
        field: 'phone',
        sortable: true,
        headerClasses: "bg-primary text-white",
        classes: "text-grey-9",
        align: "center"
      },
      {
        name: 'tax_id',
        label: 'السجل الضريبي',
        field: 'tax_id',
        sortable: true,
        required: true,
        headerClasses: "bg-primary text-white",
        classes: "text-grey-10 bg-grey-3",
        align: "center"
      },
      {
        name: 'total_amount_owed',
        label: 'المديونية (جنية)',
        field: 'total_amount_owed',
        sortable: true,
        headerClasses: "bg-primary text-white",
        classes: "text-grey-9",
        align: "center"
      },
    ]
  }
}
