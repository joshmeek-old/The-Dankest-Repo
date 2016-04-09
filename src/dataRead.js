/*$.getJSON("data.json", function(data) {
        console.log(data);
		var i = 0;
		$('body').append("Hello");
		while ( i < 100 ) {
			$('body').append(data.results[i].name);
			$('body').append("\n");
			i++
		}
    });*/

var accounts_data;
var bills_data;
var customers_data;
var deposits_data;
var merchant_data;
var transfers_data;
var withdrawals_data;

function print_data() {
	console.log(accounts_data);
	console.log(bills_data);
	console.log(customers_data);
	console.log(deposits_data);
	console.log(merchant_data);
	console.log(transfers_data);
	console.log(withdrawals_data);
}

function grabJSON() {

	//The main request object
	var request = new XMLHttpRequest();

	request.open("GET", "accounts.json", false);
   	request.send(null)
   	accounts_data = JSON.parse(request.responseText);

   	request.open("GET", "bills.json", false);
   	request.send(null)
   	bills_data = JSON.parse(request.responseText);

   	request.open("GET", "customers.json", false);
   	request.send(null)
   	customers_data = JSON.parse(request.responseText);

   	request.open("GET", "deposits.json", false);
   	request.send(null)
   	deposits_data = JSON.parse(request.responseText);

   	request.open("GET", "merchants.json", false);
   	request.send(null)
   	merchant_data = JSON.parse(request.responseText);

   	request.open("GET", "transfers.json", false);
   	request.send(null)
   	transfers_data = JSON.parse(request.responseText);

   	request.open("GET", "withdrawals.json", false);
   	request.send(null)
   	withdrawals_data = JSON.parse(request.responseText);

	/*var marchant_data = $.getJSON("data.json", function(data) {
        //console.log(data);
		var i = 0;
		$('body').append("Hello");
		while ( i < 100 ) {
			$('body').append(data.results[i].name);
			$('body').append("\n");
			i++
		}
    });*/
}