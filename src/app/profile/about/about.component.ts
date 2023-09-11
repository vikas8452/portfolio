import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  safeUrl : any
  constructor(private sanitizer: DomSanitizer) {
    let videoURL = "https://www.youtube.com/watch?v=PShQue9oQCw";
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoURL);
   }



  ngOnInit(): void {
  }
}
