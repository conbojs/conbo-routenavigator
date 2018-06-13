import { Router } from 'conbo';
import { ViewNavigator } from 'conbo-viewnavigator';
/**
 * RouteNavigator for ConboJS
 * @author	Mesmotronic Limited <https://www.mesmotronic.com/>
 * @fires	conbo.ConboEvent#FAULT
 */
export default class RouteNavigator extends ViewNavigator {
    /**
     * Reference to the Router instance currently in use
     */
    router: Router;
    /**
     * An object containing path:viewClassName pairs, where the View class must be
     * stored in the current application's Namespace
     *
     * @example		{'login':'LoginView', user/:name':'UserView'}
     */
    routes: any;
    /**
     * @private
     */
    protected preinitialize(options: any): void;
    /**
     * @private
     */
    private __routeHandler;
}
