import { Lesson } from '@prisma/client'
import crypto from 'node:crypto';
import { LessonsRepository, CreateLessonData } from "../../src/repositories/LessonsRepository";

export class PrismaLessonsRepository implements LessonsRepository {
    public items: Lesson[] = []

    async create(data: CreateLessonData) {
        this.items.push({
            id: crypto.randomUUID(),
            ...data,
            description: data.description ?? null
        })
    }
}