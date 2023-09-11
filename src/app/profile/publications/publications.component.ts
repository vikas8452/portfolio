import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  videoId : any
  constructor() {
    this.videoId = "NeXbmEnpSz0"
   }

  ngOnInit(): void {
  }

}
