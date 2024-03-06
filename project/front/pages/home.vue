<script setup lang="ts">
const iconMenu = ref('bi bi-list');
const listMenu = ref('listMenuHidden');
const name = ref(true);
const showList = async () => {
  iconMenu.value =
    iconMenu.value === 'bi bi-list' ? 'bi bi-x-square' : 'bi bi-list';

  listMenu.value =
    listMenu.value === 'listMenuHidden' ? 'listMenu' : 'listMenuHidden';

  name.value = !name.value;
};
const showProjectList = ref(true);
const showExperienceList = ref(false);
const showStudyList = ref(false);
const showInfoList = ref(false);
const showContactList = ref(false);

const showItemList = (event: MouseEvent) => {
  const id = event.target.id;
  const listName = ['projects', 'experience', 'study', 'info', 'contact'];
  const listStates = {
    projects: showProjectList,
    experience: showExperienceList,
    study: showStudyList,
    info: showInfoList,
    contact: showContactList,
  };
  for (let item of listName) {
    listStates[item].value = false;
    let listItem = document.getElementById(item);
    listItem?.classList.remove('selected-item');
  }

  // Check if the listStates includes the id
  if (id in listStates) {
    listStates[id].value = true;
    let selectedListItem = document.getElementById(id);
    selectedListItem?.classList.add('selected-item');
  }
  
  if (event.type === 'click') {
    let div_movil = document.getElementById('menuCategory');
    let navbarTogglerDemo01 = document.getElementById('navbarTogglerDemo01');
    let btn_movil = div_movil?.getElementsByClassName('navbar-toggler');
    btn_movil[0].className = 'navbar-toggler collapsed';
    btn_movil[0].ariaExpanded = false;
    navbarTogglerDemo01.className = 'navbar-collapse collapse';
  }
};
</script>
<template>
  <div class="bd-subnavbar">
    <div class="m-4">
      <button type="button" class="btn-invisible" @click="showList">
        <i :class="iconMenu"></i>
      </button>
    </div>
  </div>
  <div class="home-container">
    <div id="container-start">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title">
        <div v-if="name" class="kode-mono text-gradient">
          <h1>Mauricio Vargas</h1>
          <h5>Dev. Full Stack</h5>
          <div class="icons-social">
            <a href="https://github.com/gogeta20" target="_blank">
              <i class="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mauricio-vargas-18336a1b8/"
              target="_blank"
            >
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div v-else class="d-flex flex-row kode-mono">
          <div class="list-category-movil">
            <nav class="navbar navbar-expand-lg" id="menuCategory">
              <div class="container-fluid">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li id="projects" v-on:click="showItemList">Projectos</li>
                    <li id="experience" v-on:click="showItemList">
                      Experiencia
                    </li>
                    <li id="study" v-on:click="showItemList">Estudios</li>
                    <li id="info" v-on:click="showItemList">Info</li>
                    <li id="contact" v-on:click="showItemList">Contacto</li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          <div class="col-4 list-category-container">
            <ul id="menuCategory" class="list-category">
              <li id="projects" v-on:mouseover="showItemList">Projectos</li>
              <li id="experience" v-on:mouseover="showItemList">Experiencia</li>
              <li id="study" v-on:mouseover="showItemList">Estudios</li>
              <li id="info" v-on:mouseover="showItemList">Info</li>
              <li id="contact" v-on:mouseover="showItemList">Contacto</li>
            </ul>
          </div>

          <div class="col-8">
            <ul id="listProjects" class="list-items" v-show="showProjectList">
              <li class="projectItem btn-three">
                <div class="name-project">ApoloArte</div>
                <div class="info">Codigo a medida para Wordpress</div>
              </li>
              <li class="projectItem btn-three">
                <div class="name-project">Fiordilatte</div>
                <div class="info">Codigo a medida para Wordpress</div>
              </li>
              <li class="projectItem btn-three">
                <div class="name-project">Matelas</div>
                <div class="info">Codigo a medida para Prestashop</div>
              </li>
              <li class="projectItem btn-three">
                <div class="name-project">Xorfor</div>
                <div class="info">
                  Arquitectura hexagonal Symfony 5 cqrs con Vue 3
                </div>
              </li>
              <li class="projectItem btn-three">
                <div class="name-project">Manmon</div>
                <div class="info">
                  Arquitectura hexagonal Symfony 5 con Vue 3
                </div>
              </li>
              <li class="projectItem btn-three">
                <div class="name-project">Lendrock</div>
                <div class="info">Migracion de Symfony 2 a Symfony 5</div>
              </li>
              <li class="projectItem btn-three">
                <div class="name-project">Nortempo</div>
                <div class="info">Monolito Symfony 5</div>
              </li>
              <li class="projectItem btn-three">
                <div class="name-project">Upra</div>
                <div class="info">Monolito Symfony 5</div>
              </li>
              <li class="projectItem btn-three">
                <div class="name-project">Esissi</div>
                <div class="info">
                  Refactorizacion de codigo legacy en Yii 1
                </div>
              </li>
            </ul>
            <!--  -->
            <!--  -->
            <!--  -->
            <ul
              id="listExperience"
              class="list-items list-experience"
              v-show="showExperienceList"
            >
              <li class="projectItem btn-three">
                <div class="d-flex flex-column work">
                  <p class="name-work">Tci Galicia</p>
                  <span class="date-work">Sept 20 - Sept 21</span>
                </div>
                <div class="info">
                  <p>Desarrollo a medida y creacion de plugins para cms</p>
                </div>
              </li>
              <li class="projectItem btn-three">
                <div class="d-flex flex-column">
                  <p class="name-work">Compas net</p>
                  <span class="date-work">Sept 21 - Dic 21</span>
                </div>
                <div class="info">
                  <p>Programador back y front</p>
                  <p>Integraciones con Zoho Crm</p>
                </div>
              </li>
              <li class="projectItem btn-three">
                <div class="d-flex flex-column">
                  <p class="name-work">Bahia Software</p>
                  <span class="date-work">Dic 21 - Agosto 23</span>
                </div>
                <div class="info">
                  <p>Programador back y front</p>
                  <p>Encargado de la integracion continua</p>
                  <p>Analisis de funcionalidades</p>
                </div>
              </li>
              <li class="projectItem btn-three">
                <div class="d-flex flex-column">
                  <p class="name-work">Knowmadmood</p>
                  <span class="date-work">Agosto 23 - actulidad</span>
                </div>
                <div class="info">
                  <p>Programador back y front</p>
                  <p>Implementacion de evolutivos</p>
                  <p>Analisis de funcionalidades</p>
                </div>
              </li>
            </ul>
            <!--  -->
            <!--  -->
            <!--  -->
            <ul id="listStudy" class="list-study" v-show="showStudyList">
              <li class="projectItem btn-three">
                <div class="pb-2">Ciclo Sup. DAM</div>
              </li>
              <li class="projectItem btn-three">
                <div class="pb-2">Ciclo Sup. DAW</div>
              </li>
              <li class="projectItem btn-three">
                <div class="pb-2">Ciclo Medio Adm. de Empresas</div>
              </li>
              <li class="projectItem btn-three">
                <div class="pb-2">
                  Desarrollo Vue3 - <span class="cole">Udemy</span>
                </div>
              </li>
              <li class="projectItem btn-three">
                <div class="pb-2">
                  Arquitectura Hexagonal - <span class="cole">Codely</span>
                </div>
              </li>
              <li class="projectItem btn-three">
                <div class="pb-2">
                  Principios Solid - <span class="cole">Codely</span>
                </div>
              </li>
              <li class="projectItem btn-three">
                <div class="pb-2">
                  Testing - <span class="cole">Codely</span>
                </div>
              </li>
              <li class="projectItem btn-three">
                <div class="pb-2">Docker - <span class="cole">Dexs</span></div>
              </li>
              <li class="projectItem btn-three">
                <div class="pb-2">
                  Principios Phyton - <span class="cole">Dexs</span>
                </div>
              </li>
            </ul>
            <!--  -->
            <!--  -->
            <!--  -->
            <ul id="listInfo" class="list-item-info" v-show="showInfoList">
              <p>
                ¡Hola! Soy alguien que aprecia el silencio y asiste
                religiosamente al gimnasio.
              </p>
              <p>
                La programación es más que solo mi trabajo; Encuentro belleza en
                la elegancia y la eficiencia de un código bien escrito.
              </p>
              <p>
                Me especializo en encontrar soluciones simples y óptimas para
                los desafíos que se presentan en el desarrollo de software.
              </p>
              <p>
                Lo que más me apasiona de este campo es su constante evolución.
                Siempre hay algo nuevo que aprender: ya sea una tecnología
                innovadora, una arquitectura emergente o un framework
                revolucionario. Nunca hay tiempo para aburrirse cuando te
                dedicas a la programación.
              </p>
            </ul>
            <!--  -->
            <!--  -->
            <!--  -->
            <ul id="listContact" class="list-items" v-show="showContactList">
              <div class="mb-5">
                <p>Puedes contactarme por linkedink</p>
                <p>te dejo mi perfil</p>
              </div>
              <div class="mb-5">
                <a
                  class="linkedin-enlace"
                  href="https://www.linkedin.com/in/mauricio-vargas-18336a1b8/"
                  target="_blank"
                  ><i class="bi bi-linkedin"></i>Mauricio Vargas</a
                >
              </div>
              <div class="mb-5">
                <a class="linkedin-enlace"
                  ><i class="bi bi-filetype-pdf"></i>Descargar Curriculum
                  vitae</a
                >
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="icons-tech">
      <div class="d-flex justify-content-center">
        <div class="list-skills">
          <i class="fa-brands fa-php" title="PHP"></i>
          <i class="fa-brands fa-symfony" title="Symfony"></i>
          <i class="fa-brands fa-square-js" title="JavaScript"></i>
          <i class="fa-brands fa-vuejs" title="Vue.js"></i>
          <i class="fa-solid fa-database" title="Base de datos"></i>
          <i class="fa-brands fa-git-alt" title="Git"></i>
          <i class="fa-brands fa-css3-alt" title="CSS3"></i>
          <i class="fa-brands fa-html5" title="HTML5"></i>
        </div>
      </div>
    </div>
  </div>

  <!-- <div :class="listMenu">list</div> -->
