<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <div class="navHeader d-none d-lg-block">

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
            <a class="nav-link js-scroll-trigger" v-scroll-to="'#home'">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" v-scroll-to="'#about-summit'">About the Summit</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" v-scroll-to="'#about-ari'">About Adult Redeploy Illinois</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" v-scroll-to="'#about-cjcc'">About Criminal Justice Coordinating Councils</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" v-scroll-to="'#agenda'">Agenda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" v-scroll-to="'#registration'">Registration, Lodging & Meals</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" v-scroll-to="'#resources'">Resources</a>
          </li>
          <li class="navFooter d-none d-lg-block">
            <img src="./assets/icjia.png" alt="ICJIA Logo" class="navFooterLogo" />
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
    methods: {
      scrollToTarget: function (e) {
        console.log(e.target.getAttribute('href'))
      }

    },
    mounted() {


      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
      });

      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#sideNav'
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
      padding-bottom: 30px;
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
      padding-top: 30px;
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

      padding-top: 10rem!important;

    }
  }

  .bg-primary {
    background-color: #068587 !important;
  }


  a {
    color: #068587
  }

  a:active,
  a:focus,
  a:hover {
    color: #ccc;
    cursor: pointer;
  }


  #home {}

  #about-summit {
    background: #35999B;
    color: white;
  }

  #about-summit h2 {
    color: #fff;
  }

  #about-ari {}

  #about-cjcc {
    background: #35999B;
    color: white;

  }

  #about-cjcc h2 {
    color: #fff;
  }

  .primary {
    color: #068587 !important;
  }
</style>