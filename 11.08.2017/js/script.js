var Telebe = function (ad, soyad, tevellud,grupnom) {
    this.ad = ad;
    this.soyad = soyad;
    this.tevellud = tevellud;
    this.grupnom = grupnom;
    this.kurs = "Code-Academy";
    this.yasHesabla = function () {
        return 2017-this.tevellud ;
    }
    
}
var anar =new Telebe("Anar", "Abisov",1991,"p303" );
var rza =new Telebe("Rza","Huseynov",1994,"p302" ) ;
var gunel =new Telebe("Gunel","Babayeva",1997,"p301" ) ;


console.log(anar.yasHesabla());
console.log(rza);

gunel.soyad= "Suleymanova";
console.log(gunel);



for (i=0 ; i<2; i++)
{
    var ad = prompt("Adi daxil edin:  ")
var soyad = prompt("Soyadi daxil edin:  ")

var tevellud = prompt("Tevelludu daxil edin:  ")

var grupnom = prompt("Grup nomresin  daxil edin:  ")
var Yenitelebe =new Telebe(ad, soyad,tevellud,grupnom );
console.log(Yenitelebe.ad +" - " +Yenitelebe.soyad +" - " +  Yenitelebe.yasHesabla()+" - " +Yenitelebe.grupnom +" - " + Yenitelebe.kurs)

}





