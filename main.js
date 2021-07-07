import slider from './slider.js'; 

document.addEventListener("DOMContentLoaded" , function(){
    //Set up recent cards
    const cards_set_section_recent = document.querySelector(".cards_set_section_recent");
    const cards_set_section_favourites = document.querySelector(".cards_set_section_favourites");
    var card_count;
    var card_width;

    //static data for testing
    var recent_cards = [
        {
            image:"images/the_outer_worlds.png",
            name: "The Outer Worlds",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, pariatur commodi officiis velit sint quaerat sunt mollitia cumque explicabo tenetur dignissimos dolorem omnis, impedit, incidunt quisquam molestias distinctio cupiditate tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ullam harum cum voluptatum ex voluptate accusamus dolore et pariatur cupiditate. Aut dicta hic similique fuga. Officia et dolorem numquam cumque?"
        },

        {
            image:"images/gris.png",
            name: "GRIS",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },

        {
            image:"images/control.png",
            name: "Control™",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, pariatur commodi officiis velit sint quaerat sunt mollitia cumque explicabo tenetur dignissimos dolorem omnis."
        },

        {
            image:"images/nier.png",
            name: "NieR Replicant™ ver.1.22474487139",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, pariatur commodi officiis velit sint quaerat sunt mollitia cumque explicabo tenetur dignissimos dolorem omnis."
        },

        {
            image:"images/observation.png",
            name: "Observation",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, pariatur commodi officiis velit sint quaerat sunt mollitia cumque explicabo tenetur dignissimos dolorem omnis, impedit, incidunt quisquam molestias distinctio cupiditate tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ullam harum cum voluptatum ex voluptate accusamus dolore et pariatur cupiditate."
        },

        {
            image:"images/noita.png",
            name: "Noita",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, pariatur commodi officiis velit sint quaerat sunt mollitia cumque explicabo tenetur dignissimos dolorem omnis, impedit, incidunt quisquam molestias distinctio cupiditate tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },

        {
            image:"images/the_medium.png",
            name: "The Medium",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, pariatur commodi officiis velit sint quaerat sunt mollitia cumque explicabo tenetur dignissimos dolorem omnis, impedit, incidunt quisquam molestias distinctio cupiditate tempore."
        },

        {
            image:"images/mafia_defenitive.png",
            name: "Mafia Defenitive Edition",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, pariatur commodi officiis velit sint quaerat sunt mollitia cumque explicabo tenetur dignissimos dolorem omnis, impedit."
        },
    ];

    //static data for testing
    var favourites_cards = [
        {
            image:"images/RDR2.png",
            name: "Red Dead Redemption 2",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, pariatur commodi officiis velit sint quaerat sunt mollitia cumque explicabo tenetur dignissimos dolorem omnis, impedit, incidunt quisquam molestias distinctio cupiditate tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ullam harum cum voluptatum ex voluptate accusamus dolore et pariatur cupiditate. Aut dicta hic similique fuga. Officia et dolorem numquam cumque?"
        },

        {
            image:"images/the_witcher.png",
            name: "The Witcher 3: Wild Hunt",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },

        {
            image:"images/bf4.png",
            name: "Battlefield 4™",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, pariatur commodi officiis velit sint quaerat sunt mollitia cumque explicabo tenetur dignissimos dolorem omnis."
        },

        {
            image:"images/the_division.png",
            name: "Tom Clancy's: The Division™",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, pariatur commodi officiis velit sint quaerat sunt mollitia cumque explicabo tenetur dignissimos dolorem omnis."
        },

        {
            image:"images/gta5.png",
            name: "Grand Theft Auto 5",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, pariatur commodi officiis velit sint quaerat sunt mollitia cumque explicabo tenetur dignissimos dolorem omnis, impedit, incidunt quisquam molestias distinctio cupiditate tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ullam harum cum voluptatum ex voluptate accusamus dolore et pariatur cupiditate."
        },

        {
            image:"images/r6s.png",
            name: "Tom Clancy's: Rainbow Six Siege™",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, pariatur commodi officiis velit sint quaerat sunt mollitia cumque explicabo tenetur dignissimos dolorem omnis, impedit, incidunt quisquam molestias distinctio cupiditate tempore!Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },

        {
            image:"images/apex.png",
            name: "Apex Legends",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, pariatur commodi officiis velit sint quaerat sunt mollitia cumque explicabo tenetur dignissimos dolorem omnis, impedit, incidunt quisquam molestias distinctio cupiditate tempore."
        },

        {
            image:"images/eft.png",
            name: "Escape From Tarkov",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, pariatur commodi officiis velit sint quaerat sunt mollitia cumque explicabo tenetur dignissimos dolorem omnis, impedit."
        },

        {
            image:"images/ds3.png",
            name: "Dark Souls 3",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, pariatur commodi officiis velit sint quaerat sunt mollitia."
        }
    ];

    if(window.innerWidth > 1872){
        card_count = 6;
        card_width = 280;
    }

        else if(window.innerWidth > 1559 && window.innerWidth <= 1872){
            card_count = 5;
            card_width = 280;
        }

            else if(window.innerWidth >= 1280 && window.innerWidth <= 1559){
                card_count = 4;
                card_width = 280;
            }

                else if(window.innerWidth >= 942 && window.innerWidth < 1280){
                    card_count = 3;
                    card_width = 280;
                }

                    else if(window.innerWidth >= 828 && window.innerWidth < 942){
                        card_count = 3;
                        card_width = 236;
                    }

                        else if(window.innerWidth >= 768 && window.innerWidth < 828){
                            card_count = 3;
                            card_width = 212;
                        }

                            else if(window.innerWidth < 768){
                                card_count = 2;
                                card_width = "mobile";
                            }
        
        //Create new slider (Recent) and add functionality to navigate left or right
        const recent_cards_slider = new slider(cards_set_section_recent,recent_cards);
            const cards_name_recent = "recent_card";
            recent_cards_slider.onReadyPrint(card_count,cards_name_recent,card_width);

        const navigation_recent_right = document.querySelector(".navigation_button_container_right_for_recent");
            navigation_recent_right.addEventListener("click" ,function(){
                recent_cards_slider.navigation_right(cards_name_recent,card_width);
            }, true);

        const navigation_recent_left = document.querySelector(".navigation_button_container_left_for_recent");
            navigation_recent_left.addEventListener("click" ,function(){
                recent_cards_slider.navigation_left(cards_name_recent,card_width);
            }, true);

        //Create new slider (Favourites) and add functionality to navigate left or right
        const favourites_cards_slider = new slider(cards_set_section_favourites,favourites_cards);
        const cards_name_favourites = "favourites_card";
        favourites_cards_slider.onReadyPrint(card_count,cards_name_favourites,card_width);

        const navigation_favourites_right = document.querySelector(".navigation_button_container_right_for_favourites");
            navigation_favourites_right.addEventListener("click" ,function(){
                favourites_cards_slider.navigation_right(cards_name_favourites,card_width);
            }, true);

        const navigation_favourites_left = document.querySelector(".navigation_button_container_left_for_favourites");
            navigation_favourites_left.addEventListener("click" ,function(){
                favourites_cards_slider.navigation_left(cards_name_favourites,card_width);
            }, true);


//set faq div height on load, so the css transition can be used///////////////////////////////

    const faq_box_on_load = document.querySelectorAll(".faq_box");
    const faq_question_on_load = document.querySelectorAll(".faq_question");
    
    for(let i= 0 ; i < faq_box_on_load.length ; ++i){
        let box_height = faq_question_on_load[i].offsetHeight;

        faq_box_on_load[i].style.height= box_height+"px";
    }
//////////////////////////////////////////////////////////////////////////////////////////////

//on resize to control the responsive design of the view
    window.addEventListener("resize", function(){

        if(window.innerWidth > 1872){
            card_count = 6;
            card_width = 280;
        }
    
            else if(window.innerWidth > 1559 && window.innerWidth <= 1872){
                card_count = 5;
                card_width = 280;
            }
    
                else if(window.innerWidth >= 1280 && window.innerWidth <= 1559){
                    card_count = 4;
                    card_width = 280;
                }
    
                    else if(window.innerWidth >= 943 && window.innerWidth < 1280){
                        card_count = 3;
                        card_width = 280;
                    }
    
                        else if(window.innerWidth >= 829 && window.innerWidth < 943){
                            card_count = 3;
                            card_width = 236;
                        }

                            else if(window.innerWidth >= 768 && window.innerWidth < 829){
                                card_count = 3;
                                card_width = 212;
                            }

                                else if(window.innerWidth < 768){
                                    card_count = 2;
                                    card_width = "mobile";
                                }


        //control the card count on screen width change
        recent_cards_slider.control_resize(cards_name_recent,card_count,card_width);
        favourites_cards_slider.control_resize(cards_name_favourites,card_count,card_width);


        //control the height of the FAQ boxes on screen width change
        //variables are the same that are used when setting the height of each FAQ box via DOMLoad
        setTimeout(function(){
            for(let i= 0 ; i < faq_box_on_load.length ; ++i){
                let box_height = faq_question_on_load[i].offsetHeight;
                
                faq_question_on_load[i].setAttribute("ViewAnswer" , "false");
                faq_box_on_load[i].style.height= box_height+"px";
            }
        },200);
        
    }, true);


} , true);
//End of dom on load functions////////////////////////////////////////////////////////////////


