// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'ce4a7590-4722-4bcf-a2c6-e473e9f11778';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/checkNameAvailability?api-version=2018-03-01-preview', '*')
  .reply(200, "{\"message\":\"The storage account named testacc6023 is already taken.\",\"nameAvailable\":false,\"reason\":\"AlreadyExists\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '117',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '6168e2c0-85e7-4cee-89d6-e342c2cb66d1',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14951',
  'x-ms-correlation-request-id': '6168e2c0-85e7-4cee-89d6-e342c2cb66d1',
  'x-ms-routing-request-id': 'EASTASIA:20171212T055125Z:6168e2c0-85e7-4cee-89d6-e342c2cb66d1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 05:51:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/checkNameAvailability?api-version=2018-03-01-preview', '*')
  .reply(200, "{\"message\":\"The storage account named testacc6023 is already taken.\",\"nameAvailable\":false,\"reason\":\"AlreadyExists\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '117',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '6168e2c0-85e7-4cee-89d6-e342c2cb66d1',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14951',
  'x-ms-correlation-request-id': '6168e2c0-85e7-4cee-89d6-e342c2cb66d1',
  'x-ms-routing-request-id': 'EASTASIA:20171212T055125Z:6168e2c0-85e7-4cee-89d6-e342c2cb66d1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 05:51:25 GMT',
  connection: 'close' });
 return result; }]];