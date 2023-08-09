import Link from "next/link";

const Hero = () => {
  const novels = [
    {
      title: "To Kill a Mockingbird",
      description:
        "A novel set in the American South during the Great Depression, addressing issues of racial inequality and moral growth.",
    },
    {
      title: "1984",
      description:
        "A dystopian novel portraying a totalitarian society ruled by the Party and its leader, Big Brother.",
    },
    {
      title: "Pride and Prejudice",
      description:
        "A classic romance novel exploring themes of societal norms, love, and personal growth.",
    },
    {
      title: "The Great Gatsby",
      description:
        "A story of the decadence and excess of the Jazz Age, told through the eyes of Nick Carraway.",
    },
    {
      title: "Brave New World",
      description:
        "A story of the decadence and excess of the Jazz Age, told through the eyes of Nick Carraway.",
    },
    {
      title: "To Kill a Mockingbird",
      description:
        "A novel set in the American South during the Great Depression, addressing issues of racial inequality and moral growth.",
    },
    {
      title: "1984",
      description:
        "A dystopian novel portraying a totalitarian society ruled by the Party and its leader, Big Brother.",
    },
    {
      title: "Pride and Prejudice",
      description:
        "A classic romance novel exploring themes of societal norms, love, and personal growth.",
    },
    {
      title: "The Great Gatsby",
      description:
        "A story of the decadence and excess of the Jazz Age, told through the eyes of Nick Carraway.",
    },
    {
      title: "Brave New World",
      description:
        "A story of the decadence and excess of the Jazz Age, told through the eyes of Nick Carraway.",
    },
    {
      title: "To Kill a Mockingbird",
      description:
        "A novel set in the American South during the Great Depression, addressing issues of racial inequality and moral growth.",
    },
    {
      title: "1984",
      description:
        "A dystopian novel portraying a totalitarian society ruled by the Party and its leader, Big Brother.",
    },
  ];

  return (
    <div className="flex py-[36px]">
      <div className="p-2 m-2 bg-gray-300 h-[396px] w-[365px] border border-gray-300 l_g:hidden">
        <p>The Great Ruler</p>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {novels.map((novel, i) => (
          <Link
            href={`${novel.title}`}
            key={i}
            className="p-2 m-2 bg-gray-300 border border-gray-300 h-[192px] w-[129px] text-[#000]"
          >
            <p>{novel.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

const novelsData = [
  {
    title: "The Adventure Begins",
    genre: "Adventure",
    chapter: 15,
    time: "2h 30m",
  },
  { title: "Mystery Mansion", genre: "Mystery", chapter: 8, time: "1h 45m" },
  { title: "Fantasy Realm", genre: "Fantasy", chapter: 23, time: "3h 15m" },
  {
    title: "Sci-Fi Odyssey",
    genre: "Science Fiction",
    chapter: 12,
    time: "2h",
  },
  {
    title: "Historical Chronicles",
    genre: "Historical Fiction",
    chapter: 18,
    time: "2h 45m",
  },
  { title: "Romantic Escapade", genre: "Romance", chapter: 6, time: "1h 15m" },
  { title: "Epic Quest", genre: "Fantasy", chapter: 30, time: "4h" },
  {
    title: "Intriguing Secrets",
    genre: "Mystery",
    chapter: 10,
    time: "1h 30m",
  },
  {
    title: "Time Traveler's Diary",
    genre: "Sci-Fi",
    chapter: 14,
    time: "2h 15m",
  },
  {
    title: "Love Across Dimensions",
    genre: "Romance",
    chapter: 9,
    time: "1h 45m",
  },
];

export const NovelTable = () => {
  return (
    <div className="text-[#fff] w-full py-[36px] ">
      <h2 className="mb-4 text-xl font-semibold">Latest Release</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-4 py-2 text-sm font-semibold text-left">Title</th>
            <th className="px-4 py-2 text-sm font-semibold text-left">Genre</th>
            <th className="px-4 py-2 text-sm font-semibold text-left">
              Chapter
            </th>
            <th className="px-4 py-2 text-sm font-semibold text-left">Time</th>
          </tr>
        </thead>
        <tbody>
          {novelsData.map((novel, index) => (
            <tr key={index}>
              <td className="px-4 py-2">{novel.title}</td>
              <td className="px-4 py-2">{novel.genre}</td>
              <td className="px-4 py-2">{novel.chapter}</td>
              <td className="px-4 py-2">{novel.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const novels = [
  {
    title: "To Kill a Mockingbird",
    description:
      "A novel set in the American South during the Great Depression, addressing issues of racial inequality and moral growth.",
  },
  {
    title: "1984",
    description:
      "A dystopian novel portraying a totalitarian society ruled by the Party and its leader, Big Brother.",
  },
  {
    title: "Pride and Prejudice",
    description:
      "A classic romance novel exploring themes of societal norms, love, and personal growth.",
  },
  {
    title: "The Great Gatsby",
    description:
      "A story of the decadence and excess of the Jazz Age, told through the eyes of Nick Carraway.",
  },
  {
    title: "Brave New World",
    description:
      "A story of the decadence and excess of the Jazz Age, told through the eyes of Nick Carraway.",
  },
  {
    title: "To Kill a Mockingbird",
    description:
      "A novel set in the American South during the Great Depression, addressing issues of racial inequality and moral growth.",
  },
  {
    title: "Brave New World",
    description:
      "A story of the decadence and excess of the Jazz Age, told through the eyes of Nick Carraway.",
  },
];

export const Novel = () => {
  return (
    <div className="py-[36px]">
      <h2 className="mb-4 text-xl font-semibold text-[#fff]">
        Popular This Week
      </h2>
      <div className="flex flex-wrap items-center">
        {novels.map((novel, i) => (
          <Link
            href={`${novel.title}`}
            key={i}
            className="p-2 m-2 bg-gray-300 border border-gray-300 h-[192px] w-[129px] text-[#000]"
          >
            <p>{novel.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hero;
