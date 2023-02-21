import axios from "axios";
import PostDto from "./scripts/postDto";

/**
 * Actions
 * */
export default function postActions() {
    return {
        async loadPost(quantity) {
            const result = axios.get(`https://jsonplaceholder.typicode.com/posts/${quantity}`)
                .then((response) => {
                    const data = response.data;
                    const post = new PostDto();
                    post.id = data.id;
                    post.body = data.body;
                    post.title = data.title;
                    this.posts.push(post);

                    return true;
                })

            return result;
        },
        deleteAllPost() {
            this.posts = [];
        }
    };
}