import { environment } from '@common/environment';
import { Logger } from '@nestjs/common';
import {
  ApolloErrorConverter,
  extendMapItem,
  mapItemBases,
} from 'apollo-error-converter';

//---------------------------------------------------------
/**
 * Custom graphql factory
 * https://github.com/unlight/nestjs-graphql-prisma-realworld-example-app/blob/master/src/app.module.ts
 *
 */
export const graphqlModuleFactory = async () => {
  const graphqlEnvironmentOptions = environment().graphql;
  const logger = new Logger();
  return {
    ...graphqlEnvironmentOptions,
    context: ({ req, connection }) => {
      if (!connection) {
        // Http request
        return {
          token: undefined as string | undefined,
          req: req as Request,
        };
      } else {
        // USE THIS TO PROVIDE THE RIGHT CONTEXT FOR I18N
        return {
          token: undefined as string | undefined,
          req: connection.context as Request,
        };
      }
    },
    formatError: new ApolloErrorConverter({
      logger: (err: any) => {
        logger.error(err);
      },
      errorMap: [
        {
          NotFoundError: {
            name: 'ENTITY_NOT_FOUND',
            message: 'Entity Not Found',
            logger: true,
          },
          BadRequestException: extendMapItem(mapItemBases.InvalidFields, {
            logger: true,
            data: (err: any) => {
              return err?.response;
            },
          }),
        },
      ],
    }),
  };
};
