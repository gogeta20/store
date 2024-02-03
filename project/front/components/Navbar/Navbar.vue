<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">Intro Nuxt</NuxtLink>
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
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink class="nav-link active" aria-current="page" to="/">
              Default
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link active" aria-current="page" to="/home">
              Home
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link active" aria-current="page" to="/about">
              About
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link active" aria-current="page" to="/posts">
              Posts
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              class="nav-link active"
              aria-current="page"
              to="/posts123"
            >
              Error
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
