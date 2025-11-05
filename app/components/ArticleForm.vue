<template>
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend class="fieldset-legend">Ajouter article</legend>

        <label class="label">Titre</label>
        <input type="text" class="input" placeholder="Titre de l'article" v-model="article.titre" required/>

        <label class="label">Auteur</label>
        <input type="text" class="input" placeholder="Nom de l'auteur" v-model="article.auteur" required/>

        <label class="label">Contenu</label>
        <textarea class="textarea" placeholder="Contenu..." v-model="article.contenu" required></textarea>

        <button class="btn btn-primary" @click="addArticle">Ajouter</button>
    </fieldset>
</template>

<script setup>
import { defineEmits, ref } from 'vue';

const article = ref({titre:"",auteur:"",contenu:""});

const emit = defineEmits({
    add: ({ titre, auteur, contenu}) => {
        if (titre && auteur && contenu) {
            return true
        } else {
            throw new Error("TOUS LES CHAMPS PAS REMPLIS");
        }
    }
})

const addArticle = () => {
    try {
        emit("add", article.value);
    } catch (error) {
        console.warn(error);
    }
}
</script>