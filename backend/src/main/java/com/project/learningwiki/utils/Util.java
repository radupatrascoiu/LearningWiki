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
import com.project.learningwiki.progress.Progress;
import com.project.learningwiki.progress.ProgressRepository;
import com.project.learningwiki.question.Question;
import com.project.learningwiki.question.QuestionRepository;
import com.project.learningwiki.solved_test.SolvedTestRepository;
import com.project.learningwiki.test.Test;
import com.project.learningwiki.test.TestRepository;
import com.project.learningwiki.user.User;
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
    private ProgressRepository progressRepository;
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
        progressRepository.deleteAll();
        courseRepository.deleteAll();
        progressRepository.deleteAll();
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
                " operaţii cu intervale de numere reale", "content");
        Chapter chapter2 = new Chapter("Siruri", "Modalităţi de a descrie un şir; şiruri" +
                " particulare: progresii aritmetice, progresii" +
                " geometrice, determinarea termenului" +
                " general al unei progresii; suma primilor n" +
                " termeni ai unei progresii", "content");
        Chapter chapter3 = new Chapter("Functii; lecturi grafice", "Reper cartezian, produs cartezian, funcţia: definiţie, exemple, functii numerice", "content");
        Chapter chapter4 = new Chapter("Functia de gradul 1", "Definiţie; reprezentarea grafică a funcţiei, interpretarea grafică, Inecuaţii de forma ax+b < 0, Poziţia relativă a două drepte", "content");
        Chapter chapter5 = new Chapter("Functia de gradul al II-lea", "Reprezentarea grafică a funcţiei, Relaţiile lui Viète", "content");
        Chapter chapter6 = new Chapter("Interpretarea geometrica a proprietatilor algebrice ale functiei de gradul al II-lea", "Monotonie; punct de extrem, Poziţionarea parabolei faţă de axa Ox, Poziţia relativă a unei drepte faţă de o " +
                "parabolă", "content");
        Chapter chapter7 = new Chapter("Vectori in plan", "Segment orientat, vectori, vectori coliniari, Operaţii cu vectori, condiţia de coliniaritate, descompunerea după doi\n" +
                "vectori daţi, necoliniari şi nenuli", "content");
        Chapter chapter8 = new Chapter("Coliniaritate, concurenţă, paralelism - calcul vectorial în geometria plană", "Vectorul de poziţie al unui punct, teorema lui Thales, Centrul de greutate", "content");
        Chapter chapter9 = new Chapter("Trigonometrie şi aplicaţii ale trigonometriei în geometrie", "Rezolvarea triunghiului dreptunghic, Cercul trigonometric, Reducerea la primul cadran", "content");

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
        Chapter chapter10 = new Chapter("Multimi de numere", "", "content");
        Chapter chapter11 = new Chapter("Functii si ecuatii", "", "content");
        Chapter chapter12 = new Chapter("Metode de numarare", "", "content");
        Chapter chapter13 = new Chapter("Matematici financiare", "", "content");
        Chapter chapter14 = new Chapter("Geometrie", "", "content");

        chapterRepository.save(chapter10);
        chapterRepository.save(chapter11);
        chapterRepository.save(chapter12);
        chapterRepository.save(chapter13);
        chapterRepository.save(chapter14);

        // Matematica - clasa a 11-a
        Chapter chapter15 = new Chapter("Permutari", "", "content");
        Chapter chapter16 = new Chapter("Matrice", "", "content");
        Chapter chapter17 = new Chapter("Determinanti", "", "content");
        Chapter chapter18 = new Chapter("Sisteme de ecuatii liniare", "", "content");
        Chapter chapter19 = new Chapter("Limite de functii", "", "content");
        Chapter chapter20 = new Chapter("Continuitate", "", "content");
        Chapter chapter21 = new Chapter("Derivabilitate", "", "content");
        Chapter chapter22 = new Chapter("Reprezentarea grafica a functiilor", "", "content");

        chapterRepository.save(chapter15);
        chapterRepository.save(chapter16);
        chapterRepository.save(chapter17);
        chapterRepository.save(chapter18);
        chapterRepository.save(chapter19);
        chapterRepository.save(chapter20);
        chapterRepository.save(chapter21);
        chapterRepository.save(chapter22);

        // Matematica - clasa a 12-a
        Chapter chapter23 = new Chapter("Grupuri", "", "content");
        Chapter chapter24 = new Chapter("Permutari", "", "content");
        Chapter chapter25 = new Chapter("Inele si corpuri", "", "content");
        Chapter chapter26 = new Chapter("Inele de polinoame cu coeficienti intr-un corp comutativ", "", "content");
        Chapter chapter27 = new Chapter("Primitive", "", "content");
        Chapter chapter28 = new Chapter("Integrala definita", "", "content");
        Chapter chapter29 = new Chapter("Aplicatii ale integralei definite", "", "content");

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

        Answer answer1 = new Answer("<img src=\"https://i.ibb.co/hVbYPxx/rasp1.png\" alt=\"rasp1\" border=\"0\">");
        Answer answer2 = new Answer("<img src=\"https://i.ibb.co/PT224yN/rasp2.png\" alt=\"rasp2\" border=\"0\">");
        Answer answer3 = new Answer("<img src=\"https://i.ibb.co/QJ3grBh/rasp3.png\" alt=\"rasp3\" border=\"0\">");
        Answer answer4 = new Answer("<img src=\"https://i.ibb.co/T8xnSyK/rasp4.png\" alt=\"rasp4\" border=\"0\">");

        Answer answer5 = new Answer("<img src=\"https://i.ibb.co/hVbYPxx/rasp1.png\" alt=\"rasp1\" border=\"0\">");
        Answer answer6 = new Answer("<img src=\"https://i.ibb.co/PT224yN/rasp2.png\" alt=\"rasp2\" border=\"0\">");
        Answer answer7 = new Answer("<img src=\"https://i.ibb.co/QJ3grBh/rasp3.png\" alt=\"rasp3\" border=\"0\">");
        Answer answer8 = new Answer("<img src=\"https://i.ibb.co/T8xnSyK/rasp4.png\" alt=\"rasp4\" border=\"0\">");

        Answer answer9 = new Answer("<img src=\"https://i.ibb.co/hVbYPxx/rasp1.png\" alt=\"rasp1\" border=\"0\">");
        Answer answer10 = new Answer("<img src=\"https://i.ibb.co/PT224yN/rasp2.png\" alt=\"rasp2\" border=\"0\">");
        Answer answer11 = new Answer("<img src=\"https://i.ibb.co/QJ3grBh/rasp3.png\" alt=\"rasp3\" border=\"0\">");
        Answer answer12 = new Answer("<img src=\"https://i.ibb.co/T8xnSyK/rasp4.png\" alt=\"rasp4\" border=\"0\">");

        Answer answer13 = new Answer("<img src=\"https://i.ibb.co/hVbYPxx/rasp1.png\" alt=\"rasp1\" border=\"0\">");
        Answer answer14 = new Answer("<img src=\"https://i.ibb.co/PT224yN/rasp2.png\" alt=\"rasp2\" border=\"0\">");
        Answer answer15 = new Answer("<img src=\"https://i.ibb.co/QJ3grBh/rasp3.png\" alt=\"rasp3\" border=\"0\">");
        Answer answer16 = new Answer("<img src=\"https://i.ibb.co/T8xnSyK/rasp4.png\" alt=\"rasp4\" border=\"0\">");

        List<Answer> answers1 = List.of(answer1, answer2, answer3, answer4);
        List<Answer> answers2 = List.of(answer5, answer6, answer7, answer8);
        List<Answer> answers3 = List.of(answer9, answer10, answer11, answer12);
        List<Answer> answers4 = List.of(answer13, answer14, answer15, answer16);

        Question question1 = new Question("<img src=\"https://i.ibb.co/rx68MJs/matrice.png\" alt=\"matrice\" border=\"0\"></a>", answers1, chapter1, 0);
        Question question2 = new Question("<img src=\"https://i.ibb.co/rx68MJs/matrice.png\" alt=\"matrice\" border=\"0\"></a>", answers2, chapter2, 0);
        Question question3 = new Question("<img src=\"https://i.ibb.co/rx68MJs/matrice.png\" alt=\"matrice\" border=\"0\"></a>", answers3, chapter3, 0);
        Question question4 = new Question("<img src=\"https://i.ibb.co/rx68MJs/matrice.png\" alt=\"matrice\" border=\"0\"></a>", answers4, chapter1, 0);

        questionRepository.save(question1);
        questionRepository.save(question2);
        questionRepository.save(question3);
        questionRepository.save(question4);

        testRepository.save(new Test("Test 1", 9, "matematica", List.of(chapter1, chapter2, chapter3), List.of(question1, question2, question3, question4)));
        testRepository.save(new Test("Test 2", 9, "matematica", List.of(chapter1), List.of(question1, question2, question3, question4)));
        testRepository.save(new Test("Test 3", 9, "matematica", List.of(chapter1, chapter5), List.of(question1, question2, question3, question4)));
        testRepository.save(new Test("Test 4", 10, "matematica", List.of(chapter2, chapter3, chapter4), List.of(question1, question2, question3, question4)));
        testRepository.save(new Test("Test 5", 10, "matematica", List.of(chapter2, chapter3, chapter4), List.of(question1, question2, question3, question4)));
        testRepository.save(new Test("Test 6", 10, "matematica", List.of(chapter2, chapter3, chapter4), List.of(question1, question2, question3, question4)));
        testRepository.save(new Test("Test 7", 11, "matematica", List.of(chapter1, chapter2, chapter3), List.of(question1, question2, question3, question4)));
        testRepository.save(new Test("Test 8", 12, "matematica", List.of(chapter1, chapter2, chapter3), List.of(question1, question2, question3, question4)));
        testRepository.save(new Test("Test 9", 12, "matematica", List.of(chapter1, chapter2, chapter3), List.of(question1, question2, question3, question4)));
        testRepository.save(new Test("Test 1", 9, "informatica", List.of(chapter1, chapter2, chapter3), List.of(question1, question2, question3, question4)));
        testRepository.save(new Test("Test 2", 9, "informatica", List.of(chapter1, chapter2, chapter3), List.of(question1, question2, question3, question4)));
        testRepository.save(new Test("Test 3", 9, "informatica", List.of(chapter1, chapter2, chapter3), List.of(question1, question2, question3, question4)));


        Video video1 = new Video("Siruri", 9, "matematica", "Modalitati de a defini un sir, siruri marginite, siruri monotone", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video2 = new Video("Siruri", 9, "matematica", "Modalitati de a defini un sir, siruri marginite, siruri monotone", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video3 = new Video("Siruri", 9, "matematica", "Modalitati de a defini un sir, siruri marginite, siruri monotone", "https://www.youtube.com/watch?v=ysz5S6PUM-U");
        Video video4 = new Video("Siruri", 10, "matematica", "Modalitati de a defini un sir, siruri marginite, siruri monotone", "https://www.youtube.com/watch?v=ysz5S6PUM-U");

        videoRepository.save(video1);
        videoRepository.save(video2);
        videoRepository.save(video3);
        videoRepository.save(video4);
    }
}
