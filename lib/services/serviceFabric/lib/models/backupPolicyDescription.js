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
 * Describes a backup policy for configuring periodic backup.
 *
 */
class BackupPolicyDescription {
  /**
   * Create a BackupPolicyDescription.
   * @member {string} name The unique name identifying this backup policy.
   * @member {boolean} autoRestoreOnDataLoss Specifies whether to trigger
   * restore automatically using the latest available backup in case the
   * partition experiences a data loss event.
   * @member {number} maxIncrementalBackups Defines the maximum number of
   * incremental backups to be taken between two full backups. This is just the
   * upper limit. A full backup may be taken before specified number of
   * incremental backups are completed in one of the following conditions
   * - The replica has never taken a full backup since it has become primary,
   * - Some of the log records since the last backup has been truncated, or
   * - Replica passed the MaxAccumulatedBackupLogSizeInMB limit.
   * @member {object} schedule Describes the backup schedule parameters.
   * @member {string} [schedule.scheduleKind] Polymorphic Discriminator
   * @member {object} storage Describes the details of backup storage where to
   * store the periodic backups.
   * @member {string} [storage.friendlyName] Friendly name for this backup
   * storage.
   * @member {string} [storage.storageKind] Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of BackupPolicyDescription
   *
   * @returns {object} metadata of BackupPolicyDescription
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BackupPolicyDescription',
      type: {
        name: 'Composite',
        className: 'BackupPolicyDescription',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'Name',
            type: {
              name: 'String'
            }
          },
          autoRestoreOnDataLoss: {
            required: true,
            serializedName: 'AutoRestoreOnDataLoss',
            type: {
              name: 'Boolean'
            }
          },
          maxIncrementalBackups: {
            required: true,
            serializedName: 'MaxIncrementalBackups',
            constraints: {
              InclusiveMaximum: 255,
              InclusiveMinimum: 0
            },
            type: {
              name: 'Number'
            }
          },
          schedule: {
            required: true,
            serializedName: 'Schedule',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'ScheduleKind',
                clientName: 'scheduleKind'
              },
              uberParent: 'BackupScheduleDescription',
              className: 'BackupScheduleDescription'
            }
          },
          storage: {
            required: true,
            serializedName: 'Storage',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'StorageKind',
                clientName: 'storageKind'
              },
              uberParent: 'BackupStorageDescription',
              className: 'BackupStorageDescription'
            }
          }
        }
      }
    };
  }
}

module.exports = BackupPolicyDescription;