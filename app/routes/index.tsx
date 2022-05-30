import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Link to="/posts" className="text-xl underline text-blue-600">
        Blog posts
      </Link>
    </>
  );
}
