import { Injectable } from '@nestjs/common';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLResolveInfo } from 'graphql';

@Injectable()
export class PrismaSelectService {
  public getValue(info: GraphQLResolveInfo) {
    if (info) {
      return new PrismaSelect(info).value;
    }
    return {};
  }
}
