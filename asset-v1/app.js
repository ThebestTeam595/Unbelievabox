/* 0.5.7 2021-12-27 16:37:09 */
var app=new function(){this.name="Stardust",this.version="1",this.date="2009",this.folder="asset-v1/",this.looptime=8000,this.bpm=120,this.totalframe=386,this.nbpolo=7,this.nbloopbonus=13,this.bonusloopA=!0,this.bonusendloopA=!0,this.recmaxloop=34,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepolotshirt="polo-sprite-tshirt.png",this.spritepicto="game-picto.png",this.colBck="#7B00FF",this.col0="#7B00FF",this.col1="#7B00FF",this.col2="#7B00FF",this.col3="#7B00FF",this.col4="#7B00FF",this.animearray=[{name:"1_lead",color:"828282",uniqsnd:!0},{name:"2_deux",color:"828282",uniqsnd:!0},{name:"3_kosh",color:"828282",uniqsnd:!0},{name:"4_shpok",color:"828282",uniqsnd:!1},{name:"5_tom",color:"828282",uniqsnd:!1},{name:"6_nouana",color:"00BF36",uniqsnd:!1},{name:"7_scratch",color:"00BF36",uniqsnd:!1},{name:"8_trill",color:"00BF36",uniqsnd:!1},{name:"9_bass",color:"00BF36",uniqsnd:!0},{name:"10_uh",color:"00BF36",uniqsnd:!1},{name:"11_nugu",color:"670000",uniqsnd:!1},{name:"12_guit",color:"670000",uniqsnd:!1},{name:"13_tromp",color:"670000",uniqsnd:!0},{name:"14_pouin",color:"670000",uniqsnd:!1},{name:"15_tung",color:"670000",uniqsnd:!1},{name:"16_aoun",color:"490081",uniqsnd:!1},{name:"17_hum",color:"490081",uniqsnd:!1},{name:"18_get",color:"490081",uniqsnd:!0},{name:"19_tellme",color:"490081",uniqsnd:!1},{name:"20_make",color:"490081",uniqsnd:!1}],this.bonusarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};
