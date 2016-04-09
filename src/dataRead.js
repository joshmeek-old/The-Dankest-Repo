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

function save_ad(data) {
	accounts_data = data;
}

function save_bd(data) {
	bills_data = data;
}

function save_cd(data) {
	customers_data = data;
}

function save_dd(data) {
	deposits_data = data;
}

function save_md(data) {
	merchant_data = data;
}

function save_td(data) {
	transfers_data = data;
}

function save_wd(data) {
	withdrawals_data = data;
}

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

	$.getJSON("accounts.json", function(data) {
		console.log("accounts data read");
		save_ad(data);
	});

	$.getJSON("bills.json", function(data) {
		console.log("bills data read");
		save_bd(data);
	});

	$.getJSON("customers.json", function(data) {
		console.log("customers data read");
		save_cd(data);
	});

	$.getJSON("deposits.json", function(data) {
		console.log("deposits data read");
		save_dd(data);
	});

	$.getJSON("merchants.json", function(data) {
		console.log("merchant data read");
		save_md(data);
	});

	$.getJSON("transfers.json", function(data) {
		console.log("transfers data read");
		save_td(data);
	});

	$.getJSON("withdrawals.json", function(data) {
		console.log("withdrawals data read");
		save_wd(data);
		print_data();
	}).done(function() {
		console.log("done here");
	});

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