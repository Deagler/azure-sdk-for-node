/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClient, ServiceClientOptions, ServiceClientCredentials } from 'ms-rest';
import * as models from "./models";
import * as operations from "./operations";

/**
 * EntitySearchClientOptions for EntitySearchClient.
 */
declare interface EntitySearchClientOptions extends ServiceClientOptions {
  /**
   * @property {string} [endpoint] - Supported Cognitive Services endpoints (protocol and hostname, for example: "https://westus.api.cognitive.microsoft.com", "https://api.cognitive.microsoft.com").
   */
  endpoint?: string;
}

export default class EntitySearchClient extends ServiceClient {
  /**
   * @class
   * Initializes a new instance of the EntitySearchClient class.
   * @constructor
   *
   * @param {credentials} credentials - Subscription credentials which uniquely identify client subscription.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.endpoint] - Supported Cognitive Services endpoints (protocol and hostname, for example: "https://westus.api.cognitive.microsoft.com", "https://api.cognitive.microsoft.com").
   *
   */
  constructor(credentials: ServiceClientCredentials, options?: EntitySearchClientOptions);

  credentials: ServiceClientCredentials;

  endpoint: string;

  // Operation groups
  entitiesOperations: operations.EntitiesOperations;
}

export { EntitySearchClient, models as EntitySearchModels };
