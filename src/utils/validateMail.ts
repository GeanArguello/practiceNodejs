
const validateMail = ( email:any, res:any) =>{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!validRegex.test(email)){
        return res.status(400).json({
            message: 'Email incorrecto'
        });
    };

}

export default validateMail;