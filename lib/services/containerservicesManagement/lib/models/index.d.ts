/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * The Resource model definition.
 *
 * @member {string} [id] Resource Id
 * @member {string} [name] Resource name
 * @member {string} [type] Resource type
 * @member {string} location Resource location
 * @member {object} [tags] Resource tags
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the ContainerServiceCustomProfile class.
 * @constructor
 * Properties to configure a custom container service cluster.
 *
 * @member {string} orchestrator The name of the custom orchestrator to use.
 */
export interface ContainerServiceCustomProfile {
  orchestrator: string;
}

/**
 * @class
 * Initializes a new instance of the KeyVaultSecretRef class.
 * @constructor
 * Reference to a secret stored in Azure Key Vault.
 *
 * @member {string} vaultID Key vault identifier.
 * @member {string} secretName The secret name.
 * @member {string} [version] The secret version.
 */
export interface KeyVaultSecretRef {
  vaultID: string;
  secretName: string;
  version?: string;
}

/**
 * @class
 * Initializes a new instance of the ContainerServiceServicePrincipalProfile class.
 * @constructor
 * Information about a service principal identity for the cluster to use for
 * manipulating Azure APIs. Either secret or keyVaultSecretRef must be
 * specified.
 *
 * @member {string} clientId The ID for the service principal.
 * @member {string} [secret] The secret password associated with the service
 * principal in plain text.
 * @member {object} [keyVaultSecretRef] Reference to a secret stored in Azure
 * Key Vault.
 * @member {string} [keyVaultSecretRef.vaultID] Key vault identifier.
 * @member {string} [keyVaultSecretRef.secretName] The secret name.
 * @member {string} [keyVaultSecretRef.version] The secret version.
 */
export interface ContainerServiceServicePrincipalProfile {
  clientId: string;
  secret?: string;
  keyVaultSecretRef?: KeyVaultSecretRef;
}

/**
 * @class
 * Initializes a new instance of the ContainerServiceOrchestratorProfile class.
 * @constructor
 * Profile for the container service orchestrator.
 *
 * @member {string} orchestratorType The orchestrator to use to manage
 * container service cluster resources. Valid values are Kubernetes, Swarm,
 * DCOS, DockerCE and Custom. Possible values include: 'Kubernetes', 'Swarm',
 * 'DCOS', 'DockerCE', 'Custom'
 * @member {string} [orchestratorVersion] The version of the orchestrator to
 * use. You can specify the major.minor.patch part of the actual version.For
 * example, you can specify version as "1.6.11".
 */
export interface ContainerServiceOrchestratorProfile {
  orchestratorType: string;
  orchestratorVersion?: string;
}

