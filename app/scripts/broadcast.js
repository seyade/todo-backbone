/**
 * Event Broadcasting
 */

define(['underscore', 'backbone'], function (_, Backbone) {
    'use strict';

    var Broadcast = _.extend({}, Backbone.Events);

    return Broadcast;
});
