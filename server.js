const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const router = require("./router/router");
const {
  notFoundHandler,
  defaultErrorHandler,
} = require("./middleware/common/defaultErrorHandaler");

dotenv.config({ path: "./.env" });
const app = express();

// set template emgine
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "/public")));

app.use((req, res, next) => {
  console.log(
    ` ${new Date().toLocaleDateString()} / path: ${req.method} ${req.url}  IP adderess:${
      req.ip
    } `
  );
  next();
});

app.use(express.json());

app.use("/", router);

// Not Found Handler
app.use(notFoundHandler);
// Error Handler
app.use(defaultErrorHandler);

app.listen(process.env.PORT, () =>
  console.log(`Server started on PORT: http://localhost/${process.env.PORT}`)
);
