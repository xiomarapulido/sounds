import { Component, OnInit } from '@angular/core';
import { NavController, reorderArray } from 'ionic-angular';
import { SonidosProvider } from '../../providers/sonidos/sonidos';
import { Animales } from '../../app/interfaces/animales';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  animales: Animales[] = [];
  audio = new Audio();
  audioTiempo: any;


  constructor(public navCtrl: NavController, private sonidosProvider: SonidosProvider) {

  }

  ngOnInit() {
    this.getAnimales();
  }

  getAnimales() {
    this.animales = this.sonidosProvider.getData();
  }

  reproducir(animal: Animales) {

    if (animal.reproduciendo) {
      this.pausarAudio(animal);

      animal.reproduciendo = false;
      return;
    }

    this.audio.src = animal.audio;

    this.audio.load();
    this.audio.play();

    animal.reproduciendo = true;

    this.audioTiempo = setTimeout(() => animal.reproduciendo = false, animal.duracion * 1000);
  }

  borrar(index: number) {
    this.animales.splice(index, 1);
  }

  private pausarAudio(animal: Animales) {
    for (let animal of this.animales) {
      animal.reproduciendo = false;

    }
    clearTimeout(this.audioTiempo);
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  recargarAnimales(refresher: any) {

    setTimeout(() => {
      this.getAnimales();
      refresher.complete();
    }, 2000);
  }

  reordenarAnimales(index: any) {

    this.animales = reorderArray(this.animales, index);
  }
}
