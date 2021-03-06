const multer = require("multer");
const MulterAzureStorage = require("multer-azure-storage");

const getBlobName = (file) => {
  const identifier = Math.random().toString().replace(/0\./, ""); // remove "0." from start of string
  return `${identifier}-${file.originalname}`;
};

const uploadToAzureUsers = multer({
  storage: new MulterAzureStorage({
    azureStorageConnectionString: process.env.AZURE_STORAGE,
    containerName: "users",
    containerSecurity: "blob",
    fileName: getBlobName,
  }),
});

const uploadToAzureTests = multer({
  storage: new MulterAzureStorage({
    azureStorageConnectionString: process.env.AZURE_STORAGE,
    containerName: "tests",
    containerSecurity: "blob",
    fileName: getBlobName,
  }),
});

module.exports = { uploadToAzureUsers, uploadToAzureTests };
