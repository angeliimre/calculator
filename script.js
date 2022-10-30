const btn=[...Array(10).keys(),'-','+','*','/','=','C'];
console.log(btn);
let gombok="";
btn.forEach(function(item){
    gombok+=('<button>'+item+'</button>');
})
document.getElementById("gombok").innerHTML=gombok;

let content="";
let felirat="";
let eredmeny=0;

document.querySelectorAll("button").forEach(
    button=>{
        button.addEventListener('click',function(){
            content=document.getElementById("kijelzo").value;
            felirat=button.innerText;
            eredmeny=0;
            if(felirat=='C'){
                content="";
            }
            else if(felirat!='='){
                content+=felirat;
            }
            else{
                try{
                    content=eval(content);
                }
                catch(e){
                    alert("érvénytelen kifejezés!");
                    content="";
                }
               /* let szamok;
                if(content.indexOf('+')!=-1){
                    szamok=content.split("+");
                    content=parseInt(szamok[0])+parseInt(szamok[1]);
                }
                else if(content.indexOf('-')!=-1){
                    szamok=content.split("-");
                    content=parseInt(szamok[0])-parseInt(szamok[1]);
                }
                else if(content.indexOf('*')!=-1){
                    szamok=content.split("*");
                    content=parseInt(szamok[0])*parseInt(szamok[1]);
                }
                else if(content.indexOf('/')!=-1){
                    szamok=content.split("/");
                    content=parseFloat(szamok[0])/parseInt(szamok[1]);
                    
                }*/

                /*szamok=content.split("+");
                for(let i=0;i<szamok.length;i++){
                    let szamok2=szamok[i].split("-");
                    for(let j=0;j<szamok2.length;j++){
                        let szamok3=szamok2[j].split("*");
                        for(let k=0;k<szamok3.length;k++){
                            let szamok4=szamok3[k].split("/");
                            let resz4=szamok4[0];
                            for(let l=0;l<szamok4.length;l++){
                                
                            }
                        }
                    }
                }*/
            }
            document.getElementById("kijelzo").value=content;
        })
    }
)