//header style on scroll function///////////////////////////////////////////////////////////////////////
const website_header_logo = document.querySelector(".header_logo_container_hidden");
const header_nav_container = document.querySelector(".header_navigation_container_hidden");
const website_descreption = document.querySelector(".website_descreption_section");
const options = {
    rootMargin: "-20% 0% 0% 0%"
};

const website_descreption_observer = new IntersectionObserver(function(entries , website_descreption_observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            website_header_logo.className="header_logo_container_visible";
            header_nav_container.className="header_navigation_container_visible";
        }

        else{
            website_header_logo.className="header_logo_container_hidden";
            header_nav_container.className="header_navigation_container_hidden";
        }
    })
}, options);

website_descreption_observer.observe(website_descreption);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Side Bar view functions///////////////////////////////////////////////////////////////////////
    const side_bar_button = document.querySelector(".side_bar_button");
        side_bar_button.addEventListener("click" , function(){
            let view_side_bar = side_bar_button.getAttribute("view_side_bar");

            if(view_side_bar === "false"){
                side_bar_button.setAttribute("view_side_bar" , "true");
                document.querySelector("body").style.overflow="hidden";
                document.querySelector(".side_bar").style.display="block";

                setTimeout(function(){
                    document.querySelector(".side_bar_content").style.right="0%";
                } , 100);
            }

            else if (view_side_bar === "true"){
                side_bar_button.setAttribute("view_side_bar" , "false");
                document.querySelector("body").style.overflow="auto";
                document.querySelector(".side_bar_content").style.right="-60%";

                setTimeout(function(){
                    document.querySelector(".side_bar").style.display="none";
                } , 300);
            }
        } , true);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//view full screen image function////////////////////////////////////////////////////////////////////////

    const full_screen_container = document.querySelector(".full_screen_image_container_hidden");
    const image_tag = document.querySelector(".full_screen_image");
    const overview_images = document.querySelectorAll(".overview_image");
    const overview_images_button = document.querySelectorAll(".overview_image_button");

        for(let i = 0 ; i < overview_images_button.length ; ++i){
            overview_images_button[i].addEventListener("click" , function(){
                let image_name = overview_images[i].getAttribute("src");

                full_screen_container.className="full_screen_image_container_visible";
                image_tag.setAttribute("src" , image_name);

                document.querySelector("body").style.overflow="hidden";

            } , true);
        }

        const close_button = document.querySelector(".close_button");
            close_button.addEventListener("click" , function(){
                full_screen_container.className="full_screen_image_container_hidden";

                document.querySelector("body").style.overflow="auto";
        } , true);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//faq answer drop down function//////////////////////////////////////////////////////////////////////////

    const faq_box = document.querySelectorAll(".faq_box");
    const faq_questions = document.querySelectorAll(".faq_question");
    const faq_answers = document.querySelectorAll(".faq_answer");
        
        for(let i= 0 ; i < faq_questions.length ; ++i){
            faq_questions[i].addEventListener("click" , function(){
                let view_boolean = faq_questions[i].getAttribute("viewanswer");
                let question_div_height = faq_questions[i].offsetHeight;


                if(view_boolean === "false"){
                    let answer_div_height_complete = question_div_height + faq_answers[i].offsetHeight + 12;

                    faq_box[i].style.height= answer_div_height_complete+"px";

                    faq_questions[i].setAttribute("viewanswer" , "true");
                }

                else if(view_boolean === "true"){
                    faq_box[i].style.height= question_div_height+"px";

                    faq_questions[i].setAttribute("viewanswer" , "false");
                }
            } , true);
        }

/////////////////////////////////////////////////////////////////////////////////////////////////////////