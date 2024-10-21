import { Module } from '@nestjs/common';
import { GraphqlCrudController } from './graphql-crud.controller';
import { GraphqlCrudService } from './graphql-crud.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { StudentResolver } from './student/student.resolver';
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
  controllers: [GraphqlCrudController],
  providers: [GraphqlCrudService, StudentResolver],
})
export class GraphqlCrudModule {}
