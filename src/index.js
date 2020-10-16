module.exports = function toReadable (number) {
  var arr = [];
  number = number.toString();
  let stroka = '';
  arr = number.split('');
  for(let i = 0; i < arr.length; i++)
  {
	if(arr.length == 3)
	{
		if(i==1)
		{
			switch(arr[i])
		  {
			 case '1':
				switch(arr[i+1])
				  {
					case '0':
						stroka = stroka + 'ten';
						return stroka;
					case '1':
						stroka = stroka + 'eleven';
						return stroka;
					 break;
					 case '2':
						stroka = stroka + 'twelve';
						return stroka;
					 break;
					 case '3':
						stroka = stroka + 'thirteen';
						return stroka;
					 break;
					 case '4':

						stroka = stroka + 'fourteen';
						return stroka;
					 break;
					 case '5':
						stroka = stroka + 'fifteen';
						return stroka;
					 break;
					 case '6':
						stroka = stroka + 'sixteen';
						return stroka;
					 break;
					 case '7':
						stroka = stroka + 'seventeen';
						return stroka;
					 break;
					 case '8':
						stroka = stroka + 'eighteen';
						return stroka;
					 break;
					 case '9':
						stroka = stroka + 'nineteen';
						return stroka;
					 break;
				  }
				
			 break;
			 case '2':
				stroka = stroka + 'twenty';
			 break;
			 case '3':
				stroka = stroka + 'thirty';
			 break;
			 case '4':

				stroka = stroka + 'forty';
			 break;
			 case '5':
				stroka = stroka + 'fifty';
			 break;
			 case '6':
				stroka = stroka + 'sixty';
			 break;
			 case '7':
				stroka = stroka + 'seventy';
			 break;
			 case '8':
				stroka = stroka + 'eighty';
			 break;
			 case '9':
				stroka = stroka + 'ninety';
			 break;
		  }
		  if(arr[2] != 0 && arr[1]!= 0)
		  {
			  stroka = stroka + ' ';
		  }
		} else{
			
			switch(arr[i])
			  {
				 case '1':
					stroka = stroka + 'one';
				 break;
				 case '2':
					stroka = stroka + 'two';
				 break;
				 case '3':
					stroka = stroka + 'three';
				 break;
				 case '4':
					stroka = stroka + 'four';
				 break;
				 case '5':
					stroka = stroka + 'five';
				 break;
				 case '6':
					stroka = stroka + 'six';
				 break;
				 case '7':
					stroka = stroka + 'seven';
				 break;
				 case '8':
					stroka = stroka + 'eight';
				 break;
				 case '9':
					stroka = stroka + 'nine';
				 break;
			  }
			  if(i == 0)
			  {
				if(arr[1] == 0 && arr[2] == 0)
				{
					stroka = stroka + ' hundred';
				}else{
					stroka = stroka + ' hundred ';
				}
				
					
			  }
		}
	}else{
		if(i==0 && arr.length > 1)
		{
			switch(arr[i])
		  {
			 case '1':
				switch(arr[i+1])
				  {
					case '0':
						stroka = stroka + 'ten';
						return stroka;
					case '1':
						stroka = stroka + 'eleven';
						return stroka;
					 break;
					 case '2':
						stroka = stroka + 'twelve';
						return stroka;
					 break;
					 case '3':
						stroka = stroka + 'thirteen';
						return stroka;
					 break;
					 case '4':

						stroka = stroka + 'fourteen';
						return stroka;
					 break;
					 case '5':
						stroka = stroka + 'fifteen';
						return stroka;
					 break;
					 case '6':
						stroka = stroka + 'sixteen';
						return stroka;
					 break;
					 case '7':
						stroka = stroka + 'seventeen';
						return stroka;
					 break;
					 case '8':
						stroka = stroka + 'eighteen';
						return stroka;
					 break;
					 case '9':
						stroka = stroka + 'nineteen';
						return stroka;
					 break;
				  }
				
			 break;
			 case '2':
				stroka = stroka + 'twenty';
			 break;
			 case '3':
				stroka = stroka + 'thirty';
			 break;
			 case '4':

				stroka = stroka + 'forty';
			 break;
			 case '5':
				stroka = stroka + 'fifty';
			 break;
			 case '6':
				stroka = stroka + 'sixty';
			 break;
			 case '7':
				stroka = stroka + 'seventy';
			 break;
			 case '8':
				stroka = stroka + 'eighty';
			 break;
			 case '9':
				stroka = stroka + 'ninety';
			 break;
		  }
		  if(arr[1] != 0)
		  {
			  stroka = stroka + ' ';
		  }
		}else{
			
			switch(arr[i])
			  {
				 case '1':
					stroka = stroka + 'one';
				 break;
				 case '2':
					stroka = stroka + 'two';
				 break;
				 case '3':
					stroka = stroka + 'three';
				 break;
				 case '4':
					stroka = stroka + 'four';
				 break;
				 case '5':
					stroka = stroka + 'five';
				 break;
				 case '6':
					stroka = stroka + 'six';
				 break;
				 case '7':
					stroka = stroka + 'seven';
				 break;
				 case '8':
					stroka = stroka + 'eight';
				 break;
				 case '9':
					stroka = stroka + 'nine';
				 break;
			  }
			 
		}
	}
	if(arr.length == 1 && arr[i] == 0)
	{
		return 'zero';
	}
  }
  return stroka;
}
