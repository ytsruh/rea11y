const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");
// Azure SDK docs
// https://docs.microsoft.com/en-us/javascript/api/overview/azure/storage-overview?view=azure-node-latest
// https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/storage/storage-blob
const account = process.env.AZURE_ACCOUNT;
const accountKey = process.env.AZURE_ACCOUNT_KEY;
const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);
const blobServiceClient = new BlobServiceClient(
  `https://${account}.blob.core.windows.net`,
  sharedKeyCredential
);

const blobClient = (container, blob) => {
  const containerClient = blobServiceClient.getContainerClient(container);
  const blobClient = containerClient.getBlobClient(blob);
  return blobClient;
  /* 
    Example Usage:
    blobClient("reports", "example.json")
  */
};

const containerClient = (container) => {
  const containerClient = blobServiceClient.getContainerClient(container);
  return containerClient;
  /* 
    Example Usage:
    containerClient("reports")
  */
};

module.exports = { blobClient, containerClient };
