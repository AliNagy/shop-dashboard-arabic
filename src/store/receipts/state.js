export default function () {
  return {
    fromDate: "",
    toDate: "",
    receipts: [
      {
        id: 0,
        date: "2020/02/20",
        total: 400,
        discount: 20,
        net_total: 380,
        state: "تم التسديد"
      },
      {
        id: 1,
        date: "2020/01/02",
        total: 1200,
        discount: 0,
        net_total: 1200,
        state: "تم التسديد"
      },
      {
        id: 2,
        date: "2020/02/02",
        total: 850,
        discount: 150,
        net_total: 700,
        state: "تم التسديد"
      },
      {
        id: 3,
        date: "2020/01/20",
        total: 9000,
        discount: 0,
        net_total: 9001,
        state: "تم التسديد"
      },
      {
        id: 4,
        date: "2020/01/21",
        total: 1200,
        discount: 0,
        net_total: 1200,
        state: "تم التسديد"
      },
      {
        id: 5,
        date: "2020/01/02",
        total: 350,
        discount: 0,
        net_total: 350,
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
        classes: "text-grey-10 bg-grey-3 text-weight-bold",
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
