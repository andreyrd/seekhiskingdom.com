import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/podcast',
		name: 'Podcast',
		component: () => import(/* webpackChunkName: "podcast" */ '../views/Podcast.vue'),
	},
	{
		path: '/blog/what-does-it-mean-to-be-worldly',
		name: 'What does it mean to be worldly? | Blog',
		component: () => import(/* webpackChunkName: "blog-post" */ '../views/BlogPost.vue'),
	},
	{
		path: '/blog',
		name: 'Blog',
		component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue'),
	},
	{
		path: '/about',
		name: 'About',
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
