import Head from "next/head";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts, date }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mon blog course à pied!</title>
      </Head>

      <section className="mt-20 flex justify-center items-center flex-col">
        <p className="text-gray-800">last refresh: {date}</p>
        {posts.map((el) => {
          return (
            <Link href={`/blog/${el.id}`}>
              <article key={el.id} className="p-5 shadow-xl bg-yellow-50 text-[#192a56] mx-10 my-5 max-w-lg">
                <h2 className="text-1 underline mb-6">{el.title}</h2>
                <p>{el.body}</p>
              </article>
            </Link>
          );
        })}
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
  if (response.status <= 300) {
    const posts = await response.json();
    return {
      props: { posts, date: new Date().toUTCString() },
    };
  } else {
    throw new Error("Erreur lors du fecthing des data, status code:", response.status);
  }
}
