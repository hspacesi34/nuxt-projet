<template>
  <div v-if="articles.length > 0" class="p-6 bg-base-200 w-200">
    
    <div class="space-y-6">

      <div v-for="article in articles" :key="article.titre" 
           class="card bg-base-100 shadow-xl">
        
        <div class="card-body">
          
          <h2 class="card-title text-2xl mb-2">{{ article.titre }}</h2>
          
          <p class="text-sm font-medium text-neutral-content mb-4">
            Par {{ article.auteur }}
          </p>
          
          <p class="text-base-content text-opacity-80">{{ article.contenu }}</p>
          
          <div class="card-actions justify-end mt-4">
            <!-- Open the modal using ID.showModal() method -->
            <button class="btn" onclick="my_modal_2.showModal()">Modifier</button>
            <dialog id="my_modal_2" class="modal">
                <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend class="fieldset-legend">Modifier article</legend>

                    <label class="label">Titre</label>
                    <input type="text" class="input" placeholder="Titre de l'article" v-model="newArticle.titre" required/>

                    <label class="label">Auteur</label>
                    <input type="text" class="input" placeholder="Nom de l'auteur" v-model="newArticle.auteur" required/>

                    <label class="label">Contenu</label>
                    <textarea class="textarea" placeholder="Contenu..." v-model="newArticle.contenu" required></textarea>

                    <button class="btn btn-primary" @click="modifArticle(article.id)">Modifier</button>
                </fieldset>
                <form method="dialog" class="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
            <button class="btn btn-secondary" @click="delArticle(article.id)">Supprimer</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const newArticle = ref({titre:"", auteur:"",contenu:""});

const props = defineProps({
    articles: Array
})

const emit = defineEmits({
    del: (id) => {
        if (id) {
            return true;
        } else {
            throw new Error("NO ID RENSEIGNE");
        }
    },
    update: (id, {titre, auteur, contenu}) => {
        if (id && titre && auteur && contenu) {
            return true;
        } else {
            throw new Error("NO ID RENSEIGNE OU CHAMPS NON REMPLIS");
        }
    }
})

const delArticle = (id) => {
    try {
        emit("del", id);
    } catch (error) {
        console.warn(error);
    }
}

const modifArticle = (id) => {
    try {
        emit("update", id, newArticle.value);
    } catch (error) {
        console.warn(error);
    }
}

</script>