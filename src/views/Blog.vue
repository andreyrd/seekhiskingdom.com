<template>
	<div class="blog">
		<div class="post">
			<router-link to="/blog/what-does-it-mean-to-be-worldly" class="feature">
				<Feature :img="require('@/assets/blog-post.jpg')" text="What does it mean to be worldly?" />
			</router-link>
		</div>
	</div>
</template>

<script>
import Feature from '@/components/Feature.vue';

export default {
	components: { Feature },
};
</script>

<style>

</style>
