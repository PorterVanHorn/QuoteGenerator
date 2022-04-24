/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//array of quote objects which each contain the quote, credit, and year respectively.

let quotes = [
	{quote: "Most people would succeed in small things if they were not so troubled with great ambitions.", source: "Henry Wadsworth Longfellow", citation: "Driftwood; Table Talk", year: 1857, color: "red"},
	{quote: "Conscience is the inner voice that warns us somebody may be looking.", source: "H. L. Mencken ", citation: "A Mencken Chrestomathy", year: 1949, theme: "Introspective", color: "purple"},
	{quote: "Self-regulation will always be a challenge, but if somebody's going to be in charge, it might as well be me.", source: "Daniel Akst", citation: "We Have Met the Enemy: Self-Control in an Age of Excess", year: "2011", color: "black"},
	{quote: "Forgiveness is almost a selfish act because of its immense benefits to the one who forgives.", source: "Lawana Blackwell", citation: "The Dowry of Miss Lydia Clark", year: 1999, theme: "Forgiveness", color: "blue"},
	{quote: "It is ever so much easier to be good if your clothes are fashionable.", source: "L. M. Montgomery", citation: "Anne of Green Gables", year: "1908", color: "brown"}
];


/***
 * `getRandomQuote` function
***/

//return a random object in the quotes array using Math methods

function getRandomQuote (quotes) {
	return quotes[Math.floor(Math.random() * quotes.length)]
}


/***
 * `printQuote` function
***/

//stores a random quote object in a variable using the randomQuote function
//prints random variable into the HTML with the format provided

function printQuote() {
	let quoteObj = getRandomQuote(quotes);
	let display =
`<p class ="quote">
${quoteObj.quote}
</p>
<p class="Source">
${quoteObj.source}
<span class="citation">
${quoteObj.citation}
</span>
<span class="Year">
${quoteObj.year}
</span>
</p>`;
	document.querySelector("div#quote-box.quote-box").innerHTML = display;

	if (quoteObj.theme) {
		document.querySelector("div#quote-box.quote-box").innerHTML += `<p2>${quoteObj.theme}</p2>`;
	}

	document.querySelector("body").style.backgroundColor = quoteObj.color;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);