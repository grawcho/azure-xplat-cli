// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate235/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/46731912-7ec9-4b78-b7b5-1de632da8ed6?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/46731912-7ec9-4b78-b7b5-1de632da8ed6?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '46731912-7ec9-4b78-b7b5-1de632da8ed6',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'd75b361a-3fc2-41de-ac25-0322db910d0b',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T044202Z:d75b361a-3fc2-41de-ac25-0322db910d0b',
  date: 'Tue, 22 Mar 2016 04:42:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate235/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/46731912-7ec9-4b78-b7b5-1de632da8ed6?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/46731912-7ec9-4b78-b7b5-1de632da8ed6?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '46731912-7ec9-4b78-b7b5-1de632da8ed6',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'd75b361a-3fc2-41de-ac25-0322db910d0b',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T044202Z:d75b361a-3fc2-41de-ac25-0322db910d0b',
  date: 'Tue, 22 Mar 2016 04:42:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/46731912-7ec9-4b78-b7b5-1de632da8ed6?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"46731912-7ec9-4b78-b7b5-1de632da8ed6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T04:42:01.4268856+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '05c40297-4e38-40fb-a9c9-1039552d546f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '1acc79b1-3b40-4ede-9bbb-bae11c47f274',
  'x-ms-routing-request-id': 'WESTUS:20160322T044233Z:1acc79b1-3b40-4ede-9bbb-bae11c47f274',
  date: 'Tue, 22 Mar 2016 04:42:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/46731912-7ec9-4b78-b7b5-1de632da8ed6?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"46731912-7ec9-4b78-b7b5-1de632da8ed6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T04:42:01.4268856+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '05c40297-4e38-40fb-a9c9-1039552d546f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '1acc79b1-3b40-4ede-9bbb-bae11c47f274',
  'x-ms-routing-request-id': 'WESTUS:20160322T044233Z:1acc79b1-3b40-4ede-9bbb-bae11c47f274',
  date: 'Tue, 22 Mar 2016 04:42:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/46731912-7ec9-4b78-b7b5-1de632da8ed6?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"46731912-7ec9-4b78-b7b5-1de632da8ed6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T04:42:01.4268856+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'd2a83512-1696-4434-b035-9b4022158d07',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'c411c3df-cbbd-4cdc-a761-1bcad9880c51',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T044303Z:c411c3df-cbbd-4cdc-a761-1bcad9880c51',
  date: 'Tue, 22 Mar 2016 04:43:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/46731912-7ec9-4b78-b7b5-1de632da8ed6?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"46731912-7ec9-4b78-b7b5-1de632da8ed6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T04:42:01.4268856+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'd2a83512-1696-4434-b035-9b4022158d07',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'c411c3df-cbbd-4cdc-a761-1bcad9880c51',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T044303Z:c411c3df-cbbd-4cdc-a761-1bcad9880c51',
  date: 'Tue, 22 Mar 2016 04:43:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/46731912-7ec9-4b78-b7b5-1de632da8ed6?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"46731912-7ec9-4b78-b7b5-1de632da8ed6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T04:42:01.4268856+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '214b3f5c-d9dd-48ea-a105-a98c6cb8957d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '6c37d732-6da8-400e-b6f1-4ac452e755e0',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T044335Z:6c37d732-6da8-400e-b6f1-4ac452e755e0',
  date: 'Tue, 22 Mar 2016 04:43:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/46731912-7ec9-4b78-b7b5-1de632da8ed6?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"46731912-7ec9-4b78-b7b5-1de632da8ed6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T04:42:01.4268856+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '214b3f5c-d9dd-48ea-a105-a98c6cb8957d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '6c37d732-6da8-400e-b6f1-4ac452e755e0',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160322T044335Z:6c37d732-6da8-400e-b6f1-4ac452e755e0',
  date: 'Tue, 22 Mar 2016 04:43:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/46731912-7ec9-4b78-b7b5-1de632da8ed6?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"46731912-7ec9-4b78-b7b5-1de632da8ed6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T04:42:01.4268856+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '9523dbf7-926b-4553-ac34-eff74c6d6e89',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '1767511b-0f34-45cb-b8c7-17055916705a',
  'x-ms-routing-request-id': 'WESTUS:20160322T044406Z:1767511b-0f34-45cb-b8c7-17055916705a',
  date: 'Tue, 22 Mar 2016 04:44:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/46731912-7ec9-4b78-b7b5-1de632da8ed6?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"46731912-7ec9-4b78-b7b5-1de632da8ed6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T04:42:01.4268856+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '9523dbf7-926b-4553-ac34-eff74c6d6e89',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '1767511b-0f34-45cb-b8c7-17055916705a',
  'x-ms-routing-request-id': 'WESTUS:20160322T044406Z:1767511b-0f34-45cb-b8c7-17055916705a',
  date: 'Tue, 22 Mar 2016 04:44:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/46731912-7ec9-4b78-b7b5-1de632da8ed6?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"46731912-7ec9-4b78-b7b5-1de632da8ed6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T04:42:01.4268856+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'b3769837-d50e-4a3e-97f8-f3386f9dfa0f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '43e39b8b-6a99-4ab1-9af1-4b849551a2a7',
  'x-ms-routing-request-id': 'WESTUS:20160322T044437Z:43e39b8b-6a99-4ab1-9af1-4b849551a2a7',
  date: 'Tue, 22 Mar 2016 04:44:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/46731912-7ec9-4b78-b7b5-1de632da8ed6?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"46731912-7ec9-4b78-b7b5-1de632da8ed6\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T04:42:01.4268856+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'b3769837-d50e-4a3e-97f8-f3386f9dfa0f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '43e39b8b-6a99-4ab1-9af1-4b849551a2a7',
  'x-ms-routing-request-id': 'WESTUS:20160322T044437Z:43e39b8b-6a99-4ab1-9af1-4b849551a2a7',
  date: 'Tue, 22 Mar 2016 04:44:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/46731912-7ec9-4b78-b7b5-1de632da8ed6?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"46731912-7ec9-4b78-b7b5-1de632da8ed6\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-03-22T04:42:01.4268856+00:00\",\r\n  \"endTime\": \"2016-03-22T04:44:46.08524+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '189',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'b0f457fd-0ced-4038-83ff-d6b69c32b918',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '08d3d350-b8be-4802-93df-7e7fbf448eda',
  'x-ms-routing-request-id': 'WESTUS:20160322T044508Z:08d3d350-b8be-4802-93df-7e7fbf448eda',
  date: 'Tue, 22 Mar 2016 04:45:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/46731912-7ec9-4b78-b7b5-1de632da8ed6?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"46731912-7ec9-4b78-b7b5-1de632da8ed6\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-03-22T04:42:01.4268856+00:00\",\r\n  \"endTime\": \"2016-03-22T04:44:46.08524+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '189',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'b0f457fd-0ced-4038-83ff-d6b69c32b918',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '08d3d350-b8be-4802-93df-7e7fbf448eda',
  'x-ms-routing-request-id': 'WESTUS:20160322T044508Z:08d3d350-b8be-4802-93df-7e7fbf448eda',
  date: 'Tue, 22 Mar 2016 04:45:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate235/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/abc2fe19-75c4-4947-b01d-978e6c78a66f?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/abc2fe19-75c4-4947-b01d-978e6c78a66f?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'abc2fe19-75c4-4947-b01d-978e6c78a66f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'c85f1ad4-a0fc-4fe4-8e15-16f2ebd01ce8',
  'x-ms-routing-request-id': 'WESTUS:20160322T044510Z:c85f1ad4-a0fc-4fe4-8e15-16f2ebd01ce8',
  date: 'Tue, 22 Mar 2016 04:45:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMSSCreate235/providers/Microsoft.Compute/virtualMachineScaleSets/xplattestvmss1?api-version=2016-03-30')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/abc2fe19-75c4-4947-b01d-978e6c78a66f?monitor=true&api-version=2016-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/abc2fe19-75c4-4947-b01d-978e6c78a66f?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'abc2fe19-75c4-4947-b01d-978e6c78a66f',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'c85f1ad4-a0fc-4fe4-8e15-16f2ebd01ce8',
  'x-ms-routing-request-id': 'WESTUS:20160322T044510Z:c85f1ad4-a0fc-4fe4-8e15-16f2ebd01ce8',
  date: 'Tue, 22 Mar 2016 04:45:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/abc2fe19-75c4-4947-b01d-978e6c78a66f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"abc2fe19-75c4-4947-b01d-978e6c78a66f\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T04:45:09.7105511+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '2480a855-de70-47bb-a520-9499eb40aa78',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'a63f2627-8847-421d-b2be-6941a07c4412',
  'x-ms-routing-request-id': 'WESTUS:20160322T044540Z:a63f2627-8847-421d-b2be-6941a07c4412',
  date: 'Tue, 22 Mar 2016 04:45:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/abc2fe19-75c4-4947-b01d-978e6c78a66f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"abc2fe19-75c4-4947-b01d-978e6c78a66f\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T04:45:09.7105511+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '2480a855-de70-47bb-a520-9499eb40aa78',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'a63f2627-8847-421d-b2be-6941a07c4412',
  'x-ms-routing-request-id': 'WESTUS:20160322T044540Z:a63f2627-8847-421d-b2be-6941a07c4412',
  date: 'Tue, 22 Mar 2016 04:45:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/abc2fe19-75c4-4947-b01d-978e6c78a66f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"abc2fe19-75c4-4947-b01d-978e6c78a66f\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T04:45:09.7105511+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '5415d3c0-93d2-4d10-bd1e-aae4730cc677',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '6f4935f0-ca7b-4661-b5f6-e40cd2e3b0ba',
  'x-ms-routing-request-id': 'WESTUS:20160322T044611Z:6f4935f0-ca7b-4661-b5f6-e40cd2e3b0ba',
  date: 'Tue, 22 Mar 2016 04:46:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/abc2fe19-75c4-4947-b01d-978e6c78a66f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"abc2fe19-75c4-4947-b01d-978e6c78a66f\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T04:45:09.7105511+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '5415d3c0-93d2-4d10-bd1e-aae4730cc677',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '6f4935f0-ca7b-4661-b5f6-e40cd2e3b0ba',
  'x-ms-routing-request-id': 'WESTUS:20160322T044611Z:6f4935f0-ca7b-4661-b5f6-e40cd2e3b0ba',
  date: 'Tue, 22 Mar 2016 04:46:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/abc2fe19-75c4-4947-b01d-978e6c78a66f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"abc2fe19-75c4-4947-b01d-978e6c78a66f\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T04:45:09.7105511+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'ee35413a-aea3-44f5-8f14-1c2e46813e37',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '322e7056-d60c-457b-82bf-11a5c907a16e',
  'x-ms-routing-request-id': 'WESTUS:20160322T044642Z:322e7056-d60c-457b-82bf-11a5c907a16e',
  date: 'Tue, 22 Mar 2016 04:46:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/abc2fe19-75c4-4947-b01d-978e6c78a66f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"abc2fe19-75c4-4947-b01d-978e6c78a66f\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T04:45:09.7105511+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': 'ee35413a-aea3-44f5-8f14-1c2e46813e37',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '322e7056-d60c-457b-82bf-11a5c907a16e',
  'x-ms-routing-request-id': 'WESTUS:20160322T044642Z:322e7056-d60c-457b-82bf-11a5c907a16e',
  date: 'Tue, 22 Mar 2016 04:46:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/abc2fe19-75c4-4947-b01d-978e6c78a66f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"abc2fe19-75c4-4947-b01d-978e6c78a66f\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T04:45:09.7105511+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '17ea59aa-e3e0-4bf0-9f3f-351ebe363207',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '85838911-5834-48a1-9493-fe717f23f523',
  'x-ms-routing-request-id': 'WESTUS:20160322T044713Z:85838911-5834-48a1-9493-fe717f23f523',
  date: 'Tue, 22 Mar 2016 04:47:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/abc2fe19-75c4-4947-b01d-978e6c78a66f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"abc2fe19-75c4-4947-b01d-978e6c78a66f\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-22T04:45:09.7105511+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '17ea59aa-e3e0-4bf0-9f3f-351ebe363207',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '85838911-5834-48a1-9493-fe717f23f523',
  'x-ms-routing-request-id': 'WESTUS:20160322T044713Z:85838911-5834-48a1-9493-fe717f23f523',
  date: 'Tue, 22 Mar 2016 04:47:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/abc2fe19-75c4-4947-b01d-978e6c78a66f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"abc2fe19-75c4-4947-b01d-978e6c78a66f\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-03-22T04:45:09.7105511+00:00\",\r\n  \"endTime\": \"2016-03-22T04:47:13.8996565+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '5192dd80-2417-4bb0-a5f0-7b00fb23fb3d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '2196e6a4-f808-4f17-ae75-391a654f5f2f',
  'x-ms-routing-request-id': 'WESTUS:20160322T044744Z:2196e6a4-f808-4f17-ae75-391a654f5f2f',
  date: 'Tue, 22 Mar 2016 04:47:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/abc2fe19-75c4-4947-b01d-978e6c78a66f?api-version=2016-03-30')
  .reply(200, "{\r\n  \"operationId\": \"abc2fe19-75c4-4947-b01d-978e6c78a66f\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-03-22T04:45:09.7105511+00:00\",\r\n  \"endTime\": \"2016-03-22T04:47:13.8996565+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131024874770526851',
  'x-ms-request-id': '5192dd80-2417-4bb0-a5f0-7b00fb23fb3d',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '2196e6a4-f808-4f17-ae75-391a654f5f2f',
  'x-ms-routing-request-id': 'WESTUS:20160322T044744Z:2196e6a4-f808-4f17-ae75-391a654f5f2f',
  date: 'Tue, 22 Mar 2016 04:47:44 GMT',
  connection: 'close' });
 return result; }]];