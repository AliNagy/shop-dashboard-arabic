export default function () {
  return {
    fromDate: "",
    toDate: "",
    receipts: [
      {
        // id: number,
        // date: string,
        // total: number,
        // discount: number,
        // net_total: number,
        // state: string
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
        sort: (a, b) => { return new Date(b) - new Date(a) },
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
        classes: "text-grey-10 bg-grey-3",
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
