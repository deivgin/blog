export type Post = {
  slug: string;
  title: string;
  markdown: string;
};

export async function getPosts(): Promise<Post[]> {
  return [
    {
      slug: "my-first-post",
      title: "My First Post",
      markdown: `## Hello World`,
    },
    {
      slug: "90s-mixtape",
      title: "A Mixtape I Made Just For You",
      markdown: `**test**`,
    },
  ];
}

export const getPost = async (
  slug: string | undefined
): Promise<Post | undefined> =>
  await getPosts().then((posts) => posts.find((post) => post.slug === slug));
