// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-nic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic\",\r\n  \"etag\": \"W/\\\"e6982616-fe17-4f18-ad54-dfe6f18bdfc8\\\"\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9345a996-75aa-4d3e-94d6-d661f7f679f1\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"e6982616-fe17-4f18-ad54-dfe6f18bdfc8\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.22\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n      \"internalFqdn\": \"internal-dns-bar.jospydfja5vudbz4kpa2jbg3ia.ax.internal.cloudapp.net\",\r\n      \"internalDomainNameSuffix\": \"jospydfja5vudbz4kpa2jbg3ia.ax.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": true\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1920',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e6982616-fe17-4f18-ad54-dfe6f18bdfc8"',
  'x-ms-request-id': 'af419040-31da-46fe-9259-be6e2adb7a0e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14945',
  'x-ms-correlation-request-id': '4e072031-4639-49d0-b138-8e69f6d5f3af',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142301Z:4e072031-4639-49d0-b138-8e69f6d5f3af',
  date: 'Wed, 07 Dec 2016 14:23:00 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/effectiveNetworkSecurityGroups?api-version=2016-09-01')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"NicMustBeAttachedToRunningVmToGetEffectiveSecurityGroups\",\r\n    \"message\": \"A network interface must be attached to a running virtual machine to get effective security groups. The network interface test-nic is not attached to a running virtual machine.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '311',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2913a502-120c-4146-b801-76476e37f830',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1186',
  'x-ms-correlation-request-id': '285c60bb-443d-4e4b-a836-2d64cd974bb8',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142302Z:285c60bb-443d-4e4b-a836-2d64cd974bb8',
  date: 'Wed, 07 Dec 2016 14:23:01 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/effectiveRouteTable?api-version=2016-09-01')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"NicMustBeAttachedToRunningVmToGetEffectiveRoutes\",\r\n    \"message\": \"A network interface must be attached to a running virtual machine to get effective routes. The network interface test-nic is not attached to a running virtual machine.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '294',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '321991cd-e9b7-44dc-a50a-519d17010403',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1192',
  'x-ms-correlation-request-id': '73544315-9af6-4cd8-ae53-b7fa79ac5c63',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142303Z:73544315-9af6-4cd8-ae53-b7fa79ac5c63',
  date: 'Wed, 07 Dec 2016 14:23:02 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Storage/checkNameAvailability?api-version=2016-01-01', '*')
  .reply(200, "{\"nameAvailable\":true}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'be967075-3b13-4db5-80c3-93629ea69cc2',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14969',
  'x-ms-correlation-request-id': 'be967075-3b13-4db5-80c3-93629ea69cc2',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142304Z:be967075-3b13-4db5-80c3-93629ea69cc2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 14:23:04 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Storage/storageAccounts/xplattemptestaccount?api-version=2016-01-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Storage/operations/0b3d6eab-d7c4-4de2-8ae9-b3b29fe390e4?monitor=true&api-version=2016-01-01',
  'retry-after': '17',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-request-id': '64a4e72f-162e-4793-a647-dfb13e1e7377',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': '64a4e72f-162e-4793-a647-dfb13e1e7377',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142305Z:64a4e72f-162e-4793-a647-dfb13e1e7377',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 14:23:04 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Storage/operations/0b3d6eab-d7c4-4de2-8ae9-b3b29fe390e4?monitor=true&api-version=2016-01-01')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Storage/storageAccounts/xplattemptestaccount\",\"kind\":\"Storage\",\"location\":\"westeurope\",\"name\":\"xplattemptestaccount\",\"properties\":{\"creationTime\":\"2016-12-07T14:23:04.8752785Z\",\"primaryEndpoints\":{\"blob\":\"https://xplattemptestaccount.blob.core.windows.net/\",\"file\":\"https://xplattemptestaccount.file.core.windows.net/\",\"queue\":\"https://xplattemptestaccount.queue.core.windows.net/\",\"table\":\"https://xplattemptestaccount.table.core.windows.net/\"},\"primaryLocation\":\"westeurope\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '2ccfa12e-f3b7-41dd-975d-af8c99194293',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-correlation-request-id': '2ccfa12e-f3b7-41dd-975d-af8c99194293',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142336Z:2ccfa12e-f3b7-41dd-975d-af8c99194293',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 14:23:36 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Compute/virtualMachines/tempXplatVMForNicTests?api-version=2016-04-30-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Compute/virtualMachines/tempXplatVMForNicTests' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '3cf2f2d1-6c73-4868-9004-ba0f8e79725e',
  'x-ms-correlation-request-id': '3cf2f2d1-6c73-4868-9004-ba0f8e79725e',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142337Z:3cf2f2d1-6c73-4868-9004-ba0f8e79725e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 14:23:36 GMT',
  'content-length': '174' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Storage/storageAccounts/xplattemptestaccount?api-version=2016-01-01')
  .reply(200, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Storage/storageAccounts/xplattemptestaccount\",\"kind\":\"Storage\",\"location\":\"westeurope\",\"name\":\"xplattemptestaccount\",\"properties\":{\"creationTime\":\"2016-12-07T14:23:04.8752785Z\",\"primaryEndpoints\":{\"blob\":\"https://xplattemptestaccount.blob.core.windows.net/\",\"file\":\"https://xplattemptestaccount.file.core.windows.net/\",\"queue\":\"https://xplattemptestaccount.queue.core.windows.net/\",\"table\":\"https://xplattemptestaccount.table.core.windows.net/\"},\"primaryLocation\":\"westeurope\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\"},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '6d551af0-5192-4949-b03f-fb09e06b005f',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14969',
  'x-ms-correlation-request-id': '6d551af0-5192-4949-b03f-fb09e06b005f',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142337Z:6d551af0-5192-4949-b03f-fb09e06b005f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 07 Dec 2016 14:23:37 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-nic\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic\",\r\n  \"etag\": \"W/\\\"e6982616-fe17-4f18-ad54-dfe6f18bdfc8\\\"\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"9345a996-75aa-4d3e-94d6-d661f7f679f1\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"e6982616-fe17-4f18-ad54-dfe6f18bdfc8\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.22\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-subnet\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n      \"internalFqdn\": \"internal-dns-bar.jospydfja5vudbz4kpa2jbg3ia.ax.internal.cloudapp.net\",\r\n      \"internalDomainNameSuffix\": \"jospydfja5vudbz4kpa2jbg3ia.ax.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": true\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1920',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e6982616-fe17-4f18-ad54-dfe6f18bdfc8"',
  'x-ms-request-id': '7276204d-5993-4982-aaf9-7453bae940fa',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14903',
  'x-ms-correlation-request-id': 'ed5e4f52-8511-4636-838d-c8583d490344',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142338Z:ed5e4f52-8511-4636-838d-c8583d490344',
  date: 'Wed, 07 Dec 2016 14:23:37 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Compute/virtualMachines/tempXplatVMForNicTests?api-version=2016-04-30-preview', '*')
  .reply(201, "{\r\n  \"properties\": {\r\n    \"vmId\": \"6a80c6d4-698b-4e13-a7a1-23012c7899ff\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"credativ\",\r\n        \"offer\": \"Debian\",\r\n        \"sku\": \"8\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"clid16a364e79cdb636-os-1481120621299\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplattemptestaccount.blob.core.windows.net/vhds/clid16a364e79cdb636-os-1481120621299.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"tempXplatVMForNicTests\",\r\n      \"adminUsername\": \"xplatuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic\",\"properties\":{\"primary\":true}}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplattemptestaccount.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Creating\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Compute/virtualMachines/tempXplatVMForNicTests\",\r\n  \"name\": \"tempXplatVMForNicTests\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1635',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/westeurope/operations/5832afa6-d6d3-4aeb-a353-d65e67e4500e?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '1140e0c9-b189-4861-9735-8154d3d824c8_131238889939254749',
  'x-ms-request-id': '5832afa6-d6d3-4aeb-a353-d65e67e4500e',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1185',
  'x-ms-correlation-request-id': '7323510e-80b7-4d76-87b9-2c2e8fb0c764',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142338Z:7323510e-80b7-4d76-87b9-2c2e8fb0c764',
  date: 'Wed, 07 Dec 2016 14:23:38 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/westeurope/operations/5832afa6-d6d3-4aeb-a353-d65e67e4500e?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2016-12-07T14:23:37.5689827+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"5832afa6-d6d3-4aeb-a353-d65e67e4500e\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '1140e0c9-b189-4861-9735-8154d3d824c8_131238889939254749',
  'x-ms-request-id': '64b84f47-116c-4e44-a535-40de7434e64a',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': 'cc6c226a-ed36-4540-b703-12cd99a57d41',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142409Z:cc6c226a-ed36-4540-b703-12cd99a57d41',
  date: 'Wed, 07 Dec 2016 14:24:08 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/westeurope/operations/5832afa6-d6d3-4aeb-a353-d65e67e4500e?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2016-12-07T14:23:37.5689827+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"5832afa6-d6d3-4aeb-a353-d65e67e4500e\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '1140e0c9-b189-4861-9735-8154d3d824c8_131238889939254749',
  'x-ms-request-id': '1dc6e7e8-d1d4-4554-bdeb-abd541a9e677',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-correlation-request-id': '53473d72-b092-47fd-bd7f-c0702b07efdc',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142439Z:53473d72-b092-47fd-bd7f-c0702b07efdc',
  date: 'Wed, 07 Dec 2016 14:24:39 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/westeurope/operations/5832afa6-d6d3-4aeb-a353-d65e67e4500e?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2016-12-07T14:23:37.5689827+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"5832afa6-d6d3-4aeb-a353-d65e67e4500e\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '1140e0c9-b189-4861-9735-8154d3d824c8_131238889939254749',
  'x-ms-request-id': '6feb8ec7-2536-49f9-a7fd-148e8ec87d8e',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14980',
  'x-ms-correlation-request-id': '282fa736-5ea1-4924-bad1-c420dad09380',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142510Z:282fa736-5ea1-4924-bad1-c420dad09380',
  date: 'Wed, 07 Dec 2016 14:25:09 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/westeurope/operations/5832afa6-d6d3-4aeb-a353-d65e67e4500e?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2016-12-07T14:23:37.5689827+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"5832afa6-d6d3-4aeb-a353-d65e67e4500e\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '1140e0c9-b189-4861-9735-8154d3d824c8_131238889939254749',
  'x-ms-request-id': '77c05754-74f1-4888-baf8-4fb42b354688',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': '29d5d9a0-bcfd-4541-9b84-2478369449a1',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142540Z:29d5d9a0-bcfd-4541-9b84-2478369449a1',
  date: 'Wed, 07 Dec 2016 14:25:39 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/westeurope/operations/5832afa6-d6d3-4aeb-a353-d65e67e4500e?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2016-12-07T14:23:37.5689827+00:00\",\r\n  \"endTime\": \"2016-12-07T14:25:48.4659374+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"5832afa6-d6d3-4aeb-a353-d65e67e4500e\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '1140e0c9-b189-4861-9735-8154d3d824c8_131238889939254749',
  'x-ms-request-id': '438e2633-431b-4b48-a5be-07737017bbc0',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-correlation-request-id': '5a501c2b-3367-4a8c-bf5c-63584ba66fe4',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142610Z:5a501c2b-3367-4a8c-bf5c-63584ba66fe4',
  date: 'Wed, 07 Dec 2016 14:26:10 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Compute/virtualMachines/tempXplatVMForNicTests?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"6a80c6d4-698b-4e13-a7a1-23012c7899ff\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"credativ\",\r\n        \"offer\": \"Debian\",\r\n        \"sku\": \"8\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"clid16a364e79cdb636-os-1481120621299\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplattemptestaccount.blob.core.windows.net/vhds/clid16a364e79cdb636-os-1481120621299.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"tempXplatVMForNicTests\",\r\n      \"adminUsername\": \"xplatuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic\",\"properties\":{\"primary\":true}}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplattemptestaccount.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Compute/virtualMachines/tempXplatVMForNicTests\",\r\n  \"name\": \"tempXplatVMForNicTests\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1636',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '1140e0c9-b189-4861-9735-8154d3d824c8_131238889939254749',
  'x-ms-request-id': 'd2e83cf4-1374-45dc-aa45-d3357b0cb2d0',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14977',
  'x-ms-correlation-request-id': 'a000632a-4e0b-4bcf-9813-9522889c90d7',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142611Z:a000632a-4e0b-4bcf-9813-9522889c90d7',
  date: 'Wed, 07 Dec 2016 14:26:10 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/effectiveNetworkSecurityGroups?api-version=2016-09-01')
  .reply(200, "{\r\n  \"value\": []\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '19',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operationResults/f8835716-d352-4dda-85c1-fbc62145b50d?api-version=2016-09-01',
  'x-ms-request-id': 'f8835716-d352-4dda-85c1-fbc62145b50d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '7c7d73de-e485-4cdf-8ffc-1793ee65d19b',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142621Z:7c7d73de-e485-4cdf-8ffc-1793ee65d19b',
  date: 'Wed, 07 Dec 2016 14:26:20 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic/effectiveRouteTable?api-version=2016-09-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"source\": \"Default\",\r\n      \"state\": \"Active\",\r\n      \"addressPrefix\": [\r\n        \"10.0.0.0/8\"\r\n      ],\r\n      \"nextHopType\": \"VnetLocal\",\r\n      \"nextHopIpAddress\": []\r\n    },\r\n    {\r\n      \"source\": \"Default\",\r\n      \"state\": \"Active\",\r\n      \"addressPrefix\": [\r\n        \"0.0.0.0/0\"\r\n      ],\r\n      \"nextHopType\": \"Internet\",\r\n      \"nextHopIpAddress\": []\r\n    },\r\n    {\r\n      \"source\": \"Default\",\r\n      \"state\": \"Active\",\r\n      \"addressPrefix\": [\r\n        \"25.0.0.0/8\"\r\n      ],\r\n      \"nextHopType\": \"None\",\r\n      \"nextHopIpAddress\": []\r\n    },\r\n    {\r\n      \"source\": \"Default\",\r\n      \"state\": \"Active\",\r\n      \"addressPrefix\": [\r\n        \"100.64.0.0/10\"\r\n      ],\r\n      \"nextHopType\": \"None\",\r\n      \"nextHopIpAddress\": []\r\n    },\r\n    {\r\n      \"source\": \"Default\",\r\n      \"state\": \"Active\",\r\n      \"addressPrefix\": [\r\n        \"172.16.0.0/12\"\r\n      ],\r\n      \"nextHopType\": \"None\",\r\n      \"nextHopIpAddress\": []\r\n    },\r\n    {\r\n      \"source\": \"Default\",\r\n      \"state\": \"Active\",\r\n      \"addressPrefix\": [\r\n        \"192.168.0.0/16\"\r\n      ],\r\n      \"nextHopType\": \"None\",\r\n      \"nextHopIpAddress\": []\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1162',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westeurope/operationResults/86f7ba9c-58c0-4068-9999-39cb9745aaf2?api-version=2016-09-01',
  'x-ms-request-id': '86f7ba9c-58c0-4068-9999-39cb9745aaf2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1190',
  'x-ms-correlation-request-id': '00a51e70-cb23-4052-9f7e-e8eb6c38c70d',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142632Z:00a51e70-cb23-4052-9f7e-e8eb6c38c70d',
  date: 'Wed, 07 Dec 2016 14:26:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Compute/virtualMachines/tempXplatVMForNicTests?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"6a80c6d4-698b-4e13-a7a1-23012c7899ff\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"credativ\",\r\n        \"offer\": \"Debian\",\r\n        \"sku\": \"8\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"clid16a364e79cdb636-os-1481120621299\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplattemptestaccount.blob.core.windows.net/vhds/clid16a364e79cdb636-os-1481120621299.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"tempXplatVMForNicTests\",\r\n      \"adminUsername\": \"xplatuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/test-nic\",\"properties\":{\"primary\":true}}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplattemptestaccount.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Compute/virtualMachines/tempXplatVMForNicTests\",\r\n  \"name\": \"tempXplatVMForNicTests\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1636',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '1140e0c9-b189-4861-9735-8154d3d824c8_131238889939254749',
  'x-ms-request-id': 'f2534740-c3b5-4d8a-93ed-866637d84aae',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': '2b048342-78d2-47ce-b88a-17637da499e2',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142633Z:2b048342-78d2-47ce-b88a-17637da499e2',
  date: 'Wed, 07 Dec 2016 14:26:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Compute/virtualMachines/tempXplatVMForNicTests?api-version=2016-04-30-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/westeurope/operations/10d8a0b7-f3fe-437c-b262-1d855a2c670f?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/westeurope/operations/10d8a0b7-f3fe-437c-b262-1d855a2c670f?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '1140e0c9-b189-4861-9735-8154d3d824c8_131238889939254749',
  'x-ms-request-id': '10d8a0b7-f3fe-437c-b262-1d855a2c670f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': 'c577b757-b445-4259-a882-84cb26686c46',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142633Z:c577b757-b445-4259-a882-84cb26686c46',
  date: 'Wed, 07 Dec 2016 14:26:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/westeurope/operations/10d8a0b7-f3fe-437c-b262-1d855a2c670f?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2016-12-07T14:26:32.8566032+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"10d8a0b7-f3fe-437c-b262-1d855a2c670f\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '1140e0c9-b189-4861-9735-8154d3d824c8_131238889939254749',
  'x-ms-request-id': 'dc5f3c10-c6c4-4dc0-b77c-17749ac74586',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14967',
  'x-ms-correlation-request-id': '0787a6b1-8bda-4325-ab49-b2c6a508ef35',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142704Z:0787a6b1-8bda-4325-ab49-b2c6a508ef35',
  date: 'Wed, 07 Dec 2016 14:27:03 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/westeurope/operations/10d8a0b7-f3fe-437c-b262-1d855a2c670f?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2016-12-07T14:26:32.8566032+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"10d8a0b7-f3fe-437c-b262-1d855a2c670f\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '1140e0c9-b189-4861-9735-8154d3d824c8_131238889939254749',
  'x-ms-request-id': '292a35d5-85f9-4ae5-9423-0a506bb5a474',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': '7aba39a6-8bd2-462a-9d59-05b883b92db7',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142734Z:7aba39a6-8bd2-462a-9d59-05b883b92db7',
  date: 'Wed, 07 Dec 2016 14:27:34 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/westeurope/operations/10d8a0b7-f3fe-437c-b262-1d855a2c670f?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2016-12-07T14:26:32.8566032+00:00\",\r\n  \"endTime\": \"2016-12-07T14:27:43.6865382+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"10d8a0b7-f3fe-437c-b262-1d855a2c670f\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '1140e0c9-b189-4861-9735-8154d3d824c8_131238889939254749',
  'x-ms-request-id': 'bc88c1c2-f1d6-43cf-8f4d-d69d0838e047',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': '43f11895-1cfa-41f5-aa59-3a8db8af3413',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T142805Z:43f11895-1cfa-41f5-aa59-3a8db8af3413',
  date: 'Wed, 07 Dec 2016 14:28:05 GMT' });
 return result; }]];