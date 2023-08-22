import "../css/MenuBar.css";

const MenuBar = () => {
  return (
    <div id="menu-bar" className="flex-between">
      <h1>Logo</h1>
      <ul>
        <li className="transition h-black">Home</li>
        <li className="transition h-black">About</li>
        <li className="transition h-black">Services</li>
        <li className="transition h-black">Contact</li>
        <li className="transition h-black" id="login">
          Login
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
