import BlogPosts from '@/components/blog-posts'

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
      <p className="text-xl text-center mb-12 text-muted-foreground">
        Stay informed with our latest articles and insights on legal matters.
      </p>
      <BlogPosts />
    </div>
  )
}

