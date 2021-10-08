import Footer from '../components/footer'
import Header from '../components/header'
import Head from 'next/head'
import { motion } from 'framer-motion'

function Github({ profile, pinned }) {
  return (
    <div>
      <Head></Head>
      <Header />
      {
        <div>
          <ul className="card-list left">
            <li className="card">
              <a
                id="githubProfilePic"
                className="card-image"
                href={profile.html_url}
                target="_blank"
              >
                <img src={profile.avatar_url} alt="Github Avatar" />
              </a>
              <a
                className="card-description"
                href={profile.html_url}
                target="_blank"
              >
                <h2>{profile.name}</h2>
                <h3>{profile.company}</h3>
                <p>{profile.bio}</p>
              </a>
            </li>
          </ul>
          <ul className="card-list right">
            {pinned.map((repo, index) => (
            <li className="card" key={index}>
            <a
              id="githubImage"
              className="card-image"
              href={repo.link}
              target="_blank"
            >
              <img src={profile.avatar_url} alt="Github Avatar" />
            </a>
            <a
              className="card-description"
              href={repo.link}
              target="_blank"
            >
              <h2>{repo.repo}</h2>
              <p>{repo.description}</p>
            </a>
          </li> 
           ))}
          </ul>
        </div>
      }
      <Footer />
    </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get user profile
  const profileInfo = await fetch('https://api.github.com/users/ctrachte')
  const profile = await profileInfo.json()
  const pinnedRepos = await fetch(
    'https://gh-pinned-repos-5l2i19um3.vercel.app/?username=ctrachte',
  )
  const pinned = await pinnedRepos.json()
  return {
    props: {
      profile,
      pinned,
    },
    revalidate: 10,
  }
}

export default Github
