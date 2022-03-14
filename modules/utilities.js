function formatNumber (number) {
    if (!Number.isInteger(number)){
      const arrNum = number.toString().split('.');
      const formattedNum = Number(arrNum[0]).toLocaleString() + '.' + arrNum[1];
      return formattedNum;
    } else {
      return number.toLocaleString();
    }
  };
  
  export { formatNumber };