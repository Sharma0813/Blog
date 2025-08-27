import { Link } from 'react-router-dom'

export default function PostCard({post}){
  return (
    <article className='card'>
      {post.cover && <img src={post.cover} alt={post.title} />}
      <h3 style={{margin:'6px 0 4px'}}><Link to={'/post/' + post.slug}>{post.title}</Link></h3>
      <div className='muted'>{new Date(post.date).toLocaleDateString()} • {post.author}</div>
      <p style={{margin:'8px 0 10px'}}>{post.excerpt}</p>
      <div className='badges'>
        {post.tags?.map(t => <span className='badge' key={t}>#{t}</span>)}
      </div>
    </article>
  )
}
