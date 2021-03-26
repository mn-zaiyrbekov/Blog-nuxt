import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreatePostsDto } from "./dto/create-posts-dto";
import { UpdatePostsDto } from "./dto/update-posts-dto";
import { PostService } from "./posts.service";


@Controller('/posts')
export class PostsController {

  constructor(private postsService: PostService) {}
  /**
   * @route '/posts'
   * @description 'GET ALL POST'
   * @method GET
   */
  @Get('/')
  getAll() {
    return this.postsService.getAll()
  }

  /**
   * @route '/posts'
   * @description 'GET ONE POST'
   * @method GET
   */
  @Get(':id')
  geOne(@Param('id') id: string) {
    return this.postsService.geOne(id)
  }

  /**
   * @route '/posts'
   * @description 'CREATE NEW POSTS'
   * @method POST
   */
  @Post()
  create(@Body() dto: CreatePostsDto) {
    return this.postsService.create(dto)
  }

  /**
   * @route '/posts'
   * @description 'UPDATE POST'
   * @method PUT
   */
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePostsDto) {
    return this.postsService.update(id, dto)
  }

  /**
   * @route '/posts'
   * @description 'DELETE ONE POST'
   * @method DELETE
   */
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.postsService.delete(id)
  }
}