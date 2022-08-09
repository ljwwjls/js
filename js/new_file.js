function db( obj,juli,bjys){
			clearInterval(obj.mingzi);
			obj.mingzi = setInterval(function(){    //用对象的方式写  如果用var每点一次就会开辟出新的空间
			if(obj.offsetLeft == juli){
				clearInterval(obj.mingzi);
				if (bjys) {
				                 bjys();
				       }
			}
			var step = (juli - obj.offsetLeft)/ 10;           //往回走
			step = step >0 ? Math.ceil(step): Math.floor(step);   //三元表达式  如果第一个条件不成立就返回第二个条件
			  //往出走会出现小数所以向上取整
			obj.style.left = obj.offsetLeft + step + 'px';
			
		},15)  //定时器一般设定值都是15
		}