export default function () {
  return {
    installments: [
      {
        id: "012345679",
        name: "علي ناجي",
        address: "شارع في مكان ما",
        amount: 3000
      },
      {
        id: "10231239321",
        name: "عبدالرحمن فايز",
        address: "حلوان, جمب المستشفى",
        amount: 2000
      },
      {
        id: "0312345679",
        name: "كريم وجدو",
        address: "بيروح في 20 دقيقة",
        amount: 1000
      },
      {
        id: "01111111233",
        name: "علي نمبر وان",
        address: "الواحة",
        amount: 90000
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
        name: 'amount',
        label: 'المبلغ المتبقي',
        field: 'amount',
        sortable: true,
        headerClasses: "bg-primary text-white",
        classes: "text-grey-9",
        align: "center"
      }
    ]
  }
}
