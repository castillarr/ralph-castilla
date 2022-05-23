<template>
  <div id="app" data-v-app="">
    <div class="bg-secondary">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container-fluid">
            <div class="navbar-brand" href="#">Ralph Castilla</div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#toggleMobileMenu"
              aria-controls="toggleMobileMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="toggleMobileMenu">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a aria-current="page" href="/" class="nav-link active"
                    >Home</a
                  >
                </li>
                <li class="nav-item">
                  <a aria-current="page" href="/resume" class="nav-link active"
                    >Resume</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    aria-current="page"
                    href="/kewltube"
                    class="nav-link active"
                    >KewlTube</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    aria-current="page"
                    href="/braindrops"
                    class="nav-link active"
                    >BrainDrops</a
                  >
                </li>
                <!-- <li class="nav-item">
                  <a
                    aria-current="page"
                    href="/register"
                    class="
                      router-link-active router-link-exact-active
                      nav-link
                      active
                    "
                    >Register</a
                  >
                </li> -->
              </ul>
              <ul class="navbar-nav sm-icons mr-0">
                <li class="nav-item">
                  <a class="nav-link" href="tel:8649771864"
                    >Phone<i class="icon-phone"></i
                  ></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="mailto:me@RalphCastilla.com"
                    >Mail<i class="icon-envelope"></i
                  ></a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="https://www.linkedin.com/in/RalphCastilla"
                    target="_blank"
                    >LinkedIn<mdb-icon fab icon="linkedin"
                  /></a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="https://twitter.com/carolinacoder"
                    target="_blank"
                    >Twitter<i class="icon-social-twitter"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  <br /><br /><br />
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
