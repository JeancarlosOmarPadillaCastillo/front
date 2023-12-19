import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthConfig, NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import {MessageService} from "../../components/login/services/message.service";
import {LoginService} from "../../components/login/services/login.service";
interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent {
  search: boolean = false;
  isLogged!: boolean;
  isAdmin!: boolean;
  username!: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private loginService: LoginService, private messageService: MessageService) { }

  routerActive: string = "activelink";

  ngOnInit(): void{

    this.messageService.getMessage().subscribe(res =>{
        this.username = res['text']
        this.isLogged = res['isLogged']
        this.isAdmin = res['idAdmin']
      },
      err => console.log(err));

  }


  public login(){
    this.loginService.login();
  }

  public logout(){
    this.loginService.logout();
  }





  sidebarMenu: sidebarMenu[] = [
    {
      link: "/home",
      icon: "home",
      menu: "Dashboard",
    },

    {
      link: "/historial",
      icon: "grid",
      menu: "Historial",
    },
    {
      link: "/activitiesTennager",
      icon: "grid",
      menu: "Asignación De Adolescentes a Actividad",
    },
    {
      link: "/teen",
      icon: "grid",
      menu: "Actividades",
    },
    {
      link: "/funcionary",
      icon: "disc",
      menu: "Funcionarios",
    },
    {
      link: "/asignation",
      icon: "disc",
      menu: "Asignación",
    },
    {
      link: "/button",
      icon: "disc",
      menu: "Buttons",
    },
    {
      link: "/forms",
      icon: "layout",
      menu: "Forms",
    },
    {
      link: "/alerts",
      icon: "info",
      menu: "Alerts",
    },
    {
      link: "/grid-list",
      icon: "file-text",
      menu: "Grid List",
    },
    {
      link: "/menu",
      icon: "menu",
      menu: "Menus",
    },
    {
      link: "/expansion",
      icon: "divide-circle",
      menu: "Expansion Panel",
    },
    {
      link: "/chips",
      icon: "award",
      menu: "Chips",
    },
    {
      link: "/tabs",
      icon: "list",
      menu: "Tabs",
    },
    {
      link: "/progress",
      icon: "bar-chart-2",
      menu: "Progress Bar",
    },
    {
      link: "/toolbar",
      icon: "voicemail",
      menu: "Toolbar",
    },
    {
      link: "/progress-snipper",
      icon: "loader",
      menu: "Progress Snipper",
    },
    {
      link: "/tooltip",
      icon: "bell",
      menu: "Tooltip",
    },
    {
      link: "/snackbar",
      icon: "slack",
      menu: "Snackbar",
    },
    {
      link: "/slider",
      icon: "sliders",
      menu: "Slider",
    },
    {
      link: "/slide-toggle",
      icon: "layers",
      menu: "Slide Toggle",
    },
  ]


}
