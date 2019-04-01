// Init page module object.
const userOrderCreate = {};

// Data preloader.
userOrderCreate.preloadData = async () => {
	// Load user basket.
	await shoppingCart.getCart(httpClient);

	// Get shopping cart total amount element.
	const orderTotalContainer = document.getElementById('orderTotal');
	orderTotalContainer.innerHTML = `₹${shoppingCart.cart.total}`;
};

// Callback that is being called once userOrderCreate is successfully submit.
userOrderCreate.formSuccessProcessor = ({ detail: {} }) => {
	// If forms saved successfully and they have success messages, show them.
	document.querySelector('#userOrderCreate .formSuccess').style.display =
		'block';
	// Redirect user to order success page.
	window.location = '/user/order/success';
};

// Init user current page.
userOrderCreate.init = () => {
	// Preload data for the current page.
	userOrderCreate.preloadData().then(() => {});

	// Subscribe to form events.
	document.addEventListener(
		'userOrderCreateFormSuccess',
		userOrderCreate.formSuccessProcessor
	);
};
// document
// 	.querySelector(`#${rowId} .deleteItem`)
// 	.addEventListener('click', event => {
// 		userCartRead.shoppingCartUpdate(cartItem.id, 0).then(shoppingCart => {
// 			// Preload data for the current page.
// 			userCartRead.preloadData().then(() => {});
// 			app.drawShoppingCartCounter(shoppingCart);
// 		});
// 	});
// Call the init processes after the window loads
window.addEventListener('load', userOrderCreate.init);
