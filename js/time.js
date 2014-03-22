function eligeImagen(){
Now = new Date();
Hour = Now.getHours();
Minuto = Now.getMinutes();
hora=Hour+""+Minuto
hora=parseInt(hora);
	 if (hora<0459){imagen="img/lamega.jpg";}
else if (hora<0559){imagen="img/Elllaneroelectrico.jpg";}
else if (hora<1059){imagen="img/denuevoenlamanana.jpg";}
else if (hora<1259){imagen="img/apagalatele.jpg";}
else if (hora<1309){imagen="img/los10debobbycomedia.jpg";}
else if (hora<1459){imagen="img/play.jpg";}
else if (hora<1645){imagen="img/alairefranciscogranados.jpg";}
else if (hora<1655){imagen="img/zonaescolar.jpg";}
else if (hora<1705){imagen="img/enewradio.jpg";}
else if (hora<1744){imagen="img/alacuentede3.jpg";}
else if (hora<1800){imagen="img/enewradio.jpg";}
else if (hora<1959){imagen="img/alacuentede3.jpg";}
else if (hora<2040){imagen="img/yosoymega.jpg";}
else if (hora<2050){imagen="img/los10debobbycomedia.jpg";}
else if (hora<2159){imagen="img/rockenn.jpg";}
else if (hora<2259){imagen="img/raplatinolaconexion.jpg";}
else if (hora<2359){imagen="img/quesevayantodos.jpg";}
document.getElementById('alaire').src=imagen;
}