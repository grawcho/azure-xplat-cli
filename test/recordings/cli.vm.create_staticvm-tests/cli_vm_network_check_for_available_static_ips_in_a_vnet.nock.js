// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'CollaberaInteropTest',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/virtualnetwork')
  .reply(200, "<VirtualNetworkSites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><VirtualNetworkSite><Name>anuvnet1</Name><Id>4bd7ff84-5d76-4303-b8eb-8ec591f79c7d</Id><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets><Location>West US</Location></VirtualNetworkSite><VirtualNetworkSite><Name>azure4linux</Name><Id>b13cb23d-eb88-4b25-b220-d2750eac1214</Id><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets><Location>West Europe</Location></VirtualNetworkSite><VirtualNetworkSite><Name>CliTestVnett597</Name><Id>ed0934c8-cdcb-4a40-a609-0220eba14e71</Id><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/20</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/23</AddressPrefix></Subnet></Subnets><Location>West US</Location></VirtualNetworkSite><VirtualNetworkSite><Name>CliTestVnetVm</Name><Id>7e925da2-a6ac-42c6-9345-fcb8b008f81a</Id><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/20</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>CliTestSubnetVm</Name><AddressPrefix>10.0.0.0/23</AddressPrefix></Subnet></Subnets><Location>West US</Location></VirtualNetworkSite><VirtualNetworkSite><Name>Group armresgrpeastustest1 TestArmVMList</Name><Id>a580a029-9c72-44fc-b57b-57ae76a97417</Id><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/16</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/24</AddressPrefix></Subnet></Subnets><Location>West US</Location></VirtualNetworkSite><VirtualNetworkSite><Name>mynetwork</Name><Id>386452bd-5cef-4eea-a889-a6e5d0635381</Id><AffinityGroup>affinity1</AffinityGroup><State>Created</State><InUse>true</InUse><AddressSpace><AddressPrefixes><AddressPrefix>10.4.0.0/16</AddressPrefix><AddressPrefix>10.1.0.0/16</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.4.2.0/19</AddressPrefix></Subnet><Subnet><Name>GatewaySubnet</Name><AddressPrefix>10.4.32.0/29</AddressPrefix></Subnet></Subnets></VirtualNetworkSite><VirtualNetworkSite><Name>ne@@wvnet$$%10</Name><Id>c27720fe-1c7c-429b-85ec-09cf605307e2</Id><AffinityGroup>NewAffinityGroup01</AffinityGroup><State>Creating</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.8.7/24</AddressPrefix></AddressPrefixes></AddressSpace><Subnets/></VirtualNetworkSite><VirtualNetworkSite><Name>newvnet$$%10</Name><Id>1e045b27-4b5a-42f6-8399-23a85df51702</Id><AffinityGroup>NewAffinityGroup01</AffinityGroup><State>Creating</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.8.7/24</AddressPrefix></AddressPrefixes></AddressSpace><Subnets/></VirtualNetworkSite><VirtualNetworkSite><Name>rc817test1</Name><Id>74568b94-ecee-49c4-b3e9-f7a5a47084fb</Id><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets><Location>East US</Location></VirtualNetworkSite><VirtualNetworkSite><Name>Testvnet</Name><Id>410b020c-7873-4b9b-a5d0-d8f15afc8369</Id><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet><Subnet><Name>Subnet-2</Name><AddressPrefix>10.32.0.0/11</AddressPrefix></Subnet></Subnets><Location>West US</Location></VirtualNetworkSite><VirtualNetworkSite><Name>TestVnet28</Name><Id>edfe92b4-88ea-49f6-9ba0-d816d26081dc</Id><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets><Location>West US</Location></VirtualNetworkSite><VirtualNetworkSite><Name>TestVnet36</Name><Id>c392852e-7470-4229-9e68-64fd56673dfa</Id><AffinityGroup>AG-CLI-a483f54f3aac0195</AffinityGroup><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets></VirtualNetworkSite><VirtualNetworkSite><Name>Testvnet7</Name><Id>f19e8464-1268-4765-afa3-a26f04859180</Id><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets><Location>West US</Location></VirtualNetworkSite><VirtualNetworkSite><Name>testy</Name><Id>06bb8c56-83da-499e-8585-2609db606247</Id><AffinityGroup>affinity1</AffinityGroup><State>Created</State><InUse>true</InUse><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.11/8</AddressPrefix><AddressPrefix>172.16.77.0/12</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet><Subnet><Name>GatewaySubnet</Name><AddressPrefix>10.32.0.0/29</AddressPrefix></Subnet></Subnets></VirtualNetworkSite><VirtualNetworkSite><Name>Vnet</Name><Id>a9001b93-75cc-4580-94b4-a200654da28e</Id><AffinityGroup>EastAsia</AffinityGroup><State>Created</State><InUse>true</InUse><AddressSpace><AddressPrefixes><AddressPrefix>172.16.0.0/28</AddressPrefix><AddressPrefix>192.168.29.0/24</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>172.16.0.0/29</AddressPrefix></Subnet><Subnet><Name>GatewaySubnet</Name><AddressPrefix>172.16.0.8/29</AddressPrefix></Subnet></Subnets></VirtualNetworkSite><VirtualNetworkSite><Name>vnet1</Name><Id>16e85df2-58dd-453d-801a-ab89c7b637df</Id><State>Created</State><InUse>true</InUse><AddressSpace><AddressPrefixes><AddressPrefix>10.1.0.0/16</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>subnet-1</Name><AddressPrefix>10.1.0.0/19</AddressPrefix></Subnet><Subnet><Name>GatewaySubnet</Name><AddressPrefix>10.1.32.0/29</AddressPrefix></Subnet></Subnets><Location>West US</Location></VirtualNetworkSite><VirtualNetworkSite><Name>vnet2</Name><Id>fdf85c9d-eb5d-46f5-89eb-c081165ed152</Id><State>Created</State><InUse>true</InUse><AddressSpace><AddressPrefixes><AddressPrefix>10.2.0.0/16</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>subnet-1</Name><AddressPrefix>10.2.0.0/19</AddressPrefix></Subnet><Subnet><Name>Subnet-2</Name><AddressPrefix>10.2.32.8/29</AddressPrefix></Subnet><Subnet><Name>GatewaySubnet</Name><AddressPrefix>10.2.32.0/29</AddressPrefix></Subnet></Subnets><Location>West US</Location></VirtualNetworkSite><VirtualNetworkSite><Name>Vnet28</Name><Id>d4eff0fe-d774-4fa1-bdad-9fc6bea1218e</Id><State>Created</State><InUse>true</InUse><AddressSpace><AddressPrefixes><AddressPrefix>10.16.0.32/27</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.16.0.32/29</AddressPrefix></Subnet><Subnet><Name>GatewaySubnet</Name><AddressPrefix>10.16.0.40/29</AddressPrefix></Subnet></Subnets><Location>West US</Location></VirtualNetworkSite><VirtualNetworkSite><Name>XplatTestVnet25</Name><Id>d6182633-eaeb-425d-9a76-bfffd6e03af9</Id><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets><Location>West US</Location></VirtualNetworkSite></VirtualNetworkSites>", { 'cache-control': 'no-cache',
  'content-length': '7945',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.240 (rd_rdfe_stable.150608-1900) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '7aad61a13c94b323883a6c9ce32331c6',
  date: 'Fri, 12 Jun 2015 07:57:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/virtualnetwork')
  .reply(200, "<VirtualNetworkSites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><VirtualNetworkSite><Name>anuvnet1</Name><Id>4bd7ff84-5d76-4303-b8eb-8ec591f79c7d</Id><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets><Location>West US</Location></VirtualNetworkSite><VirtualNetworkSite><Name>azure4linux</Name><Id>b13cb23d-eb88-4b25-b220-d2750eac1214</Id><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets><Location>West Europe</Location></VirtualNetworkSite><VirtualNetworkSite><Name>CliTestVnett597</Name><Id>ed0934c8-cdcb-4a40-a609-0220eba14e71</Id><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/20</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/23</AddressPrefix></Subnet></Subnets><Location>West US</Location></VirtualNetworkSite><VirtualNetworkSite><Name>CliTestVnetVm</Name><Id>7e925da2-a6ac-42c6-9345-fcb8b008f81a</Id><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/20</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>CliTestSubnetVm</Name><AddressPrefix>10.0.0.0/23</AddressPrefix></Subnet></Subnets><Location>West US</Location></VirtualNetworkSite><VirtualNetworkSite><Name>Group armresgrpeastustest1 TestArmVMList</Name><Id>a580a029-9c72-44fc-b57b-57ae76a97417</Id><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/16</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/24</AddressPrefix></Subnet></Subnets><Location>West US</Location></VirtualNetworkSite><VirtualNetworkSite><Name>mynetwork</Name><Id>386452bd-5cef-4eea-a889-a6e5d0635381</Id><AffinityGroup>affinity1</AffinityGroup><State>Created</State><InUse>true</InUse><AddressSpace><AddressPrefixes><AddressPrefix>10.4.0.0/16</AddressPrefix><AddressPrefix>10.1.0.0/16</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.4.2.0/19</AddressPrefix></Subnet><Subnet><Name>GatewaySubnet</Name><AddressPrefix>10.4.32.0/29</AddressPrefix></Subnet></Subnets></VirtualNetworkSite><VirtualNetworkSite><Name>ne@@wvnet$$%10</Name><Id>c27720fe-1c7c-429b-85ec-09cf605307e2</Id><AffinityGroup>NewAffinityGroup01</AffinityGroup><State>Creating</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.8.7/24</AddressPrefix></AddressPrefixes></AddressSpace><Subnets/></VirtualNetworkSite><VirtualNetworkSite><Name>newvnet$$%10</Name><Id>1e045b27-4b5a-42f6-8399-23a85df51702</Id><AffinityGroup>NewAffinityGroup01</AffinityGroup><State>Creating</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.8.7/24</AddressPrefix></AddressPrefixes></AddressSpace><Subnets/></VirtualNetworkSite><VirtualNetworkSite><Name>rc817test1</Name><Id>74568b94-ecee-49c4-b3e9-f7a5a47084fb</Id><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets><Location>East US</Location></VirtualNetworkSite><VirtualNetworkSite><Name>Testvnet</Name><Id>410b020c-7873-4b9b-a5d0-d8f15afc8369</Id><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet><Subnet><Name>Subnet-2</Name><AddressPrefix>10.32.0.0/11</AddressPrefix></Subnet></Subnets><Location>West US</Location></VirtualNetworkSite><VirtualNetworkSite><Name>TestVnet28</Name><Id>edfe92b4-88ea-49f6-9ba0-d816d26081dc</Id><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets><Location>West US</Location></VirtualNetworkSite><VirtualNetworkSite><Name>TestVnet36</Name><Id>c392852e-7470-4229-9e68-64fd56673dfa</Id><AffinityGroup>AG-CLI-a483f54f3aac0195</AffinityGroup><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets></VirtualNetworkSite><VirtualNetworkSite><Name>Testvnet7</Name><Id>f19e8464-1268-4765-afa3-a26f04859180</Id><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets><Location>West US</Location></VirtualNetworkSite><VirtualNetworkSite><Name>testy</Name><Id>06bb8c56-83da-499e-8585-2609db606247</Id><AffinityGroup>affinity1</AffinityGroup><State>Created</State><InUse>true</InUse><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.11/8</AddressPrefix><AddressPrefix>172.16.77.0/12</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet><Subnet><Name>GatewaySubnet</Name><AddressPrefix>10.32.0.0/29</AddressPrefix></Subnet></Subnets></VirtualNetworkSite><VirtualNetworkSite><Name>Vnet</Name><Id>a9001b93-75cc-4580-94b4-a200654da28e</Id><AffinityGroup>EastAsia</AffinityGroup><State>Created</State><InUse>true</InUse><AddressSpace><AddressPrefixes><AddressPrefix>172.16.0.0/28</AddressPrefix><AddressPrefix>192.168.29.0/24</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>172.16.0.0/29</AddressPrefix></Subnet><Subnet><Name>GatewaySubnet</Name><AddressPrefix>172.16.0.8/29</AddressPrefix></Subnet></Subnets></VirtualNetworkSite><VirtualNetworkSite><Name>vnet1</Name><Id>16e85df2-58dd-453d-801a-ab89c7b637df</Id><State>Created</State><InUse>true</InUse><AddressSpace><AddressPrefixes><AddressPrefix>10.1.0.0/16</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>subnet-1</Name><AddressPrefix>10.1.0.0/19</AddressPrefix></Subnet><Subnet><Name>GatewaySubnet</Name><AddressPrefix>10.1.32.0/29</AddressPrefix></Subnet></Subnets><Location>West US</Location></VirtualNetworkSite><VirtualNetworkSite><Name>vnet2</Name><Id>fdf85c9d-eb5d-46f5-89eb-c081165ed152</Id><State>Created</State><InUse>true</InUse><AddressSpace><AddressPrefixes><AddressPrefix>10.2.0.0/16</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>subnet-1</Name><AddressPrefix>10.2.0.0/19</AddressPrefix></Subnet><Subnet><Name>Subnet-2</Name><AddressPrefix>10.2.32.8/29</AddressPrefix></Subnet><Subnet><Name>GatewaySubnet</Name><AddressPrefix>10.2.32.0/29</AddressPrefix></Subnet></Subnets><Location>West US</Location></VirtualNetworkSite><VirtualNetworkSite><Name>Vnet28</Name><Id>d4eff0fe-d774-4fa1-bdad-9fc6bea1218e</Id><State>Created</State><InUse>true</InUse><AddressSpace><AddressPrefixes><AddressPrefix>10.16.0.32/27</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.16.0.32/29</AddressPrefix></Subnet><Subnet><Name>GatewaySubnet</Name><AddressPrefix>10.16.0.40/29</AddressPrefix></Subnet></Subnets><Location>West US</Location></VirtualNetworkSite><VirtualNetworkSite><Name>XplatTestVnet25</Name><Id>d6182633-eaeb-425d-9a76-bfffd6e03af9</Id><State>Created</State><AddressSpace><AddressPrefixes><AddressPrefix>10.0.0.0/8</AddressPrefix></AddressPrefixes></AddressSpace><Subnets><Subnet><Name>Subnet-1</Name><AddressPrefix>10.0.0.0/11</AddressPrefix></Subnet></Subnets><Location>West US</Location></VirtualNetworkSite></VirtualNetworkSites>", { 'cache-control': 'no-cache',
  'content-length': '7945',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.240 (rd_rdfe_stable.150608-1900) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': '7aad61a13c94b323883a6c9ce32331c6',
  date: 'Fri, 12 Jun 2015 07:57:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/mynetwork?op=checkavailability&address=10.4.0.0')
  .reply(200, "<AddressAvailabilityResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><IsAvailable>false</IsAvailable><AvailableAddresses><AvailableAddress>10.4.0.4</AvailableAddress><AvailableAddress>10.4.0.5</AvailableAddress><AvailableAddress>10.4.0.6</AvailableAddress><AvailableAddress>10.4.0.7</AvailableAddress><AvailableAddress>10.4.0.8</AvailableAddress></AvailableAddresses></AddressAvailabilityResponse>", { 'cache-control': 'no-cache',
  'content-length': '459',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.240 (rd_rdfe_stable.150608-1900) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': 'd29e7c7c6470b25c8c2605a71652b7c8',
  date: 'Fri, 12 Jun 2015 07:57:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/networking/mynetwork?op=checkavailability&address=10.4.0.0')
  .reply(200, "<AddressAvailabilityResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><IsAvailable>false</IsAvailable><AvailableAddresses><AvailableAddress>10.4.0.4</AvailableAddress><AvailableAddress>10.4.0.5</AvailableAddress><AvailableAddress>10.4.0.6</AvailableAddress><AvailableAddress>10.4.0.7</AvailableAddress><AvailableAddress>10.4.0.8</AvailableAddress></AvailableAddresses></AddressAvailabilityResponse>", { 'cache-control': 'no-cache',
  'content-length': '459',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.240 (rd_rdfe_stable.150608-1900) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'usnorth2',
  'x-ms-request-id': 'd29e7c7c6470b25c8c2605a71652b7c8',
  date: 'Fri, 12 Jun 2015 07:57:56 GMT',
  connection: 'close' });
 return result; }]];