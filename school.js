var reasons=["I particapated in the Wild World Heroes competition in which I had to read 6 books and then write a book review for my favourite book. The books I read were 'diary of dorkius maximus in Pompeii', 'How I met my monster', 'W.A.R.P the hangman's revolution','Magnus Chase and the Sword of Summer', 'Magnus Chase and the Hammer of Thor' and 'Magnus Chase and the Ship of the Dead' were the books I read, I wrote the book review for Magnus Chase and the Sword of Summer.","I particapated in the British chess championship, unfortunately I did not win any games in it.","I gave my grade 3 guitar exam","I gave my grade 2 theory exam","On the eleventh of August it was my 10th birthday ","Me and my friend Divit went to the trafford treetop adventure climb","I finished my swimming summer camp and got this certificate","I finished the bronze 1 rookie lifeguard training and recieved this certificate", "I went to a soccer summer camp and got this man of the match medal","Me and my cousins went to the blue planet aquarium","Me and my cousins went to the beach"]
var images=["https://cdn-az.allevents.in/events7/banners/7f4f6a0eadd0711c796ca32cb43c9db0eab2d1c16c61678843bd6613607dfbc6-rimg-w1200-h675-gmir.jpg?v=1628485843", "https://th.bing.com/th/id/OIP.ZZS1PqM4t5kpWgZxba8QJQHaHa?w=195&h=195&c=7&o=5&pid=1.7", "https://th.bing.com/th/id/OIP.hypi2iOOdCEdmlktpN8JxQHaHZ?w=203&h=202&c=7&o=5&pid=1.7", "https://th.bing.com/th/id/OIP.rbkHTNhLriHV5oqXMRB7agHaHa?w=220&h=220&c=7&o=5&pid=1.7", "https://th.bing.com/th/id/OIP.hf9TqN-Vyum54JFGk-ub2AHaHa?w=199&h=199&c=7&o=5&pid=1.7","https://www.bing.com/th?id=Anq8vyNRY6Gco5A480x360&pid=Local","image_50444033.JPG","IMG-2723.jpg","IMG-2854.jpg","OIP.jpeg","https://www.bing.com/th?id=OIP.__Xw8qBlV2p5CVziQBltvAHaHa&w=96&h=96&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"]
var i=0;
function changereason(){
document.getElementById("reasons").innerHTML=reasons[i];
document.getElementById("spaceimage").src=images[i];
i=i+1
if (i == 10)
{
i=0;
}
}