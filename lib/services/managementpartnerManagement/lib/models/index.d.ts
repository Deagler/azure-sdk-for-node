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
 * Initializes a new instance of the PartnerResponse class.
 * @constructor
 * this is the management partner operations response
 *
 * @member {number} [etag] Type of the partner
 * @member {string} [id] Identifier of the partner
 * @member {string} [name] Name of the partner
 * @member {string} [partnerId] This is the partner id
 * @member {string} [partnerName] This is the partner name
 * @member {string} [tenantId] This is the tenant id.
 * @member {string} [objectId] This is the object id.
 * @member {string} [version] This is the version.
 * @member {date} [updatedTime] This is the DateTime when the partner was
 * updated.
 * @member {date} [createdTime] This is the DateTime when the partner was
 * created.
 * @member {string} [state] This is the partner state. Possible values include:
 * 'Active', 'Deleted'
 * @member {string} [type] Type of resource.
 * "Microsoft.ManagementPartner/partners"
 */
export interface PartnerResponse extends BaseResource {
  etag?: number;
  readonly id?: string;
  readonly name?: string;
  partnerId?: string;
  partnerName?: string;
  tenantId?: string;
  objectId?: string;
  version?: string;
  updatedTime?: Date;
  createdTime?: Date;
  state?: string;
  readonly type?: string;
}

/**
 * @class
 * Initializes a new instance of the ExtendedErrorInfo class.
 * @constructor
 * this is the extended error info
 *
 * @member {string} [code] this is the error response code. Possible values
 * include: 'NotFound', 'Conflict', 'BadRequest'
 * @member {string} [message] this is the extended error info message
 */
export interface ExtendedErrorInfo {
  code?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorModel class.
 * @constructor
 * this is the management partner operations error
 *
 * @member {object} [error] this is the ExtendedErrorInfo property
 * @member {string} [error.code] this is the error response code. Possible
 * values include: 'NotFound', 'Conflict', 'BadRequest'
 * @member {string} [error.message] this is the extended error info message
 */
export interface ErrorModel {
  error?: ExtendedErrorInfo;
}

/**
 * @class
 * Initializes a new instance of the OperationDisplay class.
 * @constructor
 * this is the management partner operation
 *
 * @member {string} [provider] the is management partner provider
 * @member {string} [resource] the is management partner resource
 * @member {string} [operation] the is management partner operation
 * @member {string} [description] the is management partner operation
 * description
 */
export interface OperationDisplay {
  provider?: string;
  resource?: string;
  operation?: string;
  description?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationResponse class.
 * @constructor
 * this is the management partner operations response
 *
 * @member {string} [name] this is the operation response name
 * @member {object} [display] this is the operation display
 * @member {string} [display.provider] the is management partner provider
 * @member {string} [display.resource] the is management partner resource
 * @member {string} [display.operation] the is management partner operation
 * @member {string} [display.description] the is management partner operation
 * description
 * @member {string} [origin] the is operation response origin information
 */
export interface OperationResponse {
  name?: string;
  display?: OperationDisplay;
  origin?: string;
}


/**
 * @class
 * Initializes a new instance of the OperationList class.
 * @constructor
 * this is the management partner operations list
 *
 * @member {string} [nextLink] Url to get the next page of items.
 */
export interface OperationList extends Array<OperationResponse> {
  nextLink?: string;
}
