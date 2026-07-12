

import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function Whatsapp() {
 return (
   <div>
     <FloatingWhatsApp
       phoneNumber="+62895629540686"
       accountName="Hawi"
       avatar="https://th.bing.com/th/id/OIP.Pa8EVfDVKkr1vZJsLjSHFwHaHa?w=182&h=182&c=7&r=0&o=7&pid=1.7&rm=3"
       //https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg --> this is default profile
       statusMessage="Typically replies within 1 hour"
       chatMessage="Halo dengan Hawi disini ada yang bisa saya bantu 😊"
       placeholder="Type a message.."
       darkMode={true}
       notification={true}
       notificationDelay={60}
     />
   </div>
 );
}