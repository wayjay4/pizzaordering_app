import SectionHeaders from "@/app/components/SectionHeaders";

const AboutUs = () => {
    return (
        <section className={"text-center my-16"}>
            <SectionHeaders mainHeader={"Our Story"} subHeader={"About us"} />
            <div className={"text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4"}>
                <p>
                    Lorem espsumLorem espsumLorem espsumLorem espsumLorem espsumLorem
                    espsumLorem espsumLorem espsumLorem espsumLorem espsum
                </p>
                <p>
                    Lorem espsumLorem espsumLorem espsumLorem espsumLorem espsumLorem
                    espsumLorem espsumLorem espsumLorem espsumLorem espsum
                </p>
                <p>
                    Lorem espsumLorem espsumLorem espsumLorem espsumLorem espsumLorem
                    espsumLorem espsumLorem espsumLorem espsumLorem espsum
                </p>
            </div>
        </section>
    );
};

export default AboutUs;