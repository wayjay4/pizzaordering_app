import Link from "next/link";
import CustomButton from "@/app/components/CustomButton";

const Header = () => {
    function handleClick(){
        // do nothing
    }

    return (
        <header className={"flex justify-between items-center"}>
            <Link href={""} className={"text-primary font-semibold text-2xl"}>
                ST PIZZA
            </Link>
            <nav className={"flex gap-8 items-center text-gray-500 font-semibold"}>
                <Link href={""}>Home</Link>
                <Link href={""}>Menu</Link>
                <Link href={""}>About</Link>
                <Link href={""}>Contact</Link>
                <Link href={""}>
                    <CustomButton
                        title={"Login"}
                        btnType={"button"}
                    />
                </Link>
            </nav>
        </header>
    );
};

export default Header;