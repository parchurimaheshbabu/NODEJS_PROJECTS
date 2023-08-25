var nm =require('nodemailer');
var transporter=nm.createTransport(
    {
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth:{
            user:'paruchurimahesh773@gmail.com',
            pass:'owkskcdvbjfhxkbn'
        }
    }
);
var options={
from:'paruchurimahesh773@gmail.com',
to:'bobparchuri@gmail.com',
subject:'welcome to nodemailer',
html:`<h2>hi mahesh</h2><img src='cid:mahesh' width='200px'><button>Click Here</button>
`,
attachments:[
    {
filename:'rakshabandan.jpeg',
path:"https://media.istockphoto.com/id/1257015025/photo/indian-festival-raksha-bandhan-with-rakhi-bracelets-presents-rice-and-kumkum-in-bowls-copy.jpg?s=2048x2048&w=is&k=20&c=CO6ibwOi2ItQMiUrYlpxjxOcGDemEiO-mZmEnF84I-Q=",
cid:'food'
    }
]
    
}
transporter.sendMail( options,function(error,info){
if (error){
    console.log(error);
}
else{
    console.log('sent successfully');
}
    }
)