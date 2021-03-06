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

/**
 * An arm role receiver.
 *
 */
class ArmRoleReceiver {
  /**
   * Create a ArmRoleReceiver.
   * @member {string} name The name of the arm role receiver. Names must be
   * unique across all receivers within an action group.
   * @member {string} roleId The arm role id.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ArmRoleReceiver
   *
   * @returns {object} metadata of ArmRoleReceiver
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ArmRoleReceiver',
      type: {
        name: 'Composite',
        className: 'ArmRoleReceiver',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          roleId: {
            required: true,
            serializedName: 'roleId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ArmRoleReceiver;
