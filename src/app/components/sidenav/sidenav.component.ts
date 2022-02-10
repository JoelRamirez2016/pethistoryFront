import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  mobileQuery: MediaQueryList;
 
  fillerNav = [
    {name:"Home", route:"", icon:"home"},
    {name:"Usuarios", route:"usuarios/listar", icon:"perm_contact_calendar"}, 
    {name:"Mascotas", route:"mascotas/listar", icon:"pets"},
    {name:"Historias Clinicas", route:"hcs/listar", icon:"source"}  
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

}
