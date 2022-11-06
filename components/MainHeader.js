export default function MainHeader({ heading, description, details }) {
    return (
        <section className="p-4 pl-8 text-white from-[#10141A] to-[#171D26] bg-gradient-to-br">
            <div className="text-white">
                <h2 className="text-5xl font-semibold">{heading}</h2>
                <p className="text-[#BDBDBD]">{description}</p>
                {details &&
                    <div className="flex flex-col gap-10 mt-10 sm:gap-20 sm:flex-row">
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