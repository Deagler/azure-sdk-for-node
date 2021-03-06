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
 * Information about the application name.
 *
 */
class ApplicationNameInfo {
  /**
   * Create a ApplicationNameInfo.
   * @property {string} [id] The identity of the application. This is an
   * encoded representation of the application name. This is used in the REST
   * APIs to identify the application resource.
   * Starting in version 6.0, hierarchical names are delimited with the "\~"
   * character. For example, if the application name is "fabric:/myapp/app1",
   * the application identity would be "myapp\~app1" in 6.0+ and "myapp/app1"
   * in previous versions.
   * @property {string} [name] The name of the application, including the
   * 'fabric:' URI scheme.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationNameInfo
   *
   * @returns {object} metadata of ApplicationNameInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationNameInfo',
      type: {
        name: 'Composite',
        className: 'ApplicationNameInfo',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'Id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'Name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationNameInfo;
