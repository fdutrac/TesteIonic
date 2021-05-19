<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ produto.name }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-img :src="produto.img" style=""></ion-img>
    <ion-text id="descricao">
      {{ produto.descricao }}
    </ion-text>
    <ion-text id="moeda">
      {{ produto.valor }}
    </ion-text>
  </ion-content>
  <ion-footer>
    <ion-button @click="fecharModal" color="primary">X</ion-button>
  </ion-footer>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/vue";
import { modalController } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    title: { type: String, default: "Super Modal" },
    produto: {
      // descricao: { type: String },
    },
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar },
  methods: {
    fecharModal() {
      modalController.dismiss();
    }
  }
});
</script>
<style scoped>
#caixa {
  padding: 20px 20px;
}
#descricao {
  display: block;
  margin: 20px 0px;
}
#moeda {
  display:flex;
  justify-content: flex-end;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 30px 0px;
}
ion-footer {
  display: flex;
  padding: 5px 15px;
  justify-content: flex-end;
}
</style>