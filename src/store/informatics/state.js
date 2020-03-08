export default function () {
  return {
    inventory: {
      data: [
        // {
        //   type: string,
        //   detailed_type: string,
        //   product_name: string,
        //   quantity: number,
        //   total_value: number
        // }
      ],
      columns: [
        {
          name: 'type',
          label: 'تصنيف المنتج',
          field: 'type',
          sortable: true,
          headerClasses: "bg-primary text-white",
          classes: "text-grey-9",
          align: "center"
        },
        {
          name: 'detailed_type',
          label: 'التصنيف التفصيلي للمنتج',
          field: 'detailed_type',
          sortable: true,
          headerClasses: "bg-primary text-white",
          classes: "text-grey-9",
          align: "center"
        },
        {
          name: 'product_name',
          label: 'المنتج',
          field: 'product_name',
          required: true,
          sortable: true,
          headerClasses: "bg-primary text-white",
          classes: "text-grey-9",
          align: "center"
        },
        {
          name: 'quantity',
          label: 'الكمية',
          field: 'quantity',
          sortable: true,
          headerClasses: "bg-primary text-white",
          classes: "text-grey-9",
          align: "center"
        },
        {
          name: 'total_value',
          label: 'اجمالي تكلفة المنتج (جنية)',
          field: 'total_value',
          sortable: true,
          headerClasses: "bg-primary text-white",
          classes: "text-grey-10 bg-grey-3",
          align: "center"
        }
      ]
    },
    installments: {
      data: [
        // {
        //   name: string,
        //   address: string,
        //   phone: string,
        //   payment_date: string,
        //   amount: number
        // }
      ],
      columns: [
        {
          name: 'name',
          label: 'اسم العميل',
          field: 'name',
          sortable: true,
          required: true,
          headerClasses: "bg-primary text-white",
          classes: "text-grey-9",
          align: "center"
        },
        {
          name: 'address',
          label: 'عنوان العميل',
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
          name: 'payment_date',
          label: 'تاريخ السداد',
          field: 'payment_date',
          sortable: true,
          sort: (a, b) => { return new Date(b) - new Date(a)  },
          headerClasses: "bg-primary text-white",
          classes: "text-grey-9",
          align: "center"
        },
        {
          name: 'amount',
          label: 'قيمة القسط',
          field: 'amount',
          sortable: true,
          headerClasses: "bg-primary text-white",
          classes: "text-grey-10 bg-grey-3",
          align: "center"
        },
      ]
    }
  }
}
