(function(){
'use strict';

angular.module('lunchapp',[])
.controller('lunchcontroller',lunchcontroller);

lunchcontroller.$inject=['$scope'];
function lunchcontroller($scope)
{
	$scope.name="";
	$scope.dispmsg=function() 
	{
		var disp=calcsize($scope.name);
		$scope.display=disp;
	};

	function calcsize(string)
	{
		var cnt=1;
		for (var i = 0; i < string.length; i++) 
		{
			if(string.charAt(i)==",")
				cnt+=1;
		}
		if(cnt<=3)
			return "Enjoy";
		else if(cnt>3)
			return "Too much!!!";
	}
}
})();
