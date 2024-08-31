const axios = require ("axios");

// logic for creating a token 
const createToken = async(req, res, next) => {
    const secret= "uj3vlK7o58Rkd96UpDwXVj0bz12hSAiAmiRXoQ0kySGhChJx38X0bHtwqTpATdOC";
    const consumer="CBkDtXYNR0mCvEoOHAm9LJu2mCwaNz4iEtGK9aBvaujJCGGQ";
    const auth=  new Buffer.from(`${consumer}:${secret}`).toString("base64");

    await axios.get(
        "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
        {
            headers: {
                authorization: `Basic ${auth}`,
            },
        }
    ).then((data)=>{
        token = data.data.access_token;
        console.log(data.data);
        next();
    }).catch((err)=>{
        console.log(err);
        res.status(400).json(err.message);
    });
};

const stkPush= async(req, res)=>{
    const shortCode= "174379";
    const phone= `254${req.body.phone.substring(1)}`;
    const amount= req.body.amount;
    const passkey="bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919";
    const url= "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"

    const date = new Date();
    const timestamp = 
        date.getFullYear()+
        ("0" + (date.getMonth()+1)).slice(-2)+
        ("0" + date.getDate()).slice(-2)+
        ("0" + date.getHours()).slice(-2)+
        ("0" + date.getMinutes()).slice(-2)+
        ("0" + date.getSeconds()).slice(-2);

        const password = new Buffer.from(shortCode + passkey + timestamp).toString("base64");

        const data={
               
                BusinessShortCode: 174379,    
                Password: password,
                Timestamp: timestamp,    
                TransactionType: "CustomerPayBillOnline",
                Amount: amount,   
                PartyA:phone,
                PartyB:174379,
                PhoneNumber:phone,
                CallBackURL: "https://mydomain.com/path",
                AccountReference:"For MpesaTest",
                TransactionDesc:"For Mpesa Test",
             };
             await axios.post (
                url, data, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
             ).then((data)=>{
                console.log(data)
                res.status(200).json(data.data);
             }).catch((err)=>{
                console.log(err);
                res.status(400).json(err.message);
            });
        };
    

module.exports={createToken, stkPush};

