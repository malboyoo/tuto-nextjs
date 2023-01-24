import Link from "next/link";

export default function Post({ post }) {
  return (
    <main>
      <h1 className="text-3xl  text-orange-500">{post.title}</h1>
      <p className="text-lg text-orange-500 mb-20">{post.body}</p>
      <Link href="/">
        <p className="underline text-xl  text-orange-500 mt-10">Retourner à l'accueil</p>
      </Link>
    </main>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  if (response.status <= 320) {
    const post = await response.json();
    return {
      props: { post },
    };
  } else {
    throw new Error("Erreur lors du fecthing des data, status code:", response.status);
  }
}
