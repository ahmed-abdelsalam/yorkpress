import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

const Students: unknown[] = require('../seed/students');

export class seed1620695016301 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const students = await getRepository('student').save(Students);
        const questions = await getRepository('question').save([
            {
                description:
                    'Lorem ipsum dolor sit amet, in numquam saperet vel?',
                type: 'Text',
                correctAnswer:
                    'commune sit, inermis incorrupte est an. In vero liber sed. An persius epicurei vim, ex choro alienum pro.',
            },
            {
                description:
                    'Lorem ipsum dolor sit amet, in numquam saperet vel?',
                type: 'MCQ',
                choices:
                    'cidunt ius, utamur euripidis;m ei albucius necessitatibus;saepe malorum signiferumqu',
                correctAnswer: '1',
            },
            {
                description:
                    'Lorem ipsum dolor sit amet, in numquam saperet vel?',
                type: 'Dichotomous',
                correctAnswer: 'true',
            },
        ]);
        const assignment = await getRepository('assignment').save({
            name: 'Assignment #1: Revision on the first chapter',
            startDate: new Date(),
            questions: questions,
        });
        const classrooms = await getRepository('class_room').save([
            {
                name: 'Kinder Garden 1',
                school: 'schYpEN01',
                students: students.slice(0, students.length / 2),
                assignments: [assignment],
            },
            {
                name: 'Kinder Garden 2',
                school: 'schYpEN01',
                students: students.slice(students.length / 2),
                assignments: [assignment],
            },
        ]);

        // const userRoleSeed: any = Students;
        // userRoleSeed.permissions = permissions;
        // await getRepository('roles').save(userRoleSeed);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
