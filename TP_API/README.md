## TP sur les API - BRAON Ravin

Première étape, le site :

    Création du site web avec comme outil html/css, utilisation de SVG Background et également de bootstrap pour les boutons et le responsive.
    Pour le site,j'ai mis un titre tout simple en disant le thème de mon API avec un dessous une div avec un id ="container" dans laquelle se trouve un bouton pour afficher les photos dedans qui lui possede un id = "btn".
    J'ai ensuite mis une div qui contiendra la photo de la carte.
    J'ai également eu l'idée de mettre une seconde div  qui contient une liste de carte a choisir (ou j'expliquerais plus tard sa présence).

Deuxieme étape, le choix de l'API :
    
    Pour le choix de l'API je suis allé sur les API GITHUB publiques et gratuites.
    J'ai passé pas mal de temps (environ trente bonnes minutes) à trouver une API fonctionnelle parmi toutes celles présentes.
    J'avais choisi au début une API sur les chiens et chats, mais la console de mon site internet web revoyait pas les données de mon API ou alors j'avais des erreurs venant de mon API alors que je savais que le code JavaScript était bel et bien fonctionnel.
    J'ai ensuite choisi une API sur les voitures mais il fallait une clé API (n'ayant pas accès à celle-ci), j'ai dû donc renoncer a choisir l'API sur les voitures.
    Apres d'autres recherches j'ai donc finit par prendre une API sur les cartes YU-GO-OH

Troisième étape, mettre l'API  sur le site :
    
    Après avoir choisi une API sur les cartes YU-GI-OH, il a fallut que je l'intègre a mon site internet,pour cela j'ai utilisé la methode fetch avec une promise.
    Avant de mettre la promise j'ai également fait des variables afin que le script sache ou il doit mettre la photo et également savoir quand la fonction doit se lancer.
    j'ai donc fait une variable pour le "document", une autre variable pour récuperer l'id du bouton ainsi que pour celui de l'image.
    J'ai donc ensuite fait le méthode fetch avec la promise.

    Lorsque le bouton était "clické", une image de carte YU-GI-OH s'affichait correctement, mais lorsqu'on recliquait sur le bouton,l'image restait la même vu que le script renvoie la première image de l'API.
    J'ai donc eu l'idée par la suite d'incrémenter le nombre presents dans l'url afin d'afficher une par une les images présentes dans cette API.
    Mais j'ai découvert qu'entre deux url de carte, les nombres qui sont présent dans cette API n'était pas incrémenter, par exemple la premier image de l'API était le nombre "34541863" mais la deuxième image de l'APi était le nombre "64163367",donc lorsque j'incrémentais la valeur de 1, aucune image était renvoyé car elle n'existe pas.

    Pour palier à ce problème, j'ai donc eu l'idée de faire une fonction qui renvoie un nombre aléatoire afin de remplacer à chaque fois le nombre présent dans l'url de la carte, la aussi j'ai eu un probleme j'ai remarqué que pour avoir un nouveau nombre aléatoire il fallait raffraichir la page,donc pas pratique
    
    Pour résoudre ce problème j'ai donc eu l'idée de faire intéragir l'utilisateur avec un "prompt" en lui demandant une valeur (une des valeurs qui sont sur la droite afin de savoir quelle valeur mettre pour renvoyer une carte)
    Une fois la valeur écrite, la carte apparait sur la gauche, et on peut recommencer ainsi de suite.
    A savoir qu'il a plusieurs nombres possible (environ douze milles cartes disponibles), j'ai juste fait une petite sélection de toutes les valeurs possibles pour montrer le fonctionnement du site.
