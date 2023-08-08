function isWalletOld(dateString:string):boolean {

    const currentDate = new Date();
    const givenDate = new Date(dateString);
  
    const differenceInMilliseconds = currentDate.getTime() - givenDate.getTime();


    const oneYearInMilliseconds = 365 * 24 * 60 * 60 * 1000;
    const isOld = differenceInMilliseconds > oneYearInMilliseconds;
  
    return isOld;
  }

  export { isWalletOld }