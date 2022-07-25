let productos=[
  {id: 1, name: 'Halo Infinite', cantidad: 1 , categoria:"accion", price: 200000, img: 'https://generacionxbox.com/wp-content/uploads/2021/02/Halo-Infinite-portada-fan.jpg.webp'},
  {id: 2, name: 'Halo: The Master Chief Collection', cantidad: 1, categoria:"accion", price: 90000,img: 'https://media.vandal.net/m/24726/halo-the-master-chief-collection-2014111011594_1.jpg'},
  {id: 3, name: 'Halo 5', cantidad: 1, categoria:"accion", price: 75000,img: 'https://media.vandal.net/m/21307/halo-5-guardians-20151023123031_1.jpg'},
  {id: 4, name: 'Need For Speed Hot Pursuit Remastered', categoria: "conduccion", cantidad: 1, price: 80000,img: 'https://cdn.shopify.com/s/files/1/0267/6251/0420/products/yow7xz13zl6wfek1ke63_77592c76-29f5-4f0f-8a07-dcf5848342d2_1800x1800.png?v=1636234305'},
  {id: 5, name: 'Need For Speed', cantidad: 1, categoria: "conduccion", price: 70000,img: 'https://www.accesoxbox.com/img/portadas/2064/xb_2064_portada.jpg'},
  {id: 6, name: 'Need For Speed Playback', cantidad: 1, categoria: "conduccion", price: 50000,img:'https://uvejuegos.com/img/caratulas/59196/Need-for-Speed-Payback-XONE.jpg'},
  {id: 7, name: 'Gears of War: Ultimate Edition', cantidad: 1, categoria: "estrategia", price: 60000,img: 'https://media.vandal.net/t200/30941/gears-of-war-ultimate-edition-2015811797_1.jpg'},
  {id: 8, name: 'Gears of War 4', categoria: "estrategia", price: 80000, cantidad: 1, img: 'https://uvejuegos.com/img/caratulas/55691/0_caratula.jpg'},
  {id: 9, name: 'Gears of War 5', categoria: "estrategia", price: 100000, cantidad: 1, img: 'https://media.vandal.net/m/61923/gears-of-war-5-20198161726203_1.jpg'},
  {id: 10, name: 'Tomb Rider', categoria: "aventura", price: 50000, cantidad: 1, img: 'https://exitocol.vtexassets.com/arquivos/ids/642072/Videojuego-Rise-of-the-Tomb-Raider---Xbox-One-.jpg?v=637025926168930000' },
  {id: 11, name: 'Sea of thieves', categoria: "aventura", price: 45000, cantidad: 1, img: 'https://m.media-amazon.com/images/I/6189+dNLdBL._SL1000_.jpg' },
  
  
  {id: 12, name: "Dragon Ball FighterZ", plataforma:"nintendo", categoria:"accion", cantidad: 1, price: 40000, img: 'https://cdn-products.eneba.com/resized-products/61H0HWV_p7NXo0o1kYKEfu2ZIybhSxlLphN2T3Pwy7Y_350x200_1x-0.jpeg'}, 
  {id: 13, name: "Metroid Dread", plataforma:"nintendo",categoria:"accion", cantidad: 1, price: 30000, img: 'https://ventaspop-images.s3-us-east-2.amazonaws.com/files/products/569/682/71EKjuboFL._SL1500_.jpg'}, 
  {id: 14, name: "ASTRAL CHAIN",plataforma:"nintendo", categoria:"accion", cantidad: 1, price: 30000, img: 'https://ventaspop-images.s3-us-east-2.amazonaws.com/files/products/569/652/ASTRAL-CHAIN.jpg'}, 
  {id: 15, name: "DOOM® Eternal", plataforma:"nintendo", categoria:"accion", cantidad: 1, price: 80000, img: 'https://m.media-amazon.com/images/I/91PWzEchOvL.jpg'}, 
  {id: 16, name: "Hades", plataforma:"nintendo", categoria:"accion", cantidad: 1, price: 20000, img: 'https://m.media-amazon.com/images/I/81yeI3PjF5L._SL1500_.jpg'}, 
  {id: 17, name: "Diablo III: Eternal Collection", plataforma:"nintendo",categoria:"accion", cantidad: 1, price: 35000, img: 'https://images.nintendolife.com/5336a6460baef/diablo-iii-eternal-collection-cover.cover_large.jpg'}, 
  {id: 18, name: "Bloodstained: Curse of the Moon", plataforma:"nintendo", categoria:"accion", cantidad: 1, price: 30000 , img: 'http://www.retroplace.com/pics/switch/packshots/170401--bloodstained-curse-of-the-moon.png'}, 
  {id: 19, name: "Source of Madness", plataforma:"nintendo", categoria:"accion", cantidad: 1, price: 40000, img: 'https://i0.wp.com/images.vfl.ru/ii/1652302914/b5547055/38390803.jpg?resize=432%2C700&ssl=1'}, 
  {id: 20, name: "Streets of Rage 4", plataforma:"nintendo", categoria:"accion", cantidad: 1, price: 50000, img: 'https://cdn.shopify.com/s/files/1/0516/3873/0931/products/streets-of-rage-4-nintendo-switch-5060264375271-30450648809651.jpg?v=1640185177'}, 
  {id: 21, name: "Mortal Kombat 11", plataforma:"nintendo", categoria:"accion", cantidad: 1, price: 60000, img: 'https://cdn.cdkeys.com/700x700/media/catalog/product/m/o/mortal_kombat_11_switch_us_.jpg'}, 
  {id: 22, name: "STAR WARS™: The Force Unleashed™", plataforma:"nintendo", categoria:"accion", cantidad: 1, price: 70000, img: 'https://media.vandal.net/m/114432/star-wars-the-force-unleashed-20222109404115_7.jpg'}, 
  {id: 23, name: "No More Heroes 3", plataforma:"nintendo", categoria:"aventura", cantidad: 1, price: 45000, img: 'https://nintheorist.files.wordpress.com/2021/02/no-more-heroes_3_portada.jpg'}, 
  {id: 24, name: "Persona® 5 Strikers", plataforma:"nintendo", categoria:"estrategia", cantidad: 1, price: 33000, img: 'https://www.nintenderos.com/wp-content/uploads/2021/02/PS_NSwitch_Persona5Strikers_PEGI.jpg'}, 
  {id: 25, name: "The Witcher 3: Wild Hunt", plataforma:"nintendo", categoria:"aventura", cantidad: 1, price: 75000, img: 'https://uvejuegos.com/img/caratulas/62984/the_witcher_switch_uvejuegos.jpg'}, 
  {id: 26, name: "Warframe", plataforma:"nintendo", categoria:"estrategia", cantidad: 1, price: 25000, img: 'https://i.ytimg.com/vi/-2P8f4pMMBE/maxresdefault.jpg'},
  
  
  
  
  
  
  
  {id: 27, name: "Farcry 6", cantidad:1, categoria: "accion", price: 90000, img: 'https://image.api.playstation.com/vulcan/img/rnd/202106/1514/fkPaEpz998Uu7QaofSj1VIhr.png'},
  {id: 28, name: "Call of Duty Vanguard",cantidad:1, categoria: "accion", price: 110000, img: 'https://cdn-products.eneba.com/resized-products/HdaHYVJRQdLzXozx9RevIm1UWuReU8NcGJmfdCUQsog_350x200_1x-0.jpeg'},
  {id: 29, name: "Grand Theft Auto V",cantidad:1, categoria: "accion", price: 60000, img: 'https://cdn-products.eneba.com/resized-products/ZP_ji9DNpY1NS7zjlN4_STW4tFDtueeIcXr_LJOLi3s_350x200_1x-0.jpeg'},
  {id: 30, name: "Cuphead", cantidad:1, categoria: "estrategia", price: 40000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fMPs76Yi3pbryTaicNz7hp-eHsV8wvFhQ2qKzZ-jJnG3POP7JuMptdxZd0mbtnWU7UU&usqp=CAU'},
  {id: 31, name: "Dragon Ball Kakarot 6", cantidad:1, categoria: "accion", price: 45000, img: 'https://image.api.playstation.com/vulcan/img/cfn/1130799I-wLSri09nLa8P64ID3gCGcmeNPiQstPp8LEnbpEAZmsTC7LBclRCbuC8jA0D0T2MEnJtXEJ56NAZx7oUxWYAtRdC.png'},
  {id: 32, name: "Dark Souls II", cantidad:1, categoria: "estrategia", price: 40000, img: 'https://cdn-products.eneba.com/resized-products/B2c-dgrjAu7S5GgCz3PpjSk7LGROQcRQmrA-EBo2Bdk_350x200_1x-0.jpeg'},
  {id: 33, name: "Read Dead Redempion 2", cantidad:1, categoria: "accion", price: 80000, img: 'https://cdn-products.eneba.com/resized-products/VU-IGbToJefl9lZZB5izvfUDaQSLwSFRNuCaNz6RRnk_350x200_1x-0.jpeg'},
  {id: 34, name: "Counter Strike Global Offensive", cantidad:1, categoria: "estrategia", price: 20000, img: 'https://zephyrnet.com/wp-content/uploads/2021/04/csgo-free-vs-paid-whats-the-difference.jpg'},
  {id: 35, name: "Prey", cantidad:1, categoria: "aventura", price: 30000, img: 'https://i.3djuegos.com/juegos/13394/prey__2016_/fotos/ficha/prey__2016_-3417786.webp'},
  {id: 36, name: "Battlefield 2042", cantidad:1, categoria: "accion", price: 90000, img: 'https://image.api.playstation.com/vulcan/ap/rnd/202106/0117/2YyBLXZty0qNtqEJGc20AHS7.png'},
  {id: 37, name: "Rainbow Six: Siege", cantidad:1, categoria: "accion", price: 35000, img: 'https://sm.ign.com/ign_es/game/r/rainbow-si/rainbow-six-siege_d2b2.jpg'},
  {id: 38, name: "CRYSIS Remastered", cantidad:1, categoria: "accion", price: 46000, img: 'https://www.ultimagame.es/crysis/imagen-i15262-pge.jpg'},
  {id: 39, name: "Assassin's Creed Unity", cantidad:1, categoria: "aventura", price: 43000, img: 'https://cdn-products.eneba.com/resized-products/bobbrkkzmqahsgieuhge_350x200_1x-0.jpg'},
  {id: 40, name: "GhostRunner", cantidad:1, categoria: "accion", price: 50000, img: 'https://s1.gaming-cdn.com/images/products/6267/orig-fallback-v1/ghostrunner-pc-juego-steam-cover.jpg'},
]