/**
 * @class
 * Initializes a new instance of the ContainerServiceMasterProfile class.
 * @constructor
 * Profile for the container service master.
 *
 * @member {number} [count] Number of masters (VMs) in the container service
 * cluster. Allowed values are 1, 3, and 5. The default value is 1. Default
 * value: 1 .
 * @member {string} dnsPrefix DNS prefix to be used to create the FQDN for the
 * master pool.
 * @member {string} vmSize Size of agent VMs. Possible values include:
 * 'Standard_A0', 'Standard_A1', 'Standard_A10', 'Standard_A11',
 * 'Standard_A1_v2', 'Standard_A2', 'Standard_A2_v2', 'Standard_A2m_v2',
 * 'Standard_A3', 'Standard_A4', 'Standard_A4_v2', 'Standard_A4m_v2',
 * 'Standard_A5', 'Standard_A6', 'Standard_A7', 'Standard_A8',
 * 'Standard_A8_v2', 'Standard_A8m_v2', 'Standard_A9', 'Standard_D1',
 * 'Standard_D11', 'Standard_D11_v2', 'Standard_D11_v2_Promo', 'Standard_D12',
 * 'Standard_D12_v2', 'Standard_D12_v2_Promo', 'Standard_D13',
 * 'Standard_D13_v2', 'Standard_D13_v2_Promo', 'Standard_D14',
 * 'Standard_D14_v2', 'Standard_D14_v2_Promo', 'Standard_D15_v2',
 * 'Standard_D16_v3', 'Standard_D16s_v3', 'Standard_D1_v2', 'Standard_D2',
 * 'Standard_D2_v2', 'Standard_D2_v2_Promo', 'Standard_D2_v3',
 * 'Standard_D2s_v3', 'Standard_D3', 'Standard_D3_v2', 'Standard_D3_v2_Promo',
 * 'Standard_D4', 'Standard_D4_v2', 'Standard_D4_v2_Promo', 'Standard_D4_v3',
 * 'Standard_D4s_v3', 'Standard_D5_v2', 'Standard_D5_v2_Promo',
 * 'Standard_D8_v3', 'Standard_D8s_v3', 'Standard_DS1', 'Standard_DS11',
 * 'Standard_DS11_v2', 'Standard_DS11_v2_Promo', 'Standard_DS12',
 * 'Standard_DS12_v2', 'Standard_DS12_v2_Promo', 'Standard_DS13',
 * 'Standard_DS13_v2', 'Standard_DS13_v2_Promo', 'Standard_DS14',
 * 'Standard_DS14_v2', 'Standard_DS14_v2_Promo', 'Standard_DS15_v2',
 * 'Standard_DS1_v2', 'Standard_DS2', 'Standard_DS2_v2',
 * 'Standard_DS2_v2_Promo', 'Standard_DS3', 'Standard_DS3_v2',
 * 'Standard_DS3_v2_Promo', 'Standard_DS4', 'Standard_DS4_v2',
 * 'Standard_DS4_v2_Promo', 'Standard_DS5_v2', 'Standard_DS5_v2_Promo',
 * 'Standard_E16_v3', 'Standard_E16s_v3', 'Standard_E2_v3', 'Standard_E2s_v3',
 * 'Standard_E32_v3', 'Standard_E32s_v3', 'Standard_E4_v3', 'Standard_E4s_v3',
 * 'Standard_E64_v3', 'Standard_E64s_v3', 'Standard_E8_v3', 'Standard_E8s_v3',
 * 'Standard_F1', 'Standard_F16', 'Standard_F16s', 'Standard_F1s',
 * 'Standard_F2', 'Standard_F2s', 'Standard_F4', 'Standard_F4s', 'Standard_F8',
 * 'Standard_F8s', 'Standard_G1', 'Standard_G2', 'Standard_G3', 'Standard_G4',
 * 'Standard_G5', 'Standard_GS1', 'Standard_GS2', 'Standard_GS3',
 * 'Standard_GS4', 'Standard_GS5', 'Standard_H16', 'Standard_H16m',
 * 'Standard_H16mr', 'Standard_H16r', 'Standard_H8', 'Standard_H8m',
 * 'Standard_L16s', 'Standard_L32s', 'Standard_L4s', 'Standard_L8s',
 * 'Standard_M128s', 'Standard_M64ms', 'Standard_NC12', 'Standard_NC24',
 * 'Standard_NC24r', 'Standard_NC6', 'Standard_NV12', 'Standard_NV24',
 * 'Standard_NV6'
 * @member {number} [osDiskSizeGB] OS Disk Size in GB to be used to specify the
 * disk size for every machine in this master/agent pool. If you specify 0, it
 * will apply the default osDisk size according to the vmSize specified.
 * @member {string} [vnetSubnetID] VNet SubnetID specifies the vnet's subnet
 * identifier. If you specify either master VNet Subnet, or agent VNet Subnet,
 * you need to specify both. And they have to be in the same VNet.
 * @member {string} [firstConsecutiveStaticIP] FirstConsecutiveStaticIP used to
 * specify the first static ip of masters. Default value: '10.240.255.5' .
 * @member {string} [storageProfile] Storage profile specifies what kind of
 * storage used. Choose from StorageAccount and ManagedDisks. Leave it empty,
 * we will choose for you based on the orchestrator choice. Possible values
 * include: 'StorageAccount', 'ManagedDisks'
 * @member {string} [fqdn] FDQN for the master pool.
 */
export interface ContainerServiceMasterProfile {
  count?: number;
  dnsPrefix: string;
  vmSize: string;
  osDiskSizeGB?: number;
  vnetSubnetID?: string;
  firstConsecutiveStaticIP?: string;
  storageProfile?: string;
  readonly fqdn?: string;
}

