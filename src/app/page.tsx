import Link from 'next/link'

const Home = () => {
  return (
    <ul>
      <li>
        <Link href='/stars'>Stars</Link>
      </li>
      <li>
        <Link href='/vortex'>Vortex</Link>
      </li>
    </ul>
  )
}

export default Home
