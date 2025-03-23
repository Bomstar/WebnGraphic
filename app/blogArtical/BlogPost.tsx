import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Home,
  User,
  CalendarDays,
  MessageSquare,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Sample blog post data
const blogData = {
  title: "Website For SEO",
  date: "APRIL 7, 2024",
  author: "ADMIN",
  comments: 3,
  category: "MARKETING",
  image: "/assets/Ourlegacy.png",
  content: `
    <p><span class="fristletter">S</span>EO Grow Your Business with Our SEO Agency on the search engine's results page. This means that when your target customers search for products and services that your industry offers to find your website. Implementing SEO strategies help you to rank higher on the search engine's results page (SERP).</p>
    
    <h2>What is SEO and Why is it Important?</h2>
    
    <p>Search Engine Optimization (SEO) is the practice of optimizing your website to increase its visibility when people search for products or services related to your business on search engines like Google, Bing, and Yahoo. The better visibility your pages have in search results, the more likely you are to garner attention and attract prospective and existing customers to your business.</p>
    
    <p>SEO is crucial because:</p>
    
    <ul>
      <li>It helps your target audience find your website</li>
      <li>It builds credibility and trust with your audience</li>
      <li>It provides a competitive advantage</li>
      <li>It supports your content marketing efforts</li>
      <li>It's cost-effective with a high ROI</li>
    </ul>
    
    <h2>Simple Ways to Optimize Your Website for SEO</h2>
    
    <h3>1. Conduct Keyword Research</h3>
    
    <p>Keyword research is the foundation of SEO. It involves identifying the words and phrases that potential customers use when searching for products or services like yours. Tools like Google Keyword Planner, SEMrush, and Ahrefs can help you find relevant keywords with good search volume and manageable competition.</p>
    
    <h3>2. Optimize On-Page Elements</h3>
    
    <p>On-page optimization involves optimizing individual web pages to rank higher in search engines. Key elements to optimize include:</p>
    
    <ul>
      <li><strong>Title Tags:</strong> Include your primary keyword in your title tag, preferably near the beginning.</li>
      <li><strong>Meta Descriptions:</strong> Write compelling meta descriptions that include your target keywords and encourage clicks.</li>
      <li><strong>Headings:</strong> Use H1, H2, and H3 tags to structure your content and include keywords where appropriate.</li>
      <li><strong>URL Structure:</strong> Create clean, descriptive URLs that include keywords.</li>
      <li><strong>Content:</strong> Create high-quality, relevant content that addresses user intent and naturally incorporates keywords.</li>
    </ul>
    
    <h3>3. Improve Site Speed</h3>
    
    <p>Site speed is a critical ranking factor. Slow-loading websites frustrate users and lead to higher bounce rates. To improve site speed:</p>
    
    <ul>
      <li>Optimize image sizes and formats</li>
      <li>Enable browser caching</li>
      <li>Minify CSS, JavaScript, and HTML</li>
      <li>Use a Content Delivery Network (CDN)</li>
      <li>Choose a reliable hosting provider</li>
    </ul>
    
    <h3>4. Make Your Website Mobile-Friendly</h3>
    
    <p>With mobile devices accounting for over half of global web traffic, having a mobile-friendly website is essential. Google uses mobile-first indexing, meaning it primarily uses the mobile version of your site for indexing and ranking. Ensure your website is responsive and provides a good user experience on all devices.</p>
    
    <h3>5. Build Quality Backlinks</h3>
    
    <p>Backlinks from reputable websites signal to search engines that your content is valuable and trustworthy. Focus on earning high-quality backlinks through:</p>
    
    <ul>
      <li>Creating shareable, link-worthy content</li>
      <li>Guest blogging on industry websites</li>
      <li>Building relationships with influencers and industry leaders</li>
      <li>Participating in relevant online communities</li>
    </ul>
    
    <h2>Conclusion</h2>
    
    <p>Implementing these SEO strategies can significantly improve your website's visibility in search engine results, driving more organic traffic and potential customers to your business. Remember that SEO is a long-term strategy, and results take time. Consistently applying these optimization techniques and staying updated with SEO best practices will help you achieve sustainable results over time.</p>
  `,
};

