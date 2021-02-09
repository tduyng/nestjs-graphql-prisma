import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { PostResolver } from '../post.resolver';
import { CreatePostInput } from '../dto/create-post.input';
import { User } from '@modules/user/user.model';
import { PostWhereUniqueInput } from '@common/@generated/post';

const oneUser = {
  id: 'some userId',
  email: 'some email',
} as User;

const onePost = {
  id: 'some postId',
  title: 'some title',
  content: 'some content',
  author: oneUser,
} as Post;

const postInput = {
  title: 'some title',
  content: 'some content',
  categories: [
    {
      name: 'Web development',
    },
    {
      name: 'Monorepo',
    },
  ],
} as CreatePostInput;

const arrayPost = [onePost, onePost];

const postWhereUniqueInput = {
  id: 'some postId',
} as PostWhereUniqueInput;

describe('PostResolver', () => {
  let postResolver: PostResolver;
  let postService;

  const mockPostService = () => ({
    getPosts: jest.fn(),
    getPost: jest.fn(),
    getPostByUser: jest.fn(),
    getAuthorOfPost: jest.fn(),
    createPost: jest.fn(),
    updatePost: jest.fn(),
    deletePost: jest.fn(),
  });

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostResolver,
        {
          provide: PostService,
          useFactory: mockPostService,
        },
      ],
    }).compile();

    postResolver = module.get<PostResolver>(PostResolver);
    postService = module.get<PostService>(PostService);
  });

  it('Should be defined', () => {
    expect(postResolver).toBeDefined();
  });

  describe('posts', () => {
    it('Should return an array posts', async () => {
      postService.getPosts.mockReturnValue(arrayPost);
      const result = await postResolver.posts({});
      expect(result).toEqual(arrayPost);
    });
  });

  describe('post', () => {
    it('Should return post', async () => {
      postService.getPost.mockReturnValue(onePost);
      const result = await postResolver.post(postWhereUniqueInput);
      expect(result).toEqual(onePost);
    });
  });

  describe('createPost', () => {
    it('Should return an post', async () => {
      postService.createPost.mockReturnValue(onePost);
      const result = await postResolver.createPost(postInput, oneUser);
      expect(result).toEqual(onePost);
    });
  });

  describe('updatePost', () => {
    it('Should return an Post as result', async () => {
      postService.updatePost.mockReturnValue(onePost);
      const result = await postResolver.updatePost(onePost, postInput);
      expect(result).toEqual(onePost);
    });
  });

  describe('deletePost', () => {
    it('Should return an post', async () => {
      postService.deletePost.mockReturnValue(onePost);
      const result = await postResolver.deletePost(postWhereUniqueInput);
      expect(result).toEqual(onePost);
    });
  });
});
