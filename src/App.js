import React, { useState, useEffect, Suspense } from "react";
import { Helmet } from "react-helmet";
import CookieConsent from "react-cookie-consent";
import ReactGA from "react-ga";

import useDeviceDetect from "./Components/Helper/utils";

import Menu from "./Components/Menu";
import Animator from "./Animator";
import Footer from "./Components/Footer";

const TwitterContainer = React.lazy(() =>
  import("./Components/Helper/twitter")
);

const App = () => {
  let location = window.location.href;

  const { isMobile } = useDeviceDetect();

  const [color, setColor] = useState();
  const [colorRgb, setColorRgb] = useState();
  const [colorPair, setPair] = useState();

  const green = "rgb(82, 216, 144, 0.2)";
  const blue = "rgb(94, 175, 168, 0.2)";
  const white = "#fff";

  useEffect(() => {
    const locationColor = () => {
      if (location?.pathname?.includes("projects")) {
        setColor("white");
        setColorRgb(white);
        setPair(white);
      } else if (location?.pathname?.includes("blog")) {
        setColor("white");
        setColorRgb(white);
        setPair(blue);
      } else {
        setColor("white");
        setColorRgb(white);
        setPair(green);
      }
    };
    locationColor();
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [colorPair, colorRgb, location]);

  return (
    <div className="center">
      <h1>JÓTÁLLÁSI JEGY</h1>
      <h3>Kérjük, hogy a jótállási jegyet gondosan őrizze meg!</h3>
      <p>Cég, termék vagy márka logója</p>

      <ol>
        <li>
          <h2>ÁLTALÁNOS ADATOK</h2>

          <table>
            <tbody>
              <tr>
                <td width={"50%"}>
                  A jótállási jegy sorszáma<sup>1</sup>:
                </td>
                <td width={"50%"}>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"50%"}>
                  <p>Vállalkozás neve és címe:</p>
                </td>
                <td width={"50%"}>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"50%"}>
                  <p>Vállalkozás bélyegzőlenyomata</p>
                </td>
                <td width={"50%"}>
                  <p>
                    A jótállási jegy kiállítása során a vállalkozás
                    képviseletében eljáró személy aláírása <sup>2</sup>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr>
                <td width={"30%"}>Termék megnevezése:</td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>Termék típusa:</td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>
                  Termék gyártási száma/egyedi azonosítója (amennyiben van):
                </td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>
                  Gyártó neve és címe (amennyiben nem azonos a vállalkozással):
                </td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>
                  A termék fogyasztó részére történő átadásának időpontja:
                </td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>
                  Az üzembe helyezés<sup>3</sup> időpontja:
                </td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>A vásárlás (szerződéskötés) időpontja:</td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>Termék eladási ára:</td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>A jótállás időtartama:</td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <span>A jótállás időtartama:</span>
          </p>
          <ul className="box">
            <li>
              10 000 forint - 100 000 forint összegű eladási ár esetén 1 év,
            </li>
            <li>
              100 001 forint - 250 000 forint összegű eladási ár esetén 2 év,
            </li>
            <li>250 001 forint összegű eladási ártól 3 év.</li>
          </ul>
          <p>
            A jótállás érvényesíthetőségének határideje <sup>4</sup>:
          </p>
          <p className="box">
            A termék kijavítása esetén a jótállás időtartama meghosszabbodik a
            kijavításra átadás napjától kezdve azzal az idővel, amely alatt a
            fogyasztó a terméket a hiba miatt rendeltetésszerűen nem
            használhatta!
          </p>
        </li>
        <li>
          <h2>JAVÍTÓSZOLGÁLAT, SZERVIZ</h2>
          <p>
            Fogyasztó az alábbi javítószolgálat(ok)nál, szerviz(ek)nél
            közvetlenül is érvényesítheti kijavítási igényét<sup>5</sup> :
          </p>

          <table>
            <tbody>
              <tr>
                <td width={"30%"}>Cégnév:</td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>Cím:</td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>Telefonszám:</td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>E-mail cím:</td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
            </tbody>
          </table>
        </li>
        <li>
          <h2>KIJAVÍTÁSI IGÉNY TELJESÍTÉSE</h2>
          <h3>
            Az első kijavítás esetén kitöltendő!<sup>6</sup>
          </h3>
          <table>
            <tbody>
              <tr>
                <td width={"30%"}>
                  Az első kijavítás iránti igény bejelentésének időpontja:
                </td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>
                  Az első alkalommal történő kijavítás módja:
                </td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>Hiba oka:</td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>
                  Az első alkalommal történő kijavítás módja:
                </td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>
                  A termék fogyasztó részére történő visszaadásának időpontja:
                </td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
            </tbody>
          </table>
          <h3>
            A második kijavítás esetén kitöltendő! <sup>6</sup>
          </h3>
          <table>
            <tbody>
              <tr>
                <td width={"30%"}>
                  A második kijavítás iránti igény bejelentésének időpontja:
                </td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>
                  A második alkalommal történő kijavítás módja:
                </td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>Hiba oka:</td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>
                  A második alkalommal történő kijavítás módja:
                </td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>
                  A termék fogyasztó részére történő visszaadásának időpontja:
                </td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
            </tbody>
          </table>
          <h3>
            A harmadik kijavítás esetén kitöltendő! <sup>6</sup>
          </h3>
          <table>
            <tbody>
              <tr>
                <td width={"30%"}>
                  A harmadik kijavítás iránti igény bejelentésének időpontja:
                </td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>
                  A harmadik alkalommal történő kijavítás módja:
                </td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>Hiba oka:</td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>
                  A harmadik alkalommal történő kijavítás módja:
                </td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td width={"30%"}>
                  A termék fogyasztó részére történő visszaadásának időpontja:
                </td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
            </tbody>
          </table>
        </li>
        <li>
          <h2>
            KICSERÉLÉS IRÁNTI IGÉNY TELJESÍTÉSE VAGY A VÉTELÁR VISSZATÉRÍTÉSE
            <sup>7</sup>
          </h2>
          <table>
            <tbody>
              <tr>
                <td>A termék kicserélése megtörtént:</td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
              <tr>
                <td>A termék vételárának visszatérítése megtörtént:</td>
                <td>
                  <span className="placeholder">placeholder</span>
                </td>
              </tr>
            </tbody>
          </table>
        </li>
        <li>
          <h2>A FOGYASZTÓ JÓTÁLLÁSBÓL EREDŐ JOGAI</h2>
        </li>
      </ol>
      <ol>
        <ol>
          <li>
            <h4>Általános szabályok</h4>
            <p>
              A jótállás a fogyasztó jogszabályból eredő jogait – így különösen,
              de nem kizárólagosan a kellék- és termékszavatossági, illetve
              kártérítési jogait – nem érinti.
            </p>
            <p>
              A jótállási kötelezettségek teljesítése és az azzal kapcsolatos
              költségek a fogyasztási cikk eladóját terhelik.
            </p>
            <p>
              A jótállásból eredő jogok a jótállási jeggyel érvényesíthetőek,
              amelynek nem tehető feltételévé a fogyasztási cikk felbontott
              csomagolásának a fogyasztó általi visszaszolgáltatása. A jótállási
              jegy szabálytalan kiállítása vagy a jótállási jegy fogyasztó
              rendelkezésére bocsátásának elmaradása a jótállás érvényességét
              nem érinti.
            </p>
            <p>
              Amennyiben a jótállási jegyet a fogyasztó részére nem adják át, a
              szerződés megkötését bizonyítottnak kell tekinteni akkor is, ha a
              fogyasztó az ellenérték megfizetését igazoló bizonylatot, nyugtát
              vagy számlát bemutatja. Ebben az esetben a jótállásból eredő jogok
              az ellenérték megfizetését igazoló bizonylattal (pl. blokkal)
              érvényesíthetőek.
            </p>
            <p>
              A jótállási határidő a fogyasztási cikk fogyasztó részére történő
              átadásának, vagy ha az üzembe helyezést a vállalkozás vagy annak
              megbízottja végzi, az üzembe helyezésnek a napjával kezdődik,
              ennek dátumát a jótállási jegyen rögzítették.
            </p>
            <p>
              A jótállási igény érvényesíthetőségének határideje a felek között
              létrejött szerződés teljesítésétől, vagyis a fogyasztási cikk
              fogyasztó részére történő átadásától vagy az üzembe helyezésének
              napjával kezdődik és a termék árától függően 1, 2, vagy 3 évig
              tart.
            </p>
            <p>
              A fogyasztó a hiba felfedezése után késedelem nélkül köteles a
              hibát a vállalkozással közölni. Fogyasztó és vállalkozás közötti
              szerződés esetén a hiba felfedezésétől számított két hónapon belül
              közölt hibát késedelem nélkül közöltnek kell tekinteni. A közlés
              késedelméből eredő kárért a fogyasztó a felelős.
            </p>
            <p>
              A fogyasztási cikk kijavítása esetén a jótállás időtartama
              meghosszabbodik a javításra átadás napjától kezdve azzal az
              idővel, amely alatt a fogyasztó a fogyasztási cikket a hiba miatt
              rendeltetésszerűen nem használhatta.
            </p>
            <p>
              Fogyasztói jogvita esetén a fogyasztó a vármegyei (fővárosi)
              kereskedelmi és iparkamarák által működtetett bármelyik békéltető
              testületnél eljárást kezdeményezhet.
            </p>
          </li>
          <li>
            <h4>Jótállási jogok</h4>
            <p>
              A jótállás keretében belül a jótállási igénye alapján a fogyasztó
              választása szerint:
            </p>
            <ul>
              <li>
                <h4>
                  kijavítást vagy kicserélést igényelhet
                  <span>
                    , kivéve, ha a választott jótállási igény teljesítése
                    lehetetlen, vagy ha az a vállalkozásnak - másik jótállási
                    igény teljesítésével összehasonlítva - aránytalan
                    többletköltséget eredményezne, figyelembe véve a
                    szolgáltatás hibátlan állapotban képviselt értékét, a
                    szerződésszegés súlyát és a jótállás teljesítésével a
                    fogyasztónak okozott érdeksérelmet;
                  </span>
                </h4>
              </li>
              <li>
                <p>
                  az ellenszolgáltatás (termék ára) arányos
                  <b> leszállítását igényelheti</b>, - a megjelölt kivétellel -
                  a hibát a vállalkozás költségére maga kijavíthatja vagy mással
                  kijavíttathatja, vagy
                </p>
              </li>
              <li>
                <p>
                  a szerződéstől <b>elállhat</b>, ha a vállalkozás a kijavítást
                  vagy a kicserélést nem vállalta, e kötelezettségének nem tud
                  eleget tenni, vagy ha a fogyasztónak a kijavításhoz vagy
                  kicseréléshez fűződő érdeke megszűnt. Ilyenkor a termék
                  vételára visszajár a fogyasztónak.
                </p>
                <p>Jelentéktelen hiba miatt elállásnak nincs helye.</p>
                <p>
                  A vállalkozás a fogyasztó nála bejelentett jótállási igényéről
                  jegyzőkönyvet köteles felvenni a fogyasztó és vállalkozás
                  közötti szerződés keretében eladott dolgokra vonatkozó
                  szavatossági és jótállási igények intézésének eljárási
                  szabályairól szóló 19/2014. (IV. 29.) NGM rendelet szerint.
                </p>
                <p>Kijavítás, kicserélés szabályai</p>
                <p>
                  A kijavítást vagy kicserélést - a dolog tulajdonságaira és a
                  jogosult által elvárható rendeltetésére figyelemmel -megfelelő
                  határidőn belül, a fogyasztó érdekeit kímélve kell elvégezni.
                </p>
                <p>
                  A fogyasztó a választott jogáról másikra térhet át. Az
                  áttéréssel okozott költséget köteles a vállalkozásnak
                  megfizetni, kivéve, ha az áttérésre a vállalkozás adott okot,
                  vagy az áttérés egyébként indokolt volt.
                </p>
                <p>
                  A fogyasztó a jótállási igényét választása szerint a
                  vállalkozás székhelyén, bármely telephelyén, fióktelepén és a
                  vállalkozás által a jótállási jegyen feltüntetett
                  javítószolgálatnál közvetlenül is érvényesítheti.
                </p>
                <p>
                  A kijavítás során a termékbe kizárólag új alkatrész építhető
                  be.
                </p>
                <p>Javítási és csere határidők</p>
                <ol>
                  <li>
                    <p>
                      A vállalkozásnak törekednie kell arra, hogy
                      <b>
                        {" "}
                        a kijavítást vagy kicserélést legfeljebb tizenöt napon
                        belül elvégezze
                      </b>
                      .
                    </p>
                    <h4>
                      Ha a kijavítás vagy a kicserélés időtartama a tizenöt
                      napot meghaladja, akkor a vállalkozás legkésőbb a 15.
                      napon a fogyasztót tájékoztatni köteles a kijavítás vagy a
                      csere várható időtartamáról.
                      <span>
                        A tájékoztatás a fogyasztó előzetes hozzájárulása
                        esetén, elektronikus úton vagy a fogyasztó általi
                        átvétel igazolására alkalmas más módon történik.
                      </span>
                    </h4>
                    <p>
                      <b>
                        Ha a fent megjelölt jótállási időtartam alatt a
                        fogyasztási cikk első alkalommal történő javítása során{" "}
                      </b>
                      a vállalkozás részéről megállapítást nyer, hogy a
                      fogyasztási cikk <b>nem javítható</b>, a fogyasztó eltérő
                      rendelkezése hiányában a vállalkozás <b>köteles </b>a
                      fogyasztási cikket <b>nyolc napon belül kicserélni</b>. Ha
                      a fogyasztási cikk cseréjére nincs lehetőség, a
                      vállalkozás köteles a fogyasztó által bemutatott, a
                      fogyasztási cikk ellenértékének megfizetését igazoló
                      bizonylaton, nyugtán, számlán<span> 8 </span>feltüntetett
                      <b>
                        {" "}
                        vételárat nyolc napon belül a fogyasztó részére
                        visszatéríteni.{" "}
                      </b>
                      Ez a szabály az elektromos kerékpárra, elektromos
                      rollerre, quadra, motorkerékpárra, segédmotoros
                      kerékpárra, személygépkocsira, lakóautóra, lakókocsira,
                      utánfutós lakókocsira, utánfutóra, motoros vízi járműre
                      nem vonatkozik.
                    </p>
                    <p>
                      Ha a fogyasztási cikk{" "}
                      <b>
                        kijavítására a kijavítási igény vállalkozás részére való
                        közlésétől számított harmincadik napig nem kerül sor
                      </b>
                      , - a fogyasztó eltérő rendelkezése hiányában - a
                      vállalkozás köteles a fogyasztási cikket a{" "}
                      <b>
                        harmincnapos határidő eredménytelen elteltét követő
                        nyolc napon belül kicserélni
                      </b>
                      . Ha a fogyasztási cikk cseréjére nincs lehetőség, a
                      vállalkozás köteles a fogyasztó által bemutatott, a
                      fogyasztási cikk ellenértékének megfizetését igazoló
                      bizonylaton, nyugtán, számlán feltüntetett vételárat a
                      harmincnapos kijavítási határidő eredménytelen elteltét
                      követő nyolc napon belül a fogyasztó részére
                      visszatéríteni. Ez a szabály az elektromos kerékpárra,
                      elektromos rollerre, quadra, motorkerékpárra, segédmotoros
                      kerékpárra, személygépkocsira, lakóautóra, lakókocsira,
                      utánfutós lakókocsira, utánfutóra, motoros vízi járműre
                      nem vonatkozik.
                    </p>
                  </li>
                  <li>
                    <p>
                      Ha a jótállási jegyen rögzített{" "}
                      <i>jótállási időtartam </i>alatt a fogyasztási cikk
                      <b>
                        {" "}
                        három alkalommal történő kijavítást követően ismét
                        meghibásodik{" "}
                      </b>
                      - a fogyasztó eltérő rendelkezése hiányában -, valamint ha
                      a fogyasztó a vonatkozó jogszabályok alapján nem igényli a
                      vételár arányos leszállítását, és a fogyasztó nem kívánja
                      a fogyasztási cikket a vállalkozás költségére kijavítani
                      vagy mással kijavíttatni, a vállalkozás
                      <b>
                        {" "}
                        köteles a fogyasztási cikket nyolc napon belül
                        kicserélni
                      </b>
                      . Ha a fogyasztási cikk kicserélésére nincs lehetőség, a
                      vállalkozás köteles a fogyasztó által bemutatott, a
                      fogyasztási cikk ellenértékének megfizetését igazoló
                      bizonylaton, nyugtán, számlán feltüntetett
                      <b>
                        {" "}
                        vételárat nyolc napon belül a fogyasztó részére
                        visszatéríteni.{" "}
                      </b>
                      Ez a szabály az elektromos kerékpárra, elektromos
                      rollerre, quadra, motorkerékpárra, segédmotoros
                      kerékpárra, személygépkocsira, lakóautóra, lakókocsira,
                      utánfutós lakókocsira, utánfutóra, motoros vízi járműre
                      nem vonatkozik.
                    </p>
                  </li>
                  <li>
                    <p>
                      Ha a fogyasztó a fogyasztási cikk meghibásodása miatt a
                      vásárlástól (üzembe helyezéstől) számított három
                      munkanapon belül érvényesít csereigényt, a vállalkozás nem
                      hivatkozhat aránytalan többletköltségre, hanem köteles a
                      fogyasztási cikket kicserélni, feltéve, hogy a
                      meghibásodás a rendeltetésszerű használatot akadályozza.
                    </p>
                  </li>
                </ol>
                <p>Javítás helyszíne</p>
                <p>
                  A rögzített bekötésű, illetve a 10 kg-nál súlyosabb, vagy
                  tömegközlekedési eszközön kézi csomagként nem szállítható
                  fogyasztási cikket - a járművek kivételével - az üzemeltetés
                  helyén kell megjavítani. Ha a kijavítás az üzemeltetés helyén
                  nem végezhető el, a le- és felszerelésről, valamint az el- és
                  visszaszállításról a vállalkozás, vagy - a javítószolgálatnál
                  közvetlenül érvényesített kijavítás iránti igény esetén - a
                  javítószolgálat gondoskodik.
                </p>
                <p>
                  <br />
                </p>
              </li>
            </ul>
          </li>
          <li>
            <h4>Kivételek:</h4>
            <p>
              A jótállási felelősségvállalás - különösen, de nem kizárólag – az
              alábbi esetkörökre nem terjed ki:
            </p>
            <ul>
              <li>
                <p>
                  szakszerűtlen üzembe helyezés, ha az üzembe helyezést nem a
                  vállalkozás vagy annak megbízottja végezte el, továbbá ha a
                  szakszerűtlen üzembe helyezés nem a használati-kezelési
                  útmutató hibájára vagy hiányára vezethető vissza,
                </p>
              </li>
              <li>
                <p>nem rendeltetésszerű használat,</p>
              </li>
              <li>
                <p>
                  karbantartási kötelezettség elmulasztása<span>9</span>,
                </p>
              </li>
              <li>
                <p>helytelen tárolás, kezelés, rongálás,</p>
              </li>
              <li>
                <p>amennyiben a hibát elemi kár, természeti csapás okozta.</p>
              </li>
            </ul>
          </li>
          <li>
            <h4>Kötelező karbantartási kötelezettség</h4>
          </li>
        </ol>
      </ol>
      <p></p>

      <table>
        <tbody>
          <tr>
            <td width={"50%"}>
              A fogyasztó karbantartási kötelezettsége<sup>10 </sup>:
            </td>
            <td width={"50%"}>
              <span className="placeholder">placeholder</span>
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        A kötelező karbantartási kötelezettséggel felmerülő költségek a
        fogyasztót terhelik! Ha a dolog meghibásodásában a fogyasztót terhelő
        karbantartási kötelezettség elmulasztása is közrehatott, a jótállási
        kötelezettség teljesítésével felmerült költségeket közrehatása arányában
        a fogyasztó köteles viselni, ha a dolog karbantartására vonatkozó
        ismeretekkel rendelkezett, vagy ha a vállalkozás e tekintetben
        tájékoztatási kötelezettségének eleget tett.
      </p>

      <table>
        <tbody>
          <tr>
            <td>
              <p>
                <b>
                  A 151/2003. (IX.22.) kormányrendelet alapján jótállásköteles
                  termékek felsorolása az alábbi címen érhető el, amelyet a
                  QR-kód leolvasásával meg is nyithat okostelefonján:
                </b>
              </p>
              <a href="http://www.fogyasztovedelem.kormany.hu/%23/jotallaskotelestermekek">
                https://www.fogyasztovedelem.kormany.hu/#/jotallaskotelestermekek
              </a>
            </td>
            <td>
              <img
                width="116"
                height="116"
                alt="QR-kód"
                src="data:image/jpg;base64,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"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <hr />
      <p>
        <b>* </b>
        Ptk. 6:159. § (2a) bekezdés: Fogyasztó és vállalkozás közötti - ingó
        dolognak minősülő áru adásvételére, digitális tartalom szolgáltatására
        vagy digitális szolgáltatások nyújtására irányuló - szerződés esetén a
        fogyasztó kellékszavatossági jogai gyakorlása keretében a hibát a
        kötelezett költségére maga nem javíthatja ki, illetve mással sem
        javíttathatja ki azt.
      </p>
      <p>
        <b>1 </b>Sorszám megadása nem kötelező.
      </p>
      <p>
        <b>2 </b>Elektronikus dokumentum esetén az elektronikus aláírás
        feltüntetése szükséges.
      </p>
      <p>
        <b>3 </b>A vállalkozás vagy közreműködője általi üzembe helyezés esetén
        töltendő ki.
      </p>
      <p>
        <b>4 </b>A jótállási igény érvényesíthetőségének határideje a Felek
        között létrejött szerződés teljesítésétől, vagyis a fogyasztási cikk
        fogyasztó részére történő átadásától vagy az üzembe helyezésének
        napjával kezdődik! Ha a fogyasztó a fogyasztási cikket az átadástól
        számított hat hónapon túl helyezteti üzembe, akkor a jótállási határidő
        kezdő időpontja a fogyasztási cikk átadásának napja.
      </p>
      <p>
        <b>5 </b>Javítószolgálat / szerviz megadása nem kötelező.
      </p>

      <p>
        <b>6 </b>A kijavítási igény teljesítésekor a vállalkozás vagy – a
        javítószolgálatnál közvetlenül érvényesített kijavítás iránti igény
        esetén – a javítószolgálat ezeket az adatokat a jótállási jegyhez
        csatoltan is feltüntetheti.
      </p>
      <p>
        <b>7 </b>A két lehetőség közül csak az egyik töltendő ki!
      </p>

      <p>
        <b>8 </b>
        Kizárólag az általános forgalmi adóról szóló törvény alapján kibocsátott
        számla vagy nyugta fogadható el, amely követelmény a jótállási jegy
        által megkövetelt számlák, nyugták, bizonylatok mindegyike esetén
        alkalmazandó.
      </p>
      <p>
        <b>9 </b>
        Amennyiben a gyártó kötelező karbantartási kötelezettséget ír elő a
        fogyasztó részére.
      </p>
      <p>
        <b>10 </b>Kötelező karbantartási kötelezettség előírása esetén
        kitöltendő.
      </p>
    </div>
  );
};

export default App;
