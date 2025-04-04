
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Wiltech-Web/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Wiltech-Web/home",
    "route": "/Wiltech-Web"
  },
  {
    "renderMode": 2,
    "route": "/Wiltech-Web/about"
  },
  {
    "renderMode": 2,
    "route": "/Wiltech-Web/contact"
  },
  {
    "renderMode": 2,
    "route": "/Wiltech-Web/home"
  },
  {
    "renderMode": 2,
    "route": "/Wiltech-Web/project"
  },
  {
    "renderMode": 2,
    "route": "/Wiltech-Web/service"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 771, hash: '58d4e1c310c757256e982256a8375f78023734134e4395b6119012232fcb1342', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: 'e5ffd6573330adad61913c14fd10a7a9854e4fb8b63ca149682fe7824ed148e4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 4305, hash: 'da28c3406fef6a93d5fdce7bc4354afb16e98ba53b0e695e2f106ba0a391ad0b', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 3257, hash: '6d9c0c6e3bb20ed328de84060e15b3e68128180a3d17c8866e53a4242b773472', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 6437, hash: '47f5482a572855b8ab1357bb3a5eb0b4bb5a3edfd148718371ec08bca1444b7f', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'project/index.html': {size: 3264, hash: '5b9100380ea932291b2d9149fccc0b7039468fa2daa7afabc81d7792ce8741a4', text: () => import('./assets-chunks/project_index_html.mjs').then(m => m.default)},
    'service/index.html': {size: 3261, hash: '58bdcb07d1dba9d18a1891c7e7cf0dd40e2dd0f6c68dbbec011a10a8f5a5ae4c', text: () => import('./assets-chunks/service_index_html.mjs').then(m => m.default)},
    'styles-VAI6AAIU.css': {size: 143, hash: 'Nys56MoEKPw', text: () => import('./assets-chunks/styles-VAI6AAIU_css.mjs').then(m => m.default)}
  },
};
