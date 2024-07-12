// Click the 'play' button in the top right to run this code:
// 1. Go to the page where you want to start
navigate('https://www.tiobe.com/tiobe-index/');
// 2. Add anything else you need to do on the page.
// For example: (see the help box for all command docs).
// click('.some-button')
// type('.some-input', 'shoes')
// wait('.some-lazy-loaded-element')
// 3. Once the browser page has the data you want, call parse() to get the data
// and call collect() to add a record to your final dataset


let data = parse();
collect({
	data
});
