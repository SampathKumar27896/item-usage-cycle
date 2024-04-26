import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { Item } from './entities/item.entity';
@Module({
  controllers: [ItemsController],
  providers: [ItemsService, Item],
})
export class ItemsModule {}
