import { Injectable } from '@nestjs/common';

export interface Cat {
  color:string
}

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    this.create({color: 'black'})
    this.create({color: 'brown'})
    return this.cats;
  }
}