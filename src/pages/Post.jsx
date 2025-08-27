import { useParams, Link } from 'react-router-dom'
import Container from '../components/Container.jsx'
import posts from '../data/posts.json'
import { loadCustomPosts } from '../storage.js'

export default function Post(){
  const { slug } = useParams()
  const all = [...loadCustomPosts(), ...posts]
  const p = all.find(x => x.slug === slug)

  if(!p){
    return <Container><p>Post not found. <Link to='/'>Go home</Link></p></Container>
  }
  return (
    <Container>
      <article className='article'>
        {p.cover && <img className='cover' src={p.cover} alt={p.title}/>}
        <h1>{p.title}</h1>
        <div className='muted'>{new Date(p.date).toLocaleString()} • {p.author} • {p.tags?.map(t=>`#${t}`).join(' ')}</div>
        <div style={{marginTop:12}} dangerouslySetInnerHTML={{__html: p.content}} />
      </article>
    </Container>
  )
}
