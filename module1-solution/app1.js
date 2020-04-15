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
		if(string=="list comma separated dishes you usually have for lunch"||string.length<1)
			return "Please enter data first";
		else
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
}
})();
