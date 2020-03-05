export default function () {
  return {
    installments: [
      // {
      //   id: string,
      //   name: string,
      //   address: string,
      //   amount: number
      // }
    ],
    columns: [
      {
        name: 'id',
        label: 'رقم البطاقة',
        field: 'id',
        sortable: true,
        required: true,
        headerClasses: "bg-primary text-white",
        classes: "text-grey-9",
        align: "center"
      },
      {
        name: 'name',
        label: 'اسم العميل',
        field: 'name',
        sortable: true,
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
        name: 'amount',
        label: 'المبلغ المتبقي (جنية)',
        field: 'amount',
        sortable: true,
        headerClasses: "bg-primary text-white",
        classes: "text-grey-10 bg-grey-3",
        align: "center"
      }
    ]
  }
}
