export default function () {
  return {
    inventory: [
      {
        type: "foods",
        detailed_type: "long-lasting canned foods",
        product_name: "Foul Medames",
        quantity: 50,
        total_value: 3000
      }
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
  }
}
