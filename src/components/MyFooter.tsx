import '../styles/myFooter.scss'

const MyFooter = () => {
  return (
    <footer className="myFooter">
      <p className="app__margin">autor: Justyna Biernacka</p>
      <p>
        <span>{ new Date().getFullYear() } created by </span>
        <a
          className="myFooter__link"
          href="https://freefrogs.github.io/Portfolio/#/"
          target="_blank"
          rel="noopener noreferrer"
        > freefrogs</a>
      </p>
    </footer>
  );
}

export default MyFooter;
