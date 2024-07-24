import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private readonly entityManager: EntityManager) {}

  getHello(): string {
    return 'Hello World!';
  }

  async checkDb(): Promise<string> {
    try {
      // 假设你有一个名为 "users" 的表
      const users = await this.entityManager.query(`SELECT * FROM "addresses" LIMIT 1`);
      console.log('Database connection is successful!', users);
      return 'db health!';
    } catch (error) {
      console.error('Database connection failed:', error);
    }
  }

  checkApi(): string {
    return 'api health!';
  }

  checkRpc(): string {
    return 'rpc health!';
  }
}
