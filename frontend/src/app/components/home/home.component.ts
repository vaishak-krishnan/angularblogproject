import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  blogs:any = []

  ngOnInit(): void {

    this.getData()


  }

  getData(){
    this.apiService.getBlogList().subscribe(res =>{
      this.blogs = res
    })
  }

}
