import { CreateItemDto } from '../dto/create-item.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Item {
    items: any[] = [];
    createItem(item: CreateItemDto) {
        if(this.items.length === 0) {
            this.items.push({id: 1, ...item})
        } else {
            this.items.push({id: (this.items.length + 1), ...item})
        }
        return item;
    }
    findAllItems() {
        return this.items;
    }
    findItemById(id: number) {
        return this.items.filter(item => id == item.id);
    }
}
