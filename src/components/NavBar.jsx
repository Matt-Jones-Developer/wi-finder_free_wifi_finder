export default () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const menus = pages.filter((page) => {
    return page.link !== location.pathname;
  });

  return (
    <>
      <input
        type="checkbox"
        checked={isOpen}
        className="hide"
        id="menu-trigger"
        role="button"
        title="menu"
      />
      <label
        htmlFor="menu-trigger"
        aria-hidden="true"
        title="menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="burger">
          <span className="bar">
            <span className="visually-hidden">Menu</span>
          </span>
        </span>
      </label>
      <nav id="menu">
        {menus.map((menu) => (
          <Link onClick={() => setIsOpen(!isOpen)} to={menu.link}>
            {menu.name}
          </Link>
        ))}
        <a href="mailto:marchudson2601@gmail.com">Contact Me 📧</a>
        <a href="https://github.com/marcahudson26" target="blank">
          My Github
        </a>
        <a
          href="https://www.linkedin.com/in/marc-hudson-53546a259/"
          target="blank"
        >
          LinkedIn
        </a>
      </nav>
    </>
  );
};
