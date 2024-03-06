<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="collapse navbar-collapse">
        <NuxtLink class="navbar-brand" to="/">{{ $t('NamePage') }}</NuxtLink>
      </div>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!--          <li class="nav-item">-->
          <!--            <NuxtLink class="nav-link active" aria-current="page" to="/">-->
          <!--              Default-->
          <!--            </NuxtLink>-->
          <!--          </li>-->
          <li class="nav-item">
            <NuxtLink class="nav-link active" aria-current="page" to="/home">
              <i class="bi bi-github"></i>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link active" aria-current="page" to="/about">
              <i class="bi bi-linkedin"></i>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link active" aria-current="page" to="/posts">
              <i class="bi bi-filetype-pdf"></i>
            </NuxtLink>
          </li>
          <!-- <li class="nav-item">
            <NuxtLink
              class="nav-link active"
              aria-current="page"
              to="/posts123"
            >
              Error
            </NuxtLink>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>
