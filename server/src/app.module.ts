import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://mambetov:mambetovmn@falcon-ver1.p3w8c.mongodb.net/blog-nuxt'),
    PostsModule
  ]
})
export class AppModule {}
