<template>
  <div class="flex flex-col items-center mt-6 mb-6 gap-4">
    <ArticleForm @add="addArticle" />
    <ArticleView :articles="articles" @del="delArticle" @update="modifArticle" />
  </div>
</template>

<script setup>
import ArticleForm from './components/ArticleForm.vue';
import ArticleView from './components/ArticleView.vue';
import Articles from './services/Articles';

const articles = ref([]);

// 1. Définir la fonction callback
function onDataReceived(snapshot) {
    if (snapshot.exists()) {
        const articlesData = snapshot.val();
        console.log("Données reçues:", articlesData);

        // Firebase renvoie un objet (pas un tableau)
        // Vous pouvez le transformer en tableau si nécessaire :
        const articlesList = [];
        for (let id in articlesData) {
            articlesList.push({ id, ...articlesData[id] });
        }
        
        console.log("Liste des articles:", articlesList);
        articles.value = articlesList;
        // Si vous utilisez React, c'est ici que vous feriez setArticles(articlesList)
    } else {
        console.log("Aucune donnée disponible.");
        articles.value = [];
    }
}

Articles.getAll(onDataReceived);

const addArticle = (article) => {
  Articles.create(article);
}

const delArticle = (id) => {
  Articles.delete(id);
}

const modifArticle = (id, article) => {
  Articles.update(id, article);
}
</script>