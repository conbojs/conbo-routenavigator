import { assign, ConboEvent, Router } from 'conbo';
import { ViewNavigator } from 'conbo-viewnavigator';

/**
 * RouteNavigator for ConboJS
 * @author	Mesmotronic Limited <https://www.mesmotronic.com/>
 * @fires	conbo.ConboEvent#FAULT
 */
export default class RouteNavigator extends ViewNavigator
{
	/**
	 * Reference to the Router instance currently in use
	 */
	public router:Router;

	/**
	 * An object containing path:viewClassName pairs, where the View class must be
	 * stored in the current application's Namespace
	 *
	 * @example		{'login':'LoginView', user/:name':'UserView'}
	 */
	public routes:any;

	/**
	 * @private
	 */
	protected preinitialize(options:any):void
	{
		super.preinitialize(options);

		let router:Router = options.router || new Router
		({
			context: this.context,
			routes: options.routes || this.routes
		});

		router
			.addEventListener(ConboEvent.FAULT, this.dispatchEvent, {scope:this})
			.addEventListener(ConboEvent.ROUTE, this.__routeHandler, {scope:this})
			;

		this.router = router;
	}

	/**
	 * @private
	 */
	private __routeHandler(event:ConboEvent):void
	{
		let viewClass = event.data || this.context.namespace[event.name];
		let options = assign({}, event.params, {context:this.context});

		this.replaceView(viewClass, options);
	}
}
