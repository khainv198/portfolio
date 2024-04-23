import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  // app.use(helmet());
  // app.use(cookieParser());
  // app.use(compression({ level: 6 }));
  // app.use(
  //   session({
  //     secret: 'my-secret',
  //     resave: false,
  //     saveUninitialized: false,
  //     cookie: {
  //       httpOnly: true,
  //     },
  //   }),
  // );

  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.GRPC,
  //   options: {
  //     package: KHAINV198_SERVICES_AUTH_PACKAGE_NAME,
  //     protoPath: join(__dirname, '../../../proto/services/auth_service.proto'),
  //     url: 'localhost:9001',
  //     loader: {
  //       includeDirs: [join(__dirname, '../../../proto')],
  //     },
  //   },
  // });

  // await app.startAllMicroservices();

  await app.listen(3000);
}

bootstrap();
