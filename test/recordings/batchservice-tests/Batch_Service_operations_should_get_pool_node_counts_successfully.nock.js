// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'lchency4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://lchency4.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .get('/nodecounts?api-version=2018-03-01.6.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#poolnodecounts\",\"value\":[\r\n    {\r\n      \"poolId\":\"nodesdkinboundendpointpool\",\"dedicated\":{\r\n        \"creating\":0,\"idle\":1,\"offline\":0,\"preempted\":0,\"rebooting\":0,\"reimaging\":0,\"running\":0,\"starting\":0,\"startTaskFailed\":0,\"unusable\":0,\"unknown\":0,\"waitingForStartTask\":0,\"leavingPool\":0,\"total\":1\r\n      },\"lowPriority\":{\r\n        \"creating\":0,\"idle\":0,\"offline\":0,\"preempted\":0,\"rebooting\":0,\"reimaging\":0,\"running\":0,\"starting\":0,\"startTaskFailed\":0,\"unusable\":0,\"unknown\":0,\"waitingForStartTask\":0,\"leavingPool\":0,\"total\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '83cd363d-ff4f-455c-b33a-1400d41b97eb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 09 Mar 2018 23:57:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .get('/nodecounts?api-version=2018-03-01.6.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#poolnodecounts\",\"value\":[\r\n    {\r\n      \"poolId\":\"nodesdkinboundendpointpool\",\"dedicated\":{\r\n        \"creating\":0,\"idle\":1,\"offline\":0,\"preempted\":0,\"rebooting\":0,\"reimaging\":0,\"running\":0,\"starting\":0,\"startTaskFailed\":0,\"unusable\":0,\"unknown\":0,\"waitingForStartTask\":0,\"leavingPool\":0,\"total\":1\r\n      },\"lowPriority\":{\r\n        \"creating\":0,\"idle\":0,\"offline\":0,\"preempted\":0,\"rebooting\":0,\"reimaging\":0,\"running\":0,\"starting\":0,\"startTaskFailed\":0,\"unusable\":0,\"unknown\":0,\"waitingForStartTask\":0,\"leavingPool\":0,\"total\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '83cd363d-ff4f-455c-b33a-1400d41b97eb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 09 Mar 2018 23:57:33 GMT',
  connection: 'close' });
 return result; }]];