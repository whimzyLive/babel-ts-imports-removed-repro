import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

// This should not be removed
import AWS from 'aws-sdk'

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService, private s3: AWS.S3){
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }


  @Get('cat')
  createAndGetCat() {
    return this.catsService.findAll()
  }

  @Get('s3-version')
  getS3Version() {
    return this.s3.apiVersions
  }
}