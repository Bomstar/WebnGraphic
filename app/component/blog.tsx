import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Home,
  ChevronRight,
  User,
  Calendar,
  MessageSquare,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const recentPosts = [
  {
    id: 1,
    title: "Simple Ways To Optimize Website For SEO",
    date: "APR 07, 2024",
    image: "/placeholder.svg?height=80&width=80",
    slug: "simple-ways-to-optimize-website-for-seo",
  },
  {
    id: 2,
    title: "How Chatbots Can Help You Drive More Sales",
    date: "APR 07, 2024",
    image: "/placeholder.svg?height=80&width=80",
    slug: "how-chatbots-can-help-you-drive-more-sales",
  },
  {
    id: 3,
    title: "The Basics Of Running A Successful SEO Campaign",
    date: "APR 05, 2024",
    image: "/placeholder.svg?height=80&width=80",
    slug: "the-basics-of-running-a-successful-seo-campaign",
  },
];

const blogPosts = [
  {
    id: 1,
    title: "Simple Ways To Optimize Website For SEO",
    excerpt:
      "SEO Grow Your Business with Our SEO Agency on the search engine's results page. This means that when your target customers search for products and services that your industry offers to find your website. Implementing SEO strategies help you to rank higher on the search engine's results page (SERP).",
    date: "APRIL 7, 2024",
    author: "ADMIN",
    comments: 3,
    category: "MARKETING",
    image: "/placeholder.svg?height=500&width=800",
    slug: "simple-ways-to-optimize-website-for-seo",
  },
  {
    id: 2,
    title: "How Chatbots Can Help You Drive More Sales",
    excerpt:
      "Chatbots are revolutionizing the way businesses interact with customers online. By providing instant responses and personalized assistance, chatbots can significantly improve customer experience and drive conversions. Learn how implementing AI-powered chatbots can boost your sales.",
    date: "APRIL 7, 2024",
    author: "ADMIN",
    comments: 5,
    category: "DIGITAL MARKETING",
    image: "/placeholder.svg?height=500&width=800",
    slug: "how-chatbots-can-help-you-drive-more-sales",
  },
  {
    id: 3,
    title: "The Basics Of Running A Successful SEO Campaign",
    excerpt:
      "Running a successful SEO campaign requires careful planning, execution, and monitoring. From keyword research to content optimization and link building, there are several components that need to work together. This guide covers the essential elements of an effective SEO strategy.",
    date: "APRIL 5, 2024",
    author: "ADMIN",
    comments: 2,
    category: "SEO",
    image: "/placeholder.svg?height=500&width=800",
    slug: "the-basics-of-running-a-successful-seo-campaign",
  },
];

