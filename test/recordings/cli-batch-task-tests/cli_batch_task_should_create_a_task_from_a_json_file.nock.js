// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/xplatJobForTaskTests/tasks?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 12 Sep 2016 23:52:26 GMT',
  etag: '0x8D3DB67D970258E',
  location: 'https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c4348a8b-1708-4c11-9274-fe2caf67f0c6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '11bc8cfe-d50a-4ae6-b4ab-3378b0985bd7',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask',
  date: 'Mon, 12 Sep 2016 23:52:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/xplatJobForTaskTests/tasks?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 12 Sep 2016 23:52:26 GMT',
  etag: '0x8D3DB67D970258E',
  location: 'https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c4348a8b-1708-4c11-9274-fe2caf67f0c6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '11bc8cfe-d50a-4ae6-b4ab-3378b0985bd7',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask',
  date: 'Mon, 12 Sep 2016 23:52:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask\",\"displayName\":\"displayName\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask\",\"eTag\":\"0x8D3DB67D970258E\",\"creationTime\":\"2016-09-12T23:52:26.5491854Z\",\"lastModified\":\"2016-09-12T23:52:26.5491854Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-09-12T23:52:26.5491854Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"multiInstanceSettings\":{\r\n    \"numberOfInstances\":3,\"coordinationCommandLine\":\"cmd /c echo hello\"\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n  },\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 12 Sep 2016 23:52:26 GMT',
  etag: '0x8D3DB67D970258E',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'b1303463-dfa7-457f-8f41-a28a13448b76',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'e1a4b937-cb30-4eae-8590-58add317b2bb',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:52:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/jobs/xplatJobForTaskTests/tasks/xplatTask?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"xplatTask\",\"displayName\":\"displayName\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask\",\"eTag\":\"0x8D3DB67D970258E\",\"creationTime\":\"2016-09-12T23:52:26.5491854Z\",\"lastModified\":\"2016-09-12T23:52:26.5491854Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-09-12T23:52:26.5491854Z\",\"commandLine\":\"cmd /c dir /s\",\"environmentSettings\":[\r\n    {\r\n      \"name\":\"env1\",\"value\":\"value1\"\r\n    },{\r\n      \"name\":\"env2\",\"value\":\"value2\"\r\n    }\r\n  ],\"runElevated\":false,\"multiInstanceSettings\":{\r\n    \"numberOfInstances\":3,\"coordinationCommandLine\":\"cmd /c echo hello\"\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P1D\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":2\r\n  },\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Mon, 12 Sep 2016 23:52:26 GMT',
  etag: '0x8D3DB67D970258E',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'b1303463-dfa7-457f-8f41-a28a13448b76',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': 'e1a4b937-cb30-4eae-8590-58add317b2bb',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:52:27 GMT',
  connection: 'close' });
 return result; }]];