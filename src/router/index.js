import { createRouter, createWebHistory } from "vue-router";
import timeline from "@/views/timeline.vue" ;
import boiling from "@/views/boiling.vue" ;
import topic from "@/views/topic.vue" ;
import book from "@/views/book.vue" ;
import activity from "@/views/activity.vue" ;
import newArticle from "@/views/newArticle.vue" ;

const routes = [
    {
      path: "/",
      redirect: "/timeline"
    },
    {
      path: "/timeline",
      name: "timeline",
      component: timeline
    },
    {
      path: "/boiling",
      name: "boiling",
      component: boiling
    },
    {
      path: "/topic",
      name: "topic",
      component: topic
    },
    {
      path: "/book",
      name: "book",
      component: book
    },
    {
      path: "/activity",
      name: "activity",
      component: activity
    },
    {
      path: "/newArticle",
      name: "newArticle",
      component: newArticle
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
