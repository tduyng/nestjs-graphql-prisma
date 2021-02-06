import { GqlModuleOptions } from '@nestjs/graphql';
import { environment } from '../environments/environment';

export function graphqlOptions(): GqlModuleOptions {
  const options = environment.graphql;
  return options;
}
