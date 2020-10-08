import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import AWS from 'aws-sdk'

@Module({  
  controllers: [CatsController],
  providers: [CatsService, AWS.S3],
})
export class CatsModule {}