function mp1(){
	/*monthly payment
	Amortization means making periodic payments over time to pay off debt.
	
	How to use it: This equation calculates 
	how much a monthly payment will be on a debt. Rearrange the equation 
	algebraically to show what portion of each monthly payment will go towards 
	interest and toward the principle.
	
	Best for: Calculating the cost of long-term debt like mortgages, car loans, student loans, etc.
	*/
	var p, r, n, t;
	p = parseFloat(prompt("Enter The Loan Amount: "));
	r = parseFloat(prompt("Enter The Enter The Interest Rate (Ex: 0.5 Is To Be 50%):"));
	t = parseFloat(prompt("Enter The Number Of Years To Pay Off The Dept :"));
	n = parseFloat(prompt("Enter The Number Of Payments Per Years :"));
	
	nomtop = p * (r / n);
	denr = Math.pow((1 + (r / n)), (-1 * n * t));
	denbottom = 1 - denr;
	result = nomtop / denbottom;
	result = result.toFixed(2);
	alert("Your Monthly Payments For The Debt Of Amount $" + p + " and interest of " + r + " is " +  "$" + result);
}

function mp2(){
	/*monthly payment
	Amortization means making periodic payments over time to pay off debt.
	
	How to use it: This equation calculates 
	how much a monthly payment will be on a debt. Rearrange the equation 
	algebraically to show what portion of each monthly payment will go towards 
	interest and toward the principle.
	
	Best for: Calculating the cost of long-term debt like mortgages, car loans, student loans, etc.
	*/
	var m, r, n, t;
	m = parseFloat(prompt("Enter The Amount Of Monthly Payments :"));
	r = parseFloat(prompt("Enter The Enter The Interest Rate (Ex: 0.5 Is To Be 50%):"));
	t = parseFloat(prompt("Enter The Number Of Years To Pay Off The Dept :"));
	n = parseFloat(prompt("Enter The Number Of Payments Per Years :"));
	
	denr = Math.pow((1+(r / n)), (-1 * n * t));
	denbottom = 1 - denr;
	multimonth = m * denbottom;
	result = multimonth / (r / n);
	result = result.toFixed(2);
	alert("Your initial Dept Amount is $" + result);
}

function si(){
	/*simple interest
	Simple interest is interest earned from prinicipal
	
	How to use it: This calculation can be done quickly to provide
	an idea of how much interest will accrue over time. Just remember: This equation ignores
	the effects of compounding. You'll get an error when you're working with
	a larger principle and longer stretches of time.
	
	Best for: A rough estimate on what you'll earn in a savings account, or pay on a loan or a credit card.
	*/
	var p, r, t;
	p = parseFloat(prompt("Enter The Starting Amount :"));
	r = parseFloat(prompt("Enter The Enter The Interest Rate (Ex: 0.5 Is To Be 50%):"));
	n = parseFloat(prompt("Enter The Number Of Times Interest Is Added Per Year :"));
	t = parseFloat(prompt("Enter The Number Of Years For Interesting Being Added :"));
	q = n * t;
	result = p * r * q;
	result = result.toFixed(2);
	alert("Your Final Amount After " + q + " Years is $" + result);
}

function ci(){
	/*compound interest
	The compound interest is the interest earned on the principal, 
	and any interest accrued in the past.
	
	How to use it: Use this formula instead of the simple interest equation to get a more 
	precise number for how much interest will accrue.
	
	Best for: Determining how much actual interest you will earn over time on an investment or pay on a debt
	*/
	var p, r, n, t;
	p = parseFloat(prompt("Enter The Starting Amount: "));
	r = parseFloat(prompt("Enter The Interest Rate (Ex: 0.5 Is To Be 50%):"));
	t = parseFloat(prompt("Enter The Number Of Years To Leave The Money :"));
	n = parseFloat(prompt("Enter The Number Of Times Interest Is Being Added Per Years :"));
	
	result = p * Math.pow((1 + (r / n)), (n * t));
	result = result.toFixed(2);
	alert("Amount Of Money After Interest Is $" + result);
}

