

import { FloatingWhatsApp } from 'react-floating-whatsapp';
export default function Whatsapp() {
 return (
   <div>
     <FloatingWhatsApp
       phoneNumber="+62895629540686"
       accountName="Hawi"
       avatar="../assets/profile.webp"
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