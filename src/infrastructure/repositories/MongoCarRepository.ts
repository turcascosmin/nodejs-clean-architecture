import { Car } from '../../domain/entities/Car';
import { ICarInteractor } from '../../domain/interfaces/ICarInteractor';
import { CarModel } from '../models/CarModel';

export class MongoCarRepository implements ICarInteractor {
  async findAll(): Promise<Car[]> {
    return await CarModel.find();
  }

  async findById(id: string): Promise<Car | null> {
    return await CarModel.findById(id);
  }

  async create(car: Car): Promise<Car> {
    const newCar = new CarModel(car);
    const savedCar = await newCar.save();
    return new Car(
      savedCar.carMake,
      savedCar.carModel,
      savedCar.color,
      savedCar._id,
    );
  }

  async update(id: string, car: Car): Promise<void> {
    await CarModel.findByIdAndUpdate(id, car, { new: true });
  }

  async delete(id: string): Promise<void> {
    await CarModel.findByIdAndDelete(id);
  }
}
