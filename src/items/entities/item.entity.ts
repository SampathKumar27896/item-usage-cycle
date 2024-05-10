import { CreateItemDto } from '../dto/create-item.dto';
import { Injectable } from '@nestjs/common';
import { UpdateItemDto } from '../dto/update-item.dto';

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
    updateItemPartialById(id: number, updateItemDto: UpdateItemDto) {
        let itemToBeUpdated = this.findItemById(id);
        if(itemToBeUpdated.length === 1) {
            itemToBeUpdated = itemToBeUpdated[0];
            itemToBeUpdated = {...itemToBeUpdated, ...updateItemDto};
        }
        let arrayWithoutOldItem = this.items.filter(item => item.id !== id);
        arrayWithoutOldItem.push(itemToBeUpdated);
        this.items = arrayWithoutOldItem;
        return {...updateItemDto}
    }
    removeItemById(id: number) {
        this.items = this.items.filter(item => item.id !== id);
    }
}
