import './style.css';
import Anchor from "../../atoms/anchor/Anchor"
import Image from "../../atoms/image/Image"

export default function Logo(){
    return(
            <Anchor url="http://localhost:3000" >
                <Image src="/images/newsY.png" className="border-white-1px" width={18} height={18} alt="logo" />
            </Anchor>
    )
}