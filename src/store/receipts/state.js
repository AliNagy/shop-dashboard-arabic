export default function () {
  return {
    receipts: [
      {
        id: 0,
        date: "20/02/2020",
        total: 400,
        discount: 20,
        net_total: 380,
        state: "تم التسديد"
      },
      {
        id: 1,
        date: "20/02/2020",
        total: 400,
        discount: 20,
        net_total: 380,
        state: "تم التسديد"
      }
    ],
    columns: [
      {
        name: 'id',
        label: 'رقم الفاتورة',
        field: 'id',
        required: true,
        sortable: true,
        headerClasses: "bg-primary text-white",
        classes: "text-grey-9",
        align: "center"
      },
      {
        name: 'date',
        label: 'تاريخ الفاتورة',
        field: 'date',
        sortable: true,
        sort: (a, b) => {},
        headerClasses: "bg-primary text-white",
        classes: "text-grey-9",
        align: "center"
      },
      {
        name: 'total',
        label: 'اجمالي الفاتورة (جنية)',
        field: 'total',
        sortable: true,
        headerClasses: "bg-primary text-white",
        classes: "text-grey-9",
        align: "center"
      },
      {
        name: 'discount',
        label: 'قيمة الخصم (جنية)',
        field: 'discount',
        sortable: true,
        headerClasses: "bg-primary text-white",
        classes: "text-grey-9",
        align: "center"
      },
      {
        name: 'net_total',
        label: 'صافي اجمالي الفاتورة (جنية)',
        field: 'net_total',
        sortable: true,
        headerClasses: "bg-primary text-white",
        classes: "text-grey-9",
        align: "center"
      },
      {
        name: 'state',
        label: 'موقف الفاتورة',
        field: 'state',
        sortable: true,
        headerClasses: "bg-primary text-white",
        classes: "text-grey-9",
        align: "center"
      }
    ]
  }
}
