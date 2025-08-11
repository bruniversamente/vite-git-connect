import { useEffect, useState } from "react";
import AppleArrowButton from "./AppleArrowButton";
import { getAllPosts } from "../lib/posts";
import type { Post } from "../types/content";
import { coverUrl } from "../lib/posts";

export default function RelatedCarousel(){
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(()=>{
    getAllPosts().then((d)=> setPosts(d.slice(0,8))).catch(()=> setPosts([]));
  },[]);

  return (
    <div className="relative">
      <div data-rel className="grid grid-flow-col auto-cols-[minmax(280px,1fr)] gap-4 overflow-x-auto pb-2">
        {posts.length === 0 && Array.from({length:4}).map((_,i)=> (
          <div key={i} className="block rounded-xl border bg-white p-4 min-h-28 text-muted-foreground">Carregando…</div>
        ))}
        {posts.map((p)=> (
          <a key={p.slug} href={`/blog/${p.slug}`} className="block rounded-xl border bg-white overflow-hidden">
            {coverUrl(p) && <img src={coverUrl(p)} alt={p.cover?.data?.attributes?.alternativeText || p.title} className="w-full h-36 object-cover" />}
            <div className="p-4">
              <div className="font-medium leading-snug line-clamp-2 min-h-[3rem]">{p.title}</div>
            </div>
          </a>
        ))}
      </div>
      <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2">
        <AppleArrowButton direction="left" onClick={()=>{ const scroller = document.querySelector('[data-rel]'); (scroller as HTMLElement | null)?.scrollBy({left:-300, behavior:"smooth"}); }} />
      </div>
      <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2">
        <AppleArrowButton direction="right" onClick={()=>{ const scroller = document.querySelector('[data-rel]'); (scroller as HTMLElement | null)?.scrollBy({left:300, behavior:"smooth"}); }} />
      </div>
    </div>
  );
}
