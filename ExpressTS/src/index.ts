import app from "./app";

try {
  app.listen(app.get("port"), () => {
    console.log(`Server is running on port ${app.get("port")}`);
  });
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}
