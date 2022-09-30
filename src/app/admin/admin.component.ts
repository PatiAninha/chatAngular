import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  options: any;


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  //   const xAxisData = [];
  //   const data1 = [];
  //   const data2 = [];

  //   for (let i = 0; i < 100; i++) {
  //     xAxisData.push('category' + i);
  //     data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
  //     data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
  //   }

  //   this.options = {
  //     legend: {
  //       data: ['bar', 'bar2'],
  //       align: 'left',
  //     },
  //     tooltip: {},
  //     xAxis: {
  //       data: xAxisData,
  //       silent: false,
  //       splitLine: {
  //         show: false,
  //       },
  //     },
  //     yAxis: {},
  //     series: [
  //       {
  //         name: 'bar',
  //         type: 'bar',
  //         data: data1,
  //         animationDelay: (idx: number) => idx * 10,
  //       },
  //       {
  //         name: 'bar2',
  //         type: 'bar',
  //         data: data2,
  //         animationDelay: (idx: number) => idx * 10 + 100,
  //       },
  //     ],
  //     animationEasing: 'elasticOut',
  //     animationDelayUpdate: (idx: number) => idx * 5,
  //   };
  // }

  }

  empresa() {
    this.router.navigate(['empresa'], {relativeTo:this.route});
  }

  home() {
    this.router.navigate(['home'], {relativeTo:this.route});
  }

  pessoa() {
    this.router.navigate(['pessoa'], {relativeTo:this.route});
  }


}
