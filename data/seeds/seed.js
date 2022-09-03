const { execSync } = require("child_process");

const DB_NAME = "techDB";

try {
  execSync(
    `mongoimport --db ${DB_NAME} --collection workshops -- drop --file" ${process.cwd()}/data/seed/workshop.json" --jsonaArray`
  );
  console.log(`Imported documents into database ${DB_NAME}`);
} catch (err) {
  console.log(`could not import documents into database ${DB_NAME}`);
  console.error(err);
}
