<template>
  <ion-app>
    <Header/>
    <Menu></Menu>
    <ion-router-outlet id="main"/>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    Header,
    Menu,
  }
});
</script>
<style>
#container {
  text-align: center;
  margin-top: 40px;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #5e5e5e;

  margin: 0;
}

#container a {
  text-decoration: none;

}

</style>