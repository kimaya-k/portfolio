import { useEffect, useState } from 'react';

const links = [
  ['About', '#top'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Volunteering', '#volunteering'],
  ['Tech Stack', '#tech-stack'],
  ['Courses', '#courses'],
  ['Contact', '#contact'],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
  className={`nav ${scrolled ? 'nav-scrolled' : ''}`}
  style={
    scrolled
      ? {
          background: 'rgba(18, 17, 16, 0.6)',
          backdropFilter: 'blur(20px) saturate(160%)',
          WebkitBackdropFilter: 'blur(20px) saturate(160%)',
          mixBlendMode: 'normal',
        }
      : undefined
  }
>
      <a className="nav-mark" href="#top"></a>
      <ul className="nav-links">
        {links.map(([label, href]) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}