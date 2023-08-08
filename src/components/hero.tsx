import AdBoard from "./ad-board";

const Hero = () => {
  return (
    <div className="flex flex-row w-[100%]">
      {/* ad board --left */}
      <div className="w-[61.66%]">
        <AdBoard />
      </div>
      {/* announcement board --right */}
      <div></div>
    </div>
  );
};

export default Hero;
