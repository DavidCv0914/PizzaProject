import nodemailer from "nodemailer";


interface IMensaje {
  from: string;
  to: string;
  subject: string;
  html: string;
}
class Nodemailer {
 
  config = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'facejob1010@gmail.com',
      pass: 'crhapfunhfsaarzn',
    },
  };

  constructor() {
    
  }

  async sendEmail(email: string, cod: number, men: number) {

    let mensaje: IMensaje;
  
    if (men === 1) {
      mensaje = {
        from: 'facejob1010@gmail.com',
        to: email,
        subject: 'Recuperar Contraseña de usuario',
        html: `Su código es: ${cod}`,
      };
    } else{
      mensaje = {
        from: 'facejob1010@gmail.com',
        to: email,
        subject: 'Recuperar Contraseña de usuario FACE_JOB',
        html: `<img src="https://res.cloudinary.com/de2sdukuk/image/upload/v1681737706/posts/compra_wpgjk9.jpg" alt="">`,
      };
    }
    return await this.sendText(mensaje);
  }

  async sendText(mensaje:IMensaje){
    const transporter = nodemailer.createTransport(this.config);
  
    const info = await transporter.sendMail(mensaje);
    return info
  }

}

export const sendNodemailer = new Nodemailer();
