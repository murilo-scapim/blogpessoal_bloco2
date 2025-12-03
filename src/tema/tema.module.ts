import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tema } from './entities/tema.entity';
import { TemaService } from './services/tema.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tema])],
  controllers: [],
  providers: [TemaService],
  exports: [TemaService],
})
export class TemaModule {}