/**
 * @class
 * Initializes a new instance of the ContainerServiceAgentPoolProfile class.
 * @constructor
 * Profile for the container service agent pool.
 *
 * @member {string} name Unique name of the agent pool profile in the context
 * of the subscription and resource group.
 * @member {number} [count] Number of agents (VMs) to host docker containers.
 * Allowed values must be in the range of 1 to 100 (inclusive). The default
 * value is 1. . Default value: 1 .
 * @member {string} vmSize Size of agent VMs. Possible values include:
 * 'Standard_A0', 'Standard_A1', 'Standard_A10', 'Standard_A11',
 * 'Standard_A1_v2', 'Standard_A2', 'Standard_A2_v2', 'Standard_A2m_v2',
 * 'Standard_A3', 'Standard_A4', 'Standard_A4_v2', 'Standard_A4m_v2',
 * 'Standard_A5', 'Standard_A6', 'Standard_A7', 'Standard_A8',
 * 'Standard_A8_v2', 'Standard_A8m_v2', 'Standard_A9', 'Standard_D1',
 * 'Standard_D11', 'Standard_D11_v2', 'Standard_D11_v2_Promo', 'Standard_D12',
 * 'Standard_D12_v2', 'Standard_D12_v2_Promo', 'Standard_D13',
 * 'Standard_D13_v2', 'Standard_D13_v2_Promo', 'Standard_D14',
 * 'Standard_D14_v2', 'Standard_D14_v2_Promo', 'Standard_D15_v2',
 * 'Standard_D16_v3', 'Standard_D16s_v3', 'Standard_D1_v2', 'Standard_D2',
 * 'Standard_D2_v2', 'Standard_D2_v2_Promo', 'Standard_D2_v3',
 * 'Standard_D2s_v3', 'Standard_D3', 'Standard_D3_v2', 'Standard_D3_v2_Promo',
 * 'Standard_D4', 'Standard_D4_v2', 'Standard_D4_v2_Promo', 'Standard_D4_v3',
 * 'Standard_D4s_v3', 'Standard_D5_v2', 'Standard_D5_v2_Promo',
 * 'Standard_D8_v3', 'Standard_D8s_v3', 'Standard_DS1', 'Standard_DS11',
 * 'Standard_DS11_v2', 'Standard_DS11_v2_Promo', 'Standard_DS12',
 * 'Standard_DS12_v2', 'Standard_DS12_v2_Promo', 'Standard_DS13',
 * 'Standard_DS13_v2', 'Standard_DS13_v2_Promo', 'Standard_DS14',
 * 'Standard_DS14_v2', 'Standard_DS14_v2_Promo', 'Standard_DS15_v2',
 * 'Standard_DS1_v2', 'Standard_DS2', 'Standard_DS2_v2',
 * 'Standard_DS2_v2_Promo', 'Standard_DS3', 'Standard_DS3_v2',
 * 'Standard_DS3_v2_Promo', 'Standard_DS4', 'Standard_DS4_v2',
 * 'Standard_DS4_v2_Promo', 'Standard_DS5_v2', 'Standard_DS5_v2_Promo',
 * 'Standard_E16_v3', 'Standard_E16s_v3', 'Standard_E2_v3', 'Standard_E2s_v3',
 * 'Standard_E32_v3', 'Standard_E32s_v3', 'Standard_E4_v3', 'Standard_E4s_v3',
 * 'Standard_E64_v3', 'Standard_E64s_v3', 'Standard_E8_v3', 'Standard_E8s_v3',
 * 'Standard_F1', 'Standard_F16', 'Standard_F16s', 'Standard_F1s',
 * 'Standard_F2', 'Standard_F2s', 'Standard_F4', 'Standard_F4s', 'Standard_F8',
 * 'Standard_F8s', 'Standard_G1', 'Standard_G2', 'Standard_G3', 'Standard_G4',
 * 'Standard_G5', 'Standard_GS1', 'Standard_GS2', 'Standard_GS3',
 * 'Standard_GS4', 'Standard_GS5', 'Standard_H16', 'Standard_H16m',
 * 'Standard_H16mr', 'Standard_H16r', 'Standard_H8', 'Standard_H8m',
 * 'Standard_L16s', 'Standard_L32s', 'Standard_L4s', 'Standard_L8s',
 * 'Standard_M128s', 'Standard_M64ms', 'Standard_NC12', 'Standard_NC24',
 * 'Standard_NC24r', 'Standard_NC6', 'Standard_NV12', 'Standard_NV24',
 * 'Standard_NV6'
 * @member {number} [osDiskSizeGB] OS Disk Size in GB to be used to specify the
 * disk size for every machine in this master/agent pool. If you specify 0, it
 * will apply the default osDisk size according to the vmSize specified.
 * @member {string} [dnsPrefix] DNS prefix to be used to create the FQDN for
 * the agent pool.
 * @member {string} [fqdn] FDQN for the agent pool.
 * @member {array} [ports] Ports number array used to expose on this agent
 * pool. The default opened ports are different based on your choice of
 * orchestrator.
 * @member {string} [storageProfile] Storage profile specifies what kind of
 * storage used. Choose from StorageAccount and ManagedDisks. Leave it empty,
 * we will choose for you based on the orchestrator choice. Possible values
 * include: 'StorageAccount', 'ManagedDisks'
 * @member {string} [vnetSubnetID] VNet SubnetID specifies the vnet's subnet
 * identifier. If you specify either master VNet Subnet, or agent VNet Subnet,
 * you need to specify both. And they have to be in the same VNet.
 * @member {string} [osType] OsType to be used to specify os type. Choose from
 * Linux and Windows. Default to Linux. Possible values include: 'Linux',
 * 'Windows'. Default value: 'Linux' .
 */
