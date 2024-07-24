import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'shiruixin',
      password: '',
      database: 'eth-wallet',
      // entities: [YourEntity], // 列出你的所有实体
      migrations: ['dist/migrations/*.js'], // 迁移文件的位置，这里假设你使用 TypeScript 并编译到 dist 目录
      // cli: {
      //   migrationsDir: 'src/migrations', // 迁移文件的源目录（TypeScript 文件）
      // },
      synchronize: true, // 注意：在生产环境中应设置为 false，并使用 migrations
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
