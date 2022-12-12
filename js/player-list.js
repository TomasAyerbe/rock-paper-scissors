var i;

class CpuPlayer {
    constructor (name, probability = [], pickProbability = []) {
        this.name = name;
        this.probability = probability;
        this.pickProbability = pickProbability;
    }
}

class Probability {
    constructor (rockProbability, paperProbability, scissorsProbability) {
        this.rockProbability = rockProbability;
        this.paperProbability = paperProbability;
        this.scissorsProbability = scissorsProbability
    }
}

function createPickProbability (probability) {
    let pos = 0;
    let pickProbability = [];

    for (i=0; i<probability.rockProbability; i++) {
        pickProbability[pos] = 1;
        ++pos;
    }
    
    for (i=0; i<probability.paperProbability; i++) {
        pickProbability[pos] = 2;
        ++pos;
    }
    
    for (i=0; i<probability.scissorsProbability; i++) {
        pickProbability[pos] = 3;
        ++pos;
    }

    return pickProbability;
}

let probability1 = new Probability(1, 0, 9);
let probability2 = new Probability(1, 1, 8);
let probability3 = new Probability(1, 2, 7);
let probability4 = new Probability(1, 3, 6);
let probability5 = new Probability(1, 4, 5);
let probability6 = new Probability(1, 5, 4);
let probability7 = new Probability(1, 6, 3);
let probability8 = new Probability(1, 7, 2);
let probability9 = new Probability(1, 8, 1);
let probability10 = new Probability(1, 9, 0);
let probability11 = new Probability(2, 0, 8);
let probability12 = new Probability(2, 1, 7);
let probability13 = new Probability(2, 2, 6);
let probability14 = new Probability(2, 3, 5);
let probability15 = new Probability(2, 4, 4);
let probability16 = new Probability(2, 5, 3);
let probability17 = new Probability(2, 6, 2);
let probability18 = new Probability(2, 7, 1);
let probability19 = new Probability(2, 8, 0);
let probability20 = new Probability(3, 0, 7);
let probability21 = new Probability(3, 1, 6);
let probability22 = new Probability(3, 2, 5);
let probability23 = new Probability(3, 3, 4);
let probability24 = new Probability(3, 4, 3);
let probability25 = new Probability(3, 5, 2);
let probability26 = new Probability(3, 6, 1);
let probability27 = new Probability(3, 7, 0);
let probability28 = new Probability(4, 0, 6);
let probability29 = new Probability(4, 1, 5);
let probability30 = new Probability(4, 2, 4);
let probability31 = new Probability(4, 3, 3);
let probability32 = new Probability(4, 4, 2);
let probability33 = new Probability(4, 5, 1);
let probability34 = new Probability(4, 6, 0);
let probability35 = new Probability(5, 0, 5);
let probability36 = new Probability(5, 1, 4);
let probability37 = new Probability(5, 2, 3);
let probability38 = new Probability(5, 3, 2);
let probability39 = new Probability(5, 4, 1);
let probability40 = new Probability(5, 5, 0);
let probability41 = new Probability(6, 0, 4);
let probability42 = new Probability(6, 1, 3);
let probability43 = new Probability(6, 2, 2);
let probability44 = new Probability(6, 3, 1);
let probability45 = new Probability(6, 4, 0);
let probability46 = new Probability(7, 0, 3);
let probability47 = new Probability(7, 1, 2);
let probability48 = new Probability(7, 2, 1);
let probability49 = new Probability(7, 3, 0);
let probability50 = new Probability(8, 0, 2);
let probability51 = new Probability(8, 1, 1);
let probability52 = new Probability(8, 2, 0);
let probability53 = new Probability(9, 0, 1);
let probability54 = new Probability(9, 1, 0);

