<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <div class="navHeader d-none d-lg-block" @click="scrollTo('#page-top')">

        <h1>Adult
          <br>Redeploy
          <br>Illinois</h1>
        <h2>2018 All Sites Summit</h2>

      </div>
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">ARI 2018 All Sites Summit</span>

      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger active" id="home-nav" v-scroll-to="'#home'">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" id="about-summit-nav" v-scroll-to="'#about-summit'">About the Summit</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" id="about-ari-nav" v-scroll-to="'#about-ari'">About Adult Redeploy Illinois</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" id="about-cjcc-nav" v-scroll-to="'#about-cjcc'">About Criminal Justice Coordinating Councils</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" id="agenda-nav" v-scroll-to="'#agenda'">Agenda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" id="registration-nav" v-scroll-to="'#registration'">Registration, Lodging & Meals</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" id="resources-nav" v-scroll-to="'#resources'">Summit Resources</a>
          </li>
          <li class="navFooter d-none d-lg-block">
            <a href="http://www.icjia.state.il.us">
              <img src="./assets/icjia.png" alt="ICJIA Logo" class="navFooterLogo" />
            </a>
            <div class="navFooterCopy">&copy;2018 Illinois Criminal Justice Information Authority</div>
          </li>
        </ul>
      </div>

    </nav>


    <router-view/>


  </div>
</template>

<script>
  export default {
    name: 'App',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Adult Redeploy Illinois 2018 All Sites Summit',
      // all titles will be injected into this template
      titleTemplate: '%s'
    },
    methods: {
      scrollToTarget: function (e) {
        console.log(e.target.getAttribute('href'))
      },
      scrollTo: function (el) {
        return this.$scrollTo(el)

      }

    },
    mounted() {

      let section = document.querySelectorAll(".content-section");
      let sections = {};
      let s = 0;
      let offset = 0;

      Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop;
      });

      window.onscroll = function () {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        for (s in sections) {
          if (sections[s] <= scrollPosition) {
            $('.active').removeClass('active');

            document.getElementById(`${s}-nav`).className += " active";
          }
        }
      }


      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
      });

    }
  }
</script>

<style>
  :root {
    --main-bg-color: #068587;
  }



  body {
    font-family: 'Open Sans', serif;
    padding-top: 54px;
    color: #333;
    font-size: 18px;
  }

  @media (min-width:992px) {
    body {
      padding-top: 0;
      padding-left: 17rem
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Saira Extra Condensed', serif;
    font-weight: 700;
    text-transform: uppercase;
    color: #343a40
  }

  h1 {
    font-size: 6rem;
    line-height: 5.5rem
  }

  h2 {
    font-size: 3.5rem
  }

  .subheading {
    text-transform: uppercase;
    font-weight: 500;
    font-family: 'Saira Extra Condensed', serif;
    font-size: 1.35rem
  }

  .active {
    color: rgb(158, 241, 230) !important;
    text-decoration: none;
    font-weight: 900;
  }



  #sideNav .navbar-nav .nav-item .nav-link {
    font-weight: 600;
    text-transform: uppercase
  }

  @media (min-width:992px) {
    #sideNav {
      text-align: center;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      width: 17rem;
      height: 100vh;
      overflow: auto;

    }


    #sideNav .navbar-brand {
      display: flex;
      margin: auto auto 0;
      padding: .5rem
    }
    #sideNav .navbar-brand .img-profile {
      max-width: 10rem;
      max-height: 10rem;
      border: .5rem solid rgba(255, 255, 255, .2)
    }
    #sideNav .navbar-collapse {
      display: flex;
      align-items: flex-start;
      flex-grow: 0;
      width: 100%;
      margin-bottom: auto
    }
    #sideNav .navbar-collapse .navbar-nav {
      flex-direction: column;
      width: 100%;

    }
    #sideNav .navbar-collapse .navbar-nav .nav-item {
      display: block
    }
    #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
      display: block
    }

    .image-container {
      margin-top: -120px;

    }
  }

  section.content-section {
    border-bottom: 1px solid #dee2e6;
    padding-top: 5rem!important;
    padding-bottom: 5rem!important
  }



  @media (min-width:768px) {
    section.content-section {
      min-height: 100vh;

    }

    .navHeader {
      border-bottom: 1px solid #aaa;
      padding-bottom: 20px;
    }

    .navHeader:hover {
      cursor: pointer;
    }
    .navHeader h1 {
      margin-top: 20px !important;
      font-size: 72px !important;
      line-height: 68px !important;
      color: #fff;
    }

    .navHeader h2 {
      margin-top: 20px !important;
      font-size: 22px !important;
      line-height: 22px !important;
      color: #ccc;
    }

    .navFooter {
      padding-top: 5px;
    }

    .navFooterLogo {
      width: 75px;
      padding-bottom: 15px !important;
      padding-top: 30px !important;
    }

    .navFooterCopy {
      font-size: 9px;
      color: #eee;
      padding-bottom: 15px !important;
    }
  }

  @media (min-width:992px) {
    section.content-section {
      padding-top: 3rem!important;
      padding-bottom: 3rem!important
    }

    section.content-section.first {

      padding-top: 5rem!important;

    }
  }

  .bg-primary {
    background-color: #068587 !important;
  }


  a {
    color: #444;

  }

  a.heavy {
    font-weight: 900;
  }

  a:active,
  a:focus,
  a:hover {
    color: #aaa;
    cursor: pointer;

  }




  #about-summit,
  #about-cjcc,
  #registration {
    background: #35999B;
    color: white;
  }

  #about-summit h2,
  #about-cjcc h2,
  #registration h2 {
    color: #fff;
  }

  ul.sectionList li {
    margin-bottom: 20px;
  }


  .primary {
    color: #068587 !important;
  }

  .address {
    margin-top: 50px
  }

  .btn-registration {
    font-weight: 700;
    text-transform: uppercase;
    color: #333 !important;
  }

  .readmore {
    margin-top: 80px;
  }

  .readmore .teaser {
    margin-bottom: 15px;
    font-weight: 900;
    color: #068587;
  }

  .readmore .arrow {

    color: #068587;
    animation: bounce 1s infinite alternate;
    -webkit-animation: bounce 1s infinite alternate;
  }

  .readmore:hover {
    cursor: pointer;
  }

  @keyframes bounce {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-15px);
    }
  }

  @-webkit-keyframes bounce {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-15px);
    }
  }
</style>