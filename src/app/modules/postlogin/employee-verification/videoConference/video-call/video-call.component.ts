import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
// import {FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

const mediaConstraints = {
  audio: true,
  video: { width: 720, height: 540 }
};

@Component({
  selector: 'app-video-call',
  templateUrl: './video-call.component.html',
  styleUrls: ['./video-call.component.scss']
})
export class VideoCallComponent implements AfterViewInit {

  private localstream: MediaStream;
  @ViewChild('local_video') localVideo: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    this.requestMediaDevices();
  }

  private async requestMediaDevices(): Promise<void> {
    this.localstream = await navigator.mediaDevices.getUserMedia(mediaConstraints);
    this.localVideo.nativeElement.srcObject=this.localstream;
  }

  startLocalVideo():void{
    this.localstream.getTracks().forEach(track=>{
      track.enabled=true;
    });
    this.localVideo.nativeElement.srcObject=this.localstream;
  }
}
