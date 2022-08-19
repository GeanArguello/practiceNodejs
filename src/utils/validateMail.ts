
const validateMail = ( email:any, res:any) =>{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const resultEmail = validRegex.test(email);
    return resultEmail;

}

export default validateMail;