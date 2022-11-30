import Link from "next/link";
import Image from 'next/image'
import { useRouter } from "next/router";
import styles from '../styles/Links.module.css';

const navLinks = [
  {
    name: 'Design',
    items: [
      { title: 'Colors', path: '/design/colors', icon: 'colors' },
      { title: 'Typography', path: '/design/fonts', icon: 'fonts' },
      { title: 'Games', path: '/design/games', icon: 'games' },
      { title: 'Icons', path: '/design/icons', icon: 'icons' },
      { title: 'Design Systems', path: '/design/systems', icon: 'design-systems' },
      { title: 'Illustrations', path: '/design/illustrations', icon: 'illustrations' },
      { title: 'Stock Photos', path: '/design/stock-photos', icon: 'stock-photos' },
      { title: 'Best Practices', path: '/design/best-practices', icon: 'best-practices' },
      { title: 'Inspiration', path: '/design/inspiration', icon: 'ideas' },
      { title: 'Tools', path: '/design/tools', icon: 'tools' },
      { title: 'AI Art', path: '/design/ai-art', icon: 'ai-art' },
    ]
  },
  {
    name: 'Productivity',
    items: [
      { title: 'Tools', path: '/productivity/tools', icon: 'tools' },
      { title: 'Books', path: '/productivity/books', icon: 'books' },
    ]
  },
  {
    name: 'Coding',
    items: [
      { title: 'Books', path: '/coding/books', icon: 'books' },
      { title: 'Tools', path: '/coding/tools', icon: 'tools' },
      { title: 'Practice', path: '/coding/practice', icon: 'practice' },
      { title: 'Project Ideas', path: '/coding/ideas', icon: 'ideas' },
      { title: 'VS-Code Extensions', path: '/coding/vscode-extensions', icon: 'vs-code-extensions' },
    ]
  }
]

const Links = () => {

  const router = useRouter();

  return (
    <div>
      <div className={styles.link_wrapper} key='home'>
        <Link key='home' href='/home' passHref className={styles.a + ' ' + (router.asPath === '/home' ? styles.active : "")}>
          <Image src={router.asPath === '/home' ? '/icons/ideas-white.svg' : '/icons/ideas.svg'} width={24} height={24} alt="" /> Home
        </Link>
      </div>
      {
        navLinks.map(bucket => {
          return (
            <div key={bucket.name}>
              <h4 className={styles.category}>{bucket.name}</h4>

              {
                bucket.items.map(link => {
                  return (
                    <div className={styles.link_wrapper} key={link.title}>
                      <Link key={link.title} href={link.path} passHref className={styles.a + ' ' + (router.asPath === link.path ? styles.active : "")}>
                        <Image src={router.asPath === link.path ? '/icons/' + link.icon + '-white.svg' : '/icons/' + link.icon + '.svg'} width={24} height={24} alt="" /> {link.title}
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          )
        })}
    </div>
  )
}

export default Links;