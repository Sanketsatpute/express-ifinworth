
const { Schema, mongoose } = require('mongoose');
const { Mixed } = Schema.Types;

const instance = new mongoose.model('big-mac-index', {
    dataset: {
      id: {
        type: Number
      },
      dataset_code: {
        type: String
      },
      database_code: {
        type: String
      },
      name: {
        type: String
      },
      description: {
        type: String
      },
      refreshed_at: {
        type: Date
      },
      newest_available_date: {
        type: Date
      },
      oldest_available_date: {
        type: Date
      },
      column_names: {
        type: [
          String
        ]
      },
      frequency: {
        type: String
      },
      type: {
        type: String
      },
      premium: {
        type: Boolean
      },
      limit: {
        type: Mixed
      },
      transform: {
        type: Mixed
      },
      column_index: {
        type: Mixed
      },
      start_date: {
        type: Date
      },
      end_date: {
        type: Date
      },
      data: {
        type: [
          Array
        ]
      },
      collapse: {
        type: Mixed
      },
      order: {
        type: Mixed
      },
      database_id: {
        type: Number
      }
    }
})  

const mapToModel = async (data) => {
    try {
        const mappedData = new instance();
        mappedData.dataset.id=data.id,
        mappedData.dataset.dataset_code = data.dataset_code,
        mappedData.dataset.database_code = data.database_code,
        mappedData.dataset.name = data.name,
        mappedData.dataset.description = data.description,
        mappedData.dataset.refreshed_at = data.refreshed_at,
        mappedData.dataset.newest_available_date = data.refreshed_at,
        mappedData.dataset.oldest_available_date = data.oldest_available_date,
        mappedData.dataset.column_names = data.column_names,
        mappedData.dataset.frequency = data.frequency,
        mappedData.dataset.type = data.type,
        mappedData.dataset.premium = data.premium,
        mappedData.dataset.limit = data.limit,
        mappedData.dataset.transform = data.transform,
        mappedData.dataset.column_index = data.column_index,
        mappedData.dataset.start_date = data.start_date,
        mappedData.dataset.end_date = data.end_date,
        mappedData.dataset.data = data.data,
        mappedData.dataset.collapse =  data.collapse,
        mappedData.dataset.order = data.order,
        mappedData.dataset.database_id = data.database_id

      return mappedData;
    } catch (error) {
      throw new Error('Error mapping data to model: ' + error.message);
    }
  };
  
module.exports = {instance, mapToModel}