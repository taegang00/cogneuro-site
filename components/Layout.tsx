import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="container">
      <header className="header">
        <div>
          <div className="labtitle">인지신경실험실</div>
          <div className="labsubtitle">Cognitive Neuropsychology Laboratory</div>
        </div>
        <nav className="nav">
          <Link href="/">About</Link>
          <Link href="/people">People</Link>
          <Link href="/research">Research</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/news">News</Link>
        </nav>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">© {new Date().getFullYear()} Cognitive Neuropsychology Laboratory</footer>
    </div>
  );
}
