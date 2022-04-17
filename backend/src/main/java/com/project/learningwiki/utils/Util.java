package com.project.learningwiki.utils;

import com.project.learningwiki.chapter.Chapter;
import com.project.learningwiki.chapter.ChapterRepository;
import com.project.learningwiki.course.Course;
import com.project.learningwiki.course.CourseRepository;
import com.project.learningwiki.course_chapter.CourseChapter;
import com.project.learningwiki.course_chapter.CourseChapterRepository;
import com.project.learningwiki.progress.Progress;
import com.project.learningwiki.progress.ProgressRepository;
import com.project.learningwiki.user.User;
import com.project.learningwiki.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Util {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private ChapterRepository chapterRepository;
    @Autowired
    private ProgressRepository progressRepository;
    @Autowired
    private CourseChapterRepository courseChapterRepository;

    public void insertFakeDataInDB() {

        // Clear the db
        courseChapterRepository.deleteAll();
        progressRepository.deleteAll();
        courseRepository.deleteAll();
        progressRepository.deleteAll();


        Course matematica = courseRepository.save(new Course("matematica", "Materiale utile pentru clasele 9-12", "Matematica primara, clasele 5-8", "../img/matematica-logo.jpg"));
        Course informatica = courseRepository.save(new Course("informatica", "Materiale utile pentru clasele 9-12", "Operatii simple de matematica, logica", "../img/informatica-logo.jpg"));

        courseRepository.save(matematica);
        courseRepository.save(informatica);

        // Matematica - clasa a 9 a
        Chapter chapter1 = new Chapter("Multimi si elemente de logica matematica", "Operaţii" +
                " algebrice cu numere reale, ordonarea" +
                " numerelor reale, modulul unui număr real," +
                " aproximări prin lipsă sau prin adaos;" +
                " operaţii cu intervale de numere reale", "content", null);
        Chapter chapter2 = new Chapter("Siruri", "Modalităţi de a descrie un şir; şiruri" +
                " particulare: progresii aritmetice, progresii" +
                " geometrice, determinarea termenului" +
                " general al unei progresii; suma primilor n" +
                " termeni ai unei progresii", "content", null);
        Chapter chapter3 = new Chapter("Functii; lecturi grafice", "Reper cartezian, produs cartezian, funcţia: definiţie, exemple, functii numerice",  "content", null);
        Chapter chapter4 = new Chapter("Functia de gradul 1", "Definiţie; reprezentarea grafică a funcţiei, interpretarea grafică, Inecuaţii de forma ax+b < 0, Poziţia relativă a două drepte", "content", null);
        Chapter chapter5 = new Chapter("Functia de gradul al II-lea", "Reprezentarea grafică a funcţiei, Relaţiile lui Viète",  "content", null);
        Chapter chapter6 = new Chapter("Interpretarea geometrica a proprietatilor algebrice ale functiei de gradul al II-lea", "Monotonie; punct de extrem, Poziţionarea parabolei faţă de axa Ox, Poziţia relativă a unei drepte faţă de o " +
                "parabolă", "content", null);
        Chapter chapter7 = new Chapter("Vectori in plan", "Segment orientat, vectori, vectori coliniari, Operaţii cu vectori, condiţia de coliniaritate, descompunerea după doi\n" +
                "vectori daţi, necoliniari şi nenuli", "content", null);
        Chapter chapter8 = new Chapter("Coliniaritate, concurenţă, paralelism - calcul vectorial în geometria plană", "Vectorul de poziţie al unui punct, teorema lui Thales, Centrul de greutate", "content", null);
        Chapter chapter9 = new Chapter("Trigonometrie şi aplicaţii ale trigonometriei în geometrie", "Rezolvarea triunghiului dreptunghic, Cercul trigonometric, Reducerea la primul cadran", "content", null);

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
        Chapter chapter10 = new Chapter("Multimi de numere", "","content", null);
        Chapter chapter11 = new Chapter("Functii si ecuatii", "","content", null);
        Chapter chapter12 = new Chapter("Metode de numarare", "","content", null);
        Chapter chapter13 = new Chapter("Matematici financiare", "","content", null);
        Chapter chapter14 = new Chapter("Geometrie", "","content", null);

        chapterRepository.save(chapter10);
        chapterRepository.save(chapter11);
        chapterRepository.save(chapter12);
        chapterRepository.save(chapter13);
        chapterRepository.save(chapter14);

        // Matematica - clasa a 11-a
        Chapter chapter15 = new Chapter("Permutari", "","content", null);
        Chapter chapter16 = new Chapter("Matrice", "","content", null);
        Chapter chapter17 = new Chapter("Determinanti", "","content", null);
        Chapter chapter18 = new Chapter("Sisteme de ecuatii liniare", "","content", null);
        Chapter chapter19 = new Chapter("Limite de functii", "","content", null);
        Chapter chapter20 = new Chapter("Continuitate", "","content", null);
        Chapter chapter21 = new Chapter("Derivabilitate", "","content", null);
        Chapter chapter22 = new Chapter("Reprezentarea grafica a functiilor", "","content", null);

        chapterRepository.save(chapter15);
        chapterRepository.save(chapter16);
        chapterRepository.save(chapter17);
        chapterRepository.save(chapter18);
        chapterRepository.save(chapter19);
        chapterRepository.save(chapter20);
        chapterRepository.save(chapter21);
        chapterRepository.save(chapter22);

        // Matematica - clasa a 12-a
        Chapter chapter23 = new Chapter("Grupuri", "","content", null);
        Chapter chapter24 = new Chapter("Permutari", "","content", null);
        Chapter chapter25 = new Chapter("Inele si corpuri", "","content", null);
        Chapter chapter26 = new Chapter("Inele de polinoame cu coeficienti intr-un corp comutativ", "","content", null);
        Chapter chapter27 = new Chapter("Primitive", "","content", null);
        Chapter chapter28 = new Chapter("Integrala definita", "","content", null);
        Chapter chapter29 = new Chapter("Aplicatii ale integralei definite", "","content", null);

        chapterRepository.save(chapter23);
        chapterRepository.save(chapter24);
        chapterRepository.save(chapter25);
        chapterRepository.save(chapter26);
        chapterRepository.save(chapter27);
        chapterRepository.save(chapter28);
        chapterRepository.save(chapter29);

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

        User user = userRepository.findByEmail("patrascoiu.ion.radu@gmail.com");

        if (user != null) {
            Progress progress = progressRepository.save(new Progress(user, matematica, "un progres f bun"));
            progressRepository.save(progress);
        }
    }
}