export interface ContainerServiceAgentPoolProfile {
  name: string;
  count?: number;
  vmSize: string;
  osDiskSizeGB?: number;
  dnsPrefix?: string;
  readonly fqdn?: string;
  ports?: number[];
  storageProfile?: string;
  vnetSubnetID?: string;
  osType?: string;
}

/**
 * @class
 * Initializes a new instance of the ContainerServiceWindowsProfile class.
 * @constructor
 * Profile for Windows VMs in the container service cluster.
 *
 * @member {string} adminUsername The administrator username to use for Windows
 * VMs.
 * @member {string} adminPassword The administrator password to use for Windows
 * VMs.
 */
export interface ContainerServiceWindowsProfile {
  adminUsername: string;
  adminPassword: string;
}

/**
 * @class
 * Initializes a new instance of the ContainerServiceSshPublicKey class.
 * @constructor
 * Contains information about SSH certificate public key data.
 *
 * @member {string} keyData Certificate public key used to authenticate with
 * VMs through SSH. The certificate must be in PEM format with or without
 * headers.
 */
export interface ContainerServiceSshPublicKey {
  keyData: string;
}

/**
 * @class
 * Initializes a new instance of the ContainerServiceSshConfiguration class.
 * @constructor
 * SSH configuration for Linux-based VMs running on Azure.
 *
 * @member {array} publicKeys The list of SSH public keys used to authenticate
 * with Linux-based VMs. Only expect one key specified.
 */
export interface ContainerServiceSshConfiguration {
  publicKeys: ContainerServiceSshPublicKey[];
}

/**
 * @class
 * Initializes a new instance of the ContainerServiceLinuxProfile class.
 * @constructor
 * Profile for Linux VMs in the container service cluster.
 *
 * @member {string} adminUsername The administrator username to use for Linux
 * VMs.
 * @member {object} ssh SSH configuration for Linux-based VMs running on Azure.
 * @member {array} [ssh.publicKeys] The list of SSH public keys used to
 * authenticate with Linux-based VMs. Only expect one key specified.
 */
export interface ContainerServiceLinuxProfile {
  adminUsername: string;
  ssh: ContainerServiceSshConfiguration;
}

/**
 * @class
 * Initializes a new instance of the ContainerServiceVMDiagnostics class.
 * @constructor
 * Profile for diagnostics on the container service VMs.
 *
 * @member {boolean} enabled Whether the VM diagnostic agent is provisioned on
 * the VM.
 * @member {string} [storageUri] The URI of the storage account where
 * diagnostics are stored.
 */
