const quiz = [
{q:"1. The nose of the redesigned Shinkanzen bullet train is inspired by", options:["Kingfisher beak","Crane peak","Owl Peak","Herons peak"], answer:0},
{q:"2. Passive cooling in sky scrapers is inspired by", options:["Termite Mounds","Earthwork Mounds","Ant Mounts","Spiro Mounds"], answer:0},
{q:"3. Belt movement of military tanks was inspired by", options:["Caterpillar Movement","Termite Movement","Ant Movement","Butterfly Movement"], answer:0},
{q:"4. Retinal prosthetic developed by scientists is approved by", options:["USFDA","USEPA","CPCB","SPCB"], answer:0},
{q:"5. The gene from ____ was used to develop genetically modified corn", options:["Bacillus thuringiensis","Bacillus cereus","Bacillus subtilis","Bacillus Anthrasis"], answer:0},
{q:"6. Protein produced by B. thuringiensis which has insecticide property", options:["Cry Protein","Res Protein","Try Protein","Taf Protein"], answer:0},
{q:"7. Biofertilizers have the potential to", options:["Replace chemical N & P","Reduce crop yield","Destimulate growth","Reduce soil fertility"], answer:0},
{q:"8. In self healing concrete, microstructure analysis can be done by", options:["SEM","XRD","FTIR","XPS"], answer:0},
{q:"9. Bioremediation is a pollution control technique using", options:["Microorganisms","Chemicals","Machines","Plants"], answer:0},
{q:"10. Velcro was invented by George de Mestral in", options:["1941","1951","1961","1971"], answer:0},

{q:"11. Velcro was inspired by", options:["Burrs","Leaves","Twigs","Roots"], answer:0},
{q:"12. The first microscope was developed by", options:["Antonie van Leeuwenhoek","Robert Hooke","Louis Pasteur","Charles Darwin"], answer:0},
{q:"13. The basic unit of life is", options:["Cell","Tissue","Organ","Atom"], answer:0},
{q:"14. Powerhouse of the cell is", options:["Mitochondria","Ribosome","Nucleus","Lysosome"], answer:0},
{q:"15. Photosynthesis takes place in", options:["Chloroplast","Mitochondria","Vacuole","Nucleus"], answer:0},
{q:"16. Genetic material is found in", options:["Nucleus","Cytoplasm","Ribosome","Golgi"], answer:0},
{q:"17. Prokaryotic cells do not have", options:["Nucleus","Cell wall","Membrane","Ribosome"], answer:0},
{q:"18. Ribosomes are responsible for", options:["Protein synthesis","Lipid synthesis","Energy production","Waste removal"], answer:0},
{q:"19. Suicidal bags of the cell are", options:["Lysosomes","Golgi bodies","Nucleolus","Vacuoles"], answer:0},
{q:"20. Cell wall of plants is made of", options:["Cellulose","Chitin","Protein","Lipid"], answer:0},

{q:"21. Fluid mosaic model was proposed by", options:["Singer & Nicolson","Watson & Crick","Hooke","Mendel"], answer:0},
{q:"22. Cell organelles are suspended in", options:["Cytoplasm","Nucleoplasm","Water","Air"], answer:0},
{q:"23. DNA is a", options:["Nucleic Acid","Protein","Carbohydrate","Lipid"], answer:0},
{q:"24. Sugar in DNA is", options:["Deoxyribose","Ribose","Glucose","Fructose"], answer:0},
{q:"25. Sugar in RNA is", options:["Ribose","Deoxyribose","Galactose","Maltose"], answer:0},
{q:"26. Adenine pairs with", options:["Thymine","Uracil","Guanine","Cytosine"], answer:0},
{q:"27. In RNA, thymine is replaced by", options:["Uracil","Adenine","Guanine","Cytosine"], answer:0},
{q:"28. Amino acids are building blocks of", options:["Proteins","Lipids","Sugars","DNA"], answer:0},
{q:"29. Enzymes are mostly", options:["Proteins","Vitamins","Minerals","Carbohydrates"], answer:0},
{q:"30. Enzyme reaction occurs at", options:["Active site","Passive site","Surface","Core"], answer:0},

{q:"31. Glycolysis occurs in", options:["Cytoplasm","Mitochondria","Nucleus","ER"], answer:0},
{q:"32. End product of glycolysis", options:["Pyruvate","Ethanol","CO2","Glucose"], answer:0},
{q:"33. Biocomposites are made from", options:["Natural fibers & polymers","Metal & plastic","Glass & steel","Sand & clay"], answer:0},
{q:"34. Natural fiber is", options:["Cotton","Isocyanate","Polyester","Nylon"], answer:0},
{q:"35. NOT a natural fiber", options:["Isocyanate","Cotton","Hemp","Flax"], answer:0},
{q:"36. Diameter of termite mounds can be", options:["30 m","40 m","50 m","60 m"], answer:0},
{q:"37. Termites use for mound construction", options:["Soil & saliva","Plastic","Wood","Metal"], answer:0},
{q:"38. Structure of termite mound is", options:["Porous","Non-porous","Solid","Transparent"], answer:0},
{q:"39. Termite mound chimneys ventilate", options:["Carbon dioxide","Oxygen","Nitrogen","Hydrogen"], answer:0},
{q:"40. Heat exchangers transfer heat between", options:["Fluids","Solids only","Vacuum","Metals only"], answer:0},

{q:"41. Human eye is an example of", options:["Camera","Motor","Battery","Sensor"], answer:0},
{q:"42. Bird wings inspired", options:["Aeroplanes","Ships","Cars","Trains"], answer:0},
{q:"43. Shark skin reduces", options:["Drag","Heat","Noise","Light"], answer:0},
{q:"44. Self cleaning surfaces inspired by", options:["Lotus leaf","Rose petal","Cactus","Grass"], answer:0},
{q:"45. DNA replication is", options:["Semiconservative","Conservative","Dispersive","None"], answer:0},
{q:"46. Bond between amino acids", options:["Peptide bond","Ionic bond","Metallic bond","Hydrogen bond"], answer:0},
{q:"47. Saturated fatty acids have", options:["Zero double bonds","One","Two","Many"], answer:0},
{q:"48. Monosaccharide example", options:["Glucose","Starch","Cellulose","Glycogen"], answer:0},
{q:"49. Polysaccharide example", options:["Starch","Glucose","Fructose","Sucrose"], answer:0},
{q:"50. Lipids are", options:["Insoluble in water","Soluble","Partially soluble","Highly soluble"], answer:0},

{q:"51. ATP produced during", options:["Cellular respiration","Transcription","Translation","Digestion"], answer:0},
{q:"52. Rough ER is rough due to", options:["Ribosomes","Lysosomes","Golgi","Vacuoles"], answer:0},
{q:"53. Smooth ER involved in", options:["Lipid synthesis","Protein synthesis","DNA repair","Respiration"], answer:0},
{q:"54. Organelle packaging proteins", options:["Golgi apparatus","Ribosome","Nucleus","Mitochondria"], answer:0},
{q:"55. Prokaryotes include", options:["Bacteria & Archaea","Plants & animals","Fungi","Protozoa"], answer:0},
{q:"56. Chromosomes are made of", options:["DNA & proteins","RNA only","Lipids","Carbohydrates"], answer:0},
{q:"57. Human somatic chromosomes", options:["46","23","44","48"], answer:0},
{q:"58. DNA → mRNA process", options:["Transcription","Translation","Replication","Mutation"], answer:0},
{q:"59. mRNA → Protein", options:["Translation","Transcription","Replication","Folding"], answer:0},
{q:"60. Start codon is", options:["AUG","UAA","UAG","UGA"], answer:0},

{q:"61. Oil spill bioremediation uses", options:["Alcanivorax bacteria","Virus","Yeast","Fungi"], answer:0},
{q:"62. Termite mounds stay cool due to", options:["Evaporative cooling","AC","Fans","Ice"], answer:0},
{q:"63. Material with two constituents", options:["Composite","Element","Pure substance","Mixture"], answer:0},
{q:"64. Bio-inspired robot", options:["Snake robot","Washing machine","Calculator","Toaster"], answer:0},
{q:"65. Cell discovered by", options:["Robert Hooke","Newton","Einstein","Darwin"], answer:0},
{q:"66. Smallest cell", options:["Mycoplasma","Nerve cell","Egg cell","RBC"], answer:0},
{q:"67. Plant vacuole function", options:["Storage","Respiration","Motility","Digestion"], answer:0},
{q:"68. Mitochondria has its own", options:["DNA","Cell wall","Nucleus","Stomata"], answer:0},
{q:"69. rRNA synthesis site", options:["Nucleolus","Cytoplasm","ER","Golgi"], answer:0},
{q:"70. Omnis cellula e cellula", options:["Rudolf Virchow","Hooke","Schwann","Schleiden"], answer:0},

{q:"71. Cell theory not applicable to", options:["Viruses","Bacteria","Algae","Fungi"], answer:0},
{q:"72. Plasma membrane is", options:["Phospholipid bilayer","Single layer","Protein layer","Cellulose"], answer:0},
{q:"73. Diffusion of water", options:["Osmosis","Active transport","Endocytosis","Exocytosis"], answer:0},
{q:"74. Energy requiring transport", options:["Active transport","Passive","Diffusion","Osmosis"], answer:0},
{q:"75. Cell drinking", options:["Pinocytosis","Phagocytosis","Exocytosis","Osmosis"], answer:0},
{q:"76. Cell eating", options:["Phagocytosis","Pinocytosis","Diffusion","Osmosis"], answer:0},
{q:"77. Animal cell membrane contains", options:["Cholesterol","Cellulose","Chitin","Peptidoglycan"], answer:0},
{q:"78. Longest human cell", options:["Nerve cell","Muscle","Bone","RBC"], answer:0},
{q:"79. Trace element", options:["Iron","Carbon","Oxygen","Hydrogen"], answer:0},
{q:"80. Nucleotide consists of", options:["Sugar base phosphate","Sugar base","Base phosphate","Protein sugar"], answer:0},

{q:"81. Milk sugar", options:["Lactose","Sucrose","Maltose","Glucose"], answer:0},
{q:"82. Animal storage carbohydrate", options:["Glycogen","Starch","Cellulose","Chitin"], answer:0},
{q:"83. Plant storage carbohydrate", options:["Starch","Glycogen","Chitin","Glucose"], answer:0},
{q:"84. Collagen is", options:["Structural protein","Enzyme","Transport","Hormone"], answer:0},
{q:"85. Hemoglobin is", options:["Transport protein","Structural","Storage","Defense"], answer:0},
{q:"86. Most abundant animal protein", options:["Collagen","RuBisCO","Insulin","Hemoglobin"], answer:0},
{q:"87. Most abundant biosphere protein", options:["RuBisCO","Collagen","Insulin","Myosin"], answer:0},
{q:"88. Bond between sugars", options:["Glycosidic bond","Peptide","Ester","Hydrogen"], answer:0},
{q:"89. Fat storage tissue", options:["Adipose","Epithelial","Connective","Nervous"], answer:0},
{q:"90. Vitamin A is", options:["Retinol","Calciferol","Thiamine","Ascorbic acid"], answer:0},

{q:"91. Scurvy caused by lack of", options:["Vitamin C","Vitamin A","Vitamin D","Vitamin B"], answer:0},
{q:"92. Night blindness caused by", options:["Vitamin A","Vitamin C","Vitamin K","Vitamin E"], answer:0},
{q:"93. DNA backbone is", options:["Sugar phosphate","Base sugar","Base phosphate","Protein"], answer:0},
{q:"94. Bond between DNA bases", options:["Hydrogen bond","Covalent","Ionic","Metallic"], answer:0},
{q:"95. Human genome project completed in", options:["2003","1990","2010","1980"], answer:0},
{q:"96. DNA segment coding protein", options:["Gene","Codon","Genome","Chromosome"], answer:0},
{q:"97. Biocomposites are", options:["Biodegradable","Non degradable","Toxic","Heavy"], answer:0},
{q:"98. Coconut fiber", options:["Coir","Jute","Silk","Wool"], answer:0},
{q:"99. Termite mounds occupied by", options:["Snakes","Rats","Frogs","Bats"], answer:0},
{q:"100. Biology for Engineers aims to", options:["Apply biology to engineering","Only plants","Only animals","Ignore physics"], answer:0}
];

