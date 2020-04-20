(function () {
'use strict';



angular.module('ShoppingListCheckOff',[])
.controller("ShoppingListController1",ShoppingListController1)
.controller("ShoppingListController2",ShoppingListController2)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);



ShoppingListController1.$inject=['ShoppingListCheckOffService'];
function ShoppingListController1(ShoppingListCheckOffService){
	var showlist=this;

	showlist.tobuyitems=ShoppingListCheckOffService.getItembuy();

	showlist.removetobuy=function(itemIndex){
		ShoppingListCheckOffService.removeItem(itemIndex);
	}
}


ShoppingListController2.$inject=['ShoppingListCheckOffService'];
function ShoppingListController2(ShoppingListCheckOffService){
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