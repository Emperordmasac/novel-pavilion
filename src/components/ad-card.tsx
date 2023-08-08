import Link from "next/link";
import Image from "next/image";

const AdCard = () => {
  return (
    <div className="w-[740px] mr-[20px] flex-shrink-[0]">
      <article className="h-[248px] mt-[8px]">
        <Link href="/">
          {/* background design */}
          <div>
            <div>
              {/* background image */}
              <div>
                <Image src="" alt="" />
              </div>
              {/* background styling */}
              <div></div>
            </div>
          </div>
          {/* dont know what you are doing yet */}
          <div>
            <div></div>
          </div>
          {/* background image */}
          <div>
            <div>
              <div>
                <Image src="" alt="" />
              </div>
            </div>
          </div>
          {/* inner details */}
          <div>
            <div>
              {/* novel title */}
              <p>novel title</p>
              {/* novel rating */}
              <div>
                {/* novel rating info */}
                <span></span>
                {/* novel status */}
                <span></span>
              </div>
              {/* novel short description */}
              <p>short desccription of novel</p>
            </div>
          </div>
        </Link>
      </article>
    </div>
  );
};

export default AdCard;
