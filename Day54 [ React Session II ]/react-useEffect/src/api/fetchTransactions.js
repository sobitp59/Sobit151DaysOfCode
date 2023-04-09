export const fetchTransactions = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/transactions") {
          resolve({
            status: 200,
            message: "Success",
            data: {
              transactions: [
                {
                  id: "T1",
                  amount: 10000,
                  date: "20-03-2023",
                  gateway: "Stripe"
                },
                {
                  id: "T2",
                  amount: 500,
                  date: "31-03-2023",
                  gateway: "GPay"
                },
                {
                  id: "T3",
                  amount: 20000,
                  date: "36-03-2023",
                  gateway: "Paytm"
                },
                {
                  id: "T4",
                  amount: 1200,
                  date: "12-03-2023",
                  gateway: "Stripe"
                }
              ]
            }
          });
        } else {
          reject({
            status: 404,
            message: "Transactions not found."
          });
        }
      }, 2000);
    });
  };
  