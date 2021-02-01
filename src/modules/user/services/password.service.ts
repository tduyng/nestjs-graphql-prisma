import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordService {
  private salt_number = 10;

  public async validatePassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }

  public async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(this.salt_number);
    return await bcrypt.hash(password, salt);
  }
}
