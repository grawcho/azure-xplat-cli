// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
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
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/testblobcopysource/toCopy?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:42:13 GMT',
  etag: '"0x8D40DC1C9CB3119"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '664bc774-0001-0024-75aa-3f0f49000000',
  'x-ms-version': '2015-12-11',
  'x-ms-snapshot': '2016-11-16T01:42:16.9744672Z',
  date: 'Wed, 16 Nov 2016 01:42:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/testblobcopysource/toCopy?comp=snapshot')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:42:13 GMT',
  etag: '"0x8D40DC1C9CB3119"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '664bc774-0001-0024-75aa-3f0f49000000',
  'x-ms-version': '2015-12-11',
  'x-ms-snapshot': '2016-11-16T01:42:16.9744672Z',
  date: 'Wed, 16 Nov 2016 01:42:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .get('/testblobcopysource?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 16 Nov 2016 01:42:11 GMT',
  etag: '"0x8D40DC1C8EE4A47"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '896c2816-0001-0019-0baa-3fba6f000000',
  'x-ms-version': '2015-12-11',
  date: 'Wed, 16 Nov 2016 01:42:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/testblobcopysource?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Wed, 16 Nov 2016 01:42:11 GMT',
  etag: '"0x8D40DC1C8EE4A47"',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '896c2816-0001-0019-0baa-3fba6f000000',
  'x-ms-version': '2015-12-11',
  date: 'Wed, 16 Nov 2016 01:42:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .put('/testblobcopydest/toCopy')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:42:18 GMT',
  etag: '"0x8D40DC1CCB35440"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e2dcccf1-0001-0022-45aa-3ff831000000',
  'x-ms-version': '2015-12-11',
  'x-ms-copy-id': '049e697c-eb12-4394-b18f-10d0e97f34b8',
  'x-ms-copy-status': 'success',
  date: 'Wed, 16 Nov 2016 01:42:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .put('/testblobcopydest/toCopy')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Wed, 16 Nov 2016 01:42:18 GMT',
  etag: '"0x8D40DC1CCB35440"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'e2dcccf1-0001-0022-45aa-3ff831000000',
  'x-ms-version': '2015-12-11',
  'x-ms-copy-id': '049e697c-eb12-4394-b18f-10d0e97f34b8',
  'x-ms-copy-status': 'success',
  date: 'Wed, 16 Nov 2016 01:42:18 GMT',
  connection: 'close' });
 return result; }]];