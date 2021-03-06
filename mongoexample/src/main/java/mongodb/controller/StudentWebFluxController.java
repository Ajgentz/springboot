package mongodb.controller;

import mongodb.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mongodb.repository.StudentMongoRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("api/students")
public class StudentWebFluxController {

    @Autowired
    private StudentMongoRepository studentMongoRepository;

    @GetMapping("/{rollNo}")
    public Mono<ResponseEntity<Student>> getStudent(@PathVariable("rollNo") Integer rollNo) {
        Mono<Student> studentMonoObj = studentMongoRepository.findByRollNo(rollNo);
        return studentMonoObj.map(student -> ResponseEntity.ok(student))
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @GetMapping
    public Flux<Student> getAllStudent() {
        Flux<Student> allStudents = studentMongoRepository.findAll();
        return allStudents;
    }
}
