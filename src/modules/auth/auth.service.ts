import { UserWhereUniqueInput } from '@common/@generated/user';
import { UserService } from '@modules/user/services/user.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  public async validateUser(email: string, password: string) {
    const where: UserWhereUniqueInput = {
      email: email,
    };
    const user = await this.userService.getUserByUniqueInput(where);
    const isMatchedPassword = await bcrypt.compare(password, user?.password);
    if (!user || !isMatchedPassword) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
