import { CreateLesson } from "./CreateLesson";

test('create lesson', () => {
    //Import services
    const createLesson = new CreateLesson({
        create: async(data) => {}
    });

    expect(createLesson.execute({
        title: 'Nova Aula'
    }))
    .resolves
    .not
    .toThrow()
})