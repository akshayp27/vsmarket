function ExecuteScript(strId)
{
  switch (strId)
  {
      case "66Wpg67gfDh":
        Script1();
        break;
      case "5nzQdpjCpKO":
        Script2();
        break;
      case "6MpK5d5HbF4":
        Script3();
        break;
      case "6M8zu87JWSC":
        Script4();
        break;
      case "66zDhyulUvu":
        Script5();
        break;
      case "6YGxMaJcDbS":
        Script6();
        break;
      case "6PRYOxaq3DD":
        Script7();
        break;
      case "6WoNsD0sJTg":
        Script8();
        break;
      case "6ePgWTmGU2e":
        Script9();
        break;
      case "63pZBdmHPjs":
        Script10();
        break;
      case "6YYARxms71o":
        Script11();
        break;
      case "5ZP7PZK5rNC":
        Script12();
        break;
      case "6oYWSYxSAnT":
        Script13();
        break;
      case "6JfUtAlkcxE":
        Script14();
        break;
      case "5eEF7Nlkbhp":
        Script15();
        break;
      case "6GC1PE1DOiT":
        Script16();
        break;
      case "6ULvbqUUmdM":
        Script17();
        break;
      case "68dfKTiFUuJ":
        Script18();
        break;
      case "68dh4hvZczQ":
        Script19();
        break;
      case "6Ss2nN11mN1":
        Script20();
        break;
  }
}

function Script1()
{
  player.SetVar("slide_change", 0);
}

function Script2()
{
  var player = GetPlayer();
var balance = player.GetVar("balance");
var voda_buy = parseInt(player.GetVar("voda_buy"));
var voda_sell = parseInt(player.GetVar("voda_sell"));

var king_buy = parseInt(player.GetVar("king_buy"));
var king_sell = parseInt(player.GetVar("king_sell"));

var honda_buy = parseInt(player.GetVar("honda_buy"));
var honda_sell = parseInt(player.GetVar("honda_sell"));

var rel_buy =parseInt(player.GetVar("rel_buy"));
var rel_sell =parseInt(player.GetVar("rel_sell"));

var king_price = 400;
var voda_price = 450;
var honda_price = 300;
var rel_price = 350;

var voda = player.GetVar("voda");
var king = player.GetVar("king");
var honda = player.GetVar("honda");
var rel = player.GetVar("rel");


if( voda_sell > voda || voda_sell > voda || voda_sell > voda || voda_sell > voda )
{
	alert("You are trying to sell more shares than the actual. That's impossible !!");
}
else
{
var new_bal = balance - (voda_price * voda_buy + king_price * king_buy + honda_price * honda_buy + rel_price * rel_buy) + (voda_price * voda_sell + king_price * king_sell + honda_price * honda_sell + rel_price * rel_sell );
	if ( new_bal < 0 )
	{
	 alert("Insufficient funds");
	}

}
}

