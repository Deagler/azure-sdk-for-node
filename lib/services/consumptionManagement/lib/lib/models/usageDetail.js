/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * An usage detail resource.
 *
 * @extends models['Resource']
 */
class UsageDetail extends models['Resource'] {
  /**
   * Create a UsageDetail.
   * @member {string} [billingPeriodId] The id of the billing period resource
   * that the usage belongs to.
   * @member {string} [invoiceId] The id of the invoice resource that the usage
   * belongs to.
   * @member {date} [usageStart] The start of the date time range covered by
   * the usage detail.
   * @member {date} [usageEnd] The end of the date time range covered by the
   * usage detail.
   * @member {string} [instanceName] The name of the resource instance that the
   * usage is about.
   * @member {string} [instanceId] The uri of the resource instance that the
   * usage is about.
   * @member {string} [instanceLocation] The location of the resource instance
   * that the usage is about.
   * @member {string} [currency] The ISO currency in which the meter is
   * charged, for example, USD.
   * @member {number} [usageQuantity] The quantity of usage.
   * @member {number} [billableQuantity] The billable usage quantity.
   * @member {number} [pretaxCost] The amount of cost before tax.
   * @member {boolean} [isEstimated] The estimated usage is subject to change.
   * @member {uuid} [meterId] The meter id (GUID).
   * @member {object} [meterDetails] The details about the meter. By default
   * this is not populated, unless it's specified in $expand.
   * @member {string} [meterDetails.meterName] The name of the meter, within
   * the given meter category
   * @member {string} [meterDetails.meterCategory] The category of the meter,
   * for example, 'Cloud services', 'Networking', etc..
   * @member {string} [meterDetails.meterSubCategory] The subcategory of the
   * meter, for example, 'A6 Cloud services', 'ExpressRoute (IXP)', etc..
   * @member {string} [meterDetails.unit] The unit in which the meter
   * consumption is charged, for example, 'Hours', 'GB', etc.
   * @member {string} [meterDetails.meterLocation] The location in which the
   * Azure service is available.
   * @member {number} [meterDetails.totalIncludedQuantity] The total included
   * quantity associated with the offer.
   * @member {number} [meterDetails.pretaxStandardRate] The pretax listing
   * price.
   * @member {uuid} [subscriptionGuid] Subscription guid.
   * @member {string} [subscriptionName] Subscription name.
   * @member {string} [accountName] Account name.
   * @member {string} [departmentName] Department name.
   * @member {string} [product] Product name.
   * @member {string} [consumedService] Consumed service name.
   * @member {string} [costCenter] The cost center of this department if it is
   * a department and a costcenter exists
   * @member {string} [additionalProperties] Additional details of this usage
   * item. By default this is not populated, unless it's specified in $expand.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of UsageDetail
   *
   * @returns {object} metadata of UsageDetail
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UsageDetail',
      type: {
        name: 'Composite',
        className: 'UsageDetail',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            readOnly: true,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          billingPeriodId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.billingPeriodId',
            type: {
              name: 'String'
            }
          },
          invoiceId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.invoiceId',
            type: {
              name: 'String'
            }
          },
          usageStart: {
            required: false,
            readOnly: true,
            serializedName: 'properties.usageStart',
            type: {
              name: 'DateTime'
            }
          },
          usageEnd: {
            required: false,
            readOnly: true,
            serializedName: 'properties.usageEnd',
            type: {
              name: 'DateTime'
            }
          },
          instanceName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.instanceName',
            type: {
              name: 'String'
            }
          },
          instanceId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.instanceId',
            type: {
              name: 'String'
            }
          },
          instanceLocation: {
            required: false,
            readOnly: true,
            serializedName: 'properties.instanceLocation',
            type: {
              name: 'String'
            }
          },
          currency: {
            required: false,
            readOnly: true,
            serializedName: 'properties.currency',
            type: {
              name: 'String'
            }
          },
          usageQuantity: {
            required: false,
            readOnly: true,
            serializedName: 'properties.usageQuantity',
            type: {
              name: 'Number'
            }
          },
          billableQuantity: {
            required: false,
            readOnly: true,
            serializedName: 'properties.billableQuantity',
            type: {
              name: 'Number'
            }
          },
          pretaxCost: {
            required: false,
            readOnly: true,
            serializedName: 'properties.pretaxCost',
            type: {
              name: 'Number'
            }
          },
          isEstimated: {
            required: false,
            readOnly: true,
            serializedName: 'properties.isEstimated',
            type: {
              name: 'Boolean'
            }
          },
          meterId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.meterId',
            type: {
              name: 'String'
            }
          },
          meterDetails: {
            required: false,
            readOnly: true,
            serializedName: 'properties.meterDetails',
            type: {
              name: 'Composite',
              className: 'MeterDetails'
            }
          },
          subscriptionGuid: {
            required: false,
            readOnly: true,
            serializedName: 'properties.subscriptionGuid',
            type: {
              name: 'String'
            }
          },
          subscriptionName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.subscriptionName',
            type: {
              name: 'String'
            }
          },
          accountName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.accountName',
            type: {
              name: 'String'
            }
          },
          departmentName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.departmentName',
            type: {
              name: 'String'
            }
          },
          product: {
            required: false,
            readOnly: true,
            serializedName: 'properties.product',
            type: {
              name: 'String'
            }
          },
          consumedService: {
            required: false,
            readOnly: true,
            serializedName: 'properties.consumedService',
            type: {
              name: 'String'
            }
          },
          costCenter: {
            required: false,
            readOnly: true,
            serializedName: 'properties.costCenter',
            type: {
              name: 'String'
            }
          },
          additionalProperties: {
            required: false,
            readOnly: true,
            serializedName: 'properties.additionalProperties',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UsageDetail;