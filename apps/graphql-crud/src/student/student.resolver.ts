import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

const students = [
  {
    id: 1,
    name: 'John Doe',
    sex: true,
    age: 20,
  },
  {
    id: 2,
    name: 'Jane Doe',
    sex: false,
    age: 22,
  },
  {
    id: 3,
    name: 'mohamed',
    sex: true,
    age: 23,
  },
];

const teachers = [
  {
    id: 1,
    name: 'Teacher 1',
    age: 30,
    subject: ['Math', 'Physics'],
    students,
  },
];

@Resolver()
export class StudentResolver {
  @Query('students')
  students() {
    return students;
  }

  @Query('teachers')
  teachers() {
    return teachers;
  }

  @Query('studentById')
  studentById(@Args('id') id: number) {
    return students.find((item) => {
      return item.id === id;
    });
  }

  @Mutation()
  addStudent(
    @Args('name') name: string,
    @Args('age') age: number,
    @Args('sex') sex: boolean,
  ) {
    const id = Math.floor(Math.random() * 1000);
    students.push({
      id,
      name,
      age,
      sex,
    });
    return {
      id,
      success: true,
    };
  }

  @Mutation()
  updateStudent(
    @Args('id') id: number,
    @Args('name') name: string,
    @Args('age') age: number,
    @Args('sex') sex: boolean,
  ) {
    const index = students.findIndex((item) => {
      return item.id === id;
    });
    if (index === -1) {
      return {
        id: null,
        success: true,
      };
    }
    students[index].name = name;
    students[index].age = age;
    students[index].sex = sex;
    return {
      id,
      success: true,
    };
  }

  @Mutation()
  deleteStudent(@Args('id') id: number) {
    const index = students.findIndex((item) => {
      return item.id === id;
    });
    if (index === -1) {
      return {
        id: null,
        success: true,
      };
    }
    students.splice(index, 1);
    return {
      id,
      success: true,
    };
  }
}
