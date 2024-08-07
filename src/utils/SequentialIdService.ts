import { Injectable } from '@nestjs/common';

@Injectable()
export class SequentialIdService {
  private currentId: number = 0;

  generateId(): number {
    return ++this.currentId;
  }
}
