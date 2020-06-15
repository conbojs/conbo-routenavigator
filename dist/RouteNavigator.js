"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var conbo_1 = require("conbo");
var conbo_viewnavigator_1 = require("conbo-viewnavigator");
/**
 * RouteNavigator for ConboJS
 * @author	Mesmotronic Limited <https://www.mesmotronic.com/>
 * @fires	conbo.ConboEvent#FAULT
 */
var RouteNavigator = /** @class */ (function (_super) {
    __extends(RouteNavigator, _super);
    function RouteNavigator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @private
     */
    RouteNavigator.prototype.preinitialize = function (options) {
        _super.prototype.preinitialize.call(this, options);
        var router = options.router || new conbo_1.Router({
            context: this.context,
            routes: options.routes || this.routes
        });
        router
            .addEventListener(conbo_1.ConboEvent.FAULT, this.dispatchEvent, { scope: this })
            .addEventListener(conbo_1.ConboEvent.ROUTE, this.__routeHandler, { scope: this });
        this.router = router;
    };
    /**
     * @private
     */
    RouteNavigator.prototype.__routeHandler = function (event) {
        var viewClass = event.data || this.context.namespace[event.name];
        var options = conbo_1.assign({}, event.params, { context: this.context });
        this.replaceView(viewClass, options);
    };
    return RouteNavigator;
}(conbo_viewnavigator_1.ViewNavigator));
exports.default = RouteNavigator;
