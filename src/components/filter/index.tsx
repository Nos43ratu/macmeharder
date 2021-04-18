import React, { useState } from "react";
import Link from "next/link";

const tags = [
  { tag: "Business", path: "/work/business" },
  { tag: "Developer Tools", path: "/work/developer-tools" },
  { tag: "Education", path: "/work/education" },
  { tag: "Entertainment", path: "/work/entertainment" },
  { tag: "Finance", path: "/work/finance" },
  { tag: "Games", path: "/work/games" },
  { tag: "Graphics & Design", path: "/work/graphics-design" },
  { tag: "Health & Fitness", path: "/play/health-fitness" },
  { tag: "Lifestyle", path: "/play/lifestyle" },
  { tag: "Medical", path: "/play/medical" },
  { tag: "Music", path: "/play/music" },
  { tag: "News", path: "/play/news" },
  { tag: "Photo & Video", path: "/play/photo-video" },
  { tag: "Productivity", path: "/play/productivity" },
  { tag: "Reference", path: "/create/reference" },
  { tag: "Safari Extensions", path: "/create/safari-extensions" },
  { tag: "Social Networking", path: "/create/social-networking" },
  { tag: "Sports", path: "/create/sports" },
  { tag: "Travel", path: "/create/travel" },
  { tag: "Utilities", path: "/create/utilities" },
  { tag: "Weather", path: "/create/weather" },
];

const Filter = () => {
  const [tab, setTab] = useState(0);
  const [tag, setTag] = useState("");
  return (
    <section className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 flex items-center justify-center px-48 py-28">
      <div className="bg-gray-900 text-white w-full p-5">
        <h1 className="text-7xl font-black pb-5 px-8">
          Explore Apps for Mac OS
        </h1>
        <div className="flex  pb-5">
          <div className="flex flex-1  border-gray-600 rounded-full border mr-5 font-black text-xl relative">
            <Link href="/work">
              <a
                onClick={() => {
                  setTab(0);
                  setTag("");
                }}
                className={`flex-1 justify-center p-2 flex items-center hover:bg-gray-900 cursor-pointer rounded-full`}
              >
                Work
              </a>
            </Link>
            <Link href="/play">
              <a
                onClick={() => {
                  setTab(1);
                  setTag("");
                }}
                className={`flex-1 justify-center p-2 flex items-center hover:bg-gray-900 cursor-pointer rounded-full`}
              >
                Play
              </a>
            </Link>
            <Link href="/create">
              <a
                onClick={() => {
                  setTab(2);
                  setTag("");
                }}
                className={`flex-1 justify-center p-2 flex items-center hover:bg-gray-900 cursor-pointer rounded-full`}
              >
                Create
              </a>
            </Link>
            <div
              className={`${
                tab === 0 ? "left-0" : tab === 1 ? "left-1/3" : "left-68"
              } absolute rounded-full border-2 border-blue-400 w-48 h-full transition-all duration-150 ease-in-out`}
            />
          </div>
          <div className="flex-1 ml-5">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-900 border px-4 py-3 border-gray-600 focus:bg-white focus:text-black focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent
              "
            />
          </div>
        </div>
        <div className=" flex-wrap flex w-1/2">
          {tags.slice(tab * 7, tab * 7 + 7).map((e) => (
            <Link href={e.path}>
              <a
                onClick={() => setTag(e.tag)}
                className={`${
                  tag === e.tag
                    ? "bg-white text-black hover:bg-white"
                    : "hover:bg-gray-700 transition-all duration-150 ease-in-out"
                } ml-8 mt-2 px-2.5 rounded py-1 text-xl font-black cursor-pointer`}
              >
                {e.tag}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Filter;
