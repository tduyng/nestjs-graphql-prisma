import { JwtRefreshTokenGuard } from '../guards';

describe('JwtRefreshTokenGuard', () => {
  it('Should be defined', () => {
    const { PostService } = jest.createMockFromModule(
      '@modules/post/post.service.ts'
    );
    expect(new JwtRefreshTokenGuard(new PostService())).toBeDefined();
  });
});
