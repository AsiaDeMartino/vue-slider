const container = new Vue (
{
        el: "#container",
        data: {
                immaginiSlider: [
                    {
                        immagine : 'img/01.jpg',
                        titolo : 'Svezia',
                        descrizione : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                    },
                
                    {
                        immagine : 'img/02.jpg',
                        titolo : 'Svizzera',
                        descrizione : 'Lorem ipsum',
                    },
                
                    {
                        immagine : 'img/03.jpg',
                        titolo : 'Gran Bretagna',
                        descrizione : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                    },
                
                    {
                        immagine : 'img/04.jpg',
                        titolo : 'Germania',
                        descrizione : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                    },
                
                    {
                        immagine : 'img/05.jpg',
                        titolo : 'Paradise',
                        descrizione : 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                    }
                ],

                indice: 0,
                clock: undefined,
                
        },

        methods: {
            next: function()  {
                if (this.indice < this.immaginiSlider.length - 1) {
                    this.indice++;
                } else {
                    this.indice = 0;
                }
            },

            prev: function()  {
                if (this.indice > 0) {
                   this.indice--;
                } else {
                    this.indice = this.immaginiSlider.length - 1;
                }
            },

            immagineAttiva: function(j){
                this.indice = j;
            },

            stop: function(){
                clearInterval(this.clock);
            },

            play: function(){
               this.clock = setInterval(this.next,3000);
            }
             
        },
        
        mounted(){
            this.clock = setInterval( this.next ,3000);
        },
});

