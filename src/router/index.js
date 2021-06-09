import Vue from 'vue';
import VueRouter from 'vue-router';

import Main from '../views/main/Main.vue';
import Album from '../views/album/Album.vue';
import AlbumList from '../views/albumList/AlbumList.vue';
import Collection from '../views/collection/Collection.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Main },
  { path: '/album/:id', component: Album },
  { path: '/albumList', component: AlbumList },
  { path: '/collection', component: Collection },
];

const router = new VueRouter({
  routes,
});

export default router;
