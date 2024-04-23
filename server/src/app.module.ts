import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { Technology } from '@modules/technologies/entities/technology.entity';
import { TechnologiesModule } from '@modules/technologies/technologies.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [
        () => {
          return yaml.load(
            readFileSync(join(process.cwd(), 'config.yml'), 'utf8'),
          ) as Record<string, any>;
        },
      ],
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'generated/graphql/schema.gql'),
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),

    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      synchronize: true,
      logging: false,
      entities: [Technology],
    }),

    TechnologiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
