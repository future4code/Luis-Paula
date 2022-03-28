import { task } from '../types/task';
import { BaseDataBase } from './baseDataBase';

export class TaskDataBase extends BaseDataBase {
  selectTaskById = async (id: string): Promise<any> => {
    const result = await BaseDataBase.connection.raw(`
             SELECT tasks.*, nickname FROM to_do_list_tasks AS tasks
             JOIN to_do_list_users AS users
             ON author_id = users.id
             WHERE tasks.id = '${id}';
         `);

    return result[0][0];
  };

  insertTask = async (task: task) => {
    await BaseDataBase.connection('To_Do_List_Tasks').insert({
      id: task.id,
      title: task.title,
      description: task.description,
      deadline: task.deadline,
      author_id: task.authorId,
    });
  };
}
