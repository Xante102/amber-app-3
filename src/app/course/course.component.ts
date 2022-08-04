import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  click = '';
  // color = ''
  clicks: any[] = [];
  // showText = false;
  // showImg = false;
  // showVid = false;

  // log(objParam: string = '') {
  //   this.click =
  //     new Date().toLocaleTimeString() + ` also ${objParam} was clicked`;
  //   this.clicks.push(this.click);
  // }

  toggle(objParam: string){
    let clickDate = Date.now();
    this.click = objParam;
    this.clicks.push({color:`${objParam}`, date: clickDate});
  }


  style(color: string) {
    let result: string = '';
    if (color == 'text'){
      result = '#9D00FF'
    } else if (color == 'video'){
      result = '#1400ED'
    } else if (color == 'image'){
      result = '#14FF82'
    }
    return result;
  }



  // toggle(content: string = 'text') {
  //   switch (content) {
  //     case 'text':
  //       this.color = 'blue';
  //       this.showText = true;
  //       this.showVid = false;
  //       this.showImg = false;
  //       this.log('Text');
  //       break;

  //     case 'video':
  //       this.color = 'green';
  //       this.showText = false;
  //       this.showVid = true;
  //       this.showImg = false;
  //       this.log('Video');
  //       break;

  //     case 'image':
  //       this.color = 'red';
  //       this.showText = false;
  //       this.showVid = false;
  //       this.showImg = true;
  //       this.log('Image');

  //       break;
  //   }
  // }

  constructor() {}

  ngOnInit(): void {}
}
