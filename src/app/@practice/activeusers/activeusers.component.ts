import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-activeusers',
  templateUrl: './activeusers.component.html',
  styleUrls: ['./activeusers.component.scss'],
})
export class ActiveusersComponent implements OnInit {
  user!: { name: string; id: number };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user = {
      name: this.route.snapshot.params['name'],
      id: this.route.snapshot.params['id'],
    };

    this.route.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
  }
}
