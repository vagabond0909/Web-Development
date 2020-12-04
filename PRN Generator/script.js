function generate()
		{
			var f = document.getElementById("fname").value;
			var l = document.getElementById("lname").value;
			var fd1 = document.getElementById("year").value;
			var fd2 = document.getElementById("branch").value;
			var fd3 = document.getElementById("batch").value;
			var fd4 = document.getElementById("sqno").value;
			
			var fd1 = (fd1%2000);
			
			if(fd3<10)
				{
					fd3 = "0" + fd3;
				}
			
			if(fd4<10)
				{
					fd4 = "000" + fd4;
				}
			else if(fd4<100)
				{
					fd4 = "00" + fd4;
				}
			else if(fd4<1000)
				{
					fd4 = "0" + fd4;
				}
				
			var res = fd1 + fd2 + fd3 + fd4;
			
			var ans = f + " " + l + " Your PRN is: " + res;
			
			window.alert(ans);
			
		}	