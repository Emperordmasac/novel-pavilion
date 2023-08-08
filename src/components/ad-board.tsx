import AdCard from "./ad-card";

const AdBoard = () => {
  return (
    <article>
      <div className="relative z-[1] p-0 overflow-hidden px-[8px] mx-[-8px]">
        <div className="relative w-full h-full flex z-[1]">
          {/* ad card */}
          <AdCard />
        </div>
      </div>
    </article>
  );
};

export default AdBoard;
