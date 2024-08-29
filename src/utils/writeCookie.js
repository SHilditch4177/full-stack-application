function writeCookie(jey,value,day){
    let expiryDate=new Date();
    days=days||7;
    expiryDate.setDate(expiryDate.getDate()+days);

    let displayCookie =document.cookie=key + "=" + value + ";" + "expiers=" + 
    expiryDate.toGMTString() + ";" + "path=/"
    console.log(displayCookie);
}
export default writeCookie;