export default function Calendar({ equipments, year, month }) {
  const daysInMonth = new Date(year, month, 0).getDate();
  return (
    <>
      <div className="grid grid-cols-7 gap-y-1 gap-x-2">
        <p className="bg-[#FFE6E6] w-full text-right pr-4">Su</p>
        <p className="bg-[#FFE6E6] w-full text-right pr-4">Mo</p>
        <p className="bg-[#FFE6E6] w-full text-right pr-4">Tu</p>
        <p className="bg-[#FFE6E6] w-full text-right pr-4">We</p>
        <p className="bg-[#FFE6E6] w-full text-right pr-4">Th</p>
        <p className="bg-[#FFE6E6] w-full text-right pr-4">Fr</p>
        <p className="bg-[#FFE6E6] w-full text-right pr-4">Sa</p>
        {[...Array(daysInMonth)].map((e, i) => (
          <CalendarDay key={i + 1} day={i + 1} />
        ))}
      </div>
    </>
  );
}

export function CalendarDay({ children, date, day, equipments }) {
  return (
    <div className="bg-white h-36">
      <p className="pr-2 text-right text-gray-400">{day}</p>
    </div>
  );
}
