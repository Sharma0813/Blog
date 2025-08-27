import Container from '../components/Container.jsx'
import PostCard from '../components/PostCard.jsx'
import posts from '../data/posts.json'
import { loadCustomPosts } from '../storage.js'
import hero from '../assets/hero.jpg'

export default function Home(){
  const all = [...loadCustomPosts(), ...posts]
  return (
    <Container>
      <section className='hero'>
        <div>
          <h1>Animal Stories</h1>
          <p>Welcome to <strong>Blog</strong>, a minimalist blog about Animals. Browse posts, read articles, or create your own using the <kbd>Create</kbd> page. Everything is stored locally in your browser.</p>
        </div>
        <img src={hero} alt='Hero cover' />
      </section>
      <div className='grid'>
        {all.map(p => <PostCard key={p.id} post={p} />)}
      </div>
    </Container>
  )
}
