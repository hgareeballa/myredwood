import { Link, routes } from '@redwoodjs/router'

const Blogpost = ({ post }) => {
  return (
    <article key={post.id}>
      <h1>{post.id}</h1>
      <h3>
        <Link to={routes.blogpost({ id: post.id })}>{post.title} </Link>
      </h3>
      <h2>{post.body}</h2>
      <hr></hr>
    </article>
  )
}

export default Blogpost
