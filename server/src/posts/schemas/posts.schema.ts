import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type PostsDocument = Posts & Document

@Schema()
export class Posts {
  @Prop()
  title: string

  @Prop()
  description: string

  @Prop()
  image: string

  @Prop({type: Date, default: Date.now()})
  createdDate: Date
}

export const PostsSchema = SchemaFactory.createForClass(Posts)