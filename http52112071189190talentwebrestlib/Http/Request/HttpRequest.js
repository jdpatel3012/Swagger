?/**
 * Http52112071189190TalentWebRestLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of HttpRequest.
 *
 * @constructor
 */
angular.module('Http52112071189190TalentWebRestLib')
    .factory('HttpRequest', [HttpRequestService]);

    function HttpRequestService() {
        return function HttpRequest() {
            this.queryUrl = null;
            this.method = null;
            this.headers = null;
            this.username = null;
            this.password = null;
            this.body = null;
            this.formData = null;
            this.form = null;
        };
    }

}(angular));
