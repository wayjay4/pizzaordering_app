import Image from "next/image";
import CustomButton from "@/app/components/CustomButton";
import RightArrow from "@/app/components/icons/RightArrow";

const Hero = () => {
    return (
        <section className={"hero"}>
            <div className={"py-12"}>
                <h1 className={"text-4xl font-semibold"}>
                    Everything <br />
                    is better <br />
                    with a <span className={"text-primary"}>Pizza</span>
                </h1>
                <p className={"my-4 text-gray-500 text-sm"}>
                    Pizza is the missing piece that makes every day complete,
                    a simple yet delicious joy in line.
                </p>
                <div className={"flex gap-4"}>
                    <CustomButton title={"Order Now"} rightIcon={<RightArrow containerStyle={"w-10 h-10"} />} containerStyle={"px-3 text-sm"} textStyles={"uppercase"} />
                    <CustomButton title={"Learn More"} rightIcon={<RightArrow containerStyle={"w-10 h-10"} />} containerStyle={"px-3 bg-transparent"} textStyles={"text-gray-600 text-semibold"} />
                </div>
            </div>
            <div className={"relative"}>
                <Image
                    src={"/pizza.png"}
                    alt={"pepperoni pizza"}
                    layout={"fill"}
                    objectFit={"contain"}
                />
            </div>
        </section>
    );
};

export default Hero;