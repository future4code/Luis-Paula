import { TaskDataBase } from '../data/taskDataBase';
import { taskData } from '../model/task';
import { GenerateId } from '../services/idGenerator';

const taskDB = new TaskDataBase();
const generateId = new GenerateId();

export class TaskBusiness {
  createTaskBusiness = async (taskData: taskData) => {
    if (
      !taskData.title ||
      !taskData.description ||
      !taskData.deadline ||
      !taskData.authorId
    ) {
      throw new Error(
        '"title", "description", "deadline" e "authorId" são obrigatórios'
      );
    }

    const id: string = generateId.generateId();

    await taskDB.insertTask({
      id,
      ...taskData,
    });
  };

  getTaskByIdBusiness = async (id: string) => {
    const result = await taskDB.selectTaskById(id);

    if (!result) {
      throw new Error('Tarefa não encontrada');
    }

    const taskWithUserInfo = {
      id: result.id,
      title: result.title,
      description: result.description,
      deadline: result.deadline,
      status: result.status,
      authorId: result.author_id,
      authorNickname: result.nickname,
    };

    return taskWithUserInfo;
  };
}
