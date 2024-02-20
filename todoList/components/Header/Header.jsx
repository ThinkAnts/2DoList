import { s } from "./Header.style"
import logoImg from "../../assets/logo.png"
import { Text, Image } from "react-native"


export function Header() {
    return (
    <>
     <Image style={s.img} source={logoImg} resizeMode="contain" />
     <Text style={s.subTitle}>You probably have something to do</Text>
    </>
    )
}