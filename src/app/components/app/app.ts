import {defineComponent, computed, ref, Ref, watch} from "vue";
import {usePostStore} from "../../store/postStore";
import PostDto from "../../store/scripts/postDto";

export default defineComponent({
    name: "App",
    setup() {
        const store = usePostStore();

        const listClass = 'app__posts-list';

        const postCount = ref<number>(1);

        const countPost = computed<number>(() => {
            return store.sumPosts;
        })

        function clickGetButtonHandler() {
            store.loadPost(postCount.value);
            postCount.value += 1;
        }

        function clickDeleteButtonHandler() {
            store.deleteAllPost();
            postCount.value = 1;
        }

        function createPost(post: PostDto) {
            const template = `
                <h2 class="app__post-header">${post.id}: ${post.title}</h2>
                <p class="app__post-body">${post.body}</p>
            `;
            const postTemplate = document.createElement('div');
            postTemplate.classList.add('app__post');
            postTemplate.innerHTML = template;
            return postTemplate;
        }

        watch(countPost, (newVal: number, oldVal: number) => {
            if (0 === newVal) {
                const list = document.querySelector(`.${listClass}`) as HTMLDivElement;
                list.innerHTML = '';

                return;
            }

            const list = document.querySelector(`.${listClass}`) as HTMLDivElement;
            const post = createPost(store.posts[oldVal]);
            list.appendChild(post);
        })


        return {
            countPost,
            clickGetButtonHandler,
            clickDeleteButtonHandler
        }
    }
})
