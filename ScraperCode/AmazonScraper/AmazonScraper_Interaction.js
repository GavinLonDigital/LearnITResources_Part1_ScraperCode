settings({ country: input.country || "us" });
let url = new URL("https://www.amazon.com/s");

var searchInput = input.search + ' ' + 'Programming';
url.searchParams.set('k', searchInput);
url.searchParams.set('i', 'stripbooks-intl-ship');

navigate(url, {wait_until: 'domcontentloaded'});

//navigate(`https://www.amazon.com/s?k=${parseSearchParam(input.search)}+Programming&i=stripbooks-intl-ship`);

let products = parse().products;

{
  collect(products);
}
