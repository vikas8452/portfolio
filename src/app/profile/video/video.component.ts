import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  playerConfig = {
    controls: 0,
    mute: 1,
    autoplay: 0
  };

  // @Input() videoID = 'NeXbmEnpSz0';
  @Input() videoId = '';
  ngOnInit() {
     console.log("VideoId ", this.videoId);
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  onReady(e): void{
    console.log(e, 'its ready')
  }
}
