export default function () {
  return {
    clients: [
      {
        id: "012345679",
        name: "علي ناجي",
        address: "شارع في مكان ما",
        phone: "01277344905"
      },
      {
        id: "10231239321",
        name: "عبدالرحمن فايز",
        address: "حلوان, جمب المستشفى",
        phone: "0122222222"
      },
      {
        id: "0312345679",
        name: "كريم وجدو",
        address: "بيروح في 20 دقيقة",
        phone: "11111111111111"
      }
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
