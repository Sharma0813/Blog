import { useState } from 'react'
import Container from '../components/Container.jsx'
import { saveCustomPost } from '../storage.js'

function slugify(str){
  return (str || '').toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'') + '-' + Math.floor(Math.random()*10000)
}

export default function Create(){
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('You')
  const [tags, setTags] = useState('react,blog')
  const [cover, setCover] = useState('')
  const [content, setContent] = useState('<p>Write your article here...</p>')

  function handleSubmit(e){
    e.preventDefault()
    const post = {
      id: Date.now(),
      slug: slugify(title),
      title,
      author,
      date: new Date().toISOString(),
      excerpt: content.replace(/<[^>]+>/g,'').slice(0,120) + '...',
      tags: tags.split(',').map(t=>t.trim()).filter(Boolean),
      cover,
      content
    }
    saveCustomPost(post)
    alert('Post saved! Go to Home to see it.')
    setTitle(''); setAuthor('You'); setTags('react,blog'); setCover(''); setContent('<p>Write your article here...</p>')
  }

  return (
    <Container>
      <h1>Create Post</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input value={title} onChange={e=>setTitle(e.target.value)} placeholder='My awesome post' required/>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
          <div>
            <label>Author</label>
            <input value={author} onChange={e=>setAuthor(e.target.value)} placeholder='Your name'/>
          </div>
          <div>
            <label>Tags (comma separated)</label>
            <input value={tags} onChange={e=>setTags(e.target.value)} placeholder='react,css,life'/>
          </div>
        </div>
        <div>
          <label>Cover image URL (optional)</label>
          <input value={cover} onChange={e=>setCover(e.target.value)} placeholder='https://...' />
        </div>
        <div>
          <label>Content (HTML allowed)</label>
          <textarea rows={10} value={content} onChange={e=>setContent(e.target.value)} />
          <p className='muted'>Tip: You can use basic HTML like &lt;h2&gt;, &lt;p&gt;, &lt;code&gt;, &lt;ul&gt; here.</p>
        </div>
        <div style={{display:'flex', gap:10}}>
          <button className='btn' type='submit'>Save Post</button>
          <button className='btn ghost' type='button' onClick={()=>{localStorage.clear(); alert('Local posts cleared.')}}>Clear Local Posts</button>
        </div>
      </form>
    </Container>
  )
}
