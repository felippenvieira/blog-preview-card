import Image from "next/image";
import Link from "next/link";

type BlogPreviewCardProps = {
  badge: string;
  date: string;
  title: string;
  description: string;
  author: string;
}

export default function BlogPreviewCard({ badge, date, title, description, author }: BlogPreviewCardProps) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-black shadow-[10px_10px_0_0_rgba(0,0,0,1)] grid gap-6 max-w-96">
      <Image className="rounded-lg" src={"/illustration-article.svg"} alt="article-photo" width={400} height={400} />
      <div>
        <span className="px-3 py-2 max-w-fit bg-[#f4d04e] inline-block rounded-lg font-bold">{badge}</span>
        <p className="font-semibold mt-2">Published {date}</p>
      </div>
      <Link href={"/"} className="text-2xl font-extrabold hover:text-[#f4d04e]">{title}</Link>
      <p>{description}</p>
      <span className="flex flex-wrap gap-3 items-center">
        <Image className="rounded-full" src={"/image-avatar.webp"} alt="avatar" width={40} height={40} />
        <p className="font-extrabold text-sm">{author}</p>
      </span>
    </div>
  )
}