import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JuiceController } from './juice/juice.controller';

@Module({
  imports: [],
  controllers: [AppController, JuiceController],
  providers: [AppService],
})
export class AppModule {}
