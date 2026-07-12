

import { FloatingWhatsApp } from 'react-floating-whatsapp';
import json from "../assets/carbon (1).png"
export default function Whatsapp() {
 return (
   <div>
     <FloatingWhatsApp
       phoneNumber="+62895629540686"
       accountName="Hawi"
       avatar={json}
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