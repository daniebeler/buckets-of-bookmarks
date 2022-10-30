import Link from "next/link";
import { useRouter } from "next/router";

const navLinks = [
  {
    name: 'Design',
    items: [
      { title: 'Colors', path: '/design/colors' },
      { title: 'Typography', path: '/design/fonts' },
      { title: 'Games', path: '/design/games' },
      { title: 'Icons', path: '/design/icons' },
      { title: 'Design Systems', path: '/design/systems' },
      { title: 'Illustrations', path: '/design/illustrations' },
      { title: 'Stock Photos', path: '/design/stock-photos' },
      { title: 'Best Practices', path: '/design/best-practices' },
      { title: 'Inspiration', path: '/design/inspiration' },
      { title: 'Tools', path: '/design/tools' },
      { title: 'AI Art', path: '/design/ai-art' },
    ]
  },
  {
    name: 'Productivity',
    items: [
      { title: 'Tools', path: '/productivity/tools' },
      { title: 'Books', path: '/productivity/books' },
    ]
  },
  {
    name: 'Coding',
    items: [
      { title: 'Books', path: '/coding/books' },
      { title: 'Practice', path: '/coding/practice' },
      { title: 'Project Ideas', path: '/coding/ideas' },
      { title: 'VS-Code Extensions', path: '/coding/vscode-extensions' },
    ]
  }
]

let accentColor = "#000";

function setColor() {
  return <div style={{ "--accent-color": '#000' } as React.CSSProperties} />
  // document.documentElement.style.setProperty('--accent-color', '#000');
}

const Links = () => {

  const router = useRouter();

  return (
    <div>
      {
        navLinks.map(bucket => {
          return (
            <div key={bucket.name}>
              <h4 className="category">{bucket.name}</h4>
              {
                bucket.items.map(link => {
                  setColor();
                  return (
                    <div key={link.title}>
                      <Link key={link.title} href={link.path} passHref className={router.asPath === link.path ? "active" : ""}>
                        {link.title}
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          )
        })}

      <style>{`
       
      .active {
        background-color: #3CCF4E;
        color: white;
        border-radius: 10px;
        font-family: CarosExtraBold, sans-serif;
      }

      .active:hover {
        color: white;
      }
      
      a {
        font-size: 0.9rem;
        display: block;
        color: black;
        padding: 14px;
        text-decoration: none;
      }

      a:hover:not(.active) {
        background: #3CCF4E;
        border-radius: 10px;
        color: white;
      }
      `}</style>
    </div>


  )
}

export default Links;