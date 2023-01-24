import { InMemoryLessonsRepository } from "../../test/repositories/InMemoryLessonsRepository";
import { CreateLesson } from "./CreateLesson";

test('create lesson', () => {

    const inMemoryLessonsRepository = new InMemoryLessonsRepository()
    //Import services
    const createLesson = new CreateLesson(inMemoryLessonsRepository);

    expect(createLesson.execute({
        title: 'Nova Aula'
    }))
    .resolves
    .not
    .toThrow()

    expect(inMemoryLessonsRepository.items).toEqual(expect.arrayContaining([
        expect.objectContaining({
            title: 'Nova Aula'
        })
    ]))
})