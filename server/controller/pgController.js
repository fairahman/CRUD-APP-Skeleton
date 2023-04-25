const pg = require('pg');
const client = new pg.Client();
await client.connect();
const pgController = {
  postListItem: async (req, res, next) => {
    const listItem = req.body;
    const response = await client.query(

    );
  },
  getList: async (req, res, next) => {

  }
};
