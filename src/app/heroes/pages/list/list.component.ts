import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/heroes.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public heroes: Hero[] = [];
  public dataSource: MatTableDataSource<Hero>;
  public displayedColumns: string[] = ['name', 'alter_ego', 'publisher', 'first_appearance', 'characters', 'acctions'];
  public loading = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.loading = true;
    this.heroesService.getHeroes()
    .pipe(finalize(() => this.finalizeSubscription()))
    .subscribe(heroes => this.dataSource = new MatTableDataSource<Hero>(heroes));
  }

  finalizeSubscription(): void {
    this.loading = false;
    this.dataSource.paginator = this.paginator;
  }

  goToEdit(clickedRow: Hero): void {
    console.log('EDTI ', clickedRow.id)
  }

  delete(clickedRow: Hero): void {
    console.log('DELETE ', clickedRow.id)
  }
}

