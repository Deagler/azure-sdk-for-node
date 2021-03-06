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
 * DataBox Disk Copy Progress
 *
 */
class DataBoxDiskCopyProgress {
  /**
   * Create a DataBoxDiskCopyProgress.
   * @member {string} [serialNumber] The serial number of the disk
   * @member {number} [bytesCopied] Bytes copied during the copy of disk.
   * @member {number} [percentComplete] Indicates the percentage completed for
   * the copy of the disk.
   * @member {string} [status] The Status of the copy. Possible values include:
   * 'NotStarted', 'InProgress', 'Completed', 'CompletedWithErrors', 'Failed',
   * 'NotReturned'
   */
  constructor() {
  }

  /**
   * Defines the metadata of DataBoxDiskCopyProgress
   *
   * @returns {object} metadata of DataBoxDiskCopyProgress
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DataBoxDiskCopyProgress',
      type: {
        name: 'Composite',
        className: 'DataBoxDiskCopyProgress',
        modelProperties: {
          serialNumber: {
            required: false,
            readOnly: true,
            serializedName: 'serialNumber',
            type: {
              name: 'String'
            }
          },
          bytesCopied: {
            required: false,
            readOnly: true,
            serializedName: 'bytesCopied',
            type: {
              name: 'Number'
            }
          },
          percentComplete: {
            required: false,
            readOnly: true,
            serializedName: 'percentComplete',
            type: {
              name: 'Number'
            }
          },
          status: {
            required: false,
            readOnly: true,
            serializedName: 'status',
            type: {
              name: 'Enum',
              allowedValues: [ 'NotStarted', 'InProgress', 'Completed', 'CompletedWithErrors', 'Failed', 'NotReturned' ]
            }
          }
        }
      }
    };
  }
}

module.exports = DataBoxDiskCopyProgress;
