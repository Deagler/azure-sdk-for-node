/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback, HttpOperationResponse } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * Operations
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the HanaManagementClient.
 */
export interface Operations {


    /**
     * Gets a list of SAP HANA management operations.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<OperationList>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.OperationList>>;

    /**
     * Gets a list of SAP HANA management operations.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {OperationList} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {OperationList} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link OperationList} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.OperationList>;
    list(callback: ServiceCallback<models.OperationList>): void;
    list(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.OperationList>): void;
}

/**
 * @class
 * HanaInstances
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the HanaManagementClient.
 */
export interface HanaInstances {


    /**
     * @summary Gets a list of SAP HANA instances in the specified subscription.
     *
     * Gets a list of SAP HANA instances in the specified subscription. The
     * operations returns various properties of each SAP HANA on Azure instance.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<HanaInstancesListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.HanaInstancesListResult>>;

    /**
     * @summary Gets a list of SAP HANA instances in the specified subscription.
     *
     * Gets a list of SAP HANA instances in the specified subscription. The
     * operations returns various properties of each SAP HANA on Azure instance.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {HanaInstancesListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {HanaInstancesListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link HanaInstancesListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.HanaInstancesListResult>;
    list(callback: ServiceCallback<models.HanaInstancesListResult>): void;
    list(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.HanaInstancesListResult>): void;


    /**
     * @summary Gets a list of SAP HANA instances in the specified subscription and
     * the resource group.
     *
     * Gets a list of SAP HANA instances in the specified subscription and the
     * resource group. The operations returns various properties of each SAP HANA
     * on Azure instance.
     *
     * @param {string} resourceGroupName Name of the resource group.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<HanaInstancesListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listByResourceGroupWithHttpOperationResponse(resourceGroupName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.HanaInstancesListResult>>;

    /**
     * @summary Gets a list of SAP HANA instances in the specified subscription and
     * the resource group.
     *
     * Gets a list of SAP HANA instances in the specified subscription and the
     * resource group. The operations returns various properties of each SAP HANA
     * on Azure instance.
     *
     * @param {string} resourceGroupName Name of the resource group.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {HanaInstancesListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {HanaInstancesListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link HanaInstancesListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroup(resourceGroupName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.HanaInstancesListResult>;
    listByResourceGroup(resourceGroupName: string, callback: ServiceCallback<models.HanaInstancesListResult>): void;
    listByResourceGroup(resourceGroupName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.HanaInstancesListResult>): void;


    /**
     * @summary Gets properties of a SAP HANA instance.
     *
     * Gets properties of a SAP HANA instance for the specified subscription,
     * resource group, and instance name.
     *
     * @param {string} resourceGroupName Name of the resource group.
     *
     * @param {string} hanaInstanceName Name of the SAP HANA on Azure instance.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<HanaInstance>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, hanaInstanceName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.HanaInstance>>;

    /**
     * @summary Gets properties of a SAP HANA instance.
     *
     * Gets properties of a SAP HANA instance for the specified subscription,
     * resource group, and instance name.
     *
     * @param {string} resourceGroupName Name of the resource group.
     *
     * @param {string} hanaInstanceName Name of the SAP HANA on Azure instance.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {HanaInstance} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {HanaInstance} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link HanaInstance} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, hanaInstanceName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.HanaInstance>;
    get(resourceGroupName: string, hanaInstanceName: string, callback: ServiceCallback<models.HanaInstance>): void;
    get(resourceGroupName: string, hanaInstanceName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.HanaInstance>): void;


    /**
     * The operation to restart a SAP HANA instance.
     *
     * @param {string} resourceGroupName Name of the resource group.
     *
     * @param {string} hanaInstanceName Name of the SAP HANA on Azure instance.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    restartWithHttpOperationResponse(resourceGroupName: string, hanaInstanceName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * The operation to restart a SAP HANA instance.
     *
     * @param {string} resourceGroupName Name of the resource group.
     *
     * @param {string} hanaInstanceName Name of the SAP HANA on Azure instance.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    restart(resourceGroupName: string, hanaInstanceName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    restart(resourceGroupName: string, hanaInstanceName: string, callback: ServiceCallback<void>): void;
    restart(resourceGroupName: string, hanaInstanceName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * @summary Gets a list of SAP HANA instances in the specified subscription.
     *
     * Gets a list of SAP HANA instances in the specified subscription. The
     * operations returns various properties of each SAP HANA on Azure instance.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<HanaInstancesListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.HanaInstancesListResult>>;

    /**
     * @summary Gets a list of SAP HANA instances in the specified subscription.
     *
     * Gets a list of SAP HANA instances in the specified subscription. The
     * operations returns various properties of each SAP HANA on Azure instance.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {HanaInstancesListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {HanaInstancesListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link HanaInstancesListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.HanaInstancesListResult>;
    listNext(nextPageLink: string, callback: ServiceCallback<models.HanaInstancesListResult>): void;
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.HanaInstancesListResult>): void;


    /**
     * @summary Gets a list of SAP HANA instances in the specified subscription and
     * the resource group.
     *
     * Gets a list of SAP HANA instances in the specified subscription and the
     * resource group. The operations returns various properties of each SAP HANA
     * on Azure instance.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<HanaInstancesListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listByResourceGroupNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.HanaInstancesListResult>>;

    /**
     * @summary Gets a list of SAP HANA instances in the specified subscription and
     * the resource group.
     *
     * Gets a list of SAP HANA instances in the specified subscription and the
     * resource group. The operations returns various properties of each SAP HANA
     * on Azure instance.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {HanaInstancesListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {HanaInstancesListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link HanaInstancesListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroupNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.HanaInstancesListResult>;
    listByResourceGroupNext(nextPageLink: string, callback: ServiceCallback<models.HanaInstancesListResult>): void;
    listByResourceGroupNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.HanaInstancesListResult>): void;
}
