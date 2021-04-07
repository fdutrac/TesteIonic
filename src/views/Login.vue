<template>
  <ion-page>
    <ion-content id="container" color="light" :fullscreen="true" style="width:80%;">
      <div style="width: 80%; margin: auto">
        <ion-item>
          <ion-label position="floating">Usuário</ion-label>
          <ion-input v-model="user"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label  position="floating">Senha</ion-label>
          <ion-input v-model="password"></ion-input>
        </ion-item>
      </div>
     <ion-button @click="validarDados" class="ion-margin-top">Entrar</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonItem, IonInput, IonLabel, IonButton, alertController } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',
  components: {
    IonContent,
    IonInput,
    IonPage,
    IonItem,
    IonLabel,
    IonButton,
    // alertController,
  },
  data() {
    return {
      user: "",
      password: "",
    }
  },
  methods: {
    async validarDados() {
      if (this.user === "" || this.password === "") {
        const alert = await alertController
          .create({
            cssClass: 'my-custom-class',
            header: 'Atenção!',
            message: 'Preencha seus dados!',
            buttons: ['OK'],
          });
        return alert.present();
      }
      else if (this.user.length > 10 && this.password.length > 6) {
        const alert = await alertController
          .create({
            cssClass: 'my-custom-class',
            header: 'Atenção!',
            message: 'Usuário Inválido.',
            buttons: ['OK'],
          });
        return alert.present();
      }
      else if (this.user.length > 10 && this.password.length < 6) {
        const alert = await alertController
          .create({
            cssClass: 'my-custom-class',
            header: 'Atenção!',
            message: 'Usuário e senha inválidos.',
            buttons: ['OK'],
          });
        return alert.present();
      }
      else if (this.user.length < 10 && this.password.length < 6) {
        const alert = await alertController
          .create({
            cssClass: 'my-custom-class',
            header: 'Atenção!',
            message: 'Senha inválida. Deve ser Maior que 6 caracteres.',
            buttons: ['OK'],
          });
        return alert.present();
      }
      else {
        this.$router.push('boasvindas')
      }
    }
  },
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  top: 40%;
  right: 10%
;
  /* transform: translateY(-50%); */
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

</style>