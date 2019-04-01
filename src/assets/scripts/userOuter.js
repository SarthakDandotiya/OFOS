// Init page module object.
const userOrderCreate = {};

document
	.querySelector(`#${rowId} .deleteItem`)
	.addEventListener('click', event => {
		userCartRead.shoppingCartUpdate(cartItem.id, 0).then(shoppingCart => {
			// Preload data for the current page.
			userCartRead.preloadData().then(() => {});
			app.drawShoppingCartCounter(shoppingCart);
		});
	});
// Call the init processes after the window loads
window.addEventListener('load', userOrderCreate.init);
