import Image from "next/image";
import {
  Search,
  Home,
  User,
  CalendarDays,
  MessageSquare,
  Tag,
} from "lucide-react";

const HomeBlogLists = [
  {
    blogImage: "/assets/Ourlegacy.png",
    author: "admin",
    dudate: "April 7, 2025",
    tagsName: "Seo Marketing",
    title: "Simple ways to Optimize Website For SEO",
    descript: `SEO Grow Your Business with Our SEO Agency on the search engine's
            results page, This means that when your target customers search for
            products and services that your industry offers to find your
            website. Implementing SEO strategies help you to rank higher on the
            search engine's results page (SERP). This means that when your
            target […]`,
  },
  {
    blogImage: "/assets/Ourlegacy.png",
    author: "admin",
    dudate: "April 9, 2025",
    tagsName: "Web Development",
    title: "Simple ways to Optimize Website For SEO",
    descript: `SEO Grow Your Business with Our SEO Agency on the search engine's
            results page, This means that when your target customers search for
            products and services that your industry offers to find your
            website. Implementing SEO strategies help you to rank higher on the
            search engine's results page (SERP). This means that when your
            target […]`,
  },
  {
    blogImage: "/assets/Ourlegacy.png",
    author: "admin",
    dudate: "April 10, 2025",
    tagsName: "Logo Design",
    title: "Simple ways to Optimize Website For SEO",
    descript: `SEO Grow Your Business with Our SEO Agency on the search engine's
            results page, This means that when your target customers search for
            products and services that your industry offers to find your
            website. Implementing SEO strategies help you to rank higher on the
            search engine's results page (SERP). This means that when your
            target […]`,
  },
];

const Icons = [
  <User key={"icon1"} className="h-3.5 w-3.5" />,
  <CalendarDays key={"icon2"} className="h-3.5 w-3.5" />,
  <Tag key={"icon3"} className="h-3.5 w-3.5" />,
];

export default function HomeBlog() {
  return (
    <section className="flex items-center p-16 gap-10">
      <div className="w-3/6 space-y-8">
        <h4 className="font-semibold uppercase mb-0 text-[#00b1dc]">
          Blog Post
        </h4>
        <h2 className="text-5xl font-bold">Our latest Blogs & Articles</h2>
        <p className="pr-6 border-l-4 py-2 pl-4 border-[#00b1dc]">
          Our campaigns get your business in front of the right people at the
          right time to increase organic traffic and boost engagement.
        </p>
        <div>
          <button className="uppercase text-2xl font-semibold rounded-2xl text-white py-3 px-6 bg-sky-600">
            see all blog
          </button>
        </div>
      </div>
      <div className="w-2/5 space-y-7 group relative">
        {HomeBlogLists.map((list, i) => (
          <div
            key={i}
            className={`flex relative transform duration-300 bg-white ${
              i === 0
                ? "top-4  hover:scale-105"
                : i === 1
                ? "left-12  group-hover:left-0 z-10 hover:scale-105"
                : "bottom-4 hover:scale-105"
            } gap-5 p-6 shadow-[0_2px_60px] shadow-gray-300 rounded-2xl`}
          >
            <div className="w-2/5 h-[150px] image-anime relative group overflow-hidden  rounded-2xl">
              <Image
                src={list.blogImage} //outb Local image (stored in public/)
                alt={list.title}
                fill
                className="group-hover:scale-105 object-cover duration-300"
              />
            </div>
            <div className="w-3/5 space-y-5">
              <ul className="flex gap-x-8 gap-y-2 flex-wrap text-[12px]">
                {Icons.map((icon, idx) => (
                  <li key={idx} className="flex  items-center gap-1">
                    <i className="text-[#00b1dc]">{icon}</i>
                    <span className="uppercase">
                      {icon.key === "icon1"
                        ? list.author
                        : icon.key === "icon2"
                        ? list.dudate
                        : list.tagsName}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="cursor-pointer hover:underline text-xl font-semibold hover:text-[#00b1dc]"
              >
                {list.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
