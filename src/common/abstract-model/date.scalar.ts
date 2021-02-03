import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind } from 'graphql';

@Scalar('Date', () => Date)
export class DateScalar implements CustomScalar<string, Date> {
  public readonly description = 'Date custom scalar type';

  public parseValue(value: string): Date {
    return new Date(value);
  }
  public serialize(value: Date): string {
    return new Date(value).toISOString();
  }

  public parseLiteral(ast: any): Date {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  }
}
