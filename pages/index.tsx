import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header';
// import Title from '../components/Title';
import { sanityClient, urlFor } from '../sanity';
import { Post } from '../typings';

interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {
  return (
    <div className="max-w-5xl mx-auto">
      <Head>
        <title>Medium Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

     <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-8 lg:py-0">
        <div className="space-y-4 px-9">
          <h1 className="max-w-xl font-serif text-5xl">
            <span className="decoration-3 underline decoration-black">
              Medium
            </span>{' '}
            is a place to write, read & connect
          </h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            deserunt velit id atque? Odio, facere.
          </h2>
        </div>
        <img
          className="h-32 hidden md:inline-flex lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt="Mlogo"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map(post => {
          return(
            <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="border rounded-lg group cursor-pointer overflow-hidden">
            <img className="h-55 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage).url()!} alt="" />
            <div className="flex justify-between p-5 bg-white">
              <div>
                <p className="text-lg font-bold"> {post.title} </p>
              <p className="text-xs"> {post.description} by {post.author.name} </p>
              </div>
              <img className="h-12 w-12 rounded-full" src={urlFor(post.author.image).url()!} /> 
            </div>
            </div>
          </Link>
            )
        })}
      </div>

    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author-> {
    name,
    image
  },
  description,
  mainImage,
  slug
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
