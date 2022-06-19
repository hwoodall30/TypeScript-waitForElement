async function waitForElement(selector: any, timeout: number = 5000, interval: number = 0): Promise<HTMLElement | Boolean> {
	// Request Animation Frame Async
	function rafAsync(): Promise<any> {
		return new Promise(resolve => requestAnimationFrame(resolve));
	}
	// Sleep Async Function
	const sleep = () => new Promise(r => setTimeout(r, interval));
	//Get start time for timeout
	const start = Date.now();
	// Loop until element is found or timeout is reached
	while (document.querySelector(selector) === null) {
		if (Date.now() - start >= timeout) {
			console.error(`Element Check For Selector ${selector} Timed Out`);
			return false;
		}
		if (interval) await sleep();
		await rafAsync();
	}
	return document.querySelector(selector)!;
}
