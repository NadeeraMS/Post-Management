package com.example.foodie.service;

import com.example.foodie.model.Post;
import com.example.foodie.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    //create a new post
    public Post createPost(Post post){
        post.setCreatedAt(new Date(System.currentTimeMillis()));
        return postRepository.save(post);
    }
    //Get all Posts
    public List<Post> getAllPosts(){return postRepository.findAll();}

    //Get all posts by Id
    public Post getPostById(String id){return postRepository.findById(id).get();}

    //update post byid
    public Post updatePostById(String id,Post post){
        Post postToUpdate = postRepository.findById(id).get();
        postToUpdate.setTitle(post.getTitle());
        postToUpdate.setDescription(post.getDescription());
        postToUpdate.setImage(post.getImage());
        postToUpdate.setComments(post.getComments());
        postToUpdate.setLocation(post.getLocation());
        postToUpdate.setUpdatedAt(post.getUpdatedAt());

        return postRepository.save(postToUpdate);

    }


    public void deletePostById(String id) {postRepository.deleteById(id);}
}
