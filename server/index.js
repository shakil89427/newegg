const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./src/config/initDb");
const port = process.env.PORT || 5000;
const fileupload = require("express-fileupload");
const {
  BlobServiceClient,
  StorageSharedKeyCredential,
} = require("@azure/storage-blob");
const crypto = require("crypto");

app.use(cors());
app.use(express.json());
app.use(fileupload());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => res.send("Server running"));

app.post("/", async (req, res) => {
  const { file } = req.files;
  const sharedKeyCredential = new StorageSharedKeyCredential(
    process.env.AZURE_BLOB_STORAGE_NAME,
    process.env.AZURE_BLOB_STORAGE_KEY
  );
  const blobServiceClient = new BlobServiceClient(
    process.env.AZURE_BLOB_STORAGE_URL,
    sharedKeyCredential
  );
  const containerClient = blobServiceClient.getContainerClient("files");
  const blobClient = containerClient.getBlockBlobClient(
    crypto.randomBytes(32).toString("hex") + file.name
  );
  await blobClient.uploadData(file.data, {
    blobHTTPHeaders: { blobContentType: file.type },
  });
  res.send({ url: blobClient.url });
});

app.use("/api/otp", require("./src/routes/otp.route"));
app.use("/api/user", require("./src/routes/user.route"));
app.use("/api/product", require("./src/routes/product.route"));

app.use(require("./src/helpers/routeCatcher"));
app.use(require("./src/helpers/errorHandler"));

app.listen(port, () => console.log(`Server running on port ${port}`));