function Script3()
{
  var player = GetPlayer();
var balance = player.GetVar("balance");

var voda_buy = parseInt(player.GetVar("voda_buy"));
var voda_sell = parseInt(player.GetVar("voda_sell"));

var king_buy = parseInt(player.GetVar("king_buy"));
var king_sell = parseInt(player.GetVar("king_sell"));

var honda_buy = parseInt(player.GetVar("honda_buy"));
var honda_sell = parseInt(player.GetVar("honda_sell"));

var rel_buy =parseInt(player.GetVar("rel_buy"));
var rel_sell =parseInt(player.GetVar("rel_sell"));

var voda_price = 500;
var king_price = 454;
var honda_price = 300;
var rel_price = 520;

var voda = player.GetVar("voda");
var king = player.GetVar("king");
var honda = player.GetVar("honda");
var rel = player.GetVar("rel");

var new_bal = 0;

if(isNaN(voda_buy) || isNaN(king_buy)|| isNaN(honda_buy)|| isNaN(rel_buy) || isNaN(voda_sell) || isNaN(king_sell)|| isNaN(honda_sell)|| isNaN(rel_sell))
{
	alert("Please enter shares in numbers");
}
else
{
	if(voda_sell < 0 || king_sell < 0 || honda_sell < 0 || rel_sell < 0 || voda_buy < 0 || king_buy < 0 || honda_buy < 0 || rel_buy < 0)
	{
		alert("Shares cannot be in negative");
	}
	else
	{
		if( voda_sell > voda || king_sell > king || honda_sell > honda || rel_sell > rel )
		{
			alert("You are trying to sell more shares than the actual. That's impossible !!");
		}
		else
		{

		new_bal = balance - (voda_price * voda_buy + king_price * king_buy + honda_price * honda_buy + rel_price * rel_buy) + (voda_price * voda_sell + king_price * king_sell + honda_price * honda_sell + rel_price * rel_sell );

			if ( new_bal < 0 )
			{
	 			alert("Insufficient funds");
			}
			else
			{
				voda = voda + voda_buy - voda_sell;
				king = king + king_buy - king_sell;
				honda = honda + honda_buy - honda_sell;
				rel = rel + rel_buy - rel_sell;
		
				player.SetVar("balance", new_bal);
				player.SetVar("voda", voda);
				player.SetVar("king", king);
				player.SetVar("honda", honda);
				player.SetVar("rel", rel);
				player.SetVar("slide_change", 1);	
			}

		}
	
	}
}
}

function Script4()
{
  var player = GetPlayer();
player.SetVar("slide_change", 0);
}

function Script5()
{
  var player = GetPlayer();
var balance = player.GetVar("balance");

var voda_buy = parseInt(player.GetVar("voda_buy1"));
var voda_sell = parseInt(player.GetVar("voda_sell1"));

var king_buy = parseInt(player.GetVar("king_buy1"));
var king_sell = parseInt(player.GetVar("king_sell1"));

var honda_buy = parseInt(player.GetVar("honda_buy1"));
var honda_sell = parseInt(player.GetVar("honda_sell1"));

var rel_buy =parseInt(player.GetVar("rel_buy1"));
var rel_sell =parseInt(player.GetVar("rel_sell1"));

var voda_price = 550;
var king_price = 504;
var honda_price = 350;
var rel_price = 530;

var voda = player.GetVar("voda");
var king = player.GetVar("king");
var honda = player.GetVar("honda");
var rel = player.GetVar("rel");

var new_bal = 0;

if(isNaN(voda_buy) || isNaN(king_buy)|| isNaN(honda_buy)|| isNaN(rel_buy) || isNaN(voda_sell) || isNaN(king_sell)|| isNaN(honda_sell)|| isNaN(rel_sell))
{
	alert("Please enter shares in numbers");
}
else
{
	if(voda_sell < 0 || king_sell < 0 || honda_sell < 0 || rel_sell < 0 || voda_buy < 0 || king_buy < 0 || honda_buy < 0 || rel_buy < 0)
	{
		alert("Shares cannot be in negative");
	}
	else
	{
		if( voda_sell > voda || king_sell > king || honda_sell > honda || rel_sell > rel )
		{
			alert("You are trying to sell more shares than the actual. That's impossible !!");
		}
		else
		{

		new_bal = balance - (voda_price * voda_buy + king_price * king_buy + honda_price * honda_buy + rel_price * rel_buy) + (voda_price * voda_sell + king_price * king_sell + honda_price * honda_sell + rel_price * rel_sell );

			if ( new_bal < 0 )
			{
	 			alert("Insufficient funds");
			}
			else
			{
				voda = voda + voda_buy - voda_sell;
				king = king + king_buy - king_sell;
				honda = honda + honda_buy - honda_sell;
				rel = rel + rel_buy - rel_sell;
		
				player.SetVar("balance", new_bal);
				player.SetVar("voda", voda);
				player.SetVar("king", king);
				player.SetVar("honda", honda);
				player.SetVar("rel", rel);
				player.SetVar("slide_change", 1);	
			}

		}
	
	}
}
}

