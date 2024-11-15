import { Car } from '../domain/entities/Car';
import { ICarInteractor } from '../domain/interfaces/ICarInteractor';

export class GetAllCars {
  constructor(private carRepository: ICarInteractor) {}

  async execute(): Promise<Car[]> {
    return await this.carRepository.findAll();
  }
}
