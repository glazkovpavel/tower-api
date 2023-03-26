import app from './app';
import {sequelize} from './db/database';

async function main() {
  const port = 3000;

  // set force to true to overwrite any existing tables - all data will be lost!
  try {
    await sequelize.sync({ force: false });
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
main();