function Script6()
{
  var player = GetPlayer();
player.SetVar("slide_change", 0);
}

function Script7()
{
  var player = GetPlayer();
var balance = player.GetVar("balance");

var voda_buy = parseInt(player.GetVar("voda_buy3"));
var voda_sell = parseInt(player.GetVar("voda_sell3"));

var king_buy = parseInt(player.GetVar("king_buy3"));
var king_sell = parseInt(player.GetVar("king_sell3"));

var honda_buy = parseInt(player.GetVar("honda_buy3"));
var honda_sell = parseInt(player.GetVar("honda_sell3"));

var rel_buy =parseInt(player.GetVar("rel_buy3"));
var rel_sell =parseInt(player.GetVar("rel_sell3"));

var voda_price = 560;
var king_price = 520;
var honda_price = 390;
var rel_price = 510;

var voda = player.GetVar("voda");
var king = player.GetVar("king");
var honda = player.GetVar("honda");
var rel = player.GetVar("rel");

var new_bal = 0;

if(isNaN(voda_buy) || isNaN(king_buy)|| isNaN(honda_buy)|| isNaN(rel_buy) || isNaN(voda_sell) || isNaN(king_sell)|| isNaN(honda_sell)|| isNaN(rel_sell))
{
	alert("Please enter shares in numbers");
}
else
{
	if(voda_sell < 0 || king_sell < 0 || honda_sell < 0 || rel_sell < 0 || voda_buy < 0 || king_buy < 0 || honda_buy < 0 || rel_buy < 0)
	{
		alert("Shares cannot be in negative");
	}
	else
	{
		if( voda_sell > voda || king_sell > king || honda_sell > honda || rel_sell > rel )
		{
			alert("You are trying to sell more shares than the actual. That's impossible !!");
		}
		else
		{

		new_bal = balance - (voda_price * voda_buy + king_price * king_buy + honda_price * honda_buy + rel_price * rel_buy) + (voda_price * voda_sell + king_price * king_sell + honda_price * honda_sell + rel_price * rel_sell );

			if ( new_bal < 0 )
			{
	 			alert("Insufficient funds");
			}
			else
			{
				voda = voda + voda_buy - voda_sell;
				king = king + king_buy - king_sell;
				honda = honda + honda_buy - honda_sell;
				rel = rel + rel_buy - rel_sell;
		
				player.SetVar("balance", new_bal);
				player.SetVar("voda", voda);
				player.SetVar("king", king);
				player.SetVar("honda", honda);
				player.SetVar("rel", rel);
				player.SetVar("slide_change", 1);	
			}

		}
	
	}
}
}

function Script8()
{
  var player = GetPlayer();
player.SetVar("slide_change", 0);
}

function Script9()
{
  var player = GetPlayer();
var balance = player.GetVar("balance");

var voda_buy = parseInt(player.GetVar("voda_buy4"));
var voda_sell = parseInt(player.GetVar("voda_sell4"));

var king_buy = parseInt(player.GetVar("king_buy4"));
var king_sell = parseInt(player.GetVar("king_sell4"));

var honda_buy = parseInt(player.GetVar("honda_buy4"));
var honda_sell = parseInt(player.GetVar("honda_sell4"));

var rel_buy =parseInt(player.GetVar("rel_buy4"));
var rel_sell =parseInt(player.GetVar("rel_sell4"));

var voda_price = 540;
var king_price = 550;
var honda_price = 360;
var rel_price = 520;

var voda = player.GetVar("voda");
var king = player.GetVar("king");
var honda = player.GetVar("honda");
var rel = player.GetVar("rel");

var new_bal = 0;

if(isNaN(voda_buy) || isNaN(king_buy)|| isNaN(honda_buy)|| isNaN(rel_buy) || isNaN(voda_sell) || isNaN(king_sell)|| isNaN(honda_sell)|| isNaN(rel_sell))
{
	alert("Please enter shares in numbers");
}
else
{
	if(voda_sell < 0 || king_sell < 0 || honda_sell < 0 || rel_sell < 0 || voda_buy < 0 || king_buy < 0 || honda_buy < 0 || rel_buy < 0)
	{
		alert("Shares cannot be in negative");
	}
	else
	{
		if( voda_sell > voda || king_sell > king || honda_sell > honda || rel_sell > rel )
		{
			alert("You are trying to sell more shares than the actual. That's impossible !!");
		}
		else
		{

		new_bal = balance - (voda_price * voda_buy + king_price * king_buy + honda_price * honda_buy + rel_price * rel_buy) + (voda_price * voda_sell + king_price * king_sell + honda_price * honda_sell + rel_price * rel_sell );

			if ( new_bal < 0 )
			{
	 			alert("Insufficient funds");
			}
			else
			{
				voda = voda + voda_buy - voda_sell;
				king = king + king_buy - king_sell;
				honda = honda + honda_buy - honda_sell;
				rel = rel + rel_buy - rel_sell;
		
				player.SetVar("balance", new_bal);
				player.SetVar("voda", voda);
				player.SetVar("king", king);
				player.SetVar("honda", honda);
				player.SetVar("rel", rel);
				player.SetVar("slide_change", 1);	
			}

		}
	
	}
}
}

