package gps.s3.correctingtool.controller;

import gps.s3.correctingtool.repo.*;
import gps.s3.correctingtool.entity.*;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;

@RestController
@RequestMapping("/api/question")
public class QuestionController {
    private final IQuestionRepo qRepo;
    private final IChoiceRepo mcRepo;
    private final ITextAnswerRepo taRepo;

    public QuestionController(IQuestionRepo qRepo,
                              IChoiceRepo mcRepo,
                              ITextAnswerRepo taRepo){
        this.qRepo = qRepo;
        this.mcRepo = mcRepo;
        this.taRepo = taRepo;
    }

    @PostMapping("/create/{questionText}/{questionType}")
    public Question createQuestion(@PathVariable("questionText") String text,
                                   @PathVariable("questionType") int type){
        Question question = new Question();

        QuestionType questionType = type == 1 ? QuestionType.CHOICE : QuestionType.TEXT;
        question.setType(questionType);
        question.setText(text);

        qRepo.save(question);

        return qRepo.findById(question.getId());
    }

    @PostMapping("/addMcAnswer/{questionID}/{answerText}/{isCorrect}")
    public void CreateMcAnswer(@PathVariable("questionID") int questionID,
                               @PathVariable("answerText") String text,
                               @PathVariable("isCorrect") Boolean isCorrect){
        ChoiceAnswer mcAnswer = new ChoiceAnswer();
        mcAnswer.setQuestionId(questionID);
        mcAnswer.setText(text);
        mcAnswer.setCorrect(isCorrect);

        mcRepo.save(mcAnswer);
    }

    @PostMapping("/addTextAnswer/{questionID}/{answerText}")
    public void CreateTextAnswer(@PathVariable("questionID") int questionID,
                                 @PathVariable("answerText") String text){
        CorrectAnswer textAnswer = new CorrectAnswer();
        textAnswer.setQuestionId(questionID);
        textAnswer.setText(text);

        taRepo.save(textAnswer);
    }

    @RequestMapping("/find/all")
    public Collection<Question> GetAllQuestions(){
       return qRepo.findAll();
    }

    @RequestMapping("/mc/{questionID}")
    public Collection<ChoiceAnswer> GetMcAnswersByQuestion(@PathVariable("questionID") int questionID){
        return mcRepo.findByQuestionId(questionID);
    }
}