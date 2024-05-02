import Image from "next/image";
import MenuItem from "@/app/components/MenuItem";
import SectionHeaders from "@/app/components/SectionHeaders";

const HeroMenu = () => {
    return (
        <section className={""}>
            <div className={"absolute w-full left-0 right-0 justify-start"}>
                <div className={"absolute left-0 -top-[70px] text-left -z-10"}>
                    <Image
                        src={"/sallad1.png"}
                        alt={"salad"}
                        width={90}
                        height={189}
                    />
                </div>
                <div className={"absolute -top-[100px] right-0 -x-10 -z-10"}>
                    <Image
                        src={"/sallad2.png"}
                        alt={"salad"}
                        width={107}
                        height={195}
                    />
                </div>
            </div>
            <div className={"text-center"}>
                <SectionHeaders mainHeader={"Menu"} subHeader={"Check Out"} />
            </div>
            <div className={"grid grid-cols-3 gap-4 text-center"}>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </section>
    );
};

export default HeroMenu;