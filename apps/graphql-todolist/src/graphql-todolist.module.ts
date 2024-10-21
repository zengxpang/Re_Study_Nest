import { Module, ValidationPipe } from '@nestjs/common';
import { GraphqlTodolistController } from './graphql-todolist.controller';
import { GraphqlTodolistService } from './graphql-todolist.service';
import { PrismaService } from './prisma.service';
import { APP_PIPE } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { TodolistResolver } from './todolist.resolver';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
  controllers: [GraphqlTodolistController],
  providers: [
    GraphqlTodolistService,
    PrismaService,
    TodolistResolver,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class GraphqlTodolistModule {}
