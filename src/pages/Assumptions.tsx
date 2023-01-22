import '../styles/assumptions.scss';

const Assumptions = () => {
  return (
    <div className="assumptions">
      <h2 className="app__header">Założenia</h2>
      <div className="app__text--left">
        <p className="app__paragraph">Zadanie:</p>
        <p className="app__paragraph">Napisz aplikację korzystając z najnowszego api <strong>react.js (hooki, Context</strong>, itd.) spełniającą poniższe założenia.</p>
        <p className="app__paragraph">Aplikacja ma się składać z minimum 3 ekranów:</p>
          <ol className="list">
            <li>Wyszukiwarka projektów githubowych</li>
            <li>Założenia całej aplikacji</li>
            <li>Wyliczanie silni</li>
          </ol>
        <p className="app__paragraph">Ad 1:</p>
          <ul className="list">
            <li>Wykorzystane jest publiczne API Githuba;</li>
            <li>Czeka na podanie loginu użytkownika:</li>
              <ul className="list">
                <li>waliduje poprawność;</li>
                <li>obsługuje nieistniejące loginy;</li>
              </ul>
            <li>wyświetla maksymalnie 5 projektów w kolejności od ostatnio updatowanego:</li>
              <ul className="list">
                <li>wyświetla maksymalnie 5 commitów każdego z projektów;</li>
              </ul>
          </ul>
        <p className="app__paragraph">Ad 2:</p>
          <ul className="list">
            <li>wyświetla niniejszą treść (listę wymagań) z podobnym (takim samym) podziałem i układem;</li>
            <li>proszę zawrzeć też autora aplikacji - własne imię i nazwisko;</li>
          </ul>
        <p className="app__paragraph">Ad 3:</p>
          <ul className="list">
            <li>
              input do podania liczby dla której będzie wyliczona
              <a
                href="https://pl.wikipedia.org/wiki/Silnia"
                target="_blank"
                rel="noopener noreferrer"
              > silnia</a>
              ;
            </li>
            <li>historia poprzednich wyliczeń.</li>
          </ul>
        <p className="app__paragraph">Ogólne:</p>
          <ul className="list">
            <li>korzysta z <strong>LESS / SASS</strong>. Spełnia wymogi <strong>BEM</strong>. Jest też <strong>estetyczna</strong>;</li>
            <li>wyświetla <strong>co drugi</strong> element każdej listy wyróżnionym kolorem;</li>
            <li>jest <strong>hostowana</strong> (github pages, heroku, itd..), a jej kod jest dostępny <strong>publicznie</strong>;</li>
          </ul>
        <p className="app__paragraph">Miło widziane użycie <strong>middlewarów reduxowych.</strong></p>
      </div>
    </div>
  );
}

export default Assumptions;
