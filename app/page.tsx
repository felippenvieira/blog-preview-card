import BlogPreviewCard from "./components/blogPreviewCard";

const blogPosts = [
  {
    badge: "Learning",
    date: "21 Dec 2023",
    title: "HTML & CSS Foundations",
    description: "These languages are the backbone of every website, defining structure, content, and presentation.",
    author: "Greg Hooper",
  },
]

export default function Home() {
  return (
    <main className="bg-[#f4d04e] grid justify-center items-center p-4 h-screen">
      {blogPosts.map((post) => (
        <BlogPreviewCard key={post.title} {...post} />
      ))}
    </main>
  )
}
