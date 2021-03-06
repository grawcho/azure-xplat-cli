// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMQCreate2856/providers/Microsoft.Compute/virtualMachines/vm12124/redeploy?api-version=2016-04-30-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': '8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '705e00a0-95de-4595-8156-cd85fec15d8b',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T072035Z:705e00a0-95de-4595-8156-cd85fec15d8b',
  date: 'Sun, 29 Jan 2017 07:20:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestVMQCreate2856/providers/Microsoft.Compute/virtualMachines/vm12124/redeploy?api-version=2016-04-30-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': '8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '705e00a0-95de-4595-8156-cd85fec15d8b',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T072035Z:705e00a0-95de-4595-8156-cd85fec15d8b',
  date: 'Sun, 29 Jan 2017 07:20:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-01-29T07:20:36.072517+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '133',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': '78b1087b-eec8-4f98-936e-b445258ebeda',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14934',
  'x-ms-correlation-request-id': '225b6e7b-fb81-4af3-9483-7d9db3ec0306',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T072106Z:225b6e7b-fb81-4af3-9483-7d9db3ec0306',
  date: 'Sun, 29 Jan 2017 07:21:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-01-29T07:20:36.072517+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '133',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': '78b1087b-eec8-4f98-936e-b445258ebeda',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14934',
  'x-ms-correlation-request-id': '225b6e7b-fb81-4af3-9483-7d9db3ec0306',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T072106Z:225b6e7b-fb81-4af3-9483-7d9db3ec0306',
  date: 'Sun, 29 Jan 2017 07:21:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-01-29T07:20:36.072517+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '133',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': 'b7ba3b9c-f75d-40a4-b0d5-753159f9be4c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14938',
  'x-ms-correlation-request-id': 'bcd566de-9ae3-4deb-9abd-e421a8cb660d',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T072136Z:bcd566de-9ae3-4deb-9abd-e421a8cb660d',
  date: 'Sun, 29 Jan 2017 07:21:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-01-29T07:20:36.072517+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '133',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': 'b7ba3b9c-f75d-40a4-b0d5-753159f9be4c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14938',
  'x-ms-correlation-request-id': 'bcd566de-9ae3-4deb-9abd-e421a8cb660d',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T072136Z:bcd566de-9ae3-4deb-9abd-e421a8cb660d',
  date: 'Sun, 29 Jan 2017 07:21:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-01-29T07:20:36.072517+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '133',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': 'e1f990c6-5675-4f82-baf1-1033a9823449',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14937',
  'x-ms-correlation-request-id': '5701ac76-73ee-4875-b173-cd5d0d072cba',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T072206Z:5701ac76-73ee-4875-b173-cd5d0d072cba',
  date: 'Sun, 29 Jan 2017 07:22:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-01-29T07:20:36.072517+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '133',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': 'e1f990c6-5675-4f82-baf1-1033a9823449',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14937',
  'x-ms-correlation-request-id': '5701ac76-73ee-4875-b173-cd5d0d072cba',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T072206Z:5701ac76-73ee-4875-b173-cd5d0d072cba',
  date: 'Sun, 29 Jan 2017 07:22:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-01-29T07:20:36.072517+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '133',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': '85f70528-5db7-4667-8746-c4a4c18c58df',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14939',
  'x-ms-correlation-request-id': '2896f5ff-ceb0-4065-ae65-791170b14429',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T072237Z:2896f5ff-ceb0-4065-ae65-791170b14429',
  date: 'Sun, 29 Jan 2017 07:22:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-01-29T07:20:36.072517+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '133',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': '85f70528-5db7-4667-8746-c4a4c18c58df',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14939',
  'x-ms-correlation-request-id': '2896f5ff-ceb0-4065-ae65-791170b14429',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T072237Z:2896f5ff-ceb0-4065-ae65-791170b14429',
  date: 'Sun, 29 Jan 2017 07:22:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-01-29T07:20:36.072517+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '133',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': '65ec248a-0342-41bc-9bd0-7fbab13abad4',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14937',
  'x-ms-correlation-request-id': 'd05a8d2d-8d00-4a4f-bd88-7b0fdadd3b75',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T072307Z:d05a8d2d-8d00-4a4f-bd88-7b0fdadd3b75',
  date: 'Sun, 29 Jan 2017 07:23:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-01-29T07:20:36.072517+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '133',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': '65ec248a-0342-41bc-9bd0-7fbab13abad4',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14937',
  'x-ms-correlation-request-id': 'd05a8d2d-8d00-4a4f-bd88-7b0fdadd3b75',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T072307Z:d05a8d2d-8d00-4a4f-bd88-7b0fdadd3b75',
  date: 'Sun, 29 Jan 2017 07:23:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-01-29T07:20:36.072517+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '133',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': '11311a2d-0a21-4696-8620-9e52e945f3e1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14937',
  'x-ms-correlation-request-id': '365a03cb-806d-48cc-8383-9745e12a24b0',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T072338Z:365a03cb-806d-48cc-8383-9745e12a24b0',
  date: 'Sun, 29 Jan 2017 07:23:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-01-29T07:20:36.072517+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '133',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': '11311a2d-0a21-4696-8620-9e52e945f3e1',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14937',
  'x-ms-correlation-request-id': '365a03cb-806d-48cc-8383-9745e12a24b0',
  'x-ms-routing-request-id': 'CENTRALUS:20170129T072338Z:365a03cb-806d-48cc-8383-9745e12a24b0',
  date: 'Sun, 29 Jan 2017 07:23:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-01-29T07:20:36.072517+00:00\",\r\n  \"endTime\": \"2017-01-29T07:23:41.4524388+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '183',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': 'b5a0103f-8cb6-4b4f-89c0-eaa42c9c410b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'c3ae62e2-4eef-49a1-8555-01610f28d223',
  'x-ms-routing-request-id': 'WESTUS2:20170129T072408Z:c3ae62e2-4eef-49a1-8555-01610f28d223',
  date: 'Sun, 29 Jan 2017 07:24:08 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/eastus/operations/8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-01-29T07:20:36.072517+00:00\",\r\n  \"endTime\": \"2017-01-29T07:23:41.4524388+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"8b4edbff-b3d0-4b06-ab0b-0f8d68bf26c8\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '183',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': 'b5a0103f-8cb6-4b4f-89c0-eaa42c9c410b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'c3ae62e2-4eef-49a1-8555-01610f28d223',
  'x-ms-routing-request-id': 'WESTUS2:20170129T072408Z:c3ae62e2-4eef-49a1-8555-01610f28d223',
  date: 'Sun, 29 Jan 2017 07:24:08 GMT',
  connection: 'close' });
 return result; }]];