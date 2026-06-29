

import { FloatingWhatsApp } from 'react-floating-whatsapp';
export default function Whatsapp() {
 return (
   <div>
     <FloatingWhatsApp
       phoneNumber="+6289524137502"
       accountName="Hawi"
       avatar="/src/assets/profile.webp"
       statusMessage="Typically replies within 1 hour"
       chatMessage="Halo dengan Hawi disini ada yang bisa saya bantu 😊"
       placeholder="Type a message.."
       darkMode={false}
       notification={true}
       notificationDelay={60}
     />
   </div>
 );
}