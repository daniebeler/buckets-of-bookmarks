import Link from "next/link";

const Links = () => {
  return (
    <div>
      <h4 className="category">Design</h4>
      <Link href="/design/colors">Colors</Link>
      <Link href="/design/fonts">Typography</Link>
      <Link href="/design/games">Games</Link>
      <Link href="/design/icons">Icons</Link>
      <Link href="/design/systems">Design Systems</Link>
      <Link href="/design/illustrations">Illustrations</Link>
      <Link href="/design/stock-photos">Stock Photos</Link>
      <Link href="/design/best-practices">Best Practices</Link>
      <Link href="/design/inspiration">Inspiration</Link>
      <Link href="/design/tools">Tools</Link>
      <Link href="/design/ai-art">AI Art</Link>
      <h4 className="category">Entrepreneurship</h4>
      <Link href="/entrepreneurship/movies">Movies</Link>
      <Link href="/entrepreneurship/books">Books</Link>
      <h4 className="category">Productivity</h4>
      <Link href="/productivity/tools">Tools</Link>
      <Link href="/productivity/books">Books</Link>
      <h4 className="category">Coding</h4>
      <Link href="/coding/books">Books</Link>
      <Link href="/coding/practice">Practice</Link>
      <Link href="/coding/ideas">Project Ideas</Link>
      <Link href="/coding/vscode-extensions">VS-Code Extensions</Link>
    </div>


  )
}

export default Links;