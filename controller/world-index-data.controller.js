const axios = require('axios');
const { mapToModel } = require('../models/world-index.model');
require('dotenv').config();

const GetWorldIndexData = async (req, res, next) => {
    try {
        const response = await axios.get(process.env.WORLD_INDEX + '?api_key=QzMi2D5iaZHFhb7KJsFx');

        const worldIndexData = await mapToModel(response.data.datatable);

        res.json(worldIndexData).status(200);
    }
    catch (error)
    {
        res.status(500).json({ error: 'An error occurred while fetching data from the third-party API.' });
    }
};

const FilterWorldIndexData = async (req, res, next) => {
    try {
        if (req.params.countryCode && req.params.seriesId) {
            const codes = req.params.countryCode;

            const countryCodes = codes.includes(',') ? codes.split(',').map(code => encodeURIComponent(code)).join('%2C') : codes;

            const filteredData = await axios.get(process.env.WORLD_INDEX + '?series_id=' + 
            req.params.seriesId + '&country_code=' + countryCodes + '&api_key=' + process.env.SECRETKEY); 

            const filteredWorldIndexData = await mapToModel(filteredData.data.datatable);

            res.json(filteredWorldIndexData).status(200);
        }
    }
    catch (error)
    {
        console.log(error)
        res.status(500).json({ error: 'An error occurred while filtering data from the third-party API.' });
    }
};

module.exports = {
    GetWorldIndexData,
    FilterWorldIndexData
};
