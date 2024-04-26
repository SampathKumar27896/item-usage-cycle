import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {

  constructor(private itemEntity: Item) {}
  
  create(item: CreateItemDto) {
    return this.itemEntity.createItem(item);
  }

  findAll() {
    return this.itemEntity.findAllItems();
  }

  findOne(id: number) {
    return this.itemEntity.findItemById(id);
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
