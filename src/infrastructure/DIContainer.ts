import { CreateCar } from '../use-cases/CreateCar';
import { DeleteCar } from '../use-cases/DeleteCar';
import { FindCarById } from '../use-cases/FindCarById';
import { UpdateCar } from '../use-cases/UpdateCar';
import { GetAllCars } from '../use-cases/GetAllCars';
import { MongoCarRepository } from './repositories/MongoCarRepository';

class DIContainer {
  private static _carRepository = new MongoCarRepository();

  static createCarUseCase() {
    return new CreateCar(this._carRepository);
  }

  static getAllCarsUseCase() {
    return new GetAllCars(this._carRepository);
  }

  static findCarByIdUseCase() {
    return new FindCarById(this._carRepository);
  }

  static updateCarUseCase() {
    return new UpdateCar(this._carRepository);
  }

  static deleteCarUseCase() {
    return new DeleteCar(this._carRepository);
  }
}

export { DIContainer };
