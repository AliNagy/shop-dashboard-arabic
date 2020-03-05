export default function () {
  return {
    balance: [
      // {
      //   account: string,
      //   balance: number
      // }
    ],
    columns: [
      {
        name: 'account',
        label: 'اسم الحساب',
        field: 'account',
        sortable: true,
        required: true,
        headerClasses: "bg-primary text-white",
        classes: "text-grey-9",
        align: "center"
      },
      {
        name: 'balance',
        label: 'قيمة الخزينة (جنية)',
        field: 'balance',
        sortable: true,
        headerClasses: "bg-primary text-white",
        classes: "text-grey-10 bg-grey-3",
        align: "center"
      }
    ]
  }
}
