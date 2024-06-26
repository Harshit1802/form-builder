import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {
    path: '',
      loadChildren: () => import('./routes/form-builder/form-builder.module').then(m => m.FormBuilderModule),
      data: { preload: true }

    // canActivateChild: [SimpleGuard],
    // children: [
    //   // { path: '', redirectTo: 'form-builder', pathMatch: 'full' },
    //   // {
    //   //   path: 'dashboard',
    //   //   loadChildren: () => import('./routes/dashboard/dashboard.module').then(m => m.DashboardModule),
    //   //   data: { preload: true }
    //   // },
    //   // {
    //   //   path: '',
    //   //   loadChildren: () => import('./routes/page/page.module').then(m => m.PageModule),
    //   //   data: { preload: true }
    //   // },
    //   {
    //     path: '/form-builder',
    //     loadChildren: () => import('./routes/form-builder/form-builder.module').then(m => m.FormBuilderModule),
    //     data: { preload: true }
    //   },

    //   // {
    //   //   path: 'widgets',
    //   //   loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule)
    //   // },
    //   // { path: 'style', loadChildren: () => import('./style/style.module').then(m => m.StyleModule) },
    //   // { path: 'delon', loadChildren: () => import('./delon/delon.module').then(m => m.DelonModule) },
    //   // { path: 'extras', loadChildren: () => import('./extras/extras.module').then(m => m.ExtrasModule) },
    //   // { path: 'pro', loadChildren: () => import('./pro/pro.module').then(m => m.ProModule) }
    // ]
  },
  // Blak Layout
  // {
  //   path: 'data-v',
  //   component: LayoutBlankComponent,
  //   children: [{ path: '', loadChildren: () => import('./data-v/data-v.module').then(m => m.DataVModule) }]
  // },
  // passport
  // { path: 'auth', loadChildren: () => import('./routes/login/login.module').then(m => m.LoginModule), data: { preload: true } },
  // { path: 'exception', loadChildren: () => import('./routes/exception/exception.module').then(m => m.ExceptionModule) },
  // { path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
