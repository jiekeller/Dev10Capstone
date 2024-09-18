package learn.nlp.controllers;

import learn.nlp.domain.NLPService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/nlp")
public class NLPController {
    private final NLPService service;

    public NLPController(NLPService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<Double> getWordToWordSimilarity(@RequestBody Map<String, String> words) {
        return new ResponseEntity<>(service.wordToWordSimilarity(words.get("word1"), words.get("word2")).getPayload(), HttpStatus.OK);
    }

    @GetMapping
    @RequestMapping("/closest")
    public ResponseEntity<String[]> getClosestWords(@RequestBody Map<String, Object> data) {
        return new ResponseEntity<>(service.closestWords((String) data.get("word"), (int) data.get("n")).getPayload(), HttpStatus.OK);
    }

    @GetMapping
    @RequestMapping("/vector")
    public ResponseEntity<double[]> getWordVector(@RequestBody Map<String, String> data) {
        return new ResponseEntity<>(service.getWordVector(data.get("word")).getPayload().toDoubleVector(), HttpStatus.OK);
    }

    @GetMapping
    @RequestMapping("/document")
    public ResponseEntity<Double> getWordToDocumentSimilarity(@RequestBody Map<String, String> data) {
        return new ResponseEntity<>(service.wordToDocumentSimilarity(data.get("word"), data.get("document")).getPayload(), HttpStatus.OK);
    }

    @GetMapping
    @RequestMapping("/sentiment")
    public ResponseEntity<String> getSentiment(@RequestBody Map<String, String> data) {
        return new ResponseEntity<>(service.getSentiment(data.get("text")).getPayload(), HttpStatus.OK);
    }

    @GetMapping
    @RequestMapping("/entities")
    public ResponseEntity<String> getEntities(@RequestBody Map<String, String> data) {
        return new ResponseEntity<>(service.getNamedEntities(data.get("text")).getPayload(), HttpStatus.OK);
    }
}