let pickProbability1 = createPickProbability (probability1);
let pickProbability2 = createPickProbability (probability2);
let pickProbability3 = createPickProbability (probability3);
let pickProbability4 = createPickProbability (probability4);
let pickProbability5 = createPickProbability (probability5);
let pickProbability6 = createPickProbability (probability6);
let pickProbability7 = createPickProbability (probability7);
let pickProbability8 = createPickProbability (probability8);
let pickProbability9 = createPickProbability (probability9);
let pickProbability10 = createPickProbability (probability10);
let pickProbability11 = createPickProbability (probability11);
let pickProbability12 = createPickProbability (probability12);
let pickProbability13 = createPickProbability (probability13);
let pickProbability14 = createPickProbability (probability14);
let pickProbability15 = createPickProbability (probability15);
let pickProbability16 = createPickProbability (probability16);
let pickProbability17 = createPickProbability (probability17);
let pickProbability18 = createPickProbability (probability18);
let pickProbability19 = createPickProbability (probability19);
let pickProbability20 = createPickProbability (probability20);
let pickProbability21 = createPickProbability (probability21);
let pickProbability22 = createPickProbability (probability22);
let pickProbability23 = createPickProbability (probability23);
let pickProbability24 = createPickProbability (probability24);
let pickProbability25 = createPickProbability (probability25);
let pickProbability26 = createPickProbability (probability26);
let pickProbability27 = createPickProbability (probability27);
let pickProbability28 = createPickProbability (probability28);
let pickProbability29 = createPickProbability (probability29);
let pickProbability30 = createPickProbability (probability30);
let pickProbability31 = createPickProbability (probability31);
let pickProbability32 = createPickProbability (probability32);
let pickProbability33 = createPickProbability (probability33);
let pickProbability34 = createPickProbability (probability34);
let pickProbability35 = createPickProbability (probability35);
let pickProbability36 = createPickProbability (probability36);
let pickProbability37 = createPickProbability (probability37);
let pickProbability38 = createPickProbability (probability38);
let pickProbability39 = createPickProbability (probability39);
let pickProbability40 = createPickProbability (probability40);
let pickProbability41 = createPickProbability (probability41);
let pickProbability42 = createPickProbability (probability42);
let pickProbability43 = createPickProbability (probability43);
let pickProbability44 = createPickProbability (probability44);
let pickProbability45 = createPickProbability (probability45);
let pickProbability46 = createPickProbability (probability46);
let pickProbability47 = createPickProbability (probability47);
let pickProbability48 = createPickProbability (probability48);
let pickProbability49 = createPickProbability (probability49);
let pickProbability50 = createPickProbability (probability50);
let pickProbability51 = createPickProbability (probability51);
let pickProbability52 = createPickProbability (probability52);
let pickProbability53 = createPickProbability (probability53);
let pickProbability54 = createPickProbability (probability54);

