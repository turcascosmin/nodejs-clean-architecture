import { Car } from '../domain/entities/Car';
import { ICarInteractor } from '../domain/interfaces/ICarInteractor';

export class CreateCar {
  constructor(private carRepository: ICarInteractor) {}

  async execute(car: Car): Promise<Car> {
    return await this.carRepository.create(car);
  }
}
