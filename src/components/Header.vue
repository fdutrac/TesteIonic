<template>
  <ion-header :translucent="true">
    <ion-toolbar style="display: flex;">
      <ion-buttons slot="start">
        <ion-menu-button>
          
        </ion-menu-button>
      </ion-buttons>
      <router-link to="/">
        <ion-title>Projeto Mobile</ion-title>
      </router-link>
      <ion-button slot="primary" @click="presentAlertPrompt">Informe seus dados</ion-button>
    </ion-toolbar>
    <div style="width: 100%;" v-if="inputs !== ''">
      <ion-item>Email: {{ inputs.email }} Telefone: {{ inputs.phone }}</ion-item>
    </div>
  </ion-header>
</template>

<script lang="ts">
import { IonHeader, IonTitle, IonButton, IonMenuButton, IonButtons, IonToolbar, alertController } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  components: {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    // IonButton,
    IonMenuButton
  },
  data() {
    return {
      inputs: "",
    }
  },
  methods: {
    async presentAlertPrompt() {
      const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          header: 'Seus dados',
          inputs: [
            {
              name: 'email',
              placeholder: 'E-mail',
              type: 'email'
            },
            {
              name: 'phone',
              // id: 'phone-id',
              placeholder: 'Telefone',
            },
          ],
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel')
              },
            },
            {
              text: 'Enviar',
              handler: (inputs) => {
                this.inputs = inputs;
                console.log('Confirm Ok')
                console.log(this.inputs)
                this.$emit('onClientData', inputs)
              },
            },
          ],
        });
      return alert.present();
    }, 
    }
  });
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
a {
  text-decoration: none;
  color: white
}

</style>