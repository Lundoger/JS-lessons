let sites = [
	{
		company: "Company A",
		owner: "Owner A",
		sponsors: [
			{ 
				surname: "Surname A1", 
				name: "Name A1", 
				investment: 50000
			},
			{
				surname: "Surname A2", 
				name: "Name A2", 
				investment: 10000
			},
			{
				surname: "Surname A3", 
				name: "Name A3", 
				investment: 15000
			},
		],
		year: 2000,
		price: 8000,
	},
	{
		company: "Company B",
		owner: "Owner B",
		sponsors: [
			{ 
				surname: "Surname B1", 
				name: "Name B1", 
				investment: 15000
			},
			{
				surname: "Surname B2", 
				name: "Name B2", 
				investment: 200000
			},
			{
				surname: "Surname B3", 
				name: "Name B3", 
				investment: 25000
			},
		],
		year: 2016,
		price: 21000,
	},
	{
		company: "Company С",
		owner: "Owner С",
		sponsors: [
			{ 
				surname: "Surname С1", 
				name: "Name С1", 
				investment: 100000
			},
			{
				surname: "Surname С2", 
				name: "Name С2", 
				investment: 20000
			},
			{
				surname: "Surname С3", 
				name: "Name С3", 
				investment: 300000
			},
		],
		year: 2007,
		price: 6000,
	},
	{
		company: "Company D",
		owner: "Owner D",
		sponsors: [
			{ 
				surname: "Surname D1", 
				name: "Name D1", 
				investment: 100000
			},
			{
				surname: "Surname D2", 
				name: "Name D2", 
				investment: 20000
			},
			{
				surname: "Surname D3", 
				name: "Name D3", 
				investment: 30000
			},
		],
		year: 2003,
		price: 19000,
	},
];
//========================================================================================================================================================
//1.1 Знайти загальну вартість усіх сайтів
document.write(`<p class="description">1.1) Знайти загальну вартість усіх сайтів</p>`);

const totalAmountOfSites = sites.reduce((acc, site) => acc + site.price, 0)

document.write(`<p style="margin-bottom: 15px;">${totalAmountOfSites}</p><hr style="background-color: #fff; height: 2px;">`);
//========================================================================================================================================================
//1.2 Знайти кількість сайтів, що було зроблено між 2000 та 2009 рр
document.write(`<p class="description">1.2) Знайти кількість сайтів, що було зроблено між 2000 та 2009 рр</p>`);

const amountOfSitesMadeFrom2000To2009 = sites.reduce((acc, site) => {
	if(site.year >= 2000 && site.year <= 2009) {
		return acc+1
	}
	return acc
}, 0)

document.write(`<p style="margin-bottom: 15px;">${amountOfSitesMadeFrom2000To2009}</p><hr style="background-color: #fff; height: 2px;">`);
//========================================================================================================================================================
//1.3 Знайти кількість сайтів, де сума спонсорських вкладень була більшою за 100000
document.write(`<p class="description">1.3) Знайти кількість сайтів, де сума спонсорських вкладень була більшою за 100000</p>`);

let sitesAmountWhereSumMoreThan100000 = 0
for (const site of sites) {
	let sum = 0
	for (let i = 0; i < site.sponsors.length; i++) {
		sum += site.sponsors[i].investment
	}
	if(sum > 100000) sitesAmountWhereSumMoreThan100000++
}
//пытался еще это решить через редьюс но окончательно запутался
document.write(`<p style="margin-bottom: 15px;">${sitesAmountWhereSumMoreThan100000}</p><hr style="background-color: #fff; height: 2px;">`);
//========================================================================================================================================================
//1.4 створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
document.write(`<p class="description">1.4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)</p>`);

const siteSponsors = sites.map((site) => {
	let sponsorsName = []
	for (let i = 0; i < site.sponsors.length; i++) {
		sponsorsName.push(site.sponsors[i].name)
	}
	return sponsorsName
})

document.write(`<p style="margin-bottom: 15px;">${siteSponsors}</p><hr style="background-color: #fff; height: 2px;">`);
//========================================================================================================================================================
//1.5 знайти рік, коли прибуток був найбільшим
document.write(`<p class="description">1.5) знайти рік, коли прибуток був найбільшим</p>`);

let mostProfitableYear
let maxProfitOfYear = sites[0].price
for (const site of sites) {
	if(site.price > maxProfitOfYear) {
		mostProfitableYear = site.year
		maxProfitOfYear = site.price
	}
}

document.write(`<p style="margin-bottom: 15px;">${mostProfitableYear}</p><hr style="background-color: #fff; height: 2px;">`);
//========================================================================================================================================================
//1.6 упорядкувати список за спаданням прибутку
document.write(`<p class="description">1.6) упорядкувати список за спаданням прибутку</p>`);

let sites2 = JSON.parse(JSON.stringify(sites))
sites2.sort((a,b) => b.price - a.price)

console.log(sites2);

document.write(`<p style="margin-bottom: 15px;"></p><hr style="background-color: #fff; height: 2px;">`);
//========================================================================================================================================================
//1.7 Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
document.write(`<p class="description">1.7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000</p>`);

const sitePriceThanLess10000 = sites.filter((site) => site.price < 10000)
const sitePriceThanMore10000 = sites.filter((site) => site.price > 10000)

console.log(sitePriceThanLess10000);
console.log(sitePriceThanMore10000);

document.write(`<p style="margin-bottom: 15px;"></p><hr style="background-color: #fff; height: 2px;">`);
//========================================================================================================================================================