import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const isTopPage = location.pathname === "/";
  const LogoTag = isTopPage ? 'h1' : 'div';
  return (
    <header>
      <div className="flex justify-between bg-gray-900 text-white p-6 font-bold">
        <LogoTag>
          <Link to="/">Blog</Link>
        </LogoTag>
        <Link to="/contact">お問い合わせ</Link>
      </div>
    </header>
  );
}
