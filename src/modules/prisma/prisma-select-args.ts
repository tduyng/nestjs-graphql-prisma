import { PrismaSelect } from '@paljs/plugins';

export function PrismaSelectArgs(info: any, args: any) {
  const result = new PrismaSelect(info).value;

  if (!result.select || Object.keys(result.select).length > 0) {
    const newArgs = {
      ...args,
      ...result,
    };
    return newArgs;
  }

  return args;
}
