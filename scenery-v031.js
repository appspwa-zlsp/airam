/* AIRAM V0.3.1 - original lightweight scenery, no network or third-party images. */
(()=>{'use strict';
const C={black:'#151b1d',white:'#bac5c5',green:'#a7e953',red:'#d84455',steel:'#87999a',glass:'#243b39'};
const add=(id,decorate)=>{const s=SCENES[id];if(!s)return;const base=s.build;s.build=api=>{base(api);decorate(api,s)}};
function checker(b,x,y,z,n,step=.28){for(let i=0;i<n;i++)for(let j=0;j<2;j++)b(x+(i-(n-1)/2)*step,y+j*step,z,step-.006,step-.006,.025,(i+j)%2?C.black:C.white);}
function exterior({box:b,sign:s}){
 b(0,3.99,-2.71,14,.13,.07,C.red);b(0,3.73,-2.70,14,.07,.07,C.green,2);
 for(const side of [-1,1]){
  checker(b,side*5.1,4.16,-2.65,8,.19);
  const x=side*4.1;b(x,.06,-5.2,2.1,.13,2.2,C.black);b(x,.14,-4.14,2.1,.08,.13,C.white);
  for(const dx of [-.8,.8]){b(x+dx,.46,-4.24,.11,.78,.11,C.steel,3);b(x+dx,.75,-4.24,.12,.09,.12,C.green,2);}
  b(x+side*.48,1.01,-5.01,.07,.84,.07,C.black);b(x+side*.63,.62,-5.01,.30,.07,.07,C.black);b(x+side*.78,.88,-5.01,.07,.55,.07,C.black);
  for(let k=0;k<4;k++)b(side*(7.7+k*.48),.025,-3.4,.32,.035,1.7,C.white);
  b(side*6.9,2.4,-10.63,.08,2.6,.07,C.steel,3);
 }
 b(-8.2,1.9,-6.1,1.52,3.8,.35,C.black);b(-8.2,1.93,-5.88,1.35,3.54,.09,C.steel,3);
 s(-8.2,3.11,-5.79,1.22,.55,'AIRAM',{size:68});s(-8.2,2.10,-5.79,1.22,.95,'ERA 01|ADITIVADA',{size:55});s(-8.2,.79,-5.79,1.22,.55,'POSTO 01',{size:55});
 for(let k=-2;k<=2;k++)b(k*.65,.025,-1.2,.39,.035,.17,C.white);
}
add('facade',exterior);add('teaser',exterior);
// Paredão autoral: carro genérico, sem marca, no lado direito do pátio.
add('facade',({box:b,sign:s})=>{const x=9.4,z=-6.2;b(x,.54,z,2.2,.55,3.5,C.black);b(x,.84,z-.48,2.05,.32,1.95,C.red,3);b(x,1.12,z-.72,1.7,.52,1.35,C.glass,3);for(let dx of [-1.03,1.03])for(let dz of [-1.1,1.1])b(x+dx,.34,z+dz,.28,.54,.65,C.black);b(x,1.43,z+.91,1.9,1.48,.55,C.black);for(let i=0;i<3;i++)for(let j=0;j<2;j++){let xx=x-.59+i*.59,yy=1.04+j*.63;b(xx,yy,z+1.22,.50,.50,.10,C.steel,3);b(xx,yy,z+1.29,.40,.40,.06,C.black);b(xx,yy,z+1.33,.17,.17,.04,(i+j)%2?C.red:C.green,2)}b(x,2.21,z+1.05,1.94,.11,.15,C.green,2);s(x,2.41,z+1.07,1.8,.30,'PAREDÃO AIRAM',{size:55});});
SCENES.facade.spots.push({label:'Paredão de som',pos:[9.4,1.8,-4.7],target:'music',icon:'♫',kind:'panel'});

for(const [id,s] of Object.entries(SCENES))if(!s.exterior)add(id,({box:b},room)=>{
 const accent=room.adult?C.red:C.green;
 for(let k=-1;k<=1;k++){
  b(k*3.5,3.54,-4.2,2.05,.08,.40,C.steel,3);b(k*3.5,3.48,-4.2,1.9,.04,.28,accent,2);
 }
 // High wall trim avoids covering doors, labels and clickable equipment.
 checker(b,-4.62,2.92,-5.86,5,.22);checker(b,4.62,2.92,-5.86,5,.22);
 b(0,3.58,-5.84,11.5,.07,.04,accent,2);
});
add('store',({box:b,sign:s})=>{
 for(const x of [-4.9,4.9]){b(x,1.82,-5.74,.68,2.5,.12,C.steel,3);for(let k=0;k<4;k++)b(x,.78+k*.55,-5.66,.58,.08,.07,C.glass);}
 s(0,2.65,-5.72,1.85,.26,'ERA 01 / AIRAM',{size:53});
});
add('arcadeRoom',({box:b,sign:s})=>{
 for(let i=0;i<3;i++){let x=-3.2+i*2.25;b(x,2.37,-5.10,1.02,.09,.36,C.steel,3);s(x,2.42,-4.89,.94,.20,['BATIDA','JOGOS','MEMES'][i],{size:62});}
 for(let j=0;j<7;j++)b(-5.83,2.45+j*.12,-2.6,.03,.055,2.7,j%2?C.red:C.green,2);
});
add('beatRoom',({box:b})=>{for(let x of [-5.0,5.0])for(let j=0;j<5;j++)b(x,1.1+j*.42,-5.80,.65,.30,.12,j%2?C.black:'#465455');});
add('packsRoom',({box:b})=>{for(let x of [-3.2,0,3.2])for(let j=0;j<3;j++)b(x-.62+j*.62,2.31,-4.88,.34,.11,.035,j%2?C.red:C.green);});
})();
