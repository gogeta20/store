export default defineNuxtRouteMiddleware((to, from) => {
  // const auth = Boolean(localStorage.getItem('authToken'));
  const auth = true;
  const publicRoutes = ['/login', '/register'];

  if (!auth && !publicRoutes.includes(to.path)) {
    return navigateTo('/login');
  }

  if (auth && (to.path === '/login' || to.path === '/register')) {
    return navigateTo('/');
  }
})
