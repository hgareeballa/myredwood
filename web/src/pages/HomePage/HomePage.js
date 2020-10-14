import BlogLayout from 'src/layouts/BlogLayout'
import BlogpostsCell from 'src/components/BlogpostsCell'

const HomePage = () => {
  return (
    <>
      <BlogLayout>
        <h1>HomePage</h1>
        <BlogpostsCell />
      </BlogLayout>
    </>
  )
}

export default HomePage
