import PostStateDto from "./scripts/postStateDto";

/**
 * State
 * */
export default function postState() {
    return (): PostStateDto => ({
        posts: []
    });
}