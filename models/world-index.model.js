const { Schema, mongoose } = require('mongoose');
const { Mixed } = Schema.Types;

const instance = new mongoose.model('world-index-', {
    data: {
        type: [
          Array
        ]
      },
      columns: {
        type: [
          Mixed
        ]
      }
  })

  const mapToModel = async (data)=>{
    try{
        const mappedData = new instance();
        mappedData.data=data.data;
        mappedData.columns=data.columns;

        return mappedData;
    }
    catch (error){
      throw new Error('Error mapping data to model: ' + error.message);
    }
  }

  module.exports={instance,mapToModel}