export default function BlogClassic() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-orange-50">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-orange-100/30 rounded-bl-[100px] -z-10"></div>

      {/* Header/Navigation */}
      <header className="container mx-auto py-5 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-10 mr-2">
                <div className="absolute h-8 w-8 bg-orange-200 rounded-md transform rotate-45"></div>
                <div className="absolute h-8 w-8 bg-orange-300 rounded-md transform rotate-45 top-2 left-2"></div>
              </div>
              <span className="text-2xl font-semibold text-gray-700">
                Seoland
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-orange-500 flex items-center"
            >
              Home <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
            <Link
              href="/pages"
              className="text-gray-600 hover:text-orange-500 flex items-center"
            >
              Pages <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
            <Link
              href="/shop"
              className="text-gray-600 hover:text-orange-500 flex items-center"
            >
              Shop <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-orange-500 flex items-center"
            >
              Services <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-600 hover:text-orange-500 flex items-center"
            >
              Portfolio <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
            <Link
              href="/news"
              className="text-gray-600 hover:text-orange-500 flex items-center"
            >
              News <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-600 hover:text-orange-500 flex items-center"
            >
              Contact Us <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </nav>

          <div className="flex items-center">
            <div className="bg-orange-500 text-white rounded-full h-10 w-10 flex items-center justify-center mr-2">
              <span className="text-sm">2</span>
            </div>
            <Button className="bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 mr-2">
              Let&apos;s Chat <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </Button>
          </div>
        </div>
      </header>

      {/* Page Title */}
      <section className="py-16 text-center relative">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Blog Classic
        </h1>
        <div className="flex items-center justify-center text-sm">
          <Link
            href="/"
            className="text-gray-600 hover:text-orange-500 flex items-center"
          >
            <Home className="h-4 w-4 mr-1" /> Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-orange-500">Blog Classic</span>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Posts */}
          <div className="w-full lg:w-2/3">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-sm mb-10 overflow-hidden"
              >
                <div className="relative h-[400px] w-full">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                    priority={post.id === 1}
                  />
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1 text-orange-500" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-orange-500" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1 text-orange-500" />
                      <span>{post.comments} COMMENTS</span>
                    </div>
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 mr-1 text-orange-500" />
                      <span>{post.category}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 hover:text-orange-500 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium hover:from-orange-500 hover:to-orange-600 transition-all"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center mt-10">
              <div className="flex space-x-2">
                <Button variant="outline" className="h-10 w-10 p-0 rounded-md">
                  1
                </Button>
                <Button
                  variant="outline"
                  className="h-10 w-10 p-0 rounded-md text-gray-500"
                >
                  2
                </Button>
                <Button
                  variant="outline"
                  className="h-10 w-10 p-0 rounded-md text-gray-500"
                >
                  3
                </Button>
                <Button
                  variant="outline"
                  className="h-10 w-10 p-0 rounded-md text-gray-500"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            {/* Search */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search Here"
                  className="pr-10 border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                />
                <Button className="absolute right-0 top-0 h-full rounded-l-none bg-orange-500 hover:bg-orange-600">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Recent Post
                <span className="w-2 h-2 bg-orange-500 rounded-full ml-2"></span>
              </h3>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex gap-4">
                    <div className="relative h-20 w-20 flex-shrink-0">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover rounded-md"
                        sizes="80px"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium hover:text-orange-500 transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Categories
                <span className="w-2 h-2 bg-orange-500 rounded-full ml-2"></span>
              </h3>
              <ul className="space-y-3">
                <li className="border-b border-gray-100 pb-2">
                  <Link
                    href="#"
                    className="flex justify-between items-center hover:text-orange-500 transition-colors"
                  >
                    <span>SEO Marketing</span>
                    <span className="text-gray-500">(15)</span>
                  </Link>
                </li>
                <li className="border-b border-gray-100 pb-2">
                  <Link
                    href="#"
                    className="flex justify-between items-center hover:text-orange-500 transition-colors"
                  >
                    <span>Digital Marketing</span>
                    <span className="text-gray-500">(23)</span>
                  </Link>
                </li>
                <li className="border-b border-gray-100 pb-2">
                  <Link
                    href="#"
                    className="flex justify-between items-center hover:text-orange-500 transition-colors"
                  >
                    <span>Social Media Marketing</span>
                    <span className="text-gray-500">(18)</span>
                  </Link>
                </li>
                <li className="border-b border-gray-100 pb-2">
                  <Link
                    href="#"
                    className="flex justify-between items-center hover:text-orange-500 transition-colors"
                  >
                    <span>Content Marketing</span>
                    <span className="text-gray-500">(12)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex justify-between items-center hover:text-orange-500 transition-colors"
                  >
                    <span>Web Development</span>
                    <span className="text-gray-500">(7)</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Tags
                <span className="w-2 h-2 bg-orange-500 rounded-full ml-2"></span>
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="#"
                  className="px-4 py-2 bg-gray-100 rounded-md text-sm hover:bg-orange-500 hover:text-white transition-colors"
                >
                  SEO
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 bg-gray-100 rounded-md text-sm hover:bg-orange-500 hover:text-white transition-colors"
                >
                  Marketing
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 bg-gray-100 rounded-md text-sm hover:bg-orange-500 hover:text-white transition-colors"
                >
                  Digital
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 bg-gray-100 rounded-md text-sm hover:bg-orange-500 hover:text-white transition-colors"
                >
                  Content
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 bg-gray-100 rounded-md text-sm hover:bg-orange-500 hover:text-white transition-colors"
                >
                  Development
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 bg-gray-100 rounded-md text-sm hover:bg-orange-500 hover:text-white transition-colors"
                >
                  Strategy
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 bg-gray-100 rounded-md text-sm hover:bg-orange-500 hover:text-white transition-colors"
                >
                  Analytics
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
