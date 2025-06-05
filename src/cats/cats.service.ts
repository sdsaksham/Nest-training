// cats/cats.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat, CatDocument } from './schemas/cat.schema';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async create(createCatDto: any): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec(); //mongoose methods return thenable that are not real JS promise so exec() is used to convert it into real JS promise
  }

  async findOne(id: string): Promise<any> {
    return this.catModel.findById(id).exec();
  }

  async update(id: string, updateCatDto: any): Promise<Cat | null> {
    return this.catModel
      .findByIdAndUpdate(id, updateCatDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Cat | null> {
    return this.catModel.findByIdAndDelete(id).exec();
  }
}