export interface ContainerServiceVMDiagnostics {
  enabled: boolean;
  readonly storageUri?: string;
}

/**
 * @class
 * Initializes a new instance of the ContainerServiceDiagnosticsProfile class.
 * @constructor
 * Profile for diagnostics on the container service cluster.
 *
 * @member {object} vmDiagnostics Profile for diagnostics on the container
 * service VMs.
 * @member {boolean} [vmDiagnostics.enabled] Whether the VM diagnostic agent is
 * provisioned on the VM.
 * @member {string} [vmDiagnostics.storageUri] The URI of the storage account
 * where diagnostics are stored.
 */
export interface ContainerServiceDiagnosticsProfile {
  vmDiagnostics: ContainerServiceVMDiagnostics;
}

/**
 * @class
 * Initializes a new instance of the ContainerService class.
 * @constructor
 * Container service.
 *
 * @member {string} [provisioningState] The current deployment or provisioning
 * state, which only appears in the response.
 * @member {object} orchestratorProfile Profile for the container service
 * orchestrator.
 * @member {string} [orchestratorProfile.orchestratorType] The orchestrator to
 * use to manage container service cluster resources. Valid values are
 * Kubernetes, Swarm, DCOS, DockerCE and Custom. Possible values include:
 * 'Kubernetes', 'Swarm', 'DCOS', 'DockerCE', 'Custom'
 * @member {string} [orchestratorProfile.orchestratorVersion] The version of
 * the orchestrator to use. You can specify the major.minor.patch part of the
 * actual version.For example, you can specify version as "1.6.11".
 * @member {object} [customProfile] Properties to configure a custom container
 * service cluster.
 * @member {string} [customProfile.orchestrator] The name of the custom
 * orchestrator to use.
 * @member {object} [servicePrincipalProfile] Information about a service
 * principal identity for the cluster to use for manipulating Azure APIs. Exact
 * one of secret or keyVaultSecretRef need to be specified.
 * @member {string} [servicePrincipalProfile.clientId] The ID for the service
 * principal.
 * @member {string} [servicePrincipalProfile.secret] The secret password
 * associated with the service principal in plain text.
 * @member {object} [servicePrincipalProfile.keyVaultSecretRef] Reference to a
 * secret stored in Azure Key Vault.
 * @member {string} [servicePrincipalProfile.keyVaultSecretRef.vaultID] Key
 * vault identifier.
 * @member {string} [servicePrincipalProfile.keyVaultSecretRef.secretName] The
 * secret name.
 * @member {string} [servicePrincipalProfile.keyVaultSecretRef.version] The
 * secret version.
 * @member {object} masterProfile Profile for the container service master.
 * @member {number} [masterProfile.count] Number of masters (VMs) in the
 * container service cluster. Allowed values are 1, 3, and 5. The default value
 * is 1.
 * @member {string} [masterProfile.dnsPrefix] DNS prefix to be used to create
 * the FQDN for the master pool.
 * @member {string} [masterProfile.vmSize] Size of agent VMs. Possible values
 * include: 'Standard_A0', 'Standard_A1', 'Standard_A10', 'Standard_A11',
 * 'Standard_A1_v2', 'Standard_A2', 'Standard_A2_v2', 'Standard_A2m_v2',
 * 'Standard_A3', 'Standard_A4', 'Standard_A4_v2', 'Standard_A4m_v2',
 * 'Standard_A5', 'Standard_A6', 'Standard_A7', 'Standard_A8',
 * 'Standard_A8_v2', 'Standard_A8m_v2', 'Standard_A9', 'Standard_D1',
 * 'Standard_D11', 'Standard_D11_v2', 'Standard_D11_v2_Promo', 'Standard_D12',
 * 'Standard_D12_v2', 'Standard_D12_v2_Promo', 'Standard_D13',
 * 'Standard_D13_v2', 'Standard_D13_v2_Promo', 'Standard_D14',
 * 'Standard_D14_v2', 'Standard_D14_v2_Promo', 'Standard_D15_v2',
 * 'Standard_D16_v3', 'Standard_D16s_v3', 'Standard_D1_v2', 'Standard_D2',
 * 'Standard_D2_v2', 'Standard_D2_v2_Promo', 'Standard_D2_v3',
 * 'Standard_D2s_v3', 'Standard_D3', 'Standard_D3_v2', 'Standard_D3_v2_Promo',
 * 'Standard_D4', 'Standard_D4_v2', 'Standard_D4_v2_Promo', 'Standard_D4_v3',
 * 'Standard_D4s_v3', 'Standard_D5_v2', 'Standard_D5_v2_Promo',
 * 'Standard_D8_v3', 'Standard_D8s_v3', 'Standard_DS1', 'Standard_DS11',
 * 'Standard_DS11_v2', 'Standard_DS11_v2_Promo', 'Standard_DS12',
 * 'Standard_DS12_v2', 'Standard_DS12_v2_Promo', 'Standard_DS13',
 * 'Standard_DS13_v2', 'Standard_DS13_v2_Promo', 'Standard_DS14',
 * 'Standard_DS14_v2', 'Standard_DS14_v2_Promo', 'Standard_DS15_v2',
 * 'Standard_DS1_v2', 'Standard_DS2', 'Standard_DS2_v2',
 * 'Standard_DS2_v2_Promo', 'Standard_DS3', 'Standard_DS3_v2',
 * 'Standard_DS3_v2_Promo', 'Standard_DS4', 'Standard_DS4_v2',
 * 'Standard_DS4_v2_Promo', 'Standard_DS5_v2', 'Standard_DS5_v2_Promo',
 * 'Standard_E16_v3', 'Standard_E16s_v3', 'Standard_E2_v3', 'Standard_E2s_v3',
 * 'Standard_E32_v3', 'Standard_E32s_v3', 'Standard_E4_v3', 'Standard_E4s_v3',
 * 'Standard_E64_v3', 'Standard_E64s_v3', 'Standard_E8_v3', 'Standard_E8s_v3',
 * 'Standard_F1', 'Standard_F16', 'Standard_F16s', 'Standard_F1s',
 * 'Standard_F2', 'Standard_F2s', 'Standard_F4', 'Standard_F4s', 'Standard_F8',
 * 'Standard_F8s', 'Standard_G1', 'Standard_G2', 'Standard_G3', 'Standard_G4',
 * 'Standard_G5', 'Standard_GS1', 'Standard_GS2', 'Standard_GS3',
 * 'Standard_GS4', 'Standard_GS5', 'Standard_H16', 'Standard_H16m',
 * 'Standard_H16mr', 'Standard_H16r', 'Standard_H8', 'Standard_H8m',
 * 'Standard_L16s', 'Standard_L32s', 'Standard_L4s', 'Standard_L8s',
 * 'Standard_M128s', 'Standard_M64ms', 'Standard_NC12', 'Standard_NC24',
 * 'Standard_NC24r', 'Standard_NC6', 'Standard_NV12', 'Standard_NV24',
 * 'Standard_NV6'
 * @member {number} [masterProfile.osDiskSizeGB] OS Disk Size in GB to be used
 * to specify the disk size for every machine in this master/agent pool. If you
 * specify 0, it will apply the default osDisk size according to the vmSize
 * specified.
 * @member {string} [masterProfile.vnetSubnetID] VNet SubnetID specifies the
 * vnet's subnet identifier. If you specify either master VNet Subnet, or agent
 * VNet Subnet, you need to specify both. And they have to be in the same VNet.
 * @member {string} [masterProfile.firstConsecutiveStaticIP]
 * FirstConsecutiveStaticIP used to specify the first static ip of masters.
 * @member {string} [masterProfile.storageProfile] Storage profile specifies
 * what kind of storage used. Choose from StorageAccount and ManagedDisks.
 * Leave it empty, we will choose for you based on the orchestrator choice.
 * Possible values include: 'StorageAccount', 'ManagedDisks'
 * @member {string} [masterProfile.fqdn] FDQN for the master pool.
 * @member {array} [agentPoolProfiles] Properties of the agent pool.
 * @member {object} [windowsProfile] Profile for Windows VMs in the container
 * service cluster.
 * @member {string} [windowsProfile.adminUsername] The administrator username
 * to use for Windows VMs.
 * @member {string} [windowsProfile.adminPassword] The administrator password
 * to use for Windows VMs.
 * @member {object} linuxProfile Profile for Linux VMs in the container service
 * cluster.
 * @member {string} [linuxProfile.adminUsername] The administrator username to
 * use for Linux VMs.
 * @member {object} [linuxProfile.ssh] SSH configuration for Linux-based VMs
 * running on Azure.
 * @member {array} [linuxProfile.ssh.publicKeys] The list of SSH public keys
 * used to authenticate with Linux-based VMs. Only expect one key specified.
 * @member {object} [diagnosticsProfile] Profile for diagnostics in the
 * container service cluster.
 * @member {object} [diagnosticsProfile.vmDiagnostics] Profile for diagnostics
 * on the container service VMs.
 * @member {boolean} [diagnosticsProfile.vmDiagnostics.enabled] Whether the VM
 * diagnostic agent is provisioned on the VM.
 * @member {string} [diagnosticsProfile.vmDiagnostics.storageUri] The URI of
 * the storage account where diagnostics are stored.
 */
