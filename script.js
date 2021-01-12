// Zodiac Signs
let signs = {
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

const randomNum = (num) =>{
	return Math.floor(Math.random() * num)
}

const userSign = (day,month,signs) =>{

	// Ensuring day given is within regular amount of days in month
	let monthWith31days = ['Jan','Mar','May','Jul','Aug','Oct','Dec'];
	let monthWith30days = ['Apr','Jun','Sep','Nov'];

	if(monthWith31days .includes(month) && day > 31){
		day = 31;
	}
	if(monthWith30days .includes(month) && day > 30){
		day = 30;
	}
	if(month === 'Feb' && day > 28){
		day = 28;
	}
	if(day < 1){
		day = 1;
	}

	//Iterrating over each sign in object
	for (sign in signs){
		let [start, end] = signs[sign].split('-');
		// splitting the start and end dates for a sign into variables
		let [startM, startD] = start.split(' ');
		let [endM, endD] = end.split(' ');

		// returning sign if day and month within the constraints
		if(startM === month && startD <= day || endM === month && endD >= day){
			return sign
		}

	}

};

const horoscopeOutput = (day, month) =>{

	const sign = userSign(day, month,signs);

	const randomWisdom = {
		fortune : ['good luck','bad luck','a good day','a terrible day','an amazing week'],
		advice : ['eat chocolate','go for a jog','call your loved one','smile more','exercise']
	};

	// storing user 'wisdom' in an array 
	let userWisdom = [`Your sign is ${sign}`];

	for(prop in randomWisdom){
		// storing random index based on object property
		let optionIndex = randomNum(randomWisdom[prop].length);

		// pushing customised message to user widom based on object properties
		switch(prop){
			case 'fortune':
				userWisdom.push(`You are having ${randomWisdom[prop][optionIndex]}.`)
				break
			case 'advice':
				userWisdom.push(`You should ${randomWisdom[prop][optionIndex]}.`)
				break
			default:
				userWisdom.push('Insuficient info');
		}
	}

	return userWisdom

}


const formatHoroscopeOutput = (horoscope) =>{
	const formatted = horoscope.join(' ♥\n');
	console.log(formatted);
}

let horoscope = horoscopeOutput(22,'Aug')

formatHoroscopeOutput(horoscope)
