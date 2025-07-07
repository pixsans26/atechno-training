'use client'
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Logo from "./icons.png";

const Whatsapp = () => {
    return (
        <FloatingWhatsApp
            phoneNumber='+91 9890192979'
            accountName='Atechno Embedded'
            notification
            avatar={Logo.src}
            notificationSound
            chatMessage='Build Skills. Build confidance'
        />
    )
}

export default Whatsapp