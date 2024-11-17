const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;



const app = express();

// ใช้ body-parser สำหรับ JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/transaction', (req, res) => {
    res.json(
        {
            "data": [
                {
                    "memberId": 1,
                    "method": "witdraw",
                    "amount": "100.0000",
                    "status": "cancel",
                    "bfBalance": 0,
                    "afBalance": 0,
                    "transactionTime": "2024-05-03 14:32:21",
                    "accountNumber": "xxxxxx0035",
                    "accountCode": "KBANK",
                    "channel": "Bank"
                },
                {
                    "memberId": 1,
                    "method": "deposit",
                    "amount": "1.0000",
                    "status": "success",
                    "bfBalance": 0,
                    "afBalance": 0,
                    "transactionTime": "2024-02-03 22:54:07",
                    "accountNumber": "xxxxxx-",
                    "accountCode": null,
                    "channel": "Payment geteway"
                },
                {
                    "memberId": 1,
                    "method": "deposit",
                    "amount": "1.0000",
                    "status": "pending",
                    "bfBalance": 0,
                    "afBalance": 0,
                    "transactionTime": "2024-11-15 13:40:07",
                    "accountNumber": "xxxxxx-",
                    "accountCode": null,
                    "channel": "Payment geteway"
                }
            ]
        }
    )
});




app.get('/', (req, res) => {
    res.json({
        "message": "Hello World",
        "status" : "success"
    })
})



app.listen(port, () => {
    console.log(`Server running on http://127.0.0.1:${port}`);
});
