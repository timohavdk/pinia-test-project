<script lang="ts" src="./app.ts"></script>
<style src="./app.scss"></style>

<template>
  <div class="app">
    <h1 class="app__header">Posts: {{ countPost }}</h1>
		<div class="app__bar">
      <button
        @click="clickGetButtonHandler"
        class="app__button"
      >Get post</button>
      <button
        @click="clickDeleteButtonHandler"
        class="app__button app__button_delete"
      >Delete all post</button>
    </div>
    <div class="app__posts-list"></div>
	</div>
</template>
