import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ApiService {


  apiUrl: string = 'api'
//  apiUrl:string = 'http://localhost:3000/api'

  constructor(private http :HttpClient) { }

  // to fetch all datalist
  getBlogList(){
    return this.http.get(`${this.apiUrl}/bloglist`)
  }

  // to delete blog
  deleteBlog(id:any){
    return this.http.delete(`${this.apiUrl}/blog/${id}`)
  }
  // to add new blog
  addBlog(data:any){
        return this.http.post(`${this.apiUrl}/blog/`,data)

  }

  // to update blog
  updateBlog(data:any, id:any){
    return this.http.post(`${this.apiUrl}/blog/`, {data,id})

}
  // fetch data of single

  getSingleBlog(id:any){
    return this.http.get(`${this.apiUrl}/blog/${id}`)
  }




}
