import { Link } from "react-router-dom";
import { routes } from "routes";

const Header = () => {
  return (
    <nav>
      {routes.map((route) => (
        <li key={route.key}>
          <Link to={route.path}>{route.key}</Link>
        </li>
      ))}
    </nav>
  );
};

export default Header;
