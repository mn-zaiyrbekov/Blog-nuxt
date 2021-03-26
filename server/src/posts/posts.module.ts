import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PostsController } from "./posts.controller";
import { PostService } from "./posts.service";
import { Posts, PostsSchema } from "./schemas/posts.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Posts.name, schema: PostsSchema}])
  ],
  controllers: [PostsController],
  providers: [PostService]
}) 
export class PostsModule {}