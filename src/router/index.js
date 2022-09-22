import { createRouter, createWebHashHistory} from "vue-router";    
 const routes=[ {                                                  
    path:'/',                                                 
    name:'Home',                                              
    component: ()=> import ("/src/router/views/HomePage.vue")       
},{                                                  
    path:'/menu',                                                 
    name:'Menu',                                              
    component: ()=> import ("/src/router/views/MenuPage.vue")       
},
     {                                                  
        path:'/skills',                                                 
        name:'Skills',                                              
        component: ()=> import ("/src/router/views/SkillsPage.vue")       
    },
    {                                                  
       path:'/work',                                                 
       name:'Work',                                              
       component: ()=> import ("/src/router/views/WorkPage.vue")       
   },
   {                                                  
      path:'/education',                                                 
      name:'Education',                                              
      component: ()=> import ("/src/router/views/EducationPage.vue")       
  },
  {                                                  
     path:'/events',                                                 
     name:'Events',                                              
     component: ()=> import ("/src/router/views/EventsPage.vue")       
 },
 {                                                  
    path:'/personal',                                                 
    name:'Personal',                                              
    component: ()=> import ("/src/router/views/PersonalPage.vue")       
}]                                                            
 const router =createRouter({                                      
     history:createWebHashHistory(),                               
     routes,                                                       
 })                                                                
 export default router; 