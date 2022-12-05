import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../styles/Links.module.scss';
import { House, Palette, NewspaperClipping, TextAa, GoogleLogo, GameController, BezierCurve, PaintBrush, GraduationCap, Books, Camera, ImageSquare, Lightbulb, Smiley, ThumbsUp, Wrench, PuzzlePiece } from "phosphor-react";

const navLinks = [
  {
    name: 'General',
    items: [
      { title: 'Google', path: '/general/google', icon: GoogleLogo },
      { title: 'Blogs', path: '/general/blogs', icon: NewspaperClipping },
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
      { title: 'Tools', path: '/coding/tools', icon: Wrench },
      { title: 'Practice', path: '/coding/practice', icon: GraduationCap },
      { title: 'Project Ideas', path: '/coding/ideas', icon: Lightbulb },
      { title: 'VS-Code Extensions', path: '/coding/vscode-extensions', icon: PuzzlePiece },
    ]
  }
]

const Links = () => {

  const router = useRouter();

  return (
    <div>
      <div className={styles.link_wrapper_home} key='home'>
        <Link key='home' href='/' passHref className={styles.a + ' ' + (router.asPath === '/' ? styles.active : "")}>
          <House color={router.asPath === '/' ? '#fff' : '#111'} size='24' /> Home
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
                        <link.icon color={router.asPath === link.path ? '#fff' : '#111'} size='24' /> {link.title}
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