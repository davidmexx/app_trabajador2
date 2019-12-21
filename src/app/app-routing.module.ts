import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  { path: "user", loadChildren: "./pages/user/user.module#UserPageModule" },
  { path: "signup", loadChildren: "./signup/signup.module#SignupPageModule" },
  {
    path: "projects",
    loadChildren: "./pages/projects/projects.module#ProjectsPageModule"
  },
  {
    path: "notifications",
    loadChildren:
      "./pages/notifications/notifications.module#NotificationsPageModule"
  },
  { path: "test", loadChildren: "./test/test.module#TestPageModule" },
  {
    path: "new-project",
    loadChildren:
      "./pages/projects/new-project/page1/new-project.module#NewProjectPageModule"
  },
  { path: 'request-worker', loadChildren: './pages/projects/request-worker/request-worker.module#RequestWorkerPageModule' },
  { path: 'add-worker', loadChildren: './pages/projects/add-worker/add-worker.module#AddWorkerPageModule' },
  { path: 'code', loadChildren: './pages/code/code.module#CodePageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'messages', loadChildren: './pages/messages/messages.module#MessagesPageModule' },
  { path: 'trades', loadChildren: './pages/trades/trades.module#TradesPageModule' },
  { path: 'edit-user/:id', loadChildren: './pages/profile/edit-user/edit-user.module#EditUserPageModule' },
  { path: 'password', loadChildren: './password/password.module#PasswordPageModule' },
  { path: 'detail-project', loadChildren: './pages/detail-project/detail-project.module#DetailProjectPageModule' },
  { path: 'hours', loadChildren: './pages/hours/hours.module#HoursPageModule' },
  { path: 'view-qr/:projectId/:requestId', loadChildren: './pages/view-qr/view-qr.module#ViewQrPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
