import { defineStore } from 'pinia';
import postState from "./postState";
import postGetters from "./postGetters";
import postActions from "./postActions";

export const usePostStore = defineStore('post', {
    state: postState(),
    getters: postGetters(),
    actions: postActions(),
});