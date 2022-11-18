export default function MainHeader({ heading, description, details }) {
    return (
        <section className="p-5 text-white from-[#10141A] to-[#171D26] bg-gradient-to-br">
            <div className="p-5 text-white">
                <h2 className="text-[#BDBDBD] text-5xl font-semibold">{heading}</h2>
                <p className="text-[#BDBDBD] mt-3">{description}</p>
                {details &&
                    <div className="flex flex-col gap-10 mt-12 sm:gap-20 sm:flex-row">
                        {details.map((detail, i) => (
                            <div key={i}>
                                <p className="text-[#E0E0E0]">{detail.title}</p>
                                <p className="mt-3 text-[#BDBDBD]">{detail.subtitle}</p>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </section>
    )
}