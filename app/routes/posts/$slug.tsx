import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { getPost } from "~/model/post.server";
import type { Post } from "~/model/post.server";
import { marked } from "marked";

type LoaderData = { post: Post | undefined; html: string };

export const loader: LoaderFunction = async ({ params }) => {
  const post = await getPost(params.slug);
  return json<LoaderData>({ post, html: marked(post?.markdown) });
};

export default function PostSlug() {
  const { post, html } = useLoaderData<LoaderData>();
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">{post?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
