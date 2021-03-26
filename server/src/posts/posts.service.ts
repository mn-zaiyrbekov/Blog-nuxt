import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreatePostsDto } from './dto/create-posts-dto'
import { UpdatePostsDto } from './dto/update-posts-dto'
import { Posts, PostsDocument } from './schemas/posts.schema'


@Injectable()
export class PostService {
  
  constructor(@InjectModel(Posts.name) private postsModel: Model<PostsDocument>) {}

  async getAll(): Promise<Posts[]>{
    const posts = await this.postsModel.find()
    return posts
  }

  geOne(id: string) {
    return this.postsModel.findById(id)
  }

  async create(dto: CreatePostsDto): Promise<Posts>{
    const posts = await this.postsModel.create({...dto})
    return posts
  }

  async update(id: string, dto: UpdatePostsDto): Promise<Posts> {
    const posts = await this.postsModel.findByIdAndUpdate(id, {...dto}, {new: true})
    return posts
  }

  async delete(id: string): Promise<Posts> {
    const posts = await this.postsModel.findByIdAndDelete(id)
    return posts
  }
}