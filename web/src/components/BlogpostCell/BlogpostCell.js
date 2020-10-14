import Blogpost from 'src/components/Blogpost'
import BlogLayout from 'src/layouts/BlogLayout'

export const QUERY = gql`
  query BlogpostQuery($id: Int!) {
    post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ post }) => {
  return (
    <BlogLayout>
      <Blogpost key={post.id} post={post} />
    </BlogLayout>
  )
}
