var igrac = "O";
var pobeda = false;
var brojacPolja = 0;

var a = document.getElementById('0_0');
    a.addEventListener('click', function() {
    polje(this);
  });
var b = document.getElementById('1_0');
    b.addEventListener('click', function() {
    polje(this);
  });
var v = document.getElementById('2_0');
    v.addEventListener('click', function() {
    polje(this);
  });

var g = document.getElementById('0_1');
    g.addEventListener('click', function() {
    polje(this);
  });
var d = document.getElementById('1_1');
    d.addEventListener('click', function() {
    polje(this);
  });
var dj = document.getElementById('2_1');
    dj.addEventListener('click', function() {
    polje(this);
  });

var e = document.getElementById('0_2');
    e.addEventListener('click', function() {
    polje(this);
  });
var j = document.getElementById('1_2');
    j.addEventListener('click', function() {
    polje(this);
  });
var k = document.getElementById('2_2');
    k.addEventListener('click', function() {
    polje(this);
  });

function polje(kutija) {
    if(kutija.innerText != "" || pobeda) return;
       kutija.innerText = igrac;
    //console.log(igrac);
    //kutija.className += igrac;
    if(igrac == "O") {
          igrac = "X";
    }
    else{
          igrac = "O";
    }
    proveriOkvir();
    brojacPolja++;
    if(brojacPolja == 9 && pobeda == false) {
       location.reload();
    }
}

function proveriOkvir() {
    for (i = 0; i<=2; i++) {
      proveriPobedu(
            document.getElementById("0_" + i).innerText,
            document.getElementById("1_" + i).innerText,
            document.getElementById("2_" + i).innerText, "0_" + i,"1_" + i,"2_" + i);
      proveriPobedu(
            document.getElementById(i + "_0").innerText,
            document.getElementById(i + "_1").innerText,
            document.getElementById(i + "_2").innerText, i + "_0", i + "_1", i + "_2");
        }
      proveriPobedu(
            document.getElementById("0_0").innerText,
            document.getElementById("1_1").innerText,
            document.getElementById("2_2").innerText, "0_0", "1_1", "2_2");
      proveriPobedu(
            document.getElementById("0_2").innerText,
            document.getElementById("1_1").innerText,
            document.getElementById("2_0").innerText, 
            "0_2", 
            "1_1", 
            "2_0");


}
  function proveriPobedu(prvi, drugi, treci, id1, id2, id3) {
    if(prvi != "" && prvi == drugi && prvi == treci) {
       document.getElementById(id1).style.backgroundColor = 'gold';
       document.getElementById(id2).style.backgroundColor = 'gold';
       document.getElementById(id3).style.backgroundColor = 'gold';
       console.log(treci);
    
     
       document.getElementById("iksoks").innerHTML = treci;
      
      setTimeout(function () {
        winSlika();
      }, 1000);
      pobeda = true;
    }
      
      /*
      var kvadrati = document.getElementsByClassName('niz');
      for (let i = 0; i < kvadrati.length; i++) {
        kvadrati[i].style.backgroundColor = 'gold';
      }
      */
  }

  function ponoviIgru() {
    document.getElementById(ponovi);
    location.reload();
  }

  function winSlika() {
   var sli = document.getElementById("slika");
    sli.style.display = "block"; 
  }
var p = document.getElementById('ponovi');
    p.addEventListener('click', ponoviIgru);
