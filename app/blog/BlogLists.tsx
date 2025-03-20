"use client";

import Image from "next/image";
import { User, CalendarDays, Tag, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BlogLists = [
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
  {
    blogImage: "/assets/Ourlegacy.png",
    author: "admin",
    dudate: "March 11, 2024",
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
  {
    blogImage: "/assets/Ourlegacy.png",
    author: "admin",
    dudate: "March 11, 2024",
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
  {
    blogImage: "/assets/Ourlegacy.png",
    author: "admin",
    dudate: "March 11, 2024",
    tagsName: "Seo Marketing",
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

const PopularPosts = [
  {
    title: "How to Improve Your Website's SEO",
    date: "March 15, 2025",
    image: "/assets/Ourlegacy.png",
  },
  {
    title: "10 Web Design Trends for 2025",
    date: "March 20, 2025",
    image: "/assets/Ourlegacy.png",
  },
  {
    title: "The Importance of Mobile-First Design",
    date: "March 25, 2025",
    image: "/assets/Ourlegacy.png",
  },
];

const Categories = [
  { name: "SEO Marketing", count: 15 },
  { name: "Web Development", count: 23 },
  { name: "Logo Design", count: 7 },
  { name: "Digital Marketing", count: 19 },
  { name: "UI/UX Design", count: 12 },
];

export default function BlogPosts() {
  return (
    <section className="container">
      <div className="flex flex-col lg:flex-row p-16 gap-8">
        {/* Blog Posts */}
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BlogLists.map((item, i) => (
              <Card
                key={i}
                className="overflow-hidden p-5 border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-full h-[220px] rounded-xl overflow-hidden relative">
                  <Image
                    src={item.blogImage || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-0">
                  <ul className="flex flex-wrap gap-3 text-xs !text-[#009dff] mb-2">
                    {Icons.map((icon, idx) => (
                      <li key={idx} className="flex  items-center gap-1">
                        <i>{icon}</i>
                        <span className="uppercase">
                          {icon.key === "icon1"
                            ? item.author
                            : icon.key === "icon2"
                            ? item.dudate
                            : item.tagsName}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-xl font-bold line-clamp-2 hover:text-primary transition-colors">
                    <a href="#" className="hover:underline">
                      {item.title}
                    </a>
                  </h3>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {item.descript}
                  </p>
                </CardContent>
                <CardFooter className="p-0">
                  <Button className="bg-gradient-to-r from-[#3a33ff] to-[#64E9FF] hover:opacity-90 transition-opacity">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3 relative ">
          {/* Search Bar */}
          <div className="sticky w-full top-10 z-10 space-y-8">
            <Card className="overflow-hidden  border-0 shadow-[0px_0px_100px_15px_rgba(0,0,0,0.05)] p-7">
              <CardContent className="p-0 border-0 shadow-none">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search blog posts..."
                    className="border-0 p-6 shadow-none bg-[#f6fbff]"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute px-6 rounded-l-none right-0 bg-gradient-to-r from-[#3a33ff] to-[#64E9FF] hover:opacity-90 transition-opacity top-0 h-full"
                  >
                    <Search className="h-4 text-white font-semibold w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card className="border-0 shadow-[0px_0px_100px_15px_rgba(0,0,0,0.05)]">
              <CardHeader>
                <h3 className="text-xl font-bold">Popular Posts</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {PopularPosts.map((post, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover rounded-md"
                        sizes="80px"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium line-clamp-2 hover:text-primary transition-colors">
                        <a href="#" className="hover:underline">
                          {post.title}
                        </a>
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {post.date}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="border-0 shadow-[0px_0px_100px_15px_rgba(0,0,0,0.05)]">
              <CardHeader>
                <h3 className="text-xl font-bold">Categories</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {Categories.map((category, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <a
                        href="#"
                        className="hover:text-primary transition-colors hover:underline"
                      >
                        {category.name}
                      </a>
                      <Badge variant="secondary">{category.count}</Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