/* ===== QUIZ ENGINE ===== */
let i=0, score=0;
let userAns=new Array(quiz.length).fill(null);

const q=document.getElementById("question");
const o=document.querySelectorAll("label");

function loadQ(){
  q.innerText=quiz[i].q;
  quiz[i].options.forEach((op,idx)=>{
    o[idx].innerText=op;
    document.getElementById("opt"+idx).checked=(userAns[i]===idx);
  });
}

function save(){
  document.querySelectorAll("input").forEach((el,idx)=>{
    if(el.checked) userAns[i]=idx;
  });
}

function nextQ(){ save(); if(i<quiz.length-1){i++; loadQ();}}
function prevQ(){ save(); if(i>0){i--; loadQ();}}

function submitQuiz(){
  save(); score=0;
  userAns.forEach((a,idx)=>{ if(a===quiz[idx].answer) score++; });
  document.getElementById("result").innerHTML=`✅ Score: <b>${score}/100</b>`;
}

/* TIMER 100 MIN */
let time=100*60;
setInterval(()=>{
 if(time<=0){submitQuiz();return;}
 time--;
 let m=Math.floor(time/60), s=time%60;
 document.getElementById("timer").innerText=`Time Left: ${m}:${s<10?"0"+s:s}`;
},1000);

loadQ();
