const signs = {
	Aries: 'Mar 21-Apr 19',
	Taurus: 'Apr 20-May 20',
	Gemini: 'May 20-Jun 20',
	Cancer: 'Jun 21-Jul 22',
	Leo: 'Jul 23-Aug 22',
	Virgo: 'Aug 23-Sep 22',
	Libra: 'Sep 23-Oct 22',
	Scorpio: 'Oct 23-Nov 21',
	Sagittarius: 'Nov 22-Dec 21',
	Capricorn: 'Dec 22-Jan 19',
	Aquarius: 'Jan 20-Feb 18',
	Pisces: 'Feb 19-Mar 20'
};

const userSign = (day,month) =>{
	day = 11;
	month = 'Dec';


	let day31 = ['Jan','Mar','May','Jul','Aug','Oct','Dec'];
	let day30 = ['Apr','Jun','Sep','Nov'];

	if(day31.includes(month) && day > 31){
		day = 31;
	}
	if(day30.includes(month) && day > 30){
		day = 30;
	}
	if(month === 'Feb' && day > 28){
		day = 28;
	}

	// console.log(day)

	for (sign in signs){
		let [start, end] = signs[sign].split('-');

		let [startM, startD] = start.split(' ');
		let [endM, endD] = end.split(' ');


		if(startM === month && startD <= day || endM === month && endD >= day){
			return sign;
		}

	}
};

console.log(userSign())



