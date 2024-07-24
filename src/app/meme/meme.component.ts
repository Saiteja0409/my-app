import { Component, OnInit } from '@angular/core';
import { MemeService } from '../meme.service';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit {
  public memes:any =[];

  constructor(private _memeSerivce:MemeService) {
    _memeSerivce.getMemes().subscribe(
      (data:any)=>{
        this.memes = data.data.memes;
      },
      (err:any)=>{
        alert("Internal Server Issue")
      }
    )
   }

  ngOnInit(): void {
  }

}
