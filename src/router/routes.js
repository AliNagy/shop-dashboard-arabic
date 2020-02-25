
const routes = [
  {
    path: '',
    component: () => import('layouts/mainlayout.vue'),
    children: [
      { path: '/', component: () => import('pages/dashboard.vue') },
      { path: '/balance', component: () => import('pages/balance.vue')},
      { path: '/clients', component: () => import('pages/clients.vue')},
      { path: '/expenses', component: () => import('pages/expenses.vue')},
      { path: '/informatics', component: () => import('pages/informatics.vue')},
      { path: '/installments', component: () => import('pages/installments.vue')},
      { path: '/inventory', component: () => import('pages/inventory.vue')},
      { path: '/receipts', component: () => import('pages/receipts.vue')},
      { path: '/suppliers', component: () => import('pages/suppliers.vue')}
      
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/error404.vue')
  })
}

export default routes
