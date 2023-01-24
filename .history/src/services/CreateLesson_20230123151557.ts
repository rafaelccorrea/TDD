import { LessonsRepository } from "../repositories/LessonsRepository";

interface CreateLessonRequest {
    title: string
    description?: string
}

export class CreateLesson {
    constructor(
        private lessonsRepository: LessonsRepository
    ) {}

    async execute() {

    }
}