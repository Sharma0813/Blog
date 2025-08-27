import Container from '../components/Container.jsx'

export default function About(){
  return (
    <Container>
      <h1>About</h1>
      <p className='muted'>A space where the beauty, mystery, and stories of the animals come alive.</p>
      <ul>
        <li>Animal Stories & Legends</li>
        <li>Fun Facts & Knowledge</li>
        <li>Conservation Awareness</li>
        <li>Inspiration & Wonder</li>
      </ul>
      <p>Add posts via the <strong>Create page.</strong> </p>
    </Container>
  )
}
