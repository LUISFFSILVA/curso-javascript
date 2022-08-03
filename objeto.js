// Criando objetos em JavaScript
const book = {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    isAvailable: true,

    checkIn: function(){
        this.isAvailable = true;
    },

    checkout: function(){
        this.isAvailable = false;
    }
};
