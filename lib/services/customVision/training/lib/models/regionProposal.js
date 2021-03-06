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
 * Class representing a RegionProposal.
 */
class RegionProposal {
  /**
   * Create a RegionProposal.
   * @property {number} [confidence]
   * @property {object} [boundingBox]
   * @property {number} [boundingBox.left]
   * @property {number} [boundingBox.top]
   * @property {number} [boundingBox.width]
   * @property {number} [boundingBox.height]
   */
  constructor() {
  }

  /**
   * Defines the metadata of RegionProposal
   *
   * @returns {object} metadata of RegionProposal
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RegionProposal',
      type: {
        name: 'Composite',
        className: 'RegionProposal',
        modelProperties: {
          confidence: {
            required: false,
            nullable: false,
            readOnly: true,
            serializedName: 'confidence',
            type: {
              name: 'Number'
            }
          },
          boundingBox: {
            required: false,
            readOnly: true,
            serializedName: 'boundingBox',
            type: {
              name: 'Composite',
              className: 'BoundingBox'
            }
          }
        }
      }
    };
  }
}

module.exports = RegionProposal;
