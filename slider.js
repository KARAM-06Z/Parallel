export default class slider{
    card_html = [];
    static cards_set_section;
    static cards;

    constructor(cards_set_section , cards){
        this.cards_set_section = cards_set_section;
        this.cards = cards;
    }

    onReadyPrint(card_count,cards_name,cards_width){
        let position_left= 0;

        for(let i = 0 ; i < card_count ; ++i){
            if(cards_width === "mobile"){
                var card = "<button class="+cards_name+" card_number="+i+" style='background-image: url("+this.cards[i].image+"); transform: translate("+position_left+"% ,-50%);'>";
            }
                else{
                    var card = "<button class="+cards_name+" card_number="+i+" style='background-image: url("+this.cards[i].image+"); transform: translate("+position_left+"px ,-50%);'>";
                }

            card+= "<div class='card_content'>";
                card+= "<div class='card_header'>";
                    card+= "<div class='card_header_container'>"
                        card+= "<h1 class='card_header'>"+this.cards[i].name+"</h1>";
                    card+= "</div>";
                card+= "</div>";
    
                card+= "<div class='card_descreption'>";
                    card+= "<p>"+this.cards[i].description+"</p>";
                card+= "</div>";
    
                card+= "<div class='learn_more_container'>";
                    card+= "<a href='#' class='learn_more'>Learn more</a>";
                card+= "</div>";
            card+= "</button>";
    
            this.card_html[i] = card;

            if(cards_width === "mobile"){
                position_left = 108;
            }
                else{
                    position_left+=cards_width+32;
                }
        }
    
        for(let i = 0 ; i < card_count ; ++i){
            this.cards_set_section.innerHTML+= this.card_html[i];
        }
    }

    navigation_right(cards_name,card_width){
        let index;
        let viewed_cards= document.querySelectorAll("."+cards_name);
        let last_card_number = parseInt(viewed_cards[viewed_cards.length - 1].getAttribute("card_number"));
        let cards_set_section_width = this.cards_set_section.offsetWidth;

        if(last_card_number === this.cards.length - 1){
            index = 0;
        }

            else{
                index = (last_card_number + 1);
            }

        let card = document.createElement("button");
        let card_content = document.createElement("div");

        let card_header = document.createElement("div");
        let card_header_container = document.createElement("div");
        let card_header_text = document.createElement("h1");
        let header_node = document.createTextNode(this.cards[index].name);

        let card_descreption = document.createElement("div");
        let card_descreption_text= document.createElement("p");
        let descreption_node = document.createTextNode(this.cards[index].description);

        let learn_more_cont = document.createElement("div");
        let learn_more_anchor = document.createElement("a");
        let anchor_node = document.createTextNode("Learn more");

        card.appendChild(card_content);
        card_content.appendChild(card_header);
        card_header.appendChild(card_header_container);
        card_header_container.appendChild(card_header_text);
        card_header_text.appendChild(header_node);

        card_content.appendChild(card_descreption);
        card_descreption.appendChild(card_descreption_text);
        card_descreption_text.appendChild(descreption_node);

        card_content.appendChild(learn_more_cont);
        learn_more_cont.appendChild(learn_more_anchor);
        learn_more_anchor.appendChild(anchor_node);

        card.className= cards_name;
        card_content.className="card_content";
        card_header.className="card_header";
        card_header_container.className="card_header_container";
        card_header_text.className="card_header";
        card_descreption.className="card_descreption";
        learn_more_cont.className="learn_more_container";
        learn_more_anchor.className="learn_more";
        learn_more_anchor.setAttribute("href","#");

        card.setAttribute("card_number" , (index));
        card.style.backgroundImage= "url("+this.cards[index].image+")";
        card.style.transform="translate("+cards_set_section_width+"px , -50%)";

        this.cards_set_section.appendChild(card);

        let new_viewed_cards= document.querySelectorAll("."+cards_name);
        let position_left = -card_width - 32;

        setTimeout(function (){
            if(card_width === "mobile"){
                let position_left = -108;

                for (let i = 0; i < new_viewed_cards.length ; i++) {
                    new_viewed_cards[i].style.transform= "translate("+position_left+"% , -50%)";
                    position_left+= 108;
                }                
            }

            else{
               let position_left = -card_width - 32;

               for (let i = 0; i < new_viewed_cards.length ; i++) {
                new_viewed_cards[i].style.transform= "translate("+position_left+"px , -50%)";
                position_left+= card_width + 32;
            }
            }
        } , 150);

        setTimeout(function(){
            new_viewed_cards[0].remove();
        }, 500);
    }

    navigation_left(cards_name,card_width){
        let index;
        let viewed_cards= document.querySelectorAll("."+cards_name);
        let first_card_number = parseInt(viewed_cards[0].getAttribute("card_number"));

        if(first_card_number === 0){
            index = this.cards.length-1;
        }

            else{
                index = first_card_number-1;
            }

        let card = document.createElement("button");
        let card_content = document.createElement("div");

        let card_header = document.createElement("div");
        let card_header_container = document.createElement("div");
        let card_header_text = document.createElement("h1");
        let header_node = document.createTextNode(this.cards[index].name);

        let card_descreption = document.createElement("div");
        let card_descreption_text= document.createElement("p");
        let descreption_node = document.createTextNode(this.cards[index].description);

        let learn_more_cont = document.createElement("div");
        let learn_more_anchor = document.createElement("a");
        let anchor_node = document.createTextNode("Learn more");

        card.appendChild(card_content);
        card_content.appendChild(card_header);
        card_header.appendChild(card_header_container);
        card_header_container.appendChild(card_header_text);
        card_header_text.appendChild(header_node);

        card_content.appendChild(card_descreption);
        card_descreption.appendChild(card_descreption_text);
        card_descreption_text.appendChild(descreption_node);

        card_content.appendChild(learn_more_cont);
        learn_more_cont.appendChild(learn_more_anchor);
        learn_more_anchor.appendChild(anchor_node);

        card.className= cards_name;
        card_content.className="card_content";
        card_header.className="card_header";
        card_header_container.className="card_header_container";
        card_header_text.className="card_header";
        card_descreption.className="card_descreption";
        learn_more_cont.className="learn_more_container";
        learn_more_anchor.className="learn_more";
        learn_more_anchor.setAttribute("href","#");

        card.setAttribute("card_number" , (index));
        card.style.backgroundImage= "url("+this.cards[index].image+")";
        card.style.transform="translate(-312px , -50%)";

        this.cards_set_section.insertBefore(card , viewed_cards[0]);

        let new_viewed_cards= document.querySelectorAll("."+cards_name);

        setTimeout(function (){
            if(card_width === "mobile"){
                let position_left = 0;

                for (let i = 0; i < new_viewed_cards.length ; i++) {
                    new_viewed_cards[i].style.transform= "translate("+position_left+"% , -50%)";
                        position_left+= 108;
                }
            }

            else{
                let position_left = 0;
                
                for (let i = 0; i < new_viewed_cards.length ; i++) {
                    new_viewed_cards[i].style.transform= "translate("+position_left+"px , -50%)";
                        position_left+= card_width + 32;
                }
            }
        } , 150);

        setTimeout(function(){
            new_viewed_cards[new_viewed_cards.length-1].remove();
        }, 500);
    }

    control_resize(cards_name,card_count,card_width){
        let viewed_cards = document.querySelectorAll("."+cards_name);
        let number_of_viewed_cards = viewed_cards.length;
        let position_left= 0;

        for(let i= 0 ; i < viewed_cards.length ; ++i){
            if(card_width === "mobile"){
                viewed_cards[i].style.transform="translate(+"+position_left+"% , -50%)";

                position_left = 108;
            }

                else{
                    viewed_cards[i].style.transform="translate(+"+position_left+"px , -50%)";

                    position_left+= card_width+32;
                }
        }

        position_left= 0;

        if(number_of_viewed_cards > card_count){
            for(let i = number_of_viewed_cards - 1 ; i >= card_count ; --i){
                viewed_cards[i].remove();
            }
        }

        else if(number_of_viewed_cards <= card_count){
            let index;
            let last_card_number = parseInt(viewed_cards[number_of_viewed_cards- 1].getAttribute("card_number"));

            if(last_card_number === this.cards.length - 1){
                index = 0;
            }

                else{
                    index = (last_card_number + 1);
                }

            for(let i = number_of_viewed_cards ; i < card_count ; ++i){
                let card = document.createElement("button");
                let card_content = document.createElement("div");

                let card_header = document.createElement("div");
                let card_header_container = document.createElement("div");
                let card_header_text = document.createElement("h1");
                let header_node = document.createTextNode(this.cards[index].name);

                let card_descreption = document.createElement("div");
                let card_descreption_text= document.createElement("p");
                let descreption_node = document.createTextNode(this.cards[index].description);

                let learn_more_cont = document.createElement("div");
                let learn_more_anchor = document.createElement("a");
                let anchor_node = document.createTextNode("Learn more");

                card.appendChild(card_content);
                card_content.appendChild(card_header);
                card_header.appendChild(card_header_container);
                card_header_container.appendChild(card_header_text);
                card_header_text.appendChild(header_node);

                card_content.appendChild(card_descreption);
                card_descreption.appendChild(card_descreption_text);
                card_descreption_text.appendChild(descreption_node);

                card_content.appendChild(learn_more_cont);
                learn_more_cont.appendChild(learn_more_anchor);
                learn_more_anchor.appendChild(anchor_node);

                card.className= cards_name;
                card_content.className="card_content";
                card_header.className="card_header";
                card_header_container.className="card_header_container";
                card_header_text.className="card_header";
                card_descreption.className="card_descreption";
                learn_more_cont.className="learn_more_container";
                learn_more_anchor.className="learn_more";
                learn_more_anchor.setAttribute("href","#");

                card.setAttribute("card_number" , (index));
                card.style.backgroundImage= "url("+this.cards[index].image+")";

                for(let j = 0 ; j < i ; ++j){
                    position_left+=card_width + 32;
                }
        
                card.style.transform="translate(+"+position_left+"px , -50%)";

                position_left=0;
                        
                this.cards_set_section.appendChild(card);

                if(index == (this.cards.length - 1)){
                    index = 0;
                }
                    else{
                        index++;
                    }
            }
        }
    }
}