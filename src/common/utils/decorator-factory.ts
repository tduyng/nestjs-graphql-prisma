import { ROUTE_ARGS_METADATA } from '@nestjs/common/constants';

// eslint-disable-next-line @typescript-eslint/ban-types
export function getParamDecoratorFactory(decorator: Function) {
  class TestDecorator {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public test(@decorator() _value) {}
  }

  const args = Reflect.getMetadata(ROUTE_ARGS_METADATA, TestDecorator, 'test');
  return args[Object.keys(args)[0]].factory;
}
