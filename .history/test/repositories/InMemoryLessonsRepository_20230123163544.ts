import { Lesson } from '@prisma/client'
import { LessonsRepository, CreateLessonData } from "../../src/repositories/LessonsRepository";

export class PrismaLessonsRepository implements LessonsRepository {
    public items: Lesson[] = []

    async create(data: CreateLessonData) {

    }
}