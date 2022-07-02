package com.project.learningwiki.utils;

import com.project.learningwiki.answer.Answer;
import com.project.learningwiki.answer.AnswerRepository;
import com.project.learningwiki.chapter.Chapter;
import com.project.learningwiki.chapter.ChapterRepository;
import com.project.learningwiki.course.Course;
import com.project.learningwiki.course.CourseRepository;
import com.project.learningwiki.course_chapter.CourseChapter;
import com.project.learningwiki.course_chapter.CourseChapterRepository;
import com.project.learningwiki.marked_answer.MarkedAnswerRepository;
import com.project.learningwiki.mentoring.MentoringRepository;
import com.project.learningwiki.question.Question;
import com.project.learningwiki.question.QuestionRepository;
import com.project.learningwiki.solved_test.SolvedTestRepository;
import com.project.learningwiki.test.Test;
import com.project.learningwiki.test.TestRepository;
import com.project.learningwiki.user.UserRepository;
import com.project.learningwiki.video.Video;
import com.project.learningwiki.video.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Util {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private ChapterRepository chapterRepository;
    @Autowired
    private CourseChapterRepository courseChapterRepository;
    @Autowired
    private TestRepository testRepository;
    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private AnswerRepository answerRepository;
    @Autowired
    private VideoRepository videoRepository;
    @Autowired
    private SolvedTestRepository solvedTestRepository;
    @Autowired
    private MarkedAnswerRepository markedAnswerRepository;
    @Autowired
    private MentoringRepository mentoringRepository;

    public void insertFakeDataInDB() {

        // Clear the db
        courseChapterRepository.deleteAll();
        courseRepository.deleteAll();
        solvedTestRepository.deleteAll();
        mentoringRepository.deleteAll();
        testRepository.deleteAll();
        markedAnswerRepository.deleteAll();
        questionRepository.deleteAll();
        answerRepository.deleteAll();
        videoRepository.deleteAll();
        chapterRepository.deleteAll();

        Course matematica = courseRepository.save(new Course("matematica", "Materiale utile pentru clasele 9-12", "Matematica primara, clasele 5-8", "../img/matematica-logo.jpg"));
        Course informatica = courseRepository.save(new Course("informatica", "Materiale utile pentru clasele 9-12", "Operatii simple de matematica, logica", "../img/informatica-logo.jpg"));

        courseRepository.save(matematica);
        courseRepository.save(informatica);

        // Matematica - clasa a 9 a
        Chapter chapter1 = new Chapter("Multimi si elemente de logica matematica", "Operaţii" +
                " algebrice cu numere reale, ordonarea" +
                " numerelor reale, modulul unui număr real," +
                " aproximări prin lipsă sau prin adaos;" +
                " operaţii cu intervale de numere reale", "<div style=\"text-align: center\">\n" +
                "\n" +
                "<h2>Mulţimi şi elemente de logică matematică</h2>\n" +
                "\n" +
                "</div>\n" +
                "\n" +
                "<div style=\"text-align: left\">a) ELEMENTE DE LOGICĂ MATEMATICĂ </div>\n" +
                "\n" +
                "<div style=\"text-align: left\">\n" +
                "<br /> \n" +
                "DEF – Propoziția este un enunț ce poate fi adevărat sau fals. Proprietatea unei propoziții p de a fi ADEVĂRATĂ sau FALSĂ se numește VALOARE DE ADEVĂR-v(p).\n" +
                "<br /> \n" +
                "OBS Dacă propoziția p este adevărată atunci v(p)=1, iar dacă propoziția p este falsă atunci v(p)=0.\n" +
                "</div>\n" +
                "\n" +
                "----------\n" +
                "\n" +
                "<h5>OPERAȚII LOGICE ELEMENTARE CU PROPOZIȚII</h5>\n" +
                "\n" +
                "\n" +
                "NEGAȚIA propoziției p este propoziția non p ( non p este adevărată când p este falsă și falsă când p este adevărată). VEZI TABELUL DE ADEVĂR MAI JOS\n" +
                "\n" +
                "DISJUCȚIA  propozițiilor p,q este propoziția p sau q ( disjuncția este adevărată când cel puțin una din propoziții este adevărată). VEZI TABELUL DE ADEVĂR MAI JOS\n" +
                "\n" +
                "CONJUNCȚIA propozițiilor p,q este propoziția p și q ( conjuncția este adevărată când ambele propoziții sunt adevărate). VEZI TABELUL DE ADEVĂR MAI JOS\n" +
                "\n" +
                "IMPLICAȚIA propozițiilor p,q este propoziția p implică q ( implicația este falsă când p este adevărată și q este falsă, în rest este adevărată). VEZI TABELUL DE ADEVĂR MAI JOS\n" +
                "\n" +
                "ECHIVALENȚA propozițiilor p,q este propoziția p echivalent cu q ( echivalența este adevărată când ambele propoziții au aceeași valoare de adevăr). VEZI TABELUL DE ADEVĂR MAI JOS!\n" +
                "\n" +
                "TABELELE DE ADEVĂR pentru principalele operații  cu propoziții- negația, disjuncția, conjuncția, implicația și echivalența propozițiilor:\n" +
                "\n" +
                "<div style=\"text-align: center\">\n" +
                "\n" +
                "![](https://i0.wp.com/profesorjitaruionel.com/wp-content/uploads/2018/09/1.jpg?w=576&ssl=1g)\n" +
                "\n" +
                "</div>\n" +
                "\n" +
                "EXERCIȚII REZOLVATE:\n" +
                "\n" +
                "Pentru exercițiul 1, alcătuim un tabel de adevăr pentru alfa. Alfa este TAUTOLOGIE dacă ia valoarea de adevăr 1 pentru toate valorile de adevăr posibile date propozițiilor componente.\n" +
                "\n" +
                "<div style=\"text-align: center\">\n" +
                "\n" +
                "![](https://i0.wp.com/profesorjitaruionel.com/wp-content/uploads/2018/09/2.jpg?w=576&ssl=1)\n" +
                "\n" +
                "</div>\n" +
                "\n" +
                "B. INDUCȚIA MATEMATICĂ\n" +
                "\n" +
                "Fie P(n) o propoziție matematică care depinde de un număr natural n. Demonstrația prin metoda inducției matematice a propoziției P(n) se face în două etape:\n" +
                "\n" +
                "ETAPA DE VERIFICARE: Se verifică dacă propoziția P(m) este adevărată unde m este un număr natural fixat; De exemplu dacă n este un număr natural nenul o să faceți etapa de verificare pentru m=1, adică P(1).\n" +
                "\n" +
                "ETAPA DE DEMONSTRAȚIE: Se presupune că propoziția P(k) este adevărată și se demonstrează că P(k+1) este adevărată, unde k este mai mare sau egal cu m.\n" +
                "<br /> \n" +
                "EXERCIȚII REZOLVATE:\n" +
                "Să se demonstreze că:\n" +
                "\n" +
                "<div style=\"text-align: center\">\n" +
                "\n" +
                "![](https://i0.wp.com/profesorjitaruionel.com/wp-content/uploads/2018/09/3.jpg?w=576&ssl=1)\n" +
                "\n" +
                "![](https://i0.wp.com/profesorjitaruionel.com/wp-content/uploads/2018/09/4.jpg?w=576&ssl=1)\n" +
                "\n" +
                "![](https://i0.wp.com/profesorjitaruionel.com/wp-content/uploads/2018/09/5.jpg?w=576&ssl=1)\n" +
                "\n" +
                "</div>\n" +
                "\n" +
                "C. MULȚIMI. MULȚIMEA NUMERELOR REALE\n" +
                "+operații cu mulțimi(intersecția, reuniunea, diferența, produsul cartezian, egalitatea, incluziunea), cardinalul unei mulțimi, mulțimea R-modul, partea întreagă și partea fracționară:\n" +
                "\n" +
                "C.1 MULȚIMI:\n" +
                "\n" +
                "INCLUZIUNEA: A⊂B <=> ∀x∈A => x∈B;\n" +
                "EGALITATEA: A=B <=> A⊂B și B⊂A;\n" +
                "REUNIUNEA: A∪B={x/x∈A sau x∈B};\n" +
                "INTERSECȚIA: A∩B={x/x∈A și x∈B};\n" +
                "DIFERENȚA: A\\B={x/x∈A și x∉B};\n" +
                "PRODUSUL CARTEZIAN: AxB={(a,b)/a∈A și b∈B}.\n" +
                "DEF: CARDINALUL UNEI MULȚIMI finite A se notează card(A) și reprezintă numărul de elemente din mulțimea A.\n" +
                "\n" +
                "TEO: O mulțime A cu n elemente, unde n este număr natural, admite 2^n (2 la puterea n) SUBMULȚIMI!\n" +
                "\n" +
                "EX) Pentru A={2,6,9} și B={0,2,8,10} calculați A∪B, card(B), B∩A, B\\A și AxB. Câte submulțimi admite mulțimea B?\n" +
                "\n" +
                "R: A∪B={0,2,6,8,9,10}, card(B)=4; B∩A={2};  B\\A={0,8,10};\n" +
                "AxB={(2,0),(2,2),(2,8),(2,10),(6,0),(6,2),(6,8),(6,10),(9,0),(9,2),(9,8),(9,10)}.\n" +
                "Mulțimea B admite 2 la puterea 4 submulțimi =16 submilțimi.\n" +
                "\n" +
                "C.2 MODULUL sau VALOAREA ABSOLUTĂ A UNUI NUMĂR REAL\n" +
                "– definiție, notație, proprietăți și EXERCIȚII REZOLVATE:\n" +
                "\n" +
                "<div style=\"text-align: center\">\n" +
                "\n" +
                "![](https://i1.wp.com/profesorjitaruionel.com/wp-content/uploads/2018/09/modul1.jpg?w=679&ssl=1)\n" +
                "\n" +
                "![](https://i1.wp.com/profesorjitaruionel.com/wp-content/uploads/2018/09/modul2.jpg?w=680&ssl=1)\n" +
                "\n" +
                "![](https://i2.wp.com/profesorjitaruionel.com/wp-content/uploads/2018/09/modul3.jpg?w=680&ssl=1)\n" +
                "\n" +
                "</div>\n" +
                "\n" +
                "C.3 PARTEA ÎNTREAGĂ ȘI PARTEA FRACȚIONARĂ a unui număr real:\n" +
                "\n" +
                "<div style=\"text-align: center\">\n" +
                "\n" +
                "![](https://i0.wp.com/profesorjitaruionel.com/wp-content/uploads/2018/09/6.jpg?w=576&ssl=1)\n" +
                "\n" +
                "![](https://i0.wp.com/profesorjitaruionel.com/wp-content/uploads/2018/09/7.jpg?w=576&ssl=1)\n" +
                "\n" +
                "![](https://i0.wp.com/profesorjitaruionel.com/wp-content/uploads/2018/09/8.jpg?w=576&ssl=1)\n" +
                "\n" +
                "</div>\n" +
                "\n", 1);

        Chapter chapter2 = new Chapter("Siruri", "Modalităţi de a descrie un şir; şiruri" +
                " particulare: progresii aritmetice, progresii" +
                " geometrice, determinarea termenului" +
                " general al unei progresii; suma primilor n" +
                " termeni ai unei progresii", "content", 2);
        Chapter chapter3 = new Chapter("Functii", "Reper cartezian, produs cartezian, funcţia: definiţie, exemple, functii numerice", "content", 3);
        Chapter chapter4 = new Chapter("Functia de gradul 1", "Definiţie; reprezentarea grafică a funcţiei, interpretarea grafică, Inecuaţii de forma ax+b < 0, Poziţia relativă a două drepte", "content", 4);
        Chapter chapter5 = new Chapter("Functia de gradul al II-lea", "Reprezentarea grafică a funcţiei, Relaţiile lui Viète", "content", 5);
        Chapter chapter6 = new Chapter("Interpretarea geometrica a proprietatilor algebrice ale functiei de gradul al II-lea", "Monotonie; punct de extrem, Poziţionarea parabolei faţă de axa Ox, Poziţia relativă a unei drepte faţă de o " +
                "parabolă", "content", 6);
        Chapter chapter7 = new Chapter("Vectori in plan", "Segment orientat, vectori, vectori coliniari, Operaţii cu vectori, condiţia de coliniaritate, descompunerea după doi\n" +
                "vectori daţi, necoliniari şi nenuli", "content", 7);
        Chapter chapter8 = new Chapter("Coliniaritate, concurenţă, paralelism - calcul vectorial în geometria plană", "Vectorul de poziţie al unui punct, teorema lui Thales, Centrul de greutate", "content", 8);
        Chapter chapter9 = new Chapter("Trigonometrie şi aplicaţii ale trigonometriei în geometrie", "Rezolvarea triunghiului dreptunghic, Cercul trigonometric, Reducerea la primul cadran", "content", 9);

        chapterRepository.save(chapter1);
        chapterRepository.save(chapter2);
        chapterRepository.save(chapter3);
        chapterRepository.save(chapter4);
        chapterRepository.save(chapter5);
        chapterRepository.save(chapter6);
        chapterRepository.save(chapter7);
        chapterRepository.save(chapter8);
        chapterRepository.save(chapter9);

        // Matematica - clasa a 10-a
        Chapter chapter10 = new Chapter("Multimi de numere", "Proprietăţi ale puterilor cu exponent raţional, puteri cu exponent irational, logaritm", "content", 10);
        Chapter chapter11 = new Chapter("Functii si ecuatii", "Functia radical, functia exponentiala, rezolvari de ecuatii", "content", 11);
        Chapter chapter12 = new Chapter("Metode de numarare", "Permutari, aranjamente, combinari", "content", 12);
        Chapter chapter13 = new Chapter("Matematici financiare", "Probleme de numarare, elemente de calcul financiar", "content", 13);
        Chapter chapter14 = new Chapter("Geometrie", "Reper cartezian in plan, coordonate carteziene in plan, distanta dintre 2 puncte", "content", 14);

        chapterRepository.save(chapter10);
        chapterRepository.save(chapter11);
        chapterRepository.save(chapter12);
        chapterRepository.save(chapter13);
        chapterRepository.save(chapter14);

        // Matematica - clasa a 11-a
        Chapter chapter15 = new Chapter("Permutari", "Noţiunea de permutare, operaţii, proprietăţi, Inversiuni, semnul unei permutări", "content", 15);
        Chapter chapter16 = new Chapter("Matrice", "Tabel de tip matricial, operatii cu matrice", "content", 16);
        Chapter chapter17 = new Chapter("Determinanti", "Determinant de ordin n, proprietăţi, aplicatii", "content", 17);
        Chapter chapter18 = new Chapter("Sisteme de ecuatii liniare", "Matrice inversabile, sisteme liniare cu cel mult 4 necunoscute", "content", 18);
        Chapter chapter19 = new Chapter("Limite de functii", "Noţiuni elementare despre mulţimi de puncte, functii reale de variabila reala", "content", 19);
        Chapter chapter20 = new Chapter("Continuitate", "Interpretarea grafică a continuităţii unei funcţii", "content", 20);
        Chapter chapter21 = new Chapter("Derivabilitate", "Tangenta la o curbă, derivata unei funcţii într-un punct, funcţii derivabile", "content", 21);
        Chapter chapter22 = new Chapter("Reprezentarea grafica a functiilor", "Rezolvarea grafică a ecuaţiilor, utilizarea reprezentării grafice a funcţiilor", "content", 22);

        chapterRepository.save(chapter15);
        chapterRepository.save(chapter16);
        chapterRepository.save(chapter17);
        chapterRepository.save(chapter18);
        chapterRepository.save(chapter19);
        chapterRepository.save(chapter20);
        chapterRepository.save(chapter21);
        chapterRepository.save(chapter22);

        // Matematica - clasa a 12-a
        Chapter chapter23 = new Chapter("Grupuri", "Lege de compoziţie internă, aplicatii", "content", 23);
        Chapter chapter24 = new Chapter("Permutari", "Determinarea permutarilor, aplicatii", "content", 24);
        Chapter chapter25 = new Chapter("Inele si corpuri", "Inelul  Zn, reguli de calcul, morfisme de inele şi corpuri ", "content", 25);
        Chapter chapter26 = new Chapter("Inele de polinoame cu coeficienti intr-un corp comutativ", "Forma algebrică a unui polinom, funcţia polinomială asociată", "content", 26);
        Chapter chapter27 = new Chapter("Primitive", "Probleme care conduc la noţiunea de integrală, proprietăţi ale integralei nedefinite", "content", 27);
        Chapter chapter28 = new Chapter("Integrala definita", "Diviziuni ale unui interval [a,b]. Sume Riemann, interpretare geometrică.", "content", 28);
        Chapter chapter29 = new Chapter("Aplicatii ale integralei definite", "Exercitii si recapitulare", "content", 29);

        chapterRepository.save(chapter23);
        chapterRepository.save(chapter24);
        chapterRepository.save(chapter25);
        chapterRepository.save(chapter26);
        chapterRepository.save(chapter27);
        chapterRepository.save(chapter28);
        chapterRepository.save(chapter29);

        // Informatica - clasa a 9-a
        Chapter chapter30 = new Chapter("Operatii simple", "Elemente de baza ale limbajului", "<div style=\"text-align: center\">\n" +
                "\n" +
                "## Introducere în C++\n" +
                "\n" +
                "</div>\n" +
                "\n" +
                "Limbajul C++ a fost inventat de către Bjarne Stroustrup în 1979, ca o extindere a limbajului C. Limbajul C a fost inventat în 1969-1973 de către Dennis Ritchie pentru a realiza sistemul de operare Unix. Astfel, aproape toate programele scrise în C pot fi compilate în C++, eventual cu foarte puține modificări.\n" +
                "\n" +
                "## Limbaje de programare\n" +
                "\n" +
                "Limbajele de programare sunt limbaje asemănătoare cu limbajul uman. Conțin cuvinte (destul de puține), semne de punctuație, operații matematice și au reguli de scriere. Programele care rulează pe orice calculator au fost scrise într-un limbaj de programare. Există numeroase limbaje programare, precum C, C++, Pascal, Java, Python, PHP, Javascript, etc.\n" +
                "\n" +
                "Programul scris într-un limbaj de programare se numește program sursă și trebuie traduse într-un limbaj pe care îl înțelege procesorul, numit cod mașină, sau program executabil. Pentru anumite limbaje de programare operația de traducere se numește compilare (cazul lui C, C++, Pascal, etc.), pentru alte limbaje (PHP, Python, Javascript, etc.) operația de traducere se numește interpretare. Traducerea este realizată de un program specializat numit compilator sau interpretor.\n" +
                "\n" +
                "Limbajul C++ este un limbaj compilat. Etapele scrierii unui program în C++ sunt:\n" +
                "\n" +
                "- editarea programului C++; se obține fișierul sursă, cu extensia .cpp\n" +
                "- compilarea fișierului sursă; aici se verifică corectitudinea sintactică a programului (corectitudinea cuvintelor folosite, prezența semnelor de punctuație, etc.); dacă programul este corect sintactic, se va obține fișierul obiect, cu extensia .o sau .obj\n" +
                "- editarea de legături; se stabilesc legături între fișierul obiect curent și alte fișiere obiect, ale programatorului sau incluse în compilator; în urma acestei etape se obține programul executabil. În Windows, fișierele executabile au extensia .exe;\n" +
                "- programul executabil poate fi lansat în execuție (rulat).\n" +
                "## Primul program C++\n" +
                "Cum scriem un program C++? Avem nevoie cel puțin de un editor de text pentru scrierea sursei și de un compilator C++. Deși fișierul sursă poate fi realizat cu orice editor de text, de cel mai multe ori folosim un IDE. Un IDE pentru C/C++ foarte utilizat este Code::Blocks. Acest articol prezintă modul de instalare a pachetului Code::Blocks pe calculator, împreună cu compilatorul MinGW, iar acest articol prezintă pașii necesari pentru a realiza un program C++ în Code::Blocks.\n" +
                "\n" +
                "Să considerăm un prim program C++:\n" +
                "\n" +
                "![](https://i.ibb.co/T87Qp9C/a.png)\n" +
                "\n" +
                "Dacă vom compila și rula acest program, pe ecran va apărea: **Hello world**\n" +
                "\n" +
                "Să analizăm acest program. El este alcătuit din mai multe linii:\n" +
                "\n" +
                "- // priul program C++. Această linie reprezintă un comentariu. Comentariile sunt texte explicative care nu influențează comportamentul programului. Ele sunt pentru programatori, pentru a înțelege mai repede semnificația programului. Acest comentariu începe de la cele două caractere slash // și se termină la sfârșitul liniei.\n" +
                "- #include <iostream>\n" +
                "Liniile care încep cu # se numesc directive preprocesor. Ele sunt interpretate înainte de compilarea propriu-zisă, de către un program numit preprocesor. În cazul nostru, directiva #include cere preprocesorului să includă în sursă o secțiune a codului C++ standard, header-ul iostream, care permite realizarea operațiilor de citire și afișare – la noi afișarea mesajului Hello world pe ecran.\n" +
                "- int main()\n" +
                "Această linie reprezintă declararea unei funcții. În esență, o functie este un grup de instructiuni care un un nume dat; în acest caz, funcția se numește main și este alcătuită din toate instrucțiunile care urmează. Vom discuta pe larg despre functii mai târziu.\n" +
                "Funcția numită main este specială în toate programele C++; această funcție este apelată când se lansează în execuție programul și trebuie să apară în orice program C++.\n" +
                "- {\n" +
                "Parantezele acolade de la linia 4 și 10 delimitează instrucțiunile care fac parte din funcția main\n" +
                "/*\n" +
                "primul program C++\n" +
                "il scriem in Code::Blocks\n" +
                "*/\n" +
                "\n" +
                "Și acesta este un comentariu. Textele cuprinse între /* și */ nu influențează comportamentul programului. Ele pot să ocupe mai multe linii, sau pot să apară în interiorul unei linii.\n" +
                "- std :: cout << “Hello world”;\n" +
                "-Aceasta este o instrucțiune C++. O instrucțiune este o construcție (expresie, comandă) care face ceva. Instrucțiunile sunt “miezul” programelor, ele stabilind comportamentul acestora. Instrucțiunile dintr-un program se execută în ordine, una după alta.\n" +
                "Această instrucțiune produce afișarea pe ecran a atextului Hello world. Ea este alcătuită din trei părți. std::cout semnifică dispozitivul standard de ieșire (standard character output) – de cele mai multe ori ecranul calculatorului. A doua parte este operatorul de inserție <<, care indică faptul că ceea ce urmează este inserat în std::cout (trimis spre ecran). A treia parte este textul, \"Hello world\", cuprins între ghilimele, care va fi inserat în std::cout.\n" +
                "Să observăm prezența caracterului ; la sfârșitul instrucțiunii. Orice instructiune C++ trebuie să se termine cu ;, la fel cum orice propoziție în limba română se termină cu caracterul . (punct).\n" +
                "Una dintre cele mai frecvente erori de sintaxă este să uităm să scriem ; la finalul unei instrucțiuni.\n" +
                "- return 0;\n" +
                "Această instrucțiune marchează finalul execuției funcției main și a programului nostru. Valoarea 0 semnifica faptul că programul s-a încheiat cu succes!\n" +
                "Dacă în programul nostru ar fi fost și alte instrucțiuni după instrucțiunea return 0;, acestea nu s-ar mai fi executat.\n" +
                "- }\n" +
                "Acolada închisă } reprezintă finalul funcției main.\n" +
                "Să reținem că nu toate liniile programului produc ef\n" +
                "ecte la executarea programului. Unele linii (comentariile) sunt scrise numai pentru a ușura înțelegerea programului de către cel care îl citește/scrie. Mai mult, nu este obligatoriu ca fiecare instrucțiune să fie scrisă pe o singură linie. Următoarele trei exemple de funcție main au acelați efect:\n" +
                "\n" +
                "\n" +
                "![](https://i.ibb.co/0MvJ443/b.png)\n" +
                "\n" +
                "Să modificăm primul program, astfel încât să afișăm pe ecran două propoziții:\n" +
                "\n" +
                "\n" +
                "![](https://i.ibb.co/j5hN322/c.png)\n" +
                "\n" +
                "La rulare, programul va afișa: **Hello world! **\n" +
                "Primul program C++!Să observăm că cele doua propoziții sunt scrie pe același rând al ecranului, chiar dacă au fost scrise cu două instrucțiuni distincte. Dacă dorim ca cele doua propoziții să fie afișate pe linii diferite ale ecranului, folosim std::endl.\n" +
                "\n" +
                "\n" +
                "![](https://i.ibb.co/YkRjGCx/d.png)\n" +
                "\n" +
                "Acum, programul va afișa:\n" +
                "\n" +
                "Hello world! Primul program C++!\n" +
                "Instrucțiunea using namespace std;\n" +
                "În C++, identificatorii sunt grupați în spații de nume – namespaces. Există un spațiu de nume predefinit, cu numele std, din care fac parte toți identificatorii din biblioteca C++ standard.\n" +
                "\n" +
                "cout, ca și endl, este un identificator din spațiul de nume std și pentru a-l putea folosi trebuie folosită expresia std::cout. Pentru a ne referi mai simplu la identificatorii din spațiul de nume std se poate folosi instructiunea:\n" +
                "\n" +
                "\n" +
                "![](https://i.ibb.co/wQjW63M/e.png)\n" +
                "\n" +
                "Astfel, programul anterior poate fi rescris:\n" +
                "\n" +
                "\n" +
                "![](https://i.ibb.co/SszwtMB/f.png)\n" +
                "\n" +
                "Comentarii\n" +
                "Comentariile sunt texte care pot să apară în programul sursă și nu sunt luate în considerare la compilare. Ele sunt citite doar de către oameni, pentru a explica anumit secțiuni mai importante din program. Așa cum am văzut mai sus, în C++ sunt două tipuri de comentarii:\n" +
                "\n" +
                "- // comentariu pe o linie\n" +
                "\n" +
                "- /* comentariu de tip bloc */\n" +
                "Comentariul pe o linie începe de caracterele // și se termină la finalul liniei. Comentariul de tip bloc începe la /*, se termină la */ și se poate întinde pe mai multe linii.\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n", 1);

        Chapter chapter31 = new Chapter("Functii", "Elemente de baza ale limbajului", "content", 2);
        Chapter chapter32 = new Chapter("Algoritmi elementari", "Palindrom, divizibilitatea, nr. prime etc.", "content", 3);
        Chapter chapter33 = new Chapter("Tablouri unidimensionale", "Parcurgerea, sortarea, interclasarea vectorilor", "content", 4);
        Chapter chapter34 = new Chapter("Tablouri bidimensionale", "Parcurgerea, sortarea, interclasarea matricelor", "content", 5);

        chapterRepository.save(chapter30);
        chapterRepository.save(chapter31);
        chapterRepository.save(chapter32);
        chapterRepository.save(chapter33);
        chapterRepository.save(chapter34);

        // Informatica - clasa a 10-a
        Chapter chapter35 = new Chapter("Siruri de caractere", "Prelucrari elementare pe siruri de caractere", "content", 6);
        Chapter chapter36 = new Chapter("Subprograme", "Subprogramare care returneaza valori, prin parametri", "content", 7);
        Chapter chapter37 = new Chapter("Recursivitate", "Subprograme recursive, probleme diverse", "content", 8);
        Chapter chapter38 = new Chapter("Divide et Impera", "Aplicabilitatea metodei in probleme", "content", 9);
        Chapter chapter39 = new Chapter("Liste alocate dinamic", "Liste simple si dublu inlantuite", "content", 10);
        Chapter chapter40 = new Chapter("Combinatorica", "Permutari, combinari etc.", "content", 11);

        chapterRepository.save(chapter35);
        chapterRepository.save(chapter36);
        chapterRepository.save(chapter37);
        chapterRepository.save(chapter38);
        chapterRepository.save(chapter39);
        chapterRepository.save(chapter40);

        // Informatica - clasa a 11-a
        Chapter chapter41 = new Chapter("Backtracking", "Elemente de combinatorica, backracking in plan", "content", 12);
        Chapter chapter42 = new Chapter("Metoda Greedy", "Probleme diverse cu metoda Greedy", "content", 13);
        Chapter chapter43 = new Chapter("Programare dinamica", "Probleme de numarare, probleme diverse", "content", 14);
        Chapter chapter44 = new Chapter("Teoria grafurilor", "Algoritmi pe grafuri", "content", 15);
        Chapter chapter45 = new Chapter("Structuri de date arborescente", "Algoritmi pe arbori", "content", 16);
        Chapter chapter46 = new Chapter("Programare orientata pe obiecte", "Obiecte, clase, principii", "content", 17);

        chapterRepository.save(chapter41);
        chapterRepository.save(chapter42);
        chapterRepository.save(chapter43);
        chapterRepository.save(chapter44);
        chapterRepository.save(chapter45);
        chapterRepository.save(chapter46);

        // Informatica - clasa a 12-a
        Chapter chapter47 = new Chapter("Pregatire BAC", "Recapitulare clasele 9-11", "content", 18);
        Chapter chapter48 = new Chapter("Concursuri 2017", "Explicatii pas cu pas", "content", 19);
        Chapter chapter49 = new Chapter("Concursuri 2018", "Explicatii pas cu pas", "content", 20);
        Chapter chapter50 = new Chapter("Concursuri 2019", "Explicatii pas cu pas", "content", 21);
        Chapter chapter51 = new Chapter("Concursuri 2020", "Explicatii pas cu pas", "content", 22);
        Chapter chapter52 = new Chapter("Concursuri 2021", "Explicatii pas cu pas", "content", 23);
        Chapter chapter53 = new Chapter("Concursuri 2022", "Explicatii pas cu pas", "content", 24);

        chapterRepository.save(chapter47);
        chapterRepository.save(chapter48);
        chapterRepository.save(chapter49);
        chapterRepository.save(chapter50);
        chapterRepository.save(chapter51);
        chapterRepository.save(chapter52);
        chapterRepository.save(chapter53);

        courseChapterRepository.save(new CourseChapter(matematica, chapter1, 9));
        courseChapterRepository.save(new CourseChapter(matematica, chapter2, 9));
        courseChapterRepository.save(new CourseChapter(matematica, chapter3, 9));
        courseChapterRepository.save(new CourseChapter(matematica, chapter4, 9));
        courseChapterRepository.save(new CourseChapter(matematica, chapter5, 9));
        courseChapterRepository.save(new CourseChapter(matematica, chapter6, 9));
        courseChapterRepository.save(new CourseChapter(matematica, chapter7, 9));
        courseChapterRepository.save(new CourseChapter(matematica, chapter8, 9));
        courseChapterRepository.save(new CourseChapter(matematica, chapter9, 9));
        courseChapterRepository.save(new CourseChapter(matematica, chapter10, 10));
        courseChapterRepository.save(new CourseChapter(matematica, chapter11, 10));
        courseChapterRepository.save(new CourseChapter(matematica, chapter12, 10));
        courseChapterRepository.save(new CourseChapter(matematica, chapter13, 10));
        courseChapterRepository.save(new CourseChapter(matematica, chapter14, 10));
        courseChapterRepository.save(new CourseChapter(matematica, chapter15, 11));
        courseChapterRepository.save(new CourseChapter(matematica, chapter16, 11));
        courseChapterRepository.save(new CourseChapter(matematica, chapter17, 11));
        courseChapterRepository.save(new CourseChapter(matematica, chapter18, 11));
        courseChapterRepository.save(new CourseChapter(matematica, chapter19, 11));
        courseChapterRepository.save(new CourseChapter(matematica, chapter20, 11));
        courseChapterRepository.save(new CourseChapter(matematica, chapter21, 11));
        courseChapterRepository.save(new CourseChapter(matematica, chapter22, 11));
        courseChapterRepository.save(new CourseChapter(matematica, chapter23, 12));
        courseChapterRepository.save(new CourseChapter(matematica, chapter24, 12));
        courseChapterRepository.save(new CourseChapter(matematica, chapter25, 12));
        courseChapterRepository.save(new CourseChapter(matematica, chapter26, 12));
        courseChapterRepository.save(new CourseChapter(matematica, chapter27, 12));
        courseChapterRepository.save(new CourseChapter(matematica, chapter28, 12));
        courseChapterRepository.save(new CourseChapter(matematica, chapter29, 12));


        courseChapterRepository.save(new CourseChapter(informatica, chapter30, 9));
        courseChapterRepository.save(new CourseChapter(informatica, chapter31, 9));
        courseChapterRepository.save(new CourseChapter(informatica, chapter32, 9));
        courseChapterRepository.save(new CourseChapter(informatica, chapter33, 9));
        courseChapterRepository.save(new CourseChapter(informatica, chapter34, 9));

        courseChapterRepository.save(new CourseChapter(informatica, chapter35, 10));
        courseChapterRepository.save(new CourseChapter(informatica, chapter36, 10));
        courseChapterRepository.save(new CourseChapter(informatica, chapter37, 10));
        courseChapterRepository.save(new CourseChapter(informatica, chapter38, 10));
        courseChapterRepository.save(new CourseChapter(informatica, chapter39, 10));
        courseChapterRepository.save(new CourseChapter(informatica, chapter40, 10));

        courseChapterRepository.save(new CourseChapter(informatica, chapter41, 11));
        courseChapterRepository.save(new CourseChapter(informatica, chapter42, 11));
        courseChapterRepository.save(new CourseChapter(informatica, chapter43, 11));
        courseChapterRepository.save(new CourseChapter(informatica, chapter44, 11));
        courseChapterRepository.save(new CourseChapter(informatica, chapter45, 11));
        courseChapterRepository.save(new CourseChapter(informatica, chapter46, 11));

        courseChapterRepository.save(new CourseChapter(informatica, chapter47, 12));
        courseChapterRepository.save(new CourseChapter(informatica, chapter48, 12));
        courseChapterRepository.save(new CourseChapter(informatica, chapter49, 12));
        courseChapterRepository.save(new CourseChapter(informatica, chapter50, 12));
        courseChapterRepository.save(new CourseChapter(informatica, chapter51, 12));
        courseChapterRepository.save(new CourseChapter(informatica, chapter52, 12));
        courseChapterRepository.save(new CourseChapter(informatica, chapter53, 12));

        Answer answer1 = new Answer("<img src=\"https://i.ibb.co/sQFM5kK/bb.png\" alt=\"bb\" border=\"0\">");
        Answer answer2 = new Answer("2");
        Answer answer3 = new Answer("<img src=\"https://i.ibb.co/FzmDzvw/cc.png\" alt=\"cc\" border=\"0\">");
        Answer answer4 = new Answer("-3");

        Answer answer5 = new Answer("-3");
        Answer answer6 = new Answer("1");
        Answer answer7 = new Answer("0");
        Answer answer8 = new Answer("2");

        Answer answer9 = new Answer("0.5");
        Answer answer10 = new Answer("2");
        Answer answer11 = new Answer("5");
        Answer answer12 = new Answer("-3");

        Answer answer13 = new Answer("-2");
        Answer answer14 = new Answer("-1");
        Answer answer15 = new Answer("3");
        Answer answer16 = new Answer("1");

        List<Answer> answers1 = List.of(answer1, answer2, answer3, answer4);
        List<Answer> answers2 = List.of(answer5, answer6, answer7, answer8);
        List<Answer> answers3 = List.of(answer9, answer10, answer11, answer12);
        List<Answer> answers4 = List.of(answer13, answer14, answer15, answer16);


        Answer answer17 = new Answer("<img src=\"https://i.ibb.co/V2B6FPW/1.png\" alt=\"rasp1\" border=\"0\">");
        Answer answer18 = new Answer("<img src=\"https://i.ibb.co/V2B6FPW/1.png\" alt=\"rasp2\" border=\"0\">");
        Answer answer19 = new Answer("<img src=\"https://i.ibb.co/V2B6FPW/1.png\" alt=\"rasp3\" border=\"0\">");
        Answer answer20 = new Answer("<img src=\"https://i.ibb.co/V2B6FPW/1.png\" alt=\"rasp4\" border=\"0\">");

        Answer answer21 = new Answer("<img src=\"https://i.ibb.co/V2B6FPW/1.png\" alt=\"rasp1\" border=\"0\">");
        Answer answer22 = new Answer("<img src=\"https://i.ibb.co/V2B6FPW/1.png\" alt=\"rasp2\" border=\"0\">");
        Answer answer23 = new Answer("<img src=\"https://i.ibb.co/V2B6FPW/1.png\" alt=\"rasp3\" border=\"0\">");
        Answer answer24 = new Answer("<img src=\"https://i.ibb.co/V2B6FPW/1.png\" alt=\"rasp4\" border=\"0\">");

        Answer answer25 = new Answer("<img src=\"https://i.ibb.co/V2B6FPW/1.png\" alt=\"rasp1\" border=\"0\">");
        Answer answer26 = new Answer("<img src=\"https://i.ibb.co/V2B6FPW/1.png\" alt=\"rasp2\" border=\"0\">");
        Answer answer27 = new Answer("<img src=\"https://i.ibb.co/V2B6FPW/1.png\" alt=\"rasp3\" border=\"0\">");
        Answer answer28 = new Answer("<img src=\"https://i.ibb.co/V2B6FPW/1.png\" alt=\"rasp4\" border=\"0\">");

        Answer answer29 = new Answer("<img src=\"https://i.ibb.co/V2B6FPW/1.png\" alt=\"rasp1\" border=\"0\">");
        Answer answer30 = new Answer("<img src=\"https://i.ibb.co/V2B6FPW/1.png\" alt=\"rasp2\" border=\"0\">");
        Answer answer31 = new Answer("<img src=\"https://i.ibb.co/V2B6FPW/1.png\" alt=\"rasp3\" border=\"0\">");
        Answer answer32 = new Answer("<img src=\"https://i.ibb.co/V2B6FPW/1.png\" alt=\"rasp4\" border=\"0\">");

        List<Answer> answers5 = List.of(answer17, answer18, answer19, answer20);
        List<Answer> answers6 = List.of(answer21, answer22, answer23, answer24);
        List<Answer> answers7 = List.of(answer25, answer26, answer27, answer28);
        List<Answer> answers8 = List.of(answer29, answer30, answer31, answer32);

        Question question1 = new Question("<img src=\"https://i.ibb.co/FBpFpRf/aa.png\" alt=\"aa\" border=\"0\">", answers1, chapter1, 2);
        Question question2 = new Question("<img src=\"https://i.ibb.co/HnKyzZS/q2.png\" alt=\"q2\" border=\"0\">", answers2, chapter2, 3);
        Question question3 = new Question("<img src=\"https://i.ibb.co/QYPLvsK/q3.png\" alt=\"q3\" border=\"0\">", answers3, chapter3, 1);
        Question question4 = new Question("<img src=\"https://i.ibb.co/kqRW66k/q4.png\" alt=\"q4\" border=\"0\">", answers4, chapter1, 0);

        Question question5 = new Question("<img src=\"https://i.ibb.co/YcFdbGG/Screenshot-2.png\" alt=\"Screenshot-2\" border=\"0\">", answers5, chapter30, 0);
        Question question6 = new Question("<img src=\"https://i.ibb.co/rx68MJs/matrice.png\" alt=\"matrice\" border=\"0\">", answers6, chapter31, 0);
        Question question7 = new Question("<img src=\"https://i.ibb.co/rx68MJs/matrice.png\" alt=\"matrice\" border=\"0\">", answers7, chapter32, 0);
        Question question8 = new Question("<img src=\"https://i.ibb.co/rx68MJs/matrice.png\" alt=\"matrice\" border=\"0\">", answers8, chapter30, 0);


        Answer answer10a = new Answer("7");
        Answer answer10b = new Answer("8");
        Answer answer10c = new Answer("12");
        Answer answer10d = new Answer("40320");

        Answer answer11a = new Answer("5, 4, 2, 1, 3");
        Answer answer11b = new Answer("2, 1, 0, 3, 4");
        Answer answer11c = new Answer("0, 2, 4, 5, 0");
        Answer answer11d = new Answer("2, 4, 0, 3, 4");

        Answer answer12a = new Answer("2345");
        Answer answer12b = new Answer("6!");
        Answer answer12c = new Answer("5120");
        Answer answer12d = new Answer("256");

        Answer answer13a = new Answer("5, 6, 7, 9, 10");
        Answer answer13b = new Answer("4, 5, 6, 7, 8, 9, 10");
        Answer answer13c = new Answer("4, 5, 6");
        Answer answer13d = new Answer("5, 6, 7");

        List<Answer> answers10 = List.of(answer10a, answer10b, answer10c, answer10d);
        List<Answer> answers11 = List.of(answer11a, answer11b, answer11c, answer11d);
        List<Answer> answers12 = List.of(answer12a, answer12b, answer12c, answer12d);
        List<Answer> answers13 = List.of(answer13a, answer13b, answer13c, answer13d);

        Question question10 = new Question("<img src=\"https://i.ibb.co/Hgnzvbk/q10.png\" alt=\"q10\" border=\"0\">", answers10, chapter44, 1);
        Question question11 = new Question("<img src=\"https://i.ibb.co/XSY3fG2/q11.png\" alt=\"q11\" border=\"0\">", answers11, chapter44, 3);
        Question question12 = new Question("<img src=\"https://i.ibb.co/BBVMnrR/q12.png\" alt=\"q12\" border=\"0\">", answers12, chapter45, 2);
        Question question13 = new Question("<img src=\"https://i.ibb.co/9cF5zHk/q13.png\" alt=\"q13\" border=\"0\">", answers13, chapter45, 0);

        questionRepository.save(question1);
        questionRepository.save(question2);
        questionRepository.save(question3);
        questionRepository.save(question4);

        questionRepository.save(question5);
        questionRepository.save(question6);
        questionRepository.save(question7);
        questionRepository.save(question8);

        questionRepository.save(question10);
        questionRepository.save(question11);
        questionRepository.save(question12);
        questionRepository.save(question13);

        testRepository.save(new Test("Test 1", 9, "matematica", List.of(chapter1, chapter2, chapter3), List.of(question1, question2, question3, question4)));
        testRepository.save(new Test("Test 2", 9, "matematica", List.of(chapter6), List.of(question1, question2, question3, question4)));
        testRepository.save(new Test("Test 3", 9, "matematica", List.of(chapter7, chapter8), List.of(question1, question2, question3, question4)));
        testRepository.save(new Test("Test 4", 10, "matematica", List.of(chapter10, chapter11, chapter12), List.of(question1, question2, question3, question4)));
        testRepository.save(new Test("Test 5", 10, "matematica", List.of(chapter10, chapter14), List.of(question1, question2, question3, question4)));
        testRepository.save(new Test("Test 6", 10, "matematica", List.of(chapter12, chapter13, chapter4), List.of(question1, question2, question3, question4)));
        testRepository.save(new Test("Test 7", 11, "matematica", List.of(chapter15, chapter16, chapter22), List.of(question1, question2, question3, question4)));
        testRepository.save(new Test("Test 8", 11, "matematica", List.of(chapter17, chapter18, chapter19), List.of(question1, question2, question3, question4)));
        testRepository.save(new Test("Test 9", 11, "matematica", List.of(chapter19, chapter21, chapter22), List.of(question1, question2, question3, question4)));
        testRepository.save(new Test("Test 10", 12, "matematica", List.of(chapter23, chapter28, chapter29), List.of(question1, question2, question3, question4)));
        testRepository.save(new Test("Test 11", 12, "matematica", List.of(chapter24, chapter26, chapter28), List.of(question1, question2, question3, question4)));
        testRepository.save(new Test("Test 12", 12, "matematica", List.of(chapter25, chapter26, chapter28), List.of(question1, question2, question3, question4)));

        testRepository.save(new Test("Test 1", 9, "informatica", List.of(chapter30, chapter31, chapter32), List.of(question5, question6, question7, question8)));
        testRepository.save(new Test("Test 2", 9, "informatica", List.of(chapter30, chapter32, chapter33), List.of(question5, question6, question7, question8)));
        testRepository.save(new Test("Test 3", 9, "informatica", List.of(chapter31, chapter32, chapter34), List.of(question5, question6, question7, question8)));
        testRepository.save(new Test("Test 4", 10, "informatica", List.of(chapter35), List.of(question5, question6, question7, question8)));
        testRepository.save(new Test("Test 5", 10, "informatica", List.of(chapter35, chapter36, chapter40), List.of(question5, question6, question7, question8)));
        testRepository.save(new Test("Test 6", 10, "informatica", List.of(chapter36, chapter38, chapter39), List.of(question5, question6, question7, question8)));
        testRepository.save(new Test("Test 7", 11, "informatica", List.of(chapter41, chapter42, chapter46), List.of(question5, question6, question7, question8)));
        testRepository.save(new Test("Test 8", 11, "informatica", List.of(chapter42, chapter43, chapter45), List.of(question5, question6, question7, question8)));
        testRepository.save(new Test("Test 9", 11, "informatica", List.of(chapter44, chapter45), List.of(question10, question11, question12, question13)));
        testRepository.save(new Test("Test 10", 12, "informatica", List.of(chapter47, chapter53), List.of(question5, question6, question7, question8)));
        testRepository.save(new Test("Test 11", 12, "informatica", List.of(chapter48, chapter49, chapter51), List.of(question5, question6, question7, question8)));
        testRepository.save(new Test("Test 12", 12, "informatica", List.of(chapter51, chapter52, chapter53), List.of(question5, question6, question7, question8)));


        Video video1 = new Video("Mulţimi şi elemente de logică matematică", 9, "matematica", "Elemente de logica matematica", "https://www.youtube.com/watch?v=gsi6QeziTcM");
        Video video2 = new Video("Siruri", 9, "matematica", "Modalitati de a defini un sir, siruri marginite, siruri monotone", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video3 = new Video("Functii", 9, "matematica", "Reper cartezian, definitie, exemple", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video4 = new Video("Multimi de numere", 10, "matematica", "Proprietati ale puterilor, radical, logaritm", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video5 = new Video("Functii si ecuatii", 10, "matematica", "Functia putere, rezolvarea ectuatiilor", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video6 = new Video("Geometrie", 10, "matematica", "Reper cartezian in plan, coordonatele unui vector in plan", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video7 = new Video("Permutari", 11, "matematica", "Inversiuni, operatii, proprietati", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video8 = new Video("Matrice", 11, "matematica", "Tabel de tip matricial, oepratii pe matrice", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video9 = new Video("Determinanti", 11, "matematica", "Determinant de ordin n", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video10 = new Video("Grupuri", 12, "matematica", "Proprietati, utilizarea structurilor algebrice", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video11 = new Video("Inele si corpuri", 12, "matematica", "Reguli de calcul, morfisme de inele si corpuri", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video12 = new Video("Integrale", 12, "matematica", "Integrala definita, metode de calcul ale integralelor", "https://www.youtube.com/watch?v=ysz5S6PUM-U");

        videoRepository.save(video1);
        videoRepository.save(video2);
        videoRepository.save(video3);
        videoRepository.save(video4);
        videoRepository.save(video5);
        videoRepository.save(video6);
        videoRepository.save(video7);
        videoRepository.save(video8);
        videoRepository.save(video9);
        videoRepository.save(video10);
        videoRepository.save(video11);
        videoRepository.save(video12);

        Video video13 = new Video("Operatii simple", 9, "informatica", "Elemente de baza ale limbajului", "https://www.youtube.com/watch?v=Lnd_9A7reuI&ab_channel=RTVGala%C5%A3i-Br%C4%83ila");
        Video video14 = new Video("Functii", 9, "informatica", "Algoritmi elementari", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video15 = new Video("Tablouri unidimensionale", 9, "informatica", "Parcurgerea, sortarea, interclasarea vectorilor", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video16 = new Video("Siruri de caractere", 10, "informatica", "Prelucrari elementare pe siruri de caractere", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video17 = new Video("Subprograme", 10, "informatica", "Subprogramare care returneaza valori, prin parametri", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video18 = new Video("Recursivitate", 10, "informatica", "Subprograme recursive, probleme diverse", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video19 = new Video("Backtracking", 11, "informatica", "Elemente de combinatorica, backracking in plan", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video20 = new Video("Metoda greedy", 11, "informatica", "Probleme diverse cu metoda Greedy", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video21 = new Video("Programare dinamica", 11, "informatica", "Probleme de numarare, probleme diverse", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video22 = new Video("Pregatire BAC", 12, "informatica", "Recapitulare clasele 9-11", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video23 = new Video("Concursuri", 12, "informatica", "Concursurile nationale din anii 2018-2022", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video24 = new Video("Olimpiade", 12, "informatica", "Olimpiadele din anii 2012-2022", "https://www.youtube.com/watch?v=ysz5S6PUM-U");

        videoRepository.save(video13);
        videoRepository.save(video14);
        videoRepository.save(video15);
        videoRepository.save(video16);
        videoRepository.save(video17);
        videoRepository.save(video18);
        videoRepository.save(video19);
        videoRepository.save(video20);
        videoRepository.save(video21);
        videoRepository.save(video22);
        videoRepository.save(video23);
        videoRepository.save(video24);
    }
}
