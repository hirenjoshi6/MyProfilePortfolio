import React, { useState, useEffect } from 'react';


const parseDate = (input) => {
    const parts = input.split(/[^0-9]/).filter(p => p !== '');
    let year, month = 0, day = 1;
  
    if (parts.length >= 1) {
      const yPart = parts[0];
      // Handle 2-digit year (assumed to be 20XX)
      year = yPart.length === 2 ? 2000 + parseInt(yPart, 10) : parseInt(yPart, 10);
    } else {
      return new Date(NaN); // Return invalid date
    }
  
    if (parts.length >= 2) {
      month = parseInt(parts[1], 10) - 1; // Convert to 0-based month
      month = Math.min(Math.max(month, 0), 11); // Clamp between 0-11
    }
  
    if (parts.length >= 3) {
      day = parseInt(parts[2], 10);
      day = Math.min(Math.max(day, 1), 31); // Clamp between 1-31
    }
  
    return new Date(year - 2, month, day);
  };
  
  const DateCalculator = ({ givenDate }) => {
    const [timeDifference, setTimeDifference] = useState('');
  
    useEffect(() => {
      const calculateDifference = () => {
        const currentDate = new Date();
        const startDate = parseDate(givenDate);
  
        // Handle invalid dates
        if (isNaN(startDate.getTime())) {
          setTimeDifference('Invalid date');
          return;
        }
  
        let years = currentDate.getFullYear() - startDate.getFullYear();
        let months = currentDate.getMonth() - startDate.getMonth();
        const currentDay = currentDate.getDate();
        const startDay = startDate.getDate();
  
        // Adjust for day difference
        if (currentDay < startDay) {
          months--;
        }
  
        // Handle negative months
        if (months < 0) {
          years--;
          months += 12;
        }
  
        // Format the result
        let parts = [];
        if (years > 0) {
          parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
        }
        if (months > 0) {
          parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
        }
  
        let result;
        if (parts.length > 0) {
          result = parts.join(' and ');
        } else {
          result = 'Less than a month';
        }
  
        setTimeDifference(result);
      };
  
      calculateDifference();
    }, [givenDate]);
  
    return (
        <>{timeDifference || 'Calculating...'}</>
    );
  };


// const DateCalculator = ({ givenDate }) => {
//   const [timeDifference, setTimeDifference] = useState('');

//   useEffect(() => {
//     const calculateDifference = () => {
//       const currentDate = new Date();
//       console.log(currentDate);
      
//       const startDate = new Date(givenDate);

//       let years = currentDate.getFullYear() - startDate.getFullYear();
//       let months = currentDate.getMonth() - startDate.getMonth();

//       if (months < 0) {
//         years--;
//         months += 12;
//       }

//       // Format the result as a string
//       let result = '';
//       if (years > 0) {
//         result += `${years} ${years === 1 ? 'year' : 'years'}`;
//       }
//       if (months > 0) {
//         if (years > 0) {
//           result += ' and ';
//         }
//         result += `${months} ${months === 1 ? 'month' : 'months'}`;
//       }

//       // Handle case where the difference is less than a month
//       if (years === 0 && months === 0) {
//         result = 'Less than a month';
//       }

//       setTimeDifference(result);
//     };

//     calculateDifference();
//   }, [givenDate]);

//   return ( <> {timeDifference} </>);
// };

export default DateCalculator;