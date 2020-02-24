export default function () {
  return {
    latestTransactions: [],
    upcomingSupplierPayments: [
      {
        id: 50,
        supplier: "المتحدة لأي حاجة",
        amount: 300,
        payment_date: "28/02/2020"
      },
      {
        id: 51,
        supplier: "شركة أ",
        amount: 1200,
        payment_date: "13/03/2020"
      },
      {
        id: 52,
        supplier: "المحرك م",
        amount: 1234,
        payment_date: "19/04/2020"
      }
    ],
    upcomingInstallments: [
      {
        id: 10,
        client: "عبدو موتا",
        amount: 1000,
        payment_date: "20/03/2020",

      }
    ],
    inventoryAlert: []
  }
}