let cpuPlayer1 = new CpuPlayer('Johanna', probability1, pickProbability1);
let cpuPlayer2 = new CpuPlayer('Jared', probability2, pickProbability2);
let cpuPlayer3 = new CpuPlayer('Ayden', probability3, pickProbability3);
let cpuPlayer4 = new CpuPlayer('Isis', probability4, pickProbability4);
let cpuPlayer5 = new CpuPlayer('Justus', probability5, pickProbability5);
let cpuPlayer6 = new CpuPlayer('Marjorie', probability6, pickProbability6);
let cpuPlayer7 = new CpuPlayer('Mykala', probability7, pickProbability7);
let cpuPlayer8 = new CpuPlayer('Kyler', probability8, pickProbability8);
let cpuPlayer9 = new CpuPlayer('Phoenix', probability9, pickProbability9);
let cpuPlayer10 = new CpuPlayer('Jessalyn', probability10, pickProbability10);
let cpuPlayer11 = new CpuPlayer('Blake', probability11, pickProbability11);
let cpuPlayer12 = new CpuPlayer('Everardo', probability12, pickProbability12);
let cpuPlayer13 = new CpuPlayer('Cayla', probability13, pickProbability13);
let cpuPlayer14 = new CpuPlayer('Melissa', probability14, pickProbability14);
let cpuPlayer15 = new CpuPlayer('Abril', probability15, pickProbability15);
let cpuPlayer16 = new CpuPlayer('Conrad', probability16, pickProbability16);
let cpuPlayer17 = new CpuPlayer('Desire', probability17, pickProbability17);
let cpuPlayer18 = new CpuPlayer('Bayley', probability18, pickProbability18);
let cpuPlayer19 = new CpuPlayer('Tiara', probability19, pickProbability19);
let cpuPlayer20 = new CpuPlayer('Octavio', probability20, pickProbability20);
let cpuPlayer21 = new CpuPlayer('Zachariah', probability21, pickProbability21);
let cpuPlayer22 = new CpuPlayer('Breeanna', probability22, pickProbability22);
let cpuPlayer23 = new CpuPlayer('Davon', probability23, pickProbability23);
let cpuPlayer24 = new CpuPlayer('Ilana', probability24, pickProbability24);
let cpuPlayer25 = new CpuPlayer('Genevieve', probability25, pickProbability25);
let cpuPlayer26 = new CpuPlayer('Khalil', probability26, pickProbability26);
let cpuPlayer27 = new CpuPlayer('Quinten', probability27, pickProbability27);
let cpuPlayer28 = new CpuPlayer('Estrella', probability28, pickProbability28);
let cpuPlayer29 = new CpuPlayer('Charles', probability29, pickProbability29);
let cpuPlayer30 = new CpuPlayer('Rick', probability30, pickProbability30);
let cpuPlayer31 = new CpuPlayer('Vance', probability31, pickProbability31);
let cpuPlayer32 = new CpuPlayer('Karissa', probability32, pickProbability32);
let cpuPlayer33 = new CpuPlayer('Paris', probability33, pickProbability33);
let cpuPlayer34 = new CpuPlayer('Raquel', probability34, pickProbability34);
let cpuPlayer35 = new CpuPlayer('Toby', probability35, pickProbability35);
let cpuPlayer36 = new CpuPlayer('Amya', probability36, pickProbability36);
let cpuPlayer37 = new CpuPlayer('Layla', probability37, pickProbability37);
let cpuPlayer38 = new CpuPlayer('Kareem', probability38, pickProbability38);
let cpuPlayer39 = new CpuPlayer('Samir', probability39, pickProbability39);
let cpuPlayer40 = new CpuPlayer('Deonte', probability40, pickProbability40);
let cpuPlayer41 = new CpuPlayer('Darrien', probability41, pickProbability41);
let cpuPlayer42 = new CpuPlayer('Brady', probability42, pickProbability42);
let cpuPlayer43 = new CpuPlayer('Justyn', probability43, pickProbability43);
let cpuPlayer44 = new CpuPlayer('Delia', probability44, pickProbability44);
let cpuPlayer45 = new CpuPlayer('Madisen', probability45, pickProbability45);
let cpuPlayer46 = new CpuPlayer('Edmund', probability46, pickProbability46);
let cpuPlayer47 = new CpuPlayer('Zainab', probability47, pickProbability47);
let cpuPlayer48 = new CpuPlayer('Sequoia', probability48, pickProbability48);
let cpuPlayer49 = new CpuPlayer('Nevin', probability49, pickProbability49);
let cpuPlayer50 = new CpuPlayer('Emerson', probability50, pickProbability50);
let cpuPlayer51 = new CpuPlayer('Trace', probability51, pickProbability51);
let cpuPlayer52 = new CpuPlayer('Cristopher', probability52, pickProbability52);
let cpuPlayer53 = new CpuPlayer('Alyssia', probability53, pickProbability53);
let cpuPlayer54 = new CpuPlayer('Isaias', probability54, pickProbability54);
let cpuPlayer55 = new CpuPlayer('Tatiyana', probability1, pickProbability1);
let cpuPlayer56 = new CpuPlayer('Alexandrea', probability2, pickProbability2);
let cpuPlayer57 = new CpuPlayer('Treyton', probability3, pickProbability3);
let cpuPlayer58 = new CpuPlayer('Shae', probability4, pickProbability4);
let cpuPlayer59 = new CpuPlayer('Micheal', probability5, pickProbability5);
let cpuPlayer60 = new CpuPlayer('Kathleen', probability6, pickProbability6);
let cpuPlayer61 = new CpuPlayer('Uriel', probability7, pickProbability7);
let cpuPlayer62 = new CpuPlayer('Rafael', probability8, pickProbability8);
let cpuPlayer63 = new CpuPlayer('Treasure', probability9, pickProbability9);
let cpuPlayer64 = new CpuPlayer('Chana', probability10, pickProbability10);
let cpuPlayer65 = new CpuPlayer('Griffin', probability11, pickProbability11);
let cpuPlayer66 = new CpuPlayer('Jaron', probability12, pickProbability12);
let cpuPlayer67 = new CpuPlayer('Nancy', probability13, pickProbability13);
let cpuPlayer68 = new CpuPlayer('Branden', probability14, pickProbability14);
let cpuPlayer69 = new CpuPlayer('Landon', probability15, pickProbability15);
let cpuPlayer70 = new CpuPlayer('Jarett', probability16, pickProbability16);
let cpuPlayer71 = new CpuPlayer('Konner', probability17, pickProbability17);
let cpuPlayer72 = new CpuPlayer('Jada', probability18, pickProbability18);
let cpuPlayer73 = new CpuPlayer('Omar', probability19, pickProbability19);
let cpuPlayer74 = new CpuPlayer('Kelsy', probability20, pickProbability20);
let cpuPlayer75 = new CpuPlayer('Nya', probability21, pickProbability21);
let cpuPlayer76 = new CpuPlayer('Isaak', probability22, pickProbability22);
let cpuPlayer77 = new CpuPlayer('Nicolle', probability23, pickProbability23);
let cpuPlayer78 = new CpuPlayer( 'Yesica', probability24, pickProbability24);
let cpuPlayer79 = new CpuPlayer('Israel', probability25, pickProbability25);
let cpuPlayer80 = new CpuPlayer('Marlene', probability26, pickProbability26);
let cpuPlayer81 = new CpuPlayer('Deontae', probability27, pickProbability27);
let cpuPlayer82 = new CpuPlayer('Livia', probability28, pickProbability28);
let cpuPlayer83 = new CpuPlayer('Lianna', probability29, pickProbability29);
let cpuPlayer84 = new CpuPlayer('Tyra', probability30, pickProbability30);
let cpuPlayer85 = new CpuPlayer('Bryon', probability31, pickProbability31);
let cpuPlayer86 = new CpuPlayer('Dorien', probability32, pickProbability32);
let cpuPlayer87 = new CpuPlayer('Kyree', probability33, pickProbability33);
let cpuPlayer88 = new CpuPlayer('Franchesca', probability34, pickProbability34);
let cpuPlayer89 = new CpuPlayer('Marion', probability35, pickProbability35);
let cpuPlayer90 = new CpuPlayer('Latrell', probability36, pickProbability36);
let cpuPlayer91 = new CpuPlayer('Tristen', probability37, pickProbability37);
let cpuPlayer92 = new CpuPlayer('Shea', probability38, pickProbability38);
let cpuPlayer93 = new CpuPlayer('Kaitlynn', probability39, pickProbability39);
let cpuPlayer94 = new CpuPlayer('Tristin', probability40, pickProbability40);
let cpuPlayer95 = new CpuPlayer('Reese', probability41, pickProbability41);
let cpuPlayer96 = new CpuPlayer('Daryl', probability42, pickProbability42);
let cpuPlayer97 = new CpuPlayer('Anyssa', probability43, pickProbability43);
let cpuPlayer98 = new CpuPlayer('Terri', probability44, pickProbability44);
let cpuPlayer99 = new CpuPlayer('Dakotah', probability45, pickProbability45);
let cpuPlayer100 = new CpuPlayer('Jamal', probability46, pickProbability46);
let cpuPlayer101 = new CpuPlayer('Constance', probability47, pickProbability47);
let cpuPlayer102 = new CpuPlayer('Henry', probability48, pickProbability48);
let cpuPlayer103 = new CpuPlayer('Eliseo', probability49, pickProbability49);
let cpuPlayer104 = new CpuPlayer('Jaylan', probability50, pickProbability50);
let cpuPlayer105 = new CpuPlayer('Lesley', probability51, pickProbability51);
let cpuPlayer106 = new CpuPlayer('Liam', probability52, pickProbability52);
let cpuPlayer107 = new CpuPlayer('Yvonne', probability53, pickProbability53);
let cpuPlayer108 = new CpuPlayer('Quincy', probability54, pickProbability54);
let cpuPlayer109 = new CpuPlayer('Kaitlyn', probability1, pickProbability1);
let cpuPlayer110 = new CpuPlayer('Jaquan', probability2, pickProbability2);
let cpuPlayer111 = new CpuPlayer('Mateo', probability3, pickProbability3);
let cpuPlayer112 = new CpuPlayer('Daylon', probability4, pickProbability4);
let cpuPlayer113 = new CpuPlayer('Roland', probability5, pickProbability5);
let cpuPlayer114 = new CpuPlayer('Milo', probability6, pickProbability6);
let cpuPlayer115 = new CpuPlayer('Demetria', probability7, pickProbability7);
let cpuPlayer116 = new CpuPlayer('Daveon', probability8, pickProbability8);
let cpuPlayer117 = new CpuPlayer('Marc', probability9, pickProbability9);
let cpuPlayer118 = new CpuPlayer('Camden', probability10, pickProbability10);
let cpuPlayer119 = new CpuPlayer('Lauryn', probability11, pickProbability11);
let cpuPlayer120 = new CpuPlayer('Myron', probability12, pickProbability12);
let cpuPlayer121 = new CpuPlayer('Jovany', probability13, pickProbability13);
let cpuPlayer122 = new CpuPlayer('Yessenia', probability14, pickProbability14);
let cpuPlayer123 = new CpuPlayer('Annabel', probability15, pickProbability15);
let cpuPlayer124 = new CpuPlayer('Charlotte', probability16, pickProbability16);
let cpuPlayer125 = new CpuPlayer('Shamar', probability17, pickProbability17);
let cpuPlayer126 = new CpuPlayer('Conor', probability18, pickProbability18);
let cpuPlayer127 = new CpuPlayer('Sheldon', probability19, pickProbability19);
let cpuPlayer128 = new CpuPlayer('Emanuel', probability20, pickProbability20);
let cpuPlayer129 = new CpuPlayer('Jackeline', probability21, pickProbability21);
let cpuPlayer130 = new CpuPlayer('Kristina', probability22, pickProbability22);
let cpuPlayer131 = new CpuPlayer('Maia', probability23, pickProbability23);
let cpuPlayer132 = new CpuPlayer('Kristy', probability24, pickProbability24);
let cpuPlayer133 = new CpuPlayer('Aden', probability25, pickProbability25);
let cpuPlayer134 = new CpuPlayer('Oswaldo', probability26, pickProbability26);
let cpuPlayer135 = new CpuPlayer('Adan', probability27, pickProbability27);
let cpuPlayer136 = new CpuPlayer('Divya', probability28, pickProbability28);
let cpuPlayer137 = new CpuPlayer('Richard', probability29, pickProbability29);
let cpuPlayer138 = new CpuPlayer('Mindy', probability30, pickProbability30);
let cpuPlayer139 = new CpuPlayer('Kearra', probability31, pickProbability31);
let cpuPlayer140 = new CpuPlayer('Celine', probability32, pickProbability32);
let cpuPlayer141 = new CpuPlayer('Jair', probability33, pickProbability33);
let cpuPlayer142 = new CpuPlayer('Jadon', probability34, pickProbability34);
let cpuPlayer143 = new CpuPlayer('Ari', probability35, pickProbability35);
let cpuPlayer144 = new CpuPlayer('Ciarra', probability36, pickProbability36);
let cpuPlayer145 = new CpuPlayer('Jaime', probability37, pickProbability37);
let cpuPlayer146 = new CpuPlayer('Fallon', probability38, pickProbability38);
let cpuPlayer147 = new CpuPlayer('Geneva', probability39, pickProbability39);
let cpuPlayer148 = new CpuPlayer('Mitchell', probability40, pickProbability40);
let cpuPlayer149 = new CpuPlayer('Erick', probability41, pickProbability41);
let cpuPlayer150 = new CpuPlayer('Harlie', probability42, pickProbability42);
let cpuPlayer151 = new CpuPlayer('Anton', probability43, pickProbability43);
let cpuPlayer152 = new CpuPlayer('Layne', probability44, pickProbability44);
let cpuPlayer153 = new CpuPlayer('Gavyn', probability45, pickProbability45);
let cpuPlayer154 = new CpuPlayer('Rodolfo', probability46, pickProbability46);
let cpuPlayer155 = new CpuPlayer('Mekhi', probability47, pickProbability47);
let cpuPlayer156 = new CpuPlayer('Lynn', probability48, pickProbability48);
let cpuPlayer157 = new CpuPlayer('Keegan', probability49, pickProbability49);
let cpuPlayer158 = new CpuPlayer('Luc', probability50, pickProbability50);
let cpuPlayer159 = new CpuPlayer('Kolton', probability51, pickProbability51);
let cpuPlayer160 = new CpuPlayer('Javion', probability52, pickProbability52);
let cpuPlayer161 = new CpuPlayer('Graham', probability53, pickProbability53);
let cpuPlayer162 = new CpuPlayer('Anne', probability54, pickProbability54);
let cpuPlayer163 = new CpuPlayer('Deven', probability1, pickProbability1);
let cpuPlayer164 = new CpuPlayer('Angie', probability2, pickProbability2);
let cpuPlayer165 = new CpuPlayer('Annalisa', probability3, pickProbability3);
let cpuPlayer166 = new CpuPlayer('Remington', probability4, pickProbability4);
let cpuPlayer167 = new CpuPlayer('Brandt', probability5, pickProbability5);
let cpuPlayer168 = new CpuPlayer('Kevon', probability6, pickProbability6);
let cpuPlayer169 = new CpuPlayer('Darius', probability7, pickProbability7);
let cpuPlayer170 = new CpuPlayer('Ira', probability8, pickProbability8);
let cpuPlayer171 = new CpuPlayer('Kaylin', probability9, pickProbability9);
let cpuPlayer172 = new CpuPlayer('Mikaila', probability10, pickProbability10);
let cpuPlayer173 = new CpuPlayer('Blaine', probability11, pickProbability11);
let cpuPlayer174 = new CpuPlayer('Jaxson', probability12, pickProbability12);
let cpuPlayer175 = new CpuPlayer('Areli', probability13, pickProbability13);
let cpuPlayer176 = new CpuPlayer('Katya', probability14, pickProbability14);
let cpuPlayer177 = new CpuPlayer('Kaliyah', probability15, pickProbability15);
let cpuPlayer178 = new CpuPlayer('Jaylin', probability16, pickProbability16);
let cpuPlayer179 = new CpuPlayer('Savion', probability17, pickProbability17);
let cpuPlayer180 = new CpuPlayer('Charlie', probability18, pickProbability18);
let cpuPlayer181 = new CpuPlayer('Zack', probability19, pickProbability19);
let cpuPlayer182 = new CpuPlayer('Waylon', probability20, pickProbability20);
let cpuPlayer183 = new CpuPlayer('Olivia', probability21, pickProbability21);
let cpuPlayer184 = new CpuPlayer('Mario', probability22, pickProbability22);
let cpuPlayer185 = new CpuPlayer('Damaris', probability23, pickProbability23);
let cpuPlayer186 = new CpuPlayer('Camila', probability24, pickProbability24);
let cpuPlayer187 = new CpuPlayer('Devan', probability25, pickProbability25);
let cpuPlayer188 = new CpuPlayer('Janet', probability26, pickProbability26);
let cpuPlayer189 = new CpuPlayer('Arielle', probability27, pickProbability27);
let cpuPlayer190 = new CpuPlayer('Dustyn', probability28, pickProbability28);
let cpuPlayer191 = new CpuPlayer('Luke', probability29, pickProbability29);
let cpuPlayer192 = new CpuPlayer('Nelson', probability30, pickProbability30);
let cpuPlayer193 = new CpuPlayer('Mason', probability31, pickProbability31);
let cpuPlayer194 = new CpuPlayer('Carly', probability32, pickProbability32);
let cpuPlayer195 = new CpuPlayer('Destini', probability33, pickProbability33);
let cpuPlayer196 = new CpuPlayer('Liza', probability34, pickProbability34);
let cpuPlayer197 = new CpuPlayer('Lamar', probability35, pickProbability35);
let cpuPlayer198 = new CpuPlayer('Jacquez', probability36, pickProbability36);
let cpuPlayer199 = new CpuPlayer('Clark', probability37, pickProbability37);
let cpuPlayer200 = new CpuPlayer('Itzel', probability38, pickProbability38);
let cpuPlayer201 = new CpuPlayer('Jania', probability39, pickProbability39);
let cpuPlayer202 = new CpuPlayer('Austyn', probability40, pickProbability40);
let cpuPlayer203 = new CpuPlayer('Brianna', probability41, pickProbability41);
let cpuPlayer204 = new CpuPlayer('Cedric', probability42, pickProbability42);
let cpuPlayer205 = new CpuPlayer('Asya', probability43, pickProbability43);
let cpuPlayer206 = new CpuPlayer('Jamar', probability44, pickProbability44);
let cpuPlayer207 = new CpuPlayer('Kinsey', probability45, pickProbability45);
let cpuPlayer208 = new CpuPlayer('Francis', probability46, pickProbability46);
let cpuPlayer209 = new CpuPlayer('Jane', probability47, pickProbability47);
let cpuPlayer210 = new CpuPlayer('Kacie', probability48, pickProbability48);
let cpuPlayer211 = new CpuPlayer('Katherine', probability49, pickProbability49);
let cpuPlayer212 = new CpuPlayer('Darrin', probability50, pickProbability50);
let cpuPlayer213 = new CpuPlayer('Shaelyn', probability51, pickProbability51);
let cpuPlayer214 = new CpuPlayer('Jaylyn', probability52, pickProbability52);
let cpuPlayer215 = new CpuPlayer('Abagail', probability53, pickProbability53);
let cpuPlayer216 = new CpuPlayer('Sterling', probability54, pickProbability54);
let cpuPlayer217 = new CpuPlayer('Leo', probability1, pickProbability1);
let cpuPlayer218 = new CpuPlayer('Monica', probability2, pickProbability2);
let cpuPlayer219 = new CpuPlayer('Gaven', probability3, pickProbability3);
let cpuPlayer220 = new CpuPlayer('Noe', probability4, pickProbability4);
let cpuPlayer221 = new CpuPlayer('Halee', probability5, pickProbability5);
let cpuPlayer222 = new CpuPlayer('Gino', probability6, pickProbability6);
let cpuPlayer223 = new CpuPlayer('Carolyn', probability7, pickProbability7);
let cpuPlayer224 = new CpuPlayer('Brycen', probability8, pickProbability8);
let cpuPlayer225 = new CpuPlayer('Demond', probability9, pickProbability9);
let cpuPlayer226 = new CpuPlayer('Blair', probability10, pickProbability10);
let cpuPlayer227 = new CpuPlayer('Josie', probability11, pickProbability11);
let cpuPlayer228 = new CpuPlayer('Ruth', probability12, pickProbability12);
let cpuPlayer229 = new CpuPlayer('Nehemiah', probability13, pickProbability13);
let cpuPlayer230 = new CpuPlayer('Chandler', probability14, pickProbability14);
let cpuPlayer231 = new CpuPlayer('Cora', probability15, pickProbability15);
let cpuPlayer232 = new CpuPlayer('Kenyon', probability16, pickProbability16);
let cpuPlayer233 = new CpuPlayer('Dallas', probability17, pickProbability17);
let cpuPlayer234 = new CpuPlayer('Kelly', probability18, pickProbability18);
let cpuPlayer235 = new CpuPlayer('Marguerite', probability19, pickProbability19);
let cpuPlayer236 = new CpuPlayer('Ahmad', probability20, pickProbability20);
let cpuPlayer237 = new CpuPlayer('Tevin', probability21, pickProbability21);
let cpuPlayer238 = new CpuPlayer('Erich', probability22, pickProbability22);
let cpuPlayer239 = new CpuPlayer('Giavanna', probability23, pickProbability23);
let cpuPlayer240 = new CpuPlayer('Maurice', probability24, pickProbability24);
let cpuPlayer241 = new CpuPlayer('Rhea', probability25, pickProbability25);
let cpuPlayer242 = new CpuPlayer('Franco', probability26, pickProbability26);
let cpuPlayer243 = new CpuPlayer('Ray', probability27, pickProbability27);
let cpuPlayer244 = new CpuPlayer('Kolten', probability28, pickProbability28);
let cpuPlayer245 = new CpuPlayer('Journey', probability29, pickProbability29);
let cpuPlayer246 = new CpuPlayer('Fabian', probability30, pickProbability30);
let cpuPlayer247 = new CpuPlayer('Linda', probability31, pickProbability31);
let cpuPlayer248 = new CpuPlayer('Nick', probability32, pickProbability32);
let cpuPlayer249 = new CpuPlayer('Trystan', probability33, pickProbability33);
let cpuPlayer250 = new CpuPlayer('Anthony', probability34, pickProbability34);
let cpuPlayer251 = new CpuPlayer('Keanu', probability35, pickProbability35);
let cpuPlayer252 = new CpuPlayer('Jefferson', probability36, pickProbability36);
let cpuPlayer253 = new CpuPlayer('Ean', probability37, pickProbability37);
let cpuPlayer254 = new CpuPlayer('Liana', probability38, pickProbability38);
let cpuPlayer255 = new CpuPlayer('Rebekah', probability39, pickProbability39);
let cpuPlayer256 = new CpuPlayer('Brad', probability40, pickProbability40);
let cpuPlayer257 = new CpuPlayer('Alexander', probability41, pickProbability41);
let cpuPlayer258 = new CpuPlayer('India', probability42, pickProbability42);
let cpuPlayer259 = new CpuPlayer('Santos', probability43, pickProbability43);
let cpuPlayer260 = new CpuPlayer('Talia', probability44, pickProbability44);
let cpuPlayer261 = new CpuPlayer('Julissa', probability45, pickProbability45);
let cpuPlayer262 = new CpuPlayer('Carson', probability46, pickProbability46);
let cpuPlayer263 = new CpuPlayer('Kian', probability47, pickProbability47);
let cpuPlayer264 = new CpuPlayer('Morgan', probability48, pickProbability48);
let cpuPlayer265 = new CpuPlayer('Camren', probability49, pickProbability49);
let cpuPlayer266 = new CpuPlayer('Gustavo', probability50, pickProbability50);
let cpuPlayer267 = new CpuPlayer('Shane', probability51, pickProbability51);
let cpuPlayer268 = new CpuPlayer('Kiya', probability52, pickProbability52);
let cpuPlayer269 = new CpuPlayer('Aryana', probability53, pickProbability53);
let cpuPlayer270 = new CpuPlayer('Isabel', probability54, pickProbability54);