export interface ContainerService extends Resource {
  readonly provisioningState?: string;
  orchestratorProfile: ContainerServiceOrchestratorProfile;
  customProfile?: ContainerServiceCustomProfile;
  servicePrincipalProfile?: ContainerServiceServicePrincipalProfile;
  masterProfile: ContainerServiceMasterProfile;
  agentPoolProfiles?: ContainerServiceAgentPoolProfile[];
  windowsProfile?: ContainerServiceWindowsProfile;
  linuxProfile: ContainerServiceLinuxProfile;
  diagnosticsProfile?: ContainerServiceDiagnosticsProfile;
}

/**
 * @class
 * Initializes a new instance of the ManagedCluster class.
 * @constructor
 * Managed cluster.
 *
 * @member {string} [provisioningState] The current deployment or provisioning
 * state, which only appears in the response.
 * @member {string} [dnsPrefix] DNS prefix specified when creating the managed
 * cluster.
 * @member {string} [fqdn] FDQN for the master pool.
 * @member {string} [kubernetesVersion] Version of Kubernetes specified when
 * creating the managed cluster.
 * @member {array} [agentPoolProfiles] Properties of the agent pool.
 * @member {object} [linuxProfile] Profile for Linux VMs in the container
 * service cluster.
 * @member {string} [linuxProfile.adminUsername] The administrator username to
 * use for Linux VMs.
 * @member {object} [linuxProfile.ssh] SSH configuration for Linux-based VMs
 * running on Azure.
 * @member {array} [linuxProfile.ssh.publicKeys] The list of SSH public keys
 * used to authenticate with Linux-based VMs. Only expect one key specified.
 * @member {object} [servicePrincipalProfile] Information about a service
 * principal identity for the cluster to use for manipulating Azure APIs.
 * Either secret or keyVaultSecretRef must be specified.
 * @member {string} [servicePrincipalProfile.clientId] The ID for the service
 * principal.
 * @member {string} [servicePrincipalProfile.secret] The secret password
 * associated with the service principal in plain text.
 * @member {object} [servicePrincipalProfile.keyVaultSecretRef] Reference to a
 * secret stored in Azure Key Vault.
 * @member {string} [servicePrincipalProfile.keyVaultSecretRef.vaultID] Key
 * vault identifier.
 * @member {string} [servicePrincipalProfile.keyVaultSecretRef.secretName] The
 * secret name.
 * @member {string} [servicePrincipalProfile.keyVaultSecretRef.version] The
 * secret version.
 */
