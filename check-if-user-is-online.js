// https://dev.to/dailydevtips1/detecting-if-the-user-is-online-with-javascript-58ne

// it can be beneficial to notify a user that they are no longer online so that
// they can address their network connection before continuing to use the site.

// the navigator.onLine API can be leveraged to check a connection status by
// returning a boolean. BEWARE as browsers implemented this differently.

// window.addEventListener('load', () => {
// 	const status = navigator.onLine
// 	console.log(status);
// })

// the previous solution only works on page load. Alternatively, you can
// subscribe to online and offline events

window.addEventListener('online', (event) => {
	console.log('online');
})

window.addEventListener('offline', (event) => {
	console.log('offline');
})
