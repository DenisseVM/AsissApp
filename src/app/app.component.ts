import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    
    { title: 'Cerrar sesion', url: '/login', icon: 'close' },
    
  ];

  public labels = [];
  
  isMobile: boolean;
  
  constructor(private platform: Platform) {}

  ngOnInit() {
    this.isMobile = this.platform.is('mobile');
  }

  downloadApp() {
    alert('Redirigir a la página de descarga de la aplicación para dispositivos móviles.');
    window.location.href = 'https://github.com/DenisseVM/asissappAPK/blob/main/AsissApp.apk';
  }

}
