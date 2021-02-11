import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql';

@Injectable()
export class PrismaSelectService {
  public getValue(info: GraphQLResolveInfo) {
    try {
      if (info) {
        return new PrismaSelect(info).value;
      }
      return null;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
