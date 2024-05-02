import SectionHeaders from "@/app/components/SectionHeaders";

const ContactUs = () => {
    return (
        <section className={"text-center my-8"}>
            <SectionHeaders mainHeader={"Don't hesitate"} subHeader={"Contact us"} />
            <div className={"mt-8"}>
                <a href={"+19286008807"} className={"text-4xl underline text-gray-500"}>
                    +1 928 600 8807
                </a>
            </div>
        </section>
    );
};

export default ContactUs;