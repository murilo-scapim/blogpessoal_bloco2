import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './entities/postagem.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Postagem])],
  providers: [],
  controllers: [],
  exports: [],
})
export class PostagemModule {}
