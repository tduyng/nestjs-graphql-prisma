import { LocalGuard } from '../guards/local.guard';

describe('LocalGuard', () => {
  it('Should be defined', () => {
    const { PostService } = jest.createMockFromModule(
      '@modules/post/post.service.ts',
    );
    expect(new LocalGuard(new PostService())).toBeDefined();
  });
});
