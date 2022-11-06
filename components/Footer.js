export default function Footer(props) {
  return (
    <div
      className={`w-full py-8 text-sm text-center text-gray-400 ${
        props.isLogin ? `bg-inherit absolute bottom-0 left-0` : `from-[#10141A] to-[#171D26] bg-gradient-to-br`
      }`}
    >
      <div className="flex flex-row justify-center gap-5 mb-2">
        <div>Tan Tock Seng Hospital</div>
        <div>National Health Group</div>
      </div>
      <div>Coyright &copy; 2022 Produced by ICT 2102 Human Computer Interactions P1 Team 3 2022</div>
    </div>
  );
}