</template>

<style>
.icons-social {
  font-size: 1.5rem;
}
.list-skills {
  width: 20%;
  display: flex;
  justify-content: space-evenly;
  opacity: 0.3;
}
.icons-tech {
  font-size: 1.8rem;
  position: absolute;
  bottom: 10px;
  width: 100%;
  color: white;
}
.list-category {
  list-style: none;
  font-size: 2rem;
  width: 90%;
}

.list-category li {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.list-experience li {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.list-study {
  font-size: 1.5rem;
  text-align: left;
}

.list-info {
  padding: 2rem;
  background-color: #00000036;
  border-radius: 16px;
}

.list-items {
  list-style: none;
  font-size: 1.5rem;
  text-align: left;
}

.list-item-info {
  list-style: none;
  font-size: 1.2rem;
  text-align: left;
  background-color: #00000029;
  padding: 2rem;
  border-radius: 20px;
}
.listMenu {
  display: block;
}

.linkedin-enlace {
  text-decoration: none;
  color: white;
}

.listMenuHidden {
  display: none;
}
.blue {
  color: #0a66c2;
}

.btn-invisible {
  background: #f0f8ff00;
  color: white;
  border: none;
}
.home-container {
  height: 100vh;
}
.cole {
  background: -webkit-linear-gradient(rgb(150, 145, 105), #89989b);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.name-work {
  padding-bottom: 0;
  margin-bottom: 0;
}
.work {
  min-width: 25%;
}

.name-project {
  min-width: 20%;
}

.date-work {
  font-size: 0.8rem;
}

.text-gradient {
  background: -webkit-linear-gradient(white, #38495a);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.selected-item {
  background: -webkit-linear-gradient(rgb(180, 166, 57), #bbcacd);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  content: '';
  /* width: 40%; */
}

.projectItem:hover div.info {
  background: -webkit-linear-gradient(rgb(150, 145, 105), #bbcacd);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
  /* padding-left: 3rem; */
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
  font-size: 1rem;
  /* position: absolute; */
  /* right: 0; */
}
.projectItem:hover {
  background: -webkit-linear-gradient(rgb(150, 145, 105), #bbcacd);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.projectItem {
  display: flex;
  /* position: absolute; */
  /* right: 0; */
}
.info {
  display: none;
  padding-left: 3rem;
}
/* #projects:hover > #listProjects {
  display: block;
} */

/* #listProjects {
  display: none;
}
#listStudy {
  display: none;
} */
.btn-three {
  /* color: #fff; */
  transition: all 0.5s;
  position: relative;
  padding: 0.5rem;
  padding-bottom: 0.6rem;
  /* padding-left: 2rem; */
}
/* .btn-three::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
} */
.btn-three:hover::before {
  opacity: 0;
  transform: scale(0.5, 0.5);
}
.btn-three::after {
  content: '';
  position: absolute;
  top: 0;
  left: 20px;
  width: 40%;
  height: 80%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  /* border: 1px solid rgba(255, 255, 255, 0.5); */
  /* transform: scale(1.5, 1.5); */
}
.btn-three:hover::after {
  opacity: 1;
  transform: scale(1, 1);
}
#container-start {
  height: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
}

#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 1864px 1277px #fff, 459px 906px #fff, 581px 191px #fff,
    159px 1178px #fff, 6px 1672px #fff, 1809px 245px #fff, 1397px 270px #fff,
    1372px 1934px #fff, 369px 1259px #fff, 1657px 468px #fff, 1948px 248px #fff,
    1797px 1768px #fff, 998px 1120px #fff, 926px 14px #fff, 1117px 1373px #fff,
    1839px 1175px #fff, 1526px 1968px #fff, 1547px 247px #fff,
    1367px 1253px #fff, 1999px 1750px #fff, 1939px 208px #fff,
    1422px 1096px #fff, 1325px 1856px #fff, 1233px 866px #fff, 1304px 132px #fff,
    640px 501px #fff, 1565px 1910px #fff, 850px 732px #fff, 957px 1585px #fff,
    519px 613px #fff, 1433px 1199px #fff, 1504px 1202px #fff, 127px 1621px #fff,
    189px 1466px #fff, 970px 1444px #fff, 1513px 376px #fff, 825px 134px #fff,
    1271px 786px #fff, 215px 1222px #fff, 728px 990px #fff, 1863px 952px #fff,
    1346px 1769px #fff, 485px 93px #fff, 54px 1224px #fff, 1812px 1093px #fff,
    1053px 6px #fff, 1207px 976px #fff, 1273px 545px #fff, 606px 1037px #fff,
    1277px 186px #fff, 1122px 1607px #fff, 1684px 1759px #fff,
    1520px 1785px #fff, 783px 544px #fff, 1100px 588px #fff, 417px 100px #fff,
    1233px 1970px #fff, 73px 497px #fff, 524px 1993px #fff, 1100px 1936px #fff,
    536px 1441px #fff, 1973px 1190px #fff, 1244px 1075px #fff, 1640px 943px #fff,
    762px 1486px #fff, 1792px 888px #fff, 1569px 1452px #fff, 1525px 1333px #fff,
    103px 1378px #fff, 1449px 973px #fff, 388px 774px #fff, 1484px 919px #fff,
    709px 787px #fff, 686px 62px #fff, 380px 1450px #fff, 625px 2000px #fff,
    1610px 15px #fff, 1286px 1076px #fff, 333px 52px #fff, 1425px 1218px #fff,
    1819px 1366px #fff, 624px 1956px #fff, 1777px 1910px #fff, 1239px 687px #fff,
    95px 1151px #fff, 282px 1399px #fff, 1863px 333px #fff, 1275px 140px #fff,
    542px 64px #fff, 987px 1883px #fff, 1557px 1204px #fff, 1528px 395px #fff,
    381px 1792px #fff, 1813px 405px #fff, 1822px 646px #fff, 1789px 1394px #fff,
    323px 1091px #fff, 1212px 479px #fff, 1872px 361px #fff, 1282px 334px #fff,
    502px 400px #fff, 1948px 173px #fff, 465px 77px #fff, 1322px 1602px #fff,
    1178px 1415px #fff, 594px 1652px #fff, 765px 477px #fff, 1490px 1955px #fff,
    989px 1844px #fff, 667px 1500px #fff, 1902px 220px #fff, 1290px 882px #fff,
    1330px 1317px #fff, 1070px 539px #fff, 9px 632px #fff, 1863px 983px #fff,
    875px 1676px #fff, 852px 1377px #fff, 546px 391px #fff, 1628px 956px #fff,
    496px 828px #fff, 1207px 548px #fff, 1328px 834px #fff, 1410px 120px #fff,
    369px 156px #fff, 1573px 1519px #fff, 1697px 1475px #fff, 1995px 530px #fff,
    950px 953px #fff, 906px 1359px #fff, 784px 1298px #fff, 1400px 1874px #fff,
    1874px 1774px #fff, 50px 389px #fff, 1880px 1426px #fff, 551px 476px #fff,
    503px 1928px #fff, 532px 1920px #fff, 403px 168px #fff, 1334px 1213px #fff,
    1891px 1123px #fff, 1582px 480px #fff, 322px 1737px #fff, 913px 307px #fff,
    915px 618px #fff, 186px 12px #fff, 1972px 742px #fff, 704px 309px #fff,
    1995px 458px #fff, 480px 881px #fff, 1124px 1337px #fff, 647px 672px #fff,
    1364px 479px #fff, 1308px 175px #fff, 1832px 1061px #fff, 839px 195px #fff,
    215px 443px #fff, 922px 923px #fff, 1618px 365px #fff, 40px 1688px #fff,
    1844px 219px #fff, 94px 1092px #fff, 1478px 1480px #fff, 1608px 1048px #fff,
    1724px 1724px #fff, 1055px 739px #fff, 489px 1519px #fff, 1600px 922px #fff,
    1498px 1402px #fff, 1624px 1512px #fff, 674px 812px #fff, 965px 1800px #fff,
    56px 523px #fff, 500px 1198px #fff, 1397px 1056px #fff, 630px 821px #fff,
    1589px 1012px #fff, 1812px 1027px #fff, 1519px 452px #fff,
    1409px 1768px #fff, 1802px 1605px #fff, 1281px 1835px #fff, 659px 382px #fff,
    278px 380px #fff, 1987px 1017px #fff, 1187px 1647px #fff, 254px 213px #fff,
    1786px 1660px #fff, 1455px 271px #fff, 293px 993px #fff, 1972px 1945px #fff,
    1447px 1188px #fff, 1456px 509px #fff, 230px 332px #fff, 116px 888px #fff,
    1484px 937px #fff, 902px 697px #fff, 415px 1573px #fff, 1449px 1534px #fff,
    751px 1077px #fff, 695px 208px #fff, 1411px 358px #fff, 332px 1765px #fff,
    340px 907px #fff, 804px 1373px #fff, 434px 1235px #fff, 62px 1328px #fff,
    847px 320px #fff, 864px 743px #fff, 1px 1891px #fff, 946px 1923px #fff,
    372px 799px #fff, 1143px 1165px #fff, 861px 1615px #fff, 1988px 567px #fff,
    1143px 1272px #fff, 1842px 368px #fff, 1906px 1113px #fff, 1356px 744px #fff,
    1111px 1668px #fff, 629px 779px #fff, 485px 1439px #fff, 50px 115px #fff,
    1416px 996px #fff, 649px 1932px #fff, 1455px 683px #fff, 425px 1416px #fff,
    503px 132px #fff, 1368px 1126px #fff, 1541px 1079px #fff, 1680px 1798px #fff,
    286px 1981px #fff, 1056px 1347px #fff, 1941px 1500px #fff, 1396px 284px #fff,
    1257px 465px #fff, 40px 1642px #fff, 1396px 1544px #fff, 1048px 863px #fff,
    1142px 99px #fff, 1371px 1631px #fff, 1934px 52px #fff, 595px 1961px #fff,
    1720px 1142px #fff, 1851px 581px #fff, 1513px 498px #fff, 1056px 49px #fff,
    1565px 1698px #fff, 61px 1956px #fff, 606px 1927px #fff, 1625px 115px #fff,
    785px 1843px #fff, 1731px 61px #fff, 599px 1836px #fff, 1291px 1415px #fff,
    378px 1478px #fff, 1510px 937px #fff, 1244px 99px #fff, 1346px 834px #fff,
    526px 75px #fff, 736px 542px #fff, 1933px 26px #fff, 909px 1307px #fff,
    373px 1123px #fff, 1997px 574px #fff, 1371px 1470px #fff, 1245px 607px #fff,
    1550px 690px #fff, 595px 1920px #fff, 1666px 1751px #fff, 1070px 1936px #fff,
    480px 476px #fff, 1449px 855px #fff, 1675px 1551px #fff, 768px 407px #fff,
    260px 431px #fff, 1496px 202px #fff, 1984px 401px #fff, 1890px 1997px #fff,
    300px 21px #fff, 786px 1836px #fff, 1917px 1719px #fff, 1354px 1434px #fff,
    1956px 1950px #fff, 1712px 1193px #fff, 1028px 488px #fff, 146px 312px #fff,
    1453px 1703px #fff, 300px 829px #fff, 1274px 233px #fff, 1926px 1860px #fff,
    129px 1387px #fff, 458px 385px #fff, 1138px 1017px #fff, 1155px 1942px #fff,
    731px 1472px #fff, 62px 1728px #fff, 805px 788px #fff, 1298px 1882px #fff,
    1831px 467px #fff, 853px 1352px #fff, 466px 1859px #fff, 1196px 1172px #fff,
    404px 152px #fff, 1158px 717px #fff, 1534px 270px #fff, 752px 1630px #fff,
    1449px 719px #fff, 1037px 840px #fff, 1920px 605px #fff, 126px 226px #fff,
    748px 1811px #fff, 454px 1187px #fff, 773px 329px #fff, 1910px 1188px #fff,
    814px 595px #fff, 1561px 75px #fff, 803px 1833px #fff, 1680px 844px #fff,
    1762px 257px #fff, 1810px 799px #fff, 1910px 1511px #fff, 109px 1509px #fff,
    1746px 1479px #fff, 1850px 1235px #fff, 1895px 126px #fff, 36px 1911px #fff,
    1607px 1296px #fff, 1322px 489px #fff, 1118px 186px #fff, 1729px 54px #fff,
    1329px 1962px #fff, 1662px 442px #fff, 1190px 1593px #fff, 741px 17px #fff,
    1512px 1893px #fff, 669px 1636px #fff, 118px 271px #fff, 107px 238px #fff,
    748px 1258px #fff, 391px 155px #fff, 741px 1738px #fff, 592px 1267px #fff,
    1402px 703px #fff, 464px 1904px #fff, 602px 466px #fff, 162px 185px #fff,
    1207px 1938px #fff, 1306px 190px #fff, 408px 1107px #fff, 411px 1929px #fff,
    53px 1114px #fff, 554px 1473px #fff, 1964px 938px #fff, 549px 249px #fff,
    543px 1597px #fff, 1918px 546px #fff, 215px 236px #fff, 85px 808px #fff,
    111px 580px #fff, 1515px 1490px #fff, 171px 136px #fff, 1299px 832px #fff,
    1431px 183px #fff, 801px 1081px #fff, 770px 1504px #fff, 1698px 1696px #fff,
    16px 1590px #fff, 1744px 538px #fff, 1686px 1106px #fff, 529px 1425px #fff,
    708px 1188px #fff, 219px 634px #fff, 637px 649px #fff, 1345px 268px #fff,
    120px 1015px #fff, 894px 1561px #fff, 1698px 144px #fff, 1910px 257px #fff,
    768px 1166px #fff, 468px 1431px #fff, 693px 861px #fff, 1280px 665px #fff,
    1122px 159px #fff, 1500px 535px #fff, 1871px 1750px #fff, 1768px 752px #fff,
    723px 400px #fff, 241px 832px #fff, 522px 408px #fff, 880px 144px #fff,
    1879px 1986px #fff, 1668px 1000px #fff, 62px 1830px #fff, 1917px 1463px #fff,
    1628px 408px #fff, 1360px 834px #fff, 791px 1101px #fff, 1606px 442px #fff,
    1696px 1654px #fff, 780px 1619px #fff, 522px 1560px #fff, 7px 1133px #fff,
    1005px 1472px #fff, 1361px 1317px #fff, 685px 895px #fff, 1820px 1747px #fff,
    61px 1428px #fff, 1383px 1005px #fff, 555px 1630px #fff, 371px 586px #fff,
    92px 151px #fff, 675px 809px #fff, 137px 1336px #fff, 733px 197px #fff,
    1172px 114px #fff, 351px 641px #fff, 1539px 1556px #fff, 1509px 394px #fff,
    1261px 1826px #fff, 1292px 1625px #fff, 897px 454px #fff, 565px 246px #fff,
    646px 1918px #fff, 458px 856px #fff, 1729px 1734px #fff, 1474px 288px #fff,
    59px 1800px #fff, 1086px 1237px #fff, 351px 333px #fff, 1518px 830px #fff,
    1135px 1401px #fff, 846px 1976px #fff, 1594px 1033px #fff, 1554px 359px #fff,
    1437px 1663px #fff, 61px 1364px #fff, 1132px 151px #fff, 380px 323px #fff,
    426px 1328px #fff, 329px 302px #fff, 1658px 802px #fff, 1956px 1441px #fff,
    884px 122px #fff, 1053px 261px #fff, 1596px 705px #fff, 1378px 1407px #fff,
    223px 1574px #fff, 164px 1569px #fff, 255px 647px #fff, 579px 1995px #fff,
    1074px 709px #fff, 260px 1903px #fff, 1448px 1547px #fff, 1871px 1625px #fff,
    1712px 1994px #fff, 1563px 568px #fff, 865px 1792px #fff, 1844px 94px #fff,
    944px 78px #fff, 1183px 1033px #fff, 1654px 1851px #fff, 1895px 1125px #fff,
    95px 191px #fff, 1262px 1644px #fff, 1669px 1226px #fff, 468px 626px #fff,
    352px 338px #fff, 1682px 172px #fff, 830px 1143px #fff, 1822px 1758px #fff,
    1577px 537px #fff, 1791px 581px #fff, 1167px 421px #fff, 1171px 1916px #fff,
    169px 1443px #fff, 1927px 146px #fff, 17px 819px #fff, 215px 1380px #fff,
    1390px 301px #fff, 686px 1948px #fff, 1130px 1999px #fff, 2px 1325px #fff,
    931px 1096px #fff, 783px 1845px #fff, 902px 788px #fff, 1386px 1349px #fff,
    1590px 1806px #fff, 1401px 1325px #fff, 276px 271px #fff, 1891px 1240px #fff,
    1193px 439px #fff, 1344px 668px #fff, 1476px 803px #fff, 846px 346px #fff,
    479px 1481px #fff, 1489px 818px #fff, 1420px 758px #fff, 946px 998px #fff,
    328px 1538px #fff, 545px 940px #fff, 243px 421px #fff, 69px 1842px #fff,
    182px 461px #fff, 720px 1239px #fff, 1367px 1948px #fff, 1251px 1872px #fff,
    1378px 820px #fff, 141px 1675px #fff, 938px 1350px #fff, 899px 931px #fff,
    498px 1391px #fff, 1340px 1782px #fff, 6px 1980px #fff, 713px 984px #fff,
    1713px 1044px #fff, 733px 1629px #fff, 371px 1678px #fff, 1231px 1809px #fff,
    1153px 416px #fff, 1905px 388px #fff, 506px 1745px #fff, 566px 1837px #fff,
    203px 1666px #fff, 1947px 977px #fff, 1559px 1613px #fff, 1703px 122px #fff,
    1998px 1728px #fff, 1598px 1637px #fff, 668px 1177px #fff, 436px 1606px #fff,
    341px 527px #fff, 1585px 1839px #fff, 414px 1645px #fff, 232px 216px #fff,
    1716px 1586px #fff, 1464px 601px #fff, 1527px 915px #fff, 765px 927px #fff,
    693px 1173px #fff, 1020px 1795px #fff, 1592px 935px #fff, 1157px 1168px #fff,
    541px 843px #fff, 555px 1563px #fff, 26px 498px #fff, 1163px 1458px #fff,
    908px 178px #fff, 282px 1412px #fff, 1233px 1400px #fff, 373px 1531px #fff,
    1353px 1303px #fff, 1685px 689px #fff, 1404px 36px #fff, 1615px 755px #fff,
    390px 215px #fff, 1553px 998px #fff, 166px 905px #fff, 94px 1975px #fff,
    1211px 948px #fff, 106px 17px #fff, 1510px 1184px #fff, 260px 226px #fff,
    117px 1128px #fff, 642px 1366px #fff, 20px 298px #fff, 1703px 533px #fff,
    1972px 1749px #fff, 760px 1353px #fff, 906px 1257px #fff, 1108px 1083px #fff,
    1290px 1638px #fff, 1487px 563px #fff, 1597px 1530px #fff, 185px 1716px #fff,
    1478px 1194px #fff, 1585px 879px #fff, 1722px 1163px #fff, 900px 1537px #fff,
    571px 1841px #fff, 596px 1033px #fff, 1870px 907px #fff, 757px 368px #fff,
    1586px 1179px #fff, 818px 1697px #fff, 600px 1158px #fff, 1429px 1418px #fff,
    1030px 726px #fff, 1846px 423px #fff, 145px 60px #fff, 160px 437px #fff,
    1390px 1684px #fff, 1528px 933px #fff, 61px 656px #fff, 1301px 109px #fff,
    331px 682px #fff, 451px 344px #fff, 892px 1061px #fff, 130px 1044px #fff,
    1492px 78px #fff, 1592px 1831px #fff, 1648px 1508px #fff, 1072px 1992px #fff,
    1890px 592px #fff, 914px 1226px #fff, 861px 812px #fff, 542px 428px #fff,
    335px 495px #fff, 1029px 73px #fff, 430px 1586px #fff, 1147px 180px #fff,
    262px 1088px #fff, 930px 1461px #fff, 1372px 1510px #fff, 1481px 1748px #fff,
    556px 548px #fff, 1404px 96px #fff, 1676px 1570px #fff, 1849px 300px #fff,
    1372px 1158px #fff, 1365px 91px #fff, 1223px 236px #fff, 292px 1227px #fff,
    1228px 1162px #fff, 523px 1119px #fff, 1244px 1802px #fff, 798px 173px #fff,
    1665px 1426px #fff, 618px 1264px #fff, 1672px 1200px #fff, 116px 1146px #fff,
    1028px 1571px #fff, 768px 1772px #fff, 1212px 641px #fff, 1954px 585px #fff,
    84px 313px #fff, 1726px 1307px #fff, 1715px 156px #fff, 721px 514px #fff,
    1640px 1828px #fff, 1349px 1778px #fff, 1255px 940px #fff, 292px 226px #fff,
    187px 1692px #fff, 1506px 475px #fff, 222px 535px #fff, 412px 94px #fff,
    918px 755px #fff, 177px 1153px #fff, 1414px 1290px #fff, 147px 1887px #fff,
    636px 276px #fff, 802px 1068px #fff, 1988px 676px #fff, 1338px 1072px #fff,
    51px 947px #fff, 1031px 1346px #fff, 949px 1337px #fff, 1229px 1698px #fff,
    1123px 263px #fff, 1571px 1456px #fff, 1916px 681px #fff, 729px 1624px #fff,
    1284px 1551px #fff, 458px 367px #fff, 2px 530px #fff, 1725px 1207px #fff,
    1801px 1379px #fff, 100px 561px #fff, 1968px 815px #fff, 1453px 502px #fff,
    512px 724px #fff, 1090px 1243px #fff, 507px 1578px #fff, 650px 339px #fff,
    1121px 1179px #fff, 169px 645px #fff, 654px 427px #fff, 511px 1762px #fff,
    211px 1991px #fff, 1275px 322px #fff, 1646px 1298px #fff, 1959px 1560px #fff,
    85px 1016px #fff, 799px 1341px #fff, 84px 1526px #fff, 1781px 1829px #fff,
    955px 653px #fff, 953px 1939px #fff, 844px 2000px #fff, 1804px 1481px #fff,
    589px 1224px #fff, 1587px 178px #fff, 2000px 1333px #fff, 1189px 1883px #fff,
    309px 1138px #fff, 1622px 1845px #fff, 1806px 548px #fff, 1907px 974px #fff,
    1086px 303px #fff;
  animation: animStar 50s linear infinite;
}

#stars:after {
  content: ' ';
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 1864px 1277px #fff, 459px 906px #fff, 581px 191px #fff,
    159px 1178px #fff, 6px 1672px #fff, 1809px 245px #fff, 1397px 270px #fff,
    1372px 1934px #fff, 369px 1259px #fff, 1657px 468px #fff, 1948px 248px #fff,
    1797px 1768px #fff, 998px 1120px #fff, 926px 14px #fff, 1117px 1373px #fff,
    1839px 1175px #fff, 1526px 1968px #fff, 1547px 247px #fff,
    1367px 1253px #fff, 1999px 1750px #fff, 1939px 208px #fff,
    1422px 1096px #fff, 1325px 1856px #fff, 1233px 866px #fff, 1304px 132px #fff,
    640px 501px #fff, 1565px 1910px #fff, 850px 732px #fff, 957px 1585px #fff,
    519px 613px #fff, 1433px 1199px #fff, 1504px 1202px #fff, 127px 1621px #fff,
    189px 1466px #fff, 970px 1444px #fff, 1513px 376px #fff, 825px 134px #fff,
    1271px 786px #fff, 215px 1222px #fff, 728px 990px #fff, 1863px 952px #fff,
    1346px 1769px #fff, 485px 93px #fff, 54px 1224px #fff, 1812px 1093px #fff,
    1053px 6px #fff, 1207px 976px #fff, 1273px 545px #fff, 606px 1037px #fff,
    1277px 186px #fff, 1122px 1607px #fff, 1684px 1759px #fff,
    1520px 1785px #fff, 783px 544px #fff, 1100px 588px #fff, 417px 100px #fff,
    1233px 1970px #fff, 73px 497px #fff, 524px 1993px #fff, 1100px 1936px #fff,
    536px 1441px #fff, 1973px 1190px #fff, 1244px 1075px #fff, 1640px 943px #fff,
    762px 1486px #fff, 1792px 888px #fff, 1569px 1452px #fff, 1525px 1333px #fff,
    103px 1378px #fff, 1449px 973px #fff, 388px 774px #fff, 1484px 919px #fff,
    709px 787px #fff, 686px 62px #fff, 380px 1450px #fff, 625px 2000px #fff,
    1610px 15px #fff, 1286px 1076px #fff, 333px 52px #fff, 1425px 1218px #fff,
    1819px 1366px #fff, 624px 1956px #fff, 1777px 1910px #fff, 1239px 687px #fff,
    95px 1151px #fff, 282px 1399px #fff, 1863px 333px #fff, 1275px 140px #fff,
    542px 64px #fff, 987px 1883px #fff, 1557px 1204px #fff, 1528px 395px #fff,
    381px 1792px #fff, 1813px 405px #fff, 1822px 646px #fff, 1789px 1394px #fff,
    323px 1091px #fff, 1212px 479px #fff, 1872px 361px #fff, 1282px 334px #fff,
    502px 400px #fff, 1948px 173px #fff, 465px 77px #fff, 1322px 1602px #fff,
    1178px 1415px #fff, 594px 1652px #fff, 765px 477px #fff, 1490px 1955px #fff,
    989px 1844px #fff, 667px 1500px #fff, 1902px 220px #fff, 1290px 882px #fff,
    1330px 1317px #fff, 1070px 539px #fff, 9px 632px #fff, 1863px 983px #fff,
    875px 1676px #fff, 852px 1377px #fff, 546px 391px #fff, 1628px 956px #fff,
    496px 828px #fff, 1207px 548px #fff, 1328px 834px #fff, 1410px 120px #fff,
    369px 156px #fff, 1573px 1519px #fff, 1697px 1475px #fff, 1995px 530px #fff,
    950px 953px #fff, 906px 1359px #fff, 784px 1298px #fff, 1400px 1874px #fff,
    1874px 1774px #fff, 50px 389px #fff, 1880px 1426px #fff, 551px 476px #fff,
    503px 1928px #fff, 532px 1920px #fff, 403px 168px #fff, 1334px 1213px #fff,
    1891px 1123px #fff, 1582px 480px #fff, 322px 1737px #fff, 913px 307px #fff,
    915px 618px #fff, 186px 12px #fff, 1972px 742px #fff, 704px 309px #fff,
    1995px 458px #fff, 480px 881px #fff, 1124px 1337px #fff, 647px 672px #fff,
    1364px 479px #fff, 1308px 175px #fff, 1832px 1061px #fff, 839px 195px #fff,
    215px 443px #fff, 922px 923px #fff, 1618px 365px #fff, 40px 1688px #fff,
    1844px 219px #fff, 94px 1092px #fff, 1478px 1480px #fff, 1608px 1048px #fff,
    1724px 1724px #fff, 1055px 739px #fff, 489px 1519px #fff, 1600px 922px #fff,
    1498px 1402px #fff, 1624px 1512px #fff, 674px 812px #fff, 965px 1800px #fff,
    56px 523px #fff, 500px 1198px #fff, 1397px 1056px #fff, 630px 821px #fff,
    1589px 1012px #fff, 1812px 1027px #fff, 1519px 452px #fff,
    1409px 1768px #fff, 1802px 1605px #fff, 1281px 1835px #fff, 659px 382px #fff,
    278px 380px #fff, 1987px 1017px #fff, 1187px 1647px #fff, 254px 213px #fff,
    1786px 1660px #fff, 1455px 271px #fff, 293px 993px #fff, 1972px 1945px #fff,
    1447px 1188px #fff, 1456px 509px #fff, 230px 332px #fff, 116px 888px #fff,
    1484px 937px #fff, 902px 697px #fff, 415px 1573px #fff, 1449px 1534px #fff,
    751px 1077px #fff, 695px 208px #fff, 1411px 358px #fff, 332px 1765px #fff,
    340px 907px #fff, 804px 1373px #fff, 434px 1235px #fff, 62px 1328px #fff,
    847px 320px #fff, 864px 743px #fff, 1px 1891px #fff, 946px 1923px #fff,
    372px 799px #fff, 1143px 1165px #fff, 861px 1615px #fff, 1988px 567px #fff,
    1143px 1272px #fff, 1842px 368px #fff, 1906px 1113px #fff, 1356px 744px #fff,
    1111px 1668px #fff, 629px 779px #fff, 485px 1439px #fff, 50px 115px #fff,
    1416px 996px #fff, 649px 1932px #fff, 1455px 683px #fff, 425px 1416px #fff,
    503px 132px #fff, 1368px 1126px #fff, 1541px 1079px #fff, 1680px 1798px #fff,
    286px 1981px #fff, 1056px 1347px #fff, 1941px 1500px #fff, 1396px 284px #fff,
    1257px 465px #fff, 40px 1642px #fff, 1396px 1544px #fff, 1048px 863px #fff,
    1142px 99px #fff, 1371px 1631px #fff, 1934px 52px #fff, 595px 1961px #fff,
    1720px 1142px #fff, 1851px 581px #fff, 1513px 498px #fff, 1056px 49px #fff,
    1565px 1698px #fff, 61px 1956px #fff, 606px 1927px #fff, 1625px 115px #fff,
    785px 1843px #fff, 1731px 61px #fff, 599px 1836px #fff, 1291px 1415px #fff,
    378px 1478px #fff, 1510px 937px #fff, 1244px 99px #fff, 1346px 834px #fff,
    526px 75px #fff, 736px 542px #fff, 1933px 26px #fff, 909px 1307px #fff,
    373px 1123px #fff, 1997px 574px #fff, 1371px 1470px #fff, 1245px 607px #fff,
    1550px 690px #fff, 595px 1920px #fff, 1666px 1751px #fff, 1070px 1936px #fff,
    480px 476px #fff, 1449px 855px #fff, 1675px 1551px #fff, 768px 407px #fff,
    260px 431px #fff, 1496px 202px #fff, 1984px 401px #fff, 1890px 1997px #fff,
    300px 21px #fff, 786px 1836px #fff, 1917px 1719px #fff, 1354px 1434px #fff,
    1956px 1950px #fff, 1712px 1193px #fff, 1028px 488px #fff, 146px 312px #fff,
    1453px 1703px #fff, 300px 829px #fff, 1274px 233px #fff, 1926px 1860px #fff,
    129px 1387px #fff, 458px 385px #fff, 1138px 1017px #fff, 1155px 1942px #fff,
    731px 1472px #fff, 62px 1728px #fff, 805px 788px #fff, 1298px 1882px #fff,
    1831px 467px #fff, 853px 1352px #fff, 466px 1859px #fff, 1196px 1172px #fff,
    404px 152px #fff, 1158px 717px #fff, 1534px 270px #fff, 752px 1630px #fff,
    1449px 719px #fff, 1037px 840px #fff, 1920px 605px #fff, 126px 226px #fff,
    748px 1811px #fff, 454px 1187px #fff, 773px 329px #fff, 1910px 1188px #fff,
    814px 595px #fff, 1561px 75px #fff, 803px 1833px #fff, 1680px 844px #fff,
    1762px 257px #fff, 1810px 799px #fff, 1910px 1511px #fff, 109px 1509px #fff,
    1746px 1479px #fff, 1850px 1235px #fff, 1895px 126px #fff, 36px 1911px #fff,
    1607px 1296px #fff, 1322px 489px #fff, 1118px 186px #fff, 1729px 54px #fff,
    1329px 1962px #fff, 1662px 442px #fff, 1190px 1593px #fff, 741px 17px #fff,
    1512px 1893px #fff, 669px 1636px #fff, 118px 271px #fff, 107px 238px #fff,
    748px 1258px #fff, 391px 155px #fff, 741px 1738px #fff, 592px 1267px #fff,
    1402px 703px #fff, 464px 1904px #fff, 602px 466px #fff, 162px 185px #fff,
    1207px 1938px #fff, 1306px 190px #fff, 408px 1107px #fff, 411px 1929px #fff,
    53px 1114px #fff, 554px 1473px #fff, 1964px 938px #fff, 549px 249px #fff,
    543px 1597px #fff, 1918px 546px #fff, 215px 236px #fff, 85px 808px #fff,
    111px 580px #fff, 1515px 1490px #fff, 171px 136px #fff, 1299px 832px #fff,
    1431px 183px #fff, 801px 1081px #fff, 770px 1504px #fff, 1698px 1696px #fff,
    16px 1590px #fff, 1744px 538px #fff, 1686px 1106px #fff, 529px 1425px #fff,
    708px 1188px #fff, 219px 634px #fff, 637px 649px #fff, 1345px 268px #fff,
    120px 1015px #fff, 894px 1561px #fff, 1698px 144px #fff, 1910px 257px #fff,
    768px 1166px #fff, 468px 1431px #fff, 693px 861px #fff, 1280px 665px #fff,
    1122px 159px #fff, 1500px 535px #fff, 1871px 1750px #fff, 1768px 752px #fff,
    723px 400px #fff, 241px 832px #fff, 522px 408px #fff, 880px 144px #fff,
    1879px 1986px #fff, 1668px 1000px #fff, 62px 1830px #fff, 1917px 1463px #fff,
    1628px 408px #fff, 1360px 834px #fff, 791px 1101px #fff, 1606px 442px #fff,
    1696px 1654px #fff, 780px 1619px #fff, 522px 1560px #fff, 7px 1133px #fff,
    1005px 1472px #fff, 1361px 1317px #fff, 685px 895px #fff, 1820px 1747px #fff,
    61px 1428px #fff, 1383px 1005px #fff, 555px 1630px #fff, 371px 586px #fff,
    92px 151px #fff, 675px 809px #fff, 137px 1336px #fff, 733px 197px #fff,
    1172px 114px #fff, 351px 641px #fff, 1539px 1556px #fff, 1509px 394px #fff,
    1261px 1826px #fff, 1292px 1625px #fff, 897px 454px #fff, 565px 246px #fff,
    646px 1918px #fff, 458px 856px #fff, 1729px 1734px #fff, 1474px 288px #fff,
    59px 1800px #fff, 1086px 1237px #fff, 351px 333px #fff, 1518px 830px #fff,
    1135px 1401px #fff, 846px 1976px #fff, 1594px 1033px #fff, 1554px 359px #fff,
    1437px 1663px #fff, 61px 1364px #fff, 1132px 151px #fff, 380px 323px #fff,
    426px 1328px #fff, 329px 302px #fff, 1658px 802px #fff, 1956px 1441px #fff,
    884px 122px #fff, 1053px 261px #fff, 1596px 705px #fff, 1378px 1407px #fff,
    223px 1574px #fff, 164px 1569px #fff, 255px 647px #fff, 579px 1995px #fff,
    1074px 709px #fff, 260px 1903px #fff, 1448px 1547px #fff, 1871px 1625px #fff,
    1712px 1994px #fff, 1563px 568px #fff, 865px 1792px #fff, 1844px 94px #fff,
    944px 78px #fff, 1183px 1033px #fff, 1654px 1851px #fff, 1895px 1125px #fff,
    95px 191px #fff, 1262px 1644px #fff, 1669px 1226px #fff, 468px 626px #fff,
    352px 338px #fff, 1682px 172px #fff, 830px 1143px #fff, 1822px 1758px #fff,
    1577px 537px #fff, 1791px 581px #fff, 1167px 421px #fff, 1171px 1916px #fff,
    169px 1443px #fff, 1927px 146px #fff, 17px 819px #fff, 215px 1380px #fff,
    1390px 301px #fff, 686px 1948px #fff, 1130px 1999px #fff, 2px 1325px #fff,
    931px 1096px #fff, 783px 1845px #fff, 902px 788px #fff, 1386px 1349px #fff,
    1590px 1806px #fff, 1401px 1325px #fff, 276px 271px #fff, 1891px 1240px #fff,
    1193px 439px #fff, 1344px 668px #fff, 1476px 803px #fff, 846px 346px #fff,
    479px 1481px #fff, 1489px 818px #fff, 1420px 758px #fff, 946px 998px #fff,
    328px 1538px #fff, 545px 940px #fff, 243px 421px #fff, 69px 1842px #fff,
    182px 461px #fff, 720px 1239px #fff, 1367px 1948px #fff, 1251px 1872px #fff,
    1378px 820px #fff, 141px 1675px #fff, 938px 1350px #fff, 899px 931px #fff,
    498px 1391px #fff, 1340px 1782px #fff, 6px 1980px #fff, 713px 984px #fff,
    1713px 1044px #fff, 733px 1629px #fff, 371px 1678px #fff, 1231px 1809px #fff,
    1153px 416px #fff, 1905px 388px #fff, 506px 1745px #fff, 566px 1837px #fff,
    203px 1666px #fff, 1947px 977px #fff, 1559px 1613px #fff, 1703px 122px #fff,
    1998px 1728px #fff, 1598px 1637px #fff, 668px 1177px #fff, 436px 1606px #fff,
    341px 527px #fff, 1585px 1839px #fff, 414px 1645px #fff, 232px 216px #fff,
    1716px 1586px #fff, 1464px 601px #fff, 1527px 915px #fff, 765px 927px #fff,
    693px 1173px #fff, 1020px 1795px #fff, 1592px 935px #fff, 1157px 1168px #fff,
    541px 843px #fff, 555px 1563px #fff, 26px 498px #fff, 1163px 1458px #fff,
    908px 178px #fff, 282px 1412px #fff, 1233px 1400px #fff, 373px 1531px #fff,
    1353px 1303px #fff, 1685px 689px #fff, 1404px 36px #fff, 1615px 755px #fff,
    390px 215px #fff, 1553px 998px #fff, 166px 905px #fff, 94px 1975px #fff,
    1211px 948px #fff, 106px 17px #fff, 1510px 1184px #fff, 260px 226px #fff,
    117px 1128px #fff, 642px 1366px #fff, 20px 298px #fff, 1703px 533px #fff,
    1972px 1749px #fff, 760px 1353px #fff, 906px 1257px #fff, 1108px 1083px #fff,
    1290px 1638px #fff, 1487px 563px #fff, 1597px 1530px #fff, 185px 1716px #fff,
    1478px 1194px #fff, 1585px 879px #fff, 1722px 1163px #fff, 900px 1537px #fff,
    571px 1841px #fff, 596px 1033px #fff, 1870px 907px #fff, 757px 368px #fff,
    1586px 1179px #fff, 818px 1697px #fff, 600px 1158px #fff, 1429px 1418px #fff,
    1030px 726px #fff, 1846px 423px #fff, 145px 60px #fff, 160px 437px #fff,
    1390px 1684px #fff, 1528px 933px #fff, 61px 656px #fff, 1301px 109px #fff,
    331px 682px #fff, 451px 344px #fff, 892px 1061px #fff, 130px 1044px #fff,
    1492px 78px #fff, 1592px 1831px #fff, 1648px 1508px #fff, 1072px 1992px #fff,
    1890px 592px #fff, 914px 1226px #fff, 861px 812px #fff, 542px 428px #fff,
    335px 495px #fff, 1029px 73px #fff, 430px 1586px #fff, 1147px 180px #fff,
    262px 1088px #fff, 930px 1461px #fff, 1372px 1510px #fff, 1481px 1748px #fff,
    556px 548px #fff, 1404px 96px #fff, 1676px 1570px #fff, 1849px 300px #fff,
    1372px 1158px #fff, 1365px 91px #fff, 1223px 236px #fff, 292px 1227px #fff,
    1228px 1162px #fff, 523px 1119px #fff, 1244px 1802px #fff, 798px 173px #fff,
    1665px 1426px #fff, 618px 1264px #fff, 1672px 1200px #fff, 116px 1146px #fff,
    1028px 1571px #fff, 768px 1772px #fff, 1212px 641px #fff, 1954px 585px #fff,
    84px 313px #fff, 1726px 1307px #fff, 1715px 156px #fff, 721px 514px #fff,
    1640px 1828px #fff, 1349px 1778px #fff, 1255px 940px #fff, 292px 226px #fff,
    187px 1692px #fff, 1506px 475px #fff, 222px 535px #fff, 412px 94px #fff,
    918px 755px #fff, 177px 1153px #fff, 1414px 1290px #fff, 147px 1887px #fff,
    636px 276px #fff, 802px 1068px #fff, 1988px 676px #fff, 1338px 1072px #fff,
    51px 947px #fff, 1031px 1346px #fff, 949px 1337px #fff, 1229px 1698px #fff,
    1123px 263px #fff, 1571px 1456px #fff, 1916px 681px #fff, 729px 1624px #fff,
    1284px 1551px #fff, 458px 367px #fff, 2px 530px #fff, 1725px 1207px #fff,
    1801px 1379px #fff, 100px 561px #fff, 1968px 815px #fff, 1453px 502px #fff,
    512px 724px #fff, 1090px 1243px #fff, 507px 1578px #fff, 650px 339px #fff,
    1121px 1179px #fff, 169px 645px #fff, 654px 427px #fff, 511px 1762px #fff,
    211px 1991px #fff, 1275px 322px #fff, 1646px 1298px #fff, 1959px 1560px #fff,
    85px 1016px #fff, 799px 1341px #fff, 84px 1526px #fff, 1781px 1829px #fff,
    955px 653px #fff, 953px 1939px #fff, 844px 2000px #fff, 1804px 1481px #fff,
    589px 1224px #fff, 1587px 178px #fff, 2000px 1333px #fff, 1189px 1883px #fff,
    309px 1138px #fff, 1622px 1845px #fff, 1806px 548px #fff, 1907px 974px #fff,
    1086px 303px #fff;
}

#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 1030px 117px #fff, 852px 1180px #fff, 102px 416px #fff,
    1981px 1834px #fff, 1234px 813px #fff, 1210px 638px #fff, 446px 1596px #fff,
    233px 1776px #fff, 1727px 1929px #fff, 1851px 163px #fff, 288px 800px #fff,
    87px 1125px #fff, 375px 120px #fff, 1190px 421px #fff, 1787px 970px #fff,
    979px 1474px #fff, 1386px 1433px #fff, 521px 728px #fff, 516px 1188px #fff,
    1091px 1858px #fff, 1347px 1277px #fff, 279px 645px #fff, 656px 1816px #fff,
    33px 1693px #fff, 232px 1591px #fff, 302px 679px #fff, 1511px 1770px #fff,
    1561px 973px #fff, 857px 624px #fff, 1602px 777px #fff, 749px 1112px #fff,
    377px 1497px #fff, 239px 1517px #fff, 1372px 891px #fff, 1874px 1548px #fff,
    651px 1919px #fff, 496px 804px #fff, 1864px 313px #fff, 610px 1123px #fff,
    208px 1816px #fff, 856px 176px #fff, 297px 1959px #fff, 1539px 1676px #fff,
    732px 1295px #fff, 906px 757px #fff, 982px 928px #fff, 191px 1326px #fff,
    1159px 406px #fff, 179px 1437px #fff, 592px 513px #fff, 277px 1347px #fff,
    1942px 337px #fff, 351px 815px #fff, 527px 291px #fff, 571px 522px #fff,
    1434px 1764px #fff, 217px 857px #fff, 506px 1174px #fff, 1220px 1273px #fff,
    304px 314px #fff, 46px 1786px #fff, 88px 871px #fff, 151px 41px #fff,
    1169px 127px #fff, 1245px 978px #fff, 1977px 1990px #fff, 518px 1331px #fff,
    891px 526px #fff, 587px 644px #fff, 1225px 720px #fff, 69px 1341px #fff,
    955px 1503px #fff, 490px 24px #fff, 1558px 1170px #fff, 1058px 1751px #fff,
    84px 564px #fff, 1251px 1013px #fff, 1905px 268px #fff, 761px 1370px #fff,
    1158px 952px #fff, 87px 601px #fff, 123px 1612px #fff, 1274px 476px #fff,
    1848px 1464px #fff, 31px 162px #fff, 71px 1279px #fff, 1943px 388px #fff,
    57px 1667px #fff, 1285px 1005px #fff, 1177px 87px #fff, 1555px 1203px #fff,
    1359px 1398px #fff, 1918px 720px #fff, 502px 858px #fff, 773px 625px #fff,
    1165px 885px #fff, 1043px 1056px #fff, 992px 1725px #fff, 1849px 930px #fff,
    1132px 344px #fff, 735px 832px #fff, 1712px 1188px #fff, 1363px 1835px #fff,
    713px 556px #fff, 21px 113px #fff, 708px 1872px #fff, 1103px 1457px #fff,
    1983px 855px #fff, 1782px 824px #fff, 1210px 1152px #fff, 1166px 1742px #fff,
    8px 913px #fff, 803px 1170px #fff, 1562px 744px #fff, 1391px 1333px #fff,
    398px 33px #fff, 927px 1753px #fff, 828px 1321px #fff, 52px 205px #fff,
    188px 179px #fff, 1464px 1839px #fff, 589px 1154px #fff, 1654px 674px #fff,
    980px 589px #fff, 545px 16px #fff, 618px 365px #fff, 666px 1435px #fff,
    1161px 1518px #fff, 306px 770px #fff, 1204px 1470px #fff, 665px 784px #fff,
    328px 1104px #fff, 707px 879px #fff, 982px 1167px #fff, 856px 462px #fff,
    1540px 1840px #fff, 955px 409px #fff, 994px 124px #fff, 1756px 1279px #fff,
    511px 1558px #fff, 656px 1165px #fff, 1004px 1465px #fff, 300px 1447px #fff,
    1931px 1323px #fff, 91px 1788px #fff, 521px 28px #fff, 714px 494px #fff,
    1545px 1122px #fff, 307px 1699px #fff, 1417px 1730px #fff, 596px 1927px #fff,
    455px 638px #fff, 1315px 511px #fff, 1523px 18px #fff, 958px 1673px #fff,
    1663px 1879px #fff, 1502px 1713px #fff, 1863px 762px #fff, 1295px 594px #fff,
    924px 115px #fff, 147px 1559px #fff, 939px 1051px #fff, 1084px 1337px #fff,
    1452px 560px #fff, 1697px 1811px #fff, 321px 1165px #fff, 636px 1610px #fff,
    1730px 434px #fff, 1252px 1046px #fff, 329px 1062px #fff, 1177px 918px #fff,
    432px 1397px #fff, 365px 179px #fff, 834px 940px #fff, 627px 1924px #fff,
    1043px 214px #fff, 1018px 1308px #fff, 1135px 949px #fff, 743px 887px #fff,
    240px 1806px #fff, 1406px 1396px #fff, 876px 1341px #fff, 1336px 1414px #fff,
    1394px 572px #fff, 1199px 1983px #fff, 1401px 283px #fff, 687px 1399px #fff,
    1028px 1517px #fff, 1987px 141px #fff, 88px 844px #fff, 148px 1714px #fff,
    1771px 1879px #fff, 650px 1178px #fff, 934px 602px #fff, 1141px 1916px #fff,
    1564px 1659px #fff, 1429px 1884px #fff, 688px 829px #fff, 1678px 431px #fff,
    318px 1550px #fff;
  animation: animStar 100s linear infinite;
}

#stars2:after {
  content: ' ';
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 1030px 117px #fff, 852px 1180px #fff, 102px 416px #fff,
    1981px 1834px #fff, 1234px 813px #fff, 1210px 638px #fff, 446px 1596px #fff,
    233px 1776px #fff, 1727px 1929px #fff, 1851px 163px #fff, 288px 800px #fff,
    87px 1125px #fff, 375px 120px #fff, 1190px 421px #fff, 1787px 970px #fff,
    979px 1474px #fff, 1386px 1433px #fff, 521px 728px #fff, 516px 1188px #fff,
    1091px 1858px #fff, 1347px 1277px #fff, 279px 645px #fff, 656px 1816px #fff,
    33px 1693px #fff, 232px 1591px #fff, 302px 679px #fff, 1511px 1770px #fff,
    1561px 973px #fff, 857px 624px #fff, 1602px 777px #fff, 749px 1112px #fff,
    377px 1497px #fff, 239px 1517px #fff, 1372px 891px #fff, 1874px 1548px #fff,
    651px 1919px #fff, 496px 804px #fff, 1864px 313px #fff, 610px 1123px #fff,
    208px 1816px #fff, 856px 176px #fff, 297px 1959px #fff, 1539px 1676px #fff,
    732px 1295px #fff, 906px 757px #fff, 982px 928px #fff, 191px 1326px #fff,
    1159px 406px #fff, 179px 1437px #fff, 592px 513px #fff, 277px 1347px #fff,
    1942px 337px #fff, 351px 815px #fff, 527px 291px #fff, 571px 522px #fff,
    1434px 1764px #fff, 217px 857px #fff, 506px 1174px #fff, 1220px 1273px #fff,
    304px 314px #fff, 46px 1786px #fff, 88px 871px #fff, 151px 41px #fff,
    1169px 127px #fff, 1245px 978px #fff, 1977px 1990px #fff, 518px 1331px #fff,
    891px 526px #fff, 587px 644px #fff, 1225px 720px #fff, 69px 1341px #fff,
    955px 1503px #fff, 490px 24px #fff, 1558px 1170px #fff, 1058px 1751px #fff,
    84px 564px #fff, 1251px 1013px #fff, 1905px 268px #fff, 761px 1370px #fff,
    1158px 952px #fff, 87px 601px #fff, 123px 1612px #fff, 1274px 476px #fff,
    1848px 1464px #fff, 31px 162px #fff, 71px 1279px #fff, 1943px 388px #fff,
    57px 1667px #fff, 1285px 1005px #fff, 1177px 87px #fff, 1555px 1203px #fff,
    1359px 1398px #fff, 1918px 720px #fff, 502px 858px #fff, 773px 625px #fff,
    1165px 885px #fff, 1043px 1056px #fff, 992px 1725px #fff, 1849px 930px #fff,
    1132px 344px #fff, 735px 832px #fff, 1712px 1188px #fff, 1363px 1835px #fff,
    713px 556px #fff, 21px 113px #fff, 708px 1872px #fff, 1103px 1457px #fff,
    1983px 855px #fff, 1782px 824px #fff, 1210px 1152px #fff, 1166px 1742px #fff,
    8px 913px #fff, 803px 1170px #fff, 1562px 744px #fff, 1391px 1333px #fff,
    398px 33px #fff, 927px 1753px #fff, 828px 1321px #fff, 52px 205px #fff,
    188px 179px #fff, 1464px 1839px #fff, 589px 1154px #fff, 1654px 674px #fff,
    980px 589px #fff, 545px 16px #fff, 618px 365px #fff, 666px 1435px #fff,
    1161px 1518px #fff, 306px 770px #fff, 1204px 1470px #fff, 665px 784px #fff,
    328px 1104px #fff, 707px 879px #fff, 982px 1167px #fff, 856px 462px #fff,
    1540px 1840px #fff, 955px 409px #fff, 994px 124px #fff, 1756px 1279px #fff,
    511px 1558px #fff, 656px 1165px #fff, 1004px 1465px #fff, 300px 1447px #fff,
    1931px 1323px #fff, 91px 1788px #fff, 521px 28px #fff, 714px 494px #fff,
    1545px 1122px #fff, 307px 1699px #fff, 1417px 1730px #fff, 596px 1927px #fff,
    455px 638px #fff, 1315px 511px #fff, 1523px 18px #fff, 958px 1673px #fff,
    1663px 1879px #fff, 1502px 1713px #fff, 1863px 762px #fff, 1295px 594px #fff,
    924px 115px #fff, 147px 1559px #fff, 939px 1051px #fff, 1084px 1337px #fff,
    1452px 560px #fff, 1697px 1811px #fff, 321px 1165px #fff, 636px 1610px #fff,
    1730px 434px #fff, 1252px 1046px #fff, 329px 1062px #fff, 1177px 918px #fff,
    432px 1397px #fff, 365px 179px #fff, 834px 940px #fff, 627px 1924px #fff,
    1043px 214px #fff, 1018px 1308px #fff, 1135px 949px #fff, 743px 887px #fff,
    240px 1806px #fff, 1406px 1396px #fff, 876px 1341px #fff, 1336px 1414px #fff,
    1394px 572px #fff, 1199px 1983px #fff, 1401px 283px #fff, 687px 1399px #fff,
    1028px 1517px #fff, 1987px 141px #fff, 88px 844px #fff, 148px 1714px #fff,
    1771px 1879px #fff, 650px 1178px #fff, 934px 602px #fff, 1141px 1916px #fff,
    1564px 1659px #fff, 1429px 1884px #fff, 688px 829px #fff, 1678px 431px #fff,
    318px 1550px #fff;
}

#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 1414px 371px #fff, 1585px 1058px #fff, 1223px 1816px #fff,
    853px 631px #fff, 557px 1191px #fff, 151px 609px #fff, 871px 1234px #fff,
    514px 928px #fff, 1052px 978px #fff, 59px 1714px #fff, 214px 1889px #fff,
    803px 256px #fff, 214px 1023px #fff, 1880px 1397px #fff, 546px 546px #fff,
    328px 1485px #fff, 1346px 1461px #fff, 693px 1362px #fff, 1797px 715px #fff,
    1287px 1024px #fff, 1799px 977px #fff, 1287px 1898px #fff,
    1668px 1943px #fff, 554px 1979px #fff, 707px 1841px #fff, 1995px 508px #fff,
    1691px 274px #fff, 710px 47px #fff, 1375px 1533px #fff, 761px 106px #fff,
    1902px 1803px #fff, 867px 1300px #fff, 1994px 710px #fff, 1697px 1103px #fff,
    167px 328px #fff, 1624px 216px #fff, 674px 18px #fff, 1247px 1848px #fff,
    1693px 820px #fff, 1808px 657px #fff, 1723px 1664px #fff, 94px 783px #fff,
    438px 736px #fff, 501px 1208px #fff, 770px 1533px #fff, 635px 1596px #fff,
    1476px 1656px #fff, 557px 1337px #fff, 312px 1731px #fff, 1309px 1404px #fff,
    1978px 1095px #fff, 1613px 171px #fff, 298px 405px #fff, 935px 470px #fff,
    1898px 1613px #fff, 1632px 1771px #fff, 1021px 1404px #fff,
    1137px 137px #fff, 429px 460px #fff, 82px 1674px #fff, 937px 393px #fff,
    953px 155px #fff, 1319px 1947px #fff, 576px 168px #fff, 474px 84px #fff,
    1661px 848px #fff, 1202px 1731px #fff, 950px 1071px #fff, 770px 1740px #fff,
    848px 1456px #fff, 1360px 144px #fff, 1392px 1605px #fff, 1312px 917px #fff,
    1635px 1282px #fff, 982px 1471px #fff, 23px 1231px #fff, 469px 803px #fff,
    165px 2px #fff, 670px 435px #fff, 152px 1957px #fff, 1183px 350px #fff,
    1955px 161px #fff, 1823px 1339px #fff, 1861px 351px #fff, 1413px 1391px #fff,
    607px 409px #fff, 1090px 560px #fff, 151px 275px #fff, 410px 622px #fff,
    838px 1715px #fff, 569px 405px #fff, 237px 885px #fff, 1221px 584px #fff,
    1494px 1476px #fff, 648px 1092px #fff, 1518px 1147px #fff, 611px 1290px #fff,
    1197px 1611px #fff, 1455px 22px #fff, 1526px 368px #fff;
  animation: animStar 150s linear infinite;
}

#stars3:after {
  content: ' ';
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 1414px 371px #fff, 1585px 1058px #fff, 1223px 1816px #fff,
    853px 631px #fff, 557px 1191px #fff, 151px 609px #fff, 871px 1234px #fff,
    514px 928px #fff, 1052px 978px #fff, 59px 1714px #fff, 214px 1889px #fff,
    803px 256px #fff, 214px 1023px #fff, 1880px 1397px #fff, 546px 546px #fff,
    328px 1485px #fff, 1346px 1461px #fff, 693px 1362px #fff, 1797px 715px #fff,
    1287px 1024px #fff, 1799px 977px #fff, 1287px 1898px #fff,
    1668px 1943px #fff, 554px 1979px #fff, 707px 1841px #fff, 1995px 508px #fff,
    1691px 274px #fff, 710px 47px #fff, 1375px 1533px #fff, 761px 106px #fff,
    1902px 1803px #fff, 867px 1300px #fff, 1994px 710px #fff, 1697px 1103px #fff,
    167px 328px #fff, 1624px 216px #fff, 674px 18px #fff, 1247px 1848px #fff,
    1693px 820px #fff, 1808px 657px #fff, 1723px 1664px #fff, 94px 783px #fff,
    438px 736px #fff, 501px 1208px #fff, 770px 1533px #fff, 635px 1596px #fff,
    1476px 1656px #fff, 557px 1337px #fff, 312px 1731px #fff, 1309px 1404px #fff,
    1978px 1095px #fff, 1613px 171px #fff, 298px 405px #fff, 935px 470px #fff,
    1898px 1613px #fff, 1632px 1771px #fff, 1021px 1404px #fff,
    1137px 137px #fff, 429px 460px #fff, 82px 1674px #fff, 937px 393px #fff,
    953px 155px #fff, 1319px 1947px #fff, 576px 168px #fff, 474px 84px #fff,
    1661px 848px #fff, 1202px 1731px #fff, 950px 1071px #fff, 770px 1740px #fff,
    848px 1456px #fff, 1360px 144px #fff, 1392px 1605px #fff, 1312px 917px #fff,
    1635px 1282px #fff, 982px 1471px #fff, 23px 1231px #fff, 469px 803px #fff,
    165px 2px #fff, 670px 435px #fff, 152px 1957px #fff, 1183px 350px #fff,
    1955px 161px #fff, 1823px 1339px #fff, 1861px 351px #fff, 1413px 1391px #fff,
    607px 409px #fff, 1090px 560px #fff, 151px 275px #fff, 410px 622px #fff,
    838px 1715px #fff, 569px 405px #fff, 237px 885px #fff, 1221px 584px #fff,
    1494px 1476px #fff, 648px 1092px #fff, 1518px 1147px #fff, 611px 1290px #fff,
    1197px 1611px #fff, 1455px 22px #fff, 1526px 368px #fff;
}

#title {
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  color: #fff;
  text-align: center;
  font-family: 'lato', sans-serif;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 10px;
  margin-top: -60px;
  padding-left: 10px;
}
@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}
@media (max-width: 600px) {
  /* Estilos */
  .list-category-container {
    display: none;
  }
  .list-category-movil {
    font-size: 2rem;
  }
}

/* Small devices (retratos de tabletas y teléfonos de gran tamaño, 601px - 900px) */
@media (min-width: 601px) and (max-width: 900px) {
  /* Estilos */
}

/* Medium devices (pantallas pequeñas, tabletas en posición horizontal, 901px - 1200px) */
@media (min-width: 901px) and (max-width: 1200px) {
  /* Estilos */
}

/* Large devices (ordenadores de escritorio, 1201px y más) */
@media (min-width: 1201px) {
  /* Estilos */
  .list-category-movil {
    display: none;
  }
}
</style>
