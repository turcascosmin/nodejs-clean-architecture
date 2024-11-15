import { Car } from '../entities/Car';

export interface ICarInteractor {
  create(car: Car): Promise<Car>;
  findAll(): Promise<Car[]>;
  findById(id: string): Promise<Car | null>;
  update(id: string, car: Car): Promise<void>;
  delete(id: string): Promise<void>;
}
