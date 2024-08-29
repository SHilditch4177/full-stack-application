function readCookies(key){
    const cookieRegEx=new RegExp(`?<=${key}=)[^;]*`);
    try {
        let token =document.cookie.match(cookieregEx)[0];
        return token;
    } catch (error) {
        console.log(error);
        return false
        
    }
}
export default readCookies;