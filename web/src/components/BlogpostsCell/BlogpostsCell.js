import Blogpost from 'src/components/Blogpost'
export const QUERY = gql`
  query BlogpostsQuery {
    posts {
      id
      title
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return posts.map((post) => <Blogpost key={post.id} post={post} />)
}
