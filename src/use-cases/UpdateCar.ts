import { Car } from '../domain/entities/Car';
import { ICarInteractor } from '../domain/interfaces/ICarInteractor';

export class UpdateCar {
  constructor(private carRepository: ICarInteractor) {}

  async execute(id: string, car: Car): Promise<void> {
    return await this.carRepository.update(id, car);
  }
}
