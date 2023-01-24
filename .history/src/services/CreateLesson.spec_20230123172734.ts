import { InMemoryLessonsRepository } from "../../test/repositories/InMemoryLessonsRepository";
import { CreateLesson } from "./CreateLesson";

describe('CreateLesson service', () => {
    it('should be able to create a new lesson', async () => {
        // Import DB fake in memory
        const inMemoryLessonsRepository = new InMemoryLessonsRepository()
        // Import services
        const createLesson = new CreateLesson(inMemoryLessonsRepository);

        await expect(createLesson.execute({
            title: 'Nova Aula'
        }))
            .resolves
            .not
            .toThrow()

        expect(inMemoryLessonsRepository.items).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    title: 'Nova Aula'
                })
            ]))
    })

    it('should NOT be able to create a new lesson', async () => {
        // Import DB fake in memory
        const inMemoryLessonsRepository = new InMemoryLessonsRepository()
        // Import services
        const createLesson = new CreateLesson(inMemoryLessonsRepository);

        await expect(createLesson.execute({
            title: 'Nova Aula'
        }))
            .rejects
            .toThrow()

        expect(inMemoryLessonsRepository.items).toEqual([])
    })
})

// test('create lesson', () => {
//     // Import DB fake in memory
//     const inMemoryLessonsRepository = new InMemoryLessonsRepository()
//     // Import services
//     const createLesson = new CreateLesson(inMemoryLessonsRepository);

//     expect(createLesson.execute({
//         title: 'Nova Aula'
//     }))
//     .resolves
//     .not
//     .toThrow()

//     expect(inMemoryLessonsRepository.items).toEqual(expect.arrayContaining([
//         expect.objectContaining({
//             title: 'Nova Aula'
//         })
//     ]))
// })