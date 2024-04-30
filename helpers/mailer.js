import nodeMailer from 'nodemailer'

const transporter = nodeMailer.createTransport({
    host:process.env.SMTP_HOST,
    port:process.env.SMTP_PORT,
    secure:false,
    requireTLS:true,
    auth:{
        user:process.env.SMTP_MAIL,
        pass:process.env.SMTP_PASWORD
    }
}) 

const sendMail = (mail, subject, content)=>{
    try{
        const mailOptions = {
            from:process.env.SMTP_MAIL,
            to:mail,
            subject:subject,
            text:content
        } 
        transporter.sendMail(mailOptions,(err,info)=>{
            if(err){
                console.log(err)
            }
            console.log('Mail sent : ', info.messageId)
        })
    }catch(err){
        console.log('Mail error : ',err.message)
    }
}
export default sendMail