export interface ManagedCluster extends Resource {
  readonly provisioningState?: string;
  dnsPrefix?: string;
  readonly fqdn?: string;
  kubernetesVersion?: string;
  agentPoolProfiles?: ContainerServiceAgentPoolProfile[];
  linuxProfile?: ContainerServiceLinuxProfile;
  servicePrincipalProfile?: ContainerServiceServicePrincipalProfile;
}

/**
 * @class
 * Initializes a new instance of the OrchestratorProfile class.
 * @constructor
 * Contains information about orchestrator.
 *
 * @member {string} orchestratorType Orchestrator type.
 * @member {string} orchestratorVersion Orchestrator version (major, minor,
 * patch).
 */
export interface OrchestratorProfile {
  orchestratorType: string;
  orchestratorVersion: string;
}

/**
 * @class
 * Initializes a new instance of the ManagedClusterAccessProfile class.
 * @constructor
 * Managed cluster Access Profile.
 *
 * @member {string} [kubeConfig] Base64-encoded Kubernetes configuration file.
 */
export interface ManagedClusterAccessProfile extends Resource {
  kubeConfig?: string;
}

/**
 * @class
 * Initializes a new instance of the ManagedClusterPoolUpgradeProfile class.
 * @constructor
 * The list of available upgrade versions.
 *
 * @member {string} kubernetesVersion Kubernetes version (major, minor, patch).
 * @member {string} [name] Pool name.
 * @member {string} osType OsType to be used to specify os type. Choose from
 * Linux and Windows. Default to Linux. Possible values include: 'Linux',
 * 'Windows'. Default value: 'Linux' .
 * @member {array} [upgrades] List of orchestrator types and versions available
 * for upgrade.
 */
