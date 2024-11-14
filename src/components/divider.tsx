interface DividerProps {
  text?: string;
}

const Divider = ({ text }: DividerProps) => {
  return (
    <div className="flex items-center justify-center bg-black pb-4 gap-4 pt-5">
      {/* Small circles */}
      <div className="w-4 h-4 rounded-full bg-[#fd9204] opacity-80"></div>

      {/* Left Triangle */}
      <div className="w-4 h-4 bg-[#fd9204] transform rotate-45 opacity-80"></div>

      {/* Optional center text */}
      {text && (
        <span className="px-4 text-[#fd9204] font-semibold uppercase opacity-90 text-sm tracking-wider">
          {text}
        </span>
      )}

      {/* Right Triangle */}
      <div className="w-4 h-4 bg-[#fd9204] transform rotate-45 opacity-80"></div>

      {/* Small circle */}
      <div className="w-4 h-4 rounded-full bg-[#fd9204] opacity-80"></div>
    </div>
  );
};

export default Divider;
