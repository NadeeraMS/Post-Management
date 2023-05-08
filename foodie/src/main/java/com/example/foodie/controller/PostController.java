package com.example.foodie.controller;

import com.example.foodie.model.Post;
import com.example.foodie.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/posts")
public class PostController {
   @Autowired
  private PostService postService;
//
    //create new post
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    private Post createPost(@RequestBody Post post){
        return postService.createPost(post);
    }

    //Get All posts
    @GetMapping
    private List<Post> getAllPost() {return postService.getAllPosts();}

    //Get posts by id
    @GetMapping("/{id}")
    private Post getPostById(@PathVariable String id){ return postService.getPostById(id);}

    //update post by Id
    @PatchMapping("/{id}")
    private Post updatePostById(@PathVariable String id,@RequestBody Post post){
        return postService.updatePostById(id, post);
    }
    //Delete post by id
    @DeleteMapping("/{id}")
    private void deletePostById(@PathVariable String id){postService.deletePostById(id);}
}
