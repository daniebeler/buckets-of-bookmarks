import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../styles/Links.module.scss';
import { House, Palette, Truck, GlobeHemisphereWest, NewspaperClipping, ChatCircleDots, TextAa, GoogleLogo, GameController, BezierCurve, PaintBrush, GraduationCap, Books, Camera, ImageSquare, Lightbulb, Smiley, ThumbsUp, Wrench, PuzzlePiece } from "phosphor-react";

const navLinks = [
  {
    name: 'General',
    items: [
      { title: 'Google', path: '/general/google', icon: GoogleLogo },
      { title: 'Blogs', path: '/general/blogs', icon: NewspaperClipping },
      { title: 'Social Media', path: '/general/social-media', icon: ChatCircleDots },
      { title: 'Fun', path: '/general/fun', icon: GameController },
    ]
  },
  {
    name: 'Design',
    items: [
      { title: 'Colors', path: '/design/colors', icon: Palette },
      { title: 'Typography', path: '/design/fonts', icon: TextAa },
      { title: 'Games', path: '/design/games', icon: GameController },
      { title: 'Icons', path: '/design/icons', icon: Smiley },
      { title: 'Design Systems', path: '/design/systems', icon: BezierCurve },
      { title: 'Illustrations', path: '/design/illustrations', icon: ImageSquare },
      { title: 'Stock Photos', path: '/design/stock-photos', icon: Camera },
      { title: 'Best Practices', path: '/design/best-practices', icon: ThumbsUp },
      { title: 'Inspiration', path: '/design/inspiration', icon: Lightbulb },
      { title: 'Tools', path: '/design/tools', icon: Wrench },
      { title: 'AI Art', path: '/design/ai-art', icon: PaintBrush },
    ]
  },
  {
    name: 'Productivity',
    items: [
      { title: 'Tools', path: '/productivity/tools', icon: Wrench },
      { title: 'Books', path: '/productivity/books', icon: Books },
    ]
  },
  {
    name: 'Coding',
    items: [
      { title: 'Books', path: '/coding/books', icon: Books },
      { title: 'Resources', path: '/coding/resources', icon: Truck },
      { title: 'Tools', path: '/coding/tools', icon: Wrench },
      { title: 'Practice', path: '/coding/practice', icon: GraduationCap },
      { title: 'Project Ideas', path: '/coding/ideas', icon: Lightbulb },
      { title: 'VS-Code Extensions', path: '/coding/vscode-extensions', icon: PuzzlePiece },
    ]
  },
  {
    name: 'Cybersecurity',
    items: [
      { title: 'Practice', path: '/cybersecurity/practice', icon: GraduationCap },
      { title: 'Games', path: '/cybersecurity/games', icon: GameController },
      { title: 'OSINT', path: '/cybersecurity/osint', icon: GlobeHemisphereWest },
    ]
  }
]

interface ChildProps {
  toggleMenu: Function
}

const Links = (props: ChildProps) => {

  const router = useRouter();

  return (
    <ul className={styles.outer_ul}>
      <li className={styles.link_wrapper_home} key='home'>
        <Link key='home' onClick={() => props.toggleMenu()} href='/' passHref className={styles.a + ' ' + (router.asPath === '/' ? styles.active : "")}>
          <House color={router.asPath === '/' ? '#fff' : '#111'} size='24' /> Home
        </Link>
      </li>
      {
        navLinks.map(bucket => {
          return (
            <li key={bucket.name}>
              <h4 className={styles.category}>{bucket.name}</h4>

              <ul className={styles.inner_ul}>
                {
                  bucket.items.map(link => {
                    return (
                      <li className={styles.link_wrapper} key={link.title}>
                        <Link key={link.title} onClick={() => props.toggleMenu()} href={link.path} passHref className={styles.a + ' ' + (router.asPath === link.path ? styles.active : "")}>
                          <link.icon color={router.asPath === link.path ? '#fff' : '#111'} size='20' /> {link.title}
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
            </li>
          )
        })}
    </ul>
  )
}

export default Links;