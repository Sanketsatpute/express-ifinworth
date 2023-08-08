const { mapToModel} = require(".././models/big-mac-index.model");
const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config();

const GetBigMacIndex = async (req, res, next) => {
    console.log("trigger")
    try {
        const bigMacIndexData = await axios.get(process.env.BIG_MAC_INDEX);
        console.log(bigMacIndexData,"index")

        const response = cheerio.load(bigMacIndexData.data);
        const jsonDataString = response('code[data-language="ruby"]').text();

        const payload = await mapToModel((JSON.parse(jsonDataString)).dataset);

        res.json(payload.dataset).status(200);
    }
    catch (error)
    {
        console.log(error)
        res.status(500).json({ error: 'An error occurred while fetching data from the third-party API.' });
    }
};

const FilterBigMacIndexByDate = async (req, res, next) => {
    try {
        if (req.params.date) {
            const filteredBigMacIndexData = await axios.get(process.env.BIG_MAC_INDEX + '?start_date=' + 
                            req.params.date + '&end_date=' + req.params.date + '&api_key=' + process.env.SECRETKEY);  

            const response = cheerio.load(filteredBigMacIndexData.data);
            const jsonDataString = response('code[data-language="ruby"]').text();

            const payload = await mapToModel((JSON.parse(jsonDataString)).dataset);

            res.json(payload.dataset).status(200);
        }
    }
    catch (error)
    {
        res.status(500).json({ error: 'An error occurred while filtering     data from the third-party API.' });
    }
};

module.exports = {
    GetBigMacIndex,
    FilterBigMacIndexByDate
};