function Script10()
{
  var player = GetPlayer();
player.SetVar("slide_change", 0);
}

function Script11()
{
  var player = GetPlayer();
var balance = player.GetVar("balance");

var voda_buy = parseInt(player.GetVar("voda_buy5"));
var voda_sell = parseInt(player.GetVar("voda_sell5"));

var king_buy = parseInt(player.GetVar("king_buy5"));
var king_sell = parseInt(player.GetVar("king_sell5"));

var honda_buy = parseInt(player.GetVar("honda_buy5"));
var honda_sell = parseInt(player.GetVar("honda_sell5"));

var rel_buy =parseInt(player.GetVar("rel_buy5"));
var rel_sell =parseInt(player.GetVar("rel_sell5"));

var voda_price = 290;
var king_price = 560;
var honda_price = 370;
var rel_price = 550;

var voda = player.GetVar("voda");
var king = player.GetVar("king");
var honda = player.GetVar("honda");
var rel = player.GetVar("rel");

var new_bal = 0;

if(isNaN(voda_buy) || isNaN(king_buy)|| isNaN(honda_buy)|| isNaN(rel_buy) || isNaN(voda_sell) || isNaN(king_sell)|| isNaN(honda_sell)|| isNaN(rel_sell))
{
	alert("Please enter shares in numbers");
}
else
{
	if(voda_sell < 0 || king_sell < 0 || honda_sell < 0 || rel_sell < 0 || voda_buy < 0 || king_buy < 0 || honda_buy < 0 || rel_buy < 0)
	{
		alert("Shares cannot be in negative");
	}
	else
	{
		if( voda_sell > voda || king_sell > king || honda_sell > honda || rel_sell > rel )
		{
			alert("You are trying to sell more shares than the actual. That's impossible !!");
		}
		else
		{

		new_bal = balance - (voda_price * voda_buy + king_price * king_buy + honda_price * honda_buy + rel_price * rel_buy) + (voda_price * voda_sell + king_price * king_sell + honda_price * honda_sell + rel_price * rel_sell );

			if ( new_bal < 0 )
			{
	 			alert("Insufficient funds");
			}
			else
			{
				voda = voda + voda_buy - voda_sell;
				king = king + king_buy - king_sell;
				honda = honda + honda_buy - honda_sell;
				rel = rel + rel_buy - rel_sell;
		
				player.SetVar("balance", new_bal);
				player.SetVar("voda", voda);
				player.SetVar("king", king);
				player.SetVar("honda", honda);
				player.SetVar("rel", rel);
				player.SetVar("slide_change", 1);	
			}

		}
	
	}
}
}

function Script12()
{
  var player = GetPlayer();
player.SetVar("slide_change", 0);
}

