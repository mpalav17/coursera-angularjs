(function () {
'use strict';



angular.module('ShoppingListCheckOff',[])
.controller("ToBuyController",ToBuyController)
.controller("AldreadyBoughtController",AldreadyBoughtController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);



ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
	var showlist=this;

	showlist.tobuyitems=ShoppingListCheckOffService.getItembuy();

	showlist.removetobuy=function(itemIndex){
		ShoppingListCheckOffService.removeItem(itemIndex);
	}
}


AldreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AldreadyBoughtController(ShoppingListCheckOffService){
	var boughtlist=this;

	boughtlist.boughtitem=ShoppingListCheckOffService.getItembought();
}


function ShoppingListCheckOffService(){
	var service=this;

	var tobuyitems=[
			{name:"cookies",quantity:10},
			{name:"apples",quantity:5},
			{name:"tomatoes",quantity:8},
			{name:"chips",quantity:6},
			{name:"toys",quantity:4},
		];

	var boughtitem=[];

	service.removeItem=function(itemIndex){
		boughtitem.push(tobuyitems[itemIndex]);
		tobuyitems.splice(itemIndex,1);
	};

	service.getItembuy=function(){
		return tobuyitems;
	};

	service.getItembought=function(){
		return boughtitem;
    }
}


})();
