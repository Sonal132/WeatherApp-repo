export const TempConverter = (value, unit= 'C') =>  {
    if (unit === 'C') {
      return Math.round(value - 273.15) + '°C';
    } else if (unit === 'F') {
      return Math.round((value - 273.15) * 9 / 5 + 32) + '°F';
    } else {
      return value + 'K';
    }   
}

export const uniqueForecasteData = (arr) => {



const uniqueDates = [];

arr.forEach((forecast) => {
 const date = forecast.dt_txt.split(' ')[0]

 const existingDate = uniqueDates.find((d) => d.date === date);
 if (!existingDate) {
   uniqueDates.push({
     date: date,
     highTemp: forecast.main.temp_max,
     lowTemp: forecast.main.temp_min,
     weatherConditions: forecast.weather[0].description,
     icon:forecast.weather[0].icon,
     precipitation: forecast.pop
   });
 }
},
)
return uniqueDates ; 
}