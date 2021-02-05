import { AuthorGuard } from '../guard/author.guard';

describe('AuthorGuard', () => {
  it('Should be defined', () => {
    const { PostService } = jest.createMockFromModule(
      '@modules/post/post.service.ts',
    );
    expect(new AuthorGuard(new PostService())).toBeDefined();
  });
});
