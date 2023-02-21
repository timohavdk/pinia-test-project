import PostStateDto from "./scripts/postStateDto";

/**
 * Getters
 * */
export default function postGetters() {
    return {
        sumPosts: (state: PostStateDto) => state.posts.length,
    }
};