function Script13()
{
  var player = GetPlayer();
var balance = player.GetVar("balance");

var voda_buy = parseInt(player.GetVar("voda_buy6"));
var voda_sell = parseInt(player.GetVar("voda_sell6"));

var king_buy = parseInt(player.GetVar("king_buy6"));
var king_sell = parseInt(player.GetVar("king_sell6"));

var honda_buy = parseInt(player.GetVar("honda_buy6"));
var honda_sell = parseInt(player.GetVar("honda_sell6"));

var rel_buy =parseInt(player.GetVar("rel_buy6"));
var rel_sell =parseInt(player.GetVar("rel_sell6"));

var voda_price = 310;
var king_price = 480;
var honda_price = 405;
var rel_price = 555;

var voda = player.GetVar("voda");
var king = player.GetVar("king");
var honda = player.GetVar("honda");
var rel = player.GetVar("rel");

var new_bal = 0;

if(isNaN(voda_buy) || isNaN(king_buy)|| isNaN(honda_buy)|| isNaN(rel_buy) || isNaN(voda_sell) || isNaN(king_sell)|| isNaN(honda_sell)|| isNaN(rel_sell))
{
	alert("Please enter shares in numbers");
}
else
{
	if(voda_sell < 0 || king_sell < 0 || honda_sell < 0 || rel_sell < 0 || voda_buy < 0 || king_buy < 0 || honda_buy < 0 || rel_buy < 0)
	{
		alert("Shares cannot be in negative");
	}
	else
	{
		if( voda_sell > voda || king_sell > king || honda_sell > honda || rel_sell > rel )
		{
			alert("You are trying to sell more shares than the actual. That's impossible !!");
		}
		else
		{

		new_bal = balance - (voda_price * voda_buy + king_price * king_buy + honda_price * honda_buy + rel_price * rel_buy) + (voda_price * voda_sell + king_price * king_sell + honda_price * honda_sell + rel_price * rel_sell );

			if ( new_bal < 0 )
			{
	 			alert("Insufficient funds");
			}
			else
			{
				voda = voda + voda_buy - voda_sell;
				king = king + king_buy - king_sell;
				honda = honda + honda_buy - honda_sell;
				rel = rel + rel_buy - rel_sell;
		
				player.SetVar("balance", new_bal);
				player.SetVar("voda", voda);
				player.SetVar("king", king);
				player.SetVar("honda", honda);
				player.SetVar("rel", rel);
				player.SetVar("slide_change", 1);	
			}

		}
	
	}
}
}

function Script14()
{
  var player = GetPlayer();
player.SetVar("slide_change", 0);
}

function Script15()
{
  var player = GetPlayer();
var balance = player.GetVar("balance");

var voda_buy = parseInt(player.GetVar("voda_buy7"));
var voda_sell = parseInt(player.GetVar("voda_sell7"));

var king_buy = parseInt(player.GetVar("king_buy7"));
var king_sell = parseInt(player.GetVar("king_sell7"));

var honda_buy = parseInt(player.GetVar("honda_buy7"));
var honda_sell = parseInt(player.GetVar("honda_sell7"));

var rel_buy =parseInt(player.GetVar("rel_buy7"));
var rel_sell =parseInt(player.GetVar("rel_sell7"));

var voda_price = 315;
var king_price = 490;
var honda_price = 390;
var rel_price = 555;

var voda = player.GetVar("voda");
var king = player.GetVar("king");
var honda = player.GetVar("honda");
var rel = player.GetVar("rel");

var new_bal = 0;

if(isNaN(voda_buy) || isNaN(king_buy)|| isNaN(honda_buy)|| isNaN(rel_buy) || isNaN(voda_sell) || isNaN(king_sell)|| isNaN(honda_sell)|| isNaN(rel_sell))
{
	alert("Please enter shares in numbers");
}
else
{
	if(voda_sell < 0 || king_sell < 0 || honda_sell < 0 || rel_sell < 0 || voda_buy < 0 || king_buy < 0 || honda_buy < 0 || rel_buy < 0)
	{
		alert("Shares cannot be in negative");
	}
	else
	{
		if( voda_sell > voda || king_sell > king || honda_sell > honda || rel_sell > rel )
		{
			alert("You are trying to sell more shares than the actual. That's impossible !!");
		}
		else
		{

		new_bal = balance - (voda_price * voda_buy + king_price * king_buy + honda_price * honda_buy + rel_price * rel_buy) + (voda_price * voda_sell + king_price * king_sell + honda_price * honda_sell + rel_price * rel_sell );

			if ( new_bal < 0 )
			{
	 			alert("Insufficient funds");
			}
			else
			{
				voda = voda + voda_buy - voda_sell;
				king = king + king_buy - king_sell;
				honda = honda + honda_buy - honda_sell;
				rel = rel + rel_buy - rel_sell;
		
				player.SetVar("balance", new_bal);
				player.SetVar("voda", voda);
				player.SetVar("king", king);
				player.SetVar("honda", honda);
				player.SetVar("rel", rel);
				player.SetVar("slide_change", 1);	
			}

		}
	
	}
}
}