function pv(){
	/*present value of ordinar annuity
	The present value of an annuity equates a series of payments 
	in the future to a lump sum today by using the time 
	value of money (inflation)—a dollar today is worth 
	more than a dollar tomorrow.
	
	How to use it: Receiving $100 today is more valuable than 
	having $10 handed to you every year for the next 10 years, 
	because you could invest the $100 today then earn interest 
	on it over the decade.
	
	Best for: Deciding whether to take a pension or lottery prize as an annuity or a lump sum.
	*/
	var pmt, r, t;
	pmt = parseFloat(prompt("Enter The Payment Amount :"));
	r = parseFloat(prompt("Enter The Interest Rate (Ex :0.5 Is To Be 50%):"));
	t = parseFloat(prompt("Enter The Number Of Payments :"));
	
	result = pmt * ((1 / r) - (1 /  (r * Math.pow((1 + r), t))));
	result = result.toFixed(2);
	alert("The Amount Now Is $" + result);
}

function fv(){
	/*The time value of money is also an important concept for 
	the future value of an annuity, or the worth of your payments down the line. 
	
	How to use it: This equation answers the question: Should you take 
	$10 payments each year for 10 years, or a lump sum of $120 in 10 years?
	
	Best for: See what it costs to pay someone with regular payments over time or upfront. 
	Examples: child support, insurance, etc.
	*/
	var pmt, r, t;
	pmt = parseFloat(prompt("Enter The Payment Amount :"));
	r = parseFloat(prompt("Enter The Interest Rate (Ex :0.5 Is To Be 50%):"));
	t = parseFloat(prompt("Enter The Number Of Payments :"));
	
	result = pmt * (((Math.pow((1 + r), t))/r) - (1 / r));
	result = result.toFixed(2);
	alert("The Amount Later Will Be $" + result);
}

function gr(){
	/*As the economy moves up and down, so do investors' returns. 
	To determine your yearly growth rate over several years on an investment, 
	use the compound annual growth rate, CAGR
	
	How to use it: Think of CAGR as the rate an investment would grow 
	if the rate were constant. Investopedia has a good numerical 
	example of this concept. 
	
	Best for: Determine the average rate of growth on a 
	stock, bond, portfolio, real estate, or any 
	type of investment over multiple years.
	*/
	var ev, bv, t;
	ev = parseFloat(prompt("Enter The Ending Value :"));
	bv = parseFloat(prompt("Enter The Beginning Value :"));
	t = parseFloat(prompt("Enter The Number Of Periods :"));
	
	result = (Math.pow((ev / bv), (1 / t))) - 1;
	result = result.toFixed(2);
	alert("Compund Annual Growth Rate Is " + result);
}

function st(){
	/*The rule of 72 is a quick approximation of how long it will 
	take to double an investment.
	
	How to use it: Take the rate of return on the investment and divide 72 
	by it to determine how many years it will take to double your money. 
	
	Best for: Choose multiple stocks, bonds, or savings accounts.
	*/
	var r;
	r = parseFloat(prompt("Enter The Interest Rate Earned in %:"));
	
	result = 72 / r;
	result = result.toFixed(2);
	alert("The Money Will Double after " + result + " Year/Years");
}

function lr(){
	/* The leverage ratio compares debt to income. 
	Total debts and liabilities are debts like student loans, 
	mortgages, auto loans, and even the $5 you owe a friend.
	
	How to use it: Aim for the lowest leverage ratio you can. 
	Anything less than one is excellent, since you could pay off 
	every debt with your income in one period.
	
	Best for: Measuring your liquidity and determining whether 
	you can afford to take out a loan. 
	*/
	var tl, td, ti;
	tl = parseFloat(prompt("Enter The Total Liabilities :"));
	td = parseFloat(prompt("Enter The Total Debts :"));
	ti = parseFloat(prompt("Enter The Total Income :")); 
	
	result = (tl + td) / ti;
	result = result.toFixed(2);
	alert("The Leverage Ratio is " + result);
}

function cc(){
	/* The ultimate equation for figuring out how long you'll be 
	paying off your credit card. 
	
	How to use it: Though it's the most complex equation 
	on this list, it's still easy to do with a calculator. 
	Use it to see whether or not you should pay more on your 
	bill each month.
	*/
	var b, p, i, apr;
	b = parseFloat(prompt("Enter The Balance :"));
	p = parseFloat(prompt("Enter The Monthly Payment :"));
	apr = parseFloat(prompt("Enter The Annual Percentage Rate (Ex: 0.5 Is To Be 50%)")); 
	
	i = apr / 365;
	fst = -1 / 30;
	scd = Math.log(1 + ((b / p) * (1 - Math.pow((1 + i), 30))));
	trd = Math.log(1 + i);
	result = fst * (scd / trd);
	result = result.toFixed(2);
	alert("The Leverage Ratio is " + result);
}