export let cpuPlayers = [
    cpuPlayer1,
    cpuPlayer2,
    cpuPlayer3,
    cpuPlayer4,
    cpuPlayer5,
    cpuPlayer6,
    cpuPlayer7,
    cpuPlayer8,
    cpuPlayer9,
    cpuPlayer10,
    cpuPlayer11,
    cpuPlayer12,
    cpuPlayer13,
    cpuPlayer14,
    cpuPlayer15,
    cpuPlayer16,
    cpuPlayer17,
    cpuPlayer18,
    cpuPlayer19,
    cpuPlayer20,
    cpuPlayer21,
    cpuPlayer22,
    cpuPlayer23,
    cpuPlayer24,
    cpuPlayer25,
    cpuPlayer26,
    cpuPlayer27,
    cpuPlayer28,
    cpuPlayer29,
    cpuPlayer30,
    cpuPlayer31,
    cpuPlayer32,
    cpuPlayer33,
    cpuPlayer34,
    cpuPlayer35,
    cpuPlayer36,
    cpuPlayer37,
    cpuPlayer38,
    cpuPlayer39,
    cpuPlayer40,
    cpuPlayer41,
    cpuPlayer42,
    cpuPlayer43,
    cpuPlayer44,
    cpuPlayer45,
    cpuPlayer46,
    cpuPlayer47,
    cpuPlayer48,
    cpuPlayer49,
    cpuPlayer50,
    cpuPlayer51,
    cpuPlayer52,
    cpuPlayer53,
    cpuPlayer54,
    cpuPlayer55,
    cpuPlayer56,
    cpuPlayer57,
    cpuPlayer58,
    cpuPlayer59,
    cpuPlayer60,
    cpuPlayer61,
    cpuPlayer62,
    cpuPlayer63,
    cpuPlayer64,
    cpuPlayer65,
    cpuPlayer66,
    cpuPlayer67,
    cpuPlayer68,
    cpuPlayer69,
    cpuPlayer70,
    cpuPlayer71,
    cpuPlayer72,
    cpuPlayer73,
    cpuPlayer74,
    cpuPlayer75,
    cpuPlayer76,
    cpuPlayer77,
    cpuPlayer78,
    cpuPlayer79,
    cpuPlayer80,
    cpuPlayer81,
    cpuPlayer82,
    cpuPlayer83,
    cpuPlayer84,
    cpuPlayer85,
    cpuPlayer86,
    cpuPlayer87,
    cpuPlayer88,
    cpuPlayer89,
    cpuPlayer90,
    cpuPlayer91,
    cpuPlayer92,
    cpuPlayer93,
    cpuPlayer94,
    cpuPlayer95,
    cpuPlayer96,
    cpuPlayer97,
    cpuPlayer98,
    cpuPlayer99,
    cpuPlayer100,
    cpuPlayer101,
    cpuPlayer102,
    cpuPlayer103,
    cpuPlayer104,
    cpuPlayer105,
    cpuPlayer106,
    cpuPlayer107,
    cpuPlayer108,
    cpuPlayer109,
    cpuPlayer110,
    cpuPlayer111,
    cpuPlayer112,
    cpuPlayer113,
    cpuPlayer114,
    cpuPlayer115,
    cpuPlayer116,
    cpuPlayer117,
    cpuPlayer118,
    cpuPlayer119,
    cpuPlayer120,
    cpuPlayer121,
    cpuPlayer122,
    cpuPlayer123,
    cpuPlayer124,
    cpuPlayer125,
    cpuPlayer126,
    cpuPlayer127,
    cpuPlayer128,
    cpuPlayer129,
    cpuPlayer130,
    cpuPlayer131,
    cpuPlayer132,
    cpuPlayer133,
    cpuPlayer134,
    cpuPlayer135,
    cpuPlayer136,
    cpuPlayer137,
    cpuPlayer138,
    cpuPlayer139,
    cpuPlayer140,
    cpuPlayer141,
    cpuPlayer142,
    cpuPlayer143,
    cpuPlayer144,
    cpuPlayer145,
    cpuPlayer146,
    cpuPlayer147,
    cpuPlayer148,
    cpuPlayer149,
    cpuPlayer150,
    cpuPlayer151,
    cpuPlayer152,
    cpuPlayer153,
    cpuPlayer154,
    cpuPlayer155,
    cpuPlayer156,
    cpuPlayer157,
    cpuPlayer158,
    cpuPlayer159,
    cpuPlayer160,
    cpuPlayer161,
    cpuPlayer162,
    cpuPlayer163,
    cpuPlayer164,
    cpuPlayer165,
    cpuPlayer166,
    cpuPlayer167,
    cpuPlayer168,
    cpuPlayer169,
    cpuPlayer170,
    cpuPlayer171,
    cpuPlayer172,
    cpuPlayer173,
    cpuPlayer174,
    cpuPlayer175,
    cpuPlayer176,
    cpuPlayer177,
    cpuPlayer178,
    cpuPlayer179,
    cpuPlayer180,
    cpuPlayer181,
    cpuPlayer182,
    cpuPlayer183,
    cpuPlayer184,
    cpuPlayer185,
    cpuPlayer186,
    cpuPlayer187,
    cpuPlayer188,
    cpuPlayer189,
    cpuPlayer190,
    cpuPlayer191,
    cpuPlayer192,
    cpuPlayer193,
    cpuPlayer194,
    cpuPlayer195,
    cpuPlayer196,
    cpuPlayer197,
    cpuPlayer198,
    cpuPlayer199,
    cpuPlayer200,
    cpuPlayer201,
    cpuPlayer202,
    cpuPlayer203,
    cpuPlayer204,
    cpuPlayer205,
    cpuPlayer206,
    cpuPlayer207,
    cpuPlayer208,
    cpuPlayer209,
    cpuPlayer210,
    cpuPlayer211,
    cpuPlayer212,
    cpuPlayer213,
    cpuPlayer214,
    cpuPlayer215,
    cpuPlayer216,
    cpuPlayer217,
    cpuPlayer218,
    cpuPlayer219,
    cpuPlayer220,
    cpuPlayer221,
    cpuPlayer222,
    cpuPlayer223,
    cpuPlayer224,
    cpuPlayer225,
    cpuPlayer226,
    cpuPlayer227,
    cpuPlayer228,
    cpuPlayer229,
    cpuPlayer230,
    cpuPlayer231,
    cpuPlayer232,
    cpuPlayer233,
    cpuPlayer234,
    cpuPlayer235,
    cpuPlayer236,
    cpuPlayer237,
    cpuPlayer238,
    cpuPlayer239,
    cpuPlayer240,
    cpuPlayer241,
    cpuPlayer242,
    cpuPlayer243,
    cpuPlayer244,
    cpuPlayer245,
    cpuPlayer246,
    cpuPlayer247,
    cpuPlayer248,
    cpuPlayer249,
    cpuPlayer250,
    cpuPlayer251,
    cpuPlayer252,
    cpuPlayer253,
    cpuPlayer254,
    cpuPlayer255,
    cpuPlayer256,
    cpuPlayer257,
    cpuPlayer258,
    cpuPlayer259,
    cpuPlayer260,
    cpuPlayer261,
    cpuPlayer262,
    cpuPlayer263,
    cpuPlayer264,
    cpuPlayer265,
    cpuPlayer266,
    cpuPlayer267,
    cpuPlayer268,
    cpuPlayer269,
    cpuPlayer270
];