function Script16()
{
  var player = GetPlayer();
player.SetVar("slide_change", 0);
}

function Script17()
{
  var player = GetPlayer();
var balance = player.GetVar("balance");

var voda_buy = parseInt(player.GetVar("voda_buy8"));
var voda_sell = parseInt(player.GetVar("voda_sell8"));

var king_buy = parseInt(player.GetVar("king_buy8"));
var king_sell = parseInt(player.GetVar("king_sell8"));

var honda_buy = parseInt(player.GetVar("honda_buy8"));
var honda_sell = parseInt(player.GetVar("honda_sell8"));

var rel_buy =parseInt(player.GetVar("rel_buy8"));
var rel_sell =parseInt(player.GetVar("rel_sell8"));

var voda_price = 330;
var king_price = 470;
var honda_price = 410;
var rel_price = 505;

var voda = player.GetVar("voda");
var king = player.GetVar("king");
var honda = player.GetVar("honda");
var rel = player.GetVar("rel");

var new_bal = 0;

if(isNaN(voda_buy) || isNaN(king_buy)|| isNaN(honda_buy)|| isNaN(rel_buy) || isNaN(voda_sell) || isNaN(king_sell)|| isNaN(honda_sell)|| isNaN(rel_sell))
{
	alert("Please enter shares in numbers");
}
else
{
	if(voda_sell < 0 || king_sell < 0 || honda_sell < 0 || rel_sell < 0 || voda_buy < 0 || king_buy < 0 || honda_buy < 0 || rel_buy < 0)
	{
		alert("Shares cannot be in negative");
	}
	else
	{
		if( voda_sell > voda || king_sell > king || honda_sell > honda || rel_sell > rel )
		{
			alert("You are trying to sell more shares than the actual. That's impossible !!");
		}
		else
		{

		new_bal = balance - (voda_price * voda_buy + king_price * king_buy + honda_price * honda_buy + rel_price * rel_buy) + (voda_price * voda_sell + king_price * king_sell + honda_price * honda_sell + rel_price * rel_sell );

			if ( new_bal < 0 )
			{
	 			alert("Insufficient funds");
			}
			else
			{
				voda = voda + voda_buy - voda_sell;
				king = king + king_buy - king_sell;
				honda = honda + honda_buy - honda_sell;
				rel = rel + rel_buy - rel_sell;
		
				player.SetVar("balance", new_bal);
				player.SetVar("voda", voda);
				player.SetVar("king", king);
				player.SetVar("honda", honda);
				player.SetVar("rel", rel);
				player.SetVar("slide_change", 1);	
			}

		}
	
	}
}
}

function Script18()
{
  var player = GetPlayer();
player.SetVar("slide_change", 0);
}

