import { Resolver } from '@nestjs/graphql';
import { User } from '@modules/user/user.model';

@Resolver(() => User)
export class AuthResolver {
  /* Query*/
  // authLogin
  // authExchangeToken
  // authRegister
  // authPasswordResetRequest
  /* Mutation*/
  // register
  // login
  // changePassword
}
