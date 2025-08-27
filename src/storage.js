const KEY = 'react_blog_posts_v1'

export function loadCustomPosts(){
  try{
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  }catch(e){
    console.warn('Failed to load posts', e)
    return []
  }
}

export function saveCustomPost(post){
  const list = loadCustomPosts()
  list.unshift(post)
  localStorage.setItem(KEY, JSON.stringify(list))
}
