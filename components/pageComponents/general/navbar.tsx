import MainButton from "@/components/lib/mainButton";
import SecondaryButton from "@/components/lib/secondaryButton";
import { useRouter } from "next/router";





const Navbar = () => {
    const router = useRouter()
    return(
        <nav className="flex items-center z-10 justify-between p-[20px_40px] w-full absolute top-0">
            <SecondaryButton title="login" actionFunc={() => {
                router.push('/login')
            }} />
            <MainButton title="Join Now" actionFunc={() => {
                router.push('/signup')
            }} />
        </nav>
    )

}

export default Navbar;