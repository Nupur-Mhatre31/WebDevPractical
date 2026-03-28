import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.html',
  styleUrls: ['./items.css']
})
export class ItemsComponent implements OnInit {

  items: any[] = [];

  constructor(private apiService: ApiService) {}

 async ngOnInit(): Promise<void> {
  try {
    const data = await this.apiService.getItems();
    console.log(data);   // 👈 ADD THIS
    this.items = data.slice(0, 10);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
}