/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure";
import * as moment from "moment";

export {

  BaseResource,
  CloudError
};

/**
 * Container host mapping object specifying the Container host resource ID and its associated
 * Controller resource.
 */
export interface ContainerHostMapping {
  /**
   * ARM ID of the Container Host resource
   */
  containerHostResourceId?: string;
  /**
   * ARM ID of the mapped Controller resource
   */
  readonly mappedControllerResourceId?: string;
}

/**
 * An Azure resource.
 */
export interface Resource extends BaseResource {
  /**
   * Fully qualified resource Id for the resource.
   */
  readonly id?: string;
  /**
   * The name of the resource.
   */
  readonly name?: string;
  /**
   * The type of the resource.
   */
  readonly type?: string;
}

/**
 * The resource model definition for a ARM tracked top level resource.
 */
export interface TrackedResource extends Resource {
  /**
   * Tags for the Azure resource.
   */
  tags?: { [propertyName: string]: string };
  /**
   * Region where the Azure resource is located.
   */
  location?: string;
}

export interface ResourceProviderOperationDisplay {
  /**
   * Name of the resource provider.
  */
  provider?: string;
  /**
   * Name of the resource type.
  */
  resource?: string;
  /**
   * Name of the resource provider operation.
  */
  operation?: string;
  /**
   * Description of the resource provider operation.
  */
  description?: string;
}

export interface ResourceProviderOperationDefinition {
  /**
   * Resource provider operation name.
  */
  name?: string;
  display?: ResourceProviderOperationDisplay;
}

/**
 * Model representing SKU for Azure Dev Spaces Controller.
*/
export interface Sku {
  /**
   * The tier of the SKU for Azure Dev Spaces Controller. Possible values include: 'Standard'
  */
  tier?: string;
}

export interface Controller extends TrackedResource {
  /**
   * Provisioning state of the Azure Dev Spaces Controller. Possible values include: 'Succeeded',
   * 'Failed', 'Canceled', 'Updating', 'Creating', 'Deleting', 'Deleted'
  */
  readonly provisioningState?: string;
  /**
   * DNS suffix for public endpoints running in the Azure Dev Spaces Controller.
  */
  readonly hostSuffix?: string;
  /**
   * DNS name for accessing DataPlane services
  */
  readonly dataPlaneFqdn?: string;
  /**
   * Resource ID of the target container host
  */
  targetContainerHostResourceId: string;
  /**
   * Credentials of the target container host (base64).
  */
  targetContainerHostCredentialsBase64: string;
  sku: Sku;
}

/**
 * Parameters for updating an Azure Dev Spaces Controller.
*/
export interface ControllerUpdateParameters {
  /**
   * Tags for the Azure Dev Spaces Controller.
  */
  tags?: { [propertyName: string]: string };
}

/**
 * Base class for types that supply values used to connect to container orchestrators
*/
export interface OrchestratorSpecificConnectionDetails {
  /**
   * Polymorphic Discriminator
  */
  instanceType: string;
}

export interface ControllerConnectionDetails {
  /**
   * Authentication key for communicating with services.
  */
  readonly authKey?: string;
  orchestratorSpecificConnectionDetails?: OrchestratorSpecificConnectionDetails;
}

export interface ControllerConnectionDetailsList {
  /**
   * List of Azure Dev Spaces Controller connection details.
  */
  connectionDetailsList?: ControllerConnectionDetails[];
}

/**
 * Contains information used to connect to a Kubernetes cluster
*/
export interface KubernetesConnectionDetails extends OrchestratorSpecificConnectionDetails {
  /**
   * Gets the kubeconfig for the cluster.
  */
  kubeConfig?: string;
}

export interface ErrorDetails {
  /**
   * Status code for the error.
  */
  readonly code?: string;
  /**
   * Error message describing the error in detail.
  */
  readonly message?: string;
  /**
   * The target of the particular error.
  */
  readonly target?: string;
}

/**
 * Error response indicates that the service is not able to process the incoming request. The
 * reason is provided in the error message.
*/
export interface ErrorResponse {
  /**
   * The details of the error.
  */
  error?: ErrorDetails;
}

export interface ResourceProviderOperationList extends Array<ResourceProviderOperationDefinition> {
  /**
   * The URI that can be used to request the next page for list of Azure operations.
  */
  readonly nextLink?: string;
}

export interface ControllerList extends Array<Controller> {
  /**
   * The URI that can be used to request the next page for list of Azure Dev Spaces Controllers.
  */
  readonly nextLink?: string;
}
