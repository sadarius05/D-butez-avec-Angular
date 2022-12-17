import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

@Input() faceSnap!: FaceSnap;

  constructor(private faceSnapsService: FaceSnapsService){}
  
  buttonText!:string;

  ngOnInit(): void {

    this.buttonText = 'Oh Snap!';
  }

  onSnap(){
    if(this.buttonText === 'Oh Snap!'){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
      this.buttonText = 'Oops, un Snap';
    } 
    else{
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
}
