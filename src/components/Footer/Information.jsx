import { Link } from "react-router-dom";

export default function Information({ title, informations = [] }) {
  return (
    <div className="footer-information">
      <h3>{title}</h3>

      <ul>
        {informations.map((item) => (
          <li key={`${item.text}-${item.link}`}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