function Script19()
{
  var player = GetPlayer();
var balance = player.GetVar("balance");

var voda_buy = parseInt(player.GetVar("voda_buy9"));
var voda_sell = parseInt(player.GetVar("voda_sell9"));

var king_buy = parseInt(player.GetVar("king_buy9"));
var king_sell = parseInt(player.GetVar("king_sell9"));

var honda_buy = parseInt(player.GetVar("honda_buy9"));
var honda_sell = parseInt(player.GetVar("honda_sell9"));

var rel_buy =parseInt(player.GetVar("rel_buy9"));
var rel_sell =parseInt(player.GetVar("rel_sell9"));

var voda_price = 350;
var king_price = 225;
var honda_price = 430;
var rel_price = 520;

var voda = player.GetVar("voda");
var king = player.GetVar("king");
var honda = player.GetVar("honda");
var rel = player.GetVar("rel");

var new_bal = 0;

if(isNaN(voda_buy) || isNaN(king_buy)|| isNaN(honda_buy)|| isNaN(rel_buy) || isNaN(voda_sell) || isNaN(king_sell)|| isNaN(honda_sell)|| isNaN(rel_sell))
{
	alert("Please enter shares in numbers");
}
else
{
	if(voda_sell < 0 || king_sell < 0 || honda_sell < 0 || rel_sell < 0 || voda_buy < 0 || king_buy < 0 || honda_buy < 0 || rel_buy < 0)
	{
		alert("Shares cannot be in negative");
	}
	else
	{
		if( voda_sell > voda || king_sell > king || honda_sell > honda || rel_sell > rel )
		{
			alert("You are trying to sell more shares than the actual. That's impossible !!");
		}
		else
		{

		new_bal = balance - (voda_price * voda_buy + king_price * king_buy + honda_price * honda_buy + rel_price * rel_buy) + (voda_price * voda_sell + king_price * king_sell + honda_price * honda_sell + rel_price * rel_sell );

			if ( new_bal < 0 )
			{
	 			alert("Insufficient funds");
			}
			else
			{
				voda = voda + voda_buy - voda_sell;
				king = king + king_buy - king_sell;
				honda = honda + honda_buy - honda_sell;
				rel = rel + rel_buy - rel_sell;
		
				player.SetVar("balance", new_bal);
				player.SetVar("voda", voda);
				player.SetVar("king", king);
				player.SetVar("honda", honda);
				player.SetVar("rel", rel);
				player.SetVar("slide_change", 1);	
			}

		}
	
	}
}
}

function Script20()
{
  var player = GetPlayer();
var balance = player.GetVar("balance");


var voda_price = 350;
var king_price = 225;
var honda_price = 430;
var rel_price = 520;

var voda = player.GetVar("voda");
var king = player.GetVar("king");
var honda = player.GetVar("honda");
var rel = player.GetVar("rel");

var new_bal = 0;

var pl = 0;

new_bal = balance + voda_price * voda + king_price * king + honda_price * honda + rel_price * rel;

if(new_bal > 50000 )
{	
	pl = new_bal - 50000;
				player.SetVar("message_header","Congratulations !!");
				player.SetVar("message","You have gained profit in Virtual stock market.You are an intelligent investor");
				player.SetVar("cur_bal", new_bal);
				player.SetVar("pl","Profit");
				player.SetVar("pl_change",pl);
				player.SetVar("slide_change", 0);

}
else
{
	if(new_bal < 50000)
	{
				pl = 50000 - new_bal;

				player.SetVar("message_header","Oh no !!");
				player.SetVar("message","You have made loss in Virtual stock market. Play again to be a good investor");
				player.SetVar("cur_bal", new_bal);
				player.SetVar("pl","Loss");
				player.SetVar("pl_change",pl);
				player.SetVar("slide_change", 0);
	}
	else
	{
		
				player.SetVar("message_header","No Risk, No Returns");
				player.SetVar("message","You could have gained profit if played good.");
				player.SetVar("cur_bal", 50000);
				player.SetVar("pl","Profit");
				player.SetVar("pl_change",0);
				player.SetVar("slide_change", 0);
		
	}
}
}

