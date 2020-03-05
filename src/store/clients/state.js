export default function () {
  return {
    clients: [
      // {
      //   id: string,
      //   name: string,
      //   address: string,
      //   phone: string
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
        name: 'phone',
        label: 'رقم التليفون',
        field: 'phone',
        sortable: true,
        headerClasses: "bg-primary text-white",
        classes: "text-grey-9",
        align: "center"
      }
    ]
  }
}