const PopularPosts = [
  {
    id: 1,
    title: "Simple Ways To Optimize Website For SEO",
    date: "APR 07, 2024",
    image: "/assets/Ourlegacy.png",
    slug: "simple-ways-to-optimize-website-for-seo",
  },
  {
    id: 2,
    title: "How Chatbots Can Help You Drive More Sales",
    date: "APR 07, 2024",
    image: "/assets/Ourlegacy.png",
    slug: "how-chatbots-can-help-you-drive-more-sales",
  },
  {
    id: 3,
    title: "The Basics Of Running A Successful SEO Campaign",
    date: "APR 05, 2024",
    image: "/assets/Ourlegacy.png",
    slug: "the-basics-of-running-a-successful-seo-campaign",
  },
];

const Icons = [
  <User key={"icon1"} className="h-3.5 w-3.5" />,
  <CalendarDays key={"icon2"} className="h-3.5 w-3.5" />,
  <Tag key={"icon3"} className="h-3.5 w-3.5" />,
];

const Categories = [
  { name: "SEO Marketing", count: 15 },
  { name: "Web Development", count: 23 },
  { name: "Logo Design", count: 7 },
  { name: "Digital Marketing", count: 19 },
  { name: "UI/UX Design", count: 12 },
];

export default function BlogPost() {
  return (
    <div className="min-h-screen">
      {/* Page Title */}
      <section className="lg:p-16 md:p-10 p-5 bg-gradient-to-b from-[#F4F7FF0F] to-[#F4F7FF] text-center relative">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {blogData.title}
        </h1>
        <div className="flex items-center justify-center text-sm">
          <Link
            href="/"
            className="text-gray-600 hover:text-[#00b1dc] flex items-center"
          >
            <Home className="h-4 w-4 mr-1" /> Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-[#00b1dc] ">{blogData.title}</span>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto lg:p-16 md:p-10 p-5">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Content */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
              {/* Featured Image */}
              <div className="relative aspect-video w-full">
                <Image
                  src={blogData.image || "/placeholder.svg"}
                  alt={blogData.title}
                  width={1280}
                  height={720}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
                  priority
                />
              </div>

              {/* Post Meta */}
              <div className="p-8">
                <ul className="flex flex-wrap gap-3 text-md !text-[#009dff] mb-4">
                  {Icons.map((icon, idx) => (
                    <li key={idx} className="flex  items-center gap-1">
                      <i>{icon}</i>
                      <span className="uppercase">
                        {icon.key === "icon1"
                          ? blogData.author
                          : icon.key === "icon2"
                          ? blogData.date
                          : blogData.category}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Post Content */}
                <div
                  className="prose prose-lg mt-10 max-w-none prose-headings:text-gray-800 prose-headings:font-bold prose-p:text-gray-600 prose-a:text-[#00b1dc] prose-a:no-underline hover:prose-a:underline prose-li:text-gray-600"
                  dangerouslySetInnerHTML={{ __html: blogData.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-medium text-gray-700">Tags:</span>
                    <Link
                      href="#"
                      className="px-3 py-1 bg-gray-100 rounded-md text-sm hover:bg-[#00b1dc] hover:text-white transition-colors"
                    >
                      SEO
                    </Link>
                    <Link
                      href="#"
                      className="px-3 py-1 bg-gray-100 rounded-md text-sm hover:bg-[#00b1dc] hover:text-white transition-colors"
                    >
                      Marketing
                    </Link>
                    <Link
                      href="#"
                      className="px-3 py-1 bg-gray-100 rounded-md text-sm hover:bg-[#00b1dc] hover:text-white transition-colors"
                    >
                      Optimization
                    </Link>
                  </div>
                </div>
              </div>
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
                          <a
                            href="#"
                            className="hover:underline hover:text-[#00b1dc]"
                          >
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
                          className="hover:text-[#00b1dc] transition-colors hover:underline"
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
      </div>
    </div>
  );
}
