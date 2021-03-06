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
 * This type describes a network resource.
 *
 * @extends models['TrackedResource']
 */
class NetworkResourceDescription extends models['TrackedResource'] {
  /**
   * Create a NetworkResourceDescription.
   * @member {object} properties Describes properties of a network resource.
   * @member {string} [properties.description] User readable description of the
   * network.
   * @member {string} [properties.status] Status of the network. Possible
   * values include: 'Unknown', 'Ready', 'Upgrading', 'Creating', 'Deleting',
   * 'Failed'
   * @member {string} [properties.statusDetails] Gives additional information
   * about the current status of the network.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of NetworkResourceDescription
   *
   * @returns {object} metadata of NetworkResourceDescription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NetworkResourceDescription',
      type: {
        name: 'Composite',
        className: 'NetworkResourceDescription',
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
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          properties: {
            required: true,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'kind',
                clientName: 'kind'
              },
              uberParent: 'ProvisionedResourceProperties',
              className: 'NetworkResourceProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = NetworkResourceDescription;
