import { Injectable } from '@nestjs/common';
import { CreateApiDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';
import {
  readFromFile,
  readFromFiletxt,
  writeToFile,
  writeToFiletxt,
} from './wirit';

@Injectable()
export class ApiService {
  async create(createApiDto: CreateApiDto) {
    const arrBuy: any = [];
    let num = 0;
    const data = await readFromFile('data.json');
    const bbudgettxt = await readFromFiletxt('budget.txt');

    let budgettxt = Number(bbudgettxt);
    for (let i = 0; i < createApiDto.purchases.length; i++) {
      const x = data.find(
        (d: any) => d.name === createApiDto.purchases[i].name,
      );
      if (x) {
        const num =
          createApiDto.purchases[i].quantity *
          createApiDto.purchases[i].pricePerUnit;
        if (num > +budgettxt) {
          return 'num > budgettxt';
        }
        budgettxt -= num;
        x.quantity += createApiDto.purchases[i].quantity;
      } else {
        num =
          createApiDto.purchases[i].quantity *
          createApiDto.purchases[i].pricePerUnit;
        if (num > budgettxt) {
          return 'num > budgettxt';
        }
        const d = {
          id: createApiDto.purchases[i].id,
          name: createApiDto.purchases[i].name,
          type: createApiDto.purchases[i].type,
          quantity: createApiDto.purchases[i].quantity,
          pricePerUnit: num,
          hasImage: false,
        };
        arrBuy.push(d);
      }
    }
    for (let i = 0; i < arrBuy.length; i++) {
      data.push(arrBuy[i]);
    }
    writeToFile('data.json', data);
    writeToFiletxt('budget.txt', budgettxt);
    return;
  }

  async upfile( file: any) {
    const data = await readFromFile('data.json');
    // const item = data.find((d: any) => d.id === itemId);
    if (!file.mimetype.includes('png')) {
      return 'is not png.'
    }

    return file.mimetype
  }
}
