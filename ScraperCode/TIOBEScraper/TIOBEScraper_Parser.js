// Code that will parse page HTML into structured data.
// Use parse() in interaction code to read this data.

const allRows = $('.table-top20 > tbody > tr');

let rankingArr = [];

allRows.each((index, element) =>
{
	const tds = $(element).find('td');
  	const rank = $(tds[0]).text();
  	const language = $(tds[4]).text();
  	const imgTDElem = $(tds[3]);
  	const imgElem = $(imgTDElem).find('img');
  	const imgPath = $(imgElem).attr('src');
    
 	rankingArr.push({ranking: rank, pLang: language, imagePath: imgPath});
  
})


return {
	rankingArr
};
