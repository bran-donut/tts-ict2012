export default function MainHeader({ heading, description, details }) {
    return (
        <section className="p-4 px-8 text-white from-[#10141A] to-[#171D26] bg-gradient-to-br">
            {/* <div className="px-4 py-2 text-white"> */}
            <div className="text-white">
                <div className="py-3">
                    <h2 className="text-[40px] font-semibold">{heading}</h2>
                    <p className="text-[#BDBDBD]">{description}</p>
                </div>
                {details &&
                    <div className="flex flex-col mt-2 gap-14 sm:gap-20 sm:flex-row">
                        {details.map((detail, i) => (
                            <div key={i}>
                                <p className="text-[#E0E0E0] text-sm">{detail.title}</p>
                                <p className="mt-3 text-[#BDBDBD] text-sm">{detail.subtitle}</p>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </section>
    )
}