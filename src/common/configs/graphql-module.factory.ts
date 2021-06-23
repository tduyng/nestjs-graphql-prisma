import { environment } from '@common/environment';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

//---------------------------------------------------------
/**
 * Custom graphql factory
 *
 */
export const graphqlModuleFactory = async () => {
  const graphqlEnvironmentOptions = environment().graphql;
  // const logger = new Logger();
  return {
    ...graphqlEnvironmentOptions,
    context: ({ req, connection }) => {
      if (!connection) {
        // Http request
        return {
          token: undefined as string | undefined,
          req: req as Request
        };
      } else {
        // USE THIS TO PROVIDE THE RIGHT CONTEXT FOR I18N
        return {
          token: undefined as string | undefined,
          req: connection.context as Request
        };
      }
    },

    formatError: (error: GraphQLError) => {
      const graphQLFormattedError: GraphQLFormattedError = {
        message:
          error.extensions?.exception?.response?.message || error.message,
        locations: error.locations,
        path: error.path,
        extensions: {
          code: error.extensions?.code,
          exception: {
            name:
              error.extensions?.exception?.name ||
              error.extensions?.exception?.type
          }
        }
      };
      return graphQLFormattedError;
    }
  };
};
