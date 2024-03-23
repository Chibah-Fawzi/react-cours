import Login from "./Login";
import "./App.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Login</a>
      <a href="">Profile</a>
      <Login />
    </nav>
  );
}