export interface ManagedClusterPoolUpgradeProfile {
  kubernetesVersion: string;
  name?: string;
  osType: string;
  upgrades?: string[];
}

/**
 * @class
 * Initializes a new instance of the ManagedClusterUpgradeProfile class.
 * @constructor
 * The list of available upgrades for compute pools.
 *
 * @member {string} [id] Id of upgrade profile.
 * @member {string} [name] Name of upgrade profile.
 * @member {string} [type] Type of upgrade profile.
 * @member {object} controlPlaneProfile The list of available upgrade versions
 * for the control plane.
 * @member {string} [controlPlaneProfile.kubernetesVersion] Kubernetes version
 * (major, minor, patch).
 * @member {string} [controlPlaneProfile.name] Pool name.
 * @member {string} [controlPlaneProfile.osType] OsType to be used to specify
 * os type. Choose from Linux and Windows. Default to Linux. Possible values
 * include: 'Linux', 'Windows'
 * @member {array} [controlPlaneProfile.upgrades] List of orchestrator types
 * and versions available for upgrade.
 * @member {array} agentPoolProfiles The list of available upgrade versions for
 * agent pools.
 */
export interface ManagedClusterUpgradeProfile {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  controlPlaneProfile: ManagedClusterPoolUpgradeProfile;
  agentPoolProfiles: ManagedClusterPoolUpgradeProfile[];
}

/**
 * @class
 * Initializes a new instance of the OrchestratorVersionProfile class.
 * @constructor
 * The profile of an orchestrator and its available versions.
 *
 * @member {string} orchestratorType Orchestrator type.
 * @member {string} orchestratorVersion Orchestrator version (major, minor,
 * patch).
 * @member {boolean} default Installed by default if version is not specified.
 * @member {array} upgrades The list of available upgrade versions.
 */
export interface OrchestratorVersionProfile {
  orchestratorType: string;
  orchestratorVersion: string;
  default: boolean;
  upgrades: OrchestratorProfile[];
}

/**
 * @class
 * Initializes a new instance of the OrchestratorVersionProfileListResult class.
 * @constructor
 * The list of versions for supported orchestrators.
 *
 * @member {string} [id] Id of the orchestrator version profile list result.
 * @member {string} [name] Name of the orchestrator version profile list
 * result.
 * @member {string} [type] Type of the orchestrator version profile list
 * result.
 * @member {array} orchestrators List of orchestrator version profiles.
 */
export interface OrchestratorVersionProfileListResult {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  orchestrators: OrchestratorVersionProfile[];
}


/**
 * @class
 * Initializes a new instance of the ContainerServiceListResult class.
 * @constructor
 * The response from the List Container Services operation.
 *
 * @member {string} [nextLink] The URL to get the next set of container service
 * results.
 */
export interface ContainerServiceListResult extends Array<ContainerService> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ManagedClusterListResult class.
 * @constructor
 * The response from the List Managed Clusters operation.
 *
 * @member {string} [nextLink] The URL to get the next set of managed cluster
 * results.
 */
export interface ManagedClusterListResult extends Array<ManagedCluster> {
  readonly nextLink?: